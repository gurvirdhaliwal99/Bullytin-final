import React from 'react';
import styled from 'styled-components';

const StepNumber = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 40px;
    width: 100px;
    position: relative;
    top: -200px;
`;

const StepText = styled.p`
    font-size: 18px;

`;



const Step = ({
    text="Step 1 of 5",
}) => {

    return <div>
        <StepNumber>
            <StepText>{text}</StepText>
        </StepNumber>
    </div>
}

export default Step;