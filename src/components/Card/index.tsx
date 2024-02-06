import React, { FC } from 'react';
import './index.scss';
import { VacancyCard, VacancyCardMetro } from '../../store/types';

interface Props {
  item: VacancyCard;
}

export const Card: FC<Props> = ({ item }) => {
  console.log('item ', item);

  const showSubwayStation = (items: VacancyCardMetro[] | null) => {
    if (!items || !items.length) {
      return;
    }

    return items.length === 1
      ? items[0].station_name
      : items[0].station_name + ` и еще ${items.length - 1}`;
  };

  return (
    <div className="card">
      <div className="card__title">{item.name}</div>
      {item.salary?.from && (
        <div className="card__salary">
          от {item.salary.from} {item.salary.currency}
        </div>
      )}
      {item.address?.city && (
        <div className="card__city">
          {item.address.city}, {showSubwayStation(item.address.metro_stations)}
        </div>
      )}
      <div className="card__experience">{item.experience.name}</div>
    </div>
  );
};
