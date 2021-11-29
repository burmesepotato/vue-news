import moment from 'moment';

const getFriendlyDate = (dateString) => moment(dateString).format('DD MMM YYYY');
export default getFriendlyDate;
