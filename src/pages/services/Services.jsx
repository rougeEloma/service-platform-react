
import { useState } from "react"
import "./Services.scss"

import { services } from "../../datas/data"
import ServiceCard from "../../components/serviceCard/ServiceCard"

const Services = () => {
    const [sort, setSort] = useState("sales")
    const [open, setOpen] = useState(false)

    const reSort = (type) => {
        setSort(type)
        setOpen(false)
    }

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
                    <input type="number" placeholder="min" />
                    <input type="number" placeholder="max" />
                    <button>Appliquer</button>
                </div>
                <div className="right">
                    <span className="sortBy">Trier Par </span>
                    <span className="sortType">
                    {sort === "sales" ? "populaire" : "récent"}
                    </span>
                    <img src="/img/down.png" alt="" onClick={() => setOpen(!open)} />
                    {open && (
                    <div className="rightMenu">
                        {sort === "sales" ? (
                        <span onClick={() => reSort("createdAt")}>récent</span>
                        ) : (
                        <span onClick={() => reSort("sales")}>populaire</span>
                        )}
                        {/* <span onClick={() => reSort("popular")}>populaire</span> */}
                    </div>
                    )}
                </div>
            </div>
            <div className="cards">
                {services.map(service => (
                    <ServiceCard key={service.id} item={service} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services