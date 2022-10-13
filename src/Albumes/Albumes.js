import { servicioSpoty } from "../services/servicioSpotify.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import {useState, useEffect} from 'react'

export function Albumes(){

    //declarando mi primer UseState}
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos
    const[carga,setCarga]=useState(true)

    //usando el useEffect
    useEffect(function(){
        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta)
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)

    },[])

    if(carga==true){

        return(
            <>
            
            <h1>estoy cargando...</h1>
            
            </>
        )

    }else{
        
            return(
                <div className="row row-cols-1 row-cols-md-3 g-3 bg-dark">
                    {
                    canciones.map(function(canciones){
                        return(
                            <>
                            <div className="col mt-3 mx-auto">
                                <div className="card h-100">
                                <img src={canciones.album.images[0].url}className="img-fluid h-100 p1 w-100" alt="foto"></img>
                                <h1 className="text-center">{canciones.name}</h1>
                                <h2 className="text-center">{canciones.tracks}</h2>
                                <audio controls src={canciones.preview_url}></audio>
                                </div>
                               
                            </div>
        
                            </>
                            
                        )
                    })
                    }
                </div>
            )
        

    }



   
  
}