import React, { FC } from 'react';
import './index.scss';
import { VacancyCard, VacancyCardMetro } from '../../store/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToFavorite, removeToFavorite } from '../../store/favoritesSlice';
import btn_favorite_empty from '../../assets/icon/notFavorite.png';
import btn_favorite from '../../assets/icon/favorite.png';

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
    <div className="card">
      <div className="card__title">{item.name}</div>
      {item.salary?.from && (
        <div className="card__salary">
          от {item.salary.from} {item.salary.currency}
        </div>
      )}
      {item.address?.city && (
        <div className="card__city">
          {item.address.city}, {showSubwayStation(item.address.metro_stations)}
        </div>
      )}
      <div className="card__experience">{item.experience.name}</div>
      <button className="card__btn-favorite" onClick={addToFavorites}>
        <img
          src={isInFavorites ? btn_favorite : btn_favorite_empty}
          alt="btn_favorite_empty"
          className="card__icon"
        />
      </button>
    </div>
  );
};
