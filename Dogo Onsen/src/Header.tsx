import onsenLogo from './assets/img/Dogo-Onsen-logo.png'
import './Header.css'
import { ServiceCard } from './components/ServiceCard'

function Header() {

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
        </div>
        <button className='navbar__btn--login'>
          Log in
          <span id="btn--arrow">&#11167;</span>
        </button>
      </nav>
      <main className='main'>
        <section className="services">
          <ServiceCard title="Baños" />
          <ServiceCard title="Banquete" description="Disfruta de una variedad de platos tradicionales y modernos." />
          <ServiceCard title="Jabones" description="Explora nuestra selección de jabones artesanales." />
        </section>
      </main>
    </>
  )
}

export default Header