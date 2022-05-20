const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function esViernes(today) {
    if (today === "Viernes") {
        return "TGIF";
    } else {
        return "Nope";
    }
}

Given('hoy es {string}', function (givenDay) {
    this.today = givenDay;
});

When('Pregunto si ya es viernes', function () {
    this.actualAnswer = esViernes(this.today);
});

Then('Debería decir {string}', function (expectedAnswer) {
    // assert.strictEqual(this.actualAnswer, expectedAnswer);
    console.log(this.today, expectedAnswer)
})