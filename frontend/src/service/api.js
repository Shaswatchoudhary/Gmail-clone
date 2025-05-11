import axios from 'axios';

const API_URI = 'http://localhost:3001';  // Changed from 8002 to 3001

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;
    
    // Construct the base URL
    let url = `${API_URI}${serviceUrlObject.endpoint.startsWith('/') ? '' : '/'}${serviceUrlObject.endpoint}`;
    
    // Add type to URL if provided
    if (type) {
        url += url.endsWith('/') ? type : `/${type}`;
    }

    return await axios({
        method: serviceUrlObject.method,
        url: url,
        data: body,
        params: params
    });
}

export default API_GMAIL;