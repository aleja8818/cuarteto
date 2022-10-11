export function Footer(){
    return(
        <>
          <footer className="container-fluid bg-dark text-white p-3 mt-5">
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <h4 className="text-center">&copy; Alejandra Molina</h4>
                    <h5 className="text-center">Medellin</h5>
                    <h5 className="text-center">Aprendiz SURA</h5>
                    <h6 className="text-center">2022</h6>
                </div>
                <div className="col-12 col-md-6 border-start aligne-self-center">
                    <a href="https://github.com/aleja8818" className="text-light">
                    <i class="bi bi-github fs-1 m-5 p-5"></i>
                    </a>
                    <a href="https://github.com/aleja8818" className="text-light">
                    <i class="bi bi-linkedin fs-1 m-5 p-5"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="text-light">
                    <i class="bi bi-instagram fs-1 m-5 p-5"></i>
                    </a>
                </div>
            </div>
          </footer>
        
        </>
    )
}