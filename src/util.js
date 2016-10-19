// time stamp
const stamp = new Date();

const seperator = '======' + stamp + '=======';

const colors = require('colors');

// utility method of debug
exports.debug = (data, status) => {
  // debug env
  let state;
  let output;
  if (process.env.DEBUG) {
    if (status === 'fail') {
      output = seperator + '\n' + colors.red(data) + '\n\n';
      state = status;
      console.error(output);
    } else if (status === 'sucess') {
      output = seperator + '\n' + colors.green(data) + '\n\n';
      state = status;
      console.log(output);
      // if status is undefined
    } else {
      output = seperator + '\n' + colors.magenta(data) + '\n\n';
      console.warn(output);
      state = 'warn';
    } // closes else
    console.log('log updated sucessfully');
    return state;
  } // closes if debug env
}; // closes util module
