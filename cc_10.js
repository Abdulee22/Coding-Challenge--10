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

// Task 3: Creating an Inventory Class //
class Inventory {
constructor() {
this.products = []; // List of products
this.orders = [];} // List of orders
addProduct(product) {
this.products.push(product); } // Product 
listProducts() {
this.products.forEach(product => console.log(product.getDetails()));} // Shows products
placeOrder(orderId, product, quantity) {
if (product.stock >= quantity) { // Stock availability
const newOrder = new Order(orderId, product, quantity); // New order
this.orders.push(newOrder); }}
listOrders() {
this.orders.forEach(order => console.log(order.getOrderDetails()));} // Showes all orders
restockProduct(productId, quantity) {
const product = this.products.find(p => p.id === productId); // Product search by ID 
if (product) {
product.restock(quantity);}}} // Increase stock 
const inventory = new Inventory(); // New inventory 
inventory.addProduct(prod1); // Add product 
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" 

// Task 4: Implementing Order Management //
inventory.placeOrder(601, prod1, 2); // Place order
inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); //Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"