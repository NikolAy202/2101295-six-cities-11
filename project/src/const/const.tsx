import {Differences} from '../types/offers/offers';

export enum AppRoute {
Main = '/',
Login = '/login',
Favorites = '/favorites',
Room = '/offer'
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const OfferOnFavorites: Differences = {
  class: {
    forArticle: 'favorites__card',
    forInfo: 'favorites__card-info',
    forWrap: 'favorites__image-wrapper',
  },
  size: {
    width: '150',
    hight: '110',
  },
};

export const OfferOnMain: Differences = {
  class: {
    forArticle: 'cities__card',
    forInfo: '',
    forWrap: 'cities__image-wrapper',
  },
  size: {
    width: '260',
    hight: '200',
  },
};
