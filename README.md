# Remer

[ ![codeship status for seanedw1/remer](https://codeship.com/projects/92c3f5c0-76cf-0134-e5f4-66667cc72310/status?branch=master)](https://app.codeship.com/projects/179698)


# Getting started

## Install package

To install package

```
npm i remer
```

### Usage

**How to call The Module into a page**

Add this code to top of the page where you use this utility tool
```
const remer = require('remer');
```

start your api in debug mode.

```
DEBUG=true node src/server
```
Note: This will only work if DEBUG=true

### Logging

remer will create and write to a log file on root level of application when enabled.Log will contain robust debugging information about your application.


## Version Bumper

Use this code in your page to export the module.
```
const updateVersion = require('../src/version_updater/vupdate.js');

```

#### Parameters to use

To upgrade `Major` Version use;
```
updateVersion.up('Your Package.json Version','major');
```

To upgrade `Minor` Version use;
```
updateVersion.up('Your Package.json Version','minor');
```
To upgrade `Patch` Version use;
```
updateVersion.up('Your Package.json Version','patch');
```




### Debugging

write it in this format

debug excepts two params one for **title** and one for **status**.

status should be either **success** or **fail** if **undefined** terminal will output magenta title


- Parameter to use:

```
remer.debug('title goes here', 'status');
```

- if you want to console.log a success call then:

```
remer.debug('This router is working, 'success');
```

- if you want to console.log a error message:

```
remer.debug('This router is working, 'fail');
```

###Style Guide reference
[Airbnb](https://github.com/airbnb/javascript)

###Contributors
[View Contributors](https://github.com/seanedw1/remer/graphs/contributors)
