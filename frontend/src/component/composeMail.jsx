import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import {styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import { useState } from 'react';
import useApi from '../hooks/useApi';
import { API_URL } from '../service/api.url';
    const dialogStyle = {
        width:"80%",
        height:"90%",
        maxWidth:"100%",
        maxHeight:"100%",
        boxShadow:"none",
        borderRadius:"10px 10px 0 0"
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
const ComposeMail = ({openDialog,setOpenDialog}) => {
    const [data, setData] = useState({
        to: "",
        subject: "",
        body: ""
    })
    const sentEmailService = useApi(API_URL.saveSentEmail)
   

    const config ={
        
            Host : "smtp.elasticemail.com",
            Username : "smilejack42@gmail.com",
            Password : "416D76FCFE69BFC7866E860058AB0B285870",
            Port : 2525,
    
}

    const closeComposeMail = (e) => {
        e.preventDefault();
        setOpenDialog(false);
    }


    const sendEmail = async (e) => {
        e.preventDefault();

        if(window.Email){
        window.Email.send({...config,
            To : data.to,
            From : "smilejack42@gmail.com",
            Subject : data.subject,
            Body : data.body
        }).then(
          message => alert(message)
        ); 
    }
    const payload = {
        to:data.to,
        from:"smilejack42@gmail.com",
        subject:data.subject,
        body:data.body,
        date:new Date(),
        image:"",
        name:"code with shaswat",
        isStarred:false,
        type:"sent"
       
    }
    sentEmailService.call(payload)

    if(!sentEmailService.error){
        setOpenDialog(false)
        setData({})
    }else {

    }
   
        setOpenDialog(false);
}
const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
}
    return (
        <>
        <Dialog open={openDialog} 
        PaperProps={{
            sx:dialogStyle
        }}
            
        > 

       <Header>
        <Typography>New message</Typography>
        <CloseIcon fontSize='small' onClick={(e) => closeComposeMail(e)}/>
       </Header>
       
        <RecipientWrapper>
        <InputBase placeholder="Recipient"name="to"onChange={(e) => onValueChange(e)} />
        <InputBase placeholder="Subject" name="subject" onChange={(e) => onValueChange(e)} />
        </RecipientWrapper>
        
        <TextField  multiline
                rows={17}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="body"
                onChange={(e) => onValueChange(e)}
                />
        <Footer>
        <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
        <DeleteIcon onClick={(e) =>setOpenDialog(false)}/>
       </Footer>
        </Dialog>
            
        
        
        </>
    )
}


export default ComposeMail