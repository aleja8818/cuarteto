export async function  servicioSpoty(){

    const URI = "https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=us"

    const TOKEN = " Bearer BQAkY3ncpv1HnXQvHaMsVLBZTYmIqzUXiBby9zfjOWVIcRlpCqIf2038MSEzMyUhy7fymsJAXkVjnYYnfUtxs2ib8PHRtEOsUHWKZIhnspIeL53ZgIi2w-GqvfoemRF6mRY40V3fCOijtN1WIpVusy955ly6CrAl-PneKETp3vg"

    const PETICION ={
        method :"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos 


}