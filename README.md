# Remer

[ ![codeship status for seanedw1/remer](https://codeship.com/projects/92c3f5c0-76cf-0134-e5f4-66667cc72310/status?branch=master)](https://app.codeship.com/projects/179698)


# Getting started

## Install package

To install package

```bash
npm i remer
```

### Usage

start your api in debug mode.

```javascript
DEBUG=true node src/server
```
### Logging

remer will create a robust debugging information about your application.

### Debugging

write it in this format

debug excepts two params one for title and one for status.

status should be either success or fail if undefined terminal will output magenta title

```javascript
remer.debug('title goes here', 'status');
```

#### The `status` can be 1 of 3 values:
`success`: Denotes that the log is for a successful execution
`warn`: Denotes that the log is for a potential errors in the future
`fail`: Denotes that this log is reporting an error

###Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)

###Contributors
[View Contributors](https://github.com/seanedw1/remer/graphs/contributors)

### Version Bumper
This package has a version bumper feature. You can require it to be used to bump the current version stated in the package.json file.

Ther first parameter should be the version you want bumped up. The intent for this version bupmer is for the version of the `package.json` file. You can single out the `version` in the package.json using `require()`. For example:
```javascript

const version = require('./package.json');

```
</br>

This function bumps up the version based semantic versioning: **MAJOR.MINOR.PATCH** </br>
This function takes 1 of 3 values as the second argument:
`major`: bumps current version up 1 **major** version
`minor`: bumps current version up 1 **minor** version
`patch`: bumps current version up 1 **patch** version

Examples:
```javascript
// create an instance of the version bumper
const versionBumper = require('utilitytoolwash').versionBump;
const version = require('path/to/package.json');

// package.json current version is 1.0.0

// bump up 1 major version
versionBumper(version, 'major'); // returns 2.0.0

// bump up 1 major version
versionBumper(version, 'minor'); // returns 1.1.0

// bump up 1 major version
versionBumper(version, 'patch'); // returns 1.0.1

```
