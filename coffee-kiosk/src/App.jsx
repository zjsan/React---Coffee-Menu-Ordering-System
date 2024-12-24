
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Page from "./components/Page";

export default function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/page" element={<Page />} />
        </Routes>
    </Router>
  );
}
