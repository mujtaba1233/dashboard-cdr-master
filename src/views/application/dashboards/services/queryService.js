import axios from 'axios';
import { URL } from '../utility/url';


const config = {
    headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token}`,
    }
}

export async function addComapny(body) {
    return await axios.post(URL + '/add-company', body, config);
}


export async function getCompanies() {
    return await axios.get(URL + '/get-companies', config);
}

export async function uploadFile(body) {
    return await axios.post(URL + '/insert-queries', body, config);
}
