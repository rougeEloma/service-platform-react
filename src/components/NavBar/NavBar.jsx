import Slider from "react-slick";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { axiosFetch } from "../../utils";
import { useRecoilState } from "recoil";
import { userState } from "../../atoms";
import { Loader } from "..";
import "./Navbar.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axiosFetch.get('/auth/me');
        setUser(data.user);
      }
      catch({ response }) {
        localStorage.removeItem('user');
        console.log(response.data.message);
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const isActive = () => {
    window.scrollY > 0 ? setShowMenu(true) : setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const categoryLinks = [
    { path: "/services?categorie=jardin", name: "jardin" },
    { path: "/services?categorie=reparation", name: "réparation" },
    { path: "/services?categorie=commission", name: "commission" },
    { path: "/services?categorie=babysitting", name: "babysitting" },
    { path: "/services?categorie=nettoyage", name: "néttoyage" },
    { path: "/services?categorie=musique", name: "musique" },
    { path: "/services?categorie=filmographie", name: "filmographie" },
    { path: "/services?categorie=photographie", name: "photographie" },
    { path: "/services?categorie=cuisine", name: "cuisine" },
    { path: "/services?categorie=informatique", name: "informatique" },
    { path: "/services?categorie=redaction", name: "rédaction" },
    { path: "/services?categorie=infographie", name: "infographie" },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: <GrFormPrevious />,
    nextArrow: <GrFormNext />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const handleLogout = async () => {
    try {
      await axiosFetch.post("/auth/logout");
      localStorage.removeItem('user');
      setUser(null);
      navigate("/");
    } catch ({ response }) {
      console.log(response.data);
    }
  };

  return (
    <nav className={showMenu || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Alain</span>
          </Link>
          <span className="dot">.</span>
        </div>

        <div className="links">
          {isLoading ? (
            <Loader size={35} />
          ) : (
            <>
              {!user && (
                <span>
                  <Link to="/connection" className="link">
                    Se connecter
                  </Link>
                </span>
              )}
              {!user && (
                <Link to="/inscription" className="link">
                <button
                  className={showMenu || pathname !== "/" ? "join-active" : ""}
                > 
                  S'inscrire
                </button>
                </Link>
              )}
              {user && (
                <div className="user" onClick={() => setShowPanel(!showPanel)}>
                  <img src={user.image || "/media/noavatar.png"} />
                  <span>{user?.username}</span>
                  {showPanel && (
                    <div className="options">
                      {user?.isSeller && (
                        <>
                          <Link className="link" to="/mes-services">
                            Services
                          </Link>
                          <Link className="link" to="/ajouter">
                            Ajouter
                          </Link>
                        </>
                      )}
                      <Link className="link" to="/commandes">
                        Commandes
                      </Link>
                      <Link className="link" to="/" onClick={handleLogout}>
                        Se déconnecter
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {(showMenu || pathname !== "/") && (
        <>
          <hr />
          <Slider className="menu" {...settings}>
            {categoryLinks.map(({ path, name }) => (
              <div key={name} className="menu-item">
                <Link className="link" to={path}>
                  {name}
                </Link>
              </div>
            ))}
          </Slider>
        </>
      )}
    </nav>
  );
};

export default Navbar;
