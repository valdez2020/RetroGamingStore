import { useState} from "react";
import { FormItem } from "./FormItem/FormItem.jsx";

export function ProductFormContainer(){

    //Estado del formulario
    const [dataForm, setDataForm] = useState({
                                              nombre: '',
                                              precio: '',
                                              anio_lanzamiento:'',
                                              stock: ''                
                                            })
    const [cargando, setCargando] = useState(false);
    const [imageFile,setImageFile] = useState(null);


    //Funciones para gestionar los estados
    function handleFormChange(e){
        const {name, value} = e.target;
        return(setDataForm({
                            ...dataForm,
                            [name]: value
        }));
    }

    function handleImageChange(e){
        return(setImageFile(e.target.files[0]));
    }


    const handleFormSubmit = async (e)=> {
        const [error, setError] = useState(null);
        e.preventDefault();
        setCargando(true);

        try {
            
        const apiKey = "b1262e7ae58fc42a441b62e4b30124e2"; //Api key porporsionada por Imgbb
        const formData = new FormData();
        formData.append('image',imageFile);

        const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
            method: 'POST',
            body: formData,
        });
        const imgbbData = await respuesta.json();
        const urlImage = imgbbData.data.url;

        const productoCompleto = {...dataForm,
                                 fotoProducto: urlImage
        };
        return(console.log("Enviando los datos: ", productoCompleto))
        } catch (error) {
            setError("Error al subir producto");
        }
        finally{
            setCargando(false);
            {error && <p>{error}</p>}
        }
    }



    return(<FormItem dataForm={dataForm} 
                        handleFormChange={handleFormChange} 
                        handleFormSubmit={handleFormSubmit}
                        handleImageChange={handleImageChange}
                        cargando={cargando}
                        />);
}