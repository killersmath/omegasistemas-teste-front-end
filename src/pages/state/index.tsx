import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

import { Container, InfoHeader, InfoContainer, InfoWrapper, InfoLabel, InfoData } from './style';
import { fetchCovidData } from 'api/covid'

interface ParamTypes {
    uf: string;
}

interface ICovidData {
    "uid": number,
    "uf": string,
    "state": string,
    "cases": number,
    "deaths": number,
    "suspects": number,
    "refuses": number,
    "datetime": string
}

const StatePage: React.FC = () => {
    const { uf } = useParams<ParamTypes>();
    const [ covidData, setCovidData ] = useState<ICovidData>();

    useEffect(() => {
        (async () => {
            const data = await fetchCovidData(uf);
            setCovidData(data);
        })()
    }, []);
    
    return (
        <Container>
            <InfoHeader>
                Informações do estado {uf}
            </InfoHeader>
            <InfoContainer>
                <InfoWrapper borderColor={'green'}>
                    <InfoLabel>Confirmados</InfoLabel>
                    <InfoData>{covidData ? covidData.cases : 0}</InfoData>
                </InfoWrapper>
                <InfoWrapper borderColor={'blue'}>
                    <InfoLabel>Suspeitos</InfoLabel>
                    <InfoData>{covidData ? covidData.suspects : 0}</InfoData>
                </InfoWrapper>
                <InfoWrapper borderColor={'red'}>
                    <InfoLabel>Negados</InfoLabel>
                    <InfoData>{covidData ? covidData.refuses : 0}</InfoData>
                </InfoWrapper>
                <InfoWrapper borderColor={'black'}>
                    <InfoLabel>Mortes</InfoLabel>
                    <InfoData>{covidData ? covidData.deaths : 0}</InfoData>
                </InfoWrapper>
            </InfoContainer>
        </Container> 
        )
}

export default StatePage;