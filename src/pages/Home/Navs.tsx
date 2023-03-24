import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { IColors } from '../../interfaces';
import * as Styles from './Home.style';
import { getTagsRequest } from '../../actions';

interface INavsProps {
  colors: IColors;
  tags: string[];
  tagClick: (tag: string) => void;
}

const Navs: React.FunctionComponent<INavsProps> = ({ tagClick }) => {
  const user = useSelector((state: any) => state.user);
  const colors = useSelector((state: any) => state.colors);
  const tags = useSelector((state: any) => state.tags);
  return (
    <Styles.Nav colors={colors}>
      {console.log('nav-re-render')}
      <Styles.NavItem colors={colors} onClick={() => window.scrollTo(0, 0)}>
        <i className="fas fa-h-square fa-lg fa-fw" />
        <h4>Home</h4>
      </Styles.NavItem>
      <hr />
      <NavLink
        to={
          localStorage.getItem('token')
            ? `/profile/${user?.userInfo?.username}`
            : '/login'
        }
        style={{ textDecoration: 'none', paddingTop: '-50px' }}
      >
        <Styles.NavItem colors={colors}>
          <i className="fas fa-user fa-lg fa-fw" />
          <h4>Profile</h4>
        </Styles.NavItem>
      </NavLink>

      <hr />

      <NavLink
        to={localStorage.getItem('token') ? '/setting' : '/login'}
        style={{ textDecoration: 'none', paddingTop: '-50px' }}
      >
        <Styles.NavItem colors={colors}>
          <i className="fas fa-cog fa-lg fa-fw" />
          <h4>Setting</h4>
        </Styles.NavItem>
      </NavLink>

      <hr />

      <NavLink
        to={localStorage.getItem('token') ? '/chat' : '/login'}
        style={{ textDecoration: 'none', paddingTop: '-50px' }}
      >
        <Styles.NavItem colors={colors}>
          <i className="fas fa-users fa-lg fa-fw" />
          <h4>&nbsp;Chatroom</h4>
        </Styles.NavItem>
      </NavLink>

      <hr />

      <Styles.NavItem colors={colors}>
        <i className="fas fa-tags fa-lg fa-fw" />
        <h4>&nbsp;Tags</h4>
      </Styles.NavItem>

      {_.uniq(tags.map((tag: string) => tag.replaceAll('\u200c', '')))
        .slice(1)
        .map((tag: any, index: any) => (
          <Styles.Tag
            key={index}
            style={{ cursor: 'pointer' }}
            onClick={() => tagClick(tag)}
          >
            #{tag}
          </Styles.Tag>
        ))}
    </Styles.Nav>
  );
};

const checkRerender = (prevProps: any, nextProps: any) => {
  return (
    prevProps.colors.type === nextProps.colors.type &&
    prevProps.tags[0] === nextProps.tags[0]
  );
};

export default memo(Navs, checkRerender);
