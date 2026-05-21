import { useState } from "react";
import styles from "./ProductItem.module.css";

export function ProductItem({nombre, precio, fotoProducto}) {

  const [esFavorita, setEsFavorita] = useState(false);
const toggleFavorita = () => {
    setEsFavorita(!esFavorita);
};

return(<article  className={styles.productCard}>
        <img src={fotoProducto} alt={nombre} referrerPolicy="no-referrer"  className={styles.productImage}/>
        <div className={styles.productContent}>
            <h2 className={styles.productTitle}>{nombre}  <span onClick={toggleFavorita} className={styles.favorite}>{esFavorita ? "⭐" : "☆"}</span></h2>     
            <p className={styles.price}>${precio}</p>
            <button className={styles.button}>Añadir producto</button>
        </div>
</article>)    
}