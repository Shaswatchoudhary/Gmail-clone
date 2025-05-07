import { Box, Button , styled , List , ListItem} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./composeMail";
import { useState } from "react";
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
        & > a > li {
            display: flex;
            align-items: center;
            height: 40px;
            padding: 0 16px;
            margin-bottom: 4px;
            border-radius: 0 20px 20px 0;
            transition: background-color 0.2s;
            &:hover {
                background-color: #f5f5f5;
            }
            & > svg {
                margin-right: 20px;
            }
        }
    }
`

const SideBarContent = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const onComposeClick = () => {
        setOpenDialog(true);
    }

    return (
        
        <Container>   
            <StyledButton onClick={() => onComposeClick()}>
                <CreateIcon />Compose
                </StyledButton>
            
               <List>
                {SIDEBAR_DATA.map(data => (
                    <ListItem>
                        <data.icon fontSize="small"/>{data.title}

                    </ListItem>
                ))}
               </List>
            <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Container>
        
    )
}
export default SideBarContent