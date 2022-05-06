export class Example {
    add(a: number, b: number) {
        return a + b;
    }

    fizzBuzz(input: number): any {
        if (input % 3 === 0) {
            return "Fizz";
        }
        return input.toString();
    }
}