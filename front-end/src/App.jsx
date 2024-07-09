//페이지링크
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from './components/topbar/Topbar';
import { Footbar } from './components/footbar/Footbar';
import { Home } from './pages/Main/home/Home';
import { Explain } from './pages/Front/explain/Explain';
import { Login } from './pages/Info/login/Login';
import { Signup } from './pages/Info/signup/Signup';
import { MyPage } from './pages/Info/myPage/MyPage';
import { MyPageCheck } from './pages/Info/myPageCheck/MyPageCheck';
import { Result } from './pages/Main/result/Result';
import { StrategyMain } from './pages/Main/strategy/StrategyMain';
import { Strategy1 } from './pages/Main/strategy/StrategyGolden';
import { Strategy2 } from './pages/Main/strategy/StrategyBollinger';
import { Strategy3 } from './pages/Main/strategy/StrategyRSI';
import { StockInfo } from './pages/Main/StockInfo/StockInfo';
import { LoginHandler } from './pages/Info/login/LoginHandler';
import './app.css';
import './assets/fonts.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Topbar />
                    <div className="container">
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/" element={<Explain />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
                            <Route path="/stockinfo" element={<StockInfo />} />
                            <Route path="/mypage" element={<MyPage />} />
                            <Route path="/mypagecheck" element={<MyPageCheck />} />
                            <Route path="/result" element={<Result />} />
                            <Route path="/strategy" element={<StrategyMain />} />
                            <Route path="/strategy/golden" element={<Strategy1 />} />
                            <Route path="/strategy/bollinger" element={<Strategy2 />} />
                            <Route path="/strategy/rsi" element={<Strategy3 />} />
                        </Routes>
                    </div>
                    <Footbar />
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
