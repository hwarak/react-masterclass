import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
padding: 0px 20px;
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
    display: block;
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
const coins = [
    {
        "id":"btc-bitcoin", 
        "name":"Bitcoin",
        "symbol":"BTC",
        "rank":1,
        "is_new":false,
        "is_active":true,
        "type":"coin"
        },
        {
        "id":"eth-ethereum",
        "name":"Ethere um",
        "symbol":"ETH",
        "rank":2,
        "is_new":false,
        "is_active":true,
        "type":"coin"
        },
        {
        "id":"usdt-tether",
        "name":"Tether", 
        "symbol":"USDT",
        "rank":3,
        "is_new":false,
        "is_active":true,
        "type":"token"
        },
        {
        "id":"bnb-binance-coin",
        "name":"Binance Coin",
        "symbol":"BNB",
        "rank":4,
        "is_new":false,
        "is_active":true,
        "type":"coin"
        }
    ]

function Coins() {
    return <Container>
        <Header>
            <Title>Coin</Title>
        </Header>
        <CoinsList>
            {coins.map(coin => <Coin key={coin.id}><Link to={`/${coin.id}`}>{coin.name} &rarr;</Link></Coin>)}
        </CoinsList>
    </Container>
}

export default Coins;