const BASE_URL = process.env.REACT_APP_API_URI || '';

export const API_URLS = {
    saveSentEmails: {
        endpoint: `${BASE_URL}/save`,
        method: 'POST'
    },
    saveDraftEmails: {
        endpoint: `${BASE_URL}/save-draft`,
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: `${BASE_URL}/emails`,  // Append /:type when calling
        method: 'GET'
    },
    toggleStarredMails: {
        endpoint: `${BASE_URL}/starred`,
        method: 'POST'
    },
    deleteEmails: {
        endpoint: `${BASE_URL}/delete`,
        method: 'DELETE'
    },
    moveEmailsToBin: {
        endpoint: `${BASE_URL}/bin`,
        method: 'POST'
    }
};
