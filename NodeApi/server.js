const file_read = require('./fileRead');
const file_write = require('./fileWrite');
const clear_folder = require('./filesFolderClear');
const http = require('http');

function writeTaskWithPromise(
  res,
  cb,
  filename = 'Raj',
  value = 'Hello World!'
) {
  // writing to file with promise
  file_write
    .fileWriteWithPromise(filename + '.txt', value)
    .then((data) => {
      console.log('File is Written with the help of promise');
      res.write('File is Written with the help of promise\n');
      cb();
    })
    .catch((err) => {
      console.log('Error while writing using promise');
      res.write('Error while writing using promise\n');
      cb();
    });
}
function writeTaskWithCallback(
  res,
  cb,
  filename = 'rajc',
  value = 'Hello! I am sleepy.'
) {
  // writing to file with callback
  file_write.fileWriteWithCallback(filename + '.txt', value, (err, done) => {
    if (err) {
      console.log('There was an error while writing file with callback');
      res.write('There was an error while writing file with callback\n');
      cb();
    } else {
      console.log('File is written with the help of callback');
      res.write('File is written with the help of callback\n');
      cb();
    }
  });
}

function readTaskWithPromise(res, cb, filename = 'raj') {
  // reading a file with promise
  console.log(cb);
  file_read
    .readWithPromise(filename + '.txt')
    .then((data) => {
      console.log(data);
      console.log('Reading data from promise completed!');
      res.write(data + '\n');
      res.write('Reading data from promise completed!\n');
      cb();
    })
    .catch((err) => {
      console.log('Error reading the data from file using promise');
      res.write('Error reading the data from file using promise\n');
      cb();
    });
}

function readTaskWithCallback(res, cb, filename = 'rajc') {
  file_read.readWithCallback(filename + '.txt', (err, done) => {
    if (err) {
      console.log('error reading the data from file using callback');
      res.write('error reading the data from file using callback\n');
      cb();
    } else {
      console.log(done);
      console.log('Reading Data from callback completed!');
      res.write(done + '\n');
      res.write('Reading Data from callback completed!\n');
      cb();
    }
  });
}

function readWriteTaskWithCallback(res, cbm) {
  writeTaskWithCallback(
    (res = res),
    (cb = () => {
      readTaskWithCallback(res, () => {
        cbm();
      });
    })
  );
}

function readWriteTaskWithPromise(res, cbm) {
  writeTaskWithPromise(
    (res = res),
    (cb = () =>
      readTaskWithPromise(res, () => {
        cbm();
      }))
  );
}

function doReadwriteTask(req, res, cb) {
  readWriteTaskWithCallback(res, () => {
    readWriteTaskWithPromise(res, () => {
      console.log('Now Wating for 2 seconds');
      res.write('Now Wating for 2 seconds\n');
      setTimeout(() => {
        clear_folder
          .clearFolder('./files/')
          .then((data) => {
            console.log('Folder is now cleared');
            res.write('Folder is now cleared\n');
            cb();
          })
          .catch((err) => {
            console.log('Error in clearing folder');
            res.write('Error in clearing folder\n');
            console.log(err);
            cb();
          });
      }, 2000);
    });
  });
}

var server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  values = req.url.split('/');
  if (values[1] == '') {
    doReadwriteTask(req, res, () => {
      res.end('all task completed');
    });
  }
  let task = values[1];
  let method = value[2];
  let fname = value[3];
  let content = value[4];
  // write/method/filename/content
  if (task == 'write') {
    // for no values given after write
    if (!method) {
      method = 'promise';
    }
    if (!fname) {
      fname = 'test';
    }
    if (!content) {
      content = 'Hello World!';
    }
    // to check and continue the path
    if (method == 'promise') {
      writeTaskWithPromise(
        (res = res),
        (cb = () => {
          res.end('all task completed');
        }),
        (filename = fname),
        (value = content)
      );
    } else {
      writeTaskWithCallback(
        (res = res),
        (cb = () => {
          res.end('all task completed');
        }),
        (filename = fname),
        (value = content)
      );
    }
  } else if (task == 'read') {
    if (!method) {
      method = 'promise';
    }
    if (!fname) {
      fname = 'test';
    }
    if (method == 'promise') {
      readTaskWithPromise(
        (res = res),
        (cb = () => {
          res.end('all task completed');
        }),
        (filename = fname)
      );
    } else {
      readTaskWithCallback(
        (res = res),
        (cb = () => {
          res.end('all task completed');
        }),
        (filename = fname)
      );
    }
  } else if (task == 'clear') {
    clear_folder
      .clearFolder('./files/')
      .then((data) => {
        console.log('Folder is now cleared');
        res.write('Folder is now cleared\n');
        res.end('all task completed');
      })
      .catch((err) => {
        console.log('Error in clearing folder');
        res.write('Error in clearing folder\n');
        console.log(err);
        res.end('all task completed');
      });
  } else {
    res.end('No task To Perform');
  }
});
server.listen(3000, '127.0.0.1', (err, done) => {
  if (err) {
    console.log('Error while listening to the server');
  } else {
    console.log('server is Up');
  }
});
