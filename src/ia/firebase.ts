import { initializeApp } from "firebase/app";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import 'dotenv/config';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize the Gemini Developer API backend service
const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

// Criar uma sessão de chat para manter o contexto
let chatSession = model.startChat({
    history: [],
});

// Função para enviar mensagem mantendo o contexto
async function sendMessage(message: string) {
    const result = await chatSession.sendMessage(message);
    const response = result.response;
    const text = response.text();
    console.log("🤖 Resposta:", text);
    return text;
}

function resetChat() {
    chatSession = model.startChat({
        history: [],
    });
    console.log("🔄 Conversa reiniciada!");
}


async function getHistory() {
    const history = await chatSession.getHistory();
    console.log("📜 Histórico:", JSON.stringify(history, null, 2));
    return history;
}

// Exemplo de uso
async function run() {
    console.log("=== Primeira conversa ===");
    await sendMessage("EM POUCAS PALAVRAS, QUAL A COR DO CÉU?.");
    await sendMessage("RETORNE UM JSON COM AS PRINCIPAIS INFORMAÇÕES RELACIONADAS A PERGUNTA ANTERIOR"); // Vai lembrar que é Kauê

    console.log("\n=== Ver histórico ===");
    await getHistory();

    console.log("\n=== Reiniciar e tentar novamente ===");
    resetChat();
    await sendMessage("Qual é o meu nome?"); // Não vai lembrar mais
}

run();
