import "./nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A Propos</Link>
        </nav>
    )
}