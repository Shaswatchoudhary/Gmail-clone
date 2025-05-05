import Header from "../component/header";
import Sidebar from "../component/sidebar";
import {useState} from "react";
function Main() {
    const [openDrawer, setOpenDrawer] = useState(true);

     const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    return (
        <>
        <Header toggleDrawer={toggleDrawer} />
        <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
        <div>
            hello
        </div>
        </>
    )
}

export default Main