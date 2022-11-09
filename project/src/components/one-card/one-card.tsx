import {Offer, DateForCards} from '../../types/offers/offers';
import {Link} from 'react-router-dom';
import { HTMLAttributes } from 'react';

type FavoritesCardProps = {
  offer: Offer;
  differences: DateForCards;
} & HTMLAttributes<HTMLTitleElement>


export default function OneCard({ offer, differences, onMouseEnter, onMouseLeave }: FavoritesCardProps): JSX.Element {
  return (
    <article className={`place-card ${differences.forArticle}`} id={offer.id.toString()} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium ? <div className="place-card__mark"> <span>Premium</span></div> : ''}
      <div className={`place-card__image-wrapper ${differences.forWrap}`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image"
            src={offer.previewImage}
            width={differences.width}
            height={differences.hight}
            alt="img"
          />
        </Link>
      </div>
      <div className={`${differences.forInfo} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night         </span>
          </div>
          <button className= {offer.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">
              In bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(Math.round(offer.rating)) * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
