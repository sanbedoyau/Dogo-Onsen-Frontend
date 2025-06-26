import { useState } from 'react';
import './FlujoReserva.css';

const FlujoReserva = () => {
  const [baño, setBaño] = useState('');
  const [jabonEspecial, setJabonEspecial] = useState(false);
  const [jabonSeleccionado, setJabonSeleccionado] = useState('');
  const [banquete, setBanquete] = useState(false);
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reserva realizada con:
    Baño: ${baño}
    Jabón especial: ${jabonEspecial ? `Sí (${jabonSeleccionado})` : 'No'}
    Banquete: ${banquete ? 'Sí' : 'No'}
    Fecha: ${fecha}`);
  };

  return (
    <div className="flujo">
    <div className="flujo-container">
      <h2>Reservar</h2>
      <form className="flujo-form" onSubmit={handleSubmit}>
        <label>
          Selecciona un baño:
          <select value={baño} onChange={(e) => setBaño(e.target.value)} required>
            <option value="">-- Selecciona --</option>
            <option value="Baño de vapor termal del loto silencioso">Baño de vapor termal del loto silencioso</option>
            <option value="Baño termal de lune de media noche">Baño termal de lune de media noche</option>
            <option value="Baño termal escama de dragón">Baño termal escama de dragón</option>
            <option value="Baño termal hierbas del hechicero">Baño termal hierbas del hechicero</option>
            <option value="Baño de las almas perdidas">Baño de las almas perdidas</option>
          </select>
        </label>

        <label>
          ¿Deseas jabones especiales?
          <input
            type="checkbox"
            checked={jabonEspecial}
            onChange={() => setJabonEspecial(!jabonEspecial)}
          />
        </label>

        {jabonEspecial && (
          <label>
            Selecciona un jabón especial:
            <select
              value={jabonSeleccionado}
              onChange={(e) => setJabonSeleccionado(e.target.value)}
              required
            >
              <option value="">-- Selecciona --</option>
              <option value="Jabón de loto blanco eterno">Jabón de loto blanco eterno</option>
              <option value="Carbón del inframundo">Carbón del inframundo</option>
              <option value="Vapor de Fénix">Vapor de Fénix</option>
              <option value="Bruma de sauce lloron">Bruma de sauce lloron</option>
              <option value="Arcilla lunar plateada">Arcilla lunar plateada</option>
              <option value="Espuma de rayo silente">Espuma de rayo silente</option>
            </select>
          </label>
        )}

        <label>
          ¿Deseas incluir banquete?
          <input
            type="checkbox"
            checked={banquete}
            onChange={() => setBanquete(!banquete)}
          />
        </label>

        <label>
          Selecciona la fecha:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="flujo-btn">Confirmar reserva</button>
      </form>
    </div>
    </div>
  );
};


export default FlujoReserva;
