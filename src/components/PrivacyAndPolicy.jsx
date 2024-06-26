import { pageLoadStart } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";
import BackgroundImages from "./Common/BackgroundImages";


const renderTextWithDecorations = (textData) => {
  if (!textData.decorations || textData.decorations.length === 0) {
    return textData.text;
  }

  return textData.decorations.reduce((acc, decoration) => {
    switch (decoration.type) {
      case "ITALIC":
        return <i>{acc}</i>;
      case "BOLD":
        return <b>{acc}</b>;
      case "LINK":
        return (
          <a
            href={decoration.linkData.link.url}
            target="_blank"
            rel="noreferrer"
          >
            {acc}
          </a>
        );
      default:
        return acc;
    }
  }, textData.text);
};

const renderNode = (node) => {
  switch (node.type) {
    case "HEADING":
      const headingClass = `fs--${
        30 + node.headingData.level * 2
      } text-center text-uppercase white-1 split-chars`;
      return (
        <HeadingComponent
          level={node.headingData.level}
          className={headingClass}
        >
          {renderTextWithDecorations(node.nodes[0].textData)}
        </HeadingComponent>
      );
    case "PARAGRAPH":
      return (
        <p>
          {node.nodes.map((n, idx) => (
            <span key={idx}>{renderTextWithDecorations(n.textData)}</span>
          ))}
        </p>
      );
    case "ORDERED_LIST":
      return (
        <ol>
          {node.nodes.map((listItem) => (
            <li key={listItem.id}>
              {listItem.nodes[0].nodes.map((n, idx) => (
                <span key={idx}>{renderTextWithDecorations(n.textData)}</span>
              ))}
            </li>
          ))}
        </ol>
      );
    case "BULLETED_LIST":
      return (
        <ul>
          {node.nodes.map((listItem) => (
            <li key={listItem.id}>
              {listItem.nodes[0].nodes.map((n, idx) => (
                <span key={idx}>{renderTextWithDecorations(n.textData)}</span>
              ))}
            </li>
          ))}
        </ul>
      );
    case "DIVIDER":
      return <hr />;
    default:
      return null;
  }
};
const HeadingComponent = ({ level, children }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag>{children}</HeadingTag>;
};
const PrivacyAndPolicy = ({ data }) => {
  const router = useRouter();
  const nodes = data.content.nodes;
  return (
    <div className="section-terms">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-11 mx-mobile-auto offset-lg-3">
            {nodes[0].nodes && (
              <h1
                className="fs--30 text-center text-uppercase white-1 "
                data-aos="d:loop"
              >
                {nodes[0].nodes[0].textData.text}
              </h1>
            )}
            <div
              className="editor mt-lg-50 mt-mobile-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              {nodes.slice(1).map((node) => (
                <div key={node.id}>{renderNode(node)}</div>
              ))}
            </div>
            <div className="flex-center mt-50">
              <button
                onClick={() => {
                  pageLoadStart();
                  router.back();
                }}
                className="btn-small-wide btn-gray btn-hover-red"
              >
                <div className="split-chars">
                  <span>{data.backToCollectionButtonLabel}</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-fixed no-tablet" data-aos="d:loop">
        <BackgroundImages pageSlug="terms-and-condition" />
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
