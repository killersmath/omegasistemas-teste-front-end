import axios from 'axios';

const APIURL_ALL: string = "https://covid19-brazil-api.now.sh/api/report/v1"
const APIURL_PER_STATE: string = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/";

export const fetchAllCovidData = () => {
    return axios.get(APIURL_ALL, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((result) => result.data.data);
}

export const fetchCovidData = (sigla: String) => {
    return axios.get(APIURL_PER_STATE + sigla, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((result) => result.data);
}