export class Example {
    add(a: number, b: number) {
        return a + b;
    }

    fizzBuzz(input: number): any {
        if (input % 3 === 0 && input % 5 === 0) {
            return "FizzBuzz";
        } else if (input % 3 === 0) {
            return "Fizz";
        } else if (input % 5 === 0) {
            return "Buzz";
        }
        return input.toString();
    }
}