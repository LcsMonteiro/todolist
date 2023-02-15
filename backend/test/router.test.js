jest.mock("../src/models/tasksModel");

const tasks = require("../src/models/__mocks__/mockTasks.js");

const request = require("supertest");
const app = require("../src/app");

const tasksModel = require("../src/models/tasksModel");

describe("Testes para a rota GET /tasks", () => {
    test("Deve retornar status 200 e um array de tarefas", async () => {
    // Mock dos dados da tarefa
        tasksModel.getAll.mockResolvedValue(tasks);
        
        // Faz a requisição GET /tasks
        const response = await request(app).get("/tasks");

        // Verifica o status da resposta
        expect(response.status).toBe(200);

        // Verifica se a resposta é um array de tarefas
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(2);

        // Verifica se os dados das tarefas estão corretos
        expect(response.body[0].id).toBe(1);
        expect(response.body[0].title).toBe("Fazer compras");
        expect(response.body[0].status).toBe("Concluída");
        expect(response.body[1].id).toBe(2);
        expect(response.body[1].title).toBe("Pagar contas");
        expect(response.body[1].status).toBe("Em andamento");

        // Verifica se a função getAll do tasksModel foi chamada corretamente
        expect(tasksModel.getAll).toHaveBeenCalledTimes(1);
    });

    test("deve verificar o retorno da rota", async () => {
        const response = await request(app).get("/tasks");
    
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body).toHaveLength(2); // tamanho do array deve ser 2
    
        const task = response.body[0]; // obtém a primeira tarefa do array
        expect(task).toHaveProperty("id");
        expect(task).toHaveProperty("title");
        expect(task).toHaveProperty("status");
        expect(task).toHaveProperty("create_at");
    
        // verifica os valores das propriedades da primeira tarefa
        expect(task.id).toBe(1);
        expect(task.title).toBe("Fazer compras");
        expect(task.status).toBe("Concluída");
        expect(new Date(task.create_at)).toEqual(new Date("2023-01-24T15:15:00.000Z"));
    });
});
