import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import Unilag from "./Pages/Unilag";
import UnilagPQ from "./Pages/UnilagPQ";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/unilagtest" element={<UnilagPQ />} />
            <Route path="/unilag" element={<Unilag />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
