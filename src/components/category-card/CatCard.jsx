import { Link } from "react-router-dom"
import "./cat-card.scss"

const CatCard = ({card}) => {
  return (
    <Link to="/">
    <div className="cat-card">
        <div className="container">
            <img src={card.img} alt="" />
            <span className="desc">{card.desc}</span>
            <span className="title">{card.title}</span>
        </div>
    </div>
    </Link>
  )
}

export default CatCard