import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { CaruselBoostrap } from '../../assets/bootstrap/carusel/CaruselBootstrap';
import { CaruselTraport } from '../../assets/bootstrap/carusel/CaruselTraport';
import Iconos from '../atoms/Iconos';
export default function CircularDemo() {
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
    useEffect(()=>{
         CaruselTraport.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));  

    }, []);
    const navigate = useNavigate()
    const clickHandler = (e) =>{
        e.preventDefault();
        navigate("/Busqueda")
    }

    const productTemplate = (product) => {
       
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-12 px-10">
                <div className="mb-1 flex justify-content-center">
                    <Iconos src={product.image} className="border-circle max-w-12rem h-12rem m-2 bg-yellow-500"></Iconos>
                </div>        
                <div>
                    <p>Busqueda local:</p>
                    <p>Informacion de rutas:</p>
                    <p>Informacion contacto:</p>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" className="p-button p-button-rounded" onClick={clickHandler}>
                            <h3>Entrar</h3>
                        </Button>
                    </div>
                </div>        
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numScroll={1} numVisible={4} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
        
    )
}