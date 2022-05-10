import styled from "styled-components";

const Father = styled.div`
  display:flex;
`

const Box = styled.div`
  background-color:${(props) => props.bgColor};
  width:100px;
  height:100px;
`

// Box의 모든 속성을 받아오소 border-radius를 더해줄거야
const Circle = styled(Box)`
  border-radius:50px;
`

function App() {
  return <Father>
    <Box bgColor="teal" />
    <Circle bgColor="tomato" />
  </Father>;
}

export default App;
