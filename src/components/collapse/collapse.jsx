import "./collapse.scss";
import arrow from "../../assets/arrow.png";
import React, { useState, useRef, useEffect } from "react";

export default function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const openContent = () => {
        setIsOpen(!isOpen);
    }

    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setContentHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setContentHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className={`${isOpen ? 'collapse collapse__open' : 'collapse collapse__closed'}`} style={{ marginBottom: isOpen ? contentHeight : '0px' }}>
            <div className="collapse__dropdown">
                <h3 className="collapse__dropdown__title">
                    {title}
                    <img
                        className={`collapse__dropdown__arrow ${isOpen ? 'collapse__dropdown__arrow--down' : 'collapse__dropdown__arrow--up'}`}
                        onClick={openContent}
                        src={arrow}
                        alt="voir le contenu"
                    />
                </h3>
                <div className={`${isOpen ? 'collapse__dropdown__txt--visible' : 'collapse__dropdown__txt--hidden'}`}
                    ref={contentRef}
                >
                    {content}
                </div>
            </div>
        </div >
    );
}