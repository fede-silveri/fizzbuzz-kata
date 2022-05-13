import { Example } from "../main/fibonacci";

describe('Fibonacci Kata', () => {
    const example: Example = new Example();


    it.each`
    position     | expected
    ${0}         | ${0}
    ${1}         | ${1}
    ${2}         | ${1}
    ${3}         | ${2}
    ${4}         | ${3}
    ${5}         | ${5}
    ${9}         | ${34}
    ${10}        | ${55}
    ${30}        | ${832040}
    ${null}      | ${0}
    ${undefined} | ${0}
    ${'1number'}       | ${0}
    `('should print the $position of the Fibonacci sequence', ({ position, expected }) => {
        expect(example.Fibonacci(position)).toBe(expected)
    });
})