# extended-logger

Extend console's log, warn, error, info and assert capabilities.

## Usage

```bash

  npm i -S extended-logger@9007199254740991.9007199254740991.9007199254740988

  # go to each file where you are console log/error etc...
  require('extended-logger').installConsole(__dirname, __filename)

  # You can use uninstallConsole for uninstalling and going back to older console functions

```

```javascript

  const consoler = require('./index')
  console.log('should write a lot more than just this line...') // single line
  consoler.installConsole(__dirname, __filename) // install new console functions
  console.log('should write a lot more than just this line...') // three lines: empty, fancy log, actual message
  consoler.uninstallConsole() // uninstall
  console.log('should write a lot more than just this line...') // back to boring

  /* output */
  // should write a lot more than just this line...
  //
  // [Log src/github/gitfaf/extended-logger:simple.test.js 1505751626284]
  // should write a lot more than just this line...
  // should write a lot more than just this line...

```

## Benefits

- It tells what function was called: Log, Error, Info etc.
- It tells you what file it was called from.
- It tells you what time it was called.

## Testing

Just run the simple.test.js file in node

## License

MIT &copy; Git Faf 2017
