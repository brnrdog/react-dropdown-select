// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var JestDom = require("bs-jest-dom/src/JestDom.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");

var down = {
  key: "ArrowDown"
};

var downShift = {
  key: "ArrowDown",
  shiftKey: true
};

var end = {
  key: "End"
};

var enter = {
  key: "Enter"
};

var esc = {
  key: "Esc"
};

var home = {
  key: "Home"
};

var space = {
  key: " "
};

var tab = {
  key: "Tab"
};

var up = {
  key: "ArrowUp"
};

var upShift = {
  key: "ArrowUp",
  shiftKey: true
};

var Keyboard = {
  down: down,
  downShift: downShift,
  end: end,
  enter: enter,
  esc: esc,
  home: home,
  space: space,
  tab: tab,
  up: up,
  upShift: upShift
};

var pressDown = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(down));

var pressDownShift = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(downShift));

var pressEnd = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(end));

var pressEnter = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(enter));

var pressEsc = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(esc));

var pressHome = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(home));

var pressShiftDown = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(downShift));

var pressSpace = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(space));

var pressTab = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(tab));

var pressUp = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(up));

var pressUpShift = Curry._1(ReactTestingLibrary.FireEvent.keyDown, Caml_option.some(upShift));

var FireEvent_abort = ReactTestingLibrary.FireEvent.abort;

var FireEvent_animationEnd = ReactTestingLibrary.FireEvent.animationEnd;

var FireEvent_animationIteration = ReactTestingLibrary.FireEvent.animationIteration;

var FireEvent_animationStart = ReactTestingLibrary.FireEvent.animationStart;

var FireEvent_blur = ReactTestingLibrary.FireEvent.blur;

var FireEvent_canPlay = ReactTestingLibrary.FireEvent.canPlay;

var FireEvent_canPlayThrough = ReactTestingLibrary.FireEvent.canPlayThrough;

var FireEvent_change = ReactTestingLibrary.FireEvent.change;

var FireEvent_click = ReactTestingLibrary.FireEvent.click;

var FireEvent_compositionEnd = ReactTestingLibrary.FireEvent.compositionEnd;

var FireEvent_compositionStart = ReactTestingLibrary.FireEvent.compositionStart;

var FireEvent_compositionUpdate = ReactTestingLibrary.FireEvent.compositionUpdate;

var FireEvent_contextMenu = ReactTestingLibrary.FireEvent.contextMenu;

var FireEvent_copy = ReactTestingLibrary.FireEvent.copy;

var FireEvent_cut = ReactTestingLibrary.FireEvent.cut;

var FireEvent_dblClick = ReactTestingLibrary.FireEvent.dblClick;

var FireEvent_doubleClick = ReactTestingLibrary.FireEvent.doubleClick;

var FireEvent_drag = ReactTestingLibrary.FireEvent.drag;

var FireEvent_dragEnd = ReactTestingLibrary.FireEvent.dragEnd;

var FireEvent_dragEnter = ReactTestingLibrary.FireEvent.dragEnter;

var FireEvent_dragExit = ReactTestingLibrary.FireEvent.dragExit;

var FireEvent_dragLeave = ReactTestingLibrary.FireEvent.dragLeave;

var FireEvent_dragOver = ReactTestingLibrary.FireEvent.dragOver;

var FireEvent_dragStart = ReactTestingLibrary.FireEvent.dragStart;

var FireEvent_drop = ReactTestingLibrary.FireEvent.drop;

var FireEvent_durationChange = ReactTestingLibrary.FireEvent.durationChange;

var FireEvent_emptied = ReactTestingLibrary.FireEvent.emptied;

var FireEvent_encrypted = ReactTestingLibrary.FireEvent.encrypted;

var FireEvent_ended = ReactTestingLibrary.FireEvent.ended;

var FireEvent_error = ReactTestingLibrary.FireEvent.error;

var FireEvent_focus = ReactTestingLibrary.FireEvent.focus;

var FireEvent_focusIn = ReactTestingLibrary.FireEvent.focusIn;

var FireEvent_focusOut = ReactTestingLibrary.FireEvent.focusOut;

var FireEvent_input = ReactTestingLibrary.FireEvent.input;

var FireEvent_invalid = ReactTestingLibrary.FireEvent.invalid;

var FireEvent_keyDown = ReactTestingLibrary.FireEvent.keyDown;

var FireEvent_keyPress = ReactTestingLibrary.FireEvent.keyPress;

var FireEvent_keyUp = ReactTestingLibrary.FireEvent.keyUp;

var FireEvent_load = ReactTestingLibrary.FireEvent.load;

var FireEvent_loadStart = ReactTestingLibrary.FireEvent.loadStart;

var FireEvent_loadedData = ReactTestingLibrary.FireEvent.loadedData;

var FireEvent_loadedMetadata = ReactTestingLibrary.FireEvent.loadedMetadata;

var FireEvent_mouseDown = ReactTestingLibrary.FireEvent.mouseDown;

var FireEvent_mouseEnter = ReactTestingLibrary.FireEvent.mouseEnter;

var FireEvent_mouseLeave = ReactTestingLibrary.FireEvent.mouseLeave;

var FireEvent_mouseMove = ReactTestingLibrary.FireEvent.mouseMove;

var FireEvent_mouseOut = ReactTestingLibrary.FireEvent.mouseOut;

var FireEvent_mouseOver = ReactTestingLibrary.FireEvent.mouseOver;

var FireEvent_mouseUp = ReactTestingLibrary.FireEvent.mouseUp;

var FireEvent_paste = ReactTestingLibrary.FireEvent.paste;

var FireEvent_pause = ReactTestingLibrary.FireEvent.pause;

var FireEvent_play = ReactTestingLibrary.FireEvent.play;

var FireEvent_playing = ReactTestingLibrary.FireEvent.playing;

var FireEvent_progress = ReactTestingLibrary.FireEvent.progress;

var FireEvent_rateChange = ReactTestingLibrary.FireEvent.rateChange;

var FireEvent_scroll = ReactTestingLibrary.FireEvent.scroll;

var FireEvent_seeked = ReactTestingLibrary.FireEvent.seeked;

var FireEvent_seeking = ReactTestingLibrary.FireEvent.seeking;

var FireEvent_select = ReactTestingLibrary.FireEvent.select;

var FireEvent_stalled = ReactTestingLibrary.FireEvent.stalled;

var FireEvent_submit = ReactTestingLibrary.FireEvent.submit;

var FireEvent_suspend = ReactTestingLibrary.FireEvent.suspend;

var FireEvent_timeUpdate = ReactTestingLibrary.FireEvent.timeUpdate;

var FireEvent_touchCancel = ReactTestingLibrary.FireEvent.touchCancel;

var FireEvent_touchEnd = ReactTestingLibrary.FireEvent.touchEnd;

var FireEvent_touchMove = ReactTestingLibrary.FireEvent.touchMove;

var FireEvent_touchStart = ReactTestingLibrary.FireEvent.touchStart;

var FireEvent_transitionEnd = ReactTestingLibrary.FireEvent.transitionEnd;

var FireEvent_volumeChange = ReactTestingLibrary.FireEvent.volumeChange;

var FireEvent_waiting = ReactTestingLibrary.FireEvent.waiting;

var FireEvent_wheel = ReactTestingLibrary.FireEvent.wheel;

var FireEvent = {
  abort: FireEvent_abort,
  animationEnd: FireEvent_animationEnd,
  animationIteration: FireEvent_animationIteration,
  animationStart: FireEvent_animationStart,
  blur: FireEvent_blur,
  canPlay: FireEvent_canPlay,
  canPlayThrough: FireEvent_canPlayThrough,
  change: FireEvent_change,
  click: FireEvent_click,
  compositionEnd: FireEvent_compositionEnd,
  compositionStart: FireEvent_compositionStart,
  compositionUpdate: FireEvent_compositionUpdate,
  contextMenu: FireEvent_contextMenu,
  copy: FireEvent_copy,
  cut: FireEvent_cut,
  dblClick: FireEvent_dblClick,
  doubleClick: FireEvent_doubleClick,
  drag: FireEvent_drag,
  dragEnd: FireEvent_dragEnd,
  dragEnter: FireEvent_dragEnter,
  dragExit: FireEvent_dragExit,
  dragLeave: FireEvent_dragLeave,
  dragOver: FireEvent_dragOver,
  dragStart: FireEvent_dragStart,
  drop: FireEvent_drop,
  durationChange: FireEvent_durationChange,
  emptied: FireEvent_emptied,
  encrypted: FireEvent_encrypted,
  ended: FireEvent_ended,
  error: FireEvent_error,
  focus: FireEvent_focus,
  focusIn: FireEvent_focusIn,
  focusOut: FireEvent_focusOut,
  input: FireEvent_input,
  invalid: FireEvent_invalid,
  keyDown: FireEvent_keyDown,
  keyPress: FireEvent_keyPress,
  keyUp: FireEvent_keyUp,
  load: FireEvent_load,
  loadStart: FireEvent_loadStart,
  loadedData: FireEvent_loadedData,
  loadedMetadata: FireEvent_loadedMetadata,
  mouseDown: FireEvent_mouseDown,
  mouseEnter: FireEvent_mouseEnter,
  mouseLeave: FireEvent_mouseLeave,
  mouseMove: FireEvent_mouseMove,
  mouseOut: FireEvent_mouseOut,
  mouseOver: FireEvent_mouseOver,
  mouseUp: FireEvent_mouseUp,
  paste: FireEvent_paste,
  pause: FireEvent_pause,
  play: FireEvent_play,
  playing: FireEvent_playing,
  progress: FireEvent_progress,
  rateChange: FireEvent_rateChange,
  scroll: FireEvent_scroll,
  seeked: FireEvent_seeked,
  seeking: FireEvent_seeking,
  select: FireEvent_select,
  stalled: FireEvent_stalled,
  submit: FireEvent_submit,
  suspend: FireEvent_suspend,
  timeUpdate: FireEvent_timeUpdate,
  touchCancel: FireEvent_touchCancel,
  touchEnd: FireEvent_touchEnd,
  touchMove: FireEvent_touchMove,
  touchStart: FireEvent_touchStart,
  transitionEnd: FireEvent_transitionEnd,
  volumeChange: FireEvent_volumeChange,
  waiting: FireEvent_waiting,
  wheel: FireEvent_wheel,
  Keyboard: Keyboard,
  pressDown: pressDown,
  pressDownShift: pressDownShift,
  pressEnd: pressEnd,
  pressEnter: pressEnter,
  pressEsc: pressEsc,
  pressHome: pressHome,
  pressShiftDown: pressShiftDown,
  pressSpace: pressSpace,
  pressTab: pressTab,
  pressUp: pressUp,
  pressUpShift: pressUpShift
};

function assertAndContinue(param) {
  
}

var partial_arg = {
  NAME: "Str",
  VAL: "listbox"
};

function getListbox(param, param$1) {
  return ReactTestingLibrary.getByRole(partial_arg, param, param$1);
}

var partial_arg$1 = {
  NAME: "Str",
  VAL: "button"
};

function getButton(param, param$1) {
  return ReactTestingLibrary.getByRole(partial_arg$1, param, param$1);
}

var HaveClass = JestDom.HaveClass;

var TextContent = JestDom.TextContent;

var toBeDisabled = JestDom.toBeDisabled;

var toBeEnabled = JestDom.toBeEnabled;

var toBeEmpty = JestDom.toBeEmpty;

var toBeEmptyDOMElement = JestDom.toBeEmptyDOMElement;

var toBeInTheDocument = JestDom.toBeInTheDocument;

var toBeInvalid = JestDom.toBeInvalid;

var toBeRequired = JestDom.toBeRequired;

var toBeValid = JestDom.toBeValid;

var toBeVisible = JestDom.toBeVisible;

var toContainElement = JestDom.toContainElement;

var toContainHTML = JestDom.toContainHTML;

var toHaveAttribute = JestDom.toHaveAttribute;

var toHaveClass = JestDom.toHaveClass;

var toHaveFocus = JestDom.toHaveFocus;

var toHaveFormValues = JestDom.toHaveFormValues;

var toHaveStyle = JestDom.toHaveStyle;

var toHaveTextContent = JestDom.toHaveTextContent;

var toHaveValue = JestDom.toHaveValue;

var toHaveDisplayValue = JestDom.toHaveDisplayValue;

var toBeChecked = JestDom.toBeChecked;

var toBePartiallyChecked = JestDom.toBePartiallyChecked;

var toHaveDescription = JestDom.toHaveDescription;

exports.FireEvent = FireEvent;
exports.assertAndContinue = assertAndContinue;
exports.getListbox = getListbox;
exports.getButton = getButton;
exports.HaveClass = HaveClass;
exports.TextContent = TextContent;
exports.toBeDisabled = toBeDisabled;
exports.toBeEnabled = toBeEnabled;
exports.toBeEmpty = toBeEmpty;
exports.toBeEmptyDOMElement = toBeEmptyDOMElement;
exports.toBeInTheDocument = toBeInTheDocument;
exports.toBeInvalid = toBeInvalid;
exports.toBeRequired = toBeRequired;
exports.toBeValid = toBeValid;
exports.toBeVisible = toBeVisible;
exports.toContainElement = toContainElement;
exports.toContainHTML = toContainHTML;
exports.toHaveAttribute = toHaveAttribute;
exports.toHaveClass = toHaveClass;
exports.toHaveFocus = toHaveFocus;
exports.toHaveFormValues = toHaveFormValues;
exports.toHaveStyle = toHaveStyle;
exports.toHaveTextContent = toHaveTextContent;
exports.toHaveValue = toHaveValue;
exports.toHaveDisplayValue = toHaveDisplayValue;
exports.toBeChecked = toBeChecked;
exports.toBePartiallyChecked = toBePartiallyChecked;
exports.toHaveDescription = toHaveDescription;
/* pressDown Not a pure module */
