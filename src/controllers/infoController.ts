import { Request, Response } from "express";

export const contato = (req: Request, res: Response) => {
  res.send("Form of contact");
};

export const sobre = (req: Request, res: Response) => {
  res.send("Institucional page");
};
