import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './navBar.css'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-Primary">
                <div class="container-fluid">
                    <NavLink to={'/'}>
                        <img src="img/pngwing.com.png" className="App-logo-bs" alt="logo" />
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <li>
                                <NavLink to={'/'} className={({ isActive }) => (isActive ? 'rojo' : 'verde')}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/category/CPU_AMD'} className={({ isActive }) => (isActive ? 'rojo' : 'verde')}>
                                    Cpu_AMD
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/category/CPU_Intel'} className={({ isActive }) => (isActive ? 'rojo' : 'verde')}>
                                    Cpu_Intel
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </div>
                <CartWidget/>
            </nav> 
        </div>
    )
}

export default NavBar;