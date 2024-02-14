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

  const [scheduleFilter, setScheduleFilter] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFiltersDictionaries());
  }, []);

  if (!experience.length || !employment.length || !vacanciesCards?.items.length) return null;

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>, filterType: FilterTypes) => {
    let newFilter: any;

    switch (filterType) {
      case 'salary': {
        newFilter = { [filterType]: e.target.value };
        break;
      }
      case 'schedule': {
      }
      default:
        newFilter = { [filterType]: e.target.id };
    }

    dispatch(setParams(newFilter));

    dispatch(getVacanciesCards({ params: { ...params, ...newFilter } }));
  };

  return (
    <div className="filters">
      <div className="filters__title">Опыт рыботы</div>
      {experience.map(i => {
        return (
          <div>
            <input
              type="radio"
              name="workExperience"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'experience')}
            />
            <label htmlFor={i.id}>{i.name}</label>
          </div>
        );
      })}
      <div className="filters__title">Тип занятости</div>
      {employment.map(i => {
        return (
          <div>
            <input
              type="radio"
              name="workEmployment"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'employment')}
            />
            <label htmlFor={i.id}>{i.name}</label>
          </div>
        );
      })}
      <div className="filters__title">График рыботы</div>
      {schedule.map(i => {
        return (
          <div>
            <input
              type="checkbox"
              name="workSchedule"
              value={i.name}
              key={i.id}
              id={i.id}
              onChange={e => onFilterChange(e, 'schedule')}
            />
            <label htmlFor={i.id}>{i.name}</label>
          </div>
        );
      })}
      <div className="filters__title">Уровень дохода</div>
      <div>
        <input
          type="radio"
          name="workSalary"
          value={60000}
          id="id1"
          onChange={e => onFilterChange(e, 'salary')}
        />
        600000 Руб.<label htmlFor="id1"></label>
      </div>
      <div>
        <input
          type="radio"
          name="workSalary"
          value={120000}
          id="id2"
          onChange={e => onFilterChange(e, 'salary')}
        />
        1200000 Руб.<label htmlFor="id2"></label>
      </div>
      <div>
        <input
          type="radio"
          name="workSalary"
          value={180000}
          id="id3"
          onChange={e => onFilterChange(e, 'salary')}
        />
        1800000 Руб.<label htmlFor="id3"></label>
      </div>
      <div>
        <input
          type="radio"
          name="workSalary"
          value={240000}
          id="id4"
          onChange={e => onFilterChange(e, 'salary')}
        />
        2400000 Руб.<label htmlFor="id4"></label>
      </div>
      <div>
        <input
          type="radio"
          name="workSalary"
          value={300000}
          id="id5"
          onChange={e => onFilterChange(e, 'salary')}
        />
        300000 Руб.<label htmlFor="id5"></label>
      </div>
    </div>
  );
};
