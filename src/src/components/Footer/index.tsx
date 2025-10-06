import { Link } from "react-router-dom";
import { publicRoutes } from "src/routes";
import "src/components/Footer/footer.component.css";
import Playstore from "src/assets/insignia_playstore.svg";
import Appstore from "src/assets/insignia_appstore.svg";

function Footer() {
  const playStoreUrl = import.meta.env.VITE_URL_PLAYSTORE;
  const appStoreUrl = import.meta.env.VITE_URL_APPSTORE;

  return (
    <footer id="footer" className="footer">
      <p>© {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.</p>
      <nav className="nav-footer">
        <ul>
          <li><Link to={publicRoutes.PRODUCT_DETAIL}>
            <i className="fas fa-cubes"></i> Servicios</Link></li>
          <li><a href={playStoreUrl} target="_blank">
            <img src={Playstore} alt="Play store" />
          </a>
          </li>
          <li><a href={appStoreUrl} target="_blank">
            <img src={Appstore} alt="App store" />
          </a>
          </li>
          <li><Link to={publicRoutes.CONTACT_US}>
            <i className="fas fa-phone-square-alt"></i> Contacto</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;