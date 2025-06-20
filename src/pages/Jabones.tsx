import Navbar from "../components/Navbar/Navbar";
import "../pages/Jabones.css";
import jabonLoto from "../assets/img/jabon_loto.jpg";
import jabonInframundo from "../assets/img/jabon_infra.jpg";
import jabonFenix from "../assets/img/jabon_fenix.jpg";
import jabonSauce from "../assets/img/jabon_sauce.jpg";
import jabonArcilla from "../assets/img/jabon_silver.jpg";
import jabonRayo from "../assets/img/jabon rayo.jpg";
const jabonItems = [
  {
    nombre: "Jabón de Loto Blanco Eterno",
    descripcion:
      "Calma el alma agitada, favorece sueños proféticos y elimina residuos de energía negativa leve.",
    precio: " $20 Dragmas",
    imagen: jabonLoto,
  },
  {
    nombre: "Carbón del Inframundo",
    descripcion:
      "Purificación profunda del aura, disuelve maldiciones menores y limpia la memoria emocional.",
    precio: "$18 Dragmas",
    imagen: jabonInframundo,
  },
  {
    nombre: "Vapor de Fénix",
    descripcion:
      "Restaura la vitalidad espiritual, energiza el cuerpo etéreo y da vigor al alma reencarnada.",
    precio: "$22 Dragmas",
    imagen: jabonFenix,
  },
  {
    nombre: "Bruma de Sauce Llorón	  ",
    descripcion: 
    " Reduce la melancolía postvida, ideal para espíritus en duelo o que extrañan el mundo humano.	 ",
    precio: " $16 Dragmas  ", 
    imagen: jabonSauce,

  },
  {
    nombre: " Arcilla Lunar Plateada ",
    descripcion: "  Rejuvenece la “piel astral”, equilibra chakras espectrales y suaviza grietas en el cuerpo etéreo.	",
    precio: " $30 Dragmas ", 
    imagen: jabonArcilla,

  },
  {
    nombre: " Espuma de Rayo Silente ",
    descripcion: "Despierta habilidades psíquicas latentes y mejora la conexión con planos superiores.	  ",
    precio: " $28 Dragmas", 
    imagen: jabonRayo,

  },
];

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
