export class Week {
    static WEEKEND = ['saturday', 'sunday'];
    static WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    async isWeekend(currentDay) {
        currentDay = this.validateCurrentDay(currentDay);
        if (currentDay == -1) throw new Error('Enter Valid Day');

        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (Week.WEEKEND.includes(currentDay)) {
                    resolve('True');
                } else {
                    reject(new Error(`Today, is ${currentDay} and Weekend is ${5 - Week.WEEKDAYS.indexOf(currentDay) - 1} days away`))
                }
            }, 1000);
        })
    }

    validateCurrentDay(currentDay) {
        currentDay = currentDay.trim().toLowerCase();
        const isAWeekDay = Week.WEEKEND.includes(currentDay) || Week.WEEKDAYS.includes(currentDay);
        return (isAWeekDay) ? currentDay : -1;
    }
}


