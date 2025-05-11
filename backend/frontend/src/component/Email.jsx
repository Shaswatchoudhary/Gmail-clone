import { Checkbox } from "@mui/material"
import {styled} from "@mui/material/styles"
import {StarBorder , Star} from "@mui/icons-material"
import {Typography} from "@mui/material"
import {ListItem} from "@mui/material"
import {Box} from "@mui/material"

import {useNavigate} from "react-router-dom"
import { routes } from "../routes/routes"
import useApi from "../hooks/useApi"
import { API_URL } from "../service/api.url"

const Wrapper = styled(ListItem)`
    padding: 0 0 0 10px;
    background: #f2f6fc;
    cursor: pointer;
    & > div {
        display: flex;
        width: 100%
    }
    & > div > p {
        font-size: 14px;
    }
`;

const Indicator = styled(Typography)`
    font-size: 12px !important;
    background: #ddd;
    color: #222;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 4px;
`;

const Date = styled(Typography)({
    marginLeft: 'auto',
    marginRight: 20,
    fontSize: 12,
    color: '#5F6368'
})
const Email = ({email , selectedEmails, setSelectedEmails, setRefreshScreen}) => {
    const navigate = useNavigate()
    const toggleStarredMailsService = useApi(API_URL.toggleStarredMails)

    const toggleStarredMails = (emailId) => {
        toggleStarredMailsService.call({id : emailId , value : !email.starred})
        setRefreshScreen(prevState => !prevState)
    }
    return (
      <Wrapper>
        <Checkbox size="small" checked={selectedEmails.includes(email._id)}
        onChange={(e) => {
            if (e.target.checked) {
                setSelectedEmails(prevState => [...prevState, email._id]);
            } else {
                setSelectedEmails(prevState => prevState.filter(id => id !== email._id));
            }
        }}
        />

        { 
                email.starred ? 
                    <Star fontSize="small" style={{ marginRight: 10 , color : '#FFD200'}} onClick={() => toggleStarredMails(email._id)} />
                : 
                    <StarBorder fontSize="small" style={{ marginRight: 10 }} onClick={() => toggleStarredMails(email._id)} /> 
            }
        <Box onClick={() => navigate(routes.view.path,{state:{email : email}})}>
        <Typography style={{width:200 , overflow:'hidden'}}>{email.name}</Typography>
        <Indicator>
            {email.type
                ? email.type.charAt(0).toUpperCase() + email.type.slice(1)
                : 'Inbox'}
        </Indicator>
        <Typography>{email.subject} {email.body && '-'} {email.body}</Typography>
<Date>{new window.Date(email.date).getDate()}
    {new window.Date(email.date).toLocaleString('default', { month: 'long' })}
    
</Date>
      </Box>
      </Wrapper>
    )
}

export default Email