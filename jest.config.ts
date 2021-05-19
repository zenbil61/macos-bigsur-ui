module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)test.ts?(x)'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: -10,
        },
    },
};
