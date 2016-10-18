// time stamp
const stamp = new Date();

const fs = require('fs');

// Variable seperator to show the date 'stamp'
const seperator = '======' + stamp + '=======';

// Color module is used to color log text
const colors = require('colors');

// utility method of debug
exports.debug = (data, status) => {
  // debug env - if DEBUG=true then run the app
  if (process.env.DEBUG === 'true') {
    // if status is equal to fail
    if (status === 'fail') {
      // seperator date setup text with color red
      const out1 = seperator + '\n \n' + colors.red(data) + '\n \n';
      console.log(out1);
      console.log('log updated sucessfully');

      // if status is equal sucess
    } else if (status === 'success') {
      // seperator date setup text with color green
      const out2 = seperator + '\n \n' + colors.green(data) + '\n \n';
      console.log(out2);
      console.log('log updated sucessfully');

      // if status is undefined
    } else {
      // seperator date setup text with color magenta
      const out3 = seperator + '\n \n' + colors.magenta(data) + '\n \n';
      console.log(out3);
      console.log('log updated sucessfully');

      // closes else
    }
    // closes if debug env
  }
  // closes util module
};
