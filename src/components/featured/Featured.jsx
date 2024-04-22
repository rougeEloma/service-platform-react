import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Featured.scss';

const Featured = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if(search) {
      navigate(`/services?recherche=${search}`);
    }
  }

  return (
    <div className='featured'>
      <div className="container">

        <div className="left">
          <h1>Trouvez, chez nos préstataires les <span>services</span> parfaits pour vous</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input type="search" placeholder='Essayez "jardinier"' onChange={(({ target: { value } }) => setSearch(value))} />
            </div>
            <button onClick={handleSearch}>Rechercher</button>
          </div>
          <div className="popular">
            <span>Populaire : </span>
            <button>jardin</button>
            <button>commission</button>
            <button>néttoyage</button>
            <button>informatique</button>
          </div>
        </div>

        <div className="right">
          {/* <img src="./media/hero.png" alt="hero" /> */}
        </div>
        
      </div>
    </div>
  )
}

export default Featured