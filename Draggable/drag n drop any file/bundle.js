(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const dragDrop = require('drag-drop')

dragDrop('#dropTarget', (files, pos, fileList, directories) => {
  console.log('Here are the dropped files', files) // Array of File objects
  console.log('Dropped at coordinates', pos.x, pos.y)
  console.log('Here is the raw FileList object if you need it:', fileList)
  console.log('Here is the list of directories:', directories)
  for(x of files){
    console.log(new Date(x.lastModified).toLocaleString());
  }
})

},{"drag-drop":2}],2:[function(require,module,exports){
/*! drag-drop. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = dragDrop
module.exports.processItems = processItems

const parallel = require('run-parallel')

function dragDrop (elem, listeners) {
  if (typeof elem === 'string') {
    const selector = elem
    elem = window.document.querySelector(elem)
    if (!elem) {
      throw new Error(`"${selector}" does not match any HTML elements`)
    }
  }

  if (!elem) {
    throw new Error(`"${elem}" is not a valid HTML element`)
  }

  if (typeof listeners === 'function') {
    listeners = { onDrop: listeners }
  }

  elem.addEventListener('dragenter', onDragEnter, false)
  elem.addEventListener('dragover', onDragOver, false)
  elem.addEventListener('dragleave', onDragLeave, false)
  elem.addEventListener('drop', onDrop, false)

  let isEntered = false
  let numIgnoredEnters = 0

  // Function to remove drag-drop listeners
  return function cleanup () {
    removeDragClass()
    elem.removeEventListener('dragenter', onDragEnter, false)
    elem.removeEventListener('dragover', onDragOver, false)
    elem.removeEventListener('dragleave', onDragLeave, false)
    elem.removeEventListener('drop', onDrop, false)
  }

  function isEventHandleable (event) {
    if (event.dataTransfer.items || event.dataTransfer.types) {
      // Only add "drag" class when `items` contains items that are able to be
      // handled by the registered listeners (files vs. text)
      const items = Array.from(event.dataTransfer.items)
      const types = Array.from(event.dataTransfer.types)

      let fileItems
      let textItems
      if (items.length) {
        fileItems = items.filter(item => { return item.kind === 'file' })
        textItems = items.filter(item => { return item.kind === 'string' })
      } else if (types.length) {
        // event.dataTransfer.items is empty during 'dragover' in Safari, so use
        // event.dataTransfer.types as a fallback
        fileItems = types.filter(item => item === 'Files')
        textItems = types.filter(item => item.startsWith('text/'))
      } else {
        return false
      }

      if (fileItems.length === 0 && !listeners.onDropText) return false
      if (textItems.length === 0 && !listeners.onDrop) return false
      if (fileItems.length === 0 && textItems.length === 0) return false

      return true
    }
    return false
  }

  function onDragEnter (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (isEntered) {
      numIgnoredEnters += 1
      return false // early return
    }

    isEntered = true

    if (listeners.onDragEnter) {
      listeners.onDragEnter(event)
    }

    addDragClass()

    return false
  }

  function onDragOver (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (listeners.onDragOver) {
      listeners.onDragOver(event)
    }

    event.dataTransfer.dropEffect = 'copy'

    return false
  }

  function onDragLeave (event) {
    event.stopPropagation()
    event.preventDefault()

    if (!isEventHandleable(event)) return

    if (numIgnoredEnters > 0) {
      numIgnoredEnters -= 1
      return false
    }

    isEntered = false

    if (listeners.onDragLeave) {
      listeners.onDragLeave(event)
    }

    removeDragClass()

    return false
  }

  function onDrop (event) {
    event.stopPropagation()
    event.preventDefault()

    if (listeners.onDragLeave) {
      listeners.onDragLeave(event)
    }

    removeDragClass()

    isEntered = false
    numIgnoredEnters = 0

    const pos = {
      x: event.clientX,
      y: event.clientY
    }

    // text drop support
    const text = event.dataTransfer.getData('text')
    if (text && listeners.onDropText) {
      listeners.onDropText(text, pos)
    }

    // File drop support. The `dataTransfer.items` API supports directories, so we
    // use it instead of `dataTransfer.files`, even though it's much more
    // complicated to use.
    // See: https://github.com/feross/drag-drop/issues/39
    if (listeners.onDrop && event.dataTransfer.items) {
      processItems(event.dataTransfer.items, (err, files, directories) => {
        if (err) {
          // TODO: A future version of this library might expose this somehow
          console.error(err)
          return
        }

        if (files.length === 0) return

        const fileList = event.dataTransfer.files

        // TODO: This callback has too many arguments, and the order is too
        // arbitrary. In next major version, it should be cleaned up.
        listeners.onDrop(files, pos, fileList, directories)
      })
    }

    return false
  }

  function addDragClass () {
    elem.classList.add('drag')
  }

  function removeDragClass () {
    elem.classList.remove('drag')
  }
}

function processItems (items, cb) {
  // Handle directories in Chrome using the proprietary FileSystem API
  items = Array.from(items).filter(item => {
    return item.kind === 'file'
  })

  if (items.length === 0) {
    cb(null, [], [])
  }

  parallel(items.map(item => {
    return cb => {
      processEntry(item.webkitGetAsEntry(), cb)
    }
  }), (err, results) => {
    // This catches permission errors with file:// in Chrome
    if (err) {
      cb(err)
      return
    }

    const entries = results.flat(Infinity)

    const files = entries.filter(item => {
      return item.isFile
    })

    const directories = entries.filter(item => {
      return item.isDirectory
    })

    cb(null, files, directories)
  })
}

function processEntry (entry, cb) {
  let entries = []

  if (entry.isFile) {
    entry.file(file => {
      file.fullPath = entry.fullPath // preserve path for consumer
      file.isFile = true
      file.isDirectory = false
      cb(null, file)
    }, err => {
      cb(err)
    })
  } else if (entry.isDirectory) {
    const reader = entry.createReader()
    readEntries(reader)
  }

  function readEntries (reader) {
    reader.readEntries(currentEntries => {
      if (currentEntries.length > 0) {
        entries = entries.concat(Array.from(currentEntries))
        readEntries(reader) // continue reading entries until `readEntries` returns no more
      } else {
        doneEntries()
      }
    })
  }

  function doneEntries () {
    parallel(entries.map(entry => {
      return cb => {
        processEntry(entry, cb)
      }
    }), (err, results) => {
      if (err) {
        cb(err)
      } else {
        results.push({
          fullPath: entry.fullPath,
          name: entry.name,
          isFile: false,
          isDirectory: true
        })
        cb(null, results)
      }
    })
  }
}

},{"run-parallel":4}],3:[function(require,module,exports){
(function (global){(function (){
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask.bind(typeof window !== 'undefined' ? window : global)
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
module.exports = runParallel

const queueMicrotask = require('queue-microtask')

function runParallel (tasks, cb) {
  let results, pending, keys
  let isSync = true

  if (Array.isArray(tasks)) {
    results = []
    pending = tasks.length
  } else {
    keys = Object.keys(tasks)
    results = {}
    pending = keys.length
  }

  function done (err) {
    function end () {
      if (cb) cb(err, results)
      cb = null
    }
    if (isSync) queueMicrotask(end)
    else end()
  }

  function each (i, err, result) {
    results[i] = result
    if (--pending === 0 || err) {
      done(err)
    }
  }

  if (!pending) {
    // empty
    done(null)
  } else if (keys) {
    // object
    keys.forEach(function (key) {
      tasks[key](function (err, result) { each(key, err, result) })
    })
  } else {
    // array
    tasks.forEach(function (task, i) {
      task(function (err, result) { each(i, err, result) })
    })
  }

  isSync = false
}

},{"queue-microtask":3}]},{},[1]);
