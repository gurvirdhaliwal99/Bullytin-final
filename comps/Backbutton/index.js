import React from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";
import {IoArrowBackCircleOutline} from 'react-icons/io5';

const BackButton = styled.div`
    display: flex;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
    left: ${props=>props.left};
    top: ${props=>props.top};

        .back{
            font-size: 4em;
        }
`;



const Back = ({
    routerBack="/",
    left="0px",
    top="0px"
}) => {
    const router = useRouter();
    return <div>
        <BackButton onClick={()=>router.push(routerBack)} top={top} left={left}>
            {/* <img src="../back.png"/> */}
            <IoArrowBackCircleOutline className="back"/>
        </BackButton>
    </div>
}

export default Back;