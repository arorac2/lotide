# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arorac/lotide`

**Require it:**

`const _ = require('@arorac/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Compares arrarys to see if equal
* `assertEqual`: Compares two values and checks if equal
* `eqArrays`: Compares two arrays to see if equal
* `head`: returns the first element of the array
* `tail`: returns the last element of the array
* `middle`: returns the middle element of the array
