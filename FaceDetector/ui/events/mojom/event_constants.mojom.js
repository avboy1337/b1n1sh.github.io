// ui/events/mojom/event_constants.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/events/mojom/event_constants.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('ui.mojom');


  var EVENT_FLAG_NONE = 0x00000;
  var EVENT_FLAG_IS_SYNTHESIZED = 0x00001;
  var EVENT_FLAG_SHIFT_DOWN = 0x00002;
  var EVENT_FLAG_CONTROL_DOWN = 0x00004;
  var EVENT_FLAG_ALT_DOWN = 0x00008;
  var EVENT_FLAG_COMMAND_DOWN = 0x00010;
  var EVENT_FLAG_ALTGR_DOWN = 0x00020;
  var EVENT_FLAG_MOD3_DOWN = 0x00040;
  var EVENT_FLAG_NUM_LOCK_ON = 0x00080;
  var EVENT_FLAG_CAPS_LOCK_ON = 0x00100;
  var EVENT_FLAG_SCROLL_LOCK_ON = 0x00200;
  var EVENT_FLAG_LEFT_MOUSE_BUTTON = 0x00400;
  var EVENT_FLAG_MIDDLE_MOUSE_BUTTON = 0x00800;
  var EVENT_FLAG_RIGHT_MOUSE_BUTTON = 0x01000;
  var EVENT_FLAG_BACK_MOUSE_BUTTON = 0x02000;
  var EVENT_FLAG_FORWARD_MOUSE_BUTTON = 0x04000;
  var MOUSE_EVENT_FLAG_IS_DOUBLE_CLICK = 0x08000;
  var MOUSE_EVENT_FLAG_IS_TRIPLE_CLICK = 0x10000;
  var MOUSE_EVENT_FLAG_IS_NON_CLIENT = 0x20000;
  var AcceleratorPhase = {};
  AcceleratorPhase.PRE_TARGET = 0;
  AcceleratorPhase.POST_TARGET = 1;
  AcceleratorPhase.MIN_VALUE = 0;
  AcceleratorPhase.MAX_VALUE = 1;

  AcceleratorPhase.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
      return true;
    }
    return false;
  };

  AcceleratorPhase.toKnownEnumValue = function(value) {
    return value;
  };

  AcceleratorPhase.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var EventType = {};
  EventType.UNKNOWN = 0;
  EventType.KEY_PRESSED = 1;
  EventType.KEY_RELEASED = 2;
  EventType.GESTURE_TAP = 3;
  EventType.GESTURE_SWIPE = 4;
  EventType.GESTURE_PINCH_BEGIN = 5;
  EventType.GESTURE_PINCH_END = 6;
  EventType.GESTURE_PINCH_UPDATE = 7;
  EventType.SCROLL = 8;
  EventType.SCROLL_FLING_START = 9;
  EventType.SCROLL_FLING_CANCEL = 10;
  EventType.CANCEL_MODE = 11;
  EventType.MOUSE_PRESSED_EVENT = 12;
  EventType.MOUSE_DRAGGED_EVENT = 13;
  EventType.MOUSE_RELEASED_EVENT = 14;
  EventType.MOUSE_MOVED_EVENT = 15;
  EventType.MOUSE_ENTERED_EVENT = 16;
  EventType.MOUSE_EXITED_EVENT = 17;
  EventType.MOUSE_WHEEL_EVENT = 18;
  EventType.MOUSE_CAPTURE_CHANGED_EVENT = 19;
  EventType.TOUCH_RELEASED = 20;
  EventType.TOUCH_PRESSED = 21;
  EventType.TOUCH_MOVED = 22;
  EventType.TOUCH_CANCELLED = 23;
  EventType.MIN_VALUE = 0;
  EventType.MAX_VALUE = 23;

  EventType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return true;
    }
    return false;
  };

  EventType.toKnownEnumValue = function(value) {
    return value;
  };

  EventType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var EventPointerType = {};

  EventPointerType.isKnownEnumValue = function(value) {
    return false;
  };

  EventPointerType.toKnownEnumValue = function(value) {
    return value;
  };

  EventPointerType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var ScrollEventPhase = {};
  ScrollEventPhase.kNone = 0;
  ScrollEventPhase.kBegan = 1;
  ScrollEventPhase.kUpdate = 2;
  ScrollEventPhase.kEnd = 3;
  ScrollEventPhase.MIN_VALUE = 0;
  ScrollEventPhase.MAX_VALUE = 3;

  ScrollEventPhase.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    }
    return false;
  };

  ScrollEventPhase.toKnownEnumValue = function(value) {
    return value;
  };

  ScrollEventPhase.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var EventMomentumPhase = {};
  EventMomentumPhase.NONE = 0;
  EventMomentumPhase.BEGAN = 1;
  EventMomentumPhase.MAY_BEGIN = 2;
  EventMomentumPhase.INERTIAL_UPDATE = 3;
  EventMomentumPhase.END = 4;
  EventMomentumPhase.BLOCKED = 5;
  EventMomentumPhase.MIN_VALUE = 0;
  EventMomentumPhase.MAX_VALUE = 5;

  EventMomentumPhase.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return true;
    }
    return false;
  };

  EventMomentumPhase.toKnownEnumValue = function(value) {
    return value;
  };

  EventMomentumPhase.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var GestureDeviceType = {};
  GestureDeviceType.DEVICE_UNKNOWN = 0;
  GestureDeviceType.DEVICE_TOUCHPAD = 1;
  GestureDeviceType.DEVICE_TOUCHSCREEN = 2;
  GestureDeviceType.MIN_VALUE = 0;
  GestureDeviceType.MAX_VALUE = 2;

  GestureDeviceType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  GestureDeviceType.toKnownEnumValue = function(value) {
    return value;
  };

  GestureDeviceType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.EVENT_FLAG_NONE = EVENT_FLAG_NONE;
  exports.EVENT_FLAG_IS_SYNTHESIZED = EVENT_FLAG_IS_SYNTHESIZED;
  exports.EVENT_FLAG_SHIFT_DOWN = EVENT_FLAG_SHIFT_DOWN;
  exports.EVENT_FLAG_CONTROL_DOWN = EVENT_FLAG_CONTROL_DOWN;
  exports.EVENT_FLAG_ALT_DOWN = EVENT_FLAG_ALT_DOWN;
  exports.EVENT_FLAG_COMMAND_DOWN = EVENT_FLAG_COMMAND_DOWN;
  exports.EVENT_FLAG_ALTGR_DOWN = EVENT_FLAG_ALTGR_DOWN;
  exports.EVENT_FLAG_MOD3_DOWN = EVENT_FLAG_MOD3_DOWN;
  exports.EVENT_FLAG_NUM_LOCK_ON = EVENT_FLAG_NUM_LOCK_ON;
  exports.EVENT_FLAG_CAPS_LOCK_ON = EVENT_FLAG_CAPS_LOCK_ON;
  exports.EVENT_FLAG_SCROLL_LOCK_ON = EVENT_FLAG_SCROLL_LOCK_ON;
  exports.EVENT_FLAG_LEFT_MOUSE_BUTTON = EVENT_FLAG_LEFT_MOUSE_BUTTON;
  exports.EVENT_FLAG_MIDDLE_MOUSE_BUTTON = EVENT_FLAG_MIDDLE_MOUSE_BUTTON;
  exports.EVENT_FLAG_RIGHT_MOUSE_BUTTON = EVENT_FLAG_RIGHT_MOUSE_BUTTON;
  exports.EVENT_FLAG_BACK_MOUSE_BUTTON = EVENT_FLAG_BACK_MOUSE_BUTTON;
  exports.EVENT_FLAG_FORWARD_MOUSE_BUTTON = EVENT_FLAG_FORWARD_MOUSE_BUTTON;
  exports.MOUSE_EVENT_FLAG_IS_DOUBLE_CLICK = MOUSE_EVENT_FLAG_IS_DOUBLE_CLICK;
  exports.MOUSE_EVENT_FLAG_IS_TRIPLE_CLICK = MOUSE_EVENT_FLAG_IS_TRIPLE_CLICK;
  exports.MOUSE_EVENT_FLAG_IS_NON_CLIENT = MOUSE_EVENT_FLAG_IS_NON_CLIENT;
  exports.AcceleratorPhase = AcceleratorPhase;
  exports.EventType = EventType;
  exports.EventPointerType = EventPointerType;
  exports.ScrollEventPhase = ScrollEventPhase;
  exports.EventMomentumPhase = EventMomentumPhase;
  exports.GestureDeviceType = GestureDeviceType;
})();