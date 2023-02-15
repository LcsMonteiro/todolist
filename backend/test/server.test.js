const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

test("A aplicação deve responder na porta 3333", () => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});