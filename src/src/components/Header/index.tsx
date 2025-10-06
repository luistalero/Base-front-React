import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { publicRoutes } from "src/routes";
import "./header.component.css";
import { Descargar } from "..";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  const handleScrollToSection = (hash: string) => {
    navigate(`${publicRoutes.LANDING}${hash}`);
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
    cerrarMenu();
  };

  return (
    <header className="header">
      <button
        className="logo"
        onClick={() => handleScrollToSection("#home")}
      >
        <i className="fas fa-house-user"></i> Mi Proyecto
      </button>

      <button className="btn-menu" onClick={toggleMenu}>
        {menuAbierto ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>

      <nav className={`nav-header ${menuAbierto ? "activo" : ""}`}>
        <ul>
          <li>
            <Link to={publicRoutes.PRODUCT_DETAIL} onClick={cerrarMenu}>
              <i className="fas fa-cubes"></i> Servicios
            </Link>
          </li>
          <li>
            <Link to={`${publicRoutes.CONTACT_US}-da`} onClick={cerrarMenu}>
              <i className="fas fa-phone-square-alt"></i> Contacto
            </Link>
          </li>
          <li>
            <button
              className="link-btn"
              onClick={() => handleScrollToSection("#who")}
            >
              <i className="fas fa-user"></i> Who section
            </button>
          </li>
          <li>
            <button
              className="link-btn"
              onClick={() => handleScrollToSection("#with")}
            >
              <i className="fas fa-handshake"></i> With section
            </button>
          </li>
            <Descargar />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
