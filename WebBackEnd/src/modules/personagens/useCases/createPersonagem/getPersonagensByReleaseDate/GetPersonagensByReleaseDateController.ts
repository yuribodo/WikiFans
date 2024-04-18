import { Request, Response } from "express";
import { GetPersonagensByReleaseDateUseCase } from "./GetPersonagensByReleasedateUseCase";

export class GetPersonagensByReleaseDateController {
  async handle(req: Request, res: Response) {
    const getPersonagensByReleaseDateUseCase = new GetPersonagensByReleaseDateUseCase();

    const result = await getPersonagensByReleaseDateUseCase.execute();

    return res.status(200).json(result);
  }
}