import React from "react";
import styled from 'styled-components';

const TextBox = styled.div`
    display: inline-flex;
    border-color: blue;
`;

const BoxBody = styled.p`
    font-size: 15px;

`;

const Box = () => {

    return <div>
            <TextBox>
                <BoxBody>Physical Bullying is....</BoxBody>
            </TextBox>
        </div>
}

export default Box;