import ImageHeader from "../atoms/ImageHeader";
import "../../assets/style/estiloAbout.css";
import BlockimgInf from "../atoms/BlockimgInf";
import Imgen from "../../assets/img/ContenCenter.jpg";
import Imgen2 from "../../assets/img/about-story.jpg"
import Imgen3 from "../../assets/img/aboutImg3.jpg"
function  WrapperAbout() {
    return(
        <>
        
        <div class="about">
          <div class="container">
            <ImageHeader/>
                <div class="section-header">
                    <h2>About Us</h2>
                    <p>
                        Somos una enpresa de localizacion con servicios adecuados a todo el publico
                    </p>
                </div>
                <div className="carousel-inner">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                        <div class="about-img">
                            <img src={Imgen} alt="" class="img-fluid"/>
                        </div>
                        <BlockimgInf 
                        text="Welcome to Our Site"
                        parrafo="Bienvenido a Meet and Drive un servicio de localizacion donde fomenta la posibilidad de satisfacer sus necesidades de busqueda, cabe de mencionar que el servicio es basado para nuevos clientes que se preocupan por la ubicacion "
                        />
                        </div>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="about-img">
                            <img src={Imgen2} alt="" class="img-fluid"/>
                        </div>
                           <BlockimgInf
                           text="Our Story"
                           parrafo="Nosotros manifestamos la  preocupacion y seguridad del cliente, para manifestar la busqueda exitosa y que nuestros usuarios tengan la seguridad en nuestro servicio de busqueda  "
                        />
                    </div>
                    <div class="col-md-6">
                        <div class="about-img">
                            <img src={Imgen3} alt="" class="img-fluid"/>
                        </div>
                           <BlockimgInf
                           text="Our info"
                           parrafo="La manifestacion de rutas viables, donde se muestra las posibles rutas cercanas, para llegar al destino de manera rapida y segura"
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
        

    );
}
export default WrapperAbout;