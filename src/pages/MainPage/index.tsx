import React, { FC } from 'react';
import './index.scss';
import { Search } from '../../components/Search';
import { Link } from 'react-router-dom';
import { Filters } from '../../components/Filter';
import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';

interface Props {}

export const MainPage: FC<Props> = () => {
  return (
    <>
      <Header />
      <div className="main-page">
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
    </>
  );
};
