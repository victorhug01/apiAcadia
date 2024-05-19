import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let age: number = 15;
  let showOld: boolean = false;
  if (age > 50) {
    showOld = true;
  }
  let list = Product.getAll();
  let expansiveList = Product.getFromPriceAfter(12)
  res.render("pages/home", {
    name: "Victor",
    lastName: "Pereira",
    showOld,
    products: list,
    expansives: expansiveList,
    frasesDoDia: ["Alguma coisa muito legal", "Outra frase qualquer,"],
  });
};
