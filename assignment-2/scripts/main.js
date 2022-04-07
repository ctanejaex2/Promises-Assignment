import { User } from "./model/user.js"
import { DOMutils } from "./utils/domUtils.js";
import { RandomNumber } from "./utils/randomNumberGenerator.js";

const user = new User();
const domUtils = new DOMutils();
const submitButton = domUtils.getElementById('btn_submit');
const randomNumber = new RandomNumber();

submitButton.addEventListener('click', () => {
    const inputNumber = user.getUserInput();

    if (!inputNumber) {

        throw new Error('Enter valid number');
    }

    const randomUserInput = randomNumber.getRandomNumberInRange(1, 6);
    const score = user.computeUserAdnRandomNumberScore(inputNumber, randomUserInput);

    score.then((val) => {
        domUtils.updateScoreOnDisplay(val);
    }).catch((msg) => {
        console.log(msg);
    })
});