import { Week } from "./model/week.js";
import { DateUtils } from "./utils/dateUtils.js";

const week = new Week();

const currentDay = new DateUtils().getCurrentDay();

const response = week.isWeekend('currentDay');

response.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log(`Today is ${currentDay}`);
});


