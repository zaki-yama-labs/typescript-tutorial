// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0x1010;
let octal: number = 0o744;

// String
let color: string = 'blue';
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}`;

// Array
let list: number[] = [1, 2, 3];
// or:
// let list: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];
// Initialize it
x = ['hello', 10];
x = [10, 'hello']; // Error

console.log(x[0].substr(1));
console.log(x[1].substr(1)); // Error

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
// We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type:
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;


// Void
// `void` is a little like the opposite of `any`: the absence of having any type at all.
function warnUser(): void {
  console.log('This is my warning message');
}

let unusable: void = undefined;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// The `never` type represents the type of values that never occur
// 必ず exception を throw するか、絶対に return されない関数などに対して使う
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error('Something failed');
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}
