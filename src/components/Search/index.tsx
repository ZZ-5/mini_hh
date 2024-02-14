import React, { useState } from 'react';
import './index.scss';
import { useAppDispatch } from '../../hooks';
import { getVacanciesCards, setParams } from '../../store/cardsSlice';

export const Search = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const btnSearch = () => {
    const params = {
      text: text
    };

    dispatch(setParams(params));
    dispatch(getVacanciesCards({ params: params }));
  };

  const onInputChange = (e: any) => {
    setText(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    btnSearch();
  };

  return (
    <div className="search">
      <form action="" onSubmit={onSubmit} className="search__form">
        <input
          type="text"
          className="search__input"
          placeholder="Профессия, должность или компания"
          onChange={onInputChange}
        />
        <button className="search__button" onClick={btnSearch}>
          Найти
        </button>
      </form>
    </div>
  );
};
