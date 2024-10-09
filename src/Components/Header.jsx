
import logo from "../assets/logo.svg";
import "../Styles/Components/header.css";

function Header() {
    return (
        <header className="header">
            <img src={logo} />

            <nav>
                <a href="#">Section1</a>
                <a href="#">Section2</a>
                <a href="#">Section3</a>
            </nav>
        </header>
    )
}

export default Header;