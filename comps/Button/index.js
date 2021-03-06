import React from "react";
import styled from 'styled-components';
import {useRouter} from "next/router";

const ButtonInput = styled.button`
    background-color: black;
    display: inline-flex;
    justify-content: center;
    color:${props=>props.color};
    border-radius: 10px;
    border: lightgrey 3px solid;
    box-shadow: 0px 5px 4px #262626;
    width: 250px;
    padding: ${props=>props.padding};
    font-size: 25px;
    text-align: center;
    margin:5px;
    position: relative;
    bottom: ${props=>props.bottom};
    margin-right: ${props=>props.right};
    left: ${props=>props.left};

    animation-name: opacity;
    animation-duration: 5s;

    @keyframes opacity{
        0%   {opacity: 0%;}
        100% {opacity: 100%;}
    }
`;

const Button = ({
    text="Test Button",
    secondtext="",
    color="white",
    padding="10px 0px",
    bottom="0px",
    left="0px",
    right="0px",
    routeTo="/victim"
}) => {
    const router = useRouter();
    return <div>
        <ButtonInput color={color} padding={padding} bottom={bottom} right={right} left={left} onClick={()=>router.push(routeTo)}>
            {text}{secondtext}
        </ButtonInput>
    </div>
}

export default Button;