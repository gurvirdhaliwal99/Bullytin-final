import Head from 'next/head'
import Button from "../../comps/Button/index.js";
import Circle from "../comps/Circlelogo/index.js";
import Box from "../../comps/Textbox/index.js";
import Box2 from "../../comps/Textbox2/index.js";
import AvatarV from "../../comps/Avatar_V/index.js";
import AvatarW from "../../comps/Avatar_W/index.js";
import Back from "../../comps/Backbutton/index.js";
import Step from "../../comps/Step/index.js";
import styled from "styled-components";
import {useRouter} from 'next/router';


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
  background-image: url("BG_Blue.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#88BEE7;
  height: 100vh;
  width: 100vw;
`;  

const Header = styled.div`
  display:flex;
  position: relative;
  bottom: 3.5vh
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

const bullying = {
    Cyberbullying:{
        text1:"Cyberbullying is a using the internet or text messages to intimidate, spread rumors, or make fun of someone.",
        text2:"Where did this happen?"

    },
}
export default function Pages2(){
    const router = useRouter();
    const {routing} = router.query;

    var big = "We are here to help! Our goal is to provide assistance for your unique bullying experience.";
    var sub = "Have you recently witnessed or have been a victim of bullying?";
    var but1 = "Social Media Posts";
    var but2 = "Text Messaging";

    if(routing === "Cyberbullying"){
        big = bullying.Cyberbullying.text1;
        sub = bullying.Cyberbullying.text2;
    }

    return <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw"></Back>
          <Circle right="25px"></Circle>
        </Header>

        <Body>
          <Step bottom="22vh"></Step>
          <Box text={big} height="125px" width="300px" border="4px solid #DC7F9B" bottom="150px"></Box>
          <AvatarV height="140px" width="160px" bsize="160px" left="-50%" bottom="120%"></AvatarV>
          <Box2 text2={sub} height="90px" width="300px" border="4px solid #DC7F9B" bottom="26vh"></Box2>
        </Body>

        <Buttons>
          <Button bottom="2vh"></Button>
          <Button bottom="2vh"></Button>
          <Button bottom="2vh"></Button>

        </Buttons>

      </Container>
    </OuterContainer>
    
  
}


