import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormsPage from "./pages/FormsPage";
import RegrasPage from "./pages/RegrasPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/regras" element={<RegrasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
