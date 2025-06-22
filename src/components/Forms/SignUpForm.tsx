import { Link } from 'react-router-dom';
import './Form.css';

export default function SignUpForm() {

    return (
        <>
            <main className='mainForm'>
                <form className='Form'>
                    <h2>Formulario de Registro</h2>
                    <div className='signupForm__basicInfo'>
                        <input type='text' className='Form__input' id='firstName' name='firstName' placeholder='Nombre'required/>
                        <input type='text' className='Form__input' id='lastName' name='lastName' placeholder='Apellido' required/>
                        <input type='number' className='Form__input' id='ID' name='ID' placeholder='ID' autoFocus required/>
                        <input className='Form__input none' />
                    </div>
                    <div className='signupForm__contactInfo' >
                        <input type='email' className='Form__input' id='email' name='email' placeholder='Email' required/>
                        <input type='tel' className='Form__input' id='phone' name='phone' placeholder='Teléfono' />
                        <input className='Form__input none' />
                    </div>
                    <div className='signupForm__password' >
                        <input type='password' className='Form__input' placeholder='Confirmar contraseña' required />
                        <input type='password' className='Form__input' id='password' name='password' placeholder='Contraseña' required />
                        <input className='Form__input none' />
                    </div>
                    <input type='submit' className='Form__btn' value='Registrarse'/>
                    <div className='alreadyHave'>
                        <p>Ya tienes una cuenta?</p>
                        <Link to='/login' className='alreadyHave__btn'>Inicia sesión</Link>
                    </div>
                </form>
            </main>
        </>
    );
}