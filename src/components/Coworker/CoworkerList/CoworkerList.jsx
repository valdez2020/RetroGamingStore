import { CoworkerCard } from "../CoworkerCard/CoworkerCard.jsx";
import styles from "./CoworkerList.module.css";

export function CoworkerList({coworkers}){
    if (coworkers.length === 0) {
        return (<p  className={styles.emptyMessage}>Acá pondríamos el equipo de trabajo... Si tuvieramos uno 😅</p>)
    }

    return(
            <section className={styles.coworkersGrid}>
            {coworkers.map((coworker)=>(
                <CoworkerCard key={coworker.id} {...coworker}/>
            ))}
            </section>
)
}