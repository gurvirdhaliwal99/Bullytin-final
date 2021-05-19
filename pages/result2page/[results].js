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
  background-color: #D9406E;
  height: 100vh;
  width: 100vw;
`;  

const Header = styled.div`
  display:flex;
  position: relative;
  bottom: 1vh;
  flex-direction: row;
`;

const Body = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  top: 20vh;
`;

const Buttons = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  position: relative;
  bottom: -0.4vh;
`;

const resultsoption = {
    //cyber
    cyberbullySM:{
        text1:"Contact the victim and ensure that they are okay and ask if they are willing to report the issue. It is important to encourage them to talk about what happened with someone they trust.",
        text2:"The victim can also: Block/unfollow the bully, change their username or delete hurtful comments.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/cyberbullying"
    },
    cyberbullyTM:{
        text1:"Contact the victim and ensure that they are okay and ask if they are willing to report the issue. It is important to encourage them to talk about what happened with someone they trust.",
        text2:"The victim can also: Block the bully’s number, change their phone number, or delete the chat.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/cyberbullying"
    },

    //verbal
    verbalbullythreat:{
        text1:"In serious cases, threatening someone can be labelled a criminal harrasment. It is important to encourage the victim to report the threat or someone they trust.",
        text2:"The victim can also: Say positive things in return, stand their ground or surround themselves with friends.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/verbalbullying"
    },
    verbalbullyNC:{
        text1:"It may not be sticks or stones, but words can still hurt people. If this has happened more than once, contact the victim and ensure that they are okay and ask if they are willing to report the issue.",
        text2:"The victim can also: ignore the names-calling, surround themselves with friends or avoid the bully.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/verbalbullying"
    },

    //phsyical
    phsyicalpunch:{
        text1:"Learning to stand up for and assert yourself is the first step to stopping the bullying. It is important to encourage the victim to report the threat or someone they trust.",
        text2:"The victim can also: Confide in a trusted adult (a parent or teacher), run or walk away or even calmy stand up to the bully.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/physicalbullying"
    },
    phsyicalstealing:{
        text1:"In serious cases, stealing is labelled as a criminal offence. It is important to encourage the victim to report the stolen items to someone they trust.",
        text2:"The victim can also: hide or lock away items they think may get stolen or calmy stand up to the bully and ask for their belongings back.",
        text:"Return Home",
        routeTo:"/",
        backto:"/pages3/physicalbullying"
    },
}

export default function Results(){
    const router = useRouter();
    const {results} = router.query;

    var big = "Big text";
    var sub = "Small text";
    var but1 = "Return Home";
    var link = "/";
    var back = "/";

    //cyberbully results
    if(results === "cyberbullySM"){
        big = resultsoption.cyberbullySM.text1;
        sub = resultsoption.cyberbullySM.text2;
        but1 = resultsoption.cyberbullySM.text;
        link = resultsoption.cyberbullySM.routeTo;
        back = resultsoption.cyberbullySM.backto
    }

    if(results === "cyberbullyTM"){
        big = resultsoption.cyberbullyTM.text1;
        sub = resultsoption.cyberbullyTM.text2;
        but1 = resultsoption.cyberbullyTM.text;
        link = resultsoption.cyberbullyTM.routeTo;
        back = resultsoption.cyberbullySM.backto
    }

    //verbal results
    if(results === "verbalbullythreat"){
        big = resultsoption.verbalbullythreat.text1;
        sub = resultsoption.verbalbullythreat.text2;
        but1 = resultsoption.verbalbullythreat.text;
        link = resultsoption.verbalbullythreat.routeTo;
        back = resultsoption.verbalbullythreat.backto
    }
    if(results === "verbalbullyNC"){
        big = resultsoption.verbalbullyNC.text1;
        sub = resultsoption.verbalbullyNC.text2;
        but1 = resultsoption.verbalbullyNC.text;
        link = resultsoption.verbalbullyNC.routeTo;
        back = resultsoption.verbalbullyNC.backto
    }

    //phsyical punch kick results
    if(results === "phsyicalpunch"){
        big = resultsoption.phsyicalpunch.text1;
        sub = resultsoption.phsyicalpunch.text2;
        but1 = resultsoption.phsyicalpunch.text;
        link = resultsoption.phsyicalpunch.routeTo;
        back = resultsoption.phsyicalpunch.backto
    }
    if(results === "phsyicalstealing"){
        big = resultsoption.phsyicalstealing.text1;
        sub = resultsoption.phsyicalstealing.text2;
        but1 = resultsoption.phsyicalstealing.text;
        link = resultsoption.phsyicalstealing.routeTo
        back = resultsoption.phsyicalstealing.backto
    }

    return <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw" routerBack={back}></Back>
          <Circle right="30px"></Circle>
        </Header>

        <Body>
          <Box text1={big} height="20vh" width="300px" border="4px solid #DC7F9B" bottom="15vh"></Box>
          <Box2 text2={sub} height="20vh" width="300px" border="4px solid #DC7F9B" bottom="15vh"></Box2>
        </Body>

        <Buttons>
          <Button text={but1} bottom="-2vh" routeTo={link}></Button>
        </Buttons>
      </Container>
    </OuterContainer>
}
