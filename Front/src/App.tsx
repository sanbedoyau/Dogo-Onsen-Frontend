import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import Menu from './pages/Menu';
import NotFoundError from './pages/NotFoundError';
import Jabones from './pages/Jabones';
import Baños from './pages/Baños';
import useScrollToTop from './components/hooks/useScrollToTop';
import SignUp from './pages/signUp';
import LogIn from './pages/LogIn';
import Profile from './pages/ProfilePage';
import Reservas from './pages/Reservas';
import FlujoReserva from './pages/FlujoReserva';
import AdminOptions from './pages/AdminOptions';
import ProtectedRoute from './components/ProtectedRoute';
import { jwtDecode } from 'jwt-decode';

function AppRoutes() {

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode<{ exp: number }>(token)
            if (decoded.exp * 1000 < Date.now()) {
                localStorage.removeItem('token');
                localStorage.removeItem('loggedUser');
                window.location.href = '/login';
            }
        }

    });

    useScrollToTop();

    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } /> 
            <Route path='/menu' element={ <Menu /> } />
            <Route path='/jabones' element={ <Jabones /> } />
            <Route path='/baños' element={ <Baños /> } />
            <Route path='/login' element={ <LogIn /> } />
            <Route path='/signup' element={ <SignUp /> } />
            <Route element= { <ProtectedRoute /> }>
                <Route path="/reservar" element={<FlujoReserva />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/profile" element={ <Profile /> }/>
                <Route path="/admin-options" element={ <AdminOptions /> } />
            </Route>
            <Route path='*' element={ <NotFoundError /> } />
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