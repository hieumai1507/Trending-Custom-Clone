import termsData from "@/constants/policies/termData";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl text-left block">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        {termsData.title}
      </h1>

      {termsData.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 block">
            {section.title}
          </h2>
          {section.content.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              className="text-gray-700 mb-4 leading-relaxed block"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <p className="text-center text-gray-500 mt-8">
        Questions about the Terms of Service should be sent to us at{" "}
        <a
          href={`mailto:${termsData.contactEmail}`}
          className="text-blue-500 hover:underline"
        >
          {termsData.contactEmail}
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
