const ShopifyService = require("./server");

class DiscountService {
  async listDiscounts(limit = 5) {
    try {
      const discounts = await ShopifyService.shopify.discount.list({ limit });
      return discounts;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getDiscountById(discountId) {
    try {
      const discount = await ShopifyService.shopify.discount.get(discountId);
      return discount;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const discountService = new DiscountService();
module.exports = discountService;