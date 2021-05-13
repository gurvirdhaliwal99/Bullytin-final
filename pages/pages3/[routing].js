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
  background-image: url(/BG_Pink.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#DC7F9B;
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
  //cyberbullying start
    cyberbullying:{
        text1:"Cyberbullying is a using the internet or text messages to intimidate, spread rumors, or make fun of someone.",
        text2:"Where did this happen?",
        text:"Social Media",
        secondtext:"Text Messages",
        routeTo:"/result2page/cyberbullySM",
        routeTo2:"/result2page/cyberbullyTM",
        backto:"/bystander"
    },
  //cyberbullying end


  //verbalbullying start
  verbalbullying:{
    text1:"Verbal bullying is the act of forcefully criticizing, insulting, or denouncing another person.",
    text2:"How did this happen?",
    text:"Threats",
    secondtext:"Name Calling",
    routeTo:"/result2page/verbalbullythreat",
    routeTo2:"/result2page/verbalbullyNC",
    backto:"/bystander"
  },
  //verbalbullying end


  //physicalbullying start
  physicalbullying:{
    text1:"Physical Bullying is the act of hitting, shoving, destroying or stealing belongings.",
    text2:"What kind of physical bullying happened?",
    text:"Physical Hits",
    secondtext:"Stealing",
    routeTo:"/result2page/phsyicalpunch",
    routeTo2:"/result2page/phsyicalstealing",
    backto:"/bystander"
  },
  //physicalbullying end
}
export default function Pages3(){
    const router = useRouter();
    const {routing} = router.query;

    var big = "";
    var sub = "Have you recently witnessed or have been a victim of bullying?";
    var but1 = "Social Media Posts";
    var but2 = "Text Messaging";
    var link = "/";
    var link2 = "/";
    var back = "/";


    //cyberbullying chain
    if(routing === "cyberbullying"){
        big = bullying.cyberbullying.text1;
        sub = bullying.cyberbullying.text2;
        but1 = bullying.cyberbullying.text
        but2 = bullying.cyberbullying.secondtext
        link = bullying.cyberbullying.routeTo
        link2 = bullying.cyberbullying.routeTo2
        back = bullying.cyberbullying.backto
    }
    //cyberbullying end


    //verbal bullying chain
    if(routing === "verbalbullying"){
      big = bullying.verbalbullying.text1;
      sub = bullying.verbalbullying.text2;
      but1 = bullying.verbalbullying.text
      but2 = bullying.verbalbullying.secondtext
      link = bullying.verbalbullying.routeTo
      link2 = bullying.verbalbullying.routeTo2
      back = bullying.verbalbullying.backto
    }
    //verbalbullying end


    //physical bullying chain
    if(routing === "physicalbullying"){
      big = bullying.physicalbullying.text1;
      sub = bullying.physicalbullying.text2;
      but1 = bullying.physicalbullying.text
      but2 = bullying.physicalbullying.secondtext
      link = bullying.physicalbullying.routeTo
      link2 = bullying.physicalbullying.routeTo2
      back = bullying.physicalbullying.backto
    }
    //physical bullying end

    return <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw" routerBack={back}></Back>
          <Circle right="25px"></Circle>
        </Header>

        <Body>
          <Step bottom="22vh"></Step>
          <Box text1={big} height="125px" width="300px" border="4px solid #7CB2E3" bottom="150px"></Box>
          <AvatarW height="120px" width="120px" bsize="120px" right="70px" bottom="160%"></AvatarW>
          <Box2 text2={sub} height="90px" width="300px" border="4px solid #7CB2E3" bottom="26vh"></Box2>
        </Body>

        <Buttons>
          <Button text={but1} bottom="2vh" routeTo={link}></Button>
          <Button text={but2} bottom="2vh"routeTo={link2}></Button>
        </Buttons>
      </Container>
    </OuterContainer>
    
}