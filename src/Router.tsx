import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />}></Route>
                <Route path="/:coinId/*" element={<Coin />} />
            </Routes>
        </BrowserRouter>
    );
}

// Switch : 한번에 하나의 Route를 렌더링 할 수 있는 방법

export default Router;
