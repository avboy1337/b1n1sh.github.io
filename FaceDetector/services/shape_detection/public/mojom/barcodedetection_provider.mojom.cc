// services/shape_detection/public/mojom/barcodedetection_provider.mojom.cc is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

#if defined(__clang__)
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wunused-private-field"
#endif

#include "services/shape_detection/public/mojom/barcodedetection_provider.mojom.h"

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

#include "services/shape_detection/public/mojom/barcodedetection_provider.mojom-params-data.h"
#include "services/shape_detection/public/mojom/barcodedetection_provider.mojom-shared-message-ids.h"

#include "services/shape_detection/public/mojom/barcodedetection_provider.mojom-import-headers.h"


#ifndef SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_PROVIDER_MOJOM_JUMBO_H_
#define SERVICES_SHAPE_DETECTION_PUBLIC_MOJOM_BARCODEDETECTION_PROVIDER_MOJOM_JUMBO_H_
#endif
namespace shape_detection {
namespace mojom {
BarcodeDetectorOptions::BarcodeDetectorOptions()
    : formats() {}

BarcodeDetectorOptions::BarcodeDetectorOptions(
    std::vector<::shape_detection::mojom::BarcodeFormat> formats_in)
    : formats(std::move(formats_in)) {}

BarcodeDetectorOptions::~BarcodeDetectorOptions() = default;

void BarcodeDetectorOptions::WriteIntoTrace(perfetto::TracedValue context) const {
  auto dict = std::move(context).WriteDictionary();
  perfetto::WriteIntoTracedValueWithFallback(
    dict.AddItem(
      "formats"), this->formats,
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      "<value of type const std::vector<::shape_detection::mojom::BarcodeFormat>&>"
#else
      "<value>"
#endif  // BUILDFLAG(MOJO_TRACE_ENABLED)
    );
}

bool BarcodeDetectorOptions::Validate(
    const void* data,
    mojo::internal::ValidationContext* validation_context) {
  return Data_::Validate(data, validation_context);
}
const char BarcodeDetectionProvider::Name_[] = "shape_detection.mojom.BarcodeDetectionProvider";

class BarcodeDetectionProvider_EnumerateSupportedFormats_ForwardToCallback
    : public mojo::MessageReceiver {
 public:
  BarcodeDetectionProvider_EnumerateSupportedFormats_ForwardToCallback(
      BarcodeDetectionProvider::EnumerateSupportedFormatsCallback callback
      ) : callback_(std::move(callback)) {
  }
  bool Accept(mojo::Message* message) override;
 private:
  BarcodeDetectionProvider::EnumerateSupportedFormatsCallback callback_;
  DISALLOW_COPY_AND_ASSIGN(BarcodeDetectionProvider_EnumerateSupportedFormats_ForwardToCallback);
};

BarcodeDetectionProviderProxy::BarcodeDetectionProviderProxy(mojo::MessageReceiverWithResponder* receiver)
    : receiver_(receiver) {
}

void BarcodeDetectionProviderProxy::CreateBarcodeDetection(
    ::mojo::PendingReceiver<::shape_detection::mojom::BarcodeDetection> in_receiver, BarcodeDetectorOptionsPtr in_options) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT1(
    "mojom", "shape_detection::mojom::BarcodeDetectionProvider::CreateBarcodeDetection", "input_parameters",
    [&](perfetto::TracedValue context){
      auto dict = std::move(context).WriteDictionary();
      perfetto::WriteIntoTracedValueWithFallback(
           dict.AddItem("receiver"), in_receiver,
                        "<value of type ::mojo::PendingReceiver<::shape_detection::mojom::BarcodeDetection>>");
      perfetto::WriteIntoTracedValueWithFallback(
           dict.AddItem("options"), in_options,
                        "<value of type BarcodeDetectorOptionsPtr>");
   });
#endif
  const bool kExpectsResponse = false;
  const bool kIsSync = false;
  const bool kAllowInterrupt = true;
  
  const uint32_t kFlags =
      ((kExpectsResponse) ? mojo::Message::kFlagExpectsResponse : 0) |
      ((kIsSync) ? mojo::Message::kFlagIsSync : 0) |
      ((kAllowInterrupt) ? 0 : mojo::Message::kFlagNoInterrupt);
  
  mojo::Message message(
      internal::kBarcodeDetectionProvider_CreateBarcodeDetection_Name, kFlags, 0, 0, nullptr);
  mojo::internal::MessageFragment<
      ::shape_detection::mojom::internal::BarcodeDetectionProvider_CreateBarcodeDetection_Params_Data> params(
          message);
  params.Allocate();
  mojo::internal::Serialize<mojo::InterfaceRequestDataView<::shape_detection::mojom::BarcodeDetectionInterfaceBase>>(
      in_receiver, &params->receiver, &params.message());
  MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
      !mojo::internal::IsHandleOrInterfaceValid(params->receiver),
      mojo::internal::VALIDATION_ERROR_UNEXPECTED_INVALID_HANDLE,
      "invalid receiver in BarcodeDetectionProvider.CreateBarcodeDetection request");
  mojo::internal::MessageFragment<
      typename decltype(params->options)::BaseType> options_fragment(
          params.message());
  mojo::internal::Serialize<::shape_detection::mojom::BarcodeDetectorOptionsDataView>(
      in_options, options_fragment);
  params->options.Set(
      options_fragment.is_null() ? nullptr : options_fragment.data());
  MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
      params->options.is_null(),
      mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
      "null options in BarcodeDetectionProvider.CreateBarcodeDetection request");

#if defined(ENABLE_IPC_FUZZER)
  message.set_interface_name(BarcodeDetectionProvider::Name_);
  message.set_method_name("CreateBarcodeDetection");
#endif
  // This return value may be ignored as false implies the Connector has
  // encountered an error, which will be visible through other means.
  ignore_result(receiver_->Accept(&message));
}

void BarcodeDetectionProviderProxy::EnumerateSupportedFormats(
    EnumerateSupportedFormatsCallback callback) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT0("mojom", "shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormats");
#endif
  const bool kExpectsResponse = true;
  const bool kIsSync = false;
  const bool kAllowInterrupt = true;
  
  const uint32_t kFlags =
      ((kExpectsResponse) ? mojo::Message::kFlagExpectsResponse : 0) |
      ((kIsSync) ? mojo::Message::kFlagIsSync : 0) |
      ((kAllowInterrupt) ? 0 : mojo::Message::kFlagNoInterrupt);
  
  mojo::Message message(
      internal::kBarcodeDetectionProvider_EnumerateSupportedFormats_Name, kFlags, 0, 0, nullptr);
  mojo::internal::MessageFragment<
      ::shape_detection::mojom::internal::BarcodeDetectionProvider_EnumerateSupportedFormats_Params_Data> params(
          message);
  params.Allocate();

#if defined(ENABLE_IPC_FUZZER)
  message.set_interface_name(BarcodeDetectionProvider::Name_);
  message.set_method_name("EnumerateSupportedFormats");
#endif
  std::unique_ptr<mojo::MessageReceiver> responder(
      new BarcodeDetectionProvider_EnumerateSupportedFormats_ForwardToCallback(
          std::move(callback)));
  ignore_result(receiver_->AcceptWithResponder(&message, std::move(responder)));
}
class BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder {
 public:
  static BarcodeDetectionProvider::EnumerateSupportedFormatsCallback CreateCallback(
      uint64_t request_id,
      bool is_sync,
      std::unique_ptr<mojo::MessageReceiverWithStatus>* responder) {
    std::unique_ptr<BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder> proxy(
        new BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder(
            request_id, is_sync, responder));
    return base::BindOnce(&BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder::Run,
                          std::move(proxy));
  }

  ~BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder() {
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
  BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder(
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
        << "BarcodeDetectionProvider::EnumerateSupportedFormatsCallback was destroyed without "
        << "first either being run or its corresponding binding being closed. "
        << "It is an error to drop response callbacks which still correspond "
        << "to an open interface pipe.";
  }
#endif

  void Run(
      const std::vector<::shape_detection::mojom::BarcodeFormat>& in_supported_formats);

  uint64_t request_id_;
  bool is_sync_;
  std::unique_ptr<mojo::MessageReceiverWithStatus> responder_;

  DISALLOW_COPY_AND_ASSIGN(BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder);
};

bool BarcodeDetectionProvider_EnumerateSupportedFormats_ForwardToCallback::Accept(
    mojo::Message* message) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT1("mojom", "shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormatsCallback",
               "message", message->name());
#endif

  DCHECK(message->is_serialized());
  internal::BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams_Data* params =
      reinterpret_cast<
          internal::BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams_Data*>(
              message->mutable_payload());
  
  bool success = true;
  std::vector<::shape_detection::mojom::BarcodeFormat> p_supported_formats{};
  BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParamsDataView input_data_view(params, message);
  
  if (success && !input_data_view.ReadSupportedFormats(&p_supported_formats))
    success = false;
  if (!success) {
    ReportValidationErrorForMessage(
        message,
        mojo::internal::VALIDATION_ERROR_DESERIALIZATION_FAILED,
        BarcodeDetectionProvider::Name_, 1, true);
    return false;
  }
  if (!callback_.is_null())
    std::move(callback_).Run(
std::move(p_supported_formats));
  return true;
}

void BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder::Run(
    const std::vector<::shape_detection::mojom::BarcodeFormat>& in_supported_formats) {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT_BEGIN1(
    "mojom", "(Impl)shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormatsCallback", "async_response_parameters",
    [&](perfetto::TracedValue context){
      auto dict = std::move(context).WriteDictionary();
      perfetto::WriteIntoTracedValueWithFallback(
           dict.AddItem("supported_formats"), in_supported_formats,
                        "<value of type const std::vector<::shape_detection::mojom::BarcodeFormat>&>");
   });
#endif
  
  const uint32_t kFlags = mojo::Message::kFlagIsResponse |
      ((is_sync_) ? mojo::Message::kFlagIsSync : 0) |
      ((true) ? 0 : mojo::Message::kFlagNoInterrupt);
  
  mojo::Message message(
      internal::kBarcodeDetectionProvider_EnumerateSupportedFormats_Name, kFlags, 0, 0, nullptr);
  mojo::internal::MessageFragment<
      ::shape_detection::mojom::internal::BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams_Data> params(
          message);
  params.Allocate();
  mojo::internal::MessageFragment<
      typename decltype(params->supported_formats)::BaseType>
      supported_formats_fragment(params.message());
  const mojo::internal::ContainerValidateParams supported_formats_validate_params(
      0, ::shape_detection::mojom::internal::BarcodeFormat_Data::Validate);
  mojo::internal::Serialize<mojo::ArrayDataView<::shape_detection::mojom::BarcodeFormat>>(
      in_supported_formats, supported_formats_fragment, &supported_formats_validate_params);
  params->supported_formats.Set(
      supported_formats_fragment.is_null() ? nullptr : supported_formats_fragment.data());
  MOJO_INTERNAL_DLOG_SERIALIZATION_WARNING(
      params->supported_formats.is_null(),
      mojo::internal::VALIDATION_ERROR_UNEXPECTED_NULL_POINTER,
      "null supported_formats in ");

#if BUILDFLAG(MOJO_TRACE_ENABLED)
  TRACE_EVENT_END1("mojom", "(Impl)shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormatsCallback", "message",
                   message.name());
#endif

#if defined(ENABLE_IPC_FUZZER)
  message.set_interface_name(BarcodeDetectionProvider::Name_);
  message.set_method_name("EnumerateSupportedFormats");
#endif

  message.set_request_id(request_id_);
  ignore_result(responder_->Accept(&message));
  // TODO(darin): Accept() returning false indicates a malformed message, and
  // that may be good reason to close the connection. However, we don't have a
  // way to do that from here. We should add a way.
  responder_ = nullptr;
}

// static
bool BarcodeDetectionProviderStubDispatch::Accept(
    BarcodeDetectionProvider* impl,
    mojo::Message* message) {
  switch (message->header()->name) {
    case internal::kBarcodeDetectionProvider_CreateBarcodeDetection_Name: {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      TRACE_EVENT1(
          "mojom",
          "(Impl)shape_detection::mojom::BarcodeDetectionProvider::CreateBarcodeDetection",
          "message", message->name());
#endif
      static constexpr uint32_t kMessageHash = base::MD5Hash32Constexpr(
              "(Impl)shape_detection::mojom::BarcodeDetectionProvider::CreateBarcodeDetection");
      base::TaskAnnotator::ScopedSetIpcHash scoped_ipc_hash(kMessageHash);

      DCHECK(message->is_serialized());
      internal::BarcodeDetectionProvider_CreateBarcodeDetection_Params_Data* params =
          reinterpret_cast<internal::BarcodeDetectionProvider_CreateBarcodeDetection_Params_Data*>(
              message->mutable_payload());
      
      bool success = true;
      ::mojo::PendingReceiver<::shape_detection::mojom::BarcodeDetection> p_receiver{};
      BarcodeDetectorOptionsPtr p_options{};
      BarcodeDetectionProvider_CreateBarcodeDetection_ParamsDataView input_data_view(params, message);
      
      if (success) {
        p_receiver =
            input_data_view.TakeReceiver<decltype(p_receiver)>();
      }
      if (success && !input_data_view.ReadOptions(&p_options))
        success = false;
      if (!success) {
        ReportValidationErrorForMessage(
            message,
            mojo::internal::VALIDATION_ERROR_DESERIALIZATION_FAILED,
            BarcodeDetectionProvider::Name_, 0, false);
        return false;
      }
      // A null |impl| means no implementation was bound.
      DCHECK(impl);
      impl->CreateBarcodeDetection(
std::move(p_receiver), 
std::move(p_options));
      return true;
    }
    case internal::kBarcodeDetectionProvider_EnumerateSupportedFormats_Name: {
      break;
    }
  }
  return false;
}

// static
bool BarcodeDetectionProviderStubDispatch::AcceptWithResponder(
    BarcodeDetectionProvider* impl,
    mojo::Message* message,
    std::unique_ptr<mojo::MessageReceiverWithStatus> responder) {
  const bool message_is_sync = message->has_flag(mojo::Message::kFlagIsSync);
  const uint64_t request_id = message->request_id();
  ALLOW_UNUSED_LOCAL(message_is_sync);
  ALLOW_UNUSED_LOCAL(request_id);
  switch (message->header()->name) {
    case internal::kBarcodeDetectionProvider_CreateBarcodeDetection_Name: {
      break;
    }
    case internal::kBarcodeDetectionProvider_EnumerateSupportedFormats_Name: {
#if BUILDFLAG(MOJO_TRACE_ENABLED)
      TRACE_EVENT1(
          "mojom",
          "(Impl)shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormats",
          "message", message->name());
#endif
      static constexpr uint32_t kMessageHash = base::MD5Hash32Constexpr(
              "(Impl)shape_detection::mojom::BarcodeDetectionProvider::EnumerateSupportedFormats");
      base::TaskAnnotator::ScopedSetIpcHash scoped_ipc_hash(kMessageHash);

      internal::BarcodeDetectionProvider_EnumerateSupportedFormats_Params_Data* params =
          reinterpret_cast<
              internal::BarcodeDetectionProvider_EnumerateSupportedFormats_Params_Data*>(
                  message->mutable_payload());
      
      bool success = true;
      BarcodeDetectionProvider_EnumerateSupportedFormats_ParamsDataView input_data_view(params, message);
      
      if (!success) {
        ReportValidationErrorForMessage(
            message,
            mojo::internal::VALIDATION_ERROR_DESERIALIZATION_FAILED,
            BarcodeDetectionProvider::Name_, 1, false);
        return false;
      }
      BarcodeDetectionProvider::EnumerateSupportedFormatsCallback callback =
          BarcodeDetectionProvider_EnumerateSupportedFormats_ProxyToResponder::CreateCallback(
              message->request_id(), message_is_sync, &responder);
      // A null |impl| means no implementation was bound.
      DCHECK(impl);
      impl->EnumerateSupportedFormats(std::move(callback));
      return true;
    }
  }
  return false;
}


static const mojo::internal::GenericValidationInfo kBarcodeDetectionProviderValidationInfo[] = {
    {&internal::BarcodeDetectionProvider_CreateBarcodeDetection_Params_Data::Validate,
     nullptr /* no response */},
    {&internal::BarcodeDetectionProvider_EnumerateSupportedFormats_Params_Data::Validate,
     &internal::BarcodeDetectionProvider_EnumerateSupportedFormats_ResponseParams_Data::Validate},
};

bool BarcodeDetectionProviderRequestValidator::Accept(mojo::Message* message) {
  const char* name = ::shape_detection::mojom::BarcodeDetectionProvider::Name_;
  return mojo::internal::ValidateRequestGenericPacked(message, name, kBarcodeDetectionProviderValidationInfo);
}

bool BarcodeDetectionProviderResponseValidator::Accept(mojo::Message* message) {
  const char* name = ::shape_detection::mojom::BarcodeDetectionProvider::Name_;
  return mojo::internal::ValidateResponseGenericPacked(message, name, kBarcodeDetectionProviderValidationInfo);
}
}  // namespace mojom
}  // namespace shape_detection

namespace mojo {


// static
bool StructTraits<::shape_detection::mojom::BarcodeDetectorOptions::DataView, ::shape_detection::mojom::BarcodeDetectorOptionsPtr>::Read(
    ::shape_detection::mojom::BarcodeDetectorOptions::DataView input,
    ::shape_detection::mojom::BarcodeDetectorOptionsPtr* output) {
  bool success = true;
  ::shape_detection::mojom::BarcodeDetectorOptionsPtr result(::shape_detection::mojom::BarcodeDetectorOptions::New());
  
      if (success && !input.ReadFormats(&result->formats))
        success = false;
  *output = std::move(result);
  return success;
}

}  // namespace mojo

#if defined(__clang__)
#pragma clang diagnostic pop
#endif