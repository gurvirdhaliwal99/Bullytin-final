import React from 'react';
import styled from 'styled-components';

const BackButton = styled.div`
    display: flex;
    background-image:url("back.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60px, 60px;
    height: 60px;
    width: 60px;
    margin-bottom: 100px;
`;



const Back = () => {

    return <div>
        <BackButton>
        </BackButton>
    </div>
}

export default Back;