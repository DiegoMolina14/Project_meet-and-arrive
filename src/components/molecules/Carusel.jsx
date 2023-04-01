

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { CaruselBoostrap } from '../../assets/bootstrap/carusel/CaruselBootstrap';
import { CaruselTraport } from '../../assets/bootstrap/carusel/CaruselTraport';
import Iconos from '../atoms/Iconos';
export default function CircularDemo({trasp,direc,Tiempo,ubic,OpsData,Vis}) {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    
    switch (OpsData) {
        case "dat1":
            useEffect(() => {
             CaruselBoostrap.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
            }, []); 
            break;
        case "dat2":
            useEffect(()=>{
             CaruselTraport.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));  
            }, []);
            break;    
    
        default:
            break;
    }
    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const productTemplate = (product) => {
       
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-12 px-10">
                <div className="mb-1 flex justify-content-center">
                    <Iconos src={product.image} className="border-circle max-w-12rem h-12rem m-2 bg-yellow-500"></Iconos>
                </div>                
            </div>
        );
    };

    return (
        <div className='card'>
            <Carousel value={products} numVisible={1} numScroll={1} responsiveOptions={responsiveOptions} className="custom-carousel" circular
            autoplayInterval={3000} itemTemplate={productTemplate} />
        <div className='card'>
            <div className='flex flex-column'>
                <div class="flex align-items-center justify-content-center"><h6>{trasp}<span class="text-secondary"></span></h6></div>
                <div class="flex align-items-center justify-content-center"><h6>{direc}<span class="text-secondary"></span></h6></div>
                <div class="flex align-items-center justify-content-center"><h6>{Tiempo}<span class="text-secondary"></span></h6></div> 
                <div class="flex align-items-center justify-content-center"><h6>{ubic}<span class="text-secondary"></span></h6></div>
               
            </div>

        </div>
        </div>
        
            
        
    )
}
        