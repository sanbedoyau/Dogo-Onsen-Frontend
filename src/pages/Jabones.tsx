import Navbar from "../components/Navbar/Navbar";
import "../pages/Jabones.css";
import jabonJson from "../data/Jabones.json";

const jabonItems = jabonJson as any[]; // Este se puede cambiar si queremos agregar tipos a algo como Jabón[]

export default function Jabones() {
  return (
    <>
      <Navbar />
      <div className="jabon-container">
        <h2 className="jabon-title">Jabones del Balneario</h2>
        <div className="jabon-grid">
          {jabonItems.map((item, index) => (
            <div className="jabon-card" key={index}>
              <div className="jabon-card-inner">
                <div className="jabon-card-front">
                  <img src={item.imagen} alt={item.nombre} />
                  <h3>{item.nombre}</h3>
                  <strong>{item.precio}</strong>
                </div>
                <div className="jabon-card-back">
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
