import React from "react";
import styled from 'styled-components';

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    background-color: #e5e5e5;
    height: ${props=>props.height};
    width: ${props=>props.width};
    border: ${props=>props.border};
    border-radius: 15px;
    margin-bottom: 50px;    
    position: relative;
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
`;

const BoxBody = styled.p`
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: centre;
`;


const Box2 = ({
    text2="Bullying sample text",

    border="4px solid #7CB2E3",
    height="25vh",
    width="70vw",
    bottom="0px",
    left="0px"
}) => {

    return <div>
            <TextBox border={border} height={height} width={width} bottom={bottom} left={left}>
                <BoxBody>{text2}</BoxBody>
            </TextBox>
        </div>
}

export default Box2;