import React, { FC } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import './index.scss';

interface Props extends ReactPaginateProps {
  pageCount: number;
  onPageChange: (e: any) => void;
}

export const Pagination: FC<Props> = props => {
  const { pageCount, onPageChange } = props;

  return (
    <ReactPaginate
      {...props}
      className="pagination"
      pageCount={pageCount}
      nextLabel=">"
      previousLabel="<"
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
    />
  );
};
