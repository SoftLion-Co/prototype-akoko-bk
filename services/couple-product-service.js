const ShopifyService = require("./server");

class CoupleProductService {
  async listCouplesProduct(limit = 5) {
    try {
      const customers = await ShopifyService.shopify.metafield
		.list({ metafield: { owner_resource: 'product'} });
      return customers;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getCustomerById(userId) {
    try {
      const user = await ShopifyService.shopify.customer.get(userId);
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}

const coupleProductService = new CoupleProductService();
module.exports = coupleProductService;