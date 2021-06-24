const file_read = require('./fileRead')
const file_write = require('./fileWrite')
const clear_folder = require('./filesFolderClear')
const http = require('http')

function writeTaskWithPromise(res, cb) {
  // writing to file with promise
  file_write
    .fileWriteWithPromise('raj.txt', 'Hello! My name is Raj')
    .then((data) => {
      console.log('File is Written with the help of promise')
      res.write('File is Written with the help of promise\n')
      cb()
    })
    .catch((err) => {
      console.log('Error while writing using promise')
      res.write('Error while writing using promise\n')
      cb()
    })
}
function writeTaskWithCallback(res, cb) {
  // writing to file with callback
  file_write.fileWriteWithCallback(
    'rajc.txt',
    'Hello! I am sleepy.',
    (err, done) => {
      if (err) {
        console.log('There was an error while writing file with callback')
        res.write('There was an error while writing file with callback\n')
        cb()
      } else {
        console.log('File is written with the help of callback')
        res.write('File is written with the help of callback\n')
        cb()
      }
    }
  )
}

function readTaskWithPromise(res, cb) {
  // reading a file with promise
  file_read
    .readWithPromise('raj.txt')
    .then((data) => {
      console.log(data)
      console.log('Reading data from promise completed!')
      res.write(data + '\n')
      res.write('Reading data from promise completed!\n')
      cb()
    })
    .catch((err) => {
      console.log('Error reading the data from file using promise')
      res.write('Error reading the data from file using promise\n')
      cb()
    })
}

function readTaskWithCallback(res, cb) {
  file_read.readWithCallback('rajc.txt', (err, done) => {
    if (err) {
      console.log('error reading the data from file using callback')
      res.write('error reading the data from file using callback\n')
      cb()
    } else {
      console.log(done)
      console.log('Reading Data from callback completed!')
      res.write(done + '\n')
      res.write('Reading Data from callback completed!\n')
      cb()
    }
  })
}

function readWriteTaskWithCallback(res, cb) {
  writeTaskWithCallback(res, () => {
    readTaskWithCallback(res, () => {
      cb()
    })
  })
}

function readWriteTaskWithPromise(res, cb) {
  writeTaskWithPromise(res, () =>
    readTaskWithPromise(res, () => {
      cb()
    })
  )
}

function doReadwriteTask(req, res, cb) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  readWriteTaskWithCallback(res, () => {
    readWriteTaskWithPromise(res, () => {
      console.log('Now Wating for 2 seconds')
      res.write('Now Wating for 2 seconds\n')
      setTimeout(() => {
        clear_folder
          .clearFolder('./files/')
          .then((data) => {
            console.log('Folder is now cleared')
            res.write('Folder is now cleared\n')
            cb()
          })
          .catch((err) => {
            console.log('Error in clearing folder')
            res.write('Error in clearing folder\n')
            console.log(err)
            cb()
          })
      }, 2000)
    })
  })
}

var server = http.createServer((req, res) => {
  if (req.url == '/') {
    doReadwriteTask(req, res, () => {
      res.end('all task completed')
    })
  }
})

server.listen(3000, '127.0.0.1', (err, done) => {
  if (err) {
    console.log('Error while listening to the server')
  } else {
    console.log('server is Up')
  }
})
