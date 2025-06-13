import SocialIcon from "./SocialIcon";
import { socialLinks } from "@/constants/footerData";

const ContactInformation = () => {
  return (
    <div className="text-left">
      <a href="/">
        <h3 className="font-semibold mb-6 no-underline inline-flex">
          <div className="text-black"> </div>
          NGUYỄN TIẾN ĐẠT LIMITED
        </h3>
      </a>
      <h3 className="font-semibold mb-4">Get in touch?</h3>
      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Email 24/7:</span>{" "}
          <a href="mailto:contact@ianpgreiner.com" className="">
            firefightershop.org
          </a>
        </p>

        <div>
          <p className="font-semibold">Location: </p>
          <p className="text-[#d0c22]">100 HWY 34 EAST ALBIA IA 52531</p>
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
