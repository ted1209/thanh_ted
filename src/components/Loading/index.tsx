import * as React from 'react';
import { useSelector } from 'react-redux';
import * as Styles from './Loading.style';

const ArticlesLoading = () => {
  const colors = useSelector((state: any) => state.colors);

  return (
    <Styles.Load>
      <Styles.LoadCont colors={colors} style={{ textAlign: 'center' }}>
        <h3>
          We're just filtering articles to hide trash articles in your feed.
        </h3>
        Please wait a minute...
      </Styles.LoadCont>
      <Styles.LoadCont colors={colors}>
        <Styles.LoadHeader>
          <Styles.LoadUser>
            <Styles.LoadAvatar colors={colors} />
            <Styles.LoadingName colors={colors} />
          </Styles.LoadUser>
          <Styles.LoadAvatar colors={colors} />
        </Styles.LoadHeader>
        <Styles.LoadingContent1 colors={colors} />
        <Styles.LoadingContent2 colors={colors} />
      </Styles.LoadCont>
      <Styles.LoadCont colors={colors}>
        <Styles.LoadHeader>
          <Styles.LoadUser>
            <Styles.LoadAvatar colors={colors} />
            <Styles.LoadingName colors={colors} />
          </Styles.LoadUser>
          <Styles.LoadAvatar colors={colors} />
        </Styles.LoadHeader>
        <Styles.LoadingContent1 colors={colors} />
        <Styles.LoadingContent2 colors={colors} />
      </Styles.LoadCont>
    </Styles.Load>
  );
};

export default ArticlesLoading;
