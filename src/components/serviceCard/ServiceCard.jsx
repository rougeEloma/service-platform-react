import { Link } from "react-router-dom";
import "./ServiceCard.scss";

const GigCard = ({ item }) => {
  // const { isLoading, error, data } = useQuery({
  //   queryKey: [item.userId],
  //   queryFn: () =>
  //     newRequest.get(`/users/${item.userId}`).then((res) => {
  //       return res.data;
  //     }),
  // });
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <span>À PARTIR DE</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
