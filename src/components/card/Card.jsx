import style from './Card.module.css';

import arrowImg from '../../img/icons/arrow.svg'

const Card = (props) => {
    return (
        <div className={style.card}>

            <a href="#!" className={style.card__link}></a>

            <img className={style.card__img} src={props.img} alt="" />

            <div className={style.card__body}>
                <div className={style.card__text}>
                    <div className={style.card__title}>{props.title}</div>
                    <div className={style.card__muted}>Explore Now!</div>
                </div>

                <div className={style.card__icon}>
                    <img src={arrowImg} alt="" />
                </div>
            </div>

        </div>
    );
}
 
export default Card;