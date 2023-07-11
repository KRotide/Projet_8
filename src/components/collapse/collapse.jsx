import "./collapse.scss";
import aboutDatas from "../../datas/about.json"
import ArrowUp from "../../assets/Arrow-up.png";
import ArrowDown from "../../assets/Arrow-down.png";
import { useState } from "react";

export default function Collapse() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="collapse">
            {aboutDatas.map((data) => (
                <div key={data.id} className="collapse__dropdown">
                    <h3 className="collapse__dropdown__title" onClick={() => setToggle(!toggle)}>
                        {data.aboutTitle}
                        <img className="collapse__dropdown__icon" src={toggle ? ArrowDown : ArrowUp} alt="voir le contenu" />
                    </h3>
                    {toggle && (
                        <div className="collapse__dropdown__txt">
                            {data.aboutText}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}