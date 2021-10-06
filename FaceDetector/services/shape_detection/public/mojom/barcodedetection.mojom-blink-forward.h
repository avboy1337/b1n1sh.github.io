// services/shape_detection/public/mojom/barcodedetection.mojom-blink-forward.h is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_BLINK_FORWARD_H_
#define SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_BLINK_FORWARD_H_

#include <stdint.h>

#include "mojo/public/cpp/bindings/struct_forward.h"

#include "mojo/public/cpp/bindings/deprecated_interface_types_forward.h"


#include "mojo/public/interfaces/bindings/native_struct.mojom-forward.h"




namespace shape_detection {
namespace mojom {

enum class BarcodeFormat : int32_t;
class BarcodeDetectionInterfaceBase;
}  // namespace shape_detection
}  // namespace mojom


namespace shape_detection {
namespace mojom {
namespace blink {
// Aliases for definition in the parent namespace.
using BarcodeFormat = BarcodeFormat;
using BarcodeDetectionInterfaceBase = BarcodeDetectionInterfaceBase;
class BarcodeDetectionResult;
using BarcodeDetectionResultPtr = mojo::StructPtr<BarcodeDetectionResult>;

class BarcodeDetection;

using BarcodeDetectionPtr = mojo::InterfacePtr<BarcodeDetection>;
using BarcodeDetectionPtrInfo = mojo::InterfacePtrInfo<BarcodeDetection>;

using BarcodeDetectionRequest = mojo::InterfaceRequest<BarcodeDetection>;
using BarcodeDetectionAssociatedPtrInfo =
    mojo::AssociatedInterfacePtrInfo<BarcodeDetection>;

using BarcodeDetectionAssociatedRequest =
    mojo::AssociatedInterfaceRequest<BarcodeDetection>;




}  // namespace blink
}  // namespace mojom
}  // namespace shape_detection

#endif  // SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_BLINK_FORWARD_H_