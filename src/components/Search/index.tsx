import React, { useState } from 'react';
import './index.scss';
import { useAppDispatch } from '../../hooks';
import { getVacanciesCards } from '../../store/cardsSlice';

export const Search = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const btnSearch = () => {
    // @ts-ignore
    dispatch(getVacanciesCards({ text: text }));
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Профессия, должность или компания"
        onChange={e => setText(e.target.value)}
      />
      <button className="search__button" onClick={btnSearch}>
        Найти
      </button>
    </div>
  );
};
