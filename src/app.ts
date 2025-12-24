import fastify from "fastify";
import "dotenv/config";
import { rotasEntrevistador } from "./routes/interviewer.routes.ts";

export function construirApp() {
    const app = fastify({
        logger: {
            level: process.env.LOG_LEVEL || "info",
        },
    });

    // Registrar rotas
    app.register(rotasEntrevistador);

    // Health check
    app.get("/saude", async () => {
        return { status: "ok", timestamp: new Date().toISOString() };
    });

    return app;
}
