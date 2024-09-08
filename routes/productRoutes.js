import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  getProductsController,
  singleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  braintreePaymentController,
} from "../controllers/productController.js";
import formidable from "express-formidable";
const router = express.Router();

//routes
// create product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//get all products
router.get("/get-products", getProductsController);

//get single product
router.get("/single-product/:slug", singleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//delete product
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

// filter product
router.post("/product-filters", productFiltersController);

// product count
router.get("/product-count", productCountController);

// product per page
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", searchController);

// similar products product
router.get("/related-products/:pid/:cid", relatedProductController);

// category wise products
router.get("/product-category/:slug", productCategoryController);

// payments route
// token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);
export default router;
