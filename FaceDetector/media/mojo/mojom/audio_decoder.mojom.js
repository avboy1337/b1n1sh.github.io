// media/mojo/mojom/audio_decoder.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'media/mojo/mojom/audio_decoder.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('media.mojom');
  var media_types$ =
      mojo.internal.exposeNamespace('media.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'media/mojo/mojom/media_types.mojom', 'media_types.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }



  function AudioDecoder_Construct_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Construct_Params.prototype.initDefaults_ = function() {
    this.client = new associatedBindings.AssociatedInterfacePtrInfo();
  };
  AudioDecoder_Construct_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Construct_Params.validate = function(messageValidator, offset) {
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


    // validate AudioDecoder_Construct_Params.client
    err = messageValidator.validateAssociatedInterface(offset + codec.kStructHeaderSize + 0, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_Construct_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoder_Construct_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Construct_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.client =
        decoder.decodeStruct(codec.AssociatedInterfacePtrInfo);
    return val;
  };

  AudioDecoder_Construct_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Construct_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.AssociatedInterfacePtrInfo, val.client);
  };
  function AudioDecoder_Initialize_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Initialize_Params.prototype.initDefaults_ = function() {
    this.config = null;
    this.cdmId = null;
  };
  AudioDecoder_Initialize_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Initialize_Params.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoder_Initialize_Params.config
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.AudioDecoderConfig, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoder_Initialize_Params.cdmId
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, unguessable_token$.UnguessableToken, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_Initialize_Params.encodedSize = codec.kStructHeaderSize + 16;

  AudioDecoder_Initialize_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Initialize_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.config =
        decoder.decodeStructPointer(media_types$.AudioDecoderConfig);
    val.cdmId =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    return val;
  };

  AudioDecoder_Initialize_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Initialize_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.AudioDecoderConfig, val.config);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.cdmId);
  };
  function AudioDecoder_Initialize_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Initialize_ResponseParams.prototype.initDefaults_ = function() {
    this.success = null;
    this.needsBitstreamConversion = false;
    this.decoderType = 0;
  };
  AudioDecoder_Initialize_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Initialize_ResponseParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate AudioDecoder_Initialize_ResponseParams.success
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.Status, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate AudioDecoder_Initialize_ResponseParams.decoderType
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, media_types$.AudioDecoderType);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_Initialize_ResponseParams.encodedSize = codec.kStructHeaderSize + 16;

  AudioDecoder_Initialize_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Initialize_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.success =
        decoder.decodeStructPointer(media_types$.Status);
    packed = decoder.readUint8();
    val.needsBitstreamConversion = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.decoderType =
        decoder.decodeStruct(new codec.Enum(media_types$.AudioDecoderType));
    return val;
  };

  AudioDecoder_Initialize_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Initialize_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.Status, val.success);
    packed = 0;
    packed |= (val.needsBitstreamConversion & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.decoderType);
  };
  function AudioDecoder_SetDataSource_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_SetDataSource_Params.prototype.initDefaults_ = function() {
    this.receivePipe = null;
  };
  AudioDecoder_SetDataSource_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_SetDataSource_Params.validate = function(messageValidator, offset) {
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


    // validate AudioDecoder_SetDataSource_Params.receivePipe
    err = messageValidator.validateHandle(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_SetDataSource_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoder_SetDataSource_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_SetDataSource_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.receivePipe =
        decoder.decodeStruct(codec.Handle);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioDecoder_SetDataSource_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_SetDataSource_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Handle, val.receivePipe);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function AudioDecoder_Decode_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Decode_Params.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  AudioDecoder_Decode_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Decode_Params.validate = function(messageValidator, offset) {
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


    // validate AudioDecoder_Decode_Params.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.DecoderBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_Decode_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoder_Decode_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Decode_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer =
        decoder.decodeStructPointer(media_types$.DecoderBuffer);
    return val;
  };

  AudioDecoder_Decode_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Decode_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.DecoderBuffer, val.buffer);
  };
  function AudioDecoder_Decode_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Decode_ResponseParams.prototype.initDefaults_ = function() {
    this.status = null;
  };
  AudioDecoder_Decode_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Decode_ResponseParams.validate = function(messageValidator, offset) {
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


    // validate AudioDecoder_Decode_ResponseParams.status
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.Status, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoder_Decode_ResponseParams.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoder_Decode_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Decode_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.status =
        decoder.decodeStructPointer(media_types$.Status);
    return val;
  };

  AudioDecoder_Decode_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Decode_ResponseParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.Status, val.status);
  };
  function AudioDecoder_Reset_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Reset_Params.prototype.initDefaults_ = function() {
  };
  AudioDecoder_Reset_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Reset_Params.validate = function(messageValidator, offset) {
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

  AudioDecoder_Reset_Params.encodedSize = codec.kStructHeaderSize + 0;

  AudioDecoder_Reset_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Reset_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioDecoder_Reset_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Reset_Params.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioDecoder_Reset_ResponseParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoder_Reset_ResponseParams.prototype.initDefaults_ = function() {
  };
  AudioDecoder_Reset_ResponseParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoder_Reset_ResponseParams.validate = function(messageValidator, offset) {
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

  AudioDecoder_Reset_ResponseParams.encodedSize = codec.kStructHeaderSize + 0;

  AudioDecoder_Reset_ResponseParams.decode = function(decoder) {
    var packed;
    var val = new AudioDecoder_Reset_ResponseParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    return val;
  };

  AudioDecoder_Reset_ResponseParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoder_Reset_ResponseParams.encodedSize);
    encoder.writeUint32(0);
  };
  function AudioDecoderClient_OnBufferDecoded_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoderClient_OnBufferDecoded_Params.prototype.initDefaults_ = function() {
    this.buffer = null;
  };
  AudioDecoderClient_OnBufferDecoded_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoderClient_OnBufferDecoded_Params.validate = function(messageValidator, offset) {
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


    // validate AudioDecoderClient_OnBufferDecoded_Params.buffer
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, media_types$.AudioBuffer, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoderClient_OnBufferDecoded_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoderClient_OnBufferDecoded_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoderClient_OnBufferDecoded_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.buffer =
        decoder.decodeStructPointer(media_types$.AudioBuffer);
    return val;
  };

  AudioDecoderClient_OnBufferDecoded_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoderClient_OnBufferDecoded_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(media_types$.AudioBuffer, val.buffer);
  };
  function AudioDecoderClient_OnWaiting_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  AudioDecoderClient_OnWaiting_Params.prototype.initDefaults_ = function() {
    this.reason = 0;
  };
  AudioDecoderClient_OnWaiting_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  AudioDecoderClient_OnWaiting_Params.validate = function(messageValidator, offset) {
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


    // validate AudioDecoderClient_OnWaiting_Params.reason
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, media_types$.WaitingReason);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  AudioDecoderClient_OnWaiting_Params.encodedSize = codec.kStructHeaderSize + 8;

  AudioDecoderClient_OnWaiting_Params.decode = function(decoder) {
    var packed;
    var val = new AudioDecoderClient_OnWaiting_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.reason =
        decoder.decodeStruct(new codec.Enum(media_types$.WaitingReason));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  AudioDecoderClient_OnWaiting_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(AudioDecoderClient_OnWaiting_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.reason);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  var kAudioDecoder_Construct_Name = 2126449373;
  var kAudioDecoder_Initialize_Name = 1083044562;
  var kAudioDecoder_SetDataSource_Name = 772184653;
  var kAudioDecoder_Decode_Name = 617996279;
  var kAudioDecoder_Reset_Name = 242912345;

  function AudioDecoderPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioDecoder,
                                                   handleOrPtrInfo);
  }

  function AudioDecoderAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioDecoder, associatedInterfacePtrInfo);
  }

  AudioDecoderAssociatedPtr.prototype =
      Object.create(AudioDecoderPtr.prototype);
  AudioDecoderAssociatedPtr.prototype.constructor =
      AudioDecoderAssociatedPtr;

  function AudioDecoderProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioDecoderPtr.prototype.construct = function() {
    return AudioDecoderProxy.prototype.construct
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderProxy.prototype.construct = function(client) {
    var params_ = new AudioDecoder_Construct_Params();
    params_.client = client;
    var builder = new codec.MessageV2Builder(
        kAudioDecoder_Construct_Name,
        codec.align(AudioDecoder_Construct_Params.encodedSize));
    builder.setPayload(AudioDecoder_Construct_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioDecoderPtr.prototype.initialize = function() {
    return AudioDecoderProxy.prototype.initialize
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderProxy.prototype.initialize = function(config, cdmId) {
    var params_ = new AudioDecoder_Initialize_Params();
    params_.config = config;
    params_.cdmId = cdmId;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioDecoder_Initialize_Name,
          codec.align(AudioDecoder_Initialize_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioDecoder_Initialize_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioDecoder_Initialize_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioDecoderPtr.prototype.setDataSource = function() {
    return AudioDecoderProxy.prototype.setDataSource
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderProxy.prototype.setDataSource = function(receivePipe) {
    var params_ = new AudioDecoder_SetDataSource_Params();
    params_.receivePipe = receivePipe;
    var builder = new codec.MessageV0Builder(
        kAudioDecoder_SetDataSource_Name,
        codec.align(AudioDecoder_SetDataSource_Params.encodedSize));
    builder.encodeStruct(AudioDecoder_SetDataSource_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioDecoderPtr.prototype.decode = function() {
    return AudioDecoderProxy.prototype.decode
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderProxy.prototype.decode = function(buffer) {
    var params_ = new AudioDecoder_Decode_Params();
    params_.buffer = buffer;
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioDecoder_Decode_Name,
          codec.align(AudioDecoder_Decode_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioDecoder_Decode_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioDecoder_Decode_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };
  AudioDecoderPtr.prototype.reset = function() {
    return AudioDecoderProxy.prototype.reset
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderProxy.prototype.reset = function() {
    var params_ = new AudioDecoder_Reset_Params();
    return new Promise(function(resolve, reject) {
      var builder = new codec.MessageV1Builder(
          kAudioDecoder_Reset_Name,
          codec.align(AudioDecoder_Reset_Params.encodedSize),
          codec.kMessageExpectsResponse, 0);
      builder.encodeStruct(AudioDecoder_Reset_Params, params_);
      var message = builder.finish();
      this.receiver_.acceptAndExpectResponse(message).then(function(message) {
        var reader = new codec.MessageReader(message);
        var responseParams =
            reader.decodeStruct(AudioDecoder_Reset_ResponseParams);
        resolve(responseParams);
      }).catch(function(result) {
        reject(Error("Connection error: " + result));
      });
    }.bind(this));
  };

  function AudioDecoderStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioDecoderStub.prototype.construct = function(client) {
    return this.delegate_ && this.delegate_.construct && this.delegate_.construct(client);
  }
  AudioDecoderStub.prototype.initialize = function(config, cdmId) {
    return this.delegate_ && this.delegate_.initialize && this.delegate_.initialize(config, cdmId);
  }
  AudioDecoderStub.prototype.setDataSource = function(receivePipe) {
    return this.delegate_ && this.delegate_.setDataSource && this.delegate_.setDataSource(receivePipe);
  }
  AudioDecoderStub.prototype.decode = function(buffer) {
    return this.delegate_ && this.delegate_.decode && this.delegate_.decode(buffer);
  }
  AudioDecoderStub.prototype.reset = function() {
    return this.delegate_ && this.delegate_.reset && this.delegate_.reset();
  }

  AudioDecoderStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioDecoder_Construct_Name:
      var params = reader.decodeStruct(AudioDecoder_Construct_Params);
      this.construct(params.client);
      return true;
    case kAudioDecoder_SetDataSource_Name:
      var params = reader.decodeStruct(AudioDecoder_SetDataSource_Params);
      this.setDataSource(params.receivePipe);
      return true;
    default:
      return false;
    }
  };

  AudioDecoderStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioDecoder_Initialize_Name:
      var params = reader.decodeStruct(AudioDecoder_Initialize_Params);
      this.initialize(params.config, params.cdmId).then(function(response) {
        var responseParams =
            new AudioDecoder_Initialize_ResponseParams();
        responseParams.success = response.success;
        responseParams.needsBitstreamConversion = response.needsBitstreamConversion;
        responseParams.decoderType = response.decoderType;
        var builder = new codec.MessageV1Builder(
            kAudioDecoder_Initialize_Name,
            codec.align(AudioDecoder_Initialize_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioDecoder_Initialize_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioDecoder_Decode_Name:
      var params = reader.decodeStruct(AudioDecoder_Decode_Params);
      this.decode(params.buffer).then(function(response) {
        var responseParams =
            new AudioDecoder_Decode_ResponseParams();
        responseParams.status = response.status;
        var builder = new codec.MessageV1Builder(
            kAudioDecoder_Decode_Name,
            codec.align(AudioDecoder_Decode_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioDecoder_Decode_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    case kAudioDecoder_Reset_Name:
      var params = reader.decodeStruct(AudioDecoder_Reset_Params);
      this.reset().then(function(response) {
        var responseParams =
            new AudioDecoder_Reset_ResponseParams();
        var builder = new codec.MessageV1Builder(
            kAudioDecoder_Reset_Name,
            codec.align(AudioDecoder_Reset_ResponseParams.encodedSize),
            codec.kMessageIsResponse, reader.requestID);
        builder.encodeStruct(AudioDecoder_Reset_ResponseParams,
                             responseParams);
        var message = builder.finish();
        responder.accept(message);
      });
      return true;
    default:
      return false;
    }
  };

  function validateAudioDecoderRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioDecoder_Construct_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioDecoder_Construct_Params;
      break;
      case kAudioDecoder_Initialize_Name:
        if (message.expectsResponse())
          paramsClass = AudioDecoder_Initialize_Params;
      break;
      case kAudioDecoder_SetDataSource_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioDecoder_SetDataSource_Params;
      break;
      case kAudioDecoder_Decode_Name:
        if (message.expectsResponse())
          paramsClass = AudioDecoder_Decode_Params;
      break;
      case kAudioDecoder_Reset_Name:
        if (message.expectsResponse())
          paramsClass = AudioDecoder_Reset_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioDecoderResponse(messageValidator) {
   var message = messageValidator.message;
   var paramsClass = null;
   switch (message.getName()) {
      case kAudioDecoder_Initialize_Name:
        if (message.isResponse())
          paramsClass = AudioDecoder_Initialize_ResponseParams;
        break;
      case kAudioDecoder_Decode_Name:
        if (message.isResponse())
          paramsClass = AudioDecoder_Decode_ResponseParams;
        break;
      case kAudioDecoder_Reset_Name:
        if (message.isResponse())
          paramsClass = AudioDecoder_Reset_ResponseParams;
        break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  var AudioDecoder = {
    name: 'media.mojom.AudioDecoder',
    kVersion: 0,
    ptrClass: AudioDecoderPtr,
    proxyClass: AudioDecoderProxy,
    stubClass: AudioDecoderStub,
    validateRequest: validateAudioDecoderRequest,
    validateResponse: validateAudioDecoderResponse,
  };
  AudioDecoderStub.prototype.validator = validateAudioDecoderRequest;
  AudioDecoderProxy.prototype.validator = validateAudioDecoderResponse;
  var kAudioDecoderClient_OnBufferDecoded_Name = 602651662;
  var kAudioDecoderClient_OnWaiting_Name = 119042290;

  function AudioDecoderClientPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(AudioDecoderClient,
                                                   handleOrPtrInfo);
  }

  function AudioDecoderClientAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        AudioDecoderClient, associatedInterfacePtrInfo);
  }

  AudioDecoderClientAssociatedPtr.prototype =
      Object.create(AudioDecoderClientPtr.prototype);
  AudioDecoderClientAssociatedPtr.prototype.constructor =
      AudioDecoderClientAssociatedPtr;

  function AudioDecoderClientProxy(receiver) {
    this.receiver_ = receiver;
  }
  AudioDecoderClientPtr.prototype.onBufferDecoded = function() {
    return AudioDecoderClientProxy.prototype.onBufferDecoded
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderClientProxy.prototype.onBufferDecoded = function(buffer) {
    var params_ = new AudioDecoderClient_OnBufferDecoded_Params();
    params_.buffer = buffer;
    var builder = new codec.MessageV0Builder(
        kAudioDecoderClient_OnBufferDecoded_Name,
        codec.align(AudioDecoderClient_OnBufferDecoded_Params.encodedSize));
    builder.encodeStruct(AudioDecoderClient_OnBufferDecoded_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };
  AudioDecoderClientPtr.prototype.onWaiting = function() {
    return AudioDecoderClientProxy.prototype.onWaiting
        .apply(this.ptr.getProxy(), arguments);
  };

  AudioDecoderClientProxy.prototype.onWaiting = function(reason) {
    var params_ = new AudioDecoderClient_OnWaiting_Params();
    params_.reason = reason;
    var builder = new codec.MessageV0Builder(
        kAudioDecoderClient_OnWaiting_Name,
        codec.align(AudioDecoderClient_OnWaiting_Params.encodedSize));
    builder.encodeStruct(AudioDecoderClient_OnWaiting_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function AudioDecoderClientStub(delegate) {
    this.delegate_ = delegate;
  }
  AudioDecoderClientStub.prototype.onBufferDecoded = function(buffer) {
    return this.delegate_ && this.delegate_.onBufferDecoded && this.delegate_.onBufferDecoded(buffer);
  }
  AudioDecoderClientStub.prototype.onWaiting = function(reason) {
    return this.delegate_ && this.delegate_.onWaiting && this.delegate_.onWaiting(reason);
  }

  AudioDecoderClientStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kAudioDecoderClient_OnBufferDecoded_Name:
      var params = reader.decodeStruct(AudioDecoderClient_OnBufferDecoded_Params);
      this.onBufferDecoded(params.buffer);
      return true;
    case kAudioDecoderClient_OnWaiting_Name:
      var params = reader.decodeStruct(AudioDecoderClient_OnWaiting_Params);
      this.onWaiting(params.reason);
      return true;
    default:
      return false;
    }
  };

  AudioDecoderClientStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateAudioDecoderClientRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kAudioDecoderClient_OnBufferDecoded_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioDecoderClient_OnBufferDecoded_Params;
      break;
      case kAudioDecoderClient_OnWaiting_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = AudioDecoderClient_OnWaiting_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateAudioDecoderClientResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var AudioDecoderClient = {
    name: 'media.mojom.AudioDecoderClient',
    kVersion: 0,
    ptrClass: AudioDecoderClientPtr,
    proxyClass: AudioDecoderClientProxy,
    stubClass: AudioDecoderClientStub,
    validateRequest: validateAudioDecoderClientRequest,
    validateResponse: null,
  };
  AudioDecoderClientStub.prototype.validator = validateAudioDecoderClientRequest;
  AudioDecoderClientProxy.prototype.validator = null;
  exports.AudioDecoder = AudioDecoder;
  exports.AudioDecoderPtr = AudioDecoderPtr;
  exports.AudioDecoderAssociatedPtr = AudioDecoderAssociatedPtr;
  exports.AudioDecoderClient = AudioDecoderClient;
  exports.AudioDecoderClientPtr = AudioDecoderClientPtr;
  exports.AudioDecoderClientAssociatedPtr = AudioDecoderClientAssociatedPtr;
})();