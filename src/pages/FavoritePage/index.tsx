import React from 'react';
import './index.scss';
import { useAppSelector } from '../../hooks';
import { VacancyCard } from '../../store/types';
import { Card } from '../../components/Card';

export const Favorite = () => {
  const { favoritesCards, isFavoritesCards } = useAppSelector(state => state.favorites);

  console.log('state ', favoritesCards);

  return (
    <div className="favorite">
      <div className="favorite__title">Favorite</div>
      {favoritesCards.map((i: VacancyCard) => {
        return <Card item={i} key={i.id} />;
      })}
    </div>
  );
};
