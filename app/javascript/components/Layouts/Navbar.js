import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import useProfile from '../../hooks/useProfile'

const Navbar = ({ user, typeUser }) => {
  const [isActive, setisActive] = useState(false)
  const { handleSignOut } = useProfile(typeUser)
  console.log(typeUser)

  return (
    <nav className="navbar is-info">
      <div className='container'>
        <div className="navbar-brand">
          <a className="navbar-item" href="/">

            <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />

          </a>
          <a
            onClick={() => {
              setisActive(!isActive)
            }}
            role='button'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded='false'
            data-target='navBarBurger'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id="navBarBurger" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end ">
            <div className="navbar-item has-dropdown is-hoverable ">
              <a className="navbar-link mr-2" href="#">
                <FontAwesomeIcon icon={faUserShield} />
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="#">
                  Ver mi perfil
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#">
                  Actualizar mis Datos
                </a>
                <a 
                  className="navbar-item" 
                  onClick={ handleSignOut }>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Cerrar Sesion
                </a>
              </div>
            </div>
            {
              typeUser === 'user' ? (<a className="navbar-item mr-6" href="/">
                Mis cursos
              </a>) : null
            }
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;