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

export default function Pages2(){
    const router = useRouter();
    const {routing} = router.query;

    var big = "From what youve told us,";
    var sub = "If you need more help, email us: Support@bullyingCanada.ca or call us: (677)-553-4497";
    var but1 = "Return Home";
    var link = "/";


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