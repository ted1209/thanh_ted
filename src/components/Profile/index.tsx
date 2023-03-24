/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { useSelector } from 'react-redux';
import { IColors } from '../../interfaces';
import * as Styles from './Profile.style';

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  // const colors = useSelector((state: any) => state.colors);
  return (
    <Styles.Content>
      <h1>Profile</h1>
    </Styles.Content>
  );
};

export default Profile;
