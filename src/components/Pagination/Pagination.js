import React from 'react';
import PropTypes from 'prop-types';
import ReactPagination from 'react-paginate';
import cxBinder from 'classnames/bind';

import styles from './Pagination.module.scss';

const cx = cxBinder.bind(styles);

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage,
}) => (
  <div className={cx('pagination-wrapper')}>
    <ReactPagination
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      initialPage={0}
      forcePage={forcePage}
      containerClassName={cx('pagination')}
      pageClassName={cx('pagination-page')}
      previousClassName={cx('pagination-previous')}
      previousLinkClassName={cx('pagination-previous-link')}
      nextClassName={cx('pagination-next')}
      nextLinkClassName={cx('pagination-next-link')}
      breakClassName={cx('pagination-break')}
      activeClassName={cx('pagination-page--active')}
      pageLinkClassName={cx('pagination-page-link')}
      disabledClassName={cx('pagination-disabled')}
      previousLabel="Previous"
      nextLabel="Next"
      onPageChange={(arg) => onPageChange(arg)}
    />
  </div>
);

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  forcePage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  onPageChange() {},
};

export default Pagination;
