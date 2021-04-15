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
  background-image: url("Pink_bg_Graphic.svg");
  background-color:#DC7F9B;
  height: 100vh;
`;

const Header = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: row;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Back></Back>
        <Circle right="20px"></Circle>
      </Header>

      <Body>
        <Step></Step>
        <AvatarW></AvatarW>
        <Box text="Thank you for not being a bystander. The best thing you can do is try to help the person being bullied." height="100px" width="450px" bottom="50px"></Box>
        <AvatarV bottom="100px"></AvatarV>
        <Box text="What type of bullying did you witness?" height="100px" width="400px" bottom="170px"></Box>
      </Body>

      <Buttons>
        <Button text="Cyberbullying" color="white" padding="10px 105px" bottom="150px"></Button>
        <Button text="Verbal Bullying" color="white" padding="10px 97px" bottom="150px"></Button>
        <Button text="Physical Bullying" color="white" padding="10px 90px" bottom="150px"></Button>
      </Buttons>

    </Container>
    
  )
}
