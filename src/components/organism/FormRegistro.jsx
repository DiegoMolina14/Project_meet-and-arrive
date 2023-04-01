import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Buttom from "../atoms/Buttom";
import "../../assets/style/estiloLogin.css";
function FormRegistro() {
    return (
        <>
        <body id="logo">
              <div class="container py-5" >
              <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="rounded-right p-4 p-sm-5 wow fadeIn" data-wow-delay="0.5s" id="conForm">
                        <h1 class="display-5 text-black-50 text-center mb-4">Registro Nuevo </h1>
                        <div class="row g-3">
                            <div class="col-12">
                                <WrapperInput
                                msn="Firts name and last name"
                                type="text"
                                placeholder="Firts name and last name" />
                            </div>
                            <div class="col-12">
                                <WrapperInput
                                msn="E-mail address"
                                type="email"
                                placeholder="E-mail address" />
                                
                            </div>
                            <div className="col-12">
                                <WrapperInput
                               msn="Cel. number"
                               type="tel"
                               placeholder="Cel. number" />
                            </div>
                            <div className="col-12">
                                <WrapperInput
                                msn="Write Password"
                                type="password"
                                placeholder="Write Password" />
                            </div>
                            <div class="col-12 text-center">
                                <Buttom class="btn btn-primary py-3 px-4">Registrar</Buttom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>         
        </body>
        </>

     );
}
export default FormRegistro;