import collectionImage from "../images/gallery/img-09.jpg";
import AnimateLink from "./AnimateLink";

const CollectionData = [
  { name: "Legacy collection", image: collectionImage, link: "/collections" },
  { name: "Legacy collection", image: collectionImage, link: "/collections" },
  { name: "Legacy collection", image: collectionImage, link: "/collections" },
  { name: "Legacy collection", image: collectionImage, link: "/collections" },
];
const OtherCollections = () => {
  return (
    <section className="section-other-collections pos-relative mt-tablet-100 mt-phone-65 pb-lg-90 pb-tablet-40 pb-phone-165">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2
              className="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
              data-aos="d:loop"
            >
              Other collections
            </h2>
            <ul
              className="list-other-collections grid-md-50 mt-35"
              data-aos="d:loop"
            >
              {CollectionData.map((data, index) => {
                const { name, image, link } = data;
                return (
                  <li key={index} className="grid-item">
                    <AnimateLink to={link} className="collection-link large">
                      <h3 className="collection-title">{name}</h3>
                      <div className="container-img">
                        <img
                          src="images/gallery/img-09.jpg"
                          data-preload
                          className="media"
                        />
                      </div>
                    </AnimateLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherCollections;
