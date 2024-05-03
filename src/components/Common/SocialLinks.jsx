import Link from "next/link";

const SocialLinks = ({ data }) => {
  return (
    <ul className="list-social-media">
      {data &&
        data.map((linkData, index) => {
          const { link, iconClass } = linkData;
          return (
            <li key={index}>
              <Link href={link || ""} className="link-social-media">
                <i className={iconClass}></i>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default SocialLinks;
