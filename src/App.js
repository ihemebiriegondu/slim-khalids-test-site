import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import UnilagPu from "./Pages/UnilagPu";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/unilagtest" element={<UnilagPu />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
