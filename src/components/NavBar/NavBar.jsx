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
              <span>Fiverr Business</span>
              <span>Explore</span>
              <span>English</span>
              {!currentUser?.isSeller && <span>Devient Prestataire</span>}
              {currentUser ? (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={userPfp} alt="" />
                  <span>{currentUser?.username}</span>
                  {open && (
                    <div className="options">
                      {currentUser.isSeller && (
                        <>
                          <Link className="link" to="/mygigs">
                            Gigs
                          </Link>
                          <Link className="link" to="/add">
                            Add New Gig
                          </Link>
                        </>
                      )}
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" to="/">
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="link">Sign in</Link>
                  <Link className="link" to="/register">
                    <button>Join</button>
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
                  Graphics & Design
                </Link>
                <Link className="link menuLink" to="/">
                  Video & Animation
                </Link>
                <Link className="link menuLink" to="/">
                  Writing & Translation
                </Link>
                <Link className="link menuLink" to="/">
                  Digital Marketing
                </Link>
                <Link className="link menuLink" to="/">
                  Music & Audio
                </Link>
                <Link className="link menuLink" to="/">
                  Programming & Tech
                </Link>
                <Link className="link menuLink" to="/">
                  Business
                </Link>
                <Link className="link menuLink" to="/">
                  Lifestyle
                </Link>
              </div>
              <hr />
            </>
          )}
        </div>
      );
}

export default NavBar;