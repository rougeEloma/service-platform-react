import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import { MainButton } from "../button/Buttons";
import { Link, useLocation } from "react-router-dom";
import userPfp from "../../../public/img/react.svg"

const NavBar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const {pathname} = useLocation();

    const isActive = () => {
        window,scrollY > 0 ? setActive(true) : setActive(false);
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
        <div className={active || pathname !== "/" ? "nav-bar active" : "nav-bar"}>
          <div className="container">
            <div className="logo">
              <Link className="link" to="/">
                <span className="text">LBN</span>
              </Link>
              {/* <span className="dot">.</span> */}
            </div>
            <div className="links">
              <span>NBN</span> {/* l'apropos  */}
              <span>Explorer</span>
              <span>Langues</span>
              {!currentUser?.isSeller && <span>Devient Prestataire</span>}
              {currentUser ? (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={userPfp} alt="" />
                  <span>{currentUser?.username}</span>
                  {open && (
                    <div className="options">
                      {currentUser.isSeller && (
                        <>
                          <Link className="link" to="/ajouter-service">
                            Nouveau
                          </Link>
                          <Link className="link" to="/mes-services">
                            Services
                          </Link>
                        </>
                      )}
                      <Link className="link" to="/mes-commandes">
                        Commandes
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" to="/">
                        Se Déconnecter
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="link">Se connecter</Link>
                  <Link className="link" to="/register">
                    <button>Joindre</button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {(active || pathname !== "/") && (
            <>
              <hr />
              <div className="menu">
                <Link className="link menuLink" to="/">
                  Ménage
                </Link>
                <Link className="link menuLink" to="/">
                  Jardin
                </Link>
                <Link className="link menuLink" to="/">
                  Garage
                </Link>
                <Link className="link menuLink" to="/">
                  Commission
                </Link>
                <Link className="link menuLink" to="/">
                  Musique & Audio
                </Link>
                <Link className="link menuLink" to="/">
                  Photograpie
                </Link>
                <Link className="link menuLink" to="/">
                  Littérature
                </Link>
                <Link className="link menuLink" to="/">
                  Informatique
                </Link>
                <Link className="link menuLink" to="/">
                  Electronique
                </Link>
              </div>
              <hr />
            </>
          )}
        </div>
      );
}

export default NavBar;