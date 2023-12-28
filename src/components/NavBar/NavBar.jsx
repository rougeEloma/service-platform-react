import React from "react";
import "./nav-bar.css";

const NavBar = () => {
    return (
        <nav className="nav-bar flex flex-col bg-primary-color text-white-color">
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
                    <button>Rejoins-nous</button>
                </div>
            </div>
                <hr />
                <div className="menu">
                    <span>Categorie 1</span>
                    <span>Categorie 2</span>
                    <span>Categorie 3</span>
                </div>
        </nav>
    )
}

export default NavBar;