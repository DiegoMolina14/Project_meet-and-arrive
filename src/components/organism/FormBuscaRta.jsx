import React from 'react';
import 'primereact/resources/primereact.css'; 
import Carusel from "../molecules/Carusel";
import { Button } from "reactstrap";

import GumMap from '../atoms/GoogleMaps';
import styled from 'styled-components';
const Map = styled.div` 
    position: relative;
    background: #ffffff;
    width: 100%;
    height: 500px;
    margin-bottom: -7px;
`;
function FormBuscaRta() {
    return(
        <>
        <div class="container-fluid py-5 " id="about">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 pb-4 pb-lg-0">
                    <Button className="min-w-full my-5">Cabiar de ruta</Button>
                    <Button className="min-w-full my-5">Distacia Recorida</Button>
                    <Button className="min-w-full my-5">Mi ubicacion</Button>
                </div>
                <div class="col-lg-7">
                    <h3 class="mb-4">Precios & Trasportes </h3>
                    <div class="row mb-3">
                        <div class="col-sm-6 py-2"><h6>Taxi:<span class="text-secondary"></span></h6></div>
                        <div class="col-sm-6 py-2"><span class="text-secondary ">Kate Winslet</span></div>
                        <div class="col-sm-6 py-2"><h6>Train: <span class="text-secondary"></span></h6></div>
                        <div class="col-sm-6 py-2"><span class="text-secondary ">Kate Winslet</span></div>
                        <div class="col-sm-6 py-2"><h6>to Airport: <span class="text-secondary"></span></h6></div>
                        <div class="col-sm-6 py-2"><span class="text-secondary ">Kate Winslet</span></div>
                        <div class="col-sm-6 py-2"><h6>Bus: <span class="text-secondary"></span></h6></div>
                        <div class="col-sm-6 py-2"><span class="text-secondary ">Kate Winslet</span></div>                       
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
           
                <Carusel
                trasp="Trasporte :"
                direc="Direccion :"
                Tiempo="Tiempo estimado :"
                ubic="Ubicacion :"
                OpsData="dat1"
                Vis="1"
                />
             
            </div>
            <Map className='mb-3'>
                <GumMap/>
            </Map> 
        </div>

       </div>
        </>
    );
}
export default FormBuscaRta;