// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var JestDom = require("bs-jest-dom/src/JestDom.bs.js");
var Listbox = require("../Listbox.bs.js");
var UserEvent = require("@drewschrauf/bs-user-event/src/UserEvent.bs.js");
var ReactTestingLibrary = require("bs-react-testing-library/src/ReactTestingLibrary.bs.js");

function assertAndContinue(param) {
  
}

var options = [
  "Red",
  "Green",
  "Blue"
];

function ListboxTest$ListboxComponent(Props) {
  var match = Listbox.useListbox(options);
  var getOptionProps = match.getOptionProps;
  var highlightedIndex = match.highlightedIndex;
  var match$1 = Curry._1(match.getContainerProps, undefined);
  var onKeyDown = match$1.onKeyDown;
  return React.createElement("div", undefined, React.createElement("ul", {
                  role: match$1.role,
                  tabIndex: match$1.tabIndex,
                  onKeyDown: onKeyDown,
                  onFocus: match$1.onFocus,
                  onBlur: match$1.onBlur
                }, $$Array.mapi((function (index, option) {
                        var match = Curry._1(getOptionProps, index);
                        var highlighted = highlightedIndex === index;
                        return React.createElement("li", {
                                    key: option,
                                    "aria-selected": match["aria-selected"],
                                    role: match.role,
                                    onKeyDown: onKeyDown,
                                    onClick: match.onClick
                                  }, highlighted ? "* " + option : option);
                      }), options)), React.createElement("button", {
                  tabIndex: 0
                }, "Dumb"));
}

var ListboxComponent = {
  options: options,
  make: ListboxTest$ListboxComponent
};

var component = React.createElement(ListboxTest$ListboxComponent, {});

var blur = ReactTestingLibrary.FireEvent.blur;

var click = ReactTestingLibrary.FireEvent.click;

var focus = ReactTestingLibrary.FireEvent.focus;

var pressDown = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "ArrowDown"
    });

var pressUp = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "ArrowUp"
    });

var pressEnter = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "Enter"
    });

var pressSpace = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: " "
    });

var pressEnd = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "End"
    });

var pressHome = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "Home"
    });

var pressEsc = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "Esc"
    });

var pressTab = Curry._1(ReactTestingLibrary.FireEvent.keyDown, {
      key: "Tab"
    });

var FireEvent_abort = ReactTestingLibrary.FireEvent.abort;

var FireEvent_animationEnd = ReactTestingLibrary.FireEvent.animationEnd;

var FireEvent_animationIteration = ReactTestingLibrary.FireEvent.animationIteration;

var FireEvent_animationStart = ReactTestingLibrary.FireEvent.animationStart;

var FireEvent_canPlay = ReactTestingLibrary.FireEvent.canPlay;

var FireEvent_canPlayThrough = ReactTestingLibrary.FireEvent.canPlayThrough;

var FireEvent_change = ReactTestingLibrary.FireEvent.change;

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
  blur: blur,
  canPlay: FireEvent_canPlay,
  canPlayThrough: FireEvent_canPlayThrough,
  change: FireEvent_change,
  click: click,
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
  focus: focus,
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
  pressDown: pressDown,
  pressUp: pressUp,
  pressEnter: pressEnter,
  pressSpace: pressSpace,
  pressEnd: pressEnd,
  pressHome: pressHome,
  pressEsc: pressEsc,
  pressTab: pressTab
};

var partial_arg = {
  NAME: "Str",
  VAL: "listbox"
};

function getListbox(param, param$1) {
  return ReactTestingLibrary.getByRole(partial_arg, param, param$1);
}

function getOption(name) {
  var partial_arg = {
    name: name
  };
  var partial_arg$1 = {
    NAME: "Str",
    VAL: "option"
  };
  return function (param) {
    return ReactTestingLibrary.getByRole(partial_arg$1, partial_arg, param);
  };
}

Jest.test("render listbox container", (function (param) {
        return JestDom.toBeInTheDocument(expect(getListbox(undefined, ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component))));
      }));

Jest.test("renders the options: Red, Green and Blue", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        JestDom.toBeInTheDocument(expect(getOption("Red")(component$1)));
        JestDom.toBeInTheDocument(expect(getOption("Green")(component$1)));
        return JestDom.toBeInTheDocument(expect(getOption("Blue")(component$1)));
      }));

Jest.test("highlights last option when pressing END", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        Curry._1(pressEnd, getOption("Red")(component$1));
        return JestDom.toBeInTheDocument(expect(getOption("* Blue")(component$1)));
      }));

Jest.test("highlights first option when pressing HOME", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        Curry._1(pressHome, getOption("Blue")(component$1));
        return JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
      }));

Jest.test("sets option aria-selected to true when clicked", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        Curry._1(pressEsc, getOption("Red")(component$1));
        Curry._2(click, undefined, getOption("Red")(component$1));
        return JestDom.toHaveAttribute("aria-selected", "true")(expect(getOption("* Red")(component$1)));
      }));

Jest.test("highlights next option when pressing DOWN ", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        var listbox = getListbox(undefined, component$1);
        Curry._1(pressDown, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
        Curry._1(pressDown, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Green")(component$1)));
        Curry._1(pressDown, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Blue")(component$1)));
        Curry._1(pressDown, listbox);
        return JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
      }));

Jest.test("highlights previous option when pressing UP ", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        var listbox = getListbox(undefined, component$1);
        Curry._1(pressUp, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Blue")(component$1)));
        Curry._1(pressUp, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Green")(component$1)));
        Curry._1(pressUp, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
        Curry._1(pressUp, listbox);
        return JestDom.toBeInTheDocument(expect(getOption("* Blue")(component$1)));
      }));

Jest.test("selects and deselects option when pressing SPACE/ENTER", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        Curry._2(click, undefined, getOption("Red")(component$1));
        JestDom.toHaveAttribute("aria-selected", "true")(expect(getOption("* Red")(component$1)));
        Curry._1(pressEnter, getListbox(undefined, component$1));
        JestDom.toHaveAttribute("aria-selected", "false")(expect(getOption("* Red")(component$1)));
        Curry._1(pressSpace, getListbox(undefined, component$1));
        return JestDom.toHaveAttribute("aria-selected", "true")(expect(getOption("* Red")(component$1)));
      }));

Jest.test("highlights first when focused and no option selected", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        var listbox = getListbox(undefined, component$1);
        Curry._2(focus, undefined, listbox);
        return JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
      }));

Jest.test("highlights selected index when focus and option selected", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        Curry._2(click, undefined, getOption("Green")(component$1));
        JestDom.toBeInTheDocument(expect(getOption("* Green")(component$1)));
        Curry._1(pressDown, getListbox(undefined, component$1));
        JestDom.toBeInTheDocument(expect(getOption("* Blue")(component$1)));
        Curry._2(focus, undefined, getListbox(undefined, component$1));
        return JestDom.toBeInTheDocument(expect(getOption("* Green")(component$1)));
      }));

Jest.test("resets highlighted option when focus out", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        var listbox = getListbox(undefined, component$1);
        Curry._1(pressDown, listbox);
        JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
        Curry._2(blur, undefined, listbox);
        return JestDom.toBeInTheDocument(expect(getOption("Red")(component$1)));
      }));

Jest.test("focus out when pressing Tab", (function (param) {
        var component$1 = ReactTestingLibrary.render(undefined, undefined, undefined, undefined, undefined, component);
        UserEvent.tab(undefined, undefined, undefined);
        JestDom.toBeInTheDocument(expect(getOption("* Red")(component$1)));
        UserEvent.tab(undefined, undefined, undefined);
        JestDom.toBeInTheDocument(expect(getOption("Red")(component$1)));
        JestDom.toBeInTheDocument(expect(getOption("Green")(component$1)));
        return JestDom.toBeInTheDocument(expect(getOption("Blue")(component$1)));
      }));

exports.assertAndContinue = assertAndContinue;
exports.ListboxComponent = ListboxComponent;
exports.component = component;
exports.FireEvent = FireEvent;
exports.getListbox = getListbox;
exports.getOption = getOption;
/* component Not a pure module */
