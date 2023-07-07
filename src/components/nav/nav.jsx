import "./nav.scss";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();

    return (
        <nav className="nav">
            <Link className={location.pathname === "/" ? "nav__link active" : "nav__link"} to="/">Accueil</Link>
            <Link className={location.pathname === "/about" ? "nav__link active" : "nav__link"} to="/about">A Propos</Link>
        </nav>
    )
}