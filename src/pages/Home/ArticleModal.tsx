import React, { useRef } from 'react';
import { Modal, Carousel, Spinner } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import * as Styles from './Home.style';
import formatDate from '../../utils/formatDate';
import { deleteCommentsRequest, postComment } from '../../actions';

interface IArticleModalProps {
  article: any;
  handleArticleHide: () => void;
  articleShow: boolean;
  handleFavoriteBtn: (article: any) => void;
}

const ArticleModal: React.FunctionComponent<IArticleModalProps> = ({
  article,
  handleArticleHide,
  articleShow,
  handleFavoriteBtn,
}) => {
  const dispatch = useDispatch();
  const colors = useSelector((state: any) => state.colors);
  const comments = useSelector((state: any) => state.comments);
  const user = useSelector((state: any) => state.user);
  const imageArr = article.body.split('/iMAge/').slice(1);
  const newCommentRef = useRef<any>(null);
  const commentLoading = useSelector((state: any) => state.commentLoading);

  const handlePostComment = (e: any) => {
    if (e.type === 'click' || e.key === 'Enter') {
      dispatch(
        postComment({
          slug: article.slug,
          comment: newCommentRef.current.value,
          token: user.userInfo.token,
        })
      );

      newCommentRef.current.value = '';
    }
  };

  const deleteComment = (id: any) => {
    dispatch(
      deleteCommentsRequest({
        slug: article.slug,
        id,
        token: user.userInfo.token,
      })
    );
  };

  return (
    <Modal
      show={articleShow}
      onHide={handleArticleHide}
      size={imageArr.length ? 'xl' : 'lg'}
      centered
      scrollable
    >
      <Modal.Body
        style={{
          backgroundColor: colors.cardColor,
          borderRadius: '5px',
          border: 'none',
          display: 'grid',
          gridTemplateColumns: `repeat(12, 1fr)`,
        }}
      >
        <Styles.ImagesContainer>
          {imageArr.length !== 0 && (
            <Carousel interval={10000}>
              {imageArr.map((image: any, index: any) => (
                <Carousel.Item key={index} style={{}}>
                  <Styles.ShowImage image={image} />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Styles.ImagesContainer>
        <Styles.ArticleContent images={imageArr}>
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
                <h4 style={{ cursor: 'pointer' }}>{article.author.username}</h4>
                <Styles.Time>{formatDate(article.updatedAt)}</Styles.Time>
              </div>
            </div>
            <Styles.HideModal onClick={handleArticleHide}>
              <i className="fas fa-times-circle fa-2x fa-fw" />
            </Styles.HideModal>
          </Styles.ArticleHeader>
          <Styles.ArticleBody>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {article.tagList && (
              <Styles.ArticleTags>
                {article.tagList.map((tag: any, index: any) => (
                  <Styles.ArticleTag key={index} colors={colors}>
                    {tag}
                  </Styles.ArticleTag>
                ))}
              </Styles.ArticleTags>
            )}
          </Styles.ArticleBody>
          <hr />
          <Styles.ModalInputCon>
            <Styles.FavoriteBtn onClick={() => handleFavoriteBtn(article)}>
              <i
                className="fas fa-heart fa-lg fa-fw"
                style={{
                  color: `${article.favorited ? '#d1000c' : colors.background}`,
                }}
              />
              <p style={{ margin: '5px', fontSize: '20px' }}>
                {article.favoritesCount}
              </p>
            </Styles.FavoriteBtn>
            <Styles.Input
              type="text"
              colors={colors}
              placeholder="Write your comment..."
              ref={newCommentRef}
              onKeyUp={handlePostComment}
            />
            <Styles.PostBtn colors={colors} onClick={handlePostComment}>
              Post
            </Styles.PostBtn>
          </Styles.ModalInputCon>
          <div style={{ overflow: 'auto', height: '500px' }}>
            {commentLoading ? (
              <div style={{ paddingLeft: '80px' }}>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
              </div>
            ) : (
              <div>
                {comments.map((comment: any, index: any) => (
                  <Styles.Comment key={index} colors={colors}>
                    <Styles.AvartarComment
                      src={
                        comment.author.image ||
                        'https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX679_.jpg'
                      }
                      alt={comment.author.username}
                    />
                    <div style={{ marginLeft: '5px' }}>
                      <Styles.CommentBody colors={colors}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <h5>{comment.author.username}</h5>
                          {user.userInfo.username ===
                            comment.author.username && (
                            <i
                              className="fas fa-times-circle fa-ml fa-fw"
                              style={{
                                marginLeft: '10px',
                                marginTop: '-4px',
                                cursor: 'pointer',
                              }}
                              onClick={() => deleteComment(comment.id)}
                            />
                          )}
                        </div>

                        <p>{comment.body}</p>
                      </Styles.CommentBody>
                      <Styles.Time>{formatDate(comment.updatedAt)}</Styles.Time>
                    </div>
                  </Styles.Comment>
                ))}
              </div>
            )}
          </div>
        </Styles.ArticleContent>
      </Modal.Body>
    </Modal>
  );
};

export default ArticleModal;
