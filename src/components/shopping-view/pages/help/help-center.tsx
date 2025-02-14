import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import {
  faqData,
  FaqItem,
  helpTopics,
} from "@/constants/help/help-center-data";

const HelpCenter: React.FC = () => {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const contentRefs = useRef<{ [key: string]: HTMLDivElement }>({});

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestion((prev) => (prev === questionId ? null : questionId));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredFaqs = faqData.filter((faq: FaqItem) => {
    const questionMatch = faq.question
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const answerMatch = faq.answer.some((item) => {
      if (typeof item === "string") {
        return item.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (typeof item === "object" && item.content) {
        return item.content.some((contentItem) =>
          contentItem.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (typeof item === "object" && item.list) {
        return item.list.some((listItem) =>
          listItem.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false;
    });

    return questionMatch || answerMatch;
  });

  useEffect(() => {
    if (expandedQuestion) {
      // Get the height of the content when it's expanded
      const contentHeight = contentRefs.current[expandedQuestion]?.scrollHeight;

      // Apply the transition and set the height to auto (for animation)
      if (contentRefs.current[expandedQuestion]) {
        contentRefs.current[
          expandedQuestion
        ].style.height = `${contentHeight}px`;
      }
    }

    return () => {
      // Cleanup when component unmounts or expandedQuestion changes
      if (expandedQuestion && contentRefs.current[expandedQuestion]) {
        contentRefs.current[expandedQuestion].style.height = "0px"; // Reset height when unmounting/collapsing
      }
    };
  }, [expandedQuestion]);

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <div
        className="py-16 relative"
        style={{
          backgroundImage:
            "url(https://trendingcustom.com/cdn/shop/files/67686ed315f0cb4f6cf190e9c46853e1_1920x.jpg?v=9022245673282680233)", // Replace with actual image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            How can we help?
          </h1>
          <div className="mx-auto w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search
                  className="text-gray-500 dark:text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
          Most Important Questions
        </h2>
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className={`bg-[#F2F2F7] border border-gray-200 rounded-md shadow-sm mb-4 ${
              expandedQuestion === faq.id ? "bg-red-50 text-white" : ""
            }`}
          >
            <button
              className={`w-full py-3 px-4 text-left font-bold flex items-center justify-between   hover:bg-gray-50 rounded-t-md ${
                expandedQuestion === faq.id ? "text-white" : "text-gray-900"
              }`}
              style={{
                backgroundColor:
                  expandedQuestion === faq.id ? "#F13C20" : "transparent",
              }}
              onClick={() => toggleQuestion(faq.id)}
              aria-expanded={expandedQuestion === faq.id}
              aria-controls={`faq-content-${faq.id}`}
            >
              {faq.question}
              {expandedQuestion === faq.id ? (
                <ChevronUp size={20} color="white" />
              ) : (
                <ChevronDown size={20} color="#4B5563" />
              )}
            </button>
            {expandedQuestion === faq.id && (
              <div
                id={`faq-content-${faq.id}`}
                className="py-2 px-4 text-gray-700 text-left block overflow-hidden transition-height duration-300 ease-in-out"
                aria-hidden={expandedQuestion !== faq.id}
                ref={(el) => (contentRefs.current[faq.id] = el)}
                style={{
                  height: "0px", // Initially set to 0
                }}
              >
                {faq.answer.map((item, index) => {
                  if (typeof item === "string") {
                    return <p key={index}>{item}</p>;
                  } else if (
                    typeof item === "object" &&
                    item !== null &&
                    "imageSrc" in item
                  ) {
                    return (
                      <img
                        key={index}
                        src={item.imageSrc}
                        alt={item.imageAlt || "FAQ Image"}
                        className="max-w-full h-auto"
                      />
                    );
                  } else if (
                    typeof item === "object" &&
                    item !== null &&
                    "content" in item
                  ) {
                    return (
                      <div key={index}>
                        {item.content.map((content, contentIndex) => (
                          <p key={contentIndex}>{content}</p>
                        ))}
                      </div>
                    );
                  } else if (
                    typeof item === "object" &&
                    item !== null &&
                    "list" in item
                  ) {
                    return (
                      <ul key={index} className="list-disc pl-5 block">
                        {item.list.map((listItem, listIndex) => (
                          <li key={listIndex}>{listItem}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* section 2 */}
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
          What do you need help with?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {helpTopics.map((topic, index) => (
            <a key={index} href={topic.link || "#"} className="cursor-pointer">
              <div className="bg-white rounded-md border border-[#D1D1D6] shadow-md p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200">
                <topic.icon className="text-orange-500 h-8 w-8 mb-2" />
                <p className="text-gray-700 text-sm text-center">
                  {topic.label}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* "Didn't find what you were looking for?" section */}
        <div className="mt-12 text-center flex flex-col md:flex-row items-center justify-center">
          <img
            src="https://trendingcustom.com/cdn/shop/files/contact-form-image_1104x.png?v=8136496228665217996"
            alt="Contact Support"
            className="max-w-full md:max-w-lg mr-0 md:mr-8 mb-4 md:mb-0"
          />
          <div className="text-left align-middle">
            <p className="mb-2">
              We strive to provide the most up-to-date information. If you need
              further assistance, please reach out through our contact form, and
              we'll get back to you as soon as possible.
            </p>
            <a href="/pages/contact-us">
              <button className="bg-white text-orange-500 border border-orange-500 rounded-md py-2 px-4 hover:bg-orange-50 hover:shadow-md transition-shadow duration-200 block">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
