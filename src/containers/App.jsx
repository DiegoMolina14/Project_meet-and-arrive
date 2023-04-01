import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "../pages/Login"
import Registro from '../pages/Registro';
import Mainpage from '../pages/Mainpage';
import Rutter from '../pages/Rutter';
import Ofertas from '../pages/Ofertas';
import Profile from "../pages/Profile";
import Pago from "../pages/PagoMeet";
import ProfileAdmin from '../pages/ProfileAdmin';
import BusquedaRta from '../pages/BusquedaRta';
import Heder from "../components/molecules/Heder";
import LoadinPage from '../pages/LoadinPage';
import SearchBar from '../components/molecules/SearchBar';
function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/FormRegistro" element={<Registro/>}/>       
                <Route path="/inicioMain" element={<Mainpage/>}/>
                <Route path="/Rutas" element={<Rutter/>}/>
                <Route path="/Busqueda" element={<BusquedaRta/>}/>
                <Route path="/Ofertas" element={<Ofertas/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/ProfileAdim" element={<ProfileAdmin/>}/>
                <Route path="/Pagos" element={<Pago/>}/>
                <Route path="/Heder" element={<Heder/>}/>
                <Route path="/PageLoading" element={<LoadinPage/>}/>
            </Routes>
        </BrowserRouter>
     );
}

export default App;