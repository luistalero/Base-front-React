import 'src/sections/sections.css'

function HomeSection() {
    return (
        <section id="home" className="section home">
            <h2>Inicio</h2>
            <p>Bienvenido a la sección de inicio 🚀</p>
            <ul>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#provider">Provider Section</a></li>
                <li><a href="#who">Who Section</a></li>
                <li><a href="#with">With Section</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </section>
    );
}

export default HomeSection;
