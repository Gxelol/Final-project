import { NavLink } from 'react-router-dom'; 

export default function NavBar(props) {
  return (
    <>
      <nav className="navbar">
        <ul className='navbar__elements'>
          <li className='navbar__element'>
            <NavLink to="/" className="navbar__text">
              HOME
            </NavLink>
          </li>
          <li className='navbar__element'>
            <NavLink to="/agents" className="navbar__text">
              AGENTS
            </NavLink>
          </li>
          <li className='navbar__element'>
            <NavLink to="/weapons" className="navbar__text">
              WEAPONS
            </NavLink>
          </li>
          <li className='navbar__element'>
            <NavLink to="/maps" className="navbar__text">
              MAPS
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
