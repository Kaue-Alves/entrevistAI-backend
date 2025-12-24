export interface CriarEntrevistadorRequest {
    nome: string | null;
    idade: number | null;
    personalidade: "RIGOROSO" | "COMPREENSIVEL";
    empresa: string;
    cargo: string;
}

export interface SessaoEntrevistador {
    nome: string | null;
    idade: number | null;
    personalidade: "RIGOROSO" | "COMPREENSIVEL";
    empresa: string;
    cargo: string;
    conversando: boolean;
}

export interface PerguntaEntrevista {
    pergunta: string;
    resposta: string;
    avaliacao: string;
}

export interface ResultadoEntrevista {
    entrevista: PerguntaEntrevista[];
    conversando: boolean;
    nota: number;
    recomendacao: string;
}
