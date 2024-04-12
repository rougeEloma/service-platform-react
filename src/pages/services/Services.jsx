import "./Services.scss"

const Services = () => {
  return (
    <div className="services">
        <div className="container">
        <span className="breadcrumbs">LBN | categorie |</span>
        <h1>Ménage</h1>
        <p>
            Explorez les limites de l'art et de la technologie avec les artistes IA de Liverr
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Appliquer</button>
          </div>
          <div className="right">
            <span className="sortBy">Trier Par</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Le plus récent</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Le plus vendu</span>
                )}
                <span onClick={() => reSort("sales")}>Le plus populaire</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
        </div>
    </div>
  )
}

export default Services