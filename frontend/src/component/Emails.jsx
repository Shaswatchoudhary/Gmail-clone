
import { useOutletContext } from "react-router-dom"
const Emails = () => {
    const {openDrawer} = useOutletContext()
    return (
        <>
        <div style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }> hello from emails</div>
        </>
    )
}

export default Emails