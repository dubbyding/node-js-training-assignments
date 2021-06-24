const fs = require('fs')
const path = require('path')

// as promise

const customFileWriteWithPromise = (filename, content) => {
  file_path = path.join('./files', filename)
  return new Promise((resolve, reject) => {
    fs.writeFile(file_path, content, (err, done) => {
      if (err) {
        reject(err)
      } else {
        resolve(done)
      }
    })
  })
}

// with Callback
const customFileWriteWithCallback = (filename, content, cb) => {
  file_path = path.join('./files', filename)
  fs.writeFile(file_path, content, (err, done) => {
    cb(err, done)
  })
}

module.exports = {
  fileWriteWithPromise: customFileWriteWithPromise,
  fileWriteWithCallback: customFileWriteWithCallback,
}
