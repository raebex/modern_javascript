import moment from 'moment';
import dayjs from 'dayjs';
var math = require('mathjs');
import faker from 'faker';

console.log('Hello from JS!');

var sameTimeTomorrow = moment().add(1, 'days').calendar();
var dateFormatted = moment().format("MMM Do YYYY");
var inches = math.evaluate('12.7 cm to inch');
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();

console.log(sameTimeTomorrow);
console.log(dayjs().format());
console.log(inches);
console.log(`Hello ${randomName}, today is ${dateFormatted}. You can reach them at ${randomEmail}!!`);