// content/browser/prerender/prerender_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'content/browser/prerender/prerender_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('content.mojom');
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function PrerenderedPageInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrerenderedPageInfo.prototype.initDefaults_ = function() {
    this.url = null;
    this.triggerPageUrl = null;
    this.finalStatus = null;
  };
  PrerenderedPageInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrerenderedPageInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrerenderedPageInfo.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrerenderedPageInfo.triggerPageUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrerenderedPageInfo.finalStatus
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrerenderedPageInfo.encodedSize = codec.kStructHeaderSize + 24;

  PrerenderedPageInfo.decode = function(decoder) {
    var packed;
    var val = new PrerenderedPageInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.triggerPageUrl =
        decoder.decodeStructPointer(url$.Url);
    val.finalStatus =
        decoder.decodeStruct(codec.String);
    return val;
  };

  PrerenderedPageInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrerenderedPageInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStructPointer(url$.Url, val.triggerPageUrl);
    encoder.encodeStruct(codec.String, val.finalStatus);
  };
  function PrerenderInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrerenderInfo.prototype.initDefaults_ = function() {
    this.prerenderedPageInfos = null;
  };
  PrerenderInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrerenderInfo.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrerenderInfo.prerenderedPageInfos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PrerenderedPageInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrerenderInfo.encodedSize = codec.kStructHeaderSize + 8;

  PrerenderInfo.decode = function(decoder) {
    var packed;
    var val = new PrerenderInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.prerenderedPageInfos =
        decoder.decodeArrayPointer(new codec.PointerTo(PrerenderedPageInfo));
    return val;
  };

  PrerenderInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrerenderInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PrerenderedPageInfo), val.prerenderedPageInfos);
  };
  function PrerenderInternalsHandler_GetPrerenderInfo_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrerenderInternalsHandler_GetPrerenderInfo_Params.prototype.initDefaults_ = function() {
  };
  PrerenderInternalsHandler_GetPrerenderInfo_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrerenderInternalsHandler_GetPrerenderInfo_Params.validate = function(messageValidator, offset) {
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

  PrerenderInternalsHandler_GetPrerenderInfo_Params.encodedSize = codec.kStructHeaderSize + 0;

  PrerenderInternalsHandler_GetPrerenderInfo_Params.decode = function(decoder) {
    var packed;
    var val = new PrerenderInternalsHandler_GetPrerenderInfo_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  PrerenderInternalsHandler_GetPrerenderInfo_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrerenderInternalsHandler_GetPrerenderInfo_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.prototype.initDefaults_ = function() {
    this.infos = null;
  };
  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 16}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.infos
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(PrerenderInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.infos =
        decoder.decodeArrayPointer(new codec.PointerTo(PrerenderInfo));
    return val;
  };

  PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(PrerenderInfo), val.infos);
  };
  var kPrerenderInternalsHandler_GetPrerenderInfo_Name = 1632283295;

  function PrerenderInternalsHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(PrerenderInternalsHandler,
                                                   handleOrPtrInfo);
  }

  function PrerenderInternalsHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        PrerenderInternalsHandler, associatedInterfacePtrInfo);
  }

  PrerenderInternalsHandlerAssociatedPtr.prototype =
      Object.create(PrerenderInternalsHandlerPtr.prototype);
  PrerenderInternalsHandlerAssociatedPtr.prototype.constructor =
      PrerenderInternalsHandlerAssociatedPtr;

  function PrerenderInternalsHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  PrerenderInternalsHandlerPtr.prototype.getPrerenderInfo = function() {
    return PrerenderInternalsHandlerProxy.prototype.getPrerenderInfo
        .apply(this.ptr.getProxy(), arguments);
  };

  PrerenderInternalsHandlerProxy.prototype.getPrerenderInfo = function() {
    var params_ = new PrerenderInternalsHandler_GetPrerenderInfo_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kPrerenderInternalsHandler_GetPrerenderInfo_Name,
          codec.align(PrerenderInternalsHandler_GetPrerenderInfo_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(PrerenderInternalsHandler_GetPrerenderInfo_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function PrerenderInternalsHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  PrerenderInternalsHandlerStub.prototype.getPrerenderInfo = function() {
    return this.delegate_ && this.delegate_.getPrerenderInfo && this.delegate_.getPrerenderInfo();
  }

  PrerenderInternalsHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  PrerenderInternalsHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kPrerenderInternalsHandler_GetPrerenderInfo_Name:
      var params = reader.decodeStruct(PrerenderInternalsHandler_GetPrerenderInfo_Params);
      this.getPrerenderInfo().then(function(response) {
        var responseParams =
            new PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams();
        responseParams.infos = response.infos;
        var builder = new codec.MessageV1Builder(
            kPrerenderInternalsHandler_GetPrerenderInfo_Name,
            codec.align(PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validatePrerenderInternalsHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kPrerenderInternalsHandler_GetPrerenderInfo_Name:
        if (message.expectsResponse())
          paramsClass = PrerenderInternalsHandler_GetPrerenderInfo_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validatePrerenderInternalsHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kPrerenderInternalsHandler_GetPrerenderInfo_Name:
        if (message.isResponse())
          paramsClass = PrerenderInternalsHandler_GetPrerenderInfo_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var PrerenderInternalsHandler = {
    name: 'content.mojom.PrerenderInternalsHandler',
    kVersion: 0,
    ptrClass: PrerenderInternalsHandlerPtr,
    proxyClass: PrerenderInternalsHandlerProxy,
    stubClass: PrerenderInternalsHandlerStub,
    validateRequest: validatePrerenderInternalsHandlerRequest,
    validateResponse: validatePrerenderInternalsHandlerResponse,
  };
  PrerenderInternalsHandlerStub.prototype.validator = validatePrerenderInternalsHandlerRequest;
  PrerenderInternalsHandlerProxy.prototype.validator = validatePrerenderInternalsHandlerResponse;
  exports.PrerenderedPageInfo = PrerenderedPageInfo;
  exports.PrerenderInfo = PrerenderInfo;
  exports.PrerenderInternalsHandler = PrerenderInternalsHandler;
  exports.PrerenderInternalsHandlerPtr = PrerenderInternalsHandlerPtr;
  exports.PrerenderInternalsHandlerAssociatedPtr = PrerenderInternalsHandlerAssociatedPtr;
})();