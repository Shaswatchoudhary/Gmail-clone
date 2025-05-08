import Header from "../component/header";
import Sidebar from "../component/sidebar";
import {useState} from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import SuspenseLoader from "../component/common/SuspenseLoader";
import { Box } from "@mui/material";
function Main() {
    const [openDrawer, setOpenDrawer] = useState(true);

     const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return (
        <>
        <Header toggleDrawer={toggleDrawer} />
        <Box>
        <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        <Suspense fallback={<SuspenseLoader />}>
       <Outlet context={{openDrawer}}/>
    
       </Suspense>
       </Box>
        </>
    )
}

export default Main