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
