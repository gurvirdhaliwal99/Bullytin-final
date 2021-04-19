import Head from 'next/head'
import Button from "../comps/Button/index.js";
import Circle from "../comps/Circlelogo/index.js";
import Box from "../comps/Textbox/index.js";
import AvatarV from "../comps/Avatar_V/index.js";
import AvatarW from "../comps/Avatar_W/index.js";
import Back from "../comps/Backbutton/index.js";
import Step from "../comps/Step/index.js";
import styled from "styled-components";



const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  background-image: url("Pink_bg_Graphic.svg");
  background-repeat: no-repeat;
  background-size: 100vh;
  background-color:#DC7F9B;
  height: 100vh;
`;  

const Header = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: row;
  background-color: green;


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
        <Circle></Circle>
      </Header>

      <Body>
        <Box text="We are here to help! Our goal is to provide assistance for your unique bullying experience." height="150px" width="300px"></Box>
        <Box text="Have you recently witnessed or have been a victim of bullying?" height="100px" width="300px"></Box>
      </Body>

      <Buttons>
        <AvatarW bottom="75px" ></AvatarW>
        <Button text="Bystander" color="#DC7F9B" padding="20px 105px" bottom="125px" right="50px" routeTo="/bystander"></Button>
        <AvatarV bottom="95px"></AvatarV>
        <Button text="Victim" color="#7CB2E3" padding="20px 120px" bottom="150px" left="100px"></Button>
      </Buttons>

    </Container>
    
  )
}
