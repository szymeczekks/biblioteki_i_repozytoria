import hero from '../../images/hero.jpg';
import './Footer.css';
function Footer() {

  return (
    <div className="footer">
        <div className='filter_bg'></div>
        <img className='hero_img' alt="" src={hero} />
    </div>
  );
}

export default Footer;
