import axios from 'axios';

const APIURL: string = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/";

export const fetchCovidData = (sigla: String) => {
    return axios.get(APIURL + sigla, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((result) => result.data);
}