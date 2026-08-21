import { Router, type Router as RouterType } from "express";
import { addCategory, listCategories } from "./categories.controller.js";
import { create } from "domain";

export const categoriesRouter: RouterType = Router();

categoriesRouter.get("/", listCategories);
categoriesRouter.post("/", addCategory);
