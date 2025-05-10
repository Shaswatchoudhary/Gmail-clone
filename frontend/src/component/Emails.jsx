import { useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { API_URL } from "../service/api.url"
import useApi from "../hooks/useApi"
import {Checkbox} from "@mui/material"
import {Box} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {List } from "@mui/material"
import { useEffect, useState } from "react"
import Email from "./Email"

const Emails = () => {

    const [selectedEmails,setSelectedEmails] = useState([])
    const {openDrawer} = useOutletContext()
    const [refreshScreen,setRefreshScreen] = useState(false)
    
    const {type} = useParams()
    const getEmailsService = useApi(API_URL.getEmailFromType)
    const moveEmailsToBinService = useApi(API_URL.moveEmailsToBin)  
    useEffect(() => {
        getEmailsService.call({},type)
    },[type,refreshScreen])

    const SelectedAllEmails = (e) => {
        if(e.target.checked){
            const emails = getEmailsService?.response?.map(email => email._id)
            setSelectedEmails(emails)
        }else{
            setSelectedEmails([])
        }
    }
   const deleteSelectedEmails = () => {
       if (type === 'bin') {

           // Handle bin emails differently if needed
       } else {
           moveEmailsToBinService.call({ selectedEmails })
               .then(() => {
                   // Refresh the emails list after deletion
                   getEmailsService.call({}, type);
                   setRefreshScreen(prevstate => !prevstate)
               })
               .catch(error => {
                   console.error("Error moving emails to bin:", error);
               });
       }
   };
   
    return (
        <>
        <Box style={openDrawer ? { marginLeft: 250, width: 'calc(100% - 250px)' } : { width: '100%' } }> 
           <Box style={{padding: '20px 10px 0 10px', display: 'flex', alignItems: 'center'}}>
          <Checkbox size="small" onChange={(e) => SelectedAllEmails(e)}/>
          <DeleteIcon onClick={(e)=>deleteSelectedEmails(e)}/>
            </Box>
            <Box>
                <List>
                    {
                       getEmailsService?.response?.map(email => (
                        <Email 
                            key={email._id}
                            email={email}
                            selectedEmails={selectedEmails}
                            setSelectedEmails={setSelectedEmails}
                            setRefreshScreen={setRefreshScreen}
                        />
                    ))
                }
                </List>
            
            </Box>
            </Box>
        </>
    )
}

export default Emails