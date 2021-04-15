import React from "react";
import styled from 'styled-components';

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    background-color: #e5e5e5;
    height: ${props=>props.height};
    width: ${props=>props.width};
    border: ${props=>props.borderstyle};
    border-radius: 15px;
    margin-bottom: 100px;    
    position: relative;
    bottom: ${props=>props.bottom};
`;

const BoxBody = styled.p`
    font-size: 18px;

`;

const Box = ({
    text="Bullying sample text",
    border="4px solid #7CB2E3",
    height="25vh",
    width="70vw",
    bottom="0px"
}) => {

    return <div>
            <TextBox borderstyle={border} height={height} width={width} bottom={bottom}>
                <BoxBody>{text}</BoxBody>
            </TextBox>
        </div>
}

export default Box;