import { useState } from "react";
import API_GMAIL from "../service/api";

const useApi = (urlObject) => {
    const [response,setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(false)
    const call = async (payload) => {
        setResponse(null)
        setError("");
        setLoading(true)

        try {
           
            let response = await API_GMAIL(urlObject,payload)
            setResponse(response.data)
            
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    return {response,error,loading,call}
}

export default useApi
