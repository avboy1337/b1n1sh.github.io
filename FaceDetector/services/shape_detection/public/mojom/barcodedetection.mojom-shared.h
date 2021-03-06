// services/shape_detection/public/mojom/barcodedetection.mojom-shared.h is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_SHARED_H_
#define SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_SHARED_H_

#include <stdint.h>

#include <functional>
#include <iosfwd>
#include <type_traits>
#include <utility>
#include "base/compiler_specific.h"
#include "mojo/public/cpp/bindings/array_data_view.h"
#include "mojo/public/cpp/bindings/enum_traits.h"
#include "mojo/public/cpp/bindings/interface_data_view.h"
#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/serialization.h"
#include "mojo/public/cpp/bindings/map_data_view.h"
#include "mojo/public/cpp/bindings/string_data_view.h"

#include "third_party/perfetto/include/perfetto/tracing/traced_value_forward.h"

#include "services/shape_detection/public/mojom/barcodedetection.mojom-shared-internal.h"
#include "skia/public/mojom/bitmap.mojom-shared.h"
#include "ui/gfx/geometry/mojom/geometry.mojom-shared.h"
#include "mojo/public/cpp/bindings/lib/interface_serialization.h"






namespace shape_detection {
namespace mojom {
class BarcodeDetectionResultDataView;



}  // namespace mojom
}  // namespace shape_detection

namespace mojo {
namespace internal {

template <>
struct MojomTypeTraits<::shape_detection::mojom::BarcodeDetectionResultDataView> {
  using Data = ::shape_detection::mojom::internal::BarcodeDetectionResult_Data;
  using DataAsArrayElement = Pointer<Data>;
  static constexpr MojomTypeCategory category = MojomTypeCategory::kStruct;
};

}  // namespace internal
}  // namespace mojo


namespace shape_detection {
namespace mojom {


enum class BarcodeFormat : int32_t {
  
  AZTEC = 0,
  
  CODE_128 = 1,
  
  CODE_39 = 2,
  
  CODE_93 = 3,
  
  CODABAR = 4,
  
  DATA_MATRIX = 5,
  
  EAN_13 = 6,
  
  EAN_8 = 7,
  
  ITF = 8,
  
  PDF417 = 9,
  
  QR_CODE = 10,
  
  UNKNOWN = 11,
  
  UPC_A = 12,
  
  UPC_E = 13,
  kMinValue = 0,
  kMaxValue = 13,
};

 std::ostream& operator<<(std::ostream& os, BarcodeFormat value);
inline bool IsKnownEnumValue(BarcodeFormat value) {
  return internal::BarcodeFormat_Data::IsKnownValue(
      static_cast<int32_t>(value));
}
// Interface base classes. They are used for type safety check.
class BarcodeDetectionInterfaceBase {};

using BarcodeDetectionPtrDataView =
    mojo::InterfacePtrDataView<BarcodeDetectionInterfaceBase>;
using BarcodeDetectionRequestDataView =
    mojo::InterfaceRequestDataView<BarcodeDetectionInterfaceBase>;
using BarcodeDetectionAssociatedPtrInfoDataView =
    mojo::AssociatedInterfacePtrInfoDataView<BarcodeDetectionInterfaceBase>;
using BarcodeDetectionAssociatedRequestDataView =
    mojo::AssociatedInterfaceRequestDataView<BarcodeDetectionInterfaceBase>;


class BarcodeDetectionResultDataView {
 public:
  BarcodeDetectionResultDataView() = default;

  BarcodeDetectionResultDataView(
      internal::BarcodeDetectionResult_Data* data,
      mojo::Message* message)
      : data_(data), message_(message) {}

  bool is_null() const { return !data_; }
  inline void GetRawValueDataView(
      mojo::StringDataView* output);

  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadRawValue(UserType* output) {
    
    auto* pointer = data_->raw_value.Get();
    return mojo::internal::Deserialize<mojo::StringDataView>(
        pointer, output, message_);
  }
  inline void GetBoundingBoxDataView(
      ::gfx::mojom::RectFDataView* output);

  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadBoundingBox(UserType* output) {
    
    auto* pointer = data_->bounding_box.Get();
    return mojo::internal::Deserialize<::gfx::mojom::RectFDataView>(
        pointer, output, message_);
  }
  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadFormat(UserType* output) const {
    auto data_value = data_->format;
    return mojo::internal::Deserialize<::shape_detection::mojom::BarcodeFormat>(
        data_value, output);
  }
  BarcodeFormat format() const {
    return ::mojo::internal::ToKnownEnumValueHelper(
          static_cast<::shape_detection::mojom::BarcodeFormat>(data_->format));
  }
  inline void GetCornerPointsDataView(
      mojo::ArrayDataView<::gfx::mojom::PointFDataView>* output);

  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadCornerPoints(UserType* output) {
    
    auto* pointer = data_->corner_points.Get();
    return mojo::internal::Deserialize<mojo::ArrayDataView<::gfx::mojom::PointFDataView>>(
        pointer, output, message_);
  }
 private:
  internal::BarcodeDetectionResult_Data* data_ = nullptr;
  mojo::Message* message_ = nullptr;
};



}  // namespace mojom
}  // namespace shape_detection

namespace std {

template <>
struct hash<::shape_detection::mojom::BarcodeFormat>
    : public mojo::internal::EnumHashImpl<::shape_detection::mojom::BarcodeFormat> {};

}  // namespace std

namespace mojo {


namespace internal {

template <typename MaybeConstUserType>
struct Serializer<::shape_detection::mojom::BarcodeFormat, MaybeConstUserType> {
  using UserType = typename std::remove_const<MaybeConstUserType>::type;
  using Traits = EnumTraits<::shape_detection::mojom::BarcodeFormat, UserType>;

  static void Serialize(UserType input, int32_t* output) {
    *output = static_cast<int32_t>(Traits::ToMojom(input));
  }

  static bool Deserialize(int32_t input, UserType* output) {
    return Traits::FromMojom(::mojo::internal::ToKnownEnumValueHelper(
        static_cast<::shape_detection::mojom::BarcodeFormat>(input)), output);
  }
};

}  // namespace internal


namespace internal {

template <typename MaybeConstUserType>
struct Serializer<::shape_detection::mojom::BarcodeDetectionResultDataView, MaybeConstUserType> {
  using UserType = typename std::remove_const<MaybeConstUserType>::type;
  using Traits = StructTraits<::shape_detection::mojom::BarcodeDetectionResultDataView, UserType>;

  static void Serialize(
      MaybeConstUserType& input,
      mojo::internal::MessageFragment<::shape_detection::mojom::internal::BarcodeDetectionResult_Data>& fragment) {
    if (CallIsNullIfExists<Traits>(input))
      return;
    fragment.Allocate();
    decltype(Traits::raw_value(input)) in_raw_value = Traits::raw_value(input);
    mojo::internal::MessageFragment<
        typename decltype(fragment->raw_value)::BaseType> raw_value_fragment(
            fragment.message());
    mojo::internal::Serialize<mojo::StringDataView>(
        in_raw_value, raw_value_fragment);
    fragment->raw_value.Set(
        raw_value_fragment.is_null() ? nullptr : raw_value_fragment.data());
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
        fragment->raw_value.is_null(),
        mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
        "null raw_value in BarcodeDetectionResult struct");
    decltype(Traits::bounding_box(input)) in_bounding_box = Traits::bounding_box(input);
    mojo::internal::MessageFragment<
        typename decltype(fragment->bounding_box)::BaseType> bounding_box_fragment(
            fragment.message());
    mojo::internal::Serialize<::gfx::mojom::RectFDataView>(
        in_bounding_box, bounding_box_fragment);
    fragment->bounding_box.Set(
        bounding_box_fragment.is_null() ? nullptr : bounding_box_fragment.data());
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
        fragment->bounding_box.is_null(),
        mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
        "null bounding_box in BarcodeDetectionResult struct");
    mojo::internal::Serialize<::shape_detection::mojom::BarcodeFormat>(
        Traits::format(input), &fragment->format);
    decltype(Traits::corner_points(input)) in_corner_points = Traits::corner_points(input);
    mojo::internal::MessageFragment<
        typename decltype(fragment->corner_points)::BaseType>
        corner_points_fragment(fragment.message());
    const mojo::internal::ContainerValidateParams corner_points_validate_params(
        0, false, nullptr);
    mojo::internal::Serialize<mojo::ArrayDataView<::gfx::mojom::PointFDataView>>(
        in_corner_points, corner_points_fragment, &corner_points_validate_params);
    fragment->corner_points.Set(
        corner_points_fragment.is_null() ? nullptr : corner_points_fragment.data());
    MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
        fragment->corner_points.is_null(),
        mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
        "null corner_points in BarcodeDetectionResult struct");
  }

  static bool Deserialize(::shape_detection::mojom::internal::BarcodeDetectionResult_Data* input,
                          UserType* output,
                          Message* message) {
    if (!input)
      return CallSetToNullIfExists<Traits>(output);

    ::shape_detection::mojom::BarcodeDetectionResultDataView data_view(input, message);
    return Traits::Read(data_view, output);
  }
};

}  // namespace internal

}  // namespace mojo


namespace shape_detection {
namespace mojom {

inline void BarcodeDetectionResultDataView::GetRawValueDataView(
    mojo::StringDataView* output) {
  auto pointer = data_->raw_value.Get();
  *output = mojo::StringDataView(pointer, message_);
}
inline void BarcodeDetectionResultDataView::GetBoundingBoxDataView(
    ::gfx::mojom::RectFDataView* output) {
  auto pointer = data_->bounding_box.Get();
  *output = ::gfx::mojom::RectFDataView(pointer, message_);
}
inline void BarcodeDetectionResultDataView::GetCornerPointsDataView(
    mojo::ArrayDataView<::gfx::mojom::PointFDataView>* output) {
  auto pointer = data_->corner_points.Get();
  *output = mojo::ArrayDataView<::gfx::mojom::PointFDataView>(pointer, message_);
}



}  // namespace mojom
}  // namespace shape_detection

// Declare TraceFormatTraits for enums, which should be defined in ::perfetto
// namespace.

namespace perfetto {

template <>
struct  TraceFormatTraits<::shape_detection::mojom::BarcodeFormat> {
 static void WriteIntoTrace(perfetto::TracedValue context, ::shape_detection::mojom::BarcodeFormat value);
};

} // namespace perfetto

#endif  // SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_MOJOM_SHARED_H_