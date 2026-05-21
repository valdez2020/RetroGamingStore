import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home(){

    return(

        <main className={styles.home}>

            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>

                    <h1 className={styles.title}>RetroGamingShop</h1>

                    <p className={styles.subtitle}>
                        Revive la época dorada de los videojuegos.
                        Consolas, coleccionables y títulos retro
                        para verdaderos gamers 🎮
                    </p>

                    <div className={styles.heroButtons}>
                        <Link to="/catalogo" className={styles.primaryButton}>Ver catálogo</Link>
                        <Link to="/nuestro-equipo" className={styles.secondaryButton}>Conócenos</Link>
                    </div>
                </div>

            </section>


            <section className={styles.features}>

                <article className={styles.featureCard}>
                    <h2>🎮 Juegos Retro</h2>
                    <p>
                        Catálogo con clásicos de Nintendo,
                        PlayStation, Sega y más.
                    </p>
                </article>

                <article className={styles.featureCard}>
                    <h2>🕹️ Coleccionables</h2>

                    <p>
                        Productos exclusivos para coleccionistas.
                    </p>
                </article>

                <article className={styles.featureCard}>
                    <h2>🚚 Envíos</h2>

                    <p>
                        Realizamos envíos seguros a todo el país.
                    </p>
                </article>

            </section>



            <section className={styles.highlightSection}>

                <h2 className={styles.sectionTitle}>Productos destacados</h2>

                <div className={styles.highlightGrid}>
                    <div className={styles.highlightCard}>
                        <img src="https://i.ibb.co/Kzh4BKWk/zelda-ocarinaoftime.png" alt="Zelda Ocarina of Time"/>
                        <h3>Zelda Ocarina of Time</h3>
                        <p>Un clásico eterno de Nintendo 64.</p>
                    </div>

                    <div className={styles.highlightCard}>
                        <img src="https://i.ibb.co/F4bd0dTc/play-Station1.jpg" alt="PlayStation 1"/>
                        <h3>PlayStation 1</h3>
                        <p>La consola que cambió la industria.</p>
                    </div>

                    <div className={styles.highlightCard}>
                        <img src="https://i.ibb.co/5hVnKfXR/game-Boy-Color.jpg" alt="GameBoy"/>
                        <h3>Game Boy Color</h3>
                        <p>Portabilidad retro legendaria.</p>
                    </div>
                </div>
            </section>

        </main>
    )
}