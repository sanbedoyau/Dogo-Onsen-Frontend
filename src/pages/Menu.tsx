import './Menu.css';
import Navbar from '../components/Navbar/Navbar';
import menuJson from '../data/Menu.json';

const menuItems = menuJson as any[];  // Este se puede cambiar si queremos agregar tipos a algo como Menu[]

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="menu-container">
        <h2 className="menu-title">Menú del Balneario</h2>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.imagen} alt={item.nombre} />
              <h3>{item.nombre}</h3>
              <p>{item.descripcion}</p>
              <strong>{item.precio}</strong>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
