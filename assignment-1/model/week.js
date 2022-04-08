import { DaysOfWeek } from "../utils/daysOfWeek.js";

export class Week {
    COUNT_WEEK_DAYS = 5;
    async isWeekend(currentDay) {
        currentDay = this.validateCurrentDay(currentDay);
        if (currentDay == -1) throw new Error('Enter Valid Day');
        const isAWeekend = this.isAWeekend(currentDay);
        const daysRemainingForWeekend = this.calculateDaysRemainingForWeekend(currentDay);
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (isAWeekend) {
                    resolve(true);
                } else {
                    reject(new Error(`Today, is ${currentDay} and Weekend is ${daysRemainingForWeekend} days away`))
                }
            }, 1000);
        })
    }

    isAWeekend(currentDay) {
        const idxOfCurrentDay = new DaysOfWeek().getIndexFromDay(currentDay);
        return (idxOfCurrentDay == 0 || idxOfCurrentDay == 6) ? true : false;
    }

    calculateDaysRemainingForWeekend(currentDay) {
        const isAWeekDay = this.isAWeekDay(currentDay);
        if (isAWeekDay)
            return this.COUNT_WEEK_DAYS - new DaysOfWeek().getIndexFromDay(currentDay);
    }

    validateCurrentDay(currentDay) {
        currentDay = currentDay.trim().toLowerCase();
        return (this.isAWeekDay(currentDay)) ? currentDay : -1;
    }

    isAWeekDay(currentDay) {
        const indexOfCurrentDay = new DaysOfWeek().getIndexFromDay(currentDay);
        return (indexOfCurrentDay > 0 && indexOfCurrentDay < 6);
    }
}


