// chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'chrome/browser/ui/webui/app_service_internals/app_service_internals.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('mojom.appServiceInternals');



  function AppInfo(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppInfo.prototype.initDefaults_ = function() {
    this.id = null;
    this.name = null;
    this.debugInfo = null;
  };
  AppInfo.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppInfo.validate = function(messageValidator, offset) {
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


    // validate AppInfo.id
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppInfo.name
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate AppInfo.debugInfo
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppInfo.encodedSize = codec.kStructHeaderSize + 24;

  AppInfo.decode = function(decoder) {
    var packed;
    var val = new AppInfo();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.String);
    val.name =
        decoder.decodeStruct(codec.String);
    val.debugInfo =
        decoder.decodeStruct(codec.String);
    return val;
  };

  AppInfo.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppInfo.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.id);
    encoder.encodeStruct(codec.String, val.name);
    encoder.encodeStruct(codec.String, val.debugInfo);
  };
  function AppServiceInternalsPageHandler_GetApps_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppServiceInternalsPageHandler_GetApps_Params.prototype.initDefaults_ = function() {
  };
  AppServiceInternalsPageHandler_GetApps_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppServiceInternalsPageHandler_GetApps_Params.validate = function(messageValidator, offset) {
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

  AppServiceInternalsPageHandler_GetApps_Params.encodedSize = codec.kStructHeaderSize + 0;

  AppServiceInternalsPageHandler_GetApps_Params.decode = function(decoder) {
    var packed;
    var val = new AppServiceInternalsPageHandler_GetApps_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AppServiceInternalsPageHandler_GetApps_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppServiceInternalsPageHandler_GetApps_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AppServiceInternalsPageHandler_GetApps_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AppServiceInternalsPageHandler_GetApps_ResponseParams.prototype.initDefaults_ = function() {
    this.appList = null;
  };
  AppServiceInternalsPageHandler_GetApps_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AppServiceInternalsPageHandler_GetApps_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AppServiceInternalsPageHandler_GetApps_ResponseParams.appList
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 0, 8, new codec.PointerTo(AppInfo), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AppServiceInternalsPageHandler_GetApps_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AppServiceInternalsPageHandler_GetApps_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AppServiceInternalsPageHandler_GetApps_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.appList =
        decoder.decodeArrayPointer(new codec.PointerTo(AppInfo));
    return val;
  };

  AppServiceInternalsPageHandler_GetApps_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AppServiceInternalsPageHandler_GetApps_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeArrayPointer(new codec.PointerTo(AppInfo), val.appList);
  };
  var kAppServiceInternalsPageHandler_GetApps_Name = 1066815284;

  function AppServiceInternalsPageHandlerPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AppServiceInternalsPageHandler,
                                                   handleOrPtrInfo);
  }

  function AppServiceInternalsPageHandlerAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AppServiceInternalsPageHandler, associatedInterfacePtrInfo);
  }

  AppServiceInternalsPageHandlerAssociatedPtr.prototype =
      Object.create(AppServiceInternalsPageHandlerPtr.prototype);
  AppServiceInternalsPageHandlerAssociatedPtr.prototype.constructor =
      AppServiceInternalsPageHandlerAssociatedPtr;

  function AppServiceInternalsPageHandlerProxy(receiver) {
    this.receiver_ = receiver;
  }
  AppServiceInternalsPageHandlerPtr.prototype.getApps = function() {
    return AppServiceInternalsPageHandlerProxy.prototype.getApps
        .apply(this.ptr.getProxy(), arguments);
  };

  AppServiceInternalsPageHandlerProxy.prototype.getApps = function() {
    var params_ = new AppServiceInternalsPageHandler_GetApps_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAppServiceInternalsPageHandler_GetApps_Name,
          codec.align(AppServiceInternalsPageHandler_GetApps_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AppServiceInternalsPageHandler_GetApps_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AppServiceInternalsPageHandler_GetApps_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AppServiceInternalsPageHandlerStub(delegate) {
    this.delegate_ = delegate;
  }
  AppServiceInternalsPageHandlerStub.prototype.getApps = function() {
    return this.delegate_ && this.delegate_.getApps && this.delegate_.getApps();
  }

  AppServiceInternalsPageHandlerStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  AppServiceInternalsPageHandlerStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAppServiceInternalsPageHandler_GetApps_Name:
      var params = reader.decodeStruct(AppServiceInternalsPageHandler_GetApps_Params);
      this.getApps().then(function(response) {
        var responseParams =
            new AppServiceInternalsPageHandler_GetApps_ResponseParams();
        responseParams.appList = response.appList;
        var builder = new codec.MessageV1Builder(
            kAppServiceInternalsPageHandler_GetApps_Name,
            codec.align(AppServiceInternalsPageHandler_GetApps_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AppServiceInternalsPageHandler_GetApps_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAppServiceInternalsPageHandlerRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAppServiceInternalsPageHandler_GetApps_Name:
        if (message.expectsResponse())
          paramsClass = AppServiceInternalsPageHandler_GetApps_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAppServiceInternalsPageHandlerResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAppServiceInternalsPageHandler_GetApps_Name:
        if (message.isResponse())
          paramsClass = AppServiceInternalsPageHandler_GetApps_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AppServiceInternalsPageHandler = {
    name: 'mojom.app_service_internals.AppServiceInternalsPageHandler',
    kVersion: 0,
    ptrClass: AppServiceInternalsPageHandlerPtr,
    proxyClass: AppServiceInternalsPageHandlerProxy,
    stubClass: AppServiceInternalsPageHandlerStub,
    validateRequest: validateAppServiceInternalsPageHandlerRequest,
    validateResponse: validateAppServiceInternalsPageHandlerResponse,
  };
  AppServiceInternalsPageHandlerStub.prototype.validator = validateAppServiceInternalsPageHandlerRequest;
  AppServiceInternalsPageHandlerProxy.prototype.validator = validateAppServiceInternalsPageHandlerResponse;
  exports.AppInfo = AppInfo;
  exports.AppServiceInternalsPageHandler = AppServiceInternalsPageHandler;
  exports.AppServiceInternalsPageHandlerPtr = AppServiceInternalsPageHandlerPtr;
  exports.AppServiceInternalsPageHandlerAssociatedPtr = AppServiceInternalsPageHandlerAssociatedPtr;
})();