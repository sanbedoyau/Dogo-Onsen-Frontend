import { Link } from 'react-router-dom';

interface User {
	email: string;
	password: string;
	name: string;
	type: string;
	imageUrl: string;
	description: string;
	role: string;
}

interface OptionsProps {
	authUser: User | null;
}

export default function Options({ authUser }: OptionsProps) {
	return (
		<>
			<Link to="/baños" className="navbar__btn--option" id="bañosBtn">Baños</Link>
			<Link to="/menu" className="navbar__btn--option" id="menuBtn">Menú</Link>
			<Link to="/jabones" className="navbar__btn--option" id="jabonesBtn">Jabones</Link>

			{authUser && authUser.role === 'client' && (
				<Link to="/reservar" className="navbar__btn--option" id="reservarBtn">
					Reservar
				</Link>
			)}
		</>
	);
}
