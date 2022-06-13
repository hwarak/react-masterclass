import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isConstructorDeclaration } from "typescript";

const Container = styled.div`
padding: 0px 20px;
max-width: 480px;
margin: 0 auto;
`

const Header = styled.header`
height: 15vh;
display: flex;
justify-content: center;
align-items: center;
`

const CoinsList = styled.ul``

const Coin = styled.li`
background-color: white;
color: ${(props) => props.theme.backgroundColor};
padding: 20px;
margin-bottom: 10px;
border-radius: 15px;
a{
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
}
&:hover{
   a{
       color:${props => props.theme.accentColor};
   } 
}
`

const Title = styled.h1`
font-size: 48px;
color:${(props) => props.theme.accentColor};                   
`

const Loader = styled.span`
    text-align: center;
    display: block;
`

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`

interface CoinInterface{
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    // 우리 state가 coin 으로 된 array라고 말해주자

    const [loading, setLoading] = useState(true);

    // 특정한 시기에만 코드를 실행하기 위해 useEffect를 사용하자
    // component life의 시작점에서만 실행하도록 할거야

    useEffect(() => {
        // 여기서 바로 function을 실행시킬 수 있음
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
         })();
    }, []);
    return <Container>
        <Header>
            <Title>Coin</Title>
        </Header>
        {loading ? (<Loader>Loading...</Loader>) : (
            <CoinsList> 
                {coins.map(coin =>
                <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                        <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                        {coin.name} &rarr;
                    </Link>
                    </Coin>)}
            </CoinsList>)}
        
    </Container>
}

export default Coins;