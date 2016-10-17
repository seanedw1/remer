// time stamp
const stamp = new Date();

const fs = require('fs');

const seperator = '======' + stamp + '=======';

const colors = require('colors');

// utility method of debug
exports.debug = (data, status) => {
  // debug env
  if (process.env.DEBUG) {
    if (status === 'fail') {
      const out1 = seperator + '\n \n' + colors.red(data) + '\n \n';
      fs.appendFile('./error.log', out1, (err) => {
        if (err) throw err;
        // closing fs appendfile
      });
      console.log(out1);
    } else if (status === 'sucess') {
      const out2 = seperator + '\n \n' + colors.green(data) + '\n \n';
      fs.appendFile('./error.log', out2, (err) => {
        if (err) throw err;
      }); // closing fs appendfile
      console.log(out2);
      // if status is undefined
    } else {
      const out3 = seperator + '\n \n' + colors.magenta(data) + '\n \n';
      fs.appendFile('./error.log', out3, (err) => {
        if (err) throw err;
      }); // closing fs appendfile
      console.log(out3);
    } // closes else
    console.log('log updated sucessfully');
  } // closes if debug env
}; // closes util module
