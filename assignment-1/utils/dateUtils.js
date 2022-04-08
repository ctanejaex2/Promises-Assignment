import { DaysOfWeek } from './daysOfWeek.js'
export class DateUtils {
    getCurrentDay() {
        const currentDay = new Date().getDay();
        return new DaysOfWeek().getDayFromIndex(currentDay);
    }
}