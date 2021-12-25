# Javascript Introduction

Please refer [this](https://www.youtube.com/watch?v=PkZNo7MFNFg) tutorial for detailed explanations

## Javascript Array Manipulation

- arrayname.push(); - add to end
- arrayname.pop(); - remove from end
- arrayname.shift(); - remove from beginning
- arrayname.unshift(); - add to beginning

- an array does not need to be only a collection of a single datatype. it can also have multiple datatypes.
- myArr = [1, 2, "Ruchit", ["array", "number", 2]];
- accessing is 0-based indexed

## Equality Operator

- = is the assignment operator. assigns the value to a variable
- == is the equality operator. attempts to convert both the values into a common datatype and then compare the values
- === is the strict equality operator. it attempts to check for equality without the type conversion

- != is the inequality operator, does type conversion for comparision
- !== is the strict inequality operator, does not do type conversion for comparsion

Example:
| Operation | Result |
|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `3 == 3` | true |
| `3 == '3'` | true, as the string would be converted into a number and then equated to true |
| `3 === 3` | true |
| `3 === '3'` | false, as type conversion will not happen and hence, it will be equated to false |

## Objects

instead of accessing the objects using the dot notation, we can also access the value using the bracket notation.
using bracket notation is useful when the key as a space in it.

For example,

```javascript
var myObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

var entreeValue = myObj["an entree"]; // "hamburger"
var drinkValue = myObj["the drink"]; // "water"
```

- dot notation can also be used to update object properties

- a new property can be added to an existing object as follows

```javascript
myObj.sweet = "Rasgulla"; // dot notation
myObj["sweet"] = "Rasgulla"; // bracket notation
```

- The object now becomes -

```javascript
var myObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
  sweet: "Rasgulla",
};

-delete myObj.sweet; // this deletes the sweet key from the above object
```

- objects can be thought of as a key-value storage, as a dictionary, hence they can also be used for looking up values using the key

- `myObj.hasOwnProperty("liquid")` returns false as 'myObj' does not have any property named "liquid"

- to keep a copy of the actual collection, the way that a copy can be created in javascript is as follows -
  `var collectionCopy = JSON.parse(JSON.stringify(myArr));`

## Loops

General way that loops can be written -

`for (var i = 0; i < 5; i++) {}`

## Miscellaneous

| Method                  | Description                                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------------------- |
| `parseInt`              | takes a string and returns an integer, if string cannot be converted to an integer, it returns "NaN" |
| `parseInt("101101", 2)` | converts binary to decimal (base 10)                                                                 |
| `parseInt("748", 8)`    | converts octal to decimal (base 10)                                                                  |
| `parseInt("9F", 16)`    | converts hexadecimal to decimal (base 10)                                                            |

- `let` does not allow us to declare a variable twice
- if a variable is declared using `var`, it's scope is global (or local if the variable declaration is inside a function)
- scope of `let` is limited to the block statement or expression that it was declared in
- variables declared with `const` keywords cannot be reassigned
- `Object.freeze(objectName)` is used to prevent mutation
- varArgs = rest operator (three dots)

```javascript
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));
```

- SPREAD operator - expands an already existing array
- if a variable starts with an underscore such as `_temp`, it generally means that it is private and is not supposed to be accessed outside the class
- getters and setters are considered to be properties and not functions

## Anonymous Functions

```javascript
var name = function getName() {
  return "Ruchit";
};

// this can be converted to an anonymous function using the arrow operator
var name = () => {
  return "Ruchit";
};

// and since only one parameter is being returned, the following simplification can also be done
var name = () => "Ruchit";
```

## Destructuring Assignments - To assign variables from objects

```javascript
const AVERAGE_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTomorrow(averageTemperature) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = averageTemperature; // it means, get the tomorrow property from the averageTemperature object and assign it to 'tempOfTomorrow' variable
  return tempOfTomorrow;
}

console.log(getTempOfTomorrow(AVERAGE_TEMPERATURES));
```

## Template Literals

```javascript
var name = "Ruchit";
console.log(`My name is ${name}`);

// Outputs - My name is Ruchit
```

## Classes in JavaScript

```javascript
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }

    get temperature() {
      return this._temp;
    }

    set temperature(updatedTemperature) {
      this._temp = updatedTemperature;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
thermos = new Thermostat(72);

// testing getter
let temp = thermos.temperature;
console.log(temp);

// testing setter
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);
```
