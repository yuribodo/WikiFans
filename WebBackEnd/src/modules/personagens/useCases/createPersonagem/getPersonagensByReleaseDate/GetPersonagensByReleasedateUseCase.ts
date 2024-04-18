import { Personagem } from "@prisma/client";
import { prisma } from "../../../../../prisma/client";

export class GetPersonagensByReleaseDateUseCase {
    async execute(): Promise<Personagem[]> {
        const personagens = await prisma.personagem.findMany({
            orderBy: {
                id: "desc"
            }
        });

        return personagens

    }
}