const packageVersion = require('../../package.json');



// Current Version
const versionNow = packageVersion.version;


console.log('Major' + versionNow.charAt(0));
console.log('Minor' + versionNow.charAt(2));
console.log('Patch' + versionNow.charAt(4));

// const majorOld = versionNow.charAt(0);
// const minorOld = versionNow.charAt(2);
// const patchOld = versionNow.charAt(4);


// var majorOld = new RegExp("\d.");
