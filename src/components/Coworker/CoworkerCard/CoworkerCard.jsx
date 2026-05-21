import styles from './CoworkerCard.module.css';

export function CoworkerCard({nombre, cargo, email, fotoPerfil}){

    return(<article className={styles.card}>
            <img src={fotoPerfil} alt="foto de perfil"  className={styles.profileImage}/>
            <div className={styles.cardContent}>
                <h2 className={styles.name}>{nombre}</h2>
                <h3 className={styles.role}>{cargo}</h3>
                <p className={styles.email}>{email}</p>
            </div>
          </article>
    )
}