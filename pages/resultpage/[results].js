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
  background-image: url(/BG_Blue.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-color:#5097D9;
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
    cyberbullyclassmates:{
        text1:"From what you have told us, we reccomend to get help from your schools principal or teacher",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497",
        text:"Return Home",
        routeTo:"/",
    },
    cyberbullypolice:{
        text1:"From what you have told us, we reccomend for you to get help from your local police.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497",
        text:"Return Home",
        routeTo:"/",
    },
    cyberbullyfamily:{
        text1:"From what you have told us, we recommend for you to talk to your family about the issue. In more serious cases, a complaint should be made to Child Protective Services through a trusted adult.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497",
        text:"Return Home",
        routeTo:"/",
    },


    //verbal
    verbalbullyingpolice:{
        text1:"From what you have told us, we recommend you get help from your local police.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911",
        text:"Return Home",
        routeTo:"/",
    },
    verbalbullyingcanada:{
        text1:"From what you have told us, we recommend for you to contact BullyingCanada for help.",
        text2:"To contact, email us: Support@BullyingCanada.ca or call us: (877)-352-4497",
        text:"Return Home",
        routeTo:"/",
    },
    verbalbullyingprotection:{
        text1:"From what you have told us, we recommend you get hemp from Child Service Proteciton Service.",
        text2:"call 1-800-663-9122 at any time of the day or night. Or, email us: Support@BullyingCanada.ca or call us: (877)-352-4497",
        text:"Return Home",
        routeTo:"/",
    },
    verbalbullyingschool:{
        text1:"From what you have told us, we recommend you get help from your school Principal or teacher.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497.",
        text:"Return Home",
        routeTo:"/",
    },

    //phsyical punch kick
    phsyicalstudents:{
        text1:"From the results of your survey, we recommend for you to avoid these students and ask a teacher for help if you feel unsafe. Do notrespond with violence. Make sure your teacher or family is aware of the situation.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911",
        text:"Return Home",
        routeTo:"/",
    },
    phsyicalstranger:{
        text1:"From the results of your survey, we recommend for you to call 911 if a stranger is hitting you outside ofschool grounds. Avoid these strangers and do not respond with violence.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911",
        text:"Return Home",
        routeTo:"/",
    },
    phsyicalfamily:{
        text1:"From the results of your survey, we recommend for you to get help from someone outside of your household. Visit bullyingcanada.ca or call their helpline.If your family phsyically hurtsyou, you can call 911.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911.",
        text:"Return Home",
        routeTo:"/",
    },

    //phsyical weapon
    weaponstudent:{
        text1:"From the results of your survey, we recommend for you to avoid these students and ask a teacher for help if you feel unsafe. Do not respond with violence. Make sure your teacher or family is aware of the situation.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911.",
        text:"Return Home",
        routeTo:"/",
    },
    weaponstranger:{
        text1:"From the results of your survey, we recommend for you to call 911 if a stranger is hitting you outside ofschool grounds. Avoid these strangers and do not respond with violence.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911.",
        text:"Return Home",
        routeTo:"/",
    },
    weaponfamily:{
        text1:"From the results of your survey, we recommend for you to get help from someone outside of your household. Visit bullyingcanada.ca or call their helpline. If your family threatens you, you can call 911.",
        text2:"If you need more help, email us: Support@BullyingCanada.ca or call us: (877)-352-4497 Or call your local police 911.",
        text:"Return Home",
        routeTo:"/",
    },
}


export default function Results(){
    const router = useRouter();
    const {results} = router.query;

    var big = "Big text";
    var sub = "Small text";
    var but1 = "Return home";
    var link = "/";

    //cyberbully results
    if(results === "cyberbullyclassmates"){
        big = resultsoption.cyberbullyclassmates.text1;
        sub = resultsoption.cyberbullyclassmates.text2;
        but1 = resultsoption.cyberbullyclassmates.text
        link = resultsoption.cyberbullyclassmates.routeTo
    }

    if(results === "cyberbullypolice"){
        big = resultsoption.cyberbullypolice.text1;
        sub = resultsoption.cyberbullypolice.text2;
        but1 = resultsoption.cyberbullypolice.text
        link = resultsoption.cyberbullypolice.routeTo
    }

    if(results === "cyberbullyfamily"){
        big = resultsoption.cyberbullyfamily.text1;
        sub = resultsoption.cyberbullyfamily.text2;
        but1 = resultsoption.cyberbullyfamily.text
        link = resultsoption.cyberbullyfamily.routeTo
    }

    //verbal results
    if(results === "verbalbullyingpolice"){
        big = resultsoption.verbalbullyingpolice.text1;
        sub = resultsoption.verbalbullyingpolice.text2;
        but1 = resultsoption.verbalbullyingpolice.text
        link = resultsoption.verbalbullyingpolice.routeTo
    }
    if(results === "verbalbullyingcanada"){
        big = resultsoption.verbalbullyingcanada.text1;
        sub = resultsoption.verbalbullyingcanada.text2;
        but1 = resultsoption.verbalbullyingcanada.text
        link = resultsoption.verbalbullyingcanada.routeTo
    }
    if(results === "verbalbullyingprotection"){
        big = resultsoption.verbalbullyingprotection.text1;
        sub = resultsoption.verbalbullyingprotection.text2;
        but1 = resultsoption.verbalbullyingprotection.text
        link = resultsoption.verbalbullyingprotection.routeTo
    }
    if(results === "verbalbullyingschool"){
        big = resultsoption.verbalbullyingschool.text1;
        sub = resultsoption.verbalbullyingschool.text2;
        but1 = resultsoption.verbalbullyingschool.text
        link = resultsoption.verbalbullyingschool.routeTo
    }

    //phsyical punch kick results
    if(results === "phsyicalstudents"){
        big = resultsoption.phsyicalstudents.text1;
        sub = resultsoption.phsyicalstudents.text2;
        but1 = resultsoption.phsyicalstudents.text
        link = resultsoption.phsyicalstudents.routeTo
    }
    if(results === "phsyicalstranger"){
        big = resultsoption.phsyicalstranger.text1;
        sub = resultsoption.phsyicalstranger.text2;
        but1 = resultsoption.phsyicalstranger.text
        link = resultsoption.phsyicalstranger.routeTo
    }
    if(results === "phsyicalfamily"){
        big = resultsoption.phsyicalfamily.text1;
        sub = resultsoption.phsyicalfamily.text2;
        but1 = resultsoption.phsyicalfamily.text
        link = resultsoption.phsyicalfamily.routeTo
    }
    //phsyical weapon results
    if(results === "weaponstudent"){
        big = resultsoption.weaponstudent.text1;
        sub = resultsoption.weaponstudent.text2;
        but1 = resultsoption.weaponstudent.text
        link = resultsoption.weaponstudent.routeTo
    }
    if(results === "weaponstranger"){
        big = resultsoption.weaponstranger.text1;
        sub = resultsoption.weaponstranger.text2;
        but1 = resultsoption.weaponstranger.text
        link = resultsoption.weaponstranger.routeTo
    }
    if(results === "weaponfamily"){
        big = resultsoption.weaponfamily.text1;
        sub = resultsoption.weaponfamily.text2;
        but1 = resultsoption.weaponfamily.text
        link = resultsoption.weaponfamily.routeTo
    }


    return <OuterContainer>
      <Container>
        <Header>
          <Back top="1vh" left="-20vw"></Back>
          <Circle right="30px"></Circle>
        </Header>

        <Body>
          <Box text1={big} height="30vh" width="300px" border="4px solid #DC7F9B" bottom="15vh"></Box>
          <Box2 text2={sub} height="30vh" width="300px" border="4px solid #DC7F9B" bottom="15vh"></Box2>
        </Body>

        <Buttons>
          <Button text={but1} bottom="-2vh" routeTo={link}></Button>
        </Buttons>
      </Container>
    </OuterContainer>
    
}
