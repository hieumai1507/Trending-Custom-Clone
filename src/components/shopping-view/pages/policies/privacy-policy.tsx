import privacyPolicyData from "@/constants/policies/privacy-policy-data";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-gray-800 text-left">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      {privacyPolicyData.sections.map((section, index) => (
        <section key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
          {section.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed block mb-2">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
