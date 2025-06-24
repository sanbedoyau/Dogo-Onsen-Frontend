import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import users from '../../data/users.json';



export default function LogInForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const user = users.find( (u) => u.email === email && u.password === password );

        if (user) {
            setErrorMsg('');

            localStorage.setItem('loggedUser', JSON.stringify(user))

            if (user.role === 'admin') {
                navigate('/admin-pane');
            } else if (user.role === 'client') {
                navigate('/');
            }
        } else {
            setErrorMsg('Credenciales incorrectas');
        }
        };


    return (
        <>
            <main className='mainForm'>
                <form className='Form' onSubmit={ handleSubmit }>
                    <h2>Inicio de sesión</h2>
                    <div className='login_Form'>
                        <input type='email' className='Form__input' id='email' name='email' placeholder='Email' value={ email } onChange={ (e) => setEmail(e.target.value) } required/>
                        <input type='password' className='Form__input' id='password' name='passworf' placeholder='Contraseña' value={ password } onChange={ (e) => setPassword(e.target.value) } required/>
                    </div>
                    { errorMsg && <p className='Form__error'>{ errorMsg }</p> }
                    <input type='submit' className='Form__btn' value='Iniciar sesión' />
                    <div className='alreadyHave'>
                        <p>Aún no tienes una cuenta?</p>
                        <Link to='/signup' className='alreadyHave__btn'>Regístrate</Link>
                    </div>
                </form>
            </main>
        </>
    );
}