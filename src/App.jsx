import HomePage from "./pages/HomePage";
import Video from "./components/video";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from "./components/Button";
import { Recipe } from "./pages/Recipe";

function App () {
    return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/recipe" element={<Recipe />}/>
        </Routes>
    </Router>
       
    </>
    );
}

export default App;