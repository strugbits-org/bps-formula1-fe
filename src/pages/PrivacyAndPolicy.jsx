import AnimateLink from "../components/AnimateLink";
import usePageInitialization from "../hooks/usePageInitialization";
import { useAppSelector } from "../redux/hooks";

const PrivacyAndPolicy = () => {
  const { pages } = useAppSelector((state) => state.data);

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
              {pages?.privacy[0].nodes[0].textData.text}
            </h1>
            <div
              class="editor mt-lg-50 mt-mobile-30"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <h2>{pages?.privacy[1].nodes[0].textData.text}</h2>
              <p>
                {pages?.privacy[2].nodes[0].textData.text}{" "}
                <a
                  href={
                    pages?.privacy[2].nodes[1].textData?.decorations[0].linkData
                      .link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages?.privacy[2].nodes[1].textData.text}
                </a>
              </p>

              <ol>
                {pages?.privacy[3].nodes.map((data, index) => {
                  return (
                    <li key={index}>{data.nodes[0].nodes[0].textData.text}</li>
                  );
                })}
                {/* <li>Tibi hoc incredibile, quod beatissimum.</li>
                <li>Addidisti ad extremum etiam indoctum fuisse.</li>
                <li>
                  Praeclare enim Plato: Beatum, cui etiam in senectute
                  contigerit, ut sapientiam verasque opiniones assequi possit.
                </li>
                <li>Et non ex maxima parte de tota iudicabis?</li>
                <li>
                  Superiores tres erant, quae esse possent, quarum est una sola
                  defensa, eaque vehementer.
                </li>
                <li>Eadem nunc mea adversum te oratio est.</li> */}
              </ol>
              <p>
                <i>{pages?.privacy[4].nodes[0].textData.text}</i>
                <a
                  href={
                    pages?.privacy[4].nodes[2].textData?.decorations[0].linkData
                      .link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages?.privacy[4].nodes[2].textData.text}
                </a>
                <i>
                  {pages?.privacy[4].nodes[4].textData.text}
                  {pages?.privacy[4].nodes[5].textData.text}
                </i>
                <a
                  href={
                    pages?.privacy[4].nodes[6].textData?.decorations[0].linkData
                      .link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages?.privacy[4].nodes[6].textData.text}
                </a>
              </p>
              <ul>
                {pages?.privacy[5].nodes.map((data, index) => {
                  return (
                    <li key={index}>{data.nodes[0].nodes[0].textData.text}</li>
                  );
                })}
              </ul>
              <blockquote cite="http://loripsum.net">
                Quid affers, cur Thorius, cur Caius Postumius, cur omnium horum
                magister, Orata, non iucundissime vixerit?
              </blockquote>
              <dl>
                <dt>
                  <dfn>{pages?.privacy[7].nodes[0].textData.text}</dfn>
                </dt>
                <dd>{pages?.privacy[8].nodes[0].textData.text}</dd>
                <dt>
                  <dfn>{pages?.privacy[9].nodes[0].textData.text}</dfn>
                </dt>
                <dd>{pages?.privacy[10].nodes[0].textData.text}</dd>
              </dl>
              <h3>{pages?.privacy[12].nodes[0].textData.text}</h3>
              <p>
                {pages?.privacy[14].nodes[0].textData.text}
                <b>{pages?.privacy[14].nodes[1].textData.text}</b>
                <a
                  href={
                    pages?.privacy[14].nodes[3].textData?.decorations[0]
                      .linkData.link.url
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  {pages?.privacy[14].nodes[3].textData.text}
                </a>
                {pages?.privacy[14].nodes[4].textData.text}
                <i>{pages?.privacy[14].nodes[5].textData.text}</i>
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
