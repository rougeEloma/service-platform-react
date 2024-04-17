import { useState } from "react";
import "./NavBar.scss";
import { Link, useLocation } from "react-router-dom";
import userPfp from "/img/user_profile_image.png"
import { slide as Menu } from 'react-burger-menu';

const NavBar = () => {
    const [open, setOpen] = useState(false)


    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    return (
        <div className="navBar">
          <div className="container">
            <Menu pageWrapId={ "page-wrap" } customBurgerIcon={ <img src="/img/hamburger.svg" /> }>
              <main id="page-wrap" className="burger">
                <div className="generals">
                  <Link to="/">
                  <span>Acceuil</span>
                  </Link>
                  <span>NBN</span> {/* l'apropos  */}
                  <Link to="/explorer">
                  <span>Explorer</span>
                  </Link>
                  <span>Langues</span>
                </div>
                <div className="categories">
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
                    Immobilier
                  </Link>
                  <Link className="link menuLink" to="/">
                    Cuisine
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
              </main>
            </Menu>
            <div className="logo">
              <Link className="link" to="/">
                <span className="text">LBN</span>
              </Link>
              {/* <span className="dot">.</span> */}
            </div>
            <div className="links">
              {!currentUser?.isSeller && <span>Devient Prestataire</span>}
              {currentUser ? (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={userPfp} alt="" />
                  {/* <span>{currentUser?.username}</span> */}
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
        </div>
      );
}

export default NavBar;