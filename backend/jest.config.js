module.exports = {
    // ...
    modulePaths: [
        "<rootDir>/",
    ],
    moduleNameMapper: {
        "^mockTasks$": "<rootDir>/__mocks__/mockTasks.js"
    },
    setupFilesAfterEnv: ["jest-extended"],
    // ...
};
