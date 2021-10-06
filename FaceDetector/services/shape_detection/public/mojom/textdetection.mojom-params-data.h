// services/shape_detection/public/mojom/textdetection.mojom-params-data.h is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#ifndef SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_TEXTDETECTION_MOJOM_PARAMS_DATA_H_
#define SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_TEXTDETECTION_MOJOM_PARAMS_DATA_H_

#include "base/macros.h"
#include "mojo/public/cpp/bindings/lib/bindings_internal.h"
#include "mojo/public/cpp/bindings/lib/buffer.h"

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-private-field"
#endif
namespace shape_detection {
namespace mojom {
namespace internal {

class ValidationContext;
class  TextDetection_Detect_Params_Data {
 public:
  static bool Validate(const void* data,
                       mojo::internal::ValidationContext* validation_context);

  mojo::internal::StructHeader header_;
  mojo::internal::Pointer<::skia::mojom::internal::BitmapN32_Data> bitmap_data;

 private:
  friend class mojo::internal::MessageFragment<TextDetection_Detect_Params_Data>;

  TextDetection_Detect_Params_Data();
  ~TextDetection_Detect_Params_Data() = delete;
};
static_assert(sizeof(TextDetection_Detect_Params_Data) == 16,
              "Bad sizeof(TextDetection_Detect_Params_Data)");
class  TextDetection_Detect_ResponseParams_Data {
 public:
  static bool Validate(const void* data,
                       mojo::internal::ValidationContext* validation_context);

  mojo::internal::StructHeader header_;
  mojo::internal::Pointer<mojo::internal::Array_Data<mojo::internal::Pointer<internal::TextDetectionResult_Data>>> results;

 private:
  friend class mojo::internal::MessageFragment<TextDetection_Detect_ResponseParams_Data>;

  TextDetection_Detect_ResponseParams_Data();
  ~TextDetection_Detect_ResponseParams_Data() = delete;
};
static_assert(sizeof(TextDetection_Detect_ResponseParams_Data) == 16,
              "Bad sizeof(TextDetection_Detect_ResponseParams_Data)");

}  // namespace internal


class TextDetection_Detect_ParamsDataView {
 public:
  TextDetection_Detect_ParamsDataView() = default;

  TextDetection_Detect_ParamsDataView(
      internal::TextDetection_Detect_Params_Data* data,
      mojo::Message* message)
      : data_(data), message_(message) {}

  bool is_null() const { return !data_; }
  inline void GetBitmapDataDataView(
      ::skia::mojom::BitmapN32DataView* output);

  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadBitmapData(UserType* output) {
    
    auto* pointer = data_->bitmap_data.Get();
    return mojo::internal::Deserialize<::skia::mojom::BitmapN32DataView>(
        pointer, output, message_);
  }
 private:
  internal::TextDetection_Detect_Params_Data* data_ = nullptr;
  mojo::Message* message_ = nullptr;
};



class TextDetection_Detect_ResponseParamsDataView {
 public:
  TextDetection_Detect_ResponseParamsDataView() = default;

  TextDetection_Detect_ResponseParamsDataView(
      internal::TextDetection_Detect_ResponseParams_Data* data,
      mojo::Message* message)
      : data_(data), message_(message) {}

  bool is_null() const { return !data_; }
  inline void GetResultsDataView(
      mojo::ArrayDataView<TextDetectionResultDataView>* output);

  template <typename UserType>
  WARN_UNUSED_RESULT bool ReadResults(UserType* output) {
    
    auto* pointer = data_->results.Get();
    return mojo::internal::Deserialize<mojo::ArrayDataView<::shape_detection::mojom::TextDetectionResultDataView>>(
        pointer, output, message_);
  }
 private:
  internal::TextDetection_Detect_ResponseParams_Data* data_ = nullptr;
  mojo::Message* message_ = nullptr;
};


inline void TextDetection_Detect_ParamsDataView::GetBitmapDataDataView(
    ::skia::mojom::BitmapN32DataView* output) {
  auto pointer = data_->bitmap_data.Get();
  *output = ::skia::mojom::BitmapN32DataView(pointer, message_);
}


inline void TextDetection_Detect_ResponseParamsDataView::GetResultsDataView(
    mojo::ArrayDataView<TextDetectionResultDataView>* output) {
  auto pointer = data_->results.Get();
  *output = mojo::ArrayDataView<TextDetectionResultDataView>(pointer, message_);
}

}  // namespace mojom
}  // namespace shape_detection

#if defined(__clang__)
#pragma clang diagnostic pop
#endif

#endif  // SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_TEXTDETECTION_MOJOM_PARAMS_DATA_H_