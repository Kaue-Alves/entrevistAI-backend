export interface CriarEntrevistador {
    nome: string | null;
    idade: number | null;
    personalidade: "RIGOROSO" | "COMPREENSIVEL";
    empresa: string;
    cargo: string;
}

export interface Entrevistador{ 
    nome: string | null;
    idade: number | null;
    personalidade: "RIGOROSO" | "COMPREENSIVEL";
    empresa: string;
    cargo: string;
    conversando: boolean;
}