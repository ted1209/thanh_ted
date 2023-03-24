import React, { useState, memo } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Styles from './Home.style';
import { IColors } from '../../interfaces';
import { UserPopover } from './Home.style';
import ArticleModal from './ArticleModal';
import { getCommentsRequest, onCmtLoad, updateArticles } from '../../actions';
import formatDate from '../../utils/formatDate';
import { API_URL } from '../../constants/api';

interface IArticleProps {
  colors: IColors;
  article: any;
}

const Article: React.FunctionComponent<IArticleProps> = ({
  colors,
  article,
}) => {
  const imageArr = article.body.split('/iMAge/').slice(1);
  const dispatch = useDispatch();
  const history = useHistory();
  const [articleShow, setArticleShow] = useState(false);
  const user = useSelector((state: any) => state.user);
  const handleArticleShow = () => {
    setArticleShow(true);
    dispatch(onCmtLoad());
    dispatch(getCommentsRequest({ slug: article.slug }));
  };

  const handleArticleHide = () => {
    setArticleShow(false);
  };

  const handleFavoriteBtn = (article: any) => {
    if (user?.userInfo?.token) {
      dispatch(
        updateArticles({
          ...article,
          favorited: !article.favorited,
          favoritesCount: article.favorited
            ? article.favoritesCount - 1
            : article.favoritesCount + 1,
        })
      );
      axios({
        method: article.favorited ? 'delete' : 'post',
        url: `${API_URL}/articles/${article.slug}/favorite`,
        headers: {
          Authorization: `Token ${user.userInfo.token}`,
        },
      }).then();
    } else {
      history.push('/login');
    }
  };

  return (
    <>
      <Styles.Article colors={colors}>
        {console.log('re-render')}
        <Styles.ArticleHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Styles.Avatar
              src={
                article.author.image ||
                'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg'
              }
              alt={article.author.username}
            />
            <div>
              <OverlayTrigger
                trigger={['hover', 'focus', 'click']}
                placement="left"
                overlay={
                  <Popover id="user-popover" bsPrefix="pt-1">
                    <UserPopover colors={colors}>
                      <h1>fsdfsd</h1>
                    </UserPopover>
                  </Popover>
                }
              >
                <h4 style={{ cursor: 'pointer' }}>{article.author.username}</h4>
              </OverlayTrigger>
              <Styles.Time>{formatDate(article.updatedAt)}</Styles.Time>
            </div>
          </div>
          <Styles.ArticleFavorite
            onClick={() => handleFavoriteBtn(article)}
            style={{
              color: `${article.favorited ? '#d1000c' : colors.background}`,
            }}
          >
            <i className="fas fa-heart fa-2x fa-fw" />
          </Styles.ArticleFavorite>
        </Styles.ArticleHeader>
        <Styles.ArticleBody onClick={handleArticleShow}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {article.tagList.length > 0 && (
            <Styles.ArticleTags>
              {article.tagList.map((tag: any, index: any) => (
                <Styles.ArticleTag key={index} colors={colors}>
                  {tag}
                </Styles.ArticleTag>
              ))}
            </Styles.ArticleTags>
          )}
          {imageArr.length > 0 && (
            <Styles.ArticleImages images={imageArr.length}>
              {imageArr.slice(0, 3).map((image: any, index: any) => (
                <Styles.ArticleImage
                  key={index}
                  className={`image${index + 1}`}
                  image={image}
                />
              ))}
            </Styles.ArticleImages>
          )}
        </Styles.ArticleBody>
      </Styles.Article>
      <ArticleModal
        articleShow={articleShow}
        handleArticleHide={handleArticleHide}
        article={article}
        handleFavoriteBtn={handleFavoriteBtn}
      />
    </>
  );
};

export default Article;
