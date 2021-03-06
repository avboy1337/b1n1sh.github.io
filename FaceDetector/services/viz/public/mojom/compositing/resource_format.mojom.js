// services/viz/public/mojom/compositing/resource_format.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/viz/public/mojom/compositing/resource_format.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('viz.mojom');


  var ResourceFormat = {};
  ResourceFormat.RGBA_8888 = 0;
  ResourceFormat.RGBA_4444 = 1;
  ResourceFormat.BGRA_8888 = 2;
  ResourceFormat.ALPHA_8 = 3;
  ResourceFormat.LUMINANCE_8 = 4;
  ResourceFormat.RGB_565 = 5;
  ResourceFormat.BGR_565 = 6;
  ResourceFormat.ETC1 = 7;
  ResourceFormat.RED_8 = 8;
  ResourceFormat.RG_88 = 9;
  ResourceFormat.LUMINANCE_F16 = 10;
  ResourceFormat.RGBA_F16 = 11;
  ResourceFormat.R16_EXT = 12;
  ResourceFormat.RG16_EXT = 13;
  ResourceFormat.RGBX_8888 = 14;
  ResourceFormat.BGRX_8888 = 15;
  ResourceFormat.RGBX_1010102 = 16;
  ResourceFormat.BGRX_1010102 = 17;
  ResourceFormat.YVU_420 = 18;
  ResourceFormat.YUV_420_BIPLANAR = 19;
  ResourceFormat.P010 = 20;
  ResourceFormat.MIN_VALUE = 0;
  ResourceFormat.MAX_VALUE = 20;

  ResourceFormat.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  ResourceFormat.toKnownEnumValue = function(value) {
    return value;
  };

  ResourceFormat.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  exports.ResourceFormat = ResourceFormat;
})();