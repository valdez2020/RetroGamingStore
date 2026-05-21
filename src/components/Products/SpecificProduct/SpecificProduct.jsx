import { useState, useEffect } from "react";
import styles from "./SpecificProduct.module.css";
import { useParams } from "react-router-dom";

export function SpecificProduct(){

    const { id } = useParams();
    const [product, setProduct] = useState(null);

useEffect(()=>{

                fetch('/data/products.json')
                .then((respuesta)=> {
                    if (!respuesta.ok) {
                        console.log("no encontró una wea");
                    }
                    return(respuesta.json())})
                .then((data)=>{
            const foundProduct = data.find((product)=> product.id === parseInt(id));
                            console.log(foundProduct);
            setProduct(foundProduct);
                })
                .catch((err)=> console.log("Ha ocurrido un error! " + err ));

},[id]);

    if (!product) {
        return <h1>Cargando producto...</h1>;
    }

return(

    <main className={styles.productPage}>


        <section className={styles.breadcrumb}>

            <span>Inicio</span>
            <span>›</span>
            <span>{product.nombre}</span>

        </section>


        <section className={styles.productContainer}>



            <div className={styles.gallerySection}>
                <div className={styles.mainImageContainer}>
                    <img src={product.fotoProducto} alt={product.nombre} referrerPolicy="no-referrer" className={styles.mainImage} />
                </div>
            </div>

            <div className={styles.infoSection}>
                <span className={styles.condition}> Nuevo | +100 vendidos </span>
                <h1 className={styles.productTitle}> {product.nombre} </h1>
                <p className={styles.releaseYear}> Lanzamiento: {product.anio_lanzamiento} </p>
                <h2 className={styles.price}> ${product.precio}</h2>
                <p className={styles.installments}> Mismo precio en 6 cuotas sin interés</p>


                <div className={styles.stockContainer}>
                    <span className={styles.stockLabel}>Stock disponible:</span>
                    <span className={styles.stockValue}>{product.stock} unidades</span>
                </div>

                <div className={styles.buttonsContainer}>
                    <button className={styles.buyButton}>Comprar ahora</button>
                    <button className={styles.cartButton}>Agregar al carrito</button>
                </div>

            </div>

        </section>


        <section className={styles.descriptionSection}>
            <h2>Descripción</h2>
            <p>{product.descripcion}</p>
        </section>

    </main>

    )
}