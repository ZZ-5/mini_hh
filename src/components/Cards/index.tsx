import React from 'react';
import './index.scss';
import { Card } from '../Card';
import { VacancyCard } from '../../store/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Pagination } from '../Pagination';
import { getVacanciesCards } from '../../store/cardsSlice';
import { Spinner } from '../UI/Spinner';

export const Cards = () => {
  const {
    vacanciesCards: cards,
    isVacanciesLoading: isLoading,
    params
  } = useAppSelector(state => state.vacanciesCards);

  const dispatch = useAppDispatch();

  if (!cards) return null;

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  const onPageChange = (data: { selected: number }) => {
    const page = data.selected;

    dispatch(getVacanciesCards({ params: { ...params, page: page } }));
  };

  return (
    <div className="cards-wrapper">
      {cards?.items.map((i: VacancyCard) => {
        return <Card item={i} key={i.id} />;
      })}
      <Pagination pageCount={cards?.pages} onPageChange={onPageChange} forcePage={cards.page} />
    </div>
  );
};
