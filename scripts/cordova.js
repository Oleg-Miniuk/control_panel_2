/* eslint-disable no-console */
const fs = require('fs-extra');
const path = require('path');

const buildPath = path.join(__dirname, '../build_prod');
const cordovaPath = path.join(__dirname, '../cordova/www');

fs.move(buildPath, cordovaPath, { overwrite: true },
  (error) => {
    if (error) { console.error(error); }
  });
