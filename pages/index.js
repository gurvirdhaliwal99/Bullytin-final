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
  background-image: url("BG_Pink.png");
  background-repeat: no-repeat;
  background-size: 50vh;
  background-color:#DC7F9B;
  height: 100vh;
`;  

const Header = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  top: 60px;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 60px;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 20px;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Circle></Circle>
      </Header>

      <div className="intro">
          <p id="welcome">Welcome To:</p>
          <h2>Bullytin</h2>
      </div>

      <Body>
        <Box text="We are here to help! Our goal is to provide assistance for your unique bullying experience." height="125px" width="300px" bottom="-20px"></Box>
        <Box text="Have you recently witnessed or have been a victim of bullying?" height="90px" width="300px"></Box>
      </Body>

      <Buttons>
        <AvatarW height="140px" width="100px" bsize="100px" right="100px"></AvatarW>
        <Button text="Bystander" right="75px"  bottom="50px" color="#DC7F9B"   routeTo="/bystander"></Button>
        <AvatarV height="140px" width="140px" bsize="140px" left="90px" bottom="50px"></AvatarV>
        <Button text="Victim" padding="10px 70px" bottom="100px" right="-70px" color="#7CB2E3"  ></Button>
      </Buttons>

    </Container>
    
  )
}
