import ProductController from "../controllers/Product.controller.js";

const routes = (app) => {
  app.post("/product", ProductController.createProduct);
  app.get("/product", ProductController.getAllProducts);
  app.get("/product/:productId", ProductController.getProductWithId);
  app.put("/product/:productId", ProductController.updateProduct);
  app.delete("/product/:productId", ProductController.deleteProduct);
};

export default { routes };
