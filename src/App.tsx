import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import NotFoundError from './pages/NotFoundError';
import Jabones from './pages/Jabones';
import Baños from './pages/Baños';
import ScrollToTop from './components/hooks/scrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop/>  
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/menu' element={ <Menu /> } />
                <Route path='/jabones' element={ <Jabones /> } />
                <Route path='/baños' element={ <Baños /> } />
                <Route path='*' element={ <NotFoundError /> } />
            </Routes>
        </Router>
    );
}