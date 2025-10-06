import 'src/sections/sections.css'

function WhoSection() {
    return (
        <section id="who" className="section who">
            <h2>Who Section</h2>
            <p>Aquí encontrarás información acerca de quienes usan esta web 📖</p>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#provider">Provider Section</a></li>
                <li><a href="#with">With Section</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </section>
    );
}

export default WhoSection;
