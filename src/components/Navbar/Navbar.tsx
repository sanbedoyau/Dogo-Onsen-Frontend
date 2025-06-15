import onsenLogo from '../../assets/img/Dogo-Onsen-logo.png'
import './Navbar.css'

export default function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <img className='navbar__logo' src={ onsenLogo }/>
          <div className='navbar__options'>
            <ul>
              <li><a>Baños</a></li>
              <li><a>Menú</a></li>
              <li><a>Jabones</a></li>
            </ul>
          <button className='navbar__btn--login'>
            Log in
            <span id="btn--arrow">&#11167;</span>
          </button>
        </div>
      </nav>
    </>
  )
}