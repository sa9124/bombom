// const a = require('./export.js')
// console.log(a.sayHi())
// console.log(a.sayLove())

const b = require('./export.js')("!")
console.log(b.sayHi("이새봄"))
console.log(b.sayLove("이새봄"))
