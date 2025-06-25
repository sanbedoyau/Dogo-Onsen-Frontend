import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import NotFoundError from './pages/NotFoundError';
import Jabones from './pages/Jabones';
import Baños from './pages/Baños';
import useScrollToTop from './components/hooks/useScrollToTop';
import SignUp from './pages/signUp';
import LogIn from './pages/LogIn';
import Profile from './components/Profile/Profile';
import users from './data/users.json';
import Reservas from './pages/Reservas';

function AppRoutes() {
    const user = users.find(u => u.role === 'client');
    useScrollToTop();

    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } /> 
            <Route path='/menu' element={ <Menu /> } />
            <Route path='/jabones' element={ <Jabones /> } />
            <Route path='/baños' element={ <Baños /> } />
            <Route path='/login' element={ <LogIn /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route path='*' element={ <NotFoundError /> } />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/perfil" element={ <Profile
                name={user.name}
                type={user.type}
                email={user.email}
                imageUrl={user.imageUrl}
                description={user.description}/> }/>
        </Routes>
    );
}

export default function App() {

    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}