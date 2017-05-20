# value-at

This is a simple JavaScript getter/setter function for retrieving or changing a value in an array.

## Installation

````
npm install value-at --save
````

## Usage

Quick guide to the syntax:

````
valueAt(array, index[, replacementValue][, isCloned])
````

### Using as a _get_ function

#### Positive

````js
var valueAt = require('value-at');

var array = [1, 2, 3, 4, 5];

var value = valueAt(array, 1);

// value = 2
````

That isn't all that special since you can do the same thing with native JavaScript by just using `array[1]`.

The advantage this has is that it also works for negative index values.

#### Negative

````js
var valueAt = require('value-at');

var array = [1, 2, 3, 4, 5];

var value = valueAt(array, -2);

// value = 4
````

### Using as a _set_ function

#### Positive

````js
var valueAt = require('value-at');

var array = [1, 2, 3, 4, 5];

var newArray = valueAt(array, 1, "a");

// array = [1, 2, 3, 4, 5];
// newArray = [1, "a", 3, 4, 5];
````

Note that `valueAt` doesn't change the original array by default. It returns with an altered shallow clone of the original array.

#### Negative

````js
var valueAt = require('value-at');

var array = [1, 2, 3, 4, 5];

var newArray = valueAt(array, -2, "b");

// array = [1, 2, 3, 4, 5];
// newArray = [1, 2, 3, "b", 5];
````

#### Altering the original array

If you _do_ want to alter the original array, set the 4th parameter to `false`.

````js
var valueAt = require('value-at');

var array = [1, 2, 3, 4, 5];

valueAt(array, -2, "b", false);

// array = [1, 2, 3, "b", 5];
````
