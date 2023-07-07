import "./header.scss";
import Logo from "../../assets/logo-kasa.png";
import Nav from "../nav/nav";

export default function Header() {
    return (
        <header className="header">
            <h1>
                <img className="header__logo-d" src={Logo} alt="Logo Kasa" />
            </h1>
            <Nav />
        </header>
    )
}