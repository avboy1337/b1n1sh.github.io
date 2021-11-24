// third_party/blink/public/mojom/loader/transferrable_url_loader.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/loader/transferrable_url_loader.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var url_response_head$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_response_head.mojom', '../../../../../services/network/public/mojom/url_response_head.mojom.js');
  }
  var url_loader$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/url_loader.mojom', '../../../../../services/network/public/mojom/url_loader.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function TransferrableURLLoader(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TransferrableURLLoader.prototype.initDefaults_ = function() {
    this.url = null;
    this.urlLoader = new url_loader$.URLLoaderPtr();
    this.urlLoaderClient = new bindings.InterfaceRequest();
    this.head = null;
  };
  TransferrableURLLoader.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TransferrableURLLoader.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 40}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferrableURLLoader.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferrableURLLoader.urlLoader
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 8, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferrableURLLoader.urlLoaderClient
    err = messageValidator.validateInterfaceRequest(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TransferrableURLLoader.head
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url_response_head$.URLResponseHead, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TransferrableURLLoader.encodedSize = codec.kStructHeaderSize + 32;

  TransferrableURLLoader.decode = function(decoder) {
    var packed;
    var val = new TransferrableURLLoader();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.urlLoader =
        decoder.decodeStruct(new codec.Interface(url_loader$.URLLoaderPtr));
    val.urlLoaderClient =
        decoder.decodeStruct(codec.InterfaceRequest);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.head =
        decoder.decodeStructPointer(url_response_head$.URLResponseHead);
    return val;
  };

  TransferrableURLLoader.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TransferrableURLLoader.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(new codec.Interface(url_loader$.URLLoaderPtr), val.urlLoader);
    encoder.encodeStruct(codec.InterfaceRequest, val.urlLoaderClient);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStructPointer(url_response_head$.URLResponseHead, val.head);
  };
  exports.TransferrableURLLoader = TransferrableURLLoader;
})();