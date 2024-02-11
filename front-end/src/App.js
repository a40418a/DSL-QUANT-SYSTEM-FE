//페이지링크
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topbar } from "./components/topbar/Topbar";
import { Home } from "./pages/home/Home";
import { Page01 } from "./pages/page01/Page01";
import { Page02 } from "./pages/page02/Page02";
import { Page03 } from "./pages/page03/Page03";
import { Page04 } from "./pages/page04/Page04";
import { SignIn } from "./pages/signIn/SignIn";
import { SignUp } from "./pages/signUp/SignUp";
import "./app.css";
import "./assets/fonts.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page01" element={<Page01 />} />
            <Route path="/page02" element={<Page02 />} />
            <Route path="/page03" element={<Page03 />} />
            <Route path="/page04" element={<Page04 />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
