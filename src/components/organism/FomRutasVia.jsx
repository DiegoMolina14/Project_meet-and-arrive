
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button';
import WrapperItem from "../molecules/WrapperItem";
import "../../assets/lib/ionicons/css/ionicons.min.css";
import "../../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../assets/lib/lightbox/css/lightbox.min.css";
import "../../assets/bootstrap/css/bootstrap.css";
import "../../assets/style/estiloRutas.css";
import GumMap from "../molecules/GumMap";

import styled from 'styled-components';
const Map = styled.div` 
    position: relative;
    background: #ffffff;
    width: 100%;
    height: 500px;
    margin-bottom: -7px;
`;

function FomRutasVia() {
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <>
        <div class="portfolio mt-100">
            <div class="container">
                <div class="section-header">
                    <h2>Rutas Viables</h2>
                    <p>
                    Te brindamos las Rutas de servicios de trasporte
                    </p>
                </div>

                <div class="row portfolio-container">
                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="1"
                        />
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(0)} className="p-button-text" label="Taxi" /></a> 
                            <h3>Ubicar Estación</h3>
                            
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="2"
                        />
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(1)} className="p-button-text" label="Tren" /></a>
                            <h3>Ubicar Estación</h3>
                        
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="3"
                        />
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(2)} className="p-button-text" label="Aeropuerto" /></a>
                            
                            <h3>Ubicar Estación</h3>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="4"
                        />                    
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(3)} className="p-button-text" label="Microbus" /></a>
                            <h3>Ubicar Estación</h3>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="5"
                        />   
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(4)} className="p-button-text" label="Gasolinera" /></a>
                            <h3>Ubicar Estación</h3>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item">
                        <WrapperItem
                        img="6"
                        />                    
                        <div class="portfolio-info">
                            <a href="#active"><Button onClick={() => setActiveIndex(5)} className="p-button-text" label="Hospital" /></a>   
                            <h3>Ubicar Estación</h3>
                        </div>
                    </div>
                </div>
            <div id='active'>
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Taxi">
                <Map>
                 <GumMap
                 ops="1"
                 />
                </Map>
                </TabPanel>
                <TabPanel header="Tren">
                <Map>
                 <GumMap
                 ops="2"
                 />
                </Map>
                </TabPanel>
                <TabPanel header="Aueropuerto">
                <Map>
                 <GumMap
                 ops="3"
                 />
                </Map>
                </TabPanel>
                <TabPanel header="Microbus">
                <Map>
                 <GumMap
                 ops="4"
                 />
                </Map>
                </TabPanel>
                <TabPanel header="Gasolinera">
                <Map>
                 <GumMap
                 ops="5"
                 />
                </Map>
                </TabPanel>
                <TabPanel header="Hospital">
                <Map>
                 <GumMap
                 ops="6"
                 />
                </Map>
                </TabPanel>
            </TabView>
            </div>
            </div>
            
            
        </div>        
        </>
    );
}
export default FomRutasVia;