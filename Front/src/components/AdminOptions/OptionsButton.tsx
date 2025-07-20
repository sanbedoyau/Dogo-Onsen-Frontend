import useOutsideInteraction from '../../components/hooks/useOutsideInteraction';
import { useState } from 'react';
type OptionsButtonProps = {
  onSelect: (option: string) => void;
};
export default function OptionsButton({ onSelect }: OptionsButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const modalRef = useOutsideInteraction<HTMLDivElement>(
      isModalOpen,
      () => setIsModalOpen(false)
  );
  return (
    <>
        <div ref={modalRef} className="admin-options__btn">
            <i className="fas fa-bars" onClick= {() => setIsModalOpen(!isModalOpen)}/>
            <div ref={modalRef} className={`admin-options__modal-content${isModalOpen ? ' open' : ''}`}>
                <button  onClick= {() => onSelect('Gestion de Baños')} className='admin-options__modal-link'>Gestion de Baños</button>
                <button  onClick= {() => onSelect('Gestion de Jabones')} className='admin-options__modal-link'>Gestion de Jabones</button>
                <button  onClick= {() => onSelect('Gestion de Usuarios')} className='admin-options__modal-link'>Gestion de Usuarios</button>
                <button  onClick= {() => onSelect('Gestion de Menu')} className='admin-options__modal-link'>Gestion de Menú</button>
                <button  onClick= {() => onSelect('Gestion de Personal de limpieza')} className='admin-options__modal-link'>Gestion de Personal de limpieza</button>
                <button  onClick= {() => onSelect('Gestion de Elementos de limpieza')} className='admin-options__modal-link'>Gestion de Elementos de limpieza</button>
            </div>
        </div>
    </>
  );
}