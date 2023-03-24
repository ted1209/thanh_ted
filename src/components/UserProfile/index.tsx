import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouteMatch, NavLink } from 'react-router-dom';
import _ from 'lodash';
import { getUserRequest, getArticlesRequest } from '../../actions';
import { limitOfArticles } from '../../constants';
import Article from '../../pages/Home/Article';
import * as Styles from './UserProfile.style';

const UserProfile = () => {
  const [showPersonalArticles, setShowPersonalArticles] = useState(true);
  const { path, url } = useRouteMatch();
  const currentUser = useSelector((state: any) => state.user);
  const colors = useSelector((state: any) => state.colors);
  const articlesData = useSelector((state: any) => state.articles);
  const offset = useSelector((state: any) => state.offset);
  const dispatch = useDispatch();
  const limit = 5;
  const authorName = url.split('/')[2];

  const articlesArray: any = _.uniqBy(articlesData, 'slug');
  const favoritedArticles: any = articlesArray.filter((item: any) => item);
  const userArticles: any = articlesArray.filter((item: any) =>
    authorName === currentUser?.userInfo?.username
      ? item?.author?.username === authorName
      : item?.author?.username === authorName
  );

  const getUserArtcles = () => {
    // Get current user or other author articles
    dispatch(
      getArticlesRequest({
        type: 'add',
        offset,
        limit: limitOfArticles,
        author:
          authorName === currentUser?.userInfo?.username
            ? currentUser?.userInfo?.username
            : authorName,
        token: localStorage.getItem('token'),
      })
    );
  };

  const getFavoritedArticles = () => {
    // Get current user or other author favorited articles
    dispatch(
      getArticlesRequest({
        type: 'add',
        offset,
        limit: limitOfArticles,
        favorited:
          authorName === currentUser?.userInfo?.username
            ? currentUser?.userInfo?.username
            : authorName,
        token: localStorage.getItem('token'),
      })
    );
  };

  useEffect(() => {
    if (showPersonalArticles) {
      getUserArtcles();
    } else getFavoritedArticles();
  }, [showPersonalArticles]);

  const handleClickToShowArticles = () => {
    setShowPersonalArticles(!showPersonalArticles);
  };

  const handleClickToShowFavorite = () => {
    setShowPersonalArticles(!showPersonalArticles);
  };

  return (
    <Styles.ContainerAll colors={colors}>
      <Styles.UserBioField colors={colors}>
        <Container fluid className="mx-0">
          <Row>
            {authorName === currentUser?.userInfo?.username ? (
              <Col
                className="px-3 d-flex flex-column align-items-center justify-content-center"
                md={5}
              >
                <Styles.UserAvatar
                  src={
                    currentUser?.userInfo?.image
                      ? currentUser?.userInfo?.image
                      : 'https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png'
                  }
                  alt="user avatar"
                />
              </Col>
            ) : (
              <Col
                className="px-3 d-flex flex-column align-items-center justify-content-center"
                md={5}
              >
                <Styles.UserAvatar
                  src={
                    currentUser?.userInfo?.image
                      ? currentUser?.userInfo?.image
                      : 'https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png'
                  }
                  alt="user avatar"
                />
                <Styles.FollowButton colors={colors}>
                  <i
                    className="fas fa-user-plus"
                    style={{ paddingRight: '5px' }}
                  />
                  Follow : {authorName}
                </Styles.FollowButton>
              </Col>
            )}

            {authorName === currentUser?.userInfo?.username ? (
              <Col
                className="px-5 d-flex-block align-items-center justify-content-baseline"
                md={7}
              >
                <Styles.UserBioH1 colors={colors}>
                  {currentUser?.userInfo?.username}
                </Styles.UserBioH1>
                <Styles.UserBioText colors={colors}>
                  Email : {currentUser?.userInfo?.email}
                </Styles.UserBioText>
                <Styles.UserBioText colors={colors}>
                  Articles : {userArticles.length}{' '}
                  <i className="fas fa-newspaper" />
                </Styles.UserBioText>
                <Styles.UserBioText colors={colors}>
                  {currentUser?.userInfo?.bio
                    ? `Bio: ${currentUser?.userInfo?.bio}`
                    : `Bio: empty`}
                </Styles.UserBioText>
                <NavLink
                  to={localStorage.getItem('token') ? `/setting` : '/'}
                  style={{ textDecoration: 'none', paddingTop: '-50px' }}
                >
                  <Styles.FollowButton colors={colors}>
                    Change your settings
                    <i
                      className="fas fa-arrow-right"
                      style={{ paddingLeft: '5px' }}
                    />
                  </Styles.FollowButton>
                </NavLink>
              </Col>
            ) : (
              <Col
                className="px-5 d-flex-block align-items-center justify-content-baseline"
                md={7}
              >
                <Styles.UserBioH1 colors={colors}>
                  {authorName}
                </Styles.UserBioH1>
                <Styles.UserBioText colors={colors}>
                  Email : {currentUser?.userInfo?.email}
                </Styles.UserBioText>
                <Styles.UserBioText colors={colors}>
                  Articles : {userArticles.length}{' '}
                  <i className="fas fa-newspaper" />
                </Styles.UserBioText>
                <Styles.UserBioText colors={colors}>
                  {currentUser?.userInfo?.bio
                    ? `Bio: ${currentUser?.userInfo?.bio}`
                    : `Bio: empty`}
                </Styles.UserBioText>
              </Col>
            )}
          </Row>
        </Container>
      </Styles.UserBioField>
      <Styles.UserArticlesField colors={colors}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <Col
            className="px-0 d-flex align-items-center justify-content-baseline"
            md={4}
          >
            <Styles.Button
              colors={colors}
              onClick={handleClickToShowArticles}
              style={{
                backgroundColor: showPersonalArticles
                  ? colors.mainColor
                  : colors.cardColor,
              }}
            >
              {authorName === currentUser?.userInfo?.username
                ? 'My Articles'
                : `${authorName}'s Articles`}
            </Styles.Button>
            <Styles.Button
              colors={colors}
              onClick={handleClickToShowFavorite}
              style={{
                backgroundColor: showPersonalArticles
                  ? colors.cardColor
                  : colors.mainColor,
              }}
            >
              {authorName === currentUser?.userInfo?.username
                ? 'My Favorited Articles'
                : `${authorName}'s Favorited Articles`}
            </Styles.Button>
          </Col>

          <Col className="px-0" md={{ span: 3, offset: 5 }}>
            <Styles.SearchInput
              type="text"
              colors={colors}
              placeholder="Search ..."
            />
          </Col>
        </div>

        <>
          {showPersonalArticles
            ? userArticles.map((article: any, index: any) => (
                <Article article={article} key={index} colors={colors} />
              ))
            : favoritedArticles.map((article: any, index: any) => (
                <Article article={article} key={index} colors={colors} />
              ))}
        </>
      </Styles.UserArticlesField>
    </Styles.ContainerAll>
  );
};

export default UserProfile;
