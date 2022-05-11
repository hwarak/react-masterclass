import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Coins />}>
            </Route >
            <Route path="/:coinId" element={<Coin />}>
            </Route>
        </Routes>
    </BrowserRouter>
}

// Switch : 한번에 하나의 Route를 렌더링 할 수 있는 방법

export default Router;