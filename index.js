var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(){
  kittens.push("Broom")
  return kittens
}

function prependKitten(){
  kittens.unshift("Arnold")
  return kittens
}

function removeLastKitten(){
  kittens.pop()
  return kittens
}

function removeFirstKitten(){
  kittens.slice(-2)
  return kittens
}

