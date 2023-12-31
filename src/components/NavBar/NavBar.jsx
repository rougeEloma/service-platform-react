import React, { useState } from "react";
import "./nav-bar.css";
import { MainButton } from "../button/Buttons";

const NavBar = () => {

    const [active, setActive] = useState(true)

    return (
        <nav className="nav-bar">
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                        <span className="text">LBN</span>
                    {/* </Link> */}
                    {/* <span className="dot">.</span> */}
                </div>
                <div className="links">
                    <span>business</span>
                    <span>Explorer</span>
                    <span>à propos</span>
                    <span>Nos prestataires</span>
                    <MainButton textValue="Rejoins-nous!"/>
                </div>
            </div>
                {/* <hr /> */}
                <div className={active ? "menu active" : "menu"}>
                    <span>Categorie 1</span>
                    <span>Categorie 2</span>
                    <span>Categorie 3</span>
                </div>
        </nav>
    )
}

export default NavBar;