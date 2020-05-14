//define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(array1){  

  array1.push();
  return array1
  
}

//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(array2,element){  

  array2.unshift(element);
  return array2
  
}

//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(array3){  

  array3.pop()
  return array3

}

//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(array4){  

  array4.shift()
  return array4

}

//appends a kitten to the end of the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(array5){

 return array5.concat(array5.length)

}

//prepends a kitten to the beginning of the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(array6){

 return array6.concat(0)

}

//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(array7){

  return array7.slice(0, array7.length-1)

}

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(array8){

  return array8.slice(1)

}
