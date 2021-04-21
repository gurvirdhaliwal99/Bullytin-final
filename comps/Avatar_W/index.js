import React from 'react';
import styled from 'styled-components';

const AvatarInputW = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height}; 
    background-image: url(${props=>props.bgImg});
    background-size: ${props=>props.bsize};
    background-repeat: no-repeat;
    position: relative;
    right: ${props=>props.right};
    bottom: ${props=>props.bottom};
`;

const AvatarW = ({
    bgImg="AvatarW_BigSmile.png", //inside url
    width="150px",
    height="200px",
    bsize="150px",
    right="200px",
    bottom="0px"
}) => {
    
    return <div>
        <AvatarInputW bgImg={bgImg} width={width} height={height} bsize={bsize} right={right} bottom={bottom}>

        </AvatarInputW>
    </div>
}

export default AvatarW;