import bañoLoto from '../assets/img/baño_loto.jpg';
import bañoLuna from '../assets/img/baño_luna.jpg';
import bañoDragon from '../assets/img/baño_dragon.jpg';
import bañoHechicero from '../assets/img/baño_hechizo.jpg';
import bañoAlmas from '../assets/img/baño_almas.jpg';
import "../pages/Baños.css";
import Navbar from "../components/Navbar/Navbar";


const bañosItems = [
    {
        nombre: 'Baño de Vapor termal del loto silencioso',
        descripcion: 'Un baño revitalizante que despeja las vías respiratorias y relaja los músculos.',
        precio: '$30 Dragas',
        imagen: bañoLoto,
    },
    {
        nombre: 'Baño termal de luna de media noche',
        descripcion: 'Un baño aromático que envuelve el cuerpo en fragancias florales y naturales.',
        precio: '$28 Dragas',
        imagen: bañoLuna,
    },
    {
        nombre: 'Baño termal escama de dragón',
        descripcion: 'Un baño que utiliza arcilla especial para desintoxicar la piel y relajar la mente.',
        precio: '$32 Dragas',
        imagen: bañoDragon,
    },
    {
        nombre: 'termales hierbas del hechicero',
        descripcion: 'Un baño hidratante que suaviza la piel y proporciona una experiencia de spa en casa.',
        precio: '$35 Dragas',
        imagen: bañoHechicero,
    },
    {
        nombre: 'Baño de las almas perdidas',
        descripcion: 'Un baño que combina hierbas y aceites esenciales para una experiencia relajante.',
        precio: '$25 Dragas',
        imagen: bañoAlmas,
    },
];
export default function Baños() {
  return (
    <>
      <Navbar />
      <div className="baños-container">
        <h2 className="baños-title">Baños del Balneario</h2>
        <div className="baños-grid">
          {bañosItems.map((item, index) => (
            <div className="baños-card" key={index}>
              <div className="baños-card-inner">
                <div className="baños-card-front">
                  <img src={item.imagen} alt={item.nombre} />
                  <h3>{item.nombre}</h3>
                  <strong>{item.precio}</strong>
                </div>
                <div className="baños-card-back">
                  <p>{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}