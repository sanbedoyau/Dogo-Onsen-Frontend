import  Navbar from "../Navbar/Navbar";
// import { Link } from 'react-router-dom';
import "../Profile/Profile.css";
import "./Reservations.css"
import "./Sidebar.css";
import Reservas from "../../data/reservas.json";
import { Link } from "react-router-dom";
import useOutsideInteraction from "../hooks/useOutsideInteraction";
import { useState } from "react";

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
    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalRef = useOutsideInteraction<HTMLDivElement>(
        isModalOpen,
        () => setIsModalOpen(false)
    );

    return (
        <>
        <Navbar />
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

                        <p className="profile__description">{description}</p>

                        <button className="profile__edit-button" onClick={() => setIsModalOpen(!isModalOpen)}>Editar perfil</button>
                        <div className={`editProfile${isModalOpen ? ' open' : ''}`}>
                            <div ref={modalRef} className='editProfileModal'>
                                <div className="editProfile__heading">
                                    <i 
                                        className="fas fa-xmark"
                                        onClick={() => setIsModalOpen(!isModalOpen)} />
                                </div>
                                <form className="editProfile__form">
                                    <input type="text" className="form__input" placeholder="Nombre" />
                                    <input type="text" className="form__input" placeholder="Apellido" />
                                    <input type="tel" className="form__input" placeholder="Telefono" />
                                    <input type="text" className="form__input" placeholder="Descripción" />
                                    <input type="password" className="form__input" placeholder="Constraseña" />
                                    <input type="password" className="form__input" placeholder="Confirmar contraseña" />
                                    <input type="text" className="form__input" placeholder="Imagen" />
                                    <input type="submit" className="form__btn" value="Actualizar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__reservations">
                    <div className="profile__reservations-container">
                        {Reservas.map((reserva, index) => (
                            <div key={index} className="profile__reservation-card">
                                <h3 className="profile__reservation-service">{reserva.servicio}</h3>
                                <time className="profile__reservation-date" dateTime={reserva.fecha}>Fecha: {reserva.fecha}</time>
                                <p className="profile__reservation-time">Hora: {reserva.hora}</p>
                            </div>
                        ))}
                    </div>
                    <Link className="profile__reservations-link" to="/reservas">
                        <button className="profile__reservations-button">Ver todas las reservas</button>
                    </Link>
                </div>
            </div>
            <div className="profile-sidebar">
                <h2>Opciones</h2>
            </div>
        </div>
        </>
    );
}