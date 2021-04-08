import React from 'react';
import styled from 'styled-components';

const AvatarInputV = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height}; 
    background-image: url(${props=>props.bgImg});
    background-size: ${props=>props.bsize};
`;

const AvatarV = ({
    bgImg="AvatarV_BigSmile.png", // add inside url 
    width="200px",
    height="191.26px",
    bsize= "200px"
}) => {
    
    return <div>
        <AvatarInputV bgImg={bgImg} width={width} height={height} bsize={bsize}>
            
        </AvatarInputV>
    </div>
}

export default AvatarV;