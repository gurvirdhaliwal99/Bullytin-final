import Head from 'next/head'
import Button from "../comps/Button/index.js";
import Circle from "../comps/Circlelogo/index.js";
import Box from "../comps/Textbox/index.js";
import AvatarV from "../comps/Avatar_V/index.js";
import AvatarW from "../comps/Avatar_W/index.js";
import Back from "../comps/Backbutton/index.js";
import Step from "../comps/Step/index.js";
import styled from "styled-components";
import React, {useState} from "react";


const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  background-image: url("BG_Blue.png"); 
  background-repeat: no-repeat;
  background-size: 50vh;
  background-color:#88BEE7;
  height: 100vh;
`;  

const Header = styled.div`
  display:flex;
  position: relative;
  top: -10px;
  left:0px;
  flex-direction: row;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 200px;
  left:0px;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 80px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Back></Back>
        <Circle right="25px"></Circle>
      </Header>

      <Body>
        <Step></Step>
        <Box text="We are here to help! Our goal is to provide assistance for your unique bullying experience." height="125px" width="300px" bottom="150px"></Box>
        <AvatarW height="140px" width="100px" bsize="100px" right="100px" bottom="170px"></AvatarW>
        <Box text="Have you recently witnessed or have been a victim of bullying?" height="90px" width="300px" bottom="200px"></Box>
      </Body>

      <Buttons>
        <Button bottom="60px"></Button>
        <Button bottom="60px"></Button>
        <Button bottom="60px"></Button>

      </Buttons>

    </Container>
    
  )
}