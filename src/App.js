import Headers from "./layout/Headers";
import AboutPage from "./pages/AboutPage";
import ContestPage from "./pages/ContestPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NinjaPage from "./pages/NinjaPage";
import PyramidsPage from "./pages/PyramidsPage";
import Container from "./MainContainer/Container";

function App() {
  return (
    <div className="App rounded-2xl ml-6 mr-6 mx-auto max-sm:m-0 max-sm:p-0">
   
      <Router>
        <Headers />
        <Container />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/ContestPage" element={<ContestPage />} />
          <Route path="/NinjaPage" element={<NinjaPage />} />
          <Route path="/PyramidsPage" element={<PyramidsPage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
