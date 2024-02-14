import React from 'react';
import './index.scss';
import { useAppSelector } from '../../hooks';
import { VacancyCard } from '../../store/types';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';

export const Favorite = () => {
  const { favoritesCards } = useAppSelector(state => state.favorites);

  return (
    <div className="favorite">
      <div className="favorite__title">Favorite</div>
      <div className="favorite__links">
        <Link to={'/'} className="favorite__link">
          Главная
        </Link>
      </div>
      {favoritesCards.map((i: VacancyCard) => {
        return <Card item={i} key={i.id} />;
      })}
    </div>
  );
};
