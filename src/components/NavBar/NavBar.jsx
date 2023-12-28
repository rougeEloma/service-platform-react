import React from "react";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="text">LBN</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>business</span>
                    <span>Explorer</span>
                    <span>à propos</span>
                    <span>Devenir prestataire</span>
                    <button>s'inscrire</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;