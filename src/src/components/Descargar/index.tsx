import "./descargar.css";

const DescargarApp = () => {
  const userAgent = navigator.userAgent || "";

  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod|Mac/i.test(userAgent);

  const handleClick = () => {
    const playStoreUrl = import.meta.env.VITE_URL_PLAYSTORE;
    const appStoreUrl = import.meta.env.VITE_URL_APPSTORE;

    if (isAndroid) {
      window.open(playStoreUrl, "_blank");
    } else if (isIOS) {
      window.open(appStoreUrl, "_blank");
    } else {
      window.open(playStoreUrl, "_blank");
    }
  };

  return (
    <li className="registrarse">
      <i className="fas fa-user-circle"></i>
      <button onClick={handleClick} className="btn-descargar">
        <span>Regístrate</span>
      </button>
    </li>
  );
};

export default DescargarApp;
