import moment from 'moment';

const formatDate = (date: string) => {
  if (moment(new Date()).format('L') === moment(date).format('L')) {
    return moment(date).format('LT');
  }
  return moment(date).format('L');
};

export default formatDate;
