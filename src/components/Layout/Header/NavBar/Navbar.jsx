import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar(){

    return(<nav className={styles.nav}>
        <ul className={styles.navList}>
        <li><Link to='/' >Inicio</Link></li>
        <li><Link to='/catalogo' >Catálogo</Link></li>
        <li><Link to='alta-producto' >Dar alta</Link></li>
        <li><Link to='nuestro-equipo' >Nuestro equipo</Link></li>
        </ul>
        </nav>)
}