// Component cho các link trong accordion và desktop layout
const FooterLink = ({ href, children }) => (
  <a href={href} className="block text-[#0d0c22] hover:text-[#f13c20]">
    {children}
  </a>
);

export default FooterLink;
