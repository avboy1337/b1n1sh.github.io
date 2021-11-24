// components/tab_groups/public/mojom/tab_group_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/tab_groups/public/mojom/tab_group_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('tabGroups.mojom');


  var Color = {};
  Color.kGrey = 0;
  Color.kBlue = 1;
  Color.kRed = 2;
  Color.kYellow = 3;
  Color.kGreen = 4;
  Color.kPink = 5;
  Color.kPurple = 6;
  Color.kCyan = 7;
  Color.MIN_VALUE = 0;
  Color.MAX_VALUE = 7;

  Color.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
      return true;
    }
    return false;
  };

  Color.toKnownEnumValue = function(value) {
    return value;
  };

  Color.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.Color = Color;
})();