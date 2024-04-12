import { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";
import searchPng from "../../../public/img/Search.svg"

function Featured() {
  const [input, setInput] = useState("");
  // const navigate = useNavigate();

  // const handleSubmit = () => {
  //   navigate(`/gigs?search=${input}`);
  // };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
          Trouvez les services <span>indépendants</span> parfaits pour vous
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src={searchPng} alt="" />
              <input
                type="text"
                placeholder='Essayez "jardinier"    '
                maxlength="20"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button>Rechercher</button>
          </div>
          <div className="popular">
            <span>Populaire:</span>
            <button>Ménage</button>
            <button>Commission</button>
            <button>Photograpie</button>
            <button>Informatique</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
