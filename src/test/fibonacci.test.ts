import { Example } from "../main/fibonacci";

describe('Fibonacci Kata', () => {
    it("it should print the first number of the Fibonacci sequence", () => {
        let example: Example = new Example();
        expect(example.Fibonacci(0)).toBe(0);
    })
})
