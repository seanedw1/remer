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

// version bump tool
exports.versionBump = (version, position = 'patch') => {
  const currentVersion = version.split('.');

  const oldMajor = parseInt(currentVersion[0], 10);
  const oldMinor = parseInt(currentVersion[1], 10);
  const oldPatch = parseInt(currentVersion[2], 10);

  let newMajor = 0;
  let newMinor = 0;
  let newPatch = 0;

  if (position === 'major') {
    newMajor = oldMajor + 1;
  } else if (position === 'minor') {
    newMajor = oldMajor;
    newMinor = oldMinor + 1;
  } else if (position === 'patch') {
    newMajor = oldMajor;
    newMinor = oldMinor;
    newPatch = oldPatch + 1;
  } else {
    newMajor = oldMajor;
    newMinor = oldMinor;
    newPatch = oldPatch;
    process.stdout.write('Either you have a type-o or you for got to add what position to bump up.\npositions options ["major", "minor", "patch"]');
  }

  process.stdout.write(newMajor + '.' + newMinor + '.' + newPatch);
  return newMajor + '.' + newMinor + '.' + newPatch;
};
