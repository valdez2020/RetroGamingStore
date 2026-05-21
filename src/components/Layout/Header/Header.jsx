import { Navbar } from "./NavBar/Navbar";
import styles from './Header.module.css';

export function Header(){


    return(<header className={styles.header}>
                <section className={styles.container}>
                    <span className={styles.logo}>
                    RetroGamingShop
                    </span>
                    <Navbar/>
                </section>
            </header>);
}