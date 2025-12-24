# EntrevistAI Backend

Backend API para sistema de entrevistas com IA.

## 📁 Estrutura do Projeto

```
src/
├── config/              # Configurações (Firebase, etc)
├── controllers/         # Controladores de rotas
├── services/           # Lógica de negócio e serviços
├── routes/             # Definição de rotas
├── types/              # Tipos e interfaces TypeScript
├── app.ts              # Configuração do app Fastify
└── server.ts           # Ponto de entrada do servidor
```

## 🚀 Scripts Disponíveis

-   `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
-   `npm run build` - Compila o projeto TypeScript
-   `npm start` - Inicia o servidor em produção

## 📝 Convenções de Nomenclatura

### Arquivos

-   **Configurações**: `*.config.ts` (ex: `firebase.config.ts`)
-   **Tipos**: `*.types.ts` (ex: `interviewer.types.ts`)
-   **Serviços**: `*.service.ts` (ex: `interviewer.service.ts`)
-   **Controladores**: `*.controller.ts` (ex: `interviewer.controller.ts`)
-   **Rotas**: `*.routes.ts` (ex: `interviewer.routes.ts`)

### Código

-   **Classes**: PascalCase (ex: `InterviewerService`)
-   **Funções**: camelCase (ex: `createInterviewerController`)
-   **Constantes**: camelCase ou UPPER_SNAKE_CASE
-   **Interfaces/Types**: PascalCase (ex: `CreateInterviewerRequest`)
-   **Variáveis**: camelCase (ex: `interviewerService`)

### Rotas

-   Padrão RESTful com nomes em inglês
-   Formato: `/resource/action` (ex: `/interviewer/create`)

## 🔧 Melhorias Implementadas

1. **Estrutura organizada** por responsabilidade (config, services, controllers, routes, types)
2. **Nomenclatura consistente** em inglês seguindo convenções padrão
3. **Separação de responsabilidades** (Service Layer Pattern)
4. **Tratamento de erros** adequado
5. **TypeScript configurado** com strict mode
6. **Scripts npm** para desenvolvimento e produção
7. **Health check endpoint** (`/health`)
8. **Logging estruturado** com Fastify logger

## 🌐 Endpoints

### POST `/interviewer/create`

Cria uma nova sessão de entrevista com IA.

**Body:**

```json
{
    "name": "John Doe",
    "age": 35,
    "personality": "RIGOROUS",
    "company": "TechCorp",
    "position": "Senior Developer"
}
```

### GET `/health`

Verifica o status da API.
