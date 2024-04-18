import { Router } from "express";
import { CreatePersonagemController } from "../modules/personagens/useCases/createPersonagem/CreatePersonagemController";
import { GetPersonagensByReleaseDateController } from "../modules/personagens/useCases/createPersonagem/getPersonagensByReleaseDate/GetPersonagensByReleaseDateController";

const createPersonagemController = new CreatePersonagemController
const getPersonagenssByReleaseDateController = new GetPersonagensByReleaseDateController

const personagemRoutes = Router();

personagemRoutes.post("/", createPersonagemController.handle)
personagemRoutes.get("/release", getPersonagenssByReleaseDateController.handle)

export {personagemRoutes}