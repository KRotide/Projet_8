import "./carrousel.scss";
import arrowPrev from "../../assets/arrow-prev.png";
import arrowNext from "../../assets/arrow-next.png";
import { useState } from "react";

export default function Carrousel({ pictures, title }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex - 1);
            if (currentIndex === 0) {
                setCurrentIndex(pictures.length - 1);
            }
        }
    }

    const nextSlide = () => {
        if (pictures.length > 1) {
            setCurrentIndex(currentIndex + 1);
            if (currentIndex === pictures.length - 1) {
                setCurrentIndex(0);
            }
        }
    }

    const slideNumbering = () => {
        if (pictures.length > 1) {
            return `${currentIndex + 1}/${pictures.length}`;
        }
        return "";
    }

    return (
        <div className="carrousel">
            <img
                className="carrousel__img"
                src={pictures[currentIndex]}
                alt={title}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel__icon--hidden' : 'carrousel__icon carrousel__icon__prev'}
                src={arrowPrev}
                alt="show previous"
                onClick={prevSlide}
            />
            <img
                className={pictures.length <= 1 ? 'carrousel__icon--hidden' : 'carrousel__icon carrousel__icon__next'}
                src={arrowNext}
                alt="show next"
                onClick={nextSlide}
            />
            <span
                className="carrousel__slideNumbering">
                {slideNumbering()}
            </span>
        </div>
    )
}