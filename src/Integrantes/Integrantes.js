import "./Integrantes.css";
import 'animate.css';
import WOW from 'wowjs';
import { useEffect } from "react";


export function Integrantes() {

    useEffect(()=>{
        new WOW.WOW({
            live:false
        }).init();
    },[])


  return (
    <>
      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 zoom">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/roberto.jpg?alt=media&token=c9397f94-906c-4f1b-9ac0-bf7614bfd83b" alt="foto" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample"></img>
        </div>
        <div className="col-12 col-md-4 align-self-center border-start text-center animate__animated animate__backInRight wow">
          <h2>Roberto</h2>
          <h3>Vocalista</h3>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="collapse" id="collapseExample">
            <div className="card card-body">
            Roberto Daniel Musso Focaccio (Montevideo, 21 de noviembre de 1962) es un músico e ingeniero de sistemas uruguayo. Es cantante, guitarrista y compositor del grupo de rock uruguayo El Cuarteto de Nos.
            </div>
          </div>
        </div>
      </div>



      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 align-self-center border-end text-center animate__animated animate__backInLeft wow">
          <h2>Santiago Tavella</h2>
          <h3>Bajista</h3>
        </div>
        <div className="col-12 col-md-4 zoom">
          <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/santiagotavella.jpg?alt=media&token=35be4214-0ea8-4fa3-90c4-2e5d174afaf8" alt="foto" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#musico2"></img>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="collapse" id="musico2">
            <div className="card card-body">
            Santiago Tavella Nazzari (n. Montevideo; 27 de julio de 1961) es un músico, artista visual, escritor y curador uruguayo. Desde 1980 estudia diferentes áreas artísticas: pintura, arquitectura, técnicas musicales digitales, canto y composición musical, y desde 1990 expone y realiza curadurías dentro y fuera de Uruguay.Se destaca en su carrera musical la participación como bajista en el grupo de rock alternativo El Cuarteto de Nos, ganador de dos premios Grammy Latinos (2012).
            </div>
          </div>
        </div>
      </div>



      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 zoom">
          <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/santiagomarrero.jpg?alt=media&token=4d39c090-2dfb-4774-8b53-7bde38ddf87f"alt="foto" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#musico3"></img>
        </div>
        <div className="col-12 col-md-4 align-self-center border-start text-center animate__animated animate__backInRight wow">
          <h2>Santiago Marrero</h2>
          <h3>Tecladista</h3>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="collapse" id="musico3">
            <div className="card card-body">
            El músico, compositor y productor uruguayo publicó su primer disco solista con una exploración por los sintetizadores analógicos y que para el artista implicó “un montón de autoconocimiento y esfuerzo”.
            </div>
          </div>
        </div>
      </div>



      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 align-self-center border-end text-center animate__animated animate__backInLeft wow">
          <h2>Alvaro Pintos</h2>
          <h3>Baterista</h3>
        </div>
        <div className="col-12 col-md-4 zoom">
          <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/%C3%81lvaro_Pintos.png?alt=media&token=1178c37d-8757-4e73-8968-9682fc494a89" alt="foto" className="img-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#musico4"></img>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="collapse" id="musico4">
            <div className="card card-body">
            Álvaro «Alvin» Pintos (Montevideo; 26 de febrero de 1964) es un músico uruguayo conocido principalmente por ser el baterista del grupo uruguayo de rock El Cuarteto de Nos, desde 1985 hasta la actualidad. Además, participó como percusionista y baterista en otras formaciones musicales, como Los Gaby's, y en bandas como La Trampa y La Tabaré Riverock Banda.
            </div>
          </div>
        </div>
      </div>


      <div className="row my-5 justify-content-center">
        <div className="col-12 col-md-4 zoom">
          <img src="https://firebasestorage.googleapis.com/v0/b/canciones-7fc70.appspot.com/o/gustavoantu%C3%B1a.jpg?alt=media&token=dfe9bf6e-9cb1-4fdd-9f3c-0062657a6e26" alt="foto" className="img-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#musico5"></img>
        </div>
        <div className="col-12 col-md-4 align-self-center border-start text-center animate__animated animate__backInRight wow">
          <h2>Gustavo Antuña</h2>
          <h3>Guitarrista</h3>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-12">
          <div className="collapse" id="musico5">
            <div className="card card-body">
            Montevideo- Uruguay. Guitarra líder,coros (2009-presente)
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
