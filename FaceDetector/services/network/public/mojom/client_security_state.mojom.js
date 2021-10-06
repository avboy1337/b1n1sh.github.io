// services/network/public/mojom/client_security_state.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'services/network/public/mojom/client_security_state.mojom';
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
  var cross_origin_embedder_policy$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/cross_origin_embedder_policy.mojom', 'cross_origin_embedder_policy.mojom.js');
  }
  var ip_address_space$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/ip_address_space.mojom', 'ip_address_space.mojom.js');
  }


  var PrivateNetworkRequestPolicy = {};
  PrivateNetworkRequestPolicy.kAllow = 0;
  PrivateNetworkRequestPolicy.kWarn = 1;
  PrivateNetworkRequestPolicy.kBlock = 2;
  PrivateNetworkRequestPolicy.MIN_VALUE = 0;
  PrivateNetworkRequestPolicy.MAX_VALUE = 2;

  PrivateNetworkRequestPolicy.isKnownEnumValue = function(value) {
    switch (value) {
    case 0:
    case 1:
    case 2:
      return true;
    }
    return false;
  };

  PrivateNetworkRequestPolicy.toKnownEnumValue = function(value) {
    return value;
  };

  PrivateNetworkRequestPolicy.validate = function(enumValue) {
    const isExtensible = false;
    if (isExtensible || this.isKnownEnumValue(enumValue))
      return validator.validationError.NONE;

    return validator.validationError.UNKNOWN_ENUM_VALUE;
  };

  function ClientSecurityState(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  ClientSecurityState.prototype.initDefaults_ = function() {
    this.crossOriginEmbedderPolicy = null;
    this.isWebSecureContext = false;
    this.ipAddressSpace = ip_address_space$.IPAddressSpace.kUnknown;
    this.privateNetworkRequestPolicy = PrivateNetworkRequestPolicy.kAllow;
  };
  ClientSecurityState.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  ClientSecurityState.validate = function(messageValidator, offset) {
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


    // validate ClientSecurityState.crossOriginEmbedderPolicy
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, false);
    if (err !== validator.validationError.NONE)
        return err;



    // validate ClientSecurityState.ipAddressSpace
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 12, ip_address_space$.IPAddressSpace);
    if (err !== validator.validationError.NONE)
        return err;


    // validate ClientSecurityState.privateNetworkRequestPolicy
    err = messageValidator.validateEnum(offset + codec.kStructHeaderSize + 16, PrivateNetworkRequestPolicy);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  ClientSecurityState.encodedSize = codec.kStructHeaderSize + 24;

  ClientSecurityState.decode = function(decoder) {
    var packed;
    var val = new ClientSecurityState();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.crossOriginEmbedderPolicy =
        decoder.decodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy);
    packed = decoder.readUint8();
    val.isWebSecureContext = (packed >> 0) & 1 ? true : false;
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.ipAddressSpace =
        decoder.decodeStruct(new codec.Enum(ip_address_space$.IPAddressSpace));
    val.privateNetworkRequestPolicy =
        decoder.decodeStruct(new codec.Enum(PrivateNetworkRequestPolicy));
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  ClientSecurityState.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(ClientSecurityState.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(cross_origin_embedder_policy$.CrossOriginEmbedderPolicy, val.crossOriginEmbedderPolicy);
    packed = 0;
    packed |= (val.isWebSecureContext & 1) << 0
    encoder.writeUint8(packed);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeStruct(codec.Int32, val.ipAddressSpace);
    encoder.encodeStruct(codec.Int32, val.privateNetworkRequestPolicy);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.PrivateNetworkRequestPolicy = PrivateNetworkRequestPolicy;
  exports.ClientSecurityState = ClientSecurityState;
})();