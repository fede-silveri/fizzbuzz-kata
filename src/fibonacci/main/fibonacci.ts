export class Example {
    Fibonacci(position: number): number {
        if (!position || !Number.isInteger(position)) {
            return 0;
            // throw exception
        }
        if (position === 0 || position === 1) {
            return position;
        }

        return this.Fibonacci(position - 1) + this.Fibonacci(position - 2);

    }


}