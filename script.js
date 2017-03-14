var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal='Zielone słonie'
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var textCharsAfter = text.replace('Papugi', animalUpperCased);

var partoftextCharsAfter=textCharsAfter.slice(0,textCharsAfter.length/2)
console.log(partoftextCharsAfter)
