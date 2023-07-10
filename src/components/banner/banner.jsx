import "./banner.scss";
import Image from "../../assets/Image source 1.png";

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={Image} alt="paysage" />
            <div className="banner__overlay"></div>
            <p className="banner__txt">Chez vous, partout et ailleurs</p>
        </div>
    )
}