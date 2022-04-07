import { DOMutils } from "../utils/domUtils.js";

export class User {
    getUserInput() {
        const userInput = new DOMutils().getInputValue('input_user_number').trim();
        const isANumber = this.validateUserInput(userInput);
        return isANumber ? userInput : isANumber;
    }

    validateUserInput(input) {
        input = input.trim();
        return this.isNumeric(input);
    }

    isNumeric(value) {
        return /^\d+$/.test(value);
    }

    computeUserAdnRandomNumberScore(inputNumber, randomNumber) {
        const score = this.calculateScore(inputNumber, randomNumber);
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve(score);
            }, 1000);
        });
    }

    calculateScore(inputNumber, randomNumber) {
        const diff = Math.abs(inputNumber - randomNumber);
        if (diff == 0) return 2;
        else if (diff == 1) return 1;
        return 0;
    }

}