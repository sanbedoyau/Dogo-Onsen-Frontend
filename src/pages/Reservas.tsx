import rawData from '../data/reservas.json';
import { useEffect, useState } from 'react';
import './Reservas.css';

interface Reserva {
  id: number;
  fecha: string;
  hora: string;
  servicio: string;
  cliente: string;
}

const Reservas: React.FC = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    const reservasData = rawData as Reserva[]; 
    setReservas(reservasData);
  }, []);

const handleModificar = (id: number) => {
  alert(`Modificar reserva con ID ${id}`);
  // Aquí se pondrpia una página de edición
};

const handleCancelar = (id: number) => {
  const confirmar = confirm("¿Estás seguro de que deseas cancelar esta reserva?");
  if (confirmar) {
    setReservas((prev) => prev.filter((reserva) => reserva.id !== id));
  }
};

  return (
    <div className="reservas-container">
      <h2>Mis reservas</h2>
      <ul>
  {reservas.map((reserva) => (
    <li key={reserva.id} className="reserva-card">
      <p><strong>Servicio:</strong> {reserva.servicio}</p>
      <p><strong>Fecha:</strong> {reserva.fecha}</p>
      <p><strong>Hora:</strong> {reserva.hora}</p>
      <p><strong>Cliente:</strong> {reserva.cliente}</p>

      <div className="reserva-btns">
        <button
          className="btn-modificar"
          onClick={() => handleModificar(reserva.id)}
        >
          Modificar
        </button>
        <button
          className="btn-cancelar"
          onClick={() => handleCancelar(reserva.id)}
        >
          Cancelar
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default Reservas;
