import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFiltersDictionaries } from '../../store/filtersDictionariesSlice';
import { getVacanciesCards, setParams } from '../../store/cardsSlice';

interface Props {}

type FilterTypes = 'experience' | 'employment' | 'salary' | 'schedule';

export const Filters: FC<Props> = () => {
  const state = useAppSelector(state => state);
  const {
    vacanciesCards: { vacanciesCards, params },
    filtersDictionaries: { experience, employment, schedule }
  } = state;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFiltersDictionaries());
  }, []);

  if (!experience.length || !employment.length || !vacanciesCards?.items.length) return null;

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>, filterType: FilterTypes) => {
    let newFilter = new URLSearchParams();

    switch (filterType) {
      case 'salary': {
        newFilter.set(filterType, e.target.value);
        break;
      }
      case 'schedule': {
        newFilter.append(filterType, e.target.id);
        break;
      }
      default:
        newFilter.set(filterType, e.target.id);
    }

    dispatch(setParams(newFilter));

    dispatch(getVacanciesCards({ params: params }));
  };

  return (
    <div className="filters">
      <div className="filters__title">Опыт рыботы</div>
      {experience.map(i => {
        return (
          <div className="filters__paragraph">
            <input
              type="radio"
              name="workExperience"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'experience')}
            />
            <label className="filters__label" htmlFor={i.id}>
              {i.name}
            </label>
          </div>
        );
      })}
      <div className="filters__title">Тип занятости</div>
      {employment.map(i => {
        return (
          <div className="filters__paragraph">
            <input
              type="radio"
              name="workEmployment"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'employment')}
            />
            <label className="filters__label" htmlFor={i.id}>
              {i.name}
            </label>
          </div>
        );
      })}
      <div className="filters__title">График рыботы</div>
      {schedule.map(i => {
        return (
          <div className="filters__paragraph">
            <input
              type="checkbox"
              name="workSchedule"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'schedule')}
            />
            <label className="filters__label" htmlFor={i.id}>
              {i.name}
            </label>
          </div>
        );
      })}
      <div className="filters__title">Уровень дохода</div>
      <div className="filters__paragraph">
        <input
          type="radio"
          name="workSalary"
          value={60000}
          id="id1"
          onChange={e => onFilterChange(e, 'salary')}
        />
        <label className="filters__label" htmlFor="id1">
          600000 Руб.
        </label>
      </div>
      <div className="filters__paragraph">
        <input
          type="radio"
          name="workSalary"
          value={120000}
          id="id2"
          onChange={e => onFilterChange(e, 'salary')}
        />
        <label className="filters__label" htmlFor="id2">
          1200000 Руб.
        </label>
      </div>
      <div className="filters__paragraph">
        <input
          type="radio"
          name="workSalary"
          value={180000}
          id="id3"
          onChange={e => onFilterChange(e, 'salary')}
        />
        <label htmlFor="id3"> 1800000 Руб.</label>
      </div>
      <div className="filters__paragraph">
        <input
          type="radio"
          name="workSalary"
          value={240000}
          id="id4"
          onChange={e => onFilterChange(e, 'salary')}
        />
        <label className="filters__label" htmlFor="id4">
          2400000 Руб.
        </label>
      </div>
      <div className="filters__paragraph">
        <input
          type="radio"
          name="workSalary"
          value={300000}
          id="id5"
          onChange={e => onFilterChange(e, 'salary')}
        />
        <label className="filters__label" htmlFor="id5">
          300000 Руб.
        </label>
      </div>
    </div>
  );
};
