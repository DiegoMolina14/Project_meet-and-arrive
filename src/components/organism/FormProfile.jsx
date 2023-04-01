import React from 'react';
import 'primeicons/primeicons.css';  
import 'primereact/resources/primereact.css'; 
import Carusel from "../molecules/Carusel";
import CaruselProfile from "../molecules/CaruselProfile";
import WrapperHeder from "../molecules/WrapperHeder";
import WrapeerFoter from "../molecules/WrapperFoter";
import ImgPerfil from "../../assets/img/Perfil.jpg";
function FormProfile() {
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
                        <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">Pedro</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Birthday: <span class="text-secondary">1 April 1990</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Degree: <span class="text-secondary">Master</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Experience: <span class="text-secondary">10 Years</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Phone: <span class="text-secondary">+012 345 6789</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Email: <span class="text-secondary">info@example.com</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Address: <span class="text-secondary">123 Street, Chiapas, Mex</span></h6></div>
                        <div class="col-sm-6 py-2"><h6>Freelance: <span class="text-secondary">Available</span></h6></div>
                    </div>
                    <a href="" class="btn btn-outline-primary mr-4">Editar</a>
                    
                </div>
            </div>
        </div>
       </div>
        <React.StrictMode>
            <CaruselProfile/>
        </React.StrictMode>
    <WrapeerFoter/>
    </>
    )
}
export default FormProfile;