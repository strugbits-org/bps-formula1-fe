import { pageLoadStart } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";

const TermsAndCondition = ({ data }) => {
  const router = useRouter();
  return (
    <section className="section-terms">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-11 mx-mobile-auto offset-lg-3">
            <h1
              className="fs--30 text-center text-uppercase white-1 split-chars"
              data-aos="d:loop"
            >
              {data.content.nodes &&
                data.content.nodes[0].nodes[0].textData.text}
            </h1>
            <div
              className="editor mt-lg-50 mt-mobile-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <h2>
                {data.content.nodes &&
                  data.content.nodes[1].nodes[0].textData.text}
              </h2>
              <p>
                {data.content.nodes &&
                  data.content.nodes[2].nodes[0].textData.text}{" "}
                <a
                  href={
                    data.content.nodes &&
                    data.content.nodes[2].nodes[1].textData?.decorations[0]
                      .linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.content.nodes &&
                    data.content.nodes[2].nodes[1].textData.text}
                </a>
              </p>

              <ol>
                {data.content.nodes &&
                  data.content.nodes[3].nodes.map((data, index) => {
                    return (
                      <li key={index}>
                        {data.nodes[0].nodes[0].textData.text}
                      </li>
                    );
                  })}
              </ol>
              <p>
                <i>
                  {data.content.nodes &&
                    data.content.nodes[4].nodes[0].textData.text}
                </i>
                <a
                  href={
                    data.content.nodes &&
                    data.content.nodes[4].nodes[2].textData?.decorations[0]
                      .linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.content.nodes &&
                    data.content.nodes[4].nodes[2].textData.text}
                </a>
                <i>
                  {data.content.nodes &&
                    data.content.nodes[4].nodes[4].textData.text}
                  {data.content.nodes &&
                    data.content.nodes[4].nodes[5].textData.text}
                </i>
                <a
                  href={
                    data.content.nodes &&
                    data.content.nodes[4].nodes[6].textData?.decorations[0]
                      .linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.content.nodes &&
                    data.content.nodes[4].nodes[6].textData.text}
                </a>
              </p>
              <ul>
                {data.content.nodes &&
                  data.content.nodes[5].nodes.map((data, index) => {
                    return (
                      <li key={index}>
                        {data.nodes[0].nodes[0].textData.text}
                      </li>
                    );
                  })}
              </ul>
              <blockquote cite="http://loripsum.net">
                {data.content.nodes &&
                  data.content.nodes[7].nodes[0].textData.text}
              </blockquote>
              <dl>
                <dt>
                  <dfn>
                    {data.content.nodes &&
                      data.content.nodes[9].nodes[0].textData.text}
                  </dfn>
                </dt>
                <dd>
                  {data.content.nodes &&
                    data.content.nodes[10].nodes[0].textData.text}
                </dd>
                <dt>
                  <dfn>
                    {data.content.nodes &&
                      data.content.nodes[11].nodes[0].textData.text}
                  </dfn>
                </dt>
                <dd>
                  {data.content.nodes &&
                    data.content.nodes[12].nodes[0].textData.text}
                </dd>
              </dl>
              <h3>
                {data.content.nodes &&
                  data.content.nodes[14].nodes[0].textData.text}
              </h3>
              <p>
                {data.content.nodes &&
                  data.content.nodes[16].nodes[0].textData.text}
                <b>
                  {data.content.nodes &&
                    data.content.nodes[16].nodes[1].textData.text}
                </b>
                <a
                  href={
                    data.content.nodes &&
                    data.content.nodes[16].nodes[3].textData?.decorations[0]
                      .linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.content.nodes &&
                    data.content.nodes[16].nodes[3].textData.text}
                </a>
                {data.content.nodes &&
                  data.content.nodes[16].nodes[4].textData.text}
                <i>
                  {data.content.nodes &&
                    data.content.nodes[16].nodes[5].textData.text}
                </i>
              </p>
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
        <div className="container-img">
          <img
            src="images/img-01.jpg"
            data-preload
            className="no-mobile media"
            data-parallax-top
            data-translate-y="-20%"
            alt="terms-1"
          />
          <img
            src="images/img-02.jpg"
            data-preload
            className="no-desktop media"
            alt="terms-2"
          />
        </div>
      </div>
    </section>
  );
};

export default TermsAndCondition;
