import { useState } from 'react';

import { Dialog, styled, Typography, Box, InputBase, TextField, Button } from '@mui/material'; 
import { Close, DeleteOutline } from '@mui/icons-material';
import useApi from '../hooks/useApi';
import { API_URLS } from '../services/api.urls';

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

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
`

const ComposeMail = ({ open, setOpenDrawer }) => {
    const [data, setData] = useState({});
    const [isSending, setIsSending] = useState(false);
    const sentEmailService = useApi(API_URLS.saveSentEmails);
    const saveDraftService = useApi(API_URLS.saveDraftEmails);

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const sendEmail = async (e, isDraft = false) => {
        e.preventDefault();
        if (isSending) return;
        
        setIsSending(true);

        const payload = {
            to: data.to,
            from: "smilejack42@gmail.com",
            subject: data.subject,
            body: data.body,
            date: new Date(),
            image: '',
            name: 'hello shaswat',
            starred: false,
            type: isDraft ? 'drafts' : 'sent'
        }

        try {
            console.log('Preparing to send email with payload:', payload);
            
            let response;
            if (isDraft) {
                console.log('Saving as draft...');
                response = await saveDraftService.call(payload);
            } else {
                console.log('Sending email...');
                response = await sentEmailService.call(payload);
            }
            
            console.log('API Response:', response);
            
            if (response && response.status >= 200 && response.status < 300) {
                setOpenDrawer(false);
                setData({});
            } else {
                const errorMsg = response?.data?.message || 'Failed to send email. Please try again.';
                console.error('API Error:', errorMsg);
                alert(errorMsg);
            }
        } catch (error) {
            console.error('Error in sendEmail:', {
                error: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            
            const errorMessage = error.response?.data?.message || 
                               error.message || 
                               'Failed to process your request. Please check your connection and try again.';
            alert(`Error: ${errorMessage}`);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <Dialog
            open={open}
            PaperProps={{ sx: dialogStyle }}
        >
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={(e) => sendEmail(e, true)} />
            </Header>
            <RecipientWrapper>
                <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
                <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject} />
            </RecipientWrapper>
            <TextField 
                multiline
                rows={20}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                value={data.body}
            />
            <Footer>
                <SendButton 
                    onClick={(e) => sendEmail(e, false)}
                    disabled={isSending}
                >
                    {isSending ? 'Sending...' : 'Send'}
                </SendButton>
                <Button 
                    onClick={(e) => sendEmail(e, true)}
                    disabled={isSending}
                >
                    Save Draft
                </Button>
                <DeleteOutline onClick={() => setOpenDrawer(false)} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;