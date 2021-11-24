import moment from 'moment';

// export default function useDate() {
//   const getFriendlyDate = (dateString) => moment(dateString).format('DD MMM YYYY');

//   return {
//     getFriendlyDate,
//   };
// }

export default function getFriendlyDate(dateString) {
  return moment(dateString).format('DD MMM YYYY');
}
