import moment from 'moment';

// export default function useDate() {
//   const getFriendlyDate = (dateString) => moment(dateString).format('DD MMM YYYY');

//   return {
//     getFriendlyDate,
//   };
// }

export const getFriendlyDate = (dateString) => moment(dateString).format('DD MMM YYYY');

export const getWhenAgo = () => {

}