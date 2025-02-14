import SocialIcon from "./SocialIcon";
import { socialLinks } from "@/constants/footerData";

const ContactInformation = () => {
  return (
    <div className="text-left">
      <img
        src="https://trendingcustom.com/cdn/shop/t/57/assets/logo.svg?v=75357380592425913601684321072"
        alt="Trending Custom"
        className="h-12 mb-6 max-w-[133px]"
      />
      <h3 className="font-semibold mb-4">Get in touch?</h3>
      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Email 24/7:</span>{" "}
          <a href="mailto:support@trendingcustom.com" className="">
            support@trendingcustom.com
          </a>
        </p>
        <p className="block">
          <span className="font-semibold">Live chat:</span>{" "}
          <span className="text-[#d0c22]">
            Online from 9.30 AM to 5 PM (PST), Mon-Sun
          </span>
        </p>
        <div>
          <p className="font-semibold">US Warehouse:</p>
          <p className="text-[#d0c22]">
            584 Castro Street #3053, San Francisco, CA 94114
          </p>
        </div>
        <div>
          <p className="font-semibold">Canada:</p>
          <p className="text-[#d0c22]">
            422 Richards St, Vancouver, BC V6B 2Z4
          </p>
        </div>
        <div>
          <p className="font-semibold">Singapore:</p>
          <p className="text-[#d0c22]">
            66 Rangoon Road, #02-66, R66 Apartments, Singapore 218356
          </p>
        </div>
        <div className="flex flex-row gap-1">
          {socialLinks.map((social, index) => (
            <SocialIcon
              key={index}
              src={social.src}
              alt={social.alt}
              href={social.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
