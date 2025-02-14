import ReplacementReFundData from "@/constants/policies/replacement-refund-data";
import React from "react";

const ReplacementRefund: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800 text-left mt-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        <p className="block mb-4">30 DAYS</p>
        Refund/Replacement Policy
      </h1>
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          {/* First Section: Full Refund/Replacement Policy */}
          <div className="bg-white p-8 rounded-lg text-center mb-8">
            <p className="text-gray-700 text-lg mb-4">
              {ReplacementReFundData.fullRefund.description}
            </p>
            <div className="flex justify-center items-center mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ReplacementReFundData.fullRefund.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-md text-gray-700 text-[16px]"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>

          {/* Second Section: No Refund & Replacement */}
          <div className="bg-white p-8 rounded-lg text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {ReplacementReFundData.noRefund.title}
            </h2>
            <p className="text-gray-700 text-[16px] mb-4">
              {ReplacementReFundData.noRefund.description}
            </p>
            <div className="flex justify-center items-center mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ReplacementReFundData.noRefund.reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-md text-gray-700 text-[16px]"
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>

          {/* Third Section: Refund and Replacement Service Procedure */}
          <div className="bg-white p-8 rounded-lg text-center mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {ReplacementReFundData.procedure.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ReplacementReFundData.procedure.steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-[16px]">
                    {step.description}
                    {step.link && (
                      <a
                        href={step.link.url}
                        className="text-blue-500 underline block"
                      >
                        {step.link.text}
                      </a>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fourth Section: Refund Time */}
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {ReplacementReFundData.refundTime.title}
            </h2>
            <p className="text-gray-700 text-[16px] mb-4">
              {ReplacementReFundData.refundTime.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ReplacementReFundData.refundTime.methods.map((method, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-md text-gray-700 text-[16px]"
                >
                  <h4 className="font-semibold mb-2">{method.title}</h4>
                  {method.time}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplacementRefund;
