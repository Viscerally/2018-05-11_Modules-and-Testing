# Modules and Testing

## Modules 

What is a module and what problem does it solve?

* Module is a JavaScript file that we cann use in another JavaScript file
* theres some on thev internet
* modules are accessed through js objects

* organize 
* responsibility and architechture
* reusability

require accepts a file path as its input and returns the `exports` object from that file;

Node puts all code in a file within a function that looks like `(function (exports, require, module, __filename, __dirname) { `
This means that:

* all vars in node file are local to that file
* function params can be unique to each function, so every file gets its own version of `exports, require, module, __filename, __dirname`.

## npm

- manages node packages 
- Every project should have its own package.json 
- create a package.json using `npm init`

## mocha

mocha is a BDD style test framework for node. it allows us to write unit tests.

- install using `npm install --save-dev mocha`
- run tests using `./node_modules/mocha/bin/mocha`

## Links

https://www.npmjs.com/package/left-pad
https://mochajs.org/

---
 
## Snippets

```js
// (function (exports, require, module, __filename, __dirname) { 

// all code

// })();

// all vars in node file are local tio that file
// sepasrate
// function partams acan be unique to each function
```


```js
var yes = hasTime();
var functionHasTime = hasTime;

functionHasTime();
```