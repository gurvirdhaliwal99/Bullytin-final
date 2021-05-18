import React from "react";
import styled from 'styled-components';

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: #e5e5e5;
    width: ${props=>props.width};
    border: ${props=>props.border};
    border-radius: 15px;
    box-shadow: 0px 4px 6px #262626;
    padding: 0px 10px;    
    position: relative;
    bottom: ${props=>props.bottom};
    left: ${props=>props.left};
    animation-name: opacity;
    animation-duration: 3s;

    @keyframes opacity{
        0%   {opacity: 0%;}
        50%  {opacity: 0%;}
        100% {opacity: 100%;}
    }
`;

const BoxBody = styled.p`
    display: flex;
    font-size: 18px;
    justify-content: center;
    align-items: center;
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
            <TextBox border={border} width={width} bottom={bottom} left={left}>
                <BoxBody>{text2}</BoxBody>
            </TextBox>
        </div>
}

// height: ${props=>props.height};
// height={height}

export default Box2;