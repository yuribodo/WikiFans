import { Router } from "express";
import { personagemRoutes } from "./personagem.routes";

const routes = Router();

routes.use("/personagens", personagemRoutes)

export {routes}