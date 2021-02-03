import * as moment from 'moment';
import './sass/styles.scss';

const timeNow = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(timeNow);