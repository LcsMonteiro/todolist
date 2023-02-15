const mockTasks  = require("./mockTasks");

const tasksModel = {
    getAll: jest.fn().mockResolvedValue(mockTasks),
    createTask: jest.fn().mockImplementation((task) => {
        return {
            insertId: 3 // o valor pode ser qualquer número
        };
    }),
    deleteTask: jest.fn().mockImplementation((id) => {
        return {
            affectedRows: 1 // o valor pode ser qualquer número
        };
    }),
    updateTask: jest.fn().mockImplementation((id, task) => {
        return {
            affectedRows: 1 // o valor pode ser qualquer número
        };
    })
};

module.exports = tasksModel;
