import Featured from "../../components/featured/Featured";
import Slide from "../../components/slide/Slide";
import TrustedBy from "../../components/TrustedBy/TrustedBy";
import { cards, projects } from "../../datas/data";
import CatCard from "../../components/catCard/CatCard"
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
    return (
        <div className="home">
            <Featured/>
            <TrustedBy/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card => (
                <CatCard card={card} key={card.id} />
                ))}
            </Slide>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(card => (
                <ProjectCard card={card} key={card.id} />
                ))}
            </Slide>
            
        </div>
    )
}

export default Home;