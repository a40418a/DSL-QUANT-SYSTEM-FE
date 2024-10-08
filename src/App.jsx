// src/App.js
import { BrowserRouter } from "react-router-dom";
import { Navigator } from "./layouts/navigator/Navigator";
import { Footer } from "./layouts/footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { StrategyProvider } from "./context/StrategyContext";
import MainRoutes from "./routes/MainRoutes"; // MainRoutes를 가져옵니다.
import "./app.css";
import "./assets/fonts.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <StrategyProvider>
                        <Navigator />
                        <div className="container">
                            <MainRoutes /> {/* MainRoutes 컴포넌트를 사용합니다. */}
                        </div>
                        <Footer />
                    </StrategyProvider>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
