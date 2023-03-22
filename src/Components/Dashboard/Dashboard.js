import { useState } from "react";
import { Input, Menu, Icon } from "semantic-ui-react";
import { useNavigate, useLocation } from "react-router";

import Logo from "../../img/logo.jpeg";

export default function Dashboard() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  const navigate = useNavigate();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };

  return (
    <Menu>
      <Menu.Item
        name="inicio"
        active={activeItem === "inicio"}
        onClick={handleItemClick}
      >
        <Icon name="home" /> Inicio
      </Menu.Item>
      <Menu.Item
        name="compras"
        active={activeItem === "compras"}
        onClick={handleItemClick}
        >
        <Icon name="shop" /> Compras
      </Menu.Item>
      <Menu.Item
        name="proveedores"
        active={activeItem === "proveedores"}
        onClick={handleItemClick}
        >
        <Icon name="users" /> Proveedores
      </Menu.Item>

      <Menu.Item
        name="autorizaciones"
        active={activeItem === "autorizaciones"}
        onClick={handleItemClick}
        >
        <Icon name="check circle outline" /> Autorizaciones
      </Menu.Item>

      <Menu.Item
        name="bodega"
        active={activeItem === "bodega"}
        onClick={handleItemClick}
        >
        <Icon name="factory" /> Bodega
      </Menu.Item>

      <Menu.Item
        name="contabilidad"
        active={activeItem === "contabilidad"}
        onClick={handleItemClick}
        >
        <Icon name="calculator" /> Contabilidad
      </Menu.Item>

      <Menu.Item
        name="administracion"
        active={activeItem === "administracion"}
        onClick={handleItemClick}
        >
        <Icon name="cog" /> Administración
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
        <Icon name="search" />
          <Input placeholder="Buscar..." />
        </Menu.Item>
        <Menu.Item
          name="Cerrar Sesión"
          active={activeItem === "Cerrar Sesión"}
          onClick={handleItemClick}
          >
          <Icon name="sign-out" /> Cerrar Sesión
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
