import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import NotFoundError from './pages/NotFoundError';
import Jabones from './pages/Jabones';
import Baños from './pages/Baños';
import useScrollToTop from './components/hooks/useScrollToTop';
import SignUp from './pages/signUp';

export default function App() {
    useScrollToTop();

    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/menu' element={ <Menu /> } />
                <Route path='/jabones' element={ <Jabones /> } />
                <Route path='/baños' element={ <Baños /> } />
                <Route path='/signup' element={ <SignUp /> } />
                <Route path='*' element={ <NotFoundError /> } />
            </Routes>
        </Router>
    );
}