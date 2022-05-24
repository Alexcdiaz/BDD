const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function despachar(cod, price) {
    if (cod === "A15") {
        if (price < 40 )
            return "Dinero incompleto";
        else
            return "Bebida azucarada";
    } else if (cod === "B60") {
        if (price < 50 )
            return "Dinero incompleto";
        else
            return "Agua";
    } else if (cod === "C6") {
        if (price < 80 )
            return "Dinero incompleto";
        else
            return "Papas fritas";
    } else {
        return "Código incorrecto";
    }
}

Given('Total {string}', function(givenMoney){
    this.money = givenMoney;
})

Given('Producto {string}', function (givenCode) {
    this.cod = givenCode;
});

When('Pregunta por el producto', function () {
    this.actualAnswer = despachar(this.cod, this.money);
});

Then('Despacha {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
    console.log(this.cod, this.money, this.actualAnswer);
})


