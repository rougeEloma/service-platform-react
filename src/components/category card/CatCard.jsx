import { Link } from "react-router-dom"
import "./catCard.css"

const CatCard = ({item}) => {
  return (
    <Link to="/services?cat=design">
    <div className="cat-card">
        <div className="container">
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
        </div>
    </div>
    </Link>
  )
}

export default CatCard