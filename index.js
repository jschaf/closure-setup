goog.module('base.index')

var dom = goog.require("goog.dom");
var classes = goog.require("goog.dom.classes");

var d1 = dom.getElement("decorateme-1");
var d2 = dom.getElement("decorateme-2");
classes.toggle(d1, "aaa");
classes.remove(d1, "bbb");
classes.add(d2, "bbb");

/** @const {number} */
var YOLO = 2;

/**
 * @param {string} longName
 *
 */
function hello(longName) {
    alert('hello, ' + longName);
}

/** @record */
var index = function() {};

YOLO = 3;

hello(3, 2);

exports = index;
