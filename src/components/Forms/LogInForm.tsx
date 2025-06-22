import { Link } from 'react-router-dom';


export default function LogInForm() {
    return (
        <>
            <main className='mainForm'>
                <form className='Form'>
                    <h2>Inicio de sesión</h2>
                    <div className='login_Form'>
                        <input type='email' className='Form__input' id='email' name='email' placeholder='Email' required/>
                        <input type='password' className='Form__input' id='password' name='passworf' placeholder='Contraseña' required/>
                    </div>
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