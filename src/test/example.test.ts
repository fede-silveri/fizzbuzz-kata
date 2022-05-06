import { Example } from "../main/example";

describe('Fizz Buzz Kata', () => {
    it("it should print the given number as a string", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(1)).toBe("1");
    })

    it("it should print the Fizz if the given number is multiples of three", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(3)).toBe("Fizz");
    })
})


