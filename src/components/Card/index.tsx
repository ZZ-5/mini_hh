import React, { FC } from 'react';
import './index.scss';
import { VacancyCard, VacancyCardMetro } from '../../store/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFavorite, removeToFavorite } from '../../store/favoritesSlice';
import btn_favorite_empty from '../../assets/icon/notFavorite.png';
import btn_favorite from '../../assets/icon/favorite.png';
import icon_verification from '../../assets/icon/verified.png';
import icon_experience from '../../assets/icon/suitcase.png';
import { Link } from 'react-router-dom';

interface Props {
  item: VacancyCard;
}

export const Card: FC<Props> = ({ item }) => {
  const showSubwayStation = (items: VacancyCardMetro[] | null) => {
    if (!items || !items.length) {
      return;
    }

    return items.length === 1
      ? items[0].station_name
      : items[0].station_name + ` и еще ${items.length - 1}`;
  };

  const { favoritesCards } = useAppSelector(state => state.favorites);

  const dispatch = useAppDispatch();

  const isInFavorites = favoritesCards.includes(item);

  const addToFavorites = () => {
    if (isInFavorites) {
      dispatch(removeToFavorite(item));
    } else dispatch(addToFavorite(item));
  };

  return (
    <Link to={`/vacancy/${item.id}`}>
      <div className="card">
        <div className="card__info">
          <div className="card__header">
            <div className="card__header-left">
              <div className="card__title">{item.name}</div>
              {item.salary?.from && (
                <div className="card__salary">
                  от {item.salary.from} {item.salary.currency}
                </div>
              )}
            </div>
            {item.employer.logo_urls && (
              <img className="card__logo" src={item.employer.logo_urls[240]} />
            )}
          </div>
          <div className="card__body">
            <div className="card__company">
              <div className="card__company-name">{item.employer.name}</div>
              {item.employer.accredited_it_employer && (
                <img className="card__company-verified" src={icon_verification} />
              )}
            </div>
            {item.address?.city && (
              <div className="card__city">
                {item.address.city} {showSubwayStation(item.address.metro_stations)}
              </div>
            )}
          </div>
          <div className="card__footer">
            <div className="card__experience">
              <img className="card__experience-icon" src={icon_experience} />
              <div className="card__experience-text">{item.experience.name}</div>
            </div>
            <button className="card__btn-favorite" onClick={addToFavorites}>
              <img
                src={isInFavorites ? btn_favorite : btn_favorite_empty}
                alt="btn_favorite"
                className="card__icon"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
