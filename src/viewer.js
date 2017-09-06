import { Scene, WebGLRenderer, PerspectiveCamera } from 'three/build/three.module';
import * as d3 from 'd3/build/d3';

function Viewer(parent, id) {
    var scene = new Scene(),
        camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
        renderer = new WebGLRenderer();

    var parel = document.getElementById(parent);
    parel.appendChild(renderer.domElement);
    renderer.setSize(parel.clientWidth, parel.clientHeight);

    this.id = id;
    this._objects = [];
    this._scene = scene;
    this.camera = camera;
}

/**
 * clearScene removes all objects from scene.
 *
 */
Viewer.prototype.clearScene = function() {
    this._objects.forEach(function(obj) {
        this.scene.remove(obj);
    });
    this._objects = [];
};

/**
 * ondrag
 *
 * @param {any} callback
 * @returns reference to the control.
 */
Viewer.prototype.ondrag = function(callback) {
    var canvas = d3.select('#' + this.id),
        self = this;
    canvas
        .on('mousedown.__viewer__', function(e) {
            var lastpos = e,
                cb = callback || function() {};

            function move(e) {
                console.log(e);
                cb(e);
            }
            canvas.on('mousemove.__viewer__', move);
            canvas.on('mouseup.__viewer__', undefined);
        });
    return this;
};

export default Viewer;