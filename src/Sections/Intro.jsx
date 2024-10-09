
import imgRpi from "../assets/rpi.png";
import "../Styles/Sections/intro.css";

function Intro() {
    return (
        <header className="intro">
            
            <img src={imgRpi} />
            <h1>This is where the coding happens</h1>
        </header>
    )
}

export default Intro;