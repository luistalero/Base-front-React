import 'src/sections/sections.css'

function WithSection() {
    return (
        <section id="with" className="section with">
            <h2>With Section</h2>
            <p>Aquí encontrarás información acerca de quienes conocen esta app. 📖</p>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Acerca de</a></li>
                <li><a href="#provider">Provider Section</a></li>
                <li><a href="#who">Who Section</a></li>
                <li><a href="#footer">Footer</a></li>
            </ul>
        </section>
    );
}

export default WithSection;
