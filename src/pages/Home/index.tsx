/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, memo } from 'react';
import 'toastr/build/toastr.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as Styles from './Home.style';
import {
  changeArticles,
  getMoreArticlesRequest,
  getTagsRequest,
  loadMore,
  getArticlesRequest,
  changeOffset,
  onLoad,
} from '../../actions';
import Navs from './Navs';
import Article from './Article';
import CreateArticleModal from '../../components/CreateArticleModal';
import ScrollTopButton from '../../components/ScrollTopButton';
import { limitOfArticles } from '../../constants';
import ArticlesLoading from '../../components/Loading';

const Home = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const colors = useSelector((state: any) => state.colors);
  const tags = useSelector((state: any) => state.tags);
  const articles = useSelector((state: any) => state.articles);
  const offset = useSelector((state: any) => state.offset);
  const loading = useSelector((state: any) => state.loading);
  const user = useSelector((state: any) => state.user);
  const hasLoadMore = useSelector((state: any) => state.hasLoadMore);
  const [targetTag, setTargetTag] = useState('');
  const [typeOfArticle, setTypeOfArticle] = useState('global');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoad());
    dispatch(
      getArticlesRequest({
        offset: 0,
        limit: limitOfArticles,
        token: localStorage.getItem('token'),
      })
    );
    dispatch(getTagsRequest());
  }, []);

  const handleScroll = () => {
    dispatch(
      getMoreArticlesRequest({
        offset,
        limit: limitOfArticles,
        tag: typeOfArticle === 'tags' && targetTag,
        token: user.userInfo?.token,
        favorited: typeOfArticle === 'favorited' && user.userInfo.username,
      })
    );
  };

  const tagClick = (tag: string) => {
    window.scrollTo(0, 0);
    setTypeOfArticle('tags');
    dispatch(loadMore(true));
    dispatch(onLoad());
    dispatch(changeArticles([]));
    dispatch(changeOffset(0));
    setTargetTag(tag);
    dispatch(
      getArticlesRequest({
        tag,
        limit: limitOfArticles,
        offset: 0,
      })
    );
  };

  const handleShow = () => {
    if (localStorage.getItem('token')) {
      setShowModal(!showModal);
    } else {
      history.push('/login');
    }
  };

  const handleTypeOfArticles = (type: string) => {
    if (type !== typeOfArticle) {
      setTypeOfArticle(type);
      dispatch(loadMore(true));
      dispatch(onLoad());
      dispatch(
        getArticlesRequest({
          offset: 0,
          limit: limitOfArticles,
          token: localStorage.getItem('token'),
          favorited: typeOfArticle === 'global' && user.userInfo.username,
        })
      );
    }
  };

  return (
    <Styles.Content id="content">
      <Navs colors={colors} tags={tags} tagClick={tagClick} />
      <Styles.Feed>
        <CreateArticleModal
          colors={colors}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Styles.HeaderFeed colors={colors}>
          <Styles.Button
            colors={colors}
            target={typeOfArticle === 'global'}
            onClick={() => handleTypeOfArticles('global')}
          >
            Global{' '}
          </Styles.Button>
          {user?.userInfo?.username && (
            <Styles.Button
              colors={colors}
              target={typeOfArticle === 'favorited'}
              onClick={() => handleTypeOfArticles('favorited')}
            >
              Favorited
            </Styles.Button>
          )}
          <Styles.Article colors={colors} className="firstArticle">
            <Styles.FakeInput colors={colors} onClick={handleShow}>
              Create new article...
            </Styles.FakeInput>
          </Styles.Article>
        </Styles.HeaderFeed>
        <div style={{ marginTop: '45px' }}>
          {loading ? (
            <ArticlesLoading />
          ) : articles.length === 0 ? (
            <Styles.Article colors={colors} style={{ textAlign: 'center' }}>
              <h1>you have not ever like any article yet.</h1>
            </Styles.Article>
          ) : (
            <InfiniteScroll
              dataLength={articles.length}
              next={handleScroll}
              hasMore={hasLoadMore}
              scrollThreshold={1}
              loader={<ArticlesLoading />}
            >
              {articles.map((article: any, index: any) => (
                <Article article={article} key={index} colors={colors} />
              ))}
            </InfiniteScroll>
          )}
        </div>
      </Styles.Feed>
      <ScrollTopButton scrollStepInPx={50} delayTime={2} />
    </Styles.Content>
  );
};

export default Home;
