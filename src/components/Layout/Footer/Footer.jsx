import { CoworkerContainer } from "../../Coworker/CoworkerContainer";
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
export function Footer() {

    return (

        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__brand}>
                    <h2>RetroGamingShop 🎮</h2>
                    <p>
                        Tu tienda retro para verdaderos coleccionistas.
                        Consolas, videojuegos clásicos y joyas difíciles de conseguir.
                    </p>
                </div>

                <div className={styles.footer__links}>
                    <h3>Explorar</h3>
                    <ul>
                        <li><Link to='/' >Inicio</Link></li>
                        <li><Link to='/catalogo' >Catálogo</Link></li>
                        <li><Link to='alta-producto' >Dar alta</Link></li>
                        <li><Link to='nuestro-equipo' >Nuestro equipo</Link></li>
                    </ul>

                </div>

                <div className={styles.footer__social}>
                    <h3>Redes</h3>
                    <ul>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.youtube.com/">YouTube</a></li>
                    </ul>

                </div>

            </div>

            <div className={styles.footer__bottom}>
                <p>© 2026 RetroGamingShop - Todos los derechos reservados.</p>
            </div>

        </footer>

    );
}