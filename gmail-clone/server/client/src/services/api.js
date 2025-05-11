import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    // Destructure only needed properties from requestData
    const { ...body } = requestData;

    // Ensure the base URL doesn't end with a slash
    const baseUrl = API_URI.endsWith('/') ? API_URI.slice(0, -1) : API_URI;
    
    // Make sure endpoint doesn't start with a slash
    const endpoint = serviceUrlObject.endpoint.startsWith('/') 
        ? serviceUrlObject.endpoint.slice(1) 
        : serviceUrlObject.endpoint;

    // Append type if available
    const typePath = type ? `/${type}` : '';

    // Use axios to make the request
    return await axios({
        method: serviceUrlObject.method,
        url: `${baseUrl}/${endpoint}${typePath}`,
        data: body,  // Use the actual body data
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    });
};

export default API_GMAIL;
