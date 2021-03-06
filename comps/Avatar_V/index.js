import React from 'react';
import styled from 'styled-components';

const AvatarInputV = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height}; 
    background-image: url(${props=>props.bgImg});
    background-size: ${props=>props.bsize};
    background-repeat: no-repeat;
    position: relative;
    left: ${props=>props.left};
    bottom: ${props=>props.bottom};
    animation-name: opacity;
    animation-duration: 3s;

    @keyframes opacity{
        0%   {opacity: 0%;}
        50%  {opacity: 0%;}
        100% {opacity: 100%;}
    }
`;

const AvatarV = ({
    bgImg="/AvatarV_BigSmile.png", // add inside url 
    width="200px",
    height="191.26px",
    bsize= "200px",
    left= "200px",
    bottom="0px"
}) => {
    
    return <div>
        <AvatarInputV bgImg={bgImg} width={width} height={height} bsize={bsize} left={left} bottom={bottom}>
            
        </AvatarInputV>
    </div>
}

export default AvatarV;