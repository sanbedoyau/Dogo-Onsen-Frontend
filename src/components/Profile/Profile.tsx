import  Navbar from "../Navbar/Navbar";
// import { Link } from 'react-router-dom';
import "./Profile.css";
import "./Reservations.css"
import "./Sidebar.css";

interface profileProps {
  name: string;
  type: string;
  email: string;
  imageUrl: string;
}
// Ejemplo de uso:
//<Profile name="John Doe" type="Haku" email="john@example.com" imageUrl="/src/assets/img/no-image.jpg" />
//Falta definir la estrucura de datos de las reservas y el sidebar
export default function Profile({ name, type, email, imageUrl }: profileProps) {

    return (
        <>
        {/* <Navbar /> */}
        <div className="profile-layout">
            <div className="profile">
                <div className="profile__content">
                    <img src={imageUrl} alt={`profile picture of ${name}`} className="profile__image"/>
                    <div className="profile__info">
                        <h2 className="profile__name">{name}</h2>
                        <p className="profile__type">Tipo {type}</p>
                        <p className="profile__email">{email}</p>

                        <div className="profile__description">Descripcion</div>

                        <button className="profile__edit-button">Editar profile</button>
                    </div>
                </div>
                <div className="profile__reservations">
                    <div className="profile__reservations-container">
                        <div className="profile__reservation-card">Reserva1</div>
                        <div className="profile__reservation-card">Reserva2</div>
                        <div className="profile__reservation-card">Reserva3</div>
                        <div className="profile__reservation-card">Reserva4</div>
                        <div className="profile__reservation-card">Reserva5</div>
                        <div className="profile__reservation-card">Reserva6</div>
                        <div className="profile__reservation-card">Reserva7</div>
                        <div className="profile__reservation-card">Reserva8</div>
                        <div className="profile__reservation-card">Reserva9</div>
                        <div className="profile__reservation-card">Reserva10</div>
                    </div>
                </div>
            </div>
            <div className="profile-sidebar">
                <h2>Opciones</h2>
            </div>
        </div>
        </>
    );
}