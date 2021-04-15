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
  background-image: linear-gradient(#DC7F9B, White);
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
        <Circle></Circle>
      </Header>

      <Body>
        <Step></Step>
        <Box text="What type of bullying did you observe?"></Box>
      </Body>

      <Buttons>
        <Button text="Cyberbullying" color="white" padding="10px 95px"></Button>
        <Button text="Verbal Bullying" color="white" padding="10px 93px"></Button>
        <Button text="Physical Bullying" color="white" padding="10px 90px"></Button>
      </Buttons>

    </Container>
    
  )
}
