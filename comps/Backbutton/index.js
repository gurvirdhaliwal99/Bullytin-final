import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";

const BackButton = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    position: relative;
    left: ${props=>props.left};
    top: ${props=>props.top};
`;



const Back = ({
    routerBack="/",
    left="0px",
    top="0px"
}) => {
    const router = useRouter();
    return <div>
        <BackButton onClick={()=>router.push(routerBack)} top={top} left={left}>
            <img src="../newback.png"/>
        </BackButton>
    </div>
}

export default Back;