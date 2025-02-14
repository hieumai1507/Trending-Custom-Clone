import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { trackingOrderData } from "@/constants/tracking-order-data";
export default function TrackingOrder() {
  const [faqExpanded, setFaqExpanded] = useState({}); // dynamic FAQ expansion state

  const toggleFaq = (questionId) => {
    setFaqExpanded((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="  flex flex-col items-center">
      <div className=" container mx-auto pb-12  relative z-10 ">
        <div className="bg-[#fdf5ef]">
          <h1 className="text-3xl text-center mb-4 font-normal text-gray-800 pt-16">
            Track your order
          </h1>

          {/* Order Tracking Form */}
          <div className=" rounded-lg p-6 mb-12 max-w-lg w-full mx-auto ">
            <div className="mb-4">
              <label
                htmlFor="orderNumber"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                placeholder="Order Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2 text-left"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Track My Order
            </button>

            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-black font-bold  text-sm underline hover:text-[#f13c20]"
              >
                I do not know my order number
              </a>
            </div>
          </div>
        </div>

        {/* Tracking FAQ */}
        <div className="max-w-lg w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Tracking FAQ
          </h2>

          {trackingOrderData.map((faq) => (
            <div
              className="bg-white rounded-md shadow-sm overflow-hidden mb-3"
              key={faq.id}
            >
              <button
                className="w-full py-3 px-4 text-left font-semibold flex items-center justify-between hover:bg-gray-50"
                onClick={() => toggleFaq(faq.id)}
              >
                {faq.question}
                {faqExpanded[faq.id] ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {faqExpanded[faq.id] && (
                <div className="py-2 px-4 text-gray-700 text-left">
                  {faq.answer}
                </div>
              )}
              {faqExpanded[faq.id] && faq.id === "q3" && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-12 max-w-lg w-full mx-auto">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                    Find My Order Number
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
