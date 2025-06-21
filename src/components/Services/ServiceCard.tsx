import { Link } from 'react-router';
import './ServiceCard.css'

interface ServiceCardProps {
  title: string;
  description?: string;
  images?: string[];
  link?: string;
  buttonText?: string;
}
export const ServiceCard = ({ title, description = "Sin descripción disponible.", images = Array(4).fill("src/assets/img/no-image.jpg"), link = '/', buttonText = "Ver más"}: ServiceCardProps) => {
  return (
    <div className="service-card">
        <div className="service-card__images">
            {images.map((src, i) => (<img className="service-card__image" key={i} src={src} alt={`${title} imagen ${i + 1}`}/>))}
        </div>
        <div className="service-card__description">
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__text">{description}</p>
            <Link to={link} className="service-card__button">{buttonText}</Link>
        </div>
    </div>
  );
};
