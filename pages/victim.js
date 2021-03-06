import Head from 'next/head'
import Button from "../comps/Button/index.js";
import Circle from "../comps/Circlelogo/index.js";
import Box from "../comps/Textbox/index.js";
import Box2 from "../comps/Textbox2/index.js";
import AvatarV from "../comps/Avatar_V/index.js";
import AvatarW from "../comps/Avatar_W/index.js";
import Back from "../comps/Backbutton/index.js";
import Step from "../comps/Step/index.js";
import styled from "styled-components";
import React, {useState} from "react";


const OuterContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  background-image: url(/BG_Blue.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#88BEE7;
  height: 100vh;
  width: 100vw;
`;  

const Header = styled.div`
  display:flex;
  position: relative;
  bottom: -3vh;
  flex-direction: row;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 25vh;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  bottom: -0.4vh;
`;

export default function Home() {
  return (
    <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw"></Back>
          <Circle right="25px"></Circle>
        </Header>

        <Body>
          <Step bottom="22vh"></Step>
          <Box text1="We are here to help! Our goal is to provide assistance for your unique bullying experience." height="125px" width="300px" border="4px solid #DC7F9B" bottom="150px"></Box>
          <AvatarV height="140px" width="160px" bsize="160px" left="-50%" bottom="120%"></AvatarV>
          <Box2 text2="Have you recently witnessed or have been a victim of bullying?" height="90px" width="300px" border="4px solid #DC7F9B" bottom="26vh"></Box2>
        </Body>

        <Buttons>
          <Button bottom="2vh" text="Cyber Bullying" routeTo="cybergif"></Button>
          <Button bottom="2vh" text="Verbal Bullying" routeTo="verbalgif"></Button>
          <Button bottom="2vh" padding="10px 40px" text="Physical Bullying" routeTo="physicalgif"></Button>

        </Buttons>

      </Container>
    </OuterContainer>
    
  )
}