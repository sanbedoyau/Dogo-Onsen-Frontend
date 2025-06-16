import { useState } from 'react';
import useOutsideInteraction from '../hooks/useOutsideInteraction';

export default function Options() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	
	const menuRef = useOutsideInteraction<HTMLDivElement>(
		isMenuOpen,
		() => setIsMenuOpen(false)
	);
	
	return (
		<>
			<button className='navbar__btn--option' id='bañosBtn'>Baños</button>
			<button className='navbar__btn--option' id='menuBtn'>Menú</button>
			<button className='navbar__btn--option' id='jabonesBtn'>Jabones</button>
			<button className='navbar__btn--login' onClick={ () => setIsMenuOpen(!isMenuOpen) }>
				Log in
				<span id='btn--arrow'>&#11167;</span>
			</button>

			<div ref = { menuRef } className={ `loginModal ${isMenuOpen ? 'open' : ''}` }>
				<button className='loginModal__btn--close' onClick={ () => setIsMenuOpen(!isMenuOpen) }>&times;</button>
				<h3 className='loginModal__Header'>Perfil</h3>
				<p className='loginModal__content'>
					Una cuenta permite realizar reservas :)
				</p>
				<div className='loginModal__btn'>
					<button className='loginModal__btn--Login'>Iniciar sesión</button>
					<button className='loginModal__btn--Signup'>Registrarse</button>
				</div>
			</div>
		</>
    )
}