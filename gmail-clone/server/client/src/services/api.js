import axios from 'axios';

const API_URI = process.env.REACT_APP_API_URI;

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    const baseUrl = API_URI.endsWith('/') ? API_URI.slice(0, -1) : API_URI;
    const endpoint = serviceUrlObject.endpoint.startsWith('/') ? serviceUrlObject.endpoint.slice(1) : serviceUrlObject.endpoint;
    const typePath = type ? `/${type}` : '';

    return await axios({
        method: serviceUrlObject.method,
        url: `${baseUrl}/${endpoint}${typePath}`,
        data: requestData,
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
        },
    });
};

export default API_GMAIL;
