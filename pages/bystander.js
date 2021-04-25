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
  background-image: url("BG_Pink.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#DC7F9B;
  height: 100vh;
  width: 100vw;
`;  

const Header = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  bottom: 3.5vh;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 22vh;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  bottom: 3vh;
`;

export default function Home() {
  return (
    <OuterContainer>
      <Container>
        <Header>
          <Back top="8.7vh" left="-28vw"></Back>
          <Circle routeTo="/"></Circle>
        </Header>

        <Body>
          <Step bottom="22vh"></Step>
          <Box text="Thank you for not being a bystander. The best thing you can do is try to help the person being bullied." height="140px" width="300px" bottom="150px"></Box>
          <AvatarW bgImg="AvatarW_Sus.png" height="140px" width="100px" bsize="100px" right="80%" bottom="120%"></AvatarW>
          <Box2 text2="What type of bullying did you witness?" height="90px" width="300px" bottom="26vh"></Box2>
        </Body>

        <Buttons>
          <Button bottom="2vh"></Button>
          <Button bottom="2vh"></Button>
          <Button bottom="2vh"></Button>

        </Buttons>

      </Container>
    </OuterContainer>
    
  )
}
