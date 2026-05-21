import { useState, useEffect } from "react";
import { CoworkerList } from './CoworkerList/CoworkerList.jsx';
export function CoworkerContainer(){
const [coworkers, setCoworkers] = useState([]);
const [error, setError] = useState(null);
const [cargando, setCargando] = useState(false);


useEffect(()=>{ 
    
          setCargando(true);
          fetch('./data/coworkers.json')
          .then((respuesta)=>{
            
            if(!respuesta.ok){
                        throw new Error('No se ha podido obtener los datos solicitados...');
                    }
                    return respuesta.json();})
                .then((data)=> setCoworkers(data))
                .catch((err)=> setError(err.message))
                .finally(()=> setCargando(false));
            
},[]);

    return(<>
            {cargando ? console.log("Se están cargando los datos...") :<></>}
            {error ? <p>Se ha producido un error de carga 😥 {console.log(error)}</p>:<></>}
            <CoworkerList coworkers={coworkers}/>

    </>)
}