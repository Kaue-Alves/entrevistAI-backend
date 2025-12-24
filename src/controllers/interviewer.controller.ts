import { ServicoEntrevistador } from "../services/interviewer.service.ts";
import type { CriarEntrevistadorRequest } from "../types/interviewer.types.ts";

const servicoEntrevistador = new ServicoEntrevistador();

export async function criarEntrevistadorController(
    dados: CriarEntrevistadorRequest
): Promise<string> {
    const { nome, idade, personalidade, empresa, cargo } = dados;

    const textoPersonalidade =
        personalidade === "RIGOROSO" ? "rigoroso" : "compreensível";

    const prompt = `
Você é um entrevistador profissional conduzindo uma entrevista para a vaga de ${cargo} na empresa ${empresa}.

Perfil do entrevistador:
- Nome: ${nome ?? "não informado"}
- Idade: ${idade ?? "não informada"}
- Personalidade: ${textoPersonalidade}

Regras obrigatórias:
1. Toda saída DEVE ser um JSON válido.
2. Nunca escreva texto fora do JSON.
3. Cada mensagem representa UM evento da entrevista.
4. Utilize os tipos de evento:
   - "pergunta": quando fizer uma pergunta ao candidato
   - "avaliacao": quando avaliar uma resposta
   - "encerramento": quando a entrevista terminar
5. Sempre inclua o campo "ordem", iniciando em 1 e incrementando a cada evento.
6. Não repita perguntas.
7. Faça no máximo 5 perguntas relevantes para a vaga.

Formato obrigatório de saída:

Evento de PERGUNTA:
{
  "type": "pergunta",
  "ordem": 1,
  "conteudo": {
    "pergunta": "Texto da pergunta feita ao candidato",
    "conversando": true
  }
}

Evento de AVALIAÇÃO:
{
  "type": "avaliacao",
  "ordem": 2,
  "conteudo": {
    "resposta": "Resposta do candidato",
    "avaliacao": "Avaliação objetiva da resposta"
  }
}

Evento de ENCERRAMENTO:
{
  "type": "encerramento",
  "ordem": 6,
  "conteudo": {
    "nota": 8.5,
    "recomendacao": "Aprovado",
    "conversando": false
  }
}

Inicie a entrevista gerando o primeiro evento do tipo "pergunta".
`;

    const resposta = await servicoEntrevistador.enviarMensagem(prompt);
    return resposta;
}

export async function obterHistoricoController(): Promise<any[]> {
    const historico = await servicoEntrevistador.obterHistorico();
    return historico;
}
