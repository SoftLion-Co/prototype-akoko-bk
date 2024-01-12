const ShopifyService = require("./server");

class BlogService {
  async listBlogs() {
    try {
      const blogs = await ShopifyService.shopify.blog.list();
      return blogs;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getBlogById(blogId) {
    try {
      const blog = await ShopifyService.shopify.blog.get(blogId);
      return blog;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

const blogService = new BlogService();
module.exports = blogService;