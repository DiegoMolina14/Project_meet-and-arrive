import { useNavigate } from 'react-router-dom';
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import WrapeerFoter from "../molecules/WrapperFoter";
import Buttom from "../atoms/Buttom";
import "../../assets/style/estiloLogin.css";
function FormLogin() {
    const navigate = useNavigate()
    const clickHandler = (e) =>{
        e.preventDefault();
        navigate("/inicioMain")
    }
    return (
        <>
        <body id="logo" className=''>
              <div class="container py-5" >
              <div class="row justify-content-center">
                <div class="col-lg-4">
                    <div class="rounded p-4 p-sm-5 wow fadeIn" id="conForm" data-wow-delay="0.5s">
                        <h1 class="display-5 text-black-50 text-center mb-5">LOGIN</h1>
                        <div class="row g-3">
                            <div class="col-12">
                               <WrapperInput
                                msn="Username"
                                type="text"
                                placeholder="Firts name and last name" />
                            </div>
                            <div class="col-12">
                                <WrapperInput
                                msn="Password"
                                type="password"
                                placeholder="Firts name and last name" />
                                
                            </div>
                            <div class="col-12 text-center">
                                <Buttom class="btn btn-primary py-3 px-4" onClick={clickHandler}>Entrar</Buttom>
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

export default FormLogin;