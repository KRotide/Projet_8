import Header from "../../components/header/header";
import Banner from "../../components/banner/banner";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}
