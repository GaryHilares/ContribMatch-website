import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Index";
import BlankPage from './pages/BlankPage';

function App() {

  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<BlankPage />} />
            <Route path="/projects" element={<BlankPage />} />
            <Route path="/resources" element={<BlankPage />} />
            <Route path="/contact" element={<BlankPage />} />
            <Route path="/link" element={<BlankPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;
