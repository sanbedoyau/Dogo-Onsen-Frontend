import  Navbar from "../Navbar/Navbar";
// import { Link } from 'react-router-dom';
import "../Profile/Profile.css";
import "./Reservations.css"
import "./Sidebar.css";
import Reservas from "../../data/reservas.json";

interface profileProps {
  name: string;
  type: string;
  email: string;
  imageUrl: string;
  description: string;
}
// Ejemplo de uso:
//<Profile name="John Doe" type="Haku" email="john@example.com" imageUrl="/src/assets/img/no-image.jpg" />
//Falta definir la estrucura de datos de las reservas y el sidebar
export default function Profile({ name, type, email, imageUrl, description }: profileProps) {

    return (
        <>
        {/* <Navbar /> */}
        <div className="profile-layout">
            <div className="profile">
                <div className="profile__content">
                    {/* <div className="profile__image-wrapper"> */}
                    <img src={imageUrl} alt={`profile picture of ${name}`} className="profile__image"/>

                    {/* </div> */}
                    <div className="profile__info">
                        <h2 className="profile__name">{name}</h2>
                        <p className="profile__type">Tipo {type}</p>
                        <p className="profile__email">{email}</p>

                        <div className="profile__description">{description}</div>

                        <button className="profile__edit-button">Editar perfil</button>
                    </div>
                </div>
                <div className="profile__reservations">
                    <div className="profile__reservations-container">
                        {Reservas.map((reserva, index) => (
                            <div key={index} className="profile__reservation-card">
                                {reserva.servicio}
                            </div>
                        ))}
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