import React from 'react';
import './index.scss';
import { useAppSelector } from '../../hooks';
import { VacancyCard } from '../../store/types';
import { Card } from '../../components/Card';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Favorite = () => {
  const { favoritesCards } = useAppSelector(state => state.favorites);

  return (
    <>
      <Header />
      <div className="favorite">
        {favoritesCards.map((i: VacancyCard) => {
          return <Card item={i} key={i.id} />;
        })}
      </div>
    </>
  );
};
