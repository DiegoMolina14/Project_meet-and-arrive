import React, { useState } from 'react';


import Iconos from "../atoms/Iconos";
import Icon from "../../assets/img/taxci.jpg";
import Icon1 from "../../assets/img/trenIcono.jpg";
import Icon2 from "../../assets/img/avionIcono.jpg";
import Icon3 from "../../assets/img/busIcono.jpg";
import Icon4 from "../../assets/img/gasIcono.jpg";
import Icon5 from "../../assets/img/hospIcono.jpg";
import "../../assets/bootstrap/css/bootstrap.min.css";
function WrapperItem({img}) {
    const [activeIndex, setActiveIndex] = useState(0);
    if (img==6) {
     return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon5} class="img-fluid" alt="Portfolio"/>
            
            <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
            <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
        </div>

    </>
    );       
    }
    if (img==5) {
     return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon4} class="img-fluid" alt="Portfolio"/>
                <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
        </div>

    </>
    );       
    }
    if (img==4) {
     return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon3} class="img-fluid" alt="Portfolio"/>
                <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
        </div>

    </>
    );       
    }
    if (img==3) {
     return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon2} class="img-fluid" alt="Portfolio"/>
                <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
        </div>

    </>
    );       
    } 
    if (img==2) {
    return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon1} class="img-fluid" alt="Portfolio"/>
            <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
        </div>

    </>
    );        
    }
    return(
    <>
        <div class="portfolio-img">
            <Iconos src={Icon} class="img-fluid" alt="Portfolio"/>
                <a href="img/portfolio-5.jpg" class="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i class="ion-md-eye"></i></a>
                <a href="" class="link-details" title="More Details"><i class="ion-md-open"></i></a>
        </div>

    </>
    );
}
export default WrapperItem;