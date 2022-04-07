export class DateUtils {
    DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    getCurrentDay() {
        const date = new Date();
        const currentDay = date.getDay();
        console.log(this.DAYS_OF_WEEK[currentDay]);
        return this.DAYS_OF_WEEK[currentDay];
    }
}