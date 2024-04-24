import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { axiosFetch, getCountryFlag } from '../../utils';
import { Link, useParams } from 'react-router-dom';
import { Loader, NextArrow, PrevArrow } from '../../components';
import './Service.scss';

import { CarouselProvider, Slider, Slide, ImageWithZoom, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MONTHS = ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sept', 'Oct', 'Nov', 'Dec'];

const Service = () => {
  const { _id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      axiosFetch.get(`/services/single/${_id}`)
        .then(({ data }) => {
          data.images.unshift(data.cover);
          return data;
        })
        .catch(({ response }) => {
          toast.error(response.data.message);
        })
  });

  const country = getCountryFlag(data?.userID.country);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className="gig">
      {
        isLoading
          ? <div className='loader'> <Loader /> </div>
          : error
            ? "Quelque chose s'est mal passé !"
            : <div className="container">
              <div className="left">
                <span className="breadcrumbs">Acceuil | Catégorie</span>
                <h1>{data?.title}</h1>
                <div className="user">
                  <img
                    className="pp"
                    src={data?.userID?.image || '/media/noavatar.png'}
                    alt=""
                  />
                  <span>{data?.userID.username}</span>
                  {!isNaN(data.totalStars / data.starNumber) && (
                    <div className="stars">
                      {
                        new Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/media/star.png" key={i} />
                          ))}
                      <span>{(data.totalStars / data.starNumber).toFixed(1)}</span>
                    </div>
                  )
                  }
                </div>
                
                <CarouselProvider
                  naturalSlideHeight={100}
                  naturalSlideWidth={125}
                  totalSlides={data?.images.length}
                  infinite
                  className='slider'
                >
                  <Slider >
                    {
                      data.images.map((img) => (
                        <Slide key={img}>
                          <Image key={img} src={img} alt='' />
                        </Slide>
                      ))
                    }
                  </Slider>

                    <ButtonBack>
                      <PrevArrow />
                    </ButtonBack>

                    <ButtonNext>
                      <NextArrow />
                    </ButtonNext>

                </CarouselProvider>

                <div className="right-mobile">
                  <div className="price">
                    <h3>{data?.shortTitle}</h3>
                    <h2>{data?.price.toLocaleString('en-IN', {
                      maximumFractionDigits: 0,
                      style: 'currency',
                      currency: 'INR',
                    })}</h2>
                  </div>
                  <p>
                    {data?.shortDesc}
                  </p>
                  <div className="details">
                    <div className="item">
                      <img src="/img/clock.png" alt="" />
                      <span>{data.deliveryTime} Temps de travail</span>
                    </div>
                    <div className="item">
                      <img src="/img/recycle.png" alt="" />
                      <span>{data.revisionNumber} vérification</span>
                    </div>
                  </div>
                  <div className="features">
                    {
                      data?.features.map((feature) => (
                        <div key={feature} className="item">
                          <img src="/img/greencheck.png" alt="" />
                          <span>{feature}</span>
                        </div>
                      ))
                    }
                  </div>
                  <Link to={`/paiement/${_id}`}>
                    <button>Continuer</button>
                  </Link>
                </div>
                <h2>À propos de ce service</h2>
                <p>
                  {
                    data.description
                  }
                </p>
                <div className="seller">
                  <h2>À propos de ce prestataire</h2>
                  <div className="user">
                    <img
                      src={data?.userID?.image || '/media/noavatar.png'}
                      alt=""
                    />
                    <div className="info">
                      <span>{data?.userID.username}</span>
                      <div className="stars">
                        <img src="/media/star.png" alt="" />
                        <img src="/media/star.png" alt="" />
                        <img src="/media/star.png" alt="" />
                        <img src="/media/star.png" alt="" />
                        <img src="/media/star.png" alt="" />
                        <span>5</span>
                      </div>
                      <button>Me contacter</button>
                    </div>
                  </div>
                  <div className="box">
                    <div className="items">
                      <div className="item">
                        <span className="title">De</span>
                        <span className="desc">{data?.userID.country}
                          <span className='flag'>
                          <img src={country.normal} alt="" />
                          </span>
                        </span>
                      </div>
                      <div className="item">
                        <span className="title">Membre depuis</span>
                        <span className="desc">{MONTHS[new Date(data?.userID.createdAt).getMonth()] + ' ' + new Date(data?.userID.createdAt).getFullYear()}</span>
                      </div>
                      <div className="item">
                        <span className="title">Temps de réponse Moyenne</span>
                        <span className="desc">24 heures</span>
                      </div>
                      <div className="item">
                        <span className="title">Langages</span>
                        <span className="desc">Francais, Lingala</span>
                      </div>
                    </div>
                    <hr />
                    <p>
                      {data.userID.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="price">
                  <h3>{data?.shortTitle}</h3>
                  <h2>{data?.price.toLocaleString('en-IN', {
                    maximumFractionDigits: 0,
                    style: 'currency',
                    currency: 'INR',
                  })}</h2>
                </div>
                <p>
                  {data?.shortDesc}
                </p>
                <div className="details">
                  <div className="item">
                    <img src="/img/clock.png" alt="" />
                    <span>{data.workingTime} Temps de travail</span>
                  </div>
                  <div className="item">
                    <img src="/img/recycle.png" alt="" />
                    <span>{data.renewingNumber} renouvellement</span>
                  </div>
                </div>
                <div className="features">
                  {
                    data?.features.map((feature) => (
                      <div key={feature} className="item">
                        <img src="/img/greencheck.png" alt="" />
                        <span>{feature}</span>
                      </div>
                    ))
                  }
                </div>
                <Link to={`/paiement/${_id}`}>
                  <button>Continuer</button>
                </Link>
              </div>
            </div>
      }
    </div>
  )
}

export default Service