import AnimateLink from "./Common/AnimateLink";
import usePageInitialization from "../hooks/usePageInitialization";

const PrivacyAndPolicy = ({ pages }) => {
  usePageInitialization("succeeded", "pg-privacy-policy", ".initScript");

  return (
    <section class="section-terms">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-11 mx-mobile-auto offset-lg-3">
            <h1
              class="fs--30 text-center text-uppercase white-1 split-chars"
              data-aos="d:loop"
            >
              {pages && pages[0].nodes[0].textData.text}
            </h1>
            <div
              class="editor mt-lg-50 mt-mobile-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <h2>{pages && pages[1].nodes[0].textData.text}</h2>
              <p>
                {pages && pages[2].nodes[0].textData.text}{" "}
                <a
                  href={
                    pages &&
                    pages[2].nodes[1].textData?.decorations[0].linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages && pages[2].nodes[1].textData.text}
                </a>
              </p>

              <ol>
                {pages &&
                  pages[3].nodes.map((data, index) => {
                    return (
                      <li key={index}>
                        {data.nodes[0].nodes[0].textData.text}
                      </li>
                    );
                  })}
              </ol>
              <p>
                <i>{pages && pages[4].nodes[0].textData.text}</i>
                <a
                  href={
                    pages &&
                    pages[4].nodes[2].textData?.decorations[0].linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages && pages[4].nodes[2].textData.text}
                </a>
                <i>
                  {pages && pages[4].nodes[4].textData.text}
                  {pages && pages[4].nodes[5].textData.text}
                </i>
                <a
                  href={
                    pages &&
                    pages[4].nodes[6].textData?.decorations[0].linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages && pages[4].nodes[6].textData.text}
                </a>
              </p>
              <ul>
                {pages &&
                  pages[5].nodes.map((data, index) => {
                    return (
                      <li key={index}>
                        {data.nodes[0].nodes[0].textData.text}
                      </li>
                    );
                  })}
              </ul>
              <blockquote cite="http://loripsum.net">
                {pages && pages[7].nodes[0].textData.text}
              </blockquote>
              <dl>
                <dt>
                  <dfn>{pages && pages[9].nodes[0].textData.text}</dfn>
                </dt>
                <dd>{pages && pages[10].nodes[0].textData.text}</dd>
                <dt>
                  <dfn>{pages && pages[11].nodes[0].textData.text}</dfn>
                </dt>
                <dd>{pages && pages[12].nodes[0].textData.text}</dd>
              </dl>
              <h3>{pages && pages[14].nodes[0].textData.text}</h3>
              <p>
                {pages && pages[16].nodes[0].textData.text}
                <b>{pages && pages[16].nodes[1].textData.text}</b>
                <a
                  href={
                    pages &&
                    pages[16].nodes[3].textData?.decorations[0].linkData.link
                      .url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages && pages[16].nodes[3].textData.text}
                </a>
                {pages && pages[16].nodes[4].textData.text}
                <i>{pages && pages[16].nodes[5].textData.text}</i>
              </p>
            </div>
            <div class="flex-center mt-50">
              <AnimateLink
                to="/collections"
                className="btn-small-wide btn-gray btn-hover-red"
              >
                <div class="split-chars">
                  <span>Back to collections</span>
                </div>
              </AnimateLink>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-fixed no-tablet" data-aos="d:loop">
        <div class="container-img">
          <img
            src="images/img-01.jpg"
            data-preload
            class="no-mobile media"
            data-parallax-top
            data-translate-y="-20%"
            alt="terms-1"
          />
          <img
            src="images/img-02.jpg"
            data-preload
            class="no-desktop media"
            alt="terms-2"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndPolicy;
