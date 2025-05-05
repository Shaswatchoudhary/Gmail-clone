
import { Box, Button , styled , List , ListItem} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { SIDEBAR_DATA } from "../config/sidebar.config";
const StyledButton = styled(Button)`
    background-color: #c2e7ff;
    color: #001d35;
    padding: 15px;
    border-radius: 16px;
    min-width: 140px;
    text-transform: none;
`
const Container = styled(Box)`
    padding: 8px;
    & > ul {
        padding: 10px 0 0 5px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        & > a {
            text-decoration: none;
            color: inherit;
        }
        & > a > li > svg {
            margin-right: 20px;
        }
    }
`

const SideBarContent = () => {
    return (
        
        <Container>   
            <StyledButton>
                <CreateIcon />Compose
                </StyledButton>
            
               <List>
                {SIDEBAR_DATA.map(data => (
                    <ListItem>
                        <data.icon fontSize="small"/>{data.title}

                    </ListItem>
                ))}
               </List>
            
        </Container>
        
    )
}
export default SideBarContent