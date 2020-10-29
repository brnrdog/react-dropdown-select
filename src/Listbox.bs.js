// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var EventHandlers = require("./EventHandlers.bs.js");
var Controls_Listbox = require("./Controls/Controls_Listbox.bs.js");

function noop(param) {
  
}

function useListbox(options, multiSelectOpt, param) {
  var multiSelect = multiSelectOpt !== undefined ? multiSelectOpt : false;
  var size = options.length;
  var match = Controls_Listbox.useControls(multiSelect, size);
  var selectIndex = match.selectIndex;
  var selectHighlighted = match.selectHighlighted;
  var resetHighlighted = match.resetHighlighted;
  var highlightPrev = match.highlightPrev;
  var highlightNext = match.highlightNext;
  var highlightLast = match.highlightLast;
  var highlightFirst = match.highlightFirst;
  var highlightIndex = match.highlightIndex;
  var selectedIndexes = match.selectedIndexes;
  var getOptionProps = function (index) {
    return {
            "aria-selected": Belt_Array.some(selectedIndexes, (function (i) {
                    return i === index;
                  })),
            role: "option",
            onClick: (function (param) {
                return EventHandlers.onClick(index, selectIndex, param);
              })
          };
  };
  var getContainerProps = function (param) {
    return {
            role: "listbox",
            tabIndex: 0,
            onBlur: (function (param) {
                return EventHandlers.onBlur(resetHighlighted, param);
              }),
            onKeyDown: (function (param) {
                return EventHandlers.onKeyDown(true, noop, highlightFirst, highlightLast, highlightNext, highlightPrev, selectHighlighted, (function (param) {
                              
                            }), param);
              }),
            onFocus: (function (param) {
                return EventHandlers.onFocus(selectedIndexes, highlightIndex, param);
              })
          };
  };
  return {
          highlightedIndex: match.highlightedIndex,
          selectedIndexes: selectedIndexes,
          getOptionProps: getOptionProps,
          getContainerProps: getContainerProps
        };
}

exports.noop = noop;
exports.useListbox = useListbox;
/* Controls_Listbox Not a pure module */
