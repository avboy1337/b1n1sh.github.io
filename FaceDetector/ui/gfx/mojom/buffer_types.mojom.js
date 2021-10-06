// ui/gfx/mojom/buffer_types.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'ui/gfx/mojom/buffer_types.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('gfx.mojom');
  var native_handle_types$ =
      mojo.internal.exposeNamespace('gfx.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'ui/gfx/mojom/native_handle_types.mojom', 'native_handle_types.mojom.js');
  }


  var BufferFormat = {};
  BufferFormat.R_8 = 0;
  BufferFormat.R_16 = 1;
  BufferFormat.RG_88 = 2;
  BufferFormat.BGR_565 = 3;
  BufferFormat.RGBA_4444 = 4;
  BufferFormat.RGBX_8888 = 5;
  BufferFormat.RGBA_8888 = 6;
  BufferFormat.BGRX_8888 = 7;
  BufferFormat.BGRA_1010102 = 8;
  BufferFormat.RGBA_1010102 = 9;
  BufferFormat.BGRA_8888 = 10;
  BufferFormat.RGBA_F16 = 11;
  BufferFormat.YVU_420 = 12;
  BufferFormat.YUV_420_BIPLANAR = 13;
  BufferFormat.P010 = 14;
  BufferFormat.MIN_VALUE = 0;
  BufferFormat.MAX_VALUE = 14;

  BufferFormat.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  BufferFormat.toKnownEnumValue = function(value) {
    return value;
  };

  BufferFormat.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BufferUsage = {};
  BufferUsage.GPU_READ = 0;
  BufferUsage.SCANOUT = 1;
  BufferUsage.SCANOUT_CAMERA_READ_WRITE = 2;
  BufferUsage.CAMERA_AND_CPU_READ_WRITE = 3;
  BufferUsage.SCANOUT_CPU_READ_WRITE = 4;
  BufferUsage.SCANOUT_VDA_WRITE = 5;
  BufferUsage.PROTECTED_SCANOUT_VDA_WRITE = 6;
  BufferUsage.GPU_READ_CPU_READ_WRITE = 7;
  BufferUsage.SCANOUT_VEA_CPU_READ = 8;
  BufferUsage.VEA_READ_CAMERA_AND_CPU_READ_WRITE = 9;
  BufferUsage.SCANOUT_FRONT_RENDERING = 10;
  BufferUsage.MIN_VALUE = 0;
  BufferUsage.MAX_VALUE = 10;

  BufferUsage.isKnownEnumValue = function(value) {
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
      return true;
    }
    return false;
  };

  BufferUsage.toKnownEnumValue = function(value) {
    return value;
  };

  BufferUsage.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };
  var BufferPlane = {};
  BufferPlane.DEFAULT = 0;
  BufferPlane.Y = 1;
  BufferPlane.UV = 2;
  BufferPlane.U = 3;
  BufferPlane.V = 4;
  BufferPlane.MIN_VALUE = 0;
  BufferPlane.MAX_VALUE = 4;

  BufferPlane.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      return true;
    }
    return false;
  };

  BufferPlane.toKnownEnumValue = function(value) {
    return value;
  };

  BufferPlane.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function BufferUsageAndFormat(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  BufferUsageAndFormat.prototype.initDefaults_ = function() {
    this.usage = 0;
    this.format = 0;
  };
  BufferUsageAndFormat.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  BufferUsageAndFormat.validate = function(messageValidator, offset) {
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


    // validate BufferUsageAndFormat.usage
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 0, BufferUsage);
    if (err !== validator.validationError.NONE)
        return err;


    // validate BufferUsageAndFormat.format
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 4, BufferFormat);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  BufferUsageAndFormat.encodedSize = codec.kStructHeaderSize + 8;

  BufferUsageAndFormat.decode = function(decoder) {
    var packed;
    var val = new BufferUsageAndFormat();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.usage =
        decoder.decodeStruct(new codec.Enum(BufferUsage));
    val.format =
        decoder.decodeStruct(new codec.Enum(BufferFormat));
    return val;
  };

  BufferUsageAndFormat.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(BufferUsageAndFormat.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.usage);
    encoder.encodeStruct(codec.Int32, val.format);
  };
  function GpuMemoryBufferId(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferId.prototype.initDefaults_ = function() {
    this.id = 0;
  };
  GpuMemoryBufferId.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferId.validate = function(messageValidator, offset) {
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


    return validator.validationError.NONE;
  };

  GpuMemoryBufferId.encodedSize = codec.kStructHeaderSize + 8;

  GpuMemoryBufferId.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferId();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  GpuMemoryBufferId.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferId.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int32, val.id);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  function GpuMemoryBufferHandle(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  GpuMemoryBufferHandle.prototype.initDefaults_ = function() {
    this.id = null;
    this.offset = 0;
    this.stride = 0;
    this.platformHandle = null;
  };
  GpuMemoryBufferHandle.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  GpuMemoryBufferHandle.validate = function(messageValidator, offset) {
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


    // validate GpuMemoryBufferHandle.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, GpuMemoryBufferId, false);
    if (err !== validator.validationError.NONE)
        return err;




    // validate GpuMemoryBufferHandle.platformHandle
    err = messageValidator.validateUnion(offset + codec.kStructHeaderSize + 16, native_handle_types$.GpuMemoryBufferPlatformHandle, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  GpuMemoryBufferHandle.encodedSize = codec.kStructHeaderSize + 32;

  GpuMemoryBufferHandle.decode = function(decoder) {
    var packed;
    var val = new GpuMemoryBufferHandle();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(GpuMemoryBufferId);
    val.offset =
        decoder.decodeStruct(codec.Uint32);
    val.stride =
        decoder.decodeStruct(codec.Uint32);
    val.platformHandle =
        decoder.decodeStruct(native_handle_types$.GpuMemoryBufferPlatformHandle);
    return val;
  };

  GpuMemoryBufferHandle.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(GpuMemoryBufferHandle.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(GpuMemoryBufferId, val.id);
    encoder.encodeStruct(codec.Uint32, val.offset);
    encoder.encodeStruct(codec.Uint32, val.stride);
    encoder.encodeStruct(native_handle_types$.GpuMemoryBufferPlatformHandle, val.platformHandle);
  };
  exports.BufferFormat = BufferFormat;
  exports.BufferUsage = BufferUsage;
  exports.BufferPlane = BufferPlane;
  exports.BufferUsageAndFormat = BufferUsageAndFormat;
  exports.GpuMemoryBufferId = GpuMemoryBufferId;
  exports.GpuMemoryBufferHandle = GpuMemoryBufferHandle;
})();