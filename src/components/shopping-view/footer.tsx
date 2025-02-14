"use client";

import InfoColumn from "../footerComponents/InfoColumn";
import MobileAccordion from "../footerComponents/MobileAccordion";
import { NewsletterSignup } from "../footerComponents/NewsletterSignup";
import { infoLinks, policiesLinks, helpLinks } from "@/constants/footerData.js";
import BottomSection from "../footerComponents/BottomSection.js";
import { Info, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import ContactInformation from "../footerComponents/ContactInformation.js";

export function ShoppingFooter() {
  return (
    <footer>
      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Mobile Accordion */}
      <div className="md:hidden">
        <MobileAccordion
          infoLinks={infoLinks}
          policiesLinks={policiesLinks}
          helpLinks={helpLinks}
        />
      </div>

      {/* Desktop Layout */}
      <div className="container mx-auto hidden md:block">
        <div className="grid grid-cols-4 gap-8 px-6 py-10">
          <InfoColumn
            title="Information"
            links={infoLinks}
            icon={<Info width={20} height={20} />}
          />
          <InfoColumn
            title="Policies"
            links={policiesLinks}
            icon={<ShieldCheck width={20} height={20} />}
          />
          <InfoColumn
            title="Help"
            links={helpLinks}
            icon={<MessageCircleQuestion width={20} height={20} />}
          />

          {/* Contact Information */}
          <ContactInformation />
        </div>
      </div>

      {/* Bottom Section */}
      <BottomSection />
    </footer>
  );
}
