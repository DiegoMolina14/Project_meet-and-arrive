
import "../assets/style/estiloOferta.css";
import WrapeerFoter from "../components/molecules/WrapperFoter";
import WrapperHeder from "../components/molecules/WrapperHeder";

function Ofertas() {
    return(
        <>
        <WrapperHeder/>
        <body>
        <div className="pricing mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Our Pricing</h2>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas 
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="price-content">
                            <div class="price-plan">
                                <i class="ion-md-home"></i>
                                <p class="price-title">Silver</p>
                                <h2 class="price-amount"><span>$</span>0<span>.00</span><span> / m</span></h2>
                            </div>
                            <ul class="price-details">
                                <h4>Version de prueba gratuita por 7 dias para que el usuario conozca las bondades y beneficios de la aplicacion.</h4>
                            </ul>
                            <a href="#" class="btn mian-btn price-btn">Buy Now</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-content features-price">
                            <div class="price-plan">
                                <i class="ion-md-star"></i>
                                <p class="price-title">Gold</p>
                                <h2 class="price-amount"><span>$</span>19<span>.99</span><span> / m</span></h2>
                            </div>
                            <ul class="price-details">
                                <h4> Ofrece un gran servicio de calidad , desactivando la publicidad de diversas fuentes, esta licencia ofrece rutas beneficiarias al usuario sin dar la opcion de transporte que desea adquirir,solo muestra la opcion de autobus.</h4>
                            </ul>
                            <a href="#" class="btn mian-btn price-btn features-price-btn">Buy Now</a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="price-content">
                            <div class="price-plan">
                                <i class="ion-md-gift"></i>
                                <p class="price-title">Platinum</p>
                                <h2 class="price-amount"><span>$</span>29<span>.99</span><span> / m</span></h2>
                            </div>
                            <ul class="price-details">
                                <h4>Acceso a todas las  funciones de la aplicacion,incluido un catalogo de transportes para que el usuario pueda elegir de que manera viajar.</h4>
                            </ul>
                            <a href="#" class="btn mian-btn price-btn">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </body>
       <WrapeerFoter/>
        </>
                    
    
    );
}
export default Ofertas;