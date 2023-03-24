import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import GlobalStyles from './index.style';
import Header from './components/HeaderNav';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Chat from './pages/Chat';
import UserProfile from './components/UserProfile';
import SettingForm from './components/Setting';

const App = () => {
  const colors = useSelector((state: any) => state.colors);
  const user = useSelector((state: any) => state.user);

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/setting">
            <SettingForm />
          </Route>
          <Route
            path="/chat"
            render={() =>
              user?.userInfo?.token || localStorage.getItem('token') ? (
                <Chat />
              ) : (
                <SignIn />
              )
            }
          />
          <Route path="/register">
            <SignUp />
          </Route>
          <Route exact path="/profile/:username">
            <UserProfile />
          </Route>
          <Route exact path="/setting">
            <SettingForm />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
