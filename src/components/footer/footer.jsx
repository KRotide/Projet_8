import "./footer.scss";
import Logo from "../../assets/logo-kasa-footer.png";


export default function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={Logo} alt="Logo Kasa" />
            <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}