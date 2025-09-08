import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormsPage from "./pages/FormsPage";
import RegrasPage from "./pages/RegrasPage";
import Cadastrese from "./pages/Cadastrese";
import FormsPageGame from "./pages/FormsPageGame";
import TeamsPage from "./pages/TeamsPage";
import MarketPage from "./pages/MarketPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrese" element={<Cadastrese />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/regras" element={<RegrasPage />} />
        <Route path="/forms-game" element={<FormsPageGame />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </Router>
  );
}

export default App;
