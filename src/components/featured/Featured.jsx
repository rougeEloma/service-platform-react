import "./featured.css"
import searchIcon from "../../../public/img/Search.svg"
import bigImage from "../../../public/img/bigimage.png"

const Featured = () => {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Trouver les bons services freelances, immédiatement!</h1>
                    <div className="searchbar">
                        <div className="search-input">
                            <img src={searchIcon} alt="" />
                            <input type="text" 
                            placeholder="Quel service recherchez-vous ?" 
                            maxLength={70}
                            minLength={1}/>
                        </div>
                        <button><img src={searchIcon} alt="" /></button>
                    </div>
                    <div className="populaire">
                        <span>Populaire : </span>
                        <button>Jardinier</button>
                        <button>Peintre</button>
                        <button>Designer</button>
                        <button>Garagiste</button>
                    </div>
                </div>
                <div className="right">
                    <img src={bigImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured;