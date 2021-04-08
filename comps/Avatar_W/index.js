import React from 'react';
import styled from 'styled-components';

const AvatarInputW = styled.div`
    width: 150px;
    height: 200px;
    background-image: url({"AvatarW_BigSmile.png"});
    background-size: 150px;
`;

const AvatarW = ({
    bgImg="AvatarW_BigSmile.png" // add inside url
}) => {
    
    return <div>
        <AvatarInputW >

        </AvatarInputW>
    </div>
}

export default AvatarW;