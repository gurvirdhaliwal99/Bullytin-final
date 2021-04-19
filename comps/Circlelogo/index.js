import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";

const LogoCircle = styled.div`
    display: flex;
    background-color:#e5e5e5;
    background-image:url("Logo.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    position: relative;
    right:${props=>props.right};
`;
//circle logo does not need diff variations at ths time. 


const Circle = ({
    right="0px",
    routerBack="/index"
}) => {
    const router = useRouter();
    return <div>
        <LogoCircle right={right} onClick={()=>router.push(routerBack)}>
        </LogoCircle>
    </div>
}

export default Circle;