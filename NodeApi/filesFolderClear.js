const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

function customClearFilesInFolder(dirpath) {
  return new Promise((res, rej) => {
    fs.readdir(dirpath, (err, data) => {
      if (err) {
        console.log('Error reading directory', err)
      } else {
        data.forEach((file) => {
          file_path = path.join(dirpath, file)
          fs.rm(file_path, (err, done) => {
            if (err) {
              rej(err)
            } else {
              res(done)
            }
          })
        })
      }
    })
  })
}

module.exports = {
  clearFolder: customClearFilesInFolder,
}
