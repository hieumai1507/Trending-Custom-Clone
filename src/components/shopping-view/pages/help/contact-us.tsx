import { useRef } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  concernOptions,
  contactEmail,
  helpLinks,
  responseTime,
} from "@/constants/help/contact-us-data";
import { ArrowRight } from "lucide-react";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleReset = () => {
    formRef.current?.reset();
  };

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-start mb-8 bg-[#f2f2f7] max-w-[160px] rounded-[6px] py-1 pl-3">
        <a
          href="/"
          className="text-gray-600 hover:text-gray-800 flex items-center text-sm"
        >
          Continue shopping
          <ArrowRight height={16} className="ml-1" />
        </a>
      </div>

      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 mx-auto max-w-2xl">
        <h2 className="text-3xl font-medium text-center mb-6">Contact Us</h2>
        <p className="text-gray-700 text-center mb-4 text-sm font-bold">
          Please contact us using the form below or via email at
          <a
            href={`mailto:${contactEmail}`}
            className="text-[#5551ff] block mt-1"
          >
            {contactEmail}
          </a>
        </p>
        <p className="text-gray-700 text-center mb-6 text-sm font-bold">
          We generally respond within {responseTime} of your inquiry.
        </p>

        <form
          ref={formRef}
          className="shadow-md rounded-lg mx-auto px-6 pt-6 pb-4 space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold text-left"
            >
              Your name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold text-left"
            >
              Your email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="concern"
              className="block text-gray-700 text-sm font-bold text-left"
            >
              Question/concern <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                {concernOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="border rounded p-3 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="recaptcha" className="mr-2" />
              <label htmlFor="recaptcha" className="text-sm text-gray-700">
                Tôi không phải là người máy
              </label>
            </div>
            <div className="text-xs text-gray-500 mt-2 md:mt-0 text-center md:text-right">
              <div>reCAPTCHA</div>
              <div>Privacy - Terms</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="w-full md:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#6ab73d] hover:bg-green-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Here are a few things you can take care of on your own
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {helpLinks.map((link) => (
            <a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#f2f2f7] border border-white hover:bg-white hover:border hover:border-[#222] text-gray-700 font-medium py-4 px-6 rounded-lg max-h-[56px]">
                {link.label}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
