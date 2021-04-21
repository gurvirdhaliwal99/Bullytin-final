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
background-image: url("BG_Pink.png");
background-repeat: no-repeat;
background-size: 50vh;
background-color:#DC7F9B;
height: 100vh;
`;  

const Header = styled.div`
  display:flex;
  position: relative;
  top: 0px;
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
  top: 50px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Back></Back>
        <Circle right="25px" routeTo="/"></Circle>
      </Header>

      <Body>
        <Step></Step>
        <Box text="Thank you for not being a bystander. The best thing you can do is try to help the person being bullied." height="140px" width="300px" bottom="150px"></Box>
        <AvatarW bgImg="AvatarW_Sus.png" height="140px" width="100px" bsize="100px" right="100px" bottom="180px"></AvatarW>
        <Box text="What type of bullying did you witness?" height="90px" width="300px" bottom="220px"></Box>
      </Body>

      <Buttons>
        <Button bottom="60px"></Button>
        <Button bottom="60px"></Button>
        <Button bottom="60px"></Button>

      </Buttons>

    </Container>
    
  )
}
