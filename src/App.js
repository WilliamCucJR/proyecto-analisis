import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home  from "./pages/Home";
import Proveedores from "./pages/Proveedores";
import Compras from "./pages/Compras";
import Autorizaciones from "./pages/Autorizaciones";
import Bodega from "./pages/Bodega";
import Contabilidad from "./pages/Contabilidad";
import Administracion from "./pages/Administracion";
import Productos from "./Components/Productos";
import OrdenesCompra from "./Components/OrdenesCompra/OrdenesCompra";
import Cotizaciones from "./Components/Cotizaciones";
import RecepcionPedido from "./Components/RecepcionPedido";
import Facturas from "./Components/Facturas";
import Reporteria from "./Components/Reporteria";
import Usuarios from "./Components/Usuarios/Usuarios";
import Permisos from "./Components/Permisos";
import Inventario from "./Components/Inventario";

function App() {

  const valor = 1;

  if(valor === 0){

    return (
      <div>
        <LoginForm />
      </div>
    );

  }else{
    return (
        <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/compras" element={<Compras/>} />
          <Route path="/proveedores" element={<Proveedores/>} />
          <Route path="/autorizaciones" element={<Autorizaciones/>} />
          <Route path="/bodega" element={<Bodega/>} />
          <Route path="/contabilidad" element={<Contabilidad/>} />
          <Route path="/administracion" element={<Administracion/>} />
          <Route path="/ordenes-compra" element={<OrdenesCompra/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/cotizaciones" element={<Cotizaciones/>} />
          <Route path="/recepcion-pedido" element={<RecepcionPedido/>} />
          <Route path="/facturas" element={<Facturas/>} />
          <Route path="/reporteria" element={<Reporteria/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/permisos" element={<Permisos/>} />
          <Route path="/inventario" element={<Inventario/>} />
        </Routes>
        </BrowserRouter>
        
    );
  }
  
}

export default App;
