import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  getCategoriesController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-categories", getCategoriesController);

//get single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
