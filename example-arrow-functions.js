var names = ['Diego', 'João', 'Maria'];

// names.forEach(function(name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });

// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Diego'));

// var person = {
//   name: 'Diego',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };

// person.greet();

// function add(a, b) {
//   return a + b;
// }

var add = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));