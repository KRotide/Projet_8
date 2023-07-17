import "./about.scss";
import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import DatasAbout from "../../datas/about.json";
import Collapse from "../../components/collapse/collapse";
import Footer from "../../components/footer/footer";

export default function About() {
    return (
        <div className="about">
            <Header />
            <Banner />
            <main className="about__main">
                {DatasAbout.map(data => (
                    <Collapse
                        key={data.id}
                        id={data.id}
                        title={data.aboutTitle}
                        content={data.aboutText}
                    />
                ))}
            </main>
            <Footer />
        </div>
    )
}