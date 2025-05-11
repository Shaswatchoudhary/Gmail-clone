import { AppBar , Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { styled } from "@mui/material/styles";
import { gmaillogo } from "../constraints/constraints";
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import AppsOutlined from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';


const StyledAppBar = styled(AppBar)({
    backgroundColor: "#F5F5F5",
    boxShadow: "none",
})

const SearchWrapper = styled(Box)`
    background: #EAF1FB;
    margin-left: 80px;
    border-radius: 8px;
    min-width: 690px;
    max-width: 720px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    & > div {
        width: 100%
    }
`
const OptionsWrapper = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: end;
    & > svg {
        margin-left: 20px;
    }
`
const Header = ({ toggleDrawer }) => {

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <MenuIcon color="action" onClick={toggleDrawer} />
                <img src={gmaillogo} alt="logo" style={{ width: 110, marginLeft: 15 }} />
                <SearchWrapper>
                    <SearchIcon color="action" />
                    <InputBase  placeholder=" Search mail" />

                    <TuneIcon  color="action"/>
                </SearchWrapper>

                <OptionsWrapper>
                    <HelpOutlineOutlined color="action" />
                    <SettingsOutlined color="action" />
                    <AppsOutlined color="action" />
                    <AccountCircleOutlined color="action" />
               </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header