import { servicioSpoty } from "../services/servicioSpotify.js"
import {useState} from 'react'

export function Albumes(){

    //declarando mi primer UseState}

    const[canciones,setCanciones]=useState(null)


    servicioSpoty()
    .then(function(respuesta){
        setCanciones(respuesta.tracks)
    })
    console.log(canciones)
    return(
        <>
        <h1>
            soy un componente albumes
        </h1>
        </>
    )
}