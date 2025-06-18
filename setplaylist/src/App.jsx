import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import SearchResults from "./pages/searchresults";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
