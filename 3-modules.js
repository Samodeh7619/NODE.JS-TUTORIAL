// Modules

const names = require('./4-names')
// console.log(names)
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
//console.log(data)
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// this will still work when the names are in strings
// sayHi('john')
// sayHi('peter')

