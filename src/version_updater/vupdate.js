const packageVersion = require('../../package.json');


// Current Version
const versionNow = packageVersion.version.split('.');

// Capturing the arrays in to const, splitted by the previous code in line 5
const prevMajor = parseInt(versionNow[0], 10);
const prevMinor = parseInt(versionNow[1], 10);
const prevPatch = parseInt(versionNow[2], 10);



exports.up = (msg, updater) => {
  // If it is major then version will add 1 on major
  if (updater === 'major') {
    const newmajor = prevMajor + 1;
    console.log(newmajor + '.' + prevMinor + '.' + prevPatch);

    // If it is minor then version will add 1 on minor
  } else if (updater === 'minor') {
    const newminor = prevMinor + 1;
    console.log(prevMajor + '.' + newminor + '.' + prevPatch);

    // If it is patch then version will add 1 on patch
  } else if (updater === 'patch') {
    const newpatch = prevMinor + 1;
    console.log(prevMajor + '.' + prevMinor + '.' + newpatch);
  } else {
    console.log('Your Current Package', packageVersion.version)
  }
};
