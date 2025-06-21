import "../pages/Baños.css";
import Navbar from "../components/Navbar/Navbar";
import bañosJson from "../data/Baños.json" 

const bañosItems = bañosJson as any[]; // Este se puede cambiar si queremos agregar tipos a algo como Baños[]


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