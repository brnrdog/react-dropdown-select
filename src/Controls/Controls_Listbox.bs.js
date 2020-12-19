// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function firstIndex(_index) {
  return 0;
}

function lastIndex(size, _index) {
  return size - 1 | 0;
}

function nextIndex(size, index) {
  if ((size - index | 0) === 1) {
    return 0;
  } else {
    return index + 1 | 0;
  }
}

function prevIndex(size, index) {
  if (index <= 0) {
    return size - 1 | 0;
  } else {
    return index - 1 | 0;
  }
}

function reset(_index) {
  return -1;
}

var Navigation = {
  firstIndex: firstIndex,
  lastIndex: lastIndex,
  nextIndex: nextIndex,
  prevIndex: prevIndex,
  reset: reset
};

var equals = Caml_obj.caml_equal;

var diff = Caml_obj.caml_notequal;

function selectIndex(keepOpt, multiSelect, setHighlightedIndex, setSelectedIndexes, index) {
  var keep = keepOpt !== undefined ? keepOpt : false;
  Curry._1(setHighlightedIndex, (function (param) {
          return index;
        }));
  Curry._1(setSelectedIndexes, (function (selectedIndexes) {
          var isIncluded = Belt_Array.some(selectedIndexes, (function (param) {
                  return Caml_obj.caml_equal(index, param);
                }));
          if (multiSelect) {
            if (keep) {
              if (isIncluded) {
                return selectedIndexes;
              } else {
                return Belt_Array.concat(selectedIndexes, [index]);
              }
            } else if (isIncluded) {
              return Belt_Array.keep(selectedIndexes, (function (param) {
                            return Caml_obj.caml_notequal(index, param);
                          }));
            } else {
              return Belt_Array.concat(selectedIndexes, [index]);
            }
          } else if (keep) {
            if (isIncluded) {
              return selectedIndexes;
            } else {
              return [index];
            }
          } else {
            return [];
          }
        }));
  
}

function useControls(multiSelectOpt, size) {
  var multiSelect = multiSelectOpt !== undefined ? multiSelectOpt : false;
  var match = React.useState(function () {
        return [];
      });
  var setSelectedIndexes = match[1];
  var match$1 = React.useState(function () {
        return -1;
      });
  var setHighlightedIndex = match$1[1];
  var highlightedIndex = match$1[0];
  var highlightIndex = function (i) {
    return Curry._1(setHighlightedIndex, (function (param) {
                  return i;
                }));
  };
  var highlightFirst = function (param) {
    return Curry._1(setHighlightedIndex, firstIndex);
  };
  var highlightLast = function (param) {
    return Curry._1(setHighlightedIndex, (function (param) {
                  return size - 1 | 0;
                }));
  };
  var highlightNext = function (param) {
    return Curry._1(setHighlightedIndex, (function (param) {
                  return nextIndex(size, param);
                }));
  };
  var highlightPrev = function (param) {
    return Curry._1(setHighlightedIndex, (function (param) {
                  return prevIndex(size, param);
                }));
  };
  var resetHighlighted = function (param) {
    return Curry._1(setHighlightedIndex, reset);
  };
  var selectHighlighted = function (param) {
    return selectIndex(undefined, multiSelect, setHighlightedIndex, setSelectedIndexes, highlightedIndex);
  };
  var selectNext = function (param) {
    return selectIndex(true, multiSelect, setHighlightedIndex, setSelectedIndexes, nextIndex(size, highlightedIndex));
  };
  var selectPrev = function (param) {
    return selectIndex(true, multiSelect, setHighlightedIndex, setSelectedIndexes, prevIndex(size, highlightedIndex));
  };
  return {
          highlightedIndex: highlightedIndex,
          highlightFirst: highlightFirst,
          highlightIndex: highlightIndex,
          highlightLast: highlightLast,
          highlightNext: highlightNext,
          highlightPrev: highlightPrev,
          resetHighlighted: resetHighlighted,
          selectedIndexes: match[0],
          selectHighlighted: selectHighlighted,
          selectIndex: (function (eta) {
              return selectIndex(undefined, multiSelect, setHighlightedIndex, setSelectedIndexes, eta);
            }),
          selectNext: selectNext,
          selectPrev: selectPrev
        };
}

exports.Navigation = Navigation;
exports.equals = equals;
exports.diff = diff;
exports.selectIndex = selectIndex;
exports.useControls = useControls;
/* react Not a pure module */
