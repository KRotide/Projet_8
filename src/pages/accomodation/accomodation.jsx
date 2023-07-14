import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./accomodation.scss";
import datas from "../../datas/logements.json";
import Header from "../../components/header/header";
import Carrousel from "../../components/carrousel/carrousel";
import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";
import Footer from "../../components/footer/footer";

export default function Accomodation() {

    const [filteredDatas, setFilteredDatas] = useState([]);

    const { id } = useParams(); //useParams permet d'obtenir l'ID de la page à partir de l'URL

    useEffect(() => {
        const filteredData = datas.filter((data) => data.id === id);
        setFilteredDatas(filteredData)
    }, [id]); // useEffect permet, ici, de filtrer les données du fichier JSON pour ne conserver que l'ID de la page

    return (
        <div className="accomodation">
            <Header />

            {filteredDatas.map(data => {

                const fullName = data.host.name;
                const [firstName, lastName] = fullName.split(' '); // split permet,ici, de séparer le prénom et le nom de l'hôte

                const rating = data.rating;
                const stars = [];
                for (let i = 0; i < rating; i++) {
                    stars.push(<img key={i} src={starActive} alt="filled star" />);
                }
                for (let i = rating; i < 5; i++) {
                    stars.push(<img key={i} src={starInactive} alt="empty star" />);
                }

                return (
                    <main key={data.id} className="accomodation__main">
                        <Carrousel
                            id={data.id}
                            title={data.title}
                            pictures={data.pictures}
                        />
                        <div className="accomodation__main__title">
                            <h1>{data.title}</h1>
                            <p>{data.location}</p>
                        </div>
                        <div className="accomodation__main__host">
                            <p>{firstName}<br />{lastName}</p>
                            <img
                                className="accomodation__main__host__img"
                                src={data.host.picture}
                                alt={fullName}
                            />
                        </div>
                        <div className="accomodation__main__rating">
                            {stars}
                        </div>
                    </main>
                )
            })}
            <Footer />
        </div>
    )
}