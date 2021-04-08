import React from "react";
import styled from 'styled-components';

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    background-color: #e5e5e5;
    height: ${props=>props.height};
    width: ${props=>props.width};
    border: ${props=>props.borderstyle};
    border-radius: 15px;
`;

const BoxBody = styled.p`
    font-size: 18px;

`;

const Box = ({
    text="Bullying sample text",
    border="4px solid #7CB2E3",
    height="35vh",
    width="70vw"
}) => {

    return <div>
            <TextBox borderstyle={border} height={height} width={width}>
                <BoxBody>{text}</BoxBody>
            </TextBox>
        </div>
}

export default Box;