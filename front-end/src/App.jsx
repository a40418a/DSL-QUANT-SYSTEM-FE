//페이지링크
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Topbar } from './components/topbar/Topbar';
import { Footbar } from './components/footbar/Footbar';
import { Home } from './pages/main/home/Home';
import { Explain } from './pages/preview/explain/Explain';
import { Login } from './pages/info/login/Login';
import { MyPage } from './pages/info/myPage/MyPage';
import { MyPageCheck } from './pages/info/myPageCheck/MyPageCheck';
import { Result } from './pages/main/result/Result';
import { StrategyMain } from './pages/main/strategy/StrategyMain';
import { Strategy1 } from './pages/main/strategy/Strategy1';
import { Strategy2 } from './pages/main/strategy/Strategy2';
import { Strategy3 } from './pages/main/strategy/Strategy3';
import { StockInfo } from './pages/main/stockInfo/StockInfo';
import { LoginHandler } from './pages/info/login/LoginHandler';
import { AuthProvider } from './handler/AuthContext';
import { StrategyProvider } from './context/StrategyContext';
import './app.css';
import './assets/fonts.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <StrategyProvider>
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
                                <Route path="/result/:id" element={<Result />} />
                                <Route path="/strategy" element={<StrategyMain />} />
                                <Route path="/strategy/1" element={<Strategy1 />} />
                                <Route path="/strategy/2" element={<Strategy2 />} />
                                <Route path="/strategy/3" element={<Strategy3 />} />
                            </Routes>
                        </div>
                        <Footbar />
                    </StrategyProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
