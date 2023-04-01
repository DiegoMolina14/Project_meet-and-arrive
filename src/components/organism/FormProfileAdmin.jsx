import WrapperHeder from "../molecules/WrapperHeder"; 
import WrapperFoter from "../molecules/WrapperFoter"
import ImgPerfil from "../../assets/img/Perfil.jpg";
import GumMap from "../molecules/GumMap";

import styled from 'styled-components';
const Map = styled.div` 
    position: relative;
    background: #ffffff;
    width: 100%;
    height: 500px;
    margin-bottom: -7px;
`;

function FormProfileAdmin() {
    return(
        <>
        <WrapperHeder/>
        <div class="container-fluid py-5" id="about">
        <div class="container">
          
            <div class="row align-items-center">
                <div class="col-lg-5 pb-4 pb-lg-0">
                    
                    <img class="img-fluid rounded w-100" src={ImgPerfil} alt=""/>
                </div>
                <div class="col-lg-7">
                    <h3 class="mb-4">MEET AND ARRIVE MEMBER PROFILE</h3>
                    <p>Member since 2022. has many registered trips and has been a potential user thanks to his public comments to improve the app's service.</p>
                    <div class="row mb-3">
                        <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Kate Winslet</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">1 April 1990</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Degree: <span class="text-secondary">Master</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">10 Years</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">+012 345 6789</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">info@example.com</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">123 Street, Chiapas, Mx</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                    </div>
                    <a href="" class="btn btn-outline-primary mr-4">Hire Me</a>
                    <a href="" class="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
        </div>
       </div>

        <div class="container-fluid pt-5 pb-4" id="service">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                
                <h1 class="display-1 text-uppercase text-white" style={{webkitURL: "1px #dee2e6"}}>Service</h1>
                <h1 class="position-absolute text-uppercase text-primary">ABOUT ME FREE STYLE</h1>
            </div>
            <div class="flex justify-content-center row pb-3">
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <i class="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-0">Web Design</h4>
                    </div>
                    <p>PUEDO COMENTAR QUE PUEDO SER BASTANTE COMPETENTE EN DISEÑOS</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <i class="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-0">Web Development</h4>
                    </div>
                    <p>ASI MISMO PUEDO TENER LIDERAZGO SOBRE EL WEB DEVELPMENT SI ALGUIEN SE INTERESA EN MI</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <i class="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-0">Apps Design</h4>
                    </div>
                    <p>CREO EL DISEÑO DE INTERFACES DE APPS MOBILES</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <i class="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-0">Apps Development</h4>
                    </div>
                    <p>CREO EL SISTEMA Y BACKEND DE LAS LOGICAS MOBILES </p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center mb-4">
                        <i class="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                        <h4 class="font-weight-bold m-0">SEO</h4>
                    </div>
                    <p>CREO CONTENIDO PARA REDES SOCIALES Y DEMAS, PUEDO SER PUNTO DE ACCESO A CONTENIDO MULTIMEDIA PARA QUIEN NECESITE</p>
                    <a class="border-bottom border-primary text-decoration-none" href="">Read More</a>
                </div>

            </div>
            <Map>
                <GumMap/>
            </Map>
        </div>
        </div>
    <WrapperFoter/>
    </>
    );
}
export default FormProfileAdmin;