import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Snackbar, Alert, CircularProgress } from '@mui/material';

import { useState, useEffect, useRef } from 'react';
import useApi from '../hooks/useApi';
import { API_URL } from '../service/api.url';

// Fixed styled components syntax
const dialogStyle = {
    width: "80%",
    height: "90%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    borderRadius: "10px 10px 0 0"
};

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    background: #f2f6fc;
    & > p {
        font-size: 14px;
        font-weight: 500;
    }
`;

const RecipientWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    & > div {
        font-size: 14px;
        border-bottom: 1px solid #F5F5F5;
        margin-top: 10px;
    }
`;

const Footer = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    align-items: center;
`;

const SendButton = styled(Button)`
    background: #0B57D0;
    color: #fff;
    font-weight: 500;
    text-transform: none;
    border-radius: 18px;
    width: 100px;
`;

const DraftIndicator = styled(Box)`
    position: absolute;
    bottom: 60px;
    left: 15px;
    display: flex;
    align-items: center;
    color: #5f6368;
    font-size: 13px;
`;

const ComposeMail = ({ openDialog, setOpenDialog }) => {
    const [data, setData] = useState({
        to: "",
        subject: "",
        body: ""
    });
    
    // Added state for notifications
    const [notification, setNotification] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    
    // Track if draft is being saved
    const [draftStatus, setDraftStatus] = useState({
        saving: false,
        lastSaved: null,
        error: null,
        draftId: null // Track the current draft ID for updates
    });
    
    // Use ref to track changes
    const dataRef = useRef(data);
    const hasUnsavedChanges = useRef(false);
    
    // Using your specific API structure
    const sentEmailService = useApi(API_URL.saveSentEmail);
    const draftEmailService = useApi(API_URL.saveDraftEmail);

    const config = {
        Host: "smtp.elasticemail.com",
        Username: "smilejack42@gmail.com",
        Password: "416D76FCFE69BFC7866E860058AB0B285870",
        Port: 2525,
    };

    // Update ref when data changes
    useEffect(() => {
        dataRef.current = data;
        hasUnsavedChanges.current = true;
        console.log("Content changed, unsaved changes:", data);
    }, [data]);

    // Set up auto-save for drafts
    useEffect(() => {
        // Don't set timer if dialog isn't open
        if (!openDialog) return;

        const draftTimer = setInterval(() => {
            // Only save if there's content, dialog is open, and there are unsaved changes
            if (openDialog && hasUnsavedChanges.current && 
                (dataRef.current.to || dataRef.current.subject || dataRef.current.body)) {
                console.log("Auto-saving draft...");
                saveDraft();
            }
        }, 10000); // Auto-save draft every 10 seconds if there's content
        
        return () => clearInterval(draftTimer);
    }, [openDialog]);
    
    // Monitor draft API response
    useEffect(() => {
        if (draftEmailService.loading) {
            console.log("Draft API call in progress...");
            setDraftStatus(prev => ({...prev, saving: true}));
        } else if (draftEmailService.response) {
            console.log("Draft API call successful:", draftEmailService.response);
            
            // Update draft ID if available in response
            const newDraftId = draftEmailService.response.id || 
                               draftEmailService.response._id || 
                               draftStatus.draftId;
            
            setDraftStatus({
                saving: false,
                lastSaved: new Date(),
                error: null,
                draftId: newDraftId
            });
            
            setNotification({
                open: true,
                message: 'Draft saved',
                severity: 'success'
            });
            
            hasUnsavedChanges.current = false;
        } else if (draftEmailService.error) {
            console.error("Draft API call failed:", draftEmailService.error);
            setDraftStatus(prev => ({
                ...prev,
                saving: false,
                error: draftEmailService.error
            }));
            
            setNotification({
                open: true,
                message: 'Failed to save draft',
                severity: 'error'
            });
        }
    }, [draftEmailService.loading, draftEmailService.response, draftEmailService.error]);

    const saveDraft = () => {
        if (draftStatus.saving) {
            console.log("Draft save already in progress, skipping...");
            return;
        }
        
        // Don't save if no content
        if (!dataRef.current.to && !dataRef.current.subject && !dataRef.current.body) {
            console.log("No content to save as draft");
            return;
        }
        
        console.log("Saving draft with data:", dataRef.current);
        
        // Create draft email object
        const draftEmail = {
            to: dataRef.current.to,
            from: "smilejack42@gmail.com",
            subject: dataRef.current.subject,
            body: dataRef.current.body,
            date: new Date().toISOString(), // Ensure consistent date format
            image: "",
            name: "code with shaswat",
            isStarred: false,
            type: "drafts"
        };
        
        // If we have a draft ID, include it for updates
        if (draftStatus.draftId) {
            draftEmail.id = draftStatus.draftId;
            // or draftEmail._id = draftStatus.draftId; depending on your API
        }
        
        // Log the API call
        console.log("Calling draft API with:", draftEmail);
        
        // Make the API call - with your specific API structure
        try {
            draftEmailService.call(draftEmail);
        } catch (err) {
            console.error("Error calling draft API:", err);
            setNotification({
                open: true,
                message: 'Error saving draft: ' + err.message,
                severity: 'error'
            });
        }
    };

    const closeComposeMail = (e) => {
        e.preventDefault();
        // Save draft if there's any content and unsaved changes
        if (hasUnsavedChanges.current && (dataRef.current.to || dataRef.current.subject || dataRef.current.body)) {
            console.log("Saving draft before closing...");
            saveDraft();
        }
        
        // Reset state when closing
        setData({
            to: "",
            subject: "",
            body: ""
        });
        
        setDraftStatus({
            saving: false,
            lastSaved: null,
            error: null,
            draftId: null
        });
        
        hasUnsavedChanges.current = false;
        
        console.log("Closing compose mail dialog");
        setOpenDialog(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        console.log("Attempting to send email:", data);

        if (window.Email) {
            try {
                window.Email.send({
                    ...config,
                    To: data.to,
                    From: "smilejack42@gmail.com",
                    Subject: data.subject,
                    Body: data.body
                }).then(
                    message => {
                        console.log("Email sent successfully:", message);
                        
                        setNotification({
                            open: true,
                            message: 'Email sent successfully',
                            severity: 'success'
                        });
                        
                        // Using your specific API structure
                        sentEmailService.call({
                            to: data.to,
                            from: "smilejack42@gmail.com",
                            subject: data.subject,
                            body: data.body,
                            date: new Date().toISOString(),
                            image: "",
                            name: "code with shaswat",
                            isStarred: false,
                            type: "sent"
                        });
                        
                        // Delete the draft if it exists
                        if (draftStatus.draftId) {
                            // You'll need to implement a deleteDraft API call here
                            // Or mark it as sent in your backend
                            console.log("Should delete draft with ID:", draftStatus.draftId);
                        }
                    }
                ).catch(error => {
                    console.error("Error sending email:", error);
                    setNotification({
                        open: true,
                        message: 'Failed to send email: ' + error,
                        severity: 'error'
                    });
                });
            } catch (error) {
                console.error("Exception when sending email:", error);
                setNotification({
                    open: true,
                    message: 'Exception when sending email: ' + error.message,
                    severity: 'error'
                });
            }
        } else {
            console.error("window.Email is not available");
            setNotification({
                open: true,
                message: 'Email sending not available',
                severity: 'error'
            });
        }

        // Reset the form and close dialog
        setData({
            to: "",
            subject: "",
            body: ""
        });
        
        setDraftStatus({
            saving: false,
            lastSaved: null,
            error: null,
            draftId: null
        });
        
        hasUnsavedChanges.current = false;
        setOpenDialog(false);
    };

    const onValueChange = (e) => {
        console.log(`Field ${e.target.name} changed to: ${e.target.value}`);
        setData({ ...data, [e.target.name]: e.target.value });
    };
    
    const handleCloseNotification = () => {
        setNotification({...notification, open: false});
    };
    
    // Format last saved time
    const getLastSavedText = () => {
        if (!draftStatus.lastSaved) return "Not saved yet";
        
        // Format time like "3:45 PM"
        return `Last saved at ${draftStatus.lastSaved.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}`;
    };

    // Force a manual save draft
    const handleSaveDraft = () => {
        hasUnsavedChanges.current = true;
        saveDraft();
    };

    return (
        <>
            <Dialog 
                open={openDialog} 
                onClose={closeComposeMail}
                PaperProps={{
                    sx: dialogStyle
                }}
            >
                <Header>
                    <Typography>New message</Typography>
                    <CloseIcon fontSize='small' onClick={(e) => closeComposeMail(e)} />
                </Header>
                
                <RecipientWrapper>
                    <InputBase 
                        placeholder="Recipient" 
                        name="to" 
                        onChange={(e) => onValueChange(e)} 
                        value={data.to}
                    />
                    <InputBase 
                        placeholder="Subject" 
                        name="subject" 
                        onChange={(e) => onValueChange(e)} 
                        value={data.subject}
                    />
                </RecipientWrapper>
                
                <TextField
                    multiline
                    rows={17}
                    sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                    name="body"
                    onChange={(e) => onValueChange(e)}
                    value={data.body}
                />
                
                <DraftIndicator>
                    {draftStatus.saving ? (
                        <>
                            <CircularProgress size={14} sx={{ mr: 1 }} />
                            <Typography variant="body2">Saving draft...</Typography>
                        </>
                    ) : draftStatus.error ? (
                        <Typography variant="body2" color="error">
                            Failed to save draft
                        </Typography>
                    ) : (
                        <Typography variant="body2">
                            {getLastSavedText()}
                        </Typography>
                    )}
                </DraftIndicator>
                
                <Footer>
                    <SendButton onClick={sendEmail}>Send</SendButton>
                    <Button 
                        variant="outlined"
                        size="small" 
                        onClick={handleSaveDraft}
                        sx={{ marginRight: 2 }}
                        disabled={draftStatus.saving}
                    >
                        {draftStatus.saving ? (
                            <>
                                <CircularProgress size={14} sx={{ mr: 1 }} />
                                Saving...
                            </>
                        ) : "Save Draft"}
                    </Button>
                    <DeleteIcon onClick={closeComposeMail} />
                </Footer>
            </Dialog>
            
            <Snackbar 
                open={notification.open} 
                autoHideDuration={3000} 
                onClose={handleCloseNotification}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert 
                    onClose={handleCloseNotification} 
                    severity={notification.severity}
                >
                    {notification.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ComposeMail;