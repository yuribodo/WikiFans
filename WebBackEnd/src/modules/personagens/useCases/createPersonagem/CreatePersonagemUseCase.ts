import { Personagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreatePersonagemDTO } from "../../dtos/CreatePersonagemDTO";

export class CreatePersonagemUseCase {
    async execute({name, age, quote, personality}: CreatePersonagemDTO): Promise<Personagem> {
        // ver se o personagem existe

        
        //criar personagem

        const personagem = await prisma.personagem.create({
            data: {
                name, 
                age,
                quote,
                personality,
            },
        });

        return personagem
    }
}