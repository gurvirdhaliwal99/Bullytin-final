import React from 'react';
import styled from 'styled-components';

const AvatarInputW = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height}; 
    background-image: url(${props=>props.bgImg});
    background-size: ${props=>props.bsize};
`;

const AvatarW = ({
    bgImg="AvatarW_BigSmile.png", // add inside url
    width="150px",
    height="200px",
    bsize="150px"
}) => {
    
    return <div>
        <AvatarInputW bgImg={bgImg} width={width} height={height} bsize={bsize}>

        </AvatarInputW>
    </div>
}

export default AvatarW;