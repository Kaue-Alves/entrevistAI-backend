import "dotenv/config";
import { construirApp } from "./app.ts";

const PORTA = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

async function iniciarServidor() {
    const app = construirApp();

    try {
        await app.listen({ port: PORTA, host: HOST });
        console.log(`🚀 Servidor HTTP rodando em http://localhost:${PORTA}`);
    } catch (erro) {
        console.error("Erro ao iniciar servidor:", erro);
        process.exit(1);
    }
}

iniciarServidor();
