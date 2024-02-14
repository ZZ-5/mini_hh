import React, { useEffect } from 'react';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getVacancyPage } from '../../store/vacancy/vacancySlice';
import { useParams } from 'react-router';

export const CurrentVacancy = () => {
  const { vacancy } = useAppSelector(state => state.vacancy);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    dispatch(getVacancyPage(id));
  }, []);

  return (
    <div className="vacancy">
      <div className="vacancy__columns">
        <div className="column-vacancy">
          <div className="column-vacancy__card">
            <div className="column-vacancy__card-name">{vacancy?.name}</div>
            {vacancy?.salary?.from && (
              <div className="column-vacancy__card-salary">
                от {vacancy?.salary.from} до {vacancy?.salary.to} {vacancy?.salary.currency}
              </div>
            )}
            <p className="column-vacancy__card-experience">{vacancy?.experience.name}</p>
            <p className="column-vacancy__card-employment">{vacancy?.employment.name}</p>
            <button className="column-vacancy__card-button_favorite"></button>
          </div>
          {vacancy?.description && (
            <div
              className="column-vacancy__info"
              dangerouslySetInnerHTML={{ __html: vacancy?.description }}
            ></div>
          )}
        </div>
        <div className="column-employer">
          <div className="column-employer__logo">
            {vacancy?.employer.logo_urls && (
              <img
                src={vacancy?.employer.logo_urls.original || vacancy?.employer.logo_urls[240]}
                alt="logo"
                className="column-employer__img"
              />
            )}
          </div>
          <div className="column-employer__name">{vacancy?.employer.name}</div>
          {vacancy?.address && (
            <div className="column-employer__address">{vacancy?.address.raw}</div>
          )}
        </div>
      </div>
    </div>
  );
};
