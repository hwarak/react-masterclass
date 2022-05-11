import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
  background-color : ${(props) => props.theme.backgroundColor}`;

  const H1 = styled.h1`
    color : ${(props) => props.theme.textColor}
  `;

  return <Container>
  <H1>hello</H1></Container>;
}

export default App;
