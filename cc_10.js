// Task 1: Creating a Product Class //
class Product {
constructor(name, id, price, stock) {
this.name = name; // Name 
this.id = id; // Product ID
this.price = price; // Price 
this.stock = stock;  } // Stock
 getDetails() {
return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;}
updateStock(quantity) {
this.stock -= quantity; } // Lowers stock 
restock(quantity) {
this.stock += quantity; } }// Increase stock 
const prod1 = new Product("Laptop", 101, 1200, 10); // New product
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
prod1.updateStock(3); // Reduce stock by 3 units
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

// Task 2: Creating an Order Class //
class Order {
constructor(orderId, product, quantity) {
this.orderId = orderId; // Order ID
this.product = product; // Product 
this.quantity = quantity; // Quantity 
this.totalPrice = product.price * quantity; // Total price 
this.product.updateStock(quantity);} // Lowers stock 
getOrderDetails() {
return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;}}
const order1 = new Order(501, prod1, 2); // New order
console.log(order1.getOrderDetails()); //Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)