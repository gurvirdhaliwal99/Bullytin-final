import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";

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



const Back = ({
    routerBack="/index"
}) => {
    const router = useRouter();
    return <div>
        <BackButton onClick={()=>router.push(routerBack)}>
        </BackButton>
    </div>
}

export default Back;