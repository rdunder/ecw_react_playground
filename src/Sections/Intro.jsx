
import imgRpi from "../assets/rpi.png";
import "../Styles/Sections/intro.css";

function Intro() {
    return (
        <header className="intro">
            <h1>This is where the coding happens</h1>
            <img src={imgRpi} />
        </header>
    )
}

export default Intro;