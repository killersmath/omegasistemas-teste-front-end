import axios from 'axios';

const APIURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export const fetchStatesData = async () => {
    return axios.get(APIURL, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((result) => result.data);
};

