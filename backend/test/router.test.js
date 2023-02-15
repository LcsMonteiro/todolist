jest.mock("../src/models/tasksModel");

const request = require("supertest");
const app = require("../src/app");

const tasksModel = require("../src/models/tasksModel");

describe("Testes para a rota GET /tasks", () => {
    test("Deve retornar status 200 e um array de tarefas", async () => {
    // Mock dos dados da tarefa
        tasksModel.getAll.mockResolvedValue([
            {
                id: 1,
                title: "Comprar leite",
                completed: false,
            },
            {
                id: 2,
                title: "Pagar a conta de luz",
                completed: true,
            },
        ]);
        
        // Faz a requisição GET /tasks
        const response = await request(app).get("/tasks");

        // Verifica o status da resposta
        expect(response.status).toBe(200);

        // Verifica se a resposta é um array de tarefas
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(2);

        // Verifica se os dados das tarefas estão corretos
        expect(response.body[0].id).toBe(1);
        expect(response.body[0].title).toBe("Comprar leite");
        expect(response.body[0].completed).toBe(false);
        expect(response.body[1].id).toBe(2);
        expect(response.body[1].title).toBe("Pagar a conta de luz");
        expect(response.body[1].completed).toBe(true);

        // Verifica se a função getAll do tasksModel foi chamada corretamente
        expect(tasksModel.getAll).toHaveBeenCalledTimes(1);
    });
});
