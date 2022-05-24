const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function actualizaInv(cod, inv) {
    if (inv < 1){
        return "Producto sin stock"
    } else {
        if (cod === "A15") {
            return "Bebida azucarada entregada";
        } else if (cod === "B60") {
            return "Agua entregada";
        } else if (cod === "C6") {
            return "Papas fritas entregadas";
        }
    }
}


Given('Producto solicitado {string}', function (givenCode) {
    this.cod = givenCode;
});

Given('Stock {string}', function (givenInv) {
    this.inv = givenInv;
});

When('Realiza compra', function () {
    this.actualAnswer = actualizaInv(this.cod, this.inv);
});

Then('Muestra {string}', function (expectedAnswer) {
    assert.strictEqual(this.actualAnswer, expectedAnswer);
    console.log(this.cod, this.inv, this.actualAnswer);
})