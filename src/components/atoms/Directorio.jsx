

import styled from 'styled-components';
import { Link } from "react-router-dom";
const StileDirectorio  = styled.a`
  font-family: 'Roboto' white;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
function Directorio({type,msg,direc, txt}) {
    return(
        <>
        <Link to={direc}><StileDirectorio style={{color: 'var(--primary-color-text)'}} className={type}>{msg}</StileDirectorio></Link>
        </>
    );
} 
export default Directorio;