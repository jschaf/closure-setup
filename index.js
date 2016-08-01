goog.provide('base.index')

goog.require("goog.dom");
goog.require("goog.dom.classes");

var d1 = goog.dom.getElement("decorateme-1");
var d2 = goog.dom.getElement("decorateme-2");
goog.dom.classes.toggle(d1, "aaa");
goog.dom.classes.remove(d1, "bbb");
goog.dom.classes.add(d2, "bbb");

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
base.index = function() {};

YOLO = 3;

hello(3, 2);
