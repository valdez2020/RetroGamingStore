import { useState, useEffect } from "react";
import { ProductList } from "../ProductList/ProductList.jsx";
import styles from "./ProductListContainer.module.css";



export function ProductListContainer(){
const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);
    const [showProduct, setShowProduct] = useState(false);

    function Showproduct(){

    }

useEffect(()=>{
                    setCargando(true);

                    //fetch para solicitar los datos del json que se tiene en local...
                fetch('./data/products.json')
                .then((respuesta)=> {
                    if (!respuesta.ok) {
                        throw new Error("No se encontraron productos para mostrar...😥");
                    }
                    return(respuesta.json())})
                .then((data)=> setProducts(data))
                .catch((err)=> setError(err.message))
                .finally(()=>setCargando(false));

},[]);

    return(
            <section className={styles.container}>

            <h1 className={styles.title}>Catálogo Retro 🎮</h1>
            <ProductList products={products}/>
          </section>)
}

