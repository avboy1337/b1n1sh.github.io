// services/network/public/mojom/url_loader_completion_status.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/url_loader_completion_status.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('network.mojom');



  function URLLoaderCompletionStatus(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  URLLoaderCompletionStatus.prototype.initDefaults_ = function() {
  };
  URLLoaderCompletionStatus.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  URLLoaderCompletionStatus.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 8}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  URLLoaderCompletionStatus.encodedSize = codec.kStructHeaderSize + 0;

  URLLoaderCompletionStatus.decode = function(decoder) {
    var packed;
    var val = new URLLoaderCompletionStatus();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  URLLoaderCompletionStatus.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(URLLoaderCompletionStatus.encodedSize);
    encoder.writeUint32(0);
  };
  exports.URLLoaderCompletionStatus = URLLoaderCompletionStatus;
})();