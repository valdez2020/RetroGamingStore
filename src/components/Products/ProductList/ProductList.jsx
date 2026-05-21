import { ProductItem } from "../ProductItem/ProductItem.jsx";
import { Link } from 'react-router-dom';
import styles from './ProductList.module.css';
export function ProductList({products}){
    if (products.length === 0) {
        return (<p className={styles.emptyMessage}>Acá pondríamos el equipo de trabajo... Si tuvieramos uno 😅</p>)
    }

    return(
            <section className={styles.productList}>
            {
            products.map((product)=>(
                
                <article key={product.id}  className={styles.productCardWrapper}>
                    <ProductItem {...product}/>

                <Link  to={`/producto/${product.id}`}>
                    <button className={styles.detailsButton}>
                        ver más
                    </button>
                </Link>
                </article>


            ))}

            </section>)
}
