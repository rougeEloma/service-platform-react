import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Ménage</span>
            <span>Jardin</span>
            <span>Jardin</span>
            <span>Immobilier</span>
            <span>Cuisine</span>
            <span>Musique & Audio</span>
            <span>Photograpie</span>
            <span>Littérature</span>
            <span>Informatique</span>
            <span>Electronique</span>
          </div>
          <div className="item">
            <h2>A propos</h2>
            <span>Presse et Actualités</span>
            <span>partenariats</span>
            <span>politique de confidentialité</span>
            <span>Conditions d'utilisation</span>
            <span>propriété intellectuelle</span>
            <span>investisseurs</span>
            <span>service commercial</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Support d'aide</span>
            <span>Confiance et sécurité</span>
            <span>Vendre sur LBN</span>
            <span>Commander sur LBN </span>
          </div>
          <div className="item">
            <h2>Communauté</h2>
            <span>Témoignages de réussite</span>
            <span>Centre communautaire</span>
            <span>Forum</span>
            <span>Événements</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliés</span>
            <span>Podcast</span>
            <span>Invite un ami</span>
            <span>Devenez prestataire</span>
            <span>Community Standards</span>
          </div>
          {/* <div className="item">
            <h2>More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Fiverr Guides</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Fiverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div> */}
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>LBN</h2>
            <span>© LBN RDC Ltd. 2024</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>Français</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
