import React, { useEffect, useState } from 'react';
import cxBinder from 'classnames/bind';

import Article from 'news/components/Article/Article';
import Selector from 'components/Selector/Selector';
import SearchInput from 'components/SearchInput/SearchInput';
import Pagination from 'components/Pagination/Pagination';

import { useNews } from 'news/model/news.hooks';
import { debounce } from 'news/model/news.helpers';
import { parseReadLaterArticlesToArray, setArticlesInStorage } from 'utils/helpers';

import { categoryOptions } from 'constants/categoryOptions';

import styles from './News.module.scss';

const cx = cxBinder.bind(styles);

const News = () => {
  const [forcePage, setForcePage] = useState();

  const {
    news,
    paginationData,
    selectedCategory,
    selectedPhrase,
    getNews,
    fetchCategory,
    fetchPhrase,
    fetchPage,
  } = useNews();

  useEffect(() => {
    getNews();
  }, []);

  const onPhraseChange = debounce((e) => {
    fetchPhrase(selectedCategory, e.target.value, 0);
    setForcePage(0);
  }, 550);

  const onCategorySelect = (option) => {
    fetchCategory(option, selectedPhrase, 0);
    setForcePage(0);
  };

  const onPageChange = ({ selected }) => {
    fetchPage(selectedCategory, selectedPhrase, selected + 1);
    setForcePage(selected);
  };

  const readLater = (data) => {
    const articles = parseReadLaterArticlesToArray();
    if (articles.filter((item) => item.id === data.id).length === 0) {
      articles.push(data);
    }
    setArticlesInStorage(articles);
  };

  return (
    <div className={cx('news-wrapper')}>
      <div className={cx('news-inputs')}>
        <SearchInput placeholder="Search..." onChange={onPhraseChange} />
        <Selector options={categoryOptions} onSelect={onCategorySelect} />
      </div>
      <div className={cx('news')}>
        {news?.map((item) => (
          <Article
            data={item}
            readLaterButton
            readLaterFunction={readLater}
          />
        ))}
      </div>
      {news?.length > 0 && (
        <Pagination
          pageCount={paginationData?.pages}
          onPageChange={onPageChange}
          forcePage={forcePage}
        />
      )}
    </div>
  );
};

export default News;
