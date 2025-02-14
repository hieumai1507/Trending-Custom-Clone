import cancellationModificationData from "@/constants/policies/cancellation-modification-data ";
import React from "react";

const CancellationModification: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800 text-left">
      <h1 className="text-3xl font-bold text-center mb-6">
        {cancellationModificationData.title}
      </h1>
      {cancellationModificationData.sections.map((section, index) => (
        <section key={index} className="mb-6">
          {section.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed block mb-2">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <p className="leading-relaxed block mb-12">
        {cancellationModificationData.note}
      </p>
    </div>
  );
};

export default CancellationModification;
