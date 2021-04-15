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
        <Circle></Circle>
      </Header>

      <Body>
        <Box></Box>
      </Body>

      <Buttons>
        <AvatarW ></AvatarW>
        <Button text="Bystander" color="#DC7F9B" padding="10px 75px" routeTo="/bystander"></Button>
        <AvatarV></AvatarV>
        <Button text="Victim" color="#7CB2E3" padding="10px 90px"></Button>
      </Buttons>

    </Container>
    
  )
}
