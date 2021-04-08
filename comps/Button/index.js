import React from "react";
import styled from 'styled-components';

const ButtonInput = styled.button`
    background-color:black;
    display: inline-flex;
    justify-content: center;
    color:${props=>props.color};
    border-radius: 10px;
    border-color: grey;
    padding: ${props=>props.padding};
    font-size: 15px;
    text-align: center;
    margin:5px;
`;

const Button = ({
    text="Test Button",
    color="white",
    padding="10px 50px"
}) => {

    return <div>
        <ButtonInput color={color} padding={padding}>
            {text}
        </ButtonInput>
    </div>
}

export default Button;