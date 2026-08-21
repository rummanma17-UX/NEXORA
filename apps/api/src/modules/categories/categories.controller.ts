import type { Request, Response, NextFunction } from "express";
import { getAllCategories, createCategory } from "./categories.service.js";
import { createCategorySchema } from "./categories.schema.js";

export async function listCategories(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (err) {
    next(err);
  }
}

export async function addCategory(
  req: Request,
  res: Response,
  next: NextFunction,
){
  try {
    const parsed = createCategorySchema.parse(req.body);
    const category = await createCategory(parsed);
    res.status(201).json(category)
  }
  catch(err){
    next(err)
  }
}
