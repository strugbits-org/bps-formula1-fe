import AnimateLink from "@/components/Common/AnimateLink";
import RenderImage from "@/utils/RenderImage";

const Collections = ({ collectionsPageData, collectionsData }) => {
  return (
    <section className="collections-intro pt-lg-170 pb-lg-90 pb-tablet-40 pb-phone-170">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2
              className="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
              data-aos="d:loop"
            >
              {collectionsPageData && collectionsPageData.pageTitle}
            </h2>
            <ul
              className="list-other-collections grid-md-50 mt-30"
              data-aos="d:loop"
            >
              {collectionsData
                .sort((a, b) => a.data.order - b.data.order)
                .map((data, index) => {
                  const { collectionName, mainImage, collectionSlug } =
                    data.data;
                  return (
                    <li key={index} className="grid-item">
                      <AnimateLink
                        to={`/collections/${collectionSlug}`}
                        className="collection-link large"
                      >
                        <h3 className="collection-title">{collectionName}</h3>
                        <div className="container-img">
                          <img
                            src={RenderImage(mainImage)}
                            data-preload
                            className="media"
                            alt="product"
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

export default Collections;
