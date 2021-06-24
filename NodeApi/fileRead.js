const fs = require('fs')
const path = require('path')

// with promise
const customReadWithPromise = (filename) => {
  file_path = path.join('./files', filename)
  return new Promise((resolve, reject) => {
    fs.readFile(file_path, (err, done) => {
      if (err) {
        reject(err)
      } else {
        resolve(done.toString())
      }
    })
  })
}

// with callback
const customReadWithCallback = (filename, cb) => {
  file_path = path.join('./files', filename)
  fs.readFile(file_path, 'UTF-8', (err, done) => {
    cb(err, done)
  })
}

module.exports = {
  readWithPromise: customReadWithPromise,
  readWithCallback: customReadWithCallback,
}
