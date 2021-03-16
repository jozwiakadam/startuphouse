import React from 'react';
import PropTypes from 'prop-types';
import cxBinder from 'classnames/bind';
import moment from 'moment';
import { AiOutlineFieldTime, AiOutlineDelete } from 'react-icons/ai';

import styles from './Article.module.scss';

const cx = cxBinder.bind(styles);

const Article = ({
  data,
  readLaterButton,
  deleteButton,
  deleteFunction,
  readLaterFunction,
}) => (
  <div className={cx('article')}>
    <div className={cx('article-title')}>{data.webTitle}</div>
    <div className={cx('article-section')}>{data.sectionName}</div>
    <div className={cx('article-date')}>{moment(data.webPublicationDate).format('YYYY-MM-DD | HH:mm:ss')}</div>
    <a
      href={data.webUrl}
      target="_blank"
      rel="noreferrer"
      className={cx('article-link')}
    >
      See article
    </a>
    {readLaterButton && <AiOutlineFieldTime onClick={() => readLaterFunction(data)} className={cx('article-read-later')} />}
    {deleteButton && <AiOutlineDelete onClick={() => deleteFunction(data)} className={cx('article-delete')} />}
  </div>
);

Article.propTypes = {
  data: PropTypes.object.isRequired,
  readLaterButton: PropTypes.bool,
  deleteButton: PropTypes.bool,
  deleteFunction: PropTypes.func,
  readLaterFunction: PropTypes.func,
};

Article.defaultProps = {
  readLaterButton: false,
  deleteButton: false,
  deleteFunction: () => {},
  readLaterFunction: () => {},
};

export default Article;
