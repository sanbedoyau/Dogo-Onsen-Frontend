import onsenLogo from '../../assets/img/Dogo-Onsen-logo.png';
import hamburguerBtn from '../../assets/img/BtnHamburguer.png';
import './Navbar.css';
import Options from './Options';

export default function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <img className='navbar__logo' src={ onsenLogo }/>
        <div className='navbar__options--desktop'>
          <Options />
          <button className='navbar__btn--login'>
            Log in
            <span id='btn--arrow'>&#11167;</span>
          </button>
        </div>
        <img className='navbar__btn--burger' src={ hamburguerBtn }/>
        <div className='navbar__options--mobile'>
          <Options />
          <button className='navbar__btn--login'>
            Log in
            <span id='btn--arrow'>&#11167;</span>
          </button>
        </div>
      </nav>
    </>
  )
}