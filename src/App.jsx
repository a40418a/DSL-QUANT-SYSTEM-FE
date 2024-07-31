//페이지링크
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './layouts/navigator/Navigator';
import { Footer } from './layouts/footer/Footer';
import { Home } from './pages/main/home/Home';
import { Explain } from './pages/preview/explain/Explain';
import { Login } from './pages/info/login/Login';
import { MyPage } from './pages/info/myPage/MyPage';
import { MyPageCheck } from './pages/info/myPage/MyPageCheck';
import { Result } from './pages/main/result/Result';
import { StrategyMain } from './pages/main/strategy/StrategyMain';
import { StrategyGolden } from './pages/main/strategy/StrategyGolden';
import { StrategyBollinger } from './pages/main/strategy/StrategyBollinger';
import { StrategyRSI } from './pages/main/strategy/StrategyRSI';
import { StockInfo } from './pages/main/stockInfo/StockInfo';
import { LoginHandler } from './pages/info/login/LoginHandler';
import { AuthProvider } from './context/AuthContext';
import { StrategyProvider } from './context/StrategyContext';
import './app.css';
import './assets/fonts.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <StrategyProvider>
                        <Navigator />
                        <div className="container">
                            <Routes>
                                <Route path="/home" element={<Home />} />
                                <Route path="/" element={<Explain />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
                                <Route path="/stockinfo" element={<StockInfo />} />
                                <Route path="/mypage" element={<MyPage />} />
                                <Route path="/mypagecheck" element={<MyPageCheck />} />
                                <Route path="/result/:id" element={<Result />} />
                                <Route path="/strategy" element={<StrategyMain />} />
                                <Route path="/strategy/golden" element={<StrategyGolden />} />
                                <Route path="/strategy/bollinger" element={<StrategyBollinger />} />
                                <Route path="/strategy/rsi" element={<StrategyRSI />} />
                            </Routes>
                        </div>
                        <Footer />
                    </StrategyProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
