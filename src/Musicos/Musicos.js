

export function Musicos(){


    //un arreglo de objetos es el formato comun al consumir un api
    let musicos=[
        {nombre:"Roberto",
        rol:"Vocalista",
        url:"https://firebasestorage.googleapis.com/v0/b/flor-40a68.appspot.com/o/roberto1.jpg?alt=media&token=55931854-660f-44ab-87f2-7044301bd72a"},

        {nombre:"Santiago Tavella",
        rol:"Bajista",
        url:"https://firebasestorage.googleapis.com/v0/b/flor-40a68.appspot.com/o/santiagotavella1.jpg?alt=media&token=aef40072-9b21-4e8a-80d2-0480fdc1c7be"},

        {nombre:"Santiago Marrero",
        rol:"Tecladista",
        url:"https://firebasestorage.googleapis.com/v0/b/flor-40a68.appspot.com/o/santiagomarrero1.jpg?alt=media&token=ed48d0a5-adff-4451-a8be-75a43a5aa6e1"},

        {nombre:"Alvaro Pintos",
        rol:"Baterista",
        url:"https://firebasestorage.googleapis.com/v0/b/flor-40a68.appspot.com/o/alvaropintos1.webp?alt=media&token=96705c3e-5a0d-42ea-b585-3f5ddf7a2aec"},

        {nombre:"Gustavo Antuña",
        rol:"Guitarrista",
        url:"https://firebasestorage.googleapis.com/v0/b/flor-40a68.appspot.com/o/gustavoantu%C3%B1a.jpg?alt=media&token=a909241e-9830-4bf7-8893-7f6a4ce49ea6"},
    ]

    let conciertosMemorables=[
        {fecha:"10 septiembre 2016",
        pais:"Colombia",
        descripcion:"El pasado sábado 10 de septiembre se celebró una nueva edición del Concierto Radiónica en la Media Torta de Bogotá. Se trata de un multitudinario espectáculo organizado por la radio pública juvenil, y del que participan las figuras más distinguidas de la escena alternativa local.",
        foto:"https://firebasestorage.googleapis.com/v0/b/conciertos-cuarteto-de-nos.appspot.com/o/concierto2016.jpg?alt=media&token=73d4e377-f4cf-43a5-90a2-af7cbad82dab",
        },

        {fecha:"31 Octubre 2021",
        pais:"Uruguay",
        descripcion:"El Cuarteto de Nos - Fiesta en lo del Dr. Hermes (en vivo) en vivo en Antel Arena (Montevideo - Uruguay)",
        foto:"https://firebasestorage.googleapis.com/v0/b/conciertos-cuarteto-de-nos.appspot.com/o/concierto2021.jpg?alt=media&token=332dac67-54c4-40c3-8acf-421d27529b1a",
        },

        {fecha:"26 marzo 2022",
        pais:"Panama",
        descripcion:"El Cuarteto de Nos toca La Ciudad sin Alma  por primera vez en vivo en el concierto de Panamá el día 26 de marzo del 2022 Ateneo Ciudad del Saber",
        foto:"https://firebasestorage.googleapis.com/v0/b/conciertos-cuarteto-de-nos.appspot.com/o/concierto2016.jpg?alt=media&token=73d4e377-f4cf-43a5-90a2-af7cbad82dab",
        },

        {fecha:"3 septiembre 2017",
        pais:"Argentina",
        descripcion:"La banda uruguaya presentó Apocalipsis Zombie en Córdoba. El fotógrafo Ricardo Ferrero registró varios momentos del show. Redacción VOS",
        foto:"https://firebasestorage.googleapis.com/v0/b/conciertos-cuarteto-de-nos.appspot.com/o/concierto2017.jpg?alt=media&token=16146acb-1b1b-4c07-bccf-a14147b36bc5",
        },

        {fecha:"16 septiembre 2017",
        pais:"Colombia",
        descripcion:"El Cuarteto de nos y su Apocalipsis Zombi pasaron por tierras paisas en Medellín y fue un éxito más que rotundo. Se le dio una cachetada no tanto inesperada sino más bien categórica al concepto del “ya los vi en (escriba aquí uno de los tantos festivales de entrada libre subsidiados por las alcaldías o los presupuestos públicos en las principales ciudades del país)",
        foto:"https://firebasestorage.googleapis.com/v0/b/conciertos-cuarteto-de-nos.appspot.com/o/Cuarteto_de_nos_2017_Medell%C3%ADn.jpg?alt=media&token=cddb5ec5-87c2-4f8b-976b-e5501e730651",
        },
    ]

    //mapeando un arreglo para hacer render

    return(
        <>
        <h1 className="bg-light m-5 text-center" >INTEGRANTES</h1>


        <div className="row row-cols-1 row-cols-md-3 g-3 bg-dark">
            {
            musicos.map(function(musico){
                return(
                    <>
                    <div className="col mt-3 mx-auto">
                        <div className="card h-100">
                        <img src={musico.url} className="img-fluid w-100 h-75"></img>
                        <h1 className="text-center">{musico.nombre}</h1>
                        <h2 className="text-center">{musico.rol}</h2>
                        </div>
                       
                    </div>

                    </>
                    
                )
            })
            }
        </div>


        <h1 className="bg-light m-5 text-center" >CONCIERTOS</h1>




         <div className="row row-cols-1 row-cols-md-3 g-3 bg-dark mb-5">
         {
         conciertosMemorables.map(function(concierto){
             return(
                 <>
                 <div className="col mt-3 mx-auto">
                     <div className="card h-100">
                     <img src={concierto.foto} className="img-fluid w-100 h-100 "></img>
                     <h1 className="text-center">{concierto.pais}</h1>
                     <h2 className="text-center">{concierto.fecha}</h2>
                     <h5 className="text-center">{concierto.descripcion}</h5>
                     </div>
                    
                 </div>

                 </>
                 
             )
         })
         }
     </div>
     </>
    )

    

}