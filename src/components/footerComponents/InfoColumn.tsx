import FooterLink from "./FooterLink";
interface InfoColumnProps {
  title: string;
  links: { href: string; label: string }[];
  icon?: React.ReactNode;
}

// Component cho các cột thông tin (Information, Policies, Help)
const InfoColumn = ({ title, links }: InfoColumnProps) => (
  <div className="text-left">
    <h3 className="font-semibold mb-6 no-underline inline-flex">
      <div className="text-black"> </div>
      {title}
    </h3>
    <div className="space-y-3 text-left">
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  </div>
);

export default InfoColumn;
