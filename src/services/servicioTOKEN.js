export async function servicioTOKEN(){

    //uri
    const URI= "https://accounts.spotify.com/api/token"


    //datos
    const DATO1="grant_type=client_credentials"
    const DATO2="client_secret=c449c6a053b1467ab324161721fada1a"
    const DATO3="client_id=a6113b79cac5412fa499cf0ffebc1e43"


    //peticion

    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }


    //fetch

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    return datos


}