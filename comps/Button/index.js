import React from "react";
import styled from 'styled-components';
import {useRouter} from "next/router";

const ButtonInput = styled.button`
    background-color:black;
    display: inline-flex;
    justify-content: center;
    color:${props=>props.color};
    border-radius: 10px;
    border-color: grey;
    padding: ${props=>props.padding};
    font-size: 25px;
    text-align: center;
    margin:5px;
`;

const Button = ({
    text="Test Button",
    color="white",
    padding="10px 50px",
    routeTo="/victim"
}) => {
    const router = useRouter();
    return <div>
        <ButtonInput color={color} padding={padding} onClick={()=>router.push(routeTo)}>
            {text}
        </ButtonInput>
    </div>
}

export default Button;