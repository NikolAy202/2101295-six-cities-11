import { useState } from 'react';
import Map from '../../components/map/map';
import OffersList from '../../components/offer-list/offer-list';
import SortForm from '../../components/sorting-places/sorting-places';
import { OfferOnMain } from '../../const/const';
import CitiesList from '../../components/city-list/city-list';
import { useAppSelector } from '../../hooks/index';
import { Offer } from '../../types/offers/offers';
import Header from '../../components/header/header';


function MainPages(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const sortType = useAppSelector((state) => state.typeSort);

  const getSortedOffers = function (offers: Offer[], type: number) {
    switch (type) {
      case 2: return offers.sort((a, b) => a.price - b.price);
      case 3: return offers.sort((a, b) => b.price - a.price);
      case 4: return offers.sort((a, b) => a.rating - b.rating);
      default: return offers;
    }
  };

  const offersBeforeSort = (useAppSelector((state) => state.offers)).filter((offer) => offer.city.name === city.name);
  const offersAfterSort = getSortedOffers(offersBeforeSort, sortType);


  const [currentOffer, setActiveOffer] = useState<number | null>(null);
  const handleOfferMouseEnter = (offerId: number | null) => {
    setActiveOffer(offerId);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersAfterSort.length} places to stay in {city.name}</b>
              <SortForm />
              <div className="cities__places-list places__list tabs__content">
                <OffersList
                  offers={offersAfterSort}
                  wrapperClassName={'cities__places-list places__list tabs__content'}
                  classList={OfferOnMain}
                  onOfferMouseEnter={handleOfferMouseEnter}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                className={'cities__map'}
                city={city}
                selectedPoint={currentOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPages;

