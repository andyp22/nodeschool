/* global window:true */
/* global alert:true */
/* eslint no-alert: "off" */
/* eslint new-cap: "off" */
/* eslint no-unused-vars: "off" */

const picture = require('cat-picture');
const image = require('lightning-image-poly');
const remote = require('electron').remote;
const fs = require('fs');

const src = picture.src;
picture.remove();

const save = () => {
  remote.getCurrentWindow().webContents.printToPDF({
    portrait: true,
  }, (err, data) => {
    fs.writeFile('annotation.pdf', data, (error) => {
      if (error) alert(`Error generating pdf! ${error.message}`);
      else alert('pdf saved!');
    });
  });
};

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 80) save();
});

const viz = new image('#visualization', null, [src], { hullAlgorithm: 'convex' });
