import type { Baño } from '../../types/baño'; // ✅ Usamos tipo correcto
import useOutsideInteraction from '../../components/hooks/useOutsideInteraction';
import { useState } from 'react';
import FlujoReserva from '../../pages/FlujoReserva';

interface BañoCardProps {
  baños: Baño[];
}

const BañoCard = ({ baños }: BañoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useOutsideInteraction<HTMLDivElement>(
    isModalOpen,
    () => setIsModalOpen(false)
  );
  const [currentBaño, setCurrentBaño] = useState<Baño | null>(null);
  return (
    <>
      {baños.map((baño) => (
        <div className='bañoCard' key={baño.id}>
          <div className='bañoCard__inner'>
            <div className='bañoCard__front'>
              <img src={baño.imagen || '/src/assets/img/default.png'} alt={baño.nombre} />
              <h3>{baño.nombre}</h3>
              <strong>{`$${baño.precio} Dragmas`}</strong>
            </div>
            <div className='bañoCard__back'>
              <p>{baño.descripcion}</p>
                <button className='bañoCard__button' onClick={() => {
                  setCurrentBaño(baño);
                  setIsModalOpen(!isModalOpen);
                }}>Reservar</button>
            </div>
          </div>
        </div>
      ))}
      <div className='bañoCard__FlujoReserva-container'>
        <div ref={modalRef} className={`bañoCard__modal-content${isModalOpen ? ' open' : ''}`}>
          {/* <h4>Reservar Baño</h4> */}
            <FlujoReserva Baño={currentBaño} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>  
    </>
  );
};

export default BañoCard;
