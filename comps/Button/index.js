import React from "react";
import styled from 'styled-components';

const ButtonInput = styled.button`
    background-color:black;
    display: inline-flex;
    justify-content: center;
    color:${props=>props.color};
    border-radius: 10px;
    border-color: grey;
    padding: 10px 50px;
    font-size: 15px;
    text-align: center;
`;

const Button = ({
    text="Test Button",
    color="white"
}) => {

    return <div>
        <ButtonInput color={color}>
            {text}
        </ButtonInput>
    </div>
}

export default Button;