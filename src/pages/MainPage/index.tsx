import React, { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import './index.scss';
// import { getVacanciesCards } from '../../store/cardsSlice';
import { Card } from '../../components/Card';
import { Search } from '../../components/Search';
import { VacancyCard } from '../../store/types';

interface Props {}

export const MainPage: FC<Props> = () => {
  // const dispatch = useAppDispatch();
  const { vacanciesCards: cards, isVacanciesLoading: isLoading } = useAppSelector(
    state => state.vacanciesCards
  );

  // TODO: удалить useEffect, потому что нам нужно показывать вакансии только после поиска, а не сразу при рендере страницы
  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(getVacanciesCards());
  // }, []);

  if (isLoading) {
    return <div>ЗАГРУЗКА ...</div>;
  }
  console.log('cards ', cards);

  // if (!cards || !cards.length) {
  //   return <div>Нет вакансий по заданному запросу</div>;
  // }

  return (
    <div className="main-page">
      <h1 className="main-page__title">Main Page</h1>
      <Search />
      <div className="vacancy-cards">
        {cards.map((i: VacancyCard) => {
          return <Card item={i} key={i.id} />;
        })}
      </div>
    </div>
  );
};
