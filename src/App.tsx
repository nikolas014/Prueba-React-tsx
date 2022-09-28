import { useState } from "react";
import  "./css/singleView.css";
import "./main.js";

export function App() {

  const [count, setCount] = useState(1);

  const countFunction = (num: number) =>{
    setCount(count + num)
  }

  return (
    <>
<body>
    
        
    {/* <!-- Vertically centered modal -->
    <!-- Modal --> */}
    {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered margin">
            <div className="modal-content imgmodal">
                <div className="m" id="imageModal">
                </div>
            </div>
        </div>
    </div> */}

    {/* <!-- Aquí empieza el encabezado principal que se mantendrá en todas las páginas del sitio web -->
    <!-- <header className="container-fluid">
      <h1>Encabezado</h1>
    </header> --> */}

    {/* <!-- <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nuestro equipo</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

       < -- Un formulario de búsqueda es una forma no-lineal de hacer búsquedas en un sitio web. -- >

       <form>
         <input type="search" name="q" placeholder="Buscar"/>
         <input type="submit" value="¡Vamos!"/>
       </form>
     </nav> --> */}

    {/* <!-- Aquí está el contenido principal de nuestra página -->
    <!-- imagen encabezado --> */}
    <div className="container-fluid mt-5 mb-5 p-5 img altura">
        <div className="container">
            <h1 className="ms-xl-5">lo volvi a cambiar xd</h1>
        </div>
    </div>
    
    {/* <!-- descripcion, aside y galería --> */}
    <main className="container">
        <div className="row me-xl-5 ms-xl-5">

            {/* <!-- Artículo (Descripción) --> */}
            <article className="col-12 col-xl-8">
                <h2 className="mb-3">Descripción</h2>
                <p>
                    <strong>Primer año</strong><br/>
                    Semetre 2020
                </p>
                <p>&nbsp;</p>
                <p>
                    <strong>Equipo docente</strong><br/>
                    Raul Solis F., Arquitecto y Magister PUCV<br/>
                    Michele Berhó M., Arquitecta UTFSM y Magister U. Ferrara<br/>
                    Eduardo Hernández, Arquitecto UTFSM<br/>
                    Constanza Espinoza, Arquitecta y Magister UTFSM<br/>

                </p>
                <p>&nbsp;</p>
                <button id="btn1" type="button" className="btn btn-light border trasnlate">Proyecto 1</button>
                <button id="btn2" type="button" className="btn btn-light">Proyecto 2</button>
                <button id="btn3" type="button" className="btn btn-light">Proyecto 3</button>
                <div className="color p-3 border radius" id="parrafos">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ad magni soluta error, quia, ut modi
                    voluptatum accusantium impedit, mollitia et? Explicabo voluptatibus aspernatur aut harum ducimus
                    rerum illum ut. Rem deserunt quod mollitia dignissimos? Dicta in voluptatem quasi maxime autem
                    molestias odit, eos nulla omnis officiis error officia soluta!</p>
                <p>&nbsp;</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quas velit, voluptates fuga
                    quia saepe repellendus modi animi, temporibus ratione non molestiae expedita. Necessitatibus quos
                    magnam expedita obcaecati aspernatur repellendus excepturi cumque quia, delectus culpa velit, animi
                    porro unde eaque.</p>    
                </div>
            </article>

            {/* <!-- el contenido mano derecha contenido principal --> */}
            <aside className="col-12 col-xl-4">
            </aside>

            {/* <!-- Salto de linea --> */}
            <hr className="my-5" />

            {/* <!-- Galeria de fotos --> */}
            <h2>Galería</h2>
            <article className="col-12 mt-3">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active" data-bs-interval="9000">
                            <div className="img-carousel img-carousel-1" id="1"></div>
                        </div>
                        <div className="carousel-item" data-bs-interval="9000">
                            <div className="img-carousel img-carousel-2" id="2"></div>
                        </div>
                        <div className="carousel-item" data-bs-interval="9000">
                            <div className="img-carousel img-carousel-3" id="3"></div>
                        </div>
                    </div>    
                    
                    
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </article>
        </div>
    </main>

    {/* <!-- footer --> */}
    <footer className="container-fluid mt-5">
        <div className="row">
            <div className="col-12 footer d-flex flex-column align-items-center justify-content-center p-3">
                <h6>Anita Pérez H.</h6>
                <h6>Todos los derechos reservados &copy;</h6>
            </div>
        </div>
    </footer>

    <button type="button" id="abrirModal" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden></button>


</body>
    </>
  );
}
