import { useState } from 'react';
import useOutsideInteraction from '../hooks/useOutsideInteraction';
import { Link } from 'react-router-dom';

export default function Options() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const menuRef = useOutsideInteraction<HTMLDivElement>(
		isMenuOpen,
		() => setIsMenuOpen(false)
	);
	
	return (
		<>
			<Link to="/baños" className="navbar__btn--option" id="bañosBtn">Baños</Link>
			<Link to="/menu" className="navbar__btn--option" id="menuBtn">Menú</Link>
			<Link to="/jabones" className="navbar__btn--option" id="jabonesBtn">Jabones</Link>

			<button className='navbar__btn--login' onClick={ () => setIsMenuOpen(!isMenuOpen) }>
				Log in
				<span id='btn--arrow'>&#11167;</span>
			</button>

			<div ref = { menuRef } className={ `loginModal${isMenuOpen ? ' open' : ''}` }>
				<button className='loginModal__btn--close' onClick={ () => setIsMenuOpen(false) }>&times;</button>
				<h3>Perfil</h3>
				<p className='loginModal__content'>
					Un perfil permite realizar reservas y mejorar su experiencia
				</p>
				<div className='loginModal__btns'>
					<Link to='/login' className='loginModal__btn--login'>Iniciar sesión</Link>
					<Link to='/signup' className='loginModal__btn--signup'>Registrarse</Link>
				</div>
			</div>
		</>
    )
}