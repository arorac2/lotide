const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7]), [6,7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
