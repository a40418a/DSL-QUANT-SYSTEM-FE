//페이지링크
import React from 'react';
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
import { Strategy1 } from './pages/Main/strategy/Strategy1';
import { Strategy2 } from './pages/Main/strategy/Strategy2';
import { Strategy3 } from './pages/Main/strategy/Strategy3';
import { Thumbnail } from './pages/Front/thumbnail/Thumbnail';
import { LoginHandler } from './pages/Info/login/LoginHandler';
import './app.css';
import './assets/fonts.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Topbar />
                <div className="container">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/" element={<Explain />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/login/oauth2/code/kakao" element={<LoginHandler />} />
                        <Route path="/mypage" element={<MyPage />} />
                        <Route path="/mypagecheck" element={<MyPageCheck />} />
                        <Route path="/result" element={<Result />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/strategy1" element={<Strategy1 />} />
                        <Route path="/strategy2" element={<Strategy2 />} />
                        <Route path="/strategy3" element={<Strategy3 />} />
                        <Route path="/thumbnail" element={<Thumbnail />} />
                    </Routes>
                </div>
                {/* <Footbar/> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
