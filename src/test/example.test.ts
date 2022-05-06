import { Example } from "../main/example";

describe('Fizz Buzz Kata', () => {
    it("it should print the given number as a string", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(2)).toBe("2");
    })

    it("it should print Fizz if the given number is multiples of three", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(3)).toBe("Fizz");
    })

    it("it should print Buzz if the given number is multiples of five", () => {
        let example: Example = new Example();
        expect(example.fizzBuzz(5)).toBe("Buzz");
    })
})


