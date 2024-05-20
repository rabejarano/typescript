//Primitives
let nombre: string = "Juan";
let edad: number = 30;
let isChild: boolean = true;

//Multiples types
let value: string | undefined | null = null;
value = "hello";
value = undefined;

//interface
interface Car {
  type: string;
  model: string;
  year: number;
}

interface Options {
  location?: {
    x?: number;
    y?: number;
  };
}

//function
function foo(options?: Options) {
  if (options && options.location && options.location.x) {
    const x = options.location.x; // Type of x is number
  }
}

//function return;
function fooR(options?: Options): string | null {
  return "";
}

//function return Async/await;
async function fooP(options?: Options): Promise<string | null> {
  return "";
}
