import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import toastr from 'toastr';
import {
  clearUser,
  getArticlesRequest,
  getUserRequest,
  onLoad,
  signOut,
  changeMode,
} from '../../actions';
import {
  darkModeColors,
  lightModeColors,
  limitOfArticles,
} from '../../constants';

import {
  Logo,
  Search,
  Header,
  SignInButton,
  SignUpButton,
  Image,
  ChangeBGButton,
} from './HeaderNav.style';

const HeaderNav = () => {
  const history = useHistory();
  const user = useSelector((state: any) => state.user);
  const colors = useSelector((state: any) => state.colors);
  const dispatch = useDispatch();
  const searchRef = useRef<any>(null);
  React.useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  const changeModeColors = () => {
    localStorage.setItem(
      'colors',
      colors.type === 'light-mode'
        ? JSON.stringify(darkModeColors)
        : JSON.stringify(lightModeColors)
    );
    dispatch(changeMode());
  };

  const handleSignOut = () => {
    localStorage.clear();
    dispatch(signOut());
    dispatch(clearUser());
    toastr.success('See you soon!');
    history.push('/');
  };

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(onLoad());
      dispatch(
        getArticlesRequest({
          offset: 0,
          limit: limitOfArticles,
          token: localStorage.getItem('token'),
          author: searchRef.current.value,
        })
      );
      searchRef.current.value = '';
    }
  };

  return (
    <Header colors={colors}>
      <div style={{ display: 'flex' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo colors={colors}>Lullaby.</Logo>
        </Link>
        <Search
          type="text"
          colors={colors}
          placeholder="Enter any name..."
          ref={searchRef}
          onKeyUp={handleSearch}
        />
      </div>

      <div style={{ display: 'flex' }}>
        {user?.userInfo?.token && localStorage.getItem('token') ? (
          <Image
            src={
              user?.userInfo?.image ||
              'https://www.kindpng.com/picc/m/78-785917_user-login-function-name-avatar-user-icon-hd.png'
            }
            className="dropdown-toggle"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={handleSignOut}
          />
        ) : (
          <>
            <Link to="/login">
              <SignInButton colors={colors}>Sign in</SignInButton>
            </Link>
            <Link to="/register">
              <SignUpButton colors={colors}>Sign up</SignUpButton>
            </Link>
          </>
        )}

        <ChangeBGButton onClick={changeModeColors} colors={colors}>
          {colors.type === 'light-mode' ? (
            <i className="fas fa-moon fa-2x" />
          ) : (
            <i className="fas fa-sun fa-2x" />
          )}
        </ChangeBGButton>
      </div>
    </Header>
  );
};

export default HeaderNav;
