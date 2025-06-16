import { useState } from 'react';
import useOutsideInteraction from '../hooks/useOutsideInteraction';
import onsenLogo from '../../assets/img/Dogo-Onsen-logo.png';
import hamburguerBtn from '../../assets/img/BtnHamburguer.png';
import './Navbar.css';
import Options from './Options';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useOutsideInteraction<HTMLDivElement>(
    isMenuOpen,
    () => setIsMenuOpen(false)
  );

  return (
    <>
      <nav className='navbar'>
        <img className='navbar__logo' src={ onsenLogo }/>
        <div className='navbar__options--desktop'>
          <Options />
        </div>
        <img 
          className='navbar__btn--burger' 
          src={ hamburguerBtn }
          onClick={ () => setIsMenuOpen(!isMenuOpen) }/>
        <div ref={ menuRef } className={ `navbar__options--mobile ${isMenuOpen ? 'open': ''}` }>
          <Options />
        </div>
      </nav>
    </>
  )
}