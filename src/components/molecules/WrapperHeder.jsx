import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import Directorio from "../atoms/Directorio";
import ImageHeader from "../atoms/ImageHeader";
import "../../assets/style/estiloHederNav.css";
import "../../assets/style/estiloCarusel.css";
import "../../assets/lib/ionicons/css/ionicons.min.css";
import logo from "../../assets/img/default_transparent_1000x1000.png";
import Fond from "../../assets/img/imageheader.png";
function WrapperHeder() {
         const [visibleTop, setVisibleTop] = useState(false);
    return (
        <>
        <div className="card flex justify-content-center">
            <Sidebar className='h-30rem' style={{background: "rgba(93, 106, 191, 0.87)"}} visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <div className="navbar-nav ml-auto">
                            <Directorio
                            type="nav-item nav-link active"
                            msg="Home"
                            direc="/inicioMain"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="contac"
                            direc="/FormRegistro"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Ofertas"
                            direc="/Ofertas"
                            />  
                            <Directorio
                            type="nav-item nav-link"
                            msg="Router"
                            direc="/Rutas"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Busqueda Ubicacion"
                            direc="/Busqueda"
                            />     
                            <Directorio
                            type="nav-item nav-link"
                            msg="Profile"
                            direc="/Profile"
                            />      
                            <Directorio
                            type="nav-item nav-link"
                            msg="Admin Profile"
                            direc="/ProfileAdim"
                            />   
                                            
                        </div>
            </Sidebar>
        </div>
        <div id="nav">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a href="index.html" className="navbar-brand">
                        <img src={logo} alt="" id="logoMeet"/>
                    </a>
                    <button type="button" onClick={() => setVisibleTop(true)} className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Directorio
                            type="nav-item nav-link active"
                            msg="Home"
                            direc="/inicioMain"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="contac"
                            direc="/FormRegistro"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Ofertas"
                            direc="/Ofertas"
                            />  
                            <Directorio
                            type="nav-item nav-link"
                            msg="Router"
                            direc="/Rutas"
                            />
                            <Directorio
                            type="nav-item nav-link"
                            msg="Ubicacion"
                            direc="/Busqueda"
                            />     
                            <Directorio
                            type="nav-item nav-link"
                            msg="Profile"
                            direc="/Profile"
                            />      
                            <Directorio
                            type="nav-item nav-link"
                            msg="Admin Profile"
                            direc="/ProfileAdim"
                            />   
                            <Directorio
                            type="nav-item nav-link"
                            msg="Services"
                            direc="/PageLoading"
                            />                                           
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <ImageHeader src={Fond}/>
        </>
        
    )
}
export default WrapperHeder;