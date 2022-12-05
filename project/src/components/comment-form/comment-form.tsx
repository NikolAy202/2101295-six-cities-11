import React, { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendNewReviewAction } from '../../store/api-action';
import { ReviewData } from '../../types/reviews/reviews';


export default function CommentForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<{
    comment: string;
    rating: string;
  }>({
    comment: '',
    rating: '',
  });

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendNewReviewAction(reviewData));
  };

  const currentOffer = useAppSelector((state) => state.currentOffer);

  const handleFormSubmmit = (evt: FormEvent<HTMLButtonElement>) => {
    evt.preventDefault();

    if(currentOffer) {
      onSubmit({
        id: currentOffer.id,
        comment: formData.comment,
        rating: formData.rating,
      });
    }
    setFormData({...formData, comment: '', rating: ''});
  };


  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" onChange={fieldChangeHandle} name="rating" value="5" id="5-stars" type="radio" checked={Number(formData.rating) === 5}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={fieldChangeHandle} name="rating" value="4" id="4-stars" type="radio" checked={Number(formData.rating) === 4}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={fieldChangeHandle} name="rating" value="3" id="3-stars" type="radio" checked={Number(formData.rating) === 3}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={fieldChangeHandle} name="rating" value="2" id="2-stars" type="radio" checked={Number(formData.rating) === 2}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input className="form__rating-input visually-hidden" onChange={fieldChangeHandle} name="rating" value="1" id="1-star" type="radio" checked={Number(formData.rating) === 1}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" onChange={fieldChangeHandle} id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.comment} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" onClick={handleFormSubmmit}>Submit</button>
      </div>
    </form>
  );
}
