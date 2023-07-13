import "./collapse.scss";
import arrow from "../../assets/arrow.png";
import React, { useState } from "react";

export default function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openContent = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={`collapse ${isOpen ? 'collapse__dropdown--open' : ''}`}>
            <div className="collapse__dropdown">
                <h3 className="collapse__dropdown__title">
                    {props.title}
                    <img
                        className={`collapse__dropdown__arrow ${isOpen ? 'collapse__dropdown__arrow--down' : 'collapse__dropdown__arrow--up'}`}
                        onClick={openContent}
                        src={arrow}
                        alt="voir le contenu"
                    />
                </h3>
                {isOpen &&
                    <div className="collapse__dropdown__txt">
                        {props.content}
                    </div>
                }
            </div>
        </div>
    );
}