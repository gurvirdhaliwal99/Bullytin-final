import React from 'react';
import styled from 'styled-components';

const AvatarInputV = styled.div`
    width: 200px;
    height: 191.26px;
    background-image: url(${props=>props.bgImg});
    background-size: 200px;
`;

const AvatarV = ({
    bgImg="AvatarW_BigSmile.png", // add inside url 
}) => {
    
    return <div>
        <AvatarInputV bgImg={bgImg}>
            
        </AvatarInputV>
    </div>
}

export default AvatarV;