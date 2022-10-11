export function Carrusel(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
          <div className="carousel-item active">
           <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/El-Cuarteto-de-Nos-La-Ciudad-Sin-Alma.jpeg?alt=media&token=cbc5d4f1-0613-4846-b7c4-d4c51d299d14" height="700" className="w-100" alt="..."/>
          </div>
         <div className="carousel-item">
           <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/cuarteto-de-nos.webp?alt=media&token=8282e60f-2895-4332-9e07-067d2702a5a9" height="700" className="w-100" alt="..."/>
          </div>
         <div className="carousel-item">
           <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/cuarteto-musica.jpg?alt=media&token=11eda69d-4ad7-4a80-9eef-6c3a518269ec" height="700" className="w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
        </button>
       </div>
        </>
    )
}