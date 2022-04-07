export class RandomNumber {
    getRandomNumberInRange(min, max) {
        const diff = max - min + 1;
        let rand = Math.random();
        rand = Math.floor(rand * diff);
        rand = rand + min;
        return rand;
    }
}