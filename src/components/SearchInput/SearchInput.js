import React from 'react';
import PropTypes from 'prop-types';
import cxBinder from 'classnames/bind';

import styles from './SearchInput.module.scss';

const cx = cxBinder.bind(styles);

const SearchInput = ({
  placeholder,
  onChange,
  ...props
}) => (
  <input
    className={cx('input')}
    placeholder={placeholder}
    onChange={onChange}
    {...props}
  />
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

export default SearchInput;
