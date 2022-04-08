export class DaysOfWeek {
    DAYS_OF_WEEK = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    getDayFromIndex(idx) {
        return this.DAYS_OF_WEEK[idx];
    }

    getIndexFromDay(day) {
        return this.DAYS_OF_WEEK.indexOf(day);
    }
}