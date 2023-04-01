import Img5 from "../../assets/img/IMG-WA0010.jpg";
import Img1 from "../../assets/img/IMG-WA0011.jpg";
import Img2 from "../../assets/img/IMG-WA0013.jpg";
import Img3 from "../../assets/img/IMG-WA0014.jpg";
import Img4 from "../../assets/img/IMG-WA0015.jpg";
function FormLoading() {
    return(
        <>
        <div class="container-fluid pt-5 pb-4" id="service">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                
                <h1 class="display-1 text-uppercase text-white" style={{webkitURL: "1px #dee2e6"}}>Service</h1>
                <h1 class="position-absolute text-uppercase text-primary"> Service </h1>
            </div>
            <div class="flex justify-content-center row pb-5 ">
                
                <div class="col-lg-8 col-md-6 text-center mb-6">
                    <div class="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3 "></i>
                       
                        <img src={Img5} alt="" />
                    </div>
                    <p>Somos una empresa que nos importa la seguridad de nuestros usuarios al poder ubicar los sitios que deas visitar 
                        o poder contactar las paradas cercanas de servicio de trasporte Rutas Viables.
                    </p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                
                
            </div>
            
            <div class="position-relative d-flex align-items-center justify-content-center">
                
                <h1 class="display-1 text-uppercase text-white" style={{webkitURL: "1px #dee2e6"}}>Service</h1>
                <h1 class="position-absolute text-uppercase text-primary"> Nuestros servicios </h1>
            </div>
            <div class="flex justify-content-center row pb-3">
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-3">Ubicacion </h4>
                        <img src={Img1} alt="" />
                    </div>
                    <p> Podemos tener una guía de rutas para la búsqueda más cercana dependiendo donde nos ubiquemos</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3 "></i>
                        <h4 class="font-weight-bold m-3">Rutas Viables</h4>
                        <img src={Img2} alt="" />
                    </div>
                    <p>Las rutas viables de servicios de trasporte, brinda información de todas las paradas del lugar ubicado.</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-3">Zona de  Busqueda</h4>
                        <img src={Img3} alt="" />
                    </div>
                    <p>Zona de búsqueda, refleja la ruta de alguna posición en particular. </p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5 ">
                    <div class="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-3">Perfil</h4>
                         <img src={Img4} alt="" />
                    </div>
                    <p>Se guardará la información personal para su seguridad de privacidad y pueda tener un perfil personal.</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4 flex-column">
                        <i class="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-3">Guía del servicio web</h4>
                        <img src={Img5} alt="" />
                    </div>
                    <p>Muestra con más detalle el uso del sitio web</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>

            </div>
         
        </div>
        </div>
        </>
    );
}
export default FormLoading;