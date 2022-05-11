import styled from "styled-components"
import { isPropertySignature } from "typescript";

interface ContainerProps {
    bgColor: string
    borderColor: string
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height:200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 5px solid ${(props) => props.borderColor}
`

interface CircleProps {
    // interface 안에다가 타입스크립트에게 오브젝트 모양을 설명해줄거야
    // 타입스크립트에게 bgColor는 string이 되어야 한다고 설명해주자
    bgColor: string
    borderColor?: string
    text?: string
}

// CircleProps의 타입이 뭔지 Compinent에게 말해줘야함
// 이 bgColor의 타입은 CircleProps의 object라고 말해주고있는거야
function Circle({bgColor,borderColor, text = "default text"}:CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? "blue"}>
        {text}
    </Container>  
}

export default Circle;