import React from 'react';
import styled from 'styled-components';

const StepNumber = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 40px;
    width: 200px;
    position: relative;
    bottom: ${props=>props.bottom};
`;

const StepText = styled.p`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;

`;



const Step = ({
    text="Step 1 of 5",
    bottom="0vh"
}) => {

    return <div>
        <StepNumber bottom={bottom}>
            <StepText>{text}</StepText>
        </StepNumber>
    </div>
}

export default Step;