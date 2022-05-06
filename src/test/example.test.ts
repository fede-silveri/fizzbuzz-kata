import { Example } from "../main/example";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
    })
})


describe('Fizz Buzz Kata', () => {
    it("it should print the given number as a string", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(1)).toBe("1");
    })
})


