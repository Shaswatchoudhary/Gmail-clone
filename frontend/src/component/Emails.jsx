import { useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { API_URL } from "../service/api.url"
import useApi from "../hooks/useApi"
import { useEffect } from "react"
const Emails = () => {
    const {openDrawer} = useOutletContext()

    const {type} = useParams()
    const getEmailsService = useApi(API_URL.getEmailFromType)

    useEffect(() => {
        getEmailsService.call({},type)
    },[type])
    return (
        <>
        <div style={openDrawer ? { marginLeft: 250, width: '100%' } : { width: '100%' } }> hello from emails</div>
        </>
    )
}

export default Emails