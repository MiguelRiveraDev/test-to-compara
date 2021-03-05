const server = require("../logic-app/server");
const CarInsurance = server.CarInsurance;
const Product = server.Product;

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 15),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Special Full Coverage', 15, 40),
    new Product('Special Full Coverage', 10, 20),
    new Product('Special Full Coverage', 5, 20),
    new Product('Super Sale', 3, 10),
];
  
const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};
  
for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}