import { Link } from 'react-router-dom';

export default function Options() {
	
	return (
		<>
			<Link to="/baños" className="navbar__btn--option" id="bañosBtn">Baños</Link>
			<Link to="/menu" className="navbar__btn--option" id="menuBtn">Menú</Link>
			<Link to="/jabones" className="navbar__btn--option" id="jabonesBtn">Jabones</Link>
		</>
    )
}