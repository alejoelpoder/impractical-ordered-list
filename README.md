# impractical-ordered-list
Forma impráctica pero interezante de ordenar arrays numéricos de forma ascendente

# Instalar

Install with npm:
npm i impractical-ordered-list

# Example 
Here is an example how to use this package as library.

const {impracticalOrderedList} = require('impractical-ordered-list')

const list = [1,4,9,3,8,11,5,16,35,45];

var list_ordenada = impracticalOrderedList(list)
  
console.log(list_ordenada)

// => [ 1, 3, 4, 5, 8, 9, 11, 16, 35, 45 ]