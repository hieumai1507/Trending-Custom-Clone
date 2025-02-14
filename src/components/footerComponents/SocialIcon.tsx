// Component cho các icon mạng xã hội
const SocialIcon = ({ src, alt, href }) => (
  <a href={href}>
    <img src={src} alt={alt} />
  </a>
);

export default SocialIcon;
