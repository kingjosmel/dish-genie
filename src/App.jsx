import HomePage from "./pages/HomePage";
import Video from "./components/video";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from "./components/Button";
import Ingredients from './pages/Ingredients'

function App () {
    return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/ingredients" element={<Ingredients />}/>
        </Routes>
    </Router>
       
    </>
    );
}

export default App;