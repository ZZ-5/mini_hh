import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import './index.scss';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
import { VacancyCard } from '../../store/types';
import { Link } from 'react-router-dom';

interface Props {}

export const MainPage: FC<Props> = () => {
  const { vacanciesCards: cards, isVacanciesLoading: isLoading } = useAppSelector(
    state => state.vacanciesCards
  );

  if (isLoading) {
    return <div>ЗАГРУЗКА ...</div>;
  }

  return (
    <div className="main-page">
      <h1 className="main-page__title">Main Page</h1>
      <Link to={'/favorite'}>Перейти</Link>
      <Search />
      <div className="vacancy-cards">
        {cards.map((i: VacancyCard) => {
          return <Card item={i} key={i.id} />;
        })}
      </div>
    </div>
  );
};
