const assert = require("chai").assert;
const server = require("../logic-app/server");
const CarInsurance = server.CarInsurance;
const Product = server.Product;

describe("Products and prices: tests using ASSERT interface from CHAI module: ", function() {
    describe("Check updatePrice Function: ", function() {
        it("TEST 1: product name using assert.equal", function() {
            const serverResult = new CarInsurance([ new Product("Super Product", 15, 45) ]);
            const serverUpdate = serverResult.updatePrice();
            assert.equal(serverUpdate[0].name, "Super Product");
        });
        it("TEST 2: string with the product using assert.equal ", function() {
            const serverResult = new CarInsurance([ new Product("Super Product2", 20, 30) ]);
            const serverUpdate = serverResult.updatePrice();
            const stringProduct = serverUpdate[0].name + ',' + serverUpdate[0].sellIn.toString() + ',' + serverUpdate[0].price.toString();
            assert.equal(stringProduct, "Super Product2,19,29");
        });
        it("TEST 3: string with the product Super Sale using assert.equal ", function() {
            const serverResult = new CarInsurance([ new Product("Super Sale", 20, 30) ]);
            const serverUpdate = serverResult.updatePrice();
            const stringProduct = serverUpdate[0].name + ',' + serverUpdate[0].sellIn.toString() + ',' + serverUpdate[0].price.toString();
            assert.equal(stringProduct, "Super Sale,19,28");
        });
        it("TEST 4: string with the product Super Sale with the sell by date has passed using assert.equal ", function() {
            const serverResult = new CarInsurance([ new Product("Super Sale", 5, 10) ]);
            const serverUpdate = serverResult.updatePrice();
            const stringProduct = serverUpdate[0].name + ',' + serverUpdate[0].sellIn.toString() + ',' + serverUpdate[0].price.toString();
            assert.equal(stringProduct, "Super Sale,4,8");
        });
    }); 
});