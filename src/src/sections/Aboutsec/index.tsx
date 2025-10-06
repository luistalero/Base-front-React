import 'src/sections/sections.css'

function AboutSection() {
    return (
        <section id="about" className="section about">
            <h2>Acerca de</h2>
            <p>Aquí encontrarás información acerca de nosotros 📖</p>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#provider">Provider Section</a></li>
                <li><a href="#who">Who Section</a></li>
                <li><a href="#with">With Section</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </section>
    );
}

export default AboutSection;
