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

const OuterContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0px;
  padding: 0px;
  background-color:#DC7F9B;
`;

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  background-image: url(/BG_Pink.png);
  background-size: cover;
  background-color:#DC7F9B;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;  

const Header = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  top: 5vh;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 8vh;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 4vh;
`;

export default function Home() {
  return (
    <OuterContainer>
      <Container>
        <Header>
          <Circle></Circle>
        </Header>

        <div className="intro">
            <p id="welcome">Welcome To:</p>
            <h2>Bullytin</h2>
        </div>

        <Body>
          <Box text1="We are here to help! Our goal is to provide assistance for your unique bullying experience." height="125px" width="300px" bottom="-20px"></Box>
          <Box2 text2="Have you recently witnessed or been a victim of bullying?" height="90px" width="300px" bottom="-30px"></Box2>
        </Body>

        <Buttons>
          <AvatarW height="140px" width="95px" bsize="95px" right="100px" bottom="-80px"></AvatarW>
          <AvatarV bgImg="AvatarV_BigSmileFlip.png" height="140px" width="140px" bsize="140px" left="90px" bottom="55px"></AvatarV>
          <Button text="Witnessed" color="#DC7F9B" bottom="110px" routeTo="/bystander"></Button>
          <Button text="Victim" bottom="90px" color="#7CB2E3"></Button>
        </Buttons>

      </Container>
    </OuterContainer>
    
  )
}
