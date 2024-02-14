import React from 'react';
import './index.scss';
import { ClockLoader } from 'react-spinners';

export const Spinner = () => {
  return (
    <div className="spinner">
      <ClockLoader color="gray" loading={true} size={100} speedMultiplier={0.6} />
    </div>
  );
};
