import * as types from '../actions/actionTypes';
import { lightModeColors, darkModeColors } from '../constants';

const colors = (
  state = JSON.parse(`${localStorage.getItem('colors')}`) || darkModeColors,
  action: any
) => {
  switch (action.type) {
    case types.CHANGE_MODE:
      localStorage.setItem(
        'colors',
        JSON.stringify(
          state.type === 'light-mode' ? darkModeColors : lightModeColors
        )
      );
      return state.type === 'light-mode' ? darkModeColors : lightModeColors;
    default:
      return state;
  }
};

export default colors;
