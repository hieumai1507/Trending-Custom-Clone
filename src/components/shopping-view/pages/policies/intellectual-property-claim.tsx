import ipClaimData from "@/constants/policies/ip-claim-data";
import React from "react";

const IntellectualPropertyClaim: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl text-left">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
        {ipClaimData.title}
      </h1>

      {ipClaimData.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
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

      {ipClaimData.complaintLink && (
        <p className="text-center text-gray-500 mt-8">
          You can file complaints through the link below:
          <br />
          <a
            href={ipClaimData.complaintLink}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ipClaimData.complaintLink}
          </a>
        </p>
      )}
    </div>
  );
};

export default IntellectualPropertyClaim;
