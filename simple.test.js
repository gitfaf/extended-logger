const consoler = require('./index')
console.log('should write a lot more than just this line...') // single line
consoler.installConsole(__dirname, __filename) // install new console functions
console.log('should write a lot more than just this line...') // three lines: empty, fancy log, actual message
consoler.uninstallConsole() // uninstall
console.log('should write a lot more than just this line...') // back to boring

/* output */
// should write a lot more than just this line...
//
// [simple.test.js 1505751626284]
// should write a lot more than just this line...
// should write a lot more than just this line...
