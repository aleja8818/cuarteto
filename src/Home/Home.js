import "./Home.css"
import {SubMenu} from "../SubMenu/SubMenu.js"
import { Footer } from "../Footer/Footer.js"
export function Home(){
  let descripcionBanda = "El Cuarteto de Nos (estilizado como Cuarteto de Nos) es una banda uruguaya de rock alternativo y rap rock con elementos pop, electrónica y fusión de varios géneros latinoamericanos, formado en 19801​ en Montevideo (Uruguay). Está integrada por el cantante y guitarrista Roberto Musso, el bajista y corista Santiago Tavella, el baterista Álvaro Pintos, el guitarrista y corista Gustavo Antuña y el tecladista Santiago Marrero. En 2020 inauguraron un podcast donde interactúan con diferentes personalidades, intercambiando ideas y visiones de las letras y sus creaciones, lo cual marca una vez más que esta banda tiene una visión muy avanzada de cómo y qué comunicar"

    return(
        <>

        <div className="banner">

        </div>
        <div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">CUARTETO DE NOS</h1>
                <p className="text-center">{descripcionBanda}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SubMenu></SubMenu>
        </div>
        <div>
          <Footer></Footer>

        </div>


        </>
    )

}