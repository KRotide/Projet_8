import "./pageNotFound.scss";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

export default function pageNotFound() {
    return (
        <div className="pageNotFound">
            <Header />
            <div className="pageNotFound__content">
                <h1 className="pageNotFound__content__title">404</h1>
                <p className="pageNotFound__content__txt">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="pageNotFound__content__link">Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}