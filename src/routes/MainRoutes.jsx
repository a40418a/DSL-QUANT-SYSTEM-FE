// src/routes/MainRoutes.jsx
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/main/home/Home";
import { Explain } from "../pages/preview/explain/Explain";
import { Login } from "../pages/info/login/Login";
import { MyPage } from "../pages/info/myPage/MyPage";
import { Result } from "../pages/main/result/Result";
import { StrategyMain } from "../pages/main/strategy/StrategyMain";
import { StrategyGolden } from "../pages/main/strategy/StrategyGolden";
import { StrategyBollinger } from "../pages/main/strategy/StrategyBollinger";
import { StrategyRSI } from "../pages/main/strategy/StrategyRSI";
import { StrategyEnv } from "../pages/main/strategy/StrategyEnv";
import { StrategyWilliams } from "../pages/main/strategy/StrategyWilliams";
import { StockList } from "../pages/main/stockList/StockList";
import { StockInfo } from "../pages/main/stockInfo/StockInfo";
import { LoginHandler } from "../pages/info/login/LoginHandler";
import { StrategyBE } from "../pages/main/strategy/combine/StrategyBE";
import { StrategyBR } from "../pages/main/strategy/combine/StrategyBR";
import { StrategyBG } from "../pages/main/strategy/combine/StrategyBG";
import { StrategyEG } from "../pages/main/strategy/combine/StrategyEG";
import { StrategyER } from "../pages/main/strategy/combine/StrategyER";
import { StrategyEW } from "../pages/main/strategy/combine/StrategyEW";
import { StrategyBW } from "../pages/main/strategy/combine/StrategyBW";
import { StrategyGW } from "../pages/main/strategy/combine/StrategyGW";
import { StrategyGR } from "../pages/main/strategy/combine/StrategyGR";
import { StrategyRW } from "../pages/main/strategy/combine/StrategyRW";
import { NotFound } from "../pages/preview/notfound/NotFound";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/home/" element={<Home />} />
            <Route path="/" element={<Explain />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/login/oauth2/code/kakao/" element={<LoginHandler />} />
            <Route path="/stocklist/" element={<StockList />} />
            <Route path="/stockinfo/" element={<StockInfo />} />
            <Route path="/stockinfo/:id/" element={<StockInfo />} />
            <Route path="/mypage/" element={<MyPage />} />
            <Route path="/result/:id/" element={<Result />} />
            <Route path="/result/:first/:second/" element={<Result />} />
            <Route path="/strategy/" element={<StrategyMain />} />
            <Route path="/strategy/golden/" element={<StrategyGolden />} />
            <Route path="/strategy/bollinger/" element={<StrategyBollinger />} />
            <Route path="/strategy/rsi/" element={<StrategyRSI />} />
            <Route path="/strategy/env/" element={<StrategyEnv />} />
            <Route path="/strategy/williams/" element={<StrategyWilliams />} />

            <Route path="/strategy/bollinger/env/" element={<StrategyBE />} />
            <Route path="/strategy/bollinger/golden/" element={<StrategyBG />} />
            <Route path="/strategy/bollinger/rsi/" element={<StrategyBR />} />
            <Route path="/strategy/bollinger/williams/" element={<StrategyBW />} />
            <Route path="/strategy/env/golden/" element={<StrategyEG />} />
            <Route path="/strategy/env/rsi/" element={<StrategyER />} />
            <Route path="/strategy/env/williams/" element={<StrategyEW />} />
            <Route path="/strategy/golden/rsi/" element={<StrategyGR />} />
            <Route path="/strategy/golden/williams/" element={<StrategyGW />} />
            <Route path="/strategy/rsi/williams/" element={<StrategyRW />} />

            {/* 404페이지 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRoutes;
