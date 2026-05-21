export function SpecificProduct({nombre, precio, stock, anio_lanzamiento, descripcion, fotoProducto,  toggleFavorita}){
    return(<section className={styles.productDetail}>
        <img src={fotoProducto} alt={nombre} referrerPolicy="no-referrer"/>
                <div className={styles.productInfo}>
                    <h2 className={styles.productTitle}>{nombre} </h2> 
                    <h2 className={styles.productYear}> Lanzamiento:{anio_lanzamiento}</h2>
                    <p className={styles.productPrice}>Precio: ${precio}</p>
                    <p className={styles.productDescription}>Descripción: {descripcion}</p>
                    <button className={styles.buyButton}>Comprar</button>
                </div>
        </section>)
}