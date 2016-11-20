// Language Overview Demos
// JavaScript works as you expect it to
// 1) TypeScript files have a `.ts` file extension
// 2) TypeScript files need to be compiled
//   a) In VS Code you can use CMD+Shift+B 
// 3) The compiled JavaScript basically remains unchanged
// 4) The TypeScript Language Service is already providing some benefit
//   a) API information (on hover, IntelliSense)
// function add(number1, number2) {
//   return number1 + number2;
// }
// var addResult = add(1, 2);
// console.log(addResult);
// TypeScript "any" type allows JavaScript dynamic typing to continue to work
// 1) Change parameter to an unexpected type
// 2) Add type information to prevent this bug
// 3) Notice that type information evaporates
// 4) Notice that the return type is inferred
// function add(number1: number, number2: number) {
//   return number1 + number2;
// }
// var addResult = add(1, 2);
// console.log(addResult);
// Type Inference
// 1) Show how type inference works
// 2) Show how you can mix types in an array
// var myBooleanVar = false;
// var myNumberVar = 0;
// var myStringVar = '';
// var myAnyVar;
// var myNullAnyVar = null;
// var myNumberArrayVar = [1, 2, 3];
// var myStringArrayVar = ['', '', ''];
// Improved Type Inference
// Prior to v2.1 an `any` type was always an `any` type (i.e. once an `any` always an `any`)
// Starting in v2.1 `any` type inference is improved
// var x;
// x = 5;
// x = 'asdf';
// Interfaces
// 1) Show how to define an interface
// 2) Show that interfaces evaporate
// 3) Show how to use an interface to describe object literals
// interface MyInterface {
//   number1: number;
//   number2: number;
//   add(number1: number, number2: number): number;
// }
// function myFunction(obj: MyInterface) {
//   return obj.add(obj.number1, obj.number2);
// }
// var result = myFunction({
//   number1: 1,
//   number2: 2,
//   add: (number1, number2) => {
//     return number1 + number2;
//   }
// })
// console.log(result);
// Classes
// 1) Show how to define a class
// 2) Private members
// 3) Readonly members
// 4) Show the resulting JS
// class MyClass {
//   number1: number;
//   readonly number2: number;
//   constructor(number1: number, number2: number) {
//     this.number1 = number1;
//     this.number2 = number2;
//   }
//   add() {
//     return this.number1 + this.number2;
//   }
//   private hidden() {
//   }
// }
// var myClass = new MyClass(1, 2);
// console.log(myClass.number1);
// console.log(myClass.number2);
// console.log(myClass.add());
// myClass.hidden(); // error - hidden method isn't accessible
// myClass.number2 = 2; // error - can't set a readonly property
