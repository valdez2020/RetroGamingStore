import styles from "./FormItem.module.css";

export function FormItem({dataForm, handleFormChange, handleFormSubmit, handleImageChange, cargando}){
    //Variable para cada campo del formulario

    return(<section className={styles.formContainer}>
       <h2 className={styles.formTitle}>
                Alta de producto 🎮
            </h2>

       <form onSubmit={handleFormSubmit} className={styles.form}>
        

                <div className={styles.formGroup}>

                    <label className={styles.label}>Nombre</label>

                    <input
                        type="text"
                        name="nombre"
                        value={dataForm.nombre}
                        onChange={handleFormChange}
                        className={styles.input}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Precio</label>
                    <input
                        type="number"
                        name="precio"
                        value={dataForm.precio}
                        onChange={handleFormChange}
                        className={styles.input}
                    />

                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Año de lanzamiento</label>
                    <input
                        type="number"
                        name="anio_lanzamiento"
                        value={dataForm.anio_lanzamiento}
                        onChange={handleFormChange}
                        className={styles.input}
                    />

                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={dataForm.stock}
                        onChange={handleFormChange}
                        className={styles.input}
                    />

                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Imagen del producto</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className={styles.inputFile}
                    />

                </div>
            
            <button type="submit" disabled={cargando} className={styles.submitButton}> {cargando ? "Subiendo imagen..." :"guardar producto" }</button>
        </form>
    </section>)
}