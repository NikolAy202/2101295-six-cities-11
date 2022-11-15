import { Helmet } from 'react-helmet-async';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import {reviews} from '../../mocks/offers/reviews';
import Map from '../../components/map/map';
import { Offer } from '../../types/offers/offers';
import OffersList from '../../components/offer-list/offer-list';
import {useParams} from 'react-router-dom';
import {OfferOnMain} from '../../const/const';

type PropertyPagesProps = {
  offers: Offer[];
 }

function Property ({offers}: PropertyPagesProps): JSX.Element {
  const {id} = useParams();
  const unThisCards = offers.filter((card) => card.id !== Number(id));
  const thisCards = offers.find((card) => card.id === Number(id)) as Offer;

  return (
    <main className="page__main page__main--property">
      <Helmet>
        <title>Объявления</title>
      </Helmet>
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            <div className="property__image-wrapper">
              <img className="property__image" src="img/room.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
            </div>
            <div className="property__image-wrapper">
              <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
            </div>
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>Premium</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: '80%'}} />
                <span className="visually-hidden">{thisCards.rating}</span>
              </div>
              <span className="property__rating-value rating__value">{thisCards.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                  Apartment
              </li>
              <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max 4 adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">{thisCards.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                <li className="property__inside-item">
                    Wi-Fi
                </li>
                <li className="property__inside-item">
                    Washing machine
                </li>
                <li className="property__inside-item">
                    Towels
                </li>
                <li className="property__inside-item">
                    Heating
                </li>
                <li className="property__inside-item">
                    Coffee machine
                </li>
                <li className="property__inside-item">
                    Baby seat
                </li>
                <li className="property__inside-item">
                    Kitchen
                </li>
                <li className="property__inside-item">
                    Dishwasher
                </li>
                <li className="property__inside-item">
                    Cabel TV
                </li>
                <li className="property__inside-item">
                    Fridge
                </li>
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width={74} height={74} alt="Host avatar" />
                </div>
                <span className="property__user-name">
                    Angelina
                </span>
                <span className="property__user-status">
                    Pro
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews · <span className="reviews__amount">1</span></h2>
              <ReviewsList reviews={reviews} />
              <CommentForm />
            </section>
          </div>
        </div>
        <section className="property__map map" >
          <Map className={'property__map'} offers={offers} city={offers[0].city} selectedPoint={Number(id)}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList forOut={'near-places__list places__list'} differences={OfferOnMain} offers={unThisCards}/>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Property;
