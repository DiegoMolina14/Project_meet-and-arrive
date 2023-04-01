import Label from "../atoms/Label";
import Input from "../atoms/Input";
import"../../assets/Estilo.css";

function WrapperInput({msn, type, placeholder}) {
    return ( 
        <div className="container-Login">
            <Label msn={msn}/>
            <Input type={type} placeholder={placeholder}/>
        </div>
     );
}

export default WrapperInput;