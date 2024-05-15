import AnimateLink from "@/components/Common/AnimateLink";

const Disclaimer = ({ data }) => {
  return (
    <p className="text-agree mt-lg-25 mt-mobile-30">
      {data.nodes[0].nodes[0].textData.text}
      <AnimateLink
        to={data?.nodes[0].nodes[1].textData.decorations[0].linkData.link.url.substring(
          data?.nodes[0].nodes[1].textData.decorations[0].linkData.link.url.lastIndexOf(
            "/"
          ) + 1
        )}
        className="btn-underlined-white"
      >
        <span>{data?.nodes[0].nodes[1].textData.text} </span>
      </AnimateLink>
      {data.nodes[0].nodes[2].textData.text}
      <AnimateLink
        to={data?.nodes[0].nodes[3].textData.decorations[0].linkData.link.url.substring(
          data?.nodes[0].nodes[3].textData.decorations[0].linkData.link.url.lastIndexOf(
            "/"
          ) + 1
        )}
        className="btn-underlined-white"
      >
        <span> {data.nodes[0].nodes[3].textData.text}</span>
      </AnimateLink>
    </p>
  );
};
export default Disclaimer;
