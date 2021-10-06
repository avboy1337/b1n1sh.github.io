// services/shape_detection/public/mojom/facedetection.mojom.cc is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-private-field"
#endif

#include "services/shape_detection/public/mojom/facedetection.mojom.h"

#include <math.h>
#include <stdint.h>
#include <utility>

#include "base/hash/md5_constexpr.h"
#include "base/run_loop.h"
#include "base/strings/string_number_conversions.h"
#include "base/task/common/task_annotator.h"
#include "base/trace_event/trace_event.h"
#include "mojo/public/cpp/bindings/lib/generated_code_util.h"
#include "mojo/public/cpp/bindings/lib/message_internal.h"
#include "mojo/public/cpp/bindings/lib/serialization_util.h"
#include "mojo/public/cpp/bindings/lib/unserialized_message_context.h"
#include "mojo/public/cpp/bindings/lib/validate_params.h"
#include "mojo/public/cpp/bindings/lib/validation_errors.h"
#include "mojo/public/cpp/bindings/mojo_buildflags.h"
#include "mojo/public/interfaces/bindings/interface_control_messages.mojom.h"
#include "third_party/perfetto/include/perfetto/tracing/traced_value.h"

#include "services/shape_detection/public/mojom/facedetection.mojom-params-data.h"
#include "services/shape_detection/public/mojom/facedetection.mojom-shared-message-ids.h"

#include "services/shape_detection/public/mojom/facedetection.mojom-import-headers.h"


#ifndef SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_FACEDETECTION_MOJOM_JUMBO_H_
#define SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_FACEDETECTION_MOJOM_JUMBO_H_
#endif
namespace shape_detection {
namespace mojom {
Landmark::Landmark()
    : locations(),
      type() {}

Landmark::Landmark(
    std::vector<::gfx::PointF> locations_in,
    LandmarkType type_in)
    : locations(std::move(locations_in)),
      type(std::move(type_in)) {}

Landmark::~Landmark() = default;

void Landmark::WriteIntoTrace(perfetto::TracedValue context) const {
  auto dict = std::move(context).WriteDictionary();
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "locations"), this->locations,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type const std::vector<::gfx::PointF>&>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "type"), this->type,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type LandmarkType>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
}

bool Landmark::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  return Data_::Validate(data, validation_context);
}
FaceDetectionResult::FaceDetectionResult()
    : bounding_box(),
      landmarks() {}

FaceDetectionResult::FaceDetectionResult(
    const ::gfx::RectF& bounding_box_in,
    std::vector<LandmarkPtr> landmarks_in)
    : bounding_box(std::move(bounding_box_in)),
      landmarks(std::move(landmarks_in)) {}

FaceDetectionResult::~FaceDetectionResult() = default;

void FaceDetectionResult::WriteIntoTrace(perfetto::TracedValue context) const {
  auto dict = std::move(context).WriteDictionary();
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "bounding_box"), this->bounding_box,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type const ::gfx::RectF&>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "landmarks"), this->landmarks,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type std::vector<LandmarkPtr>>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
}

bool FaceDetectionResult::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  return Data_::Validate(data, validation_context);
}
FaceDetectorOptions::FaceDetectorOptions()
    : max_detected_faces(),
      fast_mode() {}

FaceDetectorOptions::FaceDetectorOptions(
    uint32_t max_detected_faces_in,
    bool fast_mode_in)
    : max_detected_faces(std::move(max_detected_faces_in)),
      fast_mode(std::move(fast_mode_in)) {}

FaceDetectorOptions::~FaceDetectorOptions() = default;
size_t FaceDetectorOptions::Hash(size_t seed) const {
  seed = mojo::internal::Hash(seed, this->max_detected_faces);
  seed = mojo::internal::Hash(seed, this->fast_mode);
  return seed;
}

void FaceDetectorOptions::WriteIntoTrace(perfetto::TracedValue context) const {
  auto dict = std::move(context).WriteDictionary();
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "max_detected_faces"), this->max_detected_faces,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type uint32_t>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "fast_mode"), this->fast_mode,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type bool>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
}

bool FaceDetectorOptions::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  return Data_::Validate(data, validation_context);
}
const char FaceDetection::Name_[] = "shape_detection.mojom.FaceDetection";

class FaceDetection_Detect_ForwardToCallback
    : public mojo::MessageReceiver {
 public:
  FaceDetection_Detect_ForwardToCallback(
      FaceDetection::DetectCallback callback
      ) : callback_(std::move(callback)) {
  }
  bool Accept(mojo::Message* message) override;
 private:
  FaceDetection::DetectCallback callback_;
  DISALLOW_COPY_AND_ASSIGN(FaceDetection_Detect_ForwardToCallback);
};

FaceDetectionProxy::FaceDetectionProxy(mojo::MessageReceiverWithResponder* receiver)
    : receiver_(receiver) {
}

void FaceDetectionProxy::Detect(
    const ::SkBitmap& in_bitmap_data, DetectCallback callback) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT1(
    "mojom", "shape_detection::mojom::FaceDetection::Detect", "input_parameters",
    [&](perfetto::TracedValue context){
      auto dict = std::move(context).WriteDictionary();
      perfetto::WriteIntoTracedValueWithFallback(
           dict.AddItem("bitmap_data"), in_bitmap_data,
                        "<value of type const ::SkBitmap&>");
   });
#endif
  const bool kExpectsResponse = true;
  const bool kIsSync = false;
  const bool kAllowInterrupt = true;
  
  const uint32_t kFlags =
      ((kExpectsResponse) ? mojo::Message::kFlagExpectsResponse : 0) |
      ((kIsSync) ? mojo::Message::kFlagIsSync : 0) |
      ((kAllowInterrupt) ? 0 : mojo::Message::kFlagNoInterrupt);
  
  mojo::Message message(
      internal::kFaceDetection_Detect_Name, kFlags, 0, 0, nullptr);
  mojo::internal::MessageFragment<
      ::shape_detection::mojom::internal::FaceDetection_Detect_Params_Data> params(
          message);
  params.Allocate();
  mojo::internal::MessageFragment<
      typename decltype(params->bitmap_data)::BaseType> bitmap_data_fragment(
          params.message());
  mojo::internal::Serialize<::skia::mojom::BitmapN32DataView>(
      in_bitmap_data, bitmap_data_fragment);
  params->bitmap_data.Set(
      bitmap_data_fragment.is_null() ? nullptr : bitmap_data_fragment.data());
  MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
      params->bitmap_data.is_null(),
      mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
      "null bitmap_data in FaceDetection.Detect request");

#if defined(ENABLE_IPC_FUZZER)
  message.set_interface_name(FaceDetection::Name_);
  message.set_method_name("Detect");
#endif
  std::unique_ptr<mojo::MessageReceiver> responder(
      new FaceDetection_Detect_ForwardToCallback(
          std::move(callback)));
  ignore_result(receiver_->AcceptWithResponder(&message, std::move(responder)));
}
class FaceDetection_Detect_ProxyToResponder {
 public:
  static FaceDetection::DetectCallback CreateCallback(
      uint64_t request_id,
      bool is_sync,
      std::unique_ptr<mojo::MessageReceiverWithStatus>* responder) {
    std::unique_ptr<FaceDetection_Detect_ProxyToResponder> proxy(
        new FaceDetection_Detect_ProxyToResponder(
            request_id, is_sync, responder));
    return base::BindOnce(&FaceDetection_Detect_ProxyToResponder::Run,
                          std::move(proxy));
  }

  ~FaceDetection_Detect_ProxyToResponder() {
#if DCHECK_IS_ON()
    if (responder_) {
      // If we're being destroyed without being run, we want to ensure the
      // binding endpoint has been closed. This checks for that asynchronously.
      // We pass a bound generated callback to handle the response so that any
      // resulting DCHECK stack will have useful interface type information.
      responder_->IsConnectedAsync(base::BindOnce(&OnIsConnectedComplete));
    }
#endif
    // If the Callback was dropped then deleting the responder will close
    // the pipe so the calling application knows to stop waiting for a reply.
    responder_ = nullptr;
  }

 private:
  FaceDetection_Detect_ProxyToResponder(
      uint64_t request_id,
      bool is_sync,
      std::unique_ptr<mojo::MessageReceiverWithStatus>* responder)
      : request_id_(request_id),
        is_sync_(is_sync),
        responder_(std::move(*responder)) {
  }

#if DCHECK_IS_ON()
  static void OnIsConnectedComplete(bool connected) {
    DCHECK(!connected)
        << "FaceDetection::DetectCallback was destroyed without "
        << "first either being run or its corresponding binding being closed. "
        << "It is an error to drop response callbacks which still correspond "
        << "to an open interface pipe.";
  }
#endif

  void Run(
      std::vector<FaceDetectionResultPtr> in_results);

  uint64_t request_id_;
  bool is_sync_;
  std::unique_ptr<mojo::MessageReceiverWithStatus> responder_;

  DISALLOW_COPY_AND_ASSIGN(FaceDetection_Detect_ProxyToResponder);
};

bool FaceDetection_Detect_ForwardToCallback::Accept(
    mojo::Message* message) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT1("mojom", "shape_detection::mojom::FaceDetection::DetectCallback",
               "message", message->name());
#endif

  DCHECK(message->is_serialized());
  internal::FaceDetection_Detect_ResponseParams_Data* params =
      reinterpret_cast<
          internal::FaceDetection_Detect_ResponseParams_Data*>(
              message->mutable_payload());
  
  bool success = true;
  std::vector<FaceDetectionResultPtr> p_results{};
  FaceDetection_Detect_ResponseParamsDataView input_data_view(params, message);
  
  if (success && !input_data_view.ReadResults(&p_results))
    success = false;
  if (!success) {
    ReportValidationErrorForMessage(
        message,
        mojo::internal::VALIDATION_ERROR_DESERIALIZATION_FAILED,
        FaceDetection::Name_, 0, true);
    return false;
  }
  if (!callback_.is_null())
    std::move(callback_).Run(
std::move(p_results));
  return true;
}

void FaceDetection_Detect_ProxyToResponder::Run(
    std::vector<FaceDetectionResultPtr> in_results) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT_BEGIN1(
    "mojom", "(Impl)shape_detection::mojom::FaceDetection::DetectCallback", "async_response_parameters",
    [&](perfetto::TracedValue context){
      auto dict = std::move(context).WriteDictionary();
      perfetto::WriteIntoTracedValueWithFallback(
           dict.AddItem("results"), in_results,
                        "<value of type std::vector<FaceDetectionResultPtr>>");
   });
#endif
  
  const uint32_t kFlags = mojo::Message::kFlagIsResponse |
      ((is_sync_) ? mojo::Message::kFlagIsSync : 0) |
      ((true) ? 0 : mojo::Message::kFlagNoInterrupt);
  
  mojo::Message message(
      internal::kFaceDetection_Detect_Name, kFlags, 0, 0, nullptr);
  mojo::internal::MessageFragment<
      ::shape_detection::mojom::internal::FaceDetection_Detect_ResponseParams_Data> params(
          message);
  params.Allocate();
  mojo::internal::MessageFragment<
      typename decltype(params->results)::BaseType>
      results_fragment(params.message());
  const mojo::internal::ContainerValidateParams results_validate_params(
      0, false, nullptr);
  mojo::internal::Serialize<mojo::ArrayDataView<::shape_detection::mojom::FaceDetectionResultDataView>>(
      in_results, results_fragment, &results_validate_params);
  params->results.Set(
      results_fragment.is_null() ? nullptr : results_fragment.data());
  MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
      params->results.is_null(),
      mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
      "null results in ");

#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT_END1("mojom", "(Impl)shape_detection::mojom::FaceDetection::DetectCallback", "message",
                   message.name());
#endif

#if defined(ENABLE_IPC_FUZZER)
  message.set_interface_name(FaceDetection::Name_);
  message.set_method_name("Detect");
#endif

  message.set_request_id(request_id_);
  ignore_result(responder_->Accept(&message));
  // TODO(darin): Accept() returning false indicates a malformed message, and
  // that may be good reason to close the connection. However, we don't have a
  // way to do that from here. We should add a way.
  responder_ = nullptr;
}

// static
bool FaceDetectionStubDispatch::Accept(
    FaceDetection* impl,
    mojo::Message* message) {
  switch (message->header()->name) {
    case internal::kFaceDetection_Detect_Name: {
      break;
    }
  }
  return false;
}

// static
bool FaceDetectionStubDispatch::AcceptWithResponder(
    FaceDetection* impl,
    mojo::Message* message,
    std::unique_ptr<mojo::MessageReceiverWithStatus> responder) {
  const bool message_is_sync = message->has_flag(mojo::Message::kFlagIsSync);
  const uint64_t request_id = message->request_id();
  ALLOW_UNUSED_LOCAL(message_is_sync);
  ALLOW_UNUSED_LOCAL(request_id);
  switch (message->header()->name) {
    case internal::kFaceDetection_Detect_Name: {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      TRACE_EVENT1(
          "mojom",
          "(Impl)shape_detection::mojom::FaceDetection::Detect",
          "message", message->name());
#endif
      static constexpr uint32_t kMessageHash = base::MD5Hash32Constexpr(
              "(Impl)shape_detection::mojom::FaceDetection::Detect");
      base::TaskAnnotator::ScopedSetIpcHash scoped_ipc_hash(kMessageHash);

      internal::FaceDetection_Detect_Params_Data* params =
          reinterpret_cast<
              internal::FaceDetection_Detect_Params_Data*>(
                  message->mutable_payload());
      
      bool success = true;
      ::SkBitmap p_bitmap_data{};
      FaceDetection_Detect_ParamsDataView input_data_view(params, message);
      
      if (success && !input_data_view.ReadBitmapData(&p_bitmap_data))
        success = false;
      if (!success) {
        ReportValidationErrorForMessage(
            message,
            mojo::internal::VALIDATION_ERROR_DESERIALIZATION_FAILED,
            FaceDetection::Name_, 0, false);
        return false;
      }
      FaceDetection::DetectCallback callback =
          FaceDetection_Detect_ProxyToResponder::CreateCallback(
              message->request_id(), message_is_sync, &responder);
      // A null |impl| means no implementation was bound.
      DCHECK(impl);
      impl->Detect(
std::move(p_bitmap_data), std::move(callback));
      return true;
    }
  }
  return false;
}


static const mojo::internal::GenericValidationInfo kFaceDetectionValidationInfo[] = {
    {&internal::FaceDetection_Detect_Params_Data::Validate,
     &internal::FaceDetection_Detect_ResponseParams_Data::Validate},
};

bool FaceDetectionRequestValidator::Accept(mojo::Message* message) {
  const char* name = ::shape_detection::mojom::FaceDetection::Name_;
  return mojo::internal::ValidateRequestGenericPacked(message, name, kFaceDetectionValidationInfo);
}

bool FaceDetectionResponseValidator::Accept(mojo::Message* message) {
  const char* name = ::shape_detection::mojom::FaceDetection::Name_;
  return mojo::internal::ValidateResponseGenericPacked(message, name, kFaceDetectionValidationInfo);
}
}  // namespace mojom
}  // namespace shape_detection

namespace mojo {


// static
bool StructTraits<::shape_detection::mojom::Landmark::DataView, ::shape_detection::mojom::LandmarkPtr>::Read(
    ::shape_detection::mojom::Landmark::DataView input,
    ::shape_detection::mojom::LandmarkPtr* output) {
  bool success = true;
  ::shape_detection::mojom::LandmarkPtr result(::shape_detection::mojom::Landmark::New());
  
      if (success && !input.ReadLocations(&result->locations))
        success = false;
      if (success && !input.ReadType(&result->type))
        success = false;
  *output = std::move(result);
  return success;
}


// static
bool StructTraits<::shape_detection::mojom::FaceDetectionResult::DataView, ::shape_detection::mojom::FaceDetectionResultPtr>::Read(
    ::shape_detection::mojom::FaceDetectionResult::DataView input,
    ::shape_detection::mojom::FaceDetectionResultPtr* output) {
  bool success = true;
  ::shape_detection::mojom::FaceDetectionResultPtr result(::shape_detection::mojom::FaceDetectionResult::New());
  
      if (success && !input.ReadBoundingBox(&result->bounding_box))
        success = false;
      if (success && !input.ReadLandmarks(&result->landmarks))
        success = false;
  *output = std::move(result);
  return success;
}


// static
bool StructTraits<::shape_detection::mojom::FaceDetectorOptions::DataView, ::shape_detection::mojom::FaceDetectorOptionsPtr>::Read(
    ::shape_detection::mojom::FaceDetectorOptions::DataView input,
    ::shape_detection::mojom::FaceDetectorOptionsPtr* output) {
  bool success = true;
  ::shape_detection::mojom::FaceDetectorOptionsPtr result(::shape_detection::mojom::FaceDetectorOptions::New());
  
      if (success)
        result->max_detected_faces = input.max_detected_faces();
      if (success)
        result->fast_mode = input.fast_mode();
  *output = std::move(result);
  return success;
}

}  // namespace mojo

#if defined(__clang__)
#pragma clang diagnostic pop
#endif