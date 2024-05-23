import Link from "next/link";

const SocialLinks = ({ data }) => {
  return (
    <ul className="list-social-media">
      {data &&
        data
          .sort((a, b) => a.data.order - b.data.order)
          .map((linkData, index) => {
            const { link, iconClass } = linkData.data;
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
