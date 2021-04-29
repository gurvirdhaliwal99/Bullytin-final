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
  //cyberbullying start
    cyberbullying:{
        text1:"Cyberbullying is a using the internet or text messages to intimidate, spread rumors, or make fun of someone.",
        text2:"Where did this happen?",
        text:"Social Media",
        secondtext:"Text Messages",
        routeTo:"/pages2/socialmedia",
        routeTo2:"/pages2/texting"
    },
    socialmedia:{
        text1:"Unfortunatley, social media isnt always a friendly place. You can block the user or even report them.",
        text2:"Which of the following did you experience?",
        text:"Threatening",
        secondtext:"Bad Rumours",
        routeTo:"/pages2/intimidated",
        routeTo2:"/pages2/rumor"
    },
    texting:{
      text1:"Cyberbullying is a using the internet or text messages to intimidate, spread rumors, or make fun of someone.",
      text2:"Which of the following did the text message contain?",
      text:"Did someone threaten you?",
      secondtext:"Did someone spread rumors?",
      routeTo:"/pages2/intimidated",
      routeTo2:"/pages2/rumor"
    },
    intimidated:{
        text1:"Intimidation can be a form of bullying or criminal in some cases. Lets take a close look at your experience.",
        text2:"How has the bully intimidated you?",
        text:"Physical Harm",
        secondtext:"Blackmail",
        routeTo:"/pages2/whodid",
        routeTo2:"/pages2/whodid"
        
    },
    rumor:{
      text1:"Rumors are stories that are most likely false and can have malicious intent. Unlike threats, rumors can be spread faster through word of mouth.",
      text2:"How did this rumor start?",
      text:"Fake Stories",
      secondtext:"Fake Account",
      routeTo:"/pages2/whodid",
      routeTo2:"/pages2/whodid"
  },
    threatenharm:{
        text1:"I am sorry to hear youve been threatened. We are here for you!",
        text2:"Who is the person or group that is doing this to you?",
        text:"Classmates",
        secondtext:"Unknown trolls",
        routeTo:"/resultpages/cyberbullyclassmates",
        routeTo2:"/resultpages/cyberbullypolice"
    },
    whodid:{
      text1:"I am sorry to hear youve been threatened. We are here for you!",
      text2:"Who is the person or group that is doing this to you?",
      text:"Classmates",
      secondtext:"Unknown trolls",
      routeTo:"/resultpages/cyberbullyclassmates",
      routeTo2:"/resultpages/cyberbullypolice"

  },
  //cyberbullying end


  //verbalbullying start
  verbalbullying:{
    text1:"Verbal bullying is the act of forcefully criticizing, insulting, or denouncing another person.",
    text2:"How did this happen?",
    text:"Direct Insults",
    secondtext:"Bigoted Remarks",
    routeTo:"/pages2/insults",
    routeTo2:"/pages2/remarks"
  },
  insults:{
    text1:"Direct insults come in the form of name-calling, teasing and threats.",
    text2:"Which of the following did the insult contain?",
    text:"Name Calling",
    secondtext:"Threats",
    routeTo:"/pages2/names",
    routeTo2:"/pages2/threatenverbal"
  },
  remarks:{
    text1:"Bigoted remarks are making negative references to one’s culture, ethnicity, race, religion, gender, or sexual orientation.",
    text2:"Which of the following did the remark contain?",
    text:"Name Calling",
    secondtext:"Threats",
    routeTo:"/pages2/names",
    routeTo2:"/pages2/threatenverbal"
  },
  names:{
    text1:"Name calling can lead to more people joining in or  could even lead to physical bullying if escalated. It best to seek help immediately.",
    text2:"Do you think things might escalate?",
    text:"Yes",
    secondtext:"No",
    routeTo:"/pages2/whodidit",
    routeTo2:"/pages2/whodidit"
  },
  threatenverbal:{
    text1:"Threats can range from minor to major and all of them should be taken seriously. Although most threats do not evolve, they shoud be taken seriously as they are a crime.",
    text2:"What type of threat was it?",
    text:"Minor",
    secondtext:"Major (assault)",
    routeTo:"/pages2/whodidit",
    routeTo2:"/pages2/whodidit"
  },
  whodidit:{
    text1:"Who is the person or group that is doing this to you?",
    text2:"What type of threat was it?",
    text:"Classmates",
    secondtext:"Family",
    routeTo:"/resultspages/verbalbullyingschool",
    routeTo2:"/resultpages/verbalbullyingcanada"
  },
  //verbalbullying end


  //physicalbullying start
  physicalbullying:{
    text1:"Physical Bullying is the act of hitting, shoving, destroying or stealing belongings.",
    text2:"What kind of physical bullying happened?",
    text:"Physical Hits",
    secondtext:"Stealing",
    routeTo:"/pages2/punch",
    routeTo2:"/pages2/weapon"
  },

  punch:{
    text1:"To what extent did this hitting go to?",
    text2:"The most important thing is if you are ok!",
    text:"I Am Not Injured",
    secondtext:"I am Injured",
    routeTo:"/pages2/nothurt",
    routeTo2:"/pages2/hurt"
  },

  nothurt :{
    text1:"Make sure that you are truly not hurt. If you are, you may not find out until it gets worse.",
    text2:"After being hit, did this issue come to an end or do you think it may continue to happen?",
    text:"Continue",
    secondtext:"Not Continue",
    routeTo:"/pages2/whohurt",
    routeTo2:"/pages2/whohurt"
  },

  hurt :{
    text1:"If you're injured or hurt make sure you get the medical help you need.",
    text2:"Is there someone around that can help?",
    text:"No, There Isn't",
    secondtext:"Yes, There Is",
    routeTo:"/pages2/whohurt",
    routeTo2:"/pages2/whohurt"
  },
  weapon:{
    text1:"Stealing as aform of bullying is extremely alarming and in some cases, illegal.",
    text2:"Have they stolen anything yet?",
    text:"Yes",
    secondtext: "No",
    routeTo:"/pages2/wepthreat",
    routeTo2:"/pages2/wepassault"
  },

  wepthreat:{
    text1:"Notify someone immediatley. A threat like this may not be acted upon, but it is best to confont it.",
    text2:"Are you comfortable telling your family or teacher about this?",
    text:"Yes, i Am",
    secondtext:"No, I Am Not",
    routeTo:"/pages2/whohurt",
    routeTo2:"/pages2/whohurt"
  },

  wepassault:{
    text1:"If you have had things stolen from you, this is extreme bullying",
    text2:"Do you think this issue has come to an end or fear it may continue to happen?",
    text:"Continue",
    secondtext:"Not Continue",
    routeTo:"/pages2/whohurt",
    routeTo2:"/pages2/whohurt"
  },

  whohurt:{
    text1:"Make sure that you call someone immediately.",
    text2:"Who is person or group that did this to you?",
    text:"Students",
    secondtext:"Family",
    routeTo:"/resultpages/weaponstudent",
    routeTo2:"/resultpages/weaponfamily"
  },
  //physicalbullying end
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


    //cyberbullying chain
    if(routing === "cyberbullying"){
        big = bullying.cyberbullying.text1;
        sub = bullying.cyberbullying.text2;
        but1 = bullying.cyberbullying.text
        but2 = bullying.cyberbullying.secondtext
        link = bullying.cyberbullying.routeTo
        link2 = bullying.cyberbullying.routeTo2
    }
    if(routing === "socialmedia"){
        big = bullying.socialmedia.text1;
        sub = bullying.socialmedia.text2;
        but1 = bullying.socialmedia.text
        but2 = bullying.socialmedia.secondtext
        link = bullying.socialmedia.routeTo
        link2 = bullying.socialmedia.routeTo2
    }
    if(routing === "texting"){
      big = bullying.texting.text1;
      sub = bullying.texting.text2;
      but1 = bullying.texting.text
      but2 = bullying.texting.secondtext
      link = bullying.texting.routeTo
      link2 = bullying.texting.routeTo2
  }
    if(routing === "intimidated"){
        big = bullying.intimidated.text1;
        sub = bullying.intimidated.text2;
        but1 = bullying.intimidated.text
        but2 = bullying.intimidated.secondtext
        link = bullying.intimidated.routeTo
        link2 = bullying.intimidated.routeTo2
    }
    if(routing === "rumor"){
      big = bullying.rumor.text1;
      sub = bullying.rumor.text2;
      but1 = bullying.rumor.text
      but2 = bullying.rumor.secondtext
      link = bullying.rumor.routeTo
      link2 = bullying.rumor.routeTo2
  }
    if(routing === "threatenharm"){
        big = bullying.threatenharm.text1;
        sub = bullying.threatenharm.text2;
        but1 = bullying.threatenharm.text
        but2 = bullying.threatenharm.secondtext
    }
    if(routing === "whodid"){
      big = bullying.whodid.text1;
      sub = bullying.whodid.text2;
      but1 = bullying.whodid.text
      but2 = bullying.whodid.secondtext
      link = bullying.whodid.routeTo
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
    }

    if(routing === "insults"){
      big = bullying.insults.text1;
      sub = bullying.insults.text2;
      but1 = bullying.insults.text
      but2 = bullying.insults.secondtext
      link = bullying.insults.routeTo
      link2 = bullying.insults.routeTo2
    }

    if(routing === "remarks"){
      big = bullying.remarks.text1;
      sub = bullying.remarks.text2;
      but1 = bullying.remarks.text
      but2 = bullying.remarks.secondtext
      link = bullying.remarks.routeTo
      link2 = bullying.remarks.routeTo2
    }

    if(routing === "names"){
      big = bullying.names.text1;
      sub = bullying.names.text2;
      but1 = bullying.names.text
      but2 = bullying.names.secondtext
      link = bullying.names.routeTo
      link2 = bullying.names.routeTo2
    }

    if(routing === "threatenverbal"){
      big = bullying.threatenverbal.text1;
      sub = bullying.threatenverbal.text2;
      but1 = bullying.threatenverbal.text
      but2 = bullying.threatenverbal.secondtext
      link = bullying.threatenverbal.routeTo
      link2 = bullying.threatenverbal.routeTo2
    }
    if(routing === "whodidit"){
      big = bullying.whodidit.text1;
      sub = bullying.whodidit.text2;
      but1 = bullying.whodidit.text
      but2 = bullying.whodidit.secondtext
      link = bullying.whodidit.routeTo
      link2 = bullying.whodidit.routeTo2
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
    }

    if(routing === "punch"){
      big = bullying.punch.text1;
      sub = bullying.punch.text2;
      but1 = bullying.punch.text
      but2 = bullying.punch.secondtext
      link = bullying.punch.routeTo
      link2 = bullying.punch.routeTo2
    }

    if(routing === "weapon"){
      big = bullying.weapon.text1;
      sub = bullying.weapon.text2;
      but1 = bullying.weapon.text
      but2 = bullying.weapon.secondtext
      link = bullying.weapon.routeTo
      link2 = bullying.weapon.routeTo2
    }

    if(routing === "hurt"){
      big = bullying.hurt.text1;
      sub = bullying.hurt.text2;
      but1 = bullying.hurt.text
      but2 = bullying.hurt.secondtext
      link = bullying.hurt.routeTo
      link2 = bullying.hurt.routeTo2
    }

    if(routing === "nothurt"){
      big = bullying.nothurt.text1;
      sub = bullying.nothurt.text2;
      but1 = bullying.nothurt.text
      but2 = bullying.nothurt.secondtext
      link = bullying.nothurt.routeTo
      link2 = bullying.nothurt.routeTo2
    }

    if(routing === "wepthreat"){
      big = bullying.wepthreat.text1;
      sub = bullying.wepthreat.text2;
      but1 = bullying.wepthreat.text
      but2 = bullying.wepthreat.secondtext
      link = bullying.wepthreat.routeTo
      link2 = bullying.wepthreat.routeTo2
    }

    if(routing === "wepassault"){
      big = bullying.wepassault.text1;
      sub = bullying.wepassault.text2;
      but1 = bullying.wepassault.text
      but2 = bullying.wepassault.secondtext
      link = bullying.wepassault.routeTo
      link2 = bullying.wepassault.routeTo2
    }

    if(routing === "whohurt"){
      big = bullying.whohurt.text1;
      sub = bullying.whohurt.text2;
      but1 = bullying.whohurt.text
      but2 = bullying.whohurt.secondtext
      link = bullying.whohurt.routeTo
      link2 = bullying.whohurt.routeTo2
    }
    //physical bullying end

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