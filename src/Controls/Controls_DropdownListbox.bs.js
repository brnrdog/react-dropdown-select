// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Controls_Listbox = require("./Controls_Listbox.bs.js");

function useControls(size) {
  var match = React.useState(function () {
        return false;
      });
  var setMenuVisible = match[1];
  var showMenu = function (param) {
    return Curry._1(setMenuVisible, (function (param) {
                  return true;
                }));
  };
  var hideMenu = function (param) {
    return Curry._1(setMenuVisible, (function (param) {
                  return false;
                }));
  };
  var match$1 = Controls_Listbox.useControls(true, size);
  return {
          highlightedIndex: match$1.highlightedIndex,
          menuVisible: match[0],
          selectedIndexes: match$1.selectedIndexes,
          hideMenu: hideMenu,
          highlightFirst: match$1.highlightFirst,
          highlightLast: match$1.highlightLast,
          highlightNext: match$1.highlightNext,
          highlightPrev: match$1.highlightPrev,
          selectHighlighted: match$1.selectHighlighted,
          selectIndex: match$1.selectIndex,
          showMenu: showMenu
        };
}

exports.useControls = useControls;
/* react Not a pure module */
