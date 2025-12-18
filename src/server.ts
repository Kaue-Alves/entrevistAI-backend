import fastify from "fastify";
import 'dotenv/config';

const app = fastify()

interface DefinirEntrevistadorBody {
  prompt: string
}

app.post<{ Body: DefinirEntrevistadorBody }>('/definir-entrevistador', async (req, res) => {
    console.log(req.body)

    const prompt = req.body.prompt
    // const response = await main(prompt)

    // return res.send(response)
})

app.listen({
    port: Number(process.env.PORT) || 3000,
}).then(() => {
    console.log('HTTP server running on http://localhost:3000')
})

