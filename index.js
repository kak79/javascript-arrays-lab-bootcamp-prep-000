//define your array here
var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

//appends a kitten to the end of the kittens array
function destructivelyAppendKitten(name){  
  
  kittens.push(name);
  
}

//prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name){  

  kittens.unshift(name);
  
}

//removes the last kitten from the kittens array
function destructivelyRemoveLastKitten(newArray3){  

  newArray3.pop()
  return newArray3

}

//removes the First kitten from the kittens array
function destructivelyRemoveFirstKitten(newArray4){  

  newArray4.shift()
  return newArray4

}

//appends a kitten to the end of the kittens array and returns a new array, leaving the kittens array unchanged
function appendKitten(name){

 return name.concat(name.length)

}

//prepends a kitten to the beginning of the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name){

 return name.concat(0)

}

//removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged
function removeLastKitten(newArray7){

  return newArray7.slice(0, newArray7.length-1)

}

//removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged
function removeFirstKitten(newArray8){

  return newArray8.slice(1)

}
