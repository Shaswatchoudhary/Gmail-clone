import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI || '';

const API_GMAIL = async (serviceUrlObject, requestData = {}) => {
    const { ...body } = requestData;

    // Ensure the base URL doesn't end with a slash
    const baseUrl = API_URI.endsWith('/') ? API_URI.slice(0, -1) : API_URI;
    
    // Get the endpoint, ensuring it doesn't start with a slash
    let endpoint = serviceUrlObject.endpoint || '';
    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    // Construct the full URL
    const url = endpoint ? `${baseUrl}/${endpoint}` : baseUrl;

    console.log('API Request:', {
        method: serviceUrlObject.method,
        url,
        data: body
    });

    try {
        const response = await axios({
            method: serviceUrlObject.method,
            url,
            data: body,
            // In your api.js file, update the headers
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        console.log('API Response:', {
            status: response.status,
            data: response.data
        });
        
        return response;
    } catch (error) {
        console.error('API Error:', {
            url,
            method: serviceUrlObject.method,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        
        // Create a custom error with more details
        const apiError = new Error(error.response?.data?.message || error.message);
        apiError.response = error.response;
        throw apiError;
    }
};

export default API_GMAIL;
