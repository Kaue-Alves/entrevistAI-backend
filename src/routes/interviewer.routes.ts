import type { FastifyInstance } from "fastify";
import { criarEntrevistadorController, obterHistoricoController } from "../controllers/interviewer.controller.ts";
import type { CriarEntrevistadorRequest } from "../types/interviewer.types.ts";

export async function rotasEntrevistador(
    fastify: FastifyInstance
): Promise<void> {
    fastify.post<{ Body: CriarEntrevistadorRequest }>(
        "/entrevistador/criar",
        async (request, reply) => {
            try {
                const { nome, idade, personalidade, empresa, cargo } =
                    request.body;

                const resposta = await criarEntrevistadorController({
                    nome,
                    idade,
                    personalidade,
                    empresa,
                    cargo,
                });

                return reply
                    .status(200)
                    .send({ sucesso: true, dados: resposta });
            } catch (erro) {
                console.error("Erro ao criar entrevistador:", erro);
                return reply.status(500).send({
                    sucesso: false,
                    erro: "Falha ao criar entrevistador",
                });
            }
        }
    );

    fastify.get("/entrevistador/historico", async (req, rep) => {
        let resposta = await obterHistoricoController();
        return rep.send(resposta)
    })
}
