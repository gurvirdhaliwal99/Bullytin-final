import Head from 'next/head'
import Button from "../../comps/Button/index.js";
import Circle from "../../comps/Circlelogo/index.js";
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

const results = {
  resultspolice:{
    text1:"From what youve told us,",
    text2:"If you need more help, email us: Support@bullyingCanada.ca or call us: (677)-553-4497",
    text:"Return Home",
  }
}

export default function Pages2(){
    const router = useRouter();
    const {routing} = router.query;


    var big = "From what youve told us,";
    var sub = "If you need more help, email us: Support@bullyingCanada.ca or call us: (677)-553-4497";
    var but1 = "Return Home";
    var link = "/";

    if(routing === ""){
      big = bullying.cyberbullying.text1;
      sub = bullying.cyberbullying.text2;
      but1 = bullying.cyberbullying.text
      but2 = bullying.cyberbullying.secondtext
      link = bullying.cyberbullying.routeTo
      link2 = bullying.cyberbullying.routeTo2
  }


    return <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw"></Back>
          <Circle right="25px"></Circle>
        </Header>

        <Body>
          <Step bottom="22vh"></Step>
          <Box text1={big} height="125px" width="300px" border="4px solid #DC7F9B" bottom="150px"></Box>
          <AvatarV height="140px" width="160px" bsize="160px" left="-50%" bottom="120%"></AvatarV>
          <Box2 text2={sub} height="90px" width="300px" border="4px solid #DC7F9B" bottom="26vh"></Box2>
        </Body>

        <Buttons>
          <Button text={but1} bottom="2vh" routeTo={link}></Button>
          

        </Buttons>

      </Container>
    </OuterContainer>
}