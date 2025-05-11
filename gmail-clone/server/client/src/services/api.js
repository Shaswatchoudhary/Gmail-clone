import axios from 'axios';

// ✅ Use the value from .env
const API_URI = process.env.REACT_APP_API_URI;

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}${type ? `/${type}` : ''}`,
        data: requestData
    });
};

export default API_GMAIL;
