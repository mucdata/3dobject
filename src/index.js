import _ from 'lodash';
import '../src/index.css'
import dat from 'dat.gui/build/dat.gui';
import Viewer from '../src/viewer.js';

// just to check that everything works
function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

var control = new Viewer('control3D', 'webgl');
control.clearScene();

// var gui = dat.GUI(),
//     f1 = gui.addFolder('Flow Field');

document.body.appendChild(component());