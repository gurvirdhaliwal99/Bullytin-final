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

const bullying = {
    cyberbullying:{
        text1:"Cyberbullying is a using the internet or text messages to intimidate, spread rumors, or make fun of someone.",
        text2:"Where did this happen?",
        text:"Social media post",
        secondtext:"Text messaging",
        routeTo:"/pages2/socialmedia"
    },
    socialmedia:{
        text1:"Unfortunatley, social media isnt always a friendly place. You can block the user or even report them.",
        text2:"Which of the following did you experience?",
        text:"Did someone threaten you?",
        secondtext:"Did someone spread rumors?",
        routeTo:"/pages2/intimidated"
    },
    intimidated:{
        text1:"Intimidation can be a form of bullying or criminal in some cases. Lets take a close look at your experience.",
        text2:"How has the bully intimidated you?",
        text:"Did someone threaten to harm you?",
        secondtext:"Did someone post something about you?",
        routeTo:"/pages2/threatenharm"
    },
    threatenharm:{
        text1:"I am sorry to hear youve been threatened. We are here for you!",
        text2:"Who is the person or group that is doing this to you?",
        text:"Classmates",
        secondtext:"Unknown trolls",
        routeTo:"/pages2/socialmedia"
    },
}
export default function Pages2(){
    const router = useRouter();
    const {routing} = router.query;

    var big = "";
    var sub = "Have you recently witnessed or have been a victim of bullying?";
    var but1 = "Social Media Posts";
    var but2 = "Text Messaging";
    var link = "/";
    var link2 = "/";

    if(routing === "cyberbullying"){
        big = bullying.cyberbullying.text1;
        sub = bullying.cyberbullying.text2;
        but1 = bullying.cyberbullying.text
        but2 = bullying.cyberbullying.secondtext
        link = bullying.cyberbullying.routeTo
    }
    if(routing === "socialmedia"){
        big = bullying.socialmedia.text1;
        sub = bullying.socialmedia.text2;
        but1 = bullying.socialmedia.text
        but2 = bullying.socialmedia.secondtext
        link = bullying.socialmedia.routeTo
    }
    if(routing === "intimidated"){
        big = bullying.intimidated.text1;
        sub = bullying.intimidated.text2;
        but1 = bullying.intimidated.text
        but2 = bullying.intimidated.secondtext
        link = bullying.intimidated.routeTo
    }
    if(routing === "threatenharm"){
        big = bullying.threatenharm.text1;
        sub = bullying.threatenharm.text2;
        but1 = bullying.threatenharm.text
        but2 = bullying.threatenharm.secondtext
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
          <Button text={but2} bottom="2vh"routeTo={link2}></Button>
          

        </Buttons>

      </Container>
    </OuterContainer>
    
  
}


