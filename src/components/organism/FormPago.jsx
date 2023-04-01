import React from 'react';
import WrapperInput from "../molecules/WrapperInput";
import Label from "../atoms/Label";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css'; 

  
function FormPago() {
    return(
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
                                <h2 class="price-amount"><span>$</span>9<span>.99</span><span> / m</span></h2>
                            </div>
                           <div class="col-12">
                               <WrapperInput
                                msn="Ingrese Ciudad"
                                type="text"
                                placeholder="Firts name and last name" />
                            </div>  
                            <div class="col-12">
                               <WrapperInput
                                msn="Ingrese el Estado"
                                type="text"
                                placeholder="Firts city" />
                            </div>
                            <div class="col-12">
                               <WrapperInput
                                msn="Ingrese codigo postal"
                                type="number"
                                placeholder="codigo postal" />
                            </div>
                            <div class="col-12">
                               <WrapperInput
                                msn="Ingrese el Pais o Region"
                                type="text"
                                placeholder="Firts city" />
                            </div>
                            <a href="#" class="btn mian-btn price-btn">Generar orden de pago</a>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="price-content features-price">
                            <div class="price-plan">
                                <i class="ion-md-star"></i>
                                <p class="price-title">Gold</p>
                                <div class="col-12">
                                   <WrapperInput
                                    msn="Ingrese el Estado"
                                    type="text"
                                    placeholder="Firts city" />
                                </div>
                            </div>
                        <div class="flex flex-wrap-reverse md:flex-wrap justify-content-center card-container purple-container" style={{maxWidth: '100%'}}>
                            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-4 border-round h-8rem" style={{minWidth: '250px', maxWidth: '100%'}}>
                                <div class="col-12">
                                   <WrapperInput
                                    msn="Ingrese el numero de su Tarjeta"
                                    type="text"
                                    placeholder="Num.Tarjeta" />
                                </div>
                            </div>
                            <div class="flex align-items-center justify-content-center flex-column bg-purple-500 font-bold text-white m-4 border-round h-8rem" style={{minWidth: '100px', maxWidth: '35%'}}>
        
                                <div class="flex justify-content-center">
                                <input type="text" class="form-control w-30 m-1"/>
                                <input type="text" class="form-control w-30 m-1"/>
                                </div>
                                 <Label msn="Expira"/>
                            </div>
                            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-4 border-round h-8rem" style={{minWidth: '250px', maxWidth: '100%'}}>
                                <div class="col-12">
                                   <WrapperInput
                                    msn="Ingrese el titula de la Tarjeta"
                                    type="text"
                                    placeholder="Num.Tarjeta" />
                                </div>
                            </div>
                            <div class="flex align-items-center justify-content-center bg-purple-500 font-bold text-white m-4 border-round h-8rem" style={{minWidth: '250px', maxWidth: '100%'}}>
                                <div class="col-12 ">
                                   <WrapperInput
                                    msn="CVV"
                                    type="text"
                                    placeholder="Num.Tarjeta" />
                                </div>
                            </div>
                        </div>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}
export default FormPago;