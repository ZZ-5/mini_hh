import React, { FC } from 'react';
import './index.scss';
import { Search } from '../../components/Search';
import { Link } from 'react-router-dom';
import { Filters } from '../../components/Filter';
import { Cards } from '../../components/Cards';

interface Props {}

export const MainPage: FC<Props> = () => {
  return (
    <div className="main-page">
      <div className="main-page__title">Main Page</div>
      <div className="main-page__links">
        <Link to={'/favorite'} className="main-page__link">
          Избранное
        </Link>
      </div>
      <Search />
      <div className="vacancies">
        <div className="vacancies__filters">
          <Filters />
        </div>
        <div className="vacancies__cards">
          <Cards />
        </div>
      </div>
    </div>
  );
};
