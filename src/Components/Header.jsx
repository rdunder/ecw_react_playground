
import logo from "../assets/logo.svg";
import "../Styles/Components/header.css";

function Header() {
    return (
        <header className="header">
            <a className="logo" href="#"><img src={logo} /></a>

            <nav>
                <a href="#guess-game">GuessGame</a>
                <a href="#">Section2</a>
                <a href="#">Section3</a>
            </nav>
        </header>
    )
}

export default Header;