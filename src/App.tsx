import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Index";
import BlankPage from "./pages/BlankPage";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<BlankPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resources" element={<BlankPage />} />
            <Route path="/contact" element={<BlankPage />} />
            <Route path="/link" element={<BlankPage/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
