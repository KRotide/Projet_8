import "./about.scss";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Collapse from "../../components/collapse/collapse";
import Footer from "../../components/footer/footer";

export default function About() {
    return (
        <div className="about">
            <Header />
            <Banner />
            <Collapse />
            <Footer />
        </div>
    )
}