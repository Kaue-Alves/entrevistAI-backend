import { modeloGenerativo } from "../config/firebase.config.ts";

export class ServicoEntrevistador {
    private modelo = modeloGenerativo;
    private sessaoChat = this.modelo.startChat({
        history: [],
    });

    async enviarMensagem(prompt: string): Promise<string> {
        const resultado = await this.sessaoChat.sendMessage(prompt);
        const resposta = resultado.response;
        const texto = resposta.text();
        console.log("🤖 Resposta:", texto);
        return texto;
    }

    reiniciarSessao(): void {
        this.sessaoChat = this.modelo.startChat({
            history: [],
        });
        console.log("🔄 Sessão reiniciada!");
    }

    async obterHistorico(): Promise<any[]> {
        const historico = await this.sessaoChat.getHistory();
        return historico;
    }
}
