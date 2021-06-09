import hello from '../hello';

describe('Hello should work', () => {
    // Learn about using test.each here: https://jestjs.io/docs/api#testeachtablename-fn-timeout
    test.each([
        ['john', 'Hello john'],
        ['', 'Hi, what is your name?'],
        [null, 'Hi, what is your name?'],
        [undefined, 'Hi, what is your name?'],
        [42, 'Hello 42'],
    ])('hello(%s)', (name, expectedGreeting) => {
        expect(hello(name)).toBe(expectedGreeting);
    });
});
