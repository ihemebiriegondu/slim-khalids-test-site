import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import UnilagPu from "./Pages/UnilagPu";
import University from "./components/University";
import Yabatech from "./Pages/Yabatech";
import Unilorin from "./Pages/Unilorin";
import Instructions from "./components/Instructions";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pickuniversity" element={<University />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/unilagtest" element={<UnilagPu />} />
            <Route path="/yabatechtest" element={<Yabatech />} />
            <Route path="/unilorintest" element={<Unilorin />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
