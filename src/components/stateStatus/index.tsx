import React from 'react';

import { Container, InfoHeader, InfoContainer, InfoWrapper, InfoLabel, InfoData } from './style';

interface Props {
    uf: string,
    cases: number,
    suspects: number,
    refuses: number,
    deaths: number,
}

const StateStatus: React.FC<Props> = ({uf, cases, suspects, refuses, deaths}) => (
    <Container>
        <InfoHeader> Informações do estado {uf} </InfoHeader>
        <InfoContainer>
            <InfoWrapper borderColor={'green'}>
                <InfoLabel>Confirmados</InfoLabel>
                <InfoData>{cases}</InfoData>
            </InfoWrapper>
            <InfoWrapper borderColor={'blue'}>
                <InfoLabel>Suspeitos</InfoLabel>
                <InfoData>{suspects}</InfoData>
            </InfoWrapper>
            <InfoWrapper borderColor={'red'}>
                <InfoLabel>Negados</InfoLabel>
                <InfoData>{refuses}</InfoData>
            </InfoWrapper>
            <InfoWrapper borderColor={'black'}>
                <InfoLabel>Mortes</InfoLabel>
                <InfoData>{deaths}</InfoData>
            </InfoWrapper>
        </InfoContainer>
    </Container> 
);

export default StateStatus;