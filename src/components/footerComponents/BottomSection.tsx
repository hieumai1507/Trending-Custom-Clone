import SocialIcon from "./SocialIcon";
import PaymentIcon from "./PaymentIcon";
import { socialLinks, paymentMethods } from "@/constants/footerData";

const BottomSection = () => {
  return (
    <div className="border-t">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
          {/* Social Links */}
          <div className="flex space-x-4 md:hidden">
            {socialLinks.map((social, index) => (
              <SocialIcon
                key={index}
                src={social.src}
                alt={social.alt}
                href={social.href}
              />
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center space-x-4">
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=6215c2ff-22c6-4a51-ac3d-f4ff89588f3c&refurl=https://trendingcustom.com/">
              <img
                src="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=6215c2ff-22c6-4a51-ac3d-f4ff89588f3c"
                alt="DMCA Protected"
                className="h-8"
              />
            </a>
            <div className="flex flex-col items-center">
              <a href="https://www.trustpilot.com/review/trendingcustom.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector">
                <img
                  src="https://scontent.fhan2-5.fna.fbcdn.net/v/t1.15752-9/476225249_1082459457259540_8940055308338587218_n.png?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y5eJm225000Q7kNvgFWAkud&_nc_oc=AdgCTLdhVi4ESi8FgO0m08DimIEfpGI55AqKQdFxjHeISRhu6BLl0BHGmCLBUOmSRqA&_nc_zt=23&_nc_ht=scontent.fhan2-5.fna&oh=03_Q7cD1gGduYJCpN_vSiN8Dp5-nGi8mkVAceAzSPvfpLvF5GcSZg&oe=67CE2170"
                  alt="Trustpilot"
                  className="h-8 max-w-[170px]"
                />
              </a>
              <div className="text-[16px] font-bold ">
                Trusted by more than 2M+ customers
              </div>
            </div>
            <div className=" text-center text-sm text-[#828282]">
              © 2025 <a href="/"> IAN P GREINER LLC</a> .{" "}
              <a
                href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
                target="_blank"
              >
                Powered by Shopify
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-end float-right text-right items-center space-x-2 w-[35%] gap-4">
            {paymentMethods.map((payment, index) => (
              <PaymentIcon
                key={index}
                src={payment.src}
                alt={payment.alt}
                className={payment.className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
