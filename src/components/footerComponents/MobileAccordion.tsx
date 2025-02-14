import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterLink from "./FooterLink";
import { Info, MessageCircleQuestion, ShieldCheck } from "lucide-react";

const MobileAccordion = ({ infoLinks, policiesLinks, helpLinks }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="information">
        <AccordionTrigger className="px-6 font-bold">
          <Info width={20} height={20} /> Information
        </AccordionTrigger>
        <AccordionContent className="px-6">
          <div className="space-y-3 text-[#6e6d7a]">
            {infoLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="policies">
        <AccordionTrigger className="px-6 font-bold">
          <ShieldCheck width={20} height={20} /> Policies
        </AccordionTrigger>
        <AccordionContent className="px-6">
          <div className="space-y-3 text-[#6e6d7a]">
            {policiesLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="help">
        <AccordionTrigger className="px-6 font-bold">
          <MessageCircleQuestion width={20} height={20} /> Help
        </AccordionTrigger>
        <AccordionContent className="px-6">
          <div className="space-y-3 text-[#6e6d7a]">
            {helpLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MobileAccordion;
