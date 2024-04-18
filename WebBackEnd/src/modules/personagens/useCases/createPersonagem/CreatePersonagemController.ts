import { Request, Response } from "express";
import { CreatePersonagemUseCase } from "./CreatePersonagemUseCase";

export class CreatePersonagemController {
  async handle(req: Request, res: Response) {
    const { name, age, quote, personality } = req.body;

    const createPersonagemUseCase = new CreatePersonagemUseCase();

    const result = await createPersonagemUseCase.execute({ name, age, quote, personality });

    return res.status(201).json(result);
  }
}