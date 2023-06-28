import axios from "axios"
const baseUrl = 'http://kids24.iambenyamin.com/';

const token = localStorage.getItem('token')

const Api = (_config, body = null, headers) => {
    let config = {
        baseURL: baseUrl,
        method: 'GET',
        headers: {
            
            // 'content-Type': 'application/json; charset=utf-8',
            // "accept": 'text/plain',
            ...(token ? {"Authorization": token} : {}),
            ...headers
        },
        ..._config,
        ...(body ? {data: {
            ...body
        }} : null)
    }

    return axios(config)
}

export default Api
