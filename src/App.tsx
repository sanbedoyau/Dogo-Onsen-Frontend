import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/menu' element={ <Menu /> } />
            </Routes>
        </Router>
    );
}