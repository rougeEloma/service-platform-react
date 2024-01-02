import React, { useEffect, useState } from "react";
import "./nav-bar.css";
import { MainButton } from "../button/Buttons";

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = () => {
        window,scrollY > 0 ? setActive(false) : setActive(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', isActive);
        return () => {
            window.removeEventListener('scroll', isActive);
        }
    },[])

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

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
                    {!currentUser && <MainButton textValue="Rejoins-nous!"/>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="../../assets/AE_logo.png" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                currentUser?.isSeller && (
                                    <>
                                        <span>Services</span>
                                        <span>Ajouter service</span>
                                    </>
                                )}
                                <span>Achats</span>
                                <span>Messages</span>
                                <span>Se déconnecter</span>   
                            </div>}
                        </div>
                    )}
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