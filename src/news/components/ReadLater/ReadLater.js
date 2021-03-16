import React, { useState } from 'react';
import cxBinder from 'classnames/bind';

import Article from 'news/components/Article/Article';

import { parseReadLaterArticlesToArray, setArticlesInStorage } from 'utils/helpers';

import styles from './ReadLater.module.scss';

const cx = cxBinder.bind(styles);

const ReadLater = () => {
  const [articles, setArticles] = useState(parseReadLaterArticlesToArray());

  const deleteFromReadLater = (data) => {
    const filteredArticles = articles.filter((item) => item.id !== data.id);
    setArticles(filteredArticles);
    setArticlesInStorage(filteredArticles);
  };

  return (
    <div className={cx('read-later-wrapper')}>
      <div className={cx('read-later')}>
        {articles.length > 0
          ? articles.map((item) =>
            <Article data={item} deleteFunction={deleteFromReadLater} deleteButton />)
          : <h1 className={cx('read-later-empty')}>Oops!...No articles to show</h1>}
      </div>
    </div>
  );
};

export default ReadLater;
