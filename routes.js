const productService = require("./services/product-service");
const customerService = require("./services/customer-service");
const blogService = require("./services/blog-service");
const discountService = require("./services/discount-service");
const orderService = require("./services/order-service");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("<h1>Hi, you need access for response of data...</h1>");
});

router.get("/customers", async (req, res) => {
  const customers = await customerService.listCustomers();
  res.send(customers);
});

router.get("/customer/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await customerService.getCustomerById(userId);
  res.send(user);
});

router.post("/orders", async (req, res) => {
	const orderData = req.body; 
	const createdOrder = await orderService.createOrder(orderData);
	res.send(createdOrder);
 });
 
 router.put("/orders/:id", async (req, res) => {
	const orderId = req.params.id;
	const updatedOrderData = req.body; 
	const updatedOrder = await orderService.updateOrder(orderId, updatedOrderData);
	res.send(updatedOrder);
 });

router.get("/products", async (req, res) => {
  const products = await productService.fetchProducts();
  res.send(products);
});

router.get("/product/:id/metafields", async (req, res) => {
  const productId = req.params.id;
  const productWithMetafields = await productService.getProductWithMetafields(productId);
  res.send(productWithMetafields);
});

router.get("/blogs", async (req, res) => {
  const blogs = await blogService.listBlogs();
  res.send(blogs);
});

router.get("/blog/:id", async (req, res) => {
  const blogId = req.params.id;
  const blog = await blogService.getBlogById(blogId);
  res.send(blog);
});

router.get("/discounts", async (req, res) => {
  const discounts = await discountService.listDiscounts();
  res.send(discounts);
});

router.get("/discount/:id", async (req, res) => {
  const discountId = req.params.id;
  const discount = await discountService.getDiscountById(discountId);
  res.send(discount);
});

router.get("/orders", async (req, res) => {
  const orders = await orderService.listOrders();
  res.send(orders);
});

router.get("/order/:id", async (req, res) => {
  const orderId = req.params.id;
  const order = await orderService.getOrderById(orderId);
  res.send(order);
});

module.exports = router;
