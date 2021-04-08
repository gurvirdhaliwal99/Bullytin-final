import React from 'react';
import styled from 'styled-components';

const LogoCircle = styled.div`
    display: flex;
    background-color:#e5e5e5;
    background-image:url("Logo.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 75px;
    width: 75px;
    border-radius: 50%;
`;


const Circle = () => {

    return <div>
        <LogoCircle>
        </LogoCircle>
    </div>
}

export default Circle;