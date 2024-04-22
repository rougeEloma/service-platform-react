import { useEffect } from 'react';
import { Slide, TrustedBy } from '../../components';
import { CategoryCard, ProjectCard } from '../../components';
import TrustedBy from '../../components/TrustedBy/TrustedBy';
import { cards, projects } from '../../data';
import { Link } from'react-router-dom';

import './Home.scss';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5}>
        {
          cards.map((card) => (
            <CategoryCard key={card.id} data={card} />
          ))
        }
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Tout un monde de talentueux prestataires à quelques cliques de vous.</h1>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Dévelloper votre business en indépendant.</h6>
            </div>
            <p>Ce projet a pour objectif de créer une plateforme de services de tout genre.</p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Le meilleur pour tous les budgets.</h6>
            </div>
            <p>Jardiniers, électriciens, designers web, etc. avec des prix et des conditions déterminés
directement par le prestataire.</p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Vous êtes toujours protégés.</h6>
            </div>
            <p>Toutes les informations et documents échangés dans le cadre de ce projet seront traités
avec la plus stricte confidentialité et ne seront accessibles qu'aux parties prenantes
impliquées dans le projet.</p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>support garantie</h6>
            </div>
            <p>Des questions? Notre équip est toujours disponible pour vous aider peu importe le problème.</p>
          </div>
          <div className="item">
            <img className="rightImg" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>

      {/* Companies Business Component */}
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h2>Pour votre business</h2>
            <h1>Une solution métier pensée pour les <span>équipes</span></h1>
            <p>Passez à une expérience organisée remplie d'outils et d'avantages, dédiée aux entreprises.</p>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Connectez-vous à des prestataires possédant une expérience avérée dans leurs domaine</h6>
            </div>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Soyez mis en relation avec le talent idéal par un responsable du service réussite-client</h6>
            </div>
            <div className="title">
              <img src="./media/check.png" alt="check" />
              <h6>Gérez le travail d'équipe et augmentez la productivité avec un espace de travail de grand capacité</h6>
            </div>
            <Link to="/connection" className="link">
            <button>Explorer</button>
            </Link>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4}>
        {
          projects.map((card) => (
            <ProjectCard key={card.id} data={card} />
          ))
        }
      </Slide>
    </div>
  )
}

export default Home