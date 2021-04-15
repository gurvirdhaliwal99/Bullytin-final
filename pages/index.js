import Head from 'next/head'
import Button from "../comps/Button/index.js";
import Circle from "../comps/Circlelogo/index.js";
import Box from "../comps/Textbox/index.js";
import AvatarV from "../comps/Avatar_V/index.js";
import AvatarW from "../comps/Avatar_W/index.js";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  background-image: linear-gradient(#DC7F9B, White);
  background-color:#DC7F9B;
  height: 100vh;
`;

export default function Home() {
  return (
    <Container>

      <div className="header">
      <Circle> </Circle>
      </div>

      <div className="AvatarW">
        <AvatarW></AvatarW>
      </div>

      <div className="body">
        <Box></Box>
      </div>

      <div className="buttons">
        <Button text="Bystander" color="#DC7F9B" padding="10px 75px"></Button>
        <Button text="Victim" color="#7CB2E3" padding="10px 90px"></Button>
      </div>

    </Container>
    
  )
}
