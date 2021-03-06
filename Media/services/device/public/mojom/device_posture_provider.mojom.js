// services/device/public/mojom/device_posture_provider.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/device/public/mojom/device_posture_provider.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('device.mojom');


  var DevicePostureType = {};
  DevicePostureType.kContinuous = 0;
  DevicePostureType.kFolded = 1;
  DevicePostureType.kFoldedOver = 2;
  DevicePostureType.MIN_VALUE = 0;
  DevicePostureType.MAX_VALUE = 2;

  DevicePostureType.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  DevicePostureType.toKnownEnumValue = function(value) {
    return value;
  };

  DevicePostureType.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function DevicePostureProvider_AddListenerAndGetCurrentPosture_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.prototype.initDefaults_ = function() {
    this.client = new DevicePostureProviderClientPtr();
  };
  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentPosture_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(new codec.Interface(DevicePostureProviderClientPtr));
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(new codec.Interface(DevicePostureProviderClientPtr), val.client);
  };
  function DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.prototype.initDefaults_ = function() {
    this.posture = 0;
  };
  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.posture
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DevicePostureType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.posture =
        decoder.decodeStruct(new codec.Enum(DevicePostureType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.posture);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function DevicePostureProviderClient_OnPostureChanged_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  DevicePostureProviderClient_OnPostureChanged_Params.prototype.initDefaults_ = function() {
    this.posture = 0;
  };
  DevicePostureProviderClient_OnPostureChanged_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  DevicePostureProviderClient_OnPostureChanged_Params.validate = function(messageValidator, offset) {
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


    // validate DevicePostureProviderClient_OnPostureChanged_Params.posture
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, DevicePostureType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  DevicePostureProviderClient_OnPostureChanged_Params.encodedSize = codec.kStructHeaderSize + 8;

  DevicePostureProviderClient_OnPostureChanged_Params.decode = function(decoder) {
    var packed;
    var val = new DevicePostureProviderClient_OnPostureChanged_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.posture =
        decoder.decodeStruct(new codec.Enum(DevicePostureType));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  DevicePostureProviderClient_OnPostureChanged_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(DevicePostureProviderClient_OnPostureChanged_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.posture);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name = 264686501;

  function DevicePostureProviderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevicePostureProvider,
                                                   handleOrPtrInfo);
  }

  function DevicePostureProviderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevicePostureProvider, associatedInterfacePtrInfo);
  }

  DevicePostureProviderAssociatedPtr.prototype =
      Object.create(DevicePostureProviderPtr.prototype);
  DevicePostureProviderAssociatedPtr.prototype.constructor =
      DevicePostureProviderAssociatedPtr;

  function DevicePostureProviderProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevicePostureProviderPtr.prototype.addListenerAndGetCurrentPosture = function() {
    return DevicePostureProviderProxy.prototype.addListenerAndGetCurrentPosture
        .apply(this.ptr.getProxy(), arguments);
  };

  DevicePostureProviderProxy.prototype.addListenerAndGetCurrentPosture = function(client) {
    var params_ = new DevicePostureProvider_AddListenerAndGetCurrentPosture_Params();
    params_.client = client;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name,
          codec.align(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function DevicePostureProviderStub(delegate) {
    this.delegate_ = delegate;
  }
  DevicePostureProviderStub.prototype.addListenerAndGetCurrentPosture = function(client) {
    return this.delegate_ && this.delegate_.addListenerAndGetCurrentPosture && this.delegate_.addListenerAndGetCurrentPosture(client);
  }

  DevicePostureProviderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  DevicePostureProviderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
      var params = reader.decodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_Params);
      this.addListenerAndGetCurrentPosture(params.client).then(function(response) {
        var responseParams =
            new DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams();
        responseParams.posture = response.posture;
        var builder = new codec.MessageV1Builder(
            kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name,
            codec.align(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateDevicePostureProviderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
        if (message.expectsResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentPosture_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevicePostureProviderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kDevicePostureProvider_AddListenerAndGetCurrentPosture_Name:
        if (message.isResponse())
          paramsClass = DevicePostureProvider_AddListenerAndGetCurrentPosture_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var DevicePostureProvider = {
    name: 'device.mojom.DevicePostureProvider',
    kVersion: 0,
    ptrClass: DevicePostureProviderPtr,
    proxyClass: DevicePostureProviderProxy,
    stubClass: DevicePostureProviderStub,
    validateRequest: validateDevicePostureProviderRequest,
    validateResponse: validateDevicePostureProviderResponse,
  };
  DevicePostureProviderStub.prototype.validator = validateDevicePostureProviderRequest;
  DevicePostureProviderProxy.prototype.validator = validateDevicePostureProviderResponse;
  var kDevicePostureProviderClient_OnPostureChanged_Name = 677325965;

  function DevicePostureProviderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(DevicePostureProviderClient,
                                                   handleOrPtrInfo);
  }

  function DevicePostureProviderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        DevicePostureProviderClient, associatedInterfacePtrInfo);
  }

  DevicePostureProviderClientAssociatedPtr.prototype =
      Object.create(DevicePostureProviderClientPtr.prototype);
  DevicePostureProviderClientAssociatedPtr.prototype.constructor =
      DevicePostureProviderClientAssociatedPtr;

  function DevicePostureProviderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  DevicePostureProviderClientPtr.prototype.onPostureChanged = function() {
    return DevicePostureProviderClientProxy.prototype.onPostureChanged
        .apply(this.ptr.getProxy(), arguments);
  };

  DevicePostureProviderClientProxy.prototype.onPostureChanged = function(posture) {
    var params_ = new DevicePostureProviderClient_OnPostureChanged_Params();
    params_.posture = posture;
    var builder = new codec.MessageV0Builder(
        kDevicePostureProviderClient_OnPostureChanged_Name,
        codec.align(DevicePostureProviderClient_OnPostureChanged_Params.encodedSize));
    builder.encodeStruct(DevicePostureProviderClient_OnPostureChanged_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function DevicePostureProviderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  DevicePostureProviderClientStub.prototype.onPostureChanged = function(posture) {
    return this.delegate_ && this.delegate_.onPostureChanged && this.delegate_.onPostureChanged(posture);
  }

  DevicePostureProviderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kDevicePostureProviderClient_OnPostureChanged_Name:
      var params = reader.decodeStruct(DevicePostureProviderClient_OnPostureChanged_Params);
      this.onPostureChanged(params.posture);
      return true;
    default:
      return false;
    }
  };

  DevicePostureProviderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateDevicePostureProviderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kDevicePostureProviderClient_OnPostureChanged_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = DevicePostureProviderClient_OnPostureChanged_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateDevicePostureProviderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var DevicePostureProviderClient = {
    name: 'device.mojom.DevicePostureProviderClient',
    kVersion: 0,
    ptrClass: DevicePostureProviderClientPtr,
    proxyClass: DevicePostureProviderClientProxy,
    stubClass: DevicePostureProviderClientStub,
    validateRequest: validateDevicePostureProviderClientRequest,
    validateResponse: null,
  };
  DevicePostureProviderClientStub.prototype.validator = validateDevicePostureProviderClientRequest;
  DevicePostureProviderClientProxy.prototype.validator = null;
  exports.DevicePostureType = DevicePostureType;
  exports.DevicePostureProvider = DevicePostureProvider;
  exports.DevicePostureProviderPtr = DevicePostureProviderPtr;
  exports.DevicePostureProviderAssociatedPtr = DevicePostureProviderAssociatedPtr;
  exports.DevicePostureProviderClient = DevicePostureProviderClient;
  exports.DevicePostureProviderClientPtr = DevicePostureProviderClientPtr;
  exports.DevicePostureProviderClientAssociatedPtr = DevicePostureProviderClientAssociatedPtr;
})();