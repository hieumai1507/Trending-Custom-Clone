import SocialIcon from "./SocialIcon";
import { socialLinks } from "@/constants/footerData";

const ContactInformation = () => {
  return (
    <div className="text-left">
      <a href="/">
        <img
          src="https://scontent.fhan14-4.fna.fbcdn.net/v/t1.15752-9/479685136_636256915520767_8125932795209894720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KlMEPJ7Y6CIQ7kNvgFh1Lmx&_nc_oc=Adh8ls_79XSbhKwl0Wt2dt8gH3hpAFrJBKU4txoTC9IoU63amrQSa1zgcS7Ws3XDiq8&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&oh=03_Q7cD1gFYFIx_UNfGWy9MiYaC3N9VuR6FHhpkJvykHYxg5ZUsww&oe=67D76C0A"
          alt=" IAN P GREINER LLC"
          className="h-12 mb-6 max-w-[133px]"
        />
      </a>
      <h3 className="font-semibold mb-4">Get in touch?</h3>
      <div className="space-y-3 text-sm">
        <p>
          <span className="font-semibold">Email 24/7:</span>{" "}
          <a href="mailto:contact@ianpgreiner.com" className="">
            contact@ianpgreiner.com
          </a>
        </p>
        <p className="block">
          <span className="font-semibold">Phone contact:</span>{" "}
          <span className="text-[#d0c22]">(+84) 934 502 889</span>
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
