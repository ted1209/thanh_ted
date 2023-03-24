import _ from 'lodash';

const checkValidArticles = (articles: any[]) => {
  return _.unionBy(
    articles.filter((article) => article.title.trim().split(' ').length > 1),
    'title'
  );
};

export default checkValidArticles;
