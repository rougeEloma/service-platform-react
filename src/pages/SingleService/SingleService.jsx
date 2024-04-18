import { Slider } from "infinite-react-carousel"
import "./SingleService.scss"

const SingleService = () => {
  return (
    <div className='SingleService'>
        <div className='container'>
            <div className="left">
                <span className="breadcrumbs"></span>
                <h1>Pour une maison propre et saine</h1>

                <div className="user">
                    <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <span>John Doe</span>
                    <div className="stars">
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <img src="/img/star.png" alt="" />
                        <span>4</span>
                    </div>
                </div>
                <Slider slideToShow={1} arrowScromm={1}>
                    <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <img src="https://images.pexels.com/photos/8100784/pexels-photo-8100784.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                </Slider>
                <h2>Description du service</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nam fugit odio assumenda sapiente aut fugiat quos recusandae aliquid, expedita doloribus inventore voluptates voluptatibus sit dolore vitae architecto officiis esse.
                </p>  
                <div className="seller">
                    <h2>Description du prestataire</h2>
                    <div className="user">
                        <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                        <div className="info">
                            <span>John Doe</span>
                            <button>Me contacter</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="items">
                            <div className="item">
                                <span className="title">Nationalité</span>
                                <span className="desc">RDC</span>
                            </div>
                            <div className="item">
                                <span className="title">Depuis</span>
                                <span className="desc"> 2024</span>
                            </div>
                            <div className="item">
                                <span className="title">Attente de réponse</span>
                                <span className="desc">6H</span>
                            </div>
                            <div className="item">
                                <span className="title">Dernier service</span>
                                <span className="desc">4 jours</span>
                            </div>
                            <div className="item">
                                <span className="title">Langues</span>
                                <span className="desc">Lingala</span>
                                <span className="desc">Francais</span>
                            </div>
                        </div>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti voluptatem aliquid est voluptate facilis neque doloremque odit atque dolores! Inventore accusamus quidem consequuntur, perspiciatis nam ad id possimus eius exercitationem.
                        </p>
                    </div>
                </div>
                <div className="reviews">
                    <h2>Reviews</h2>
                    <div className="item">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <div className="info">
                                <span>Janne Danne</span>
                                <div className="country">
                                    {/* <img src="/img/flag.png" alt="" /> */}
                                    <span>France</span>
                                </div>
                            </div>
                        </div>
                        <div className="stars">
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <img src="/img/star.png" alt="" />
                            <span>4</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi beatae dolorem neque quas dicta id ullam nam harum iste voluptatem, incidunt a. Omnis tenetur dolore a ut laudantium culpa voluptates.
                        </p>
                        <div className="helpful">
                            <span>Intéréssant ?</span>
                            <img src="/img/like.png" alt="" />
                            <span>Oui</span>
                            <img src="/img/dislike.png" alt="" />
                            <span>Non</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default SingleService