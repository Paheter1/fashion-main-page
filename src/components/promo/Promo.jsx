import './promo.css'
import promoImg from './../../img/images/header-img.jpg'

const Promo = () => {
    return (
        <section className="Promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">TEXT</div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Promo;