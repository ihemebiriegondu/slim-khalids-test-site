import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import Unilag from "./Pages/Unilag";
import UnilagPu from "./Pages/UnilagPu";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/unilag" element={<Unilag />} />
            <Route path="/unilagtest" element={<UnilagPu />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
