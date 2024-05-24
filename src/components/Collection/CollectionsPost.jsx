import { generateImageURL, generateImageUrl2 } from "@/utils/GenerateImageURL";
import AnimateLink from "../Common/AnimateLink";

const CollectionsPost = ({
  slug,
  collectionsPostPageData,
  collectionsData,
}) => {
  const filteredCollectionData = collectionsData.find(
    (data) => data.collectionSlug === slug
  );

  console.log(filteredCollectionData, "filteredCollectionData>>");
  return (
    <div>
      <section className="collections-intro pt-lg-205">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 column-1">
              <h2
                className="fs--20 fw-600 text-uppercase white-1"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {collectionsPostPageData && collectionsPostPageData.pageTitle}
              </h2>
              <h1
                className="fs--80 lh-110 font-2 text-uppercase text-center white-1 mt-lg-35 mt-tablet-25 mt-phone-30 split-chars"
                data-aos="d:loop"
              >
                {filteredCollectionData &&
                  filteredCollectionData.collectionName}
              </h1>
              <AnimateLink
                to={`/collections-category/${slug}`}
                className="btn-medium btn-red btn-hover-white mt-lg-35 mt-tablet-25 mt-phone-30"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="split-chars">
                  <span data-letter="Shop">
                    {collectionsPostPageData &&
                      collectionsPostPageData.shopButtonLabel}
                  </span>
                </div>
              </AnimateLink>
            </div>
          </div>
        </div>
      </section>
      <section className="collections-gallery mt-lg-105 mt-tablet-50 mt-phone-35 pb-lg-90 pb-tablet-50 pb-phone-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 column-1">
              <ul
                className="list-collections-gallery"
                data-delay-desktop="300"
                data-aos="d:loop"
              >
                {filteredCollectionData &&
                  filteredCollectionData.gallery.map((data, index) => {
                    const { src } = data;
                    return (
                      <li key={index}>
                        <button
                          href={generateImageURL({
                            wix_url: src,
                            w: "1059",
                            h: "1059",
                            fit: "fill",
                            q: "95",
                          })}
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src={generateImageURL({
                                wix_url: src,
                                w: "1280",
                                h: "1280",
                                fit: "fill",
                                q: "95",
                              })}
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="30%"
                              alt="product"
                            />
                          </div>
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-3 collection-description mt-60">
              <h4
                className="fs--14 text-uppercase text-center white-1"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {collectionsPostPageData && collectionsPostPageData.pageTitle}
              </h4>
              <h3
                className="fs--20 fs-phone-16 lh-100 font-2 text-uppercase text-center white-1 mt-lg-10 mt-tablet-5 mt-phone-10 split-chars"
                data-aos="d:loop"
              >
                {filteredCollectionData &&
                  filteredCollectionData.collectionName}
              </h3>
              <div
                className="container-text fs--14 fs-mobile-12 white-1 collection-text text-center mt-lg-20 mt-tablet-30 mt-phone-25"
                data-aos="fadeInUp .8s ease-in-out .2s, d:loop"
              >
                {filteredCollectionData && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: filteredCollectionData.description,
                    }}
                  />
                )}
              </div>
              <AnimateLink
                to={`/collections-category/${slug}`}
                className="btn-medium btn-red btn-hover-white mt-30"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="split-chars">
                  <span data-letter="Shop">
                    {collectionsPostPageData &&
                      collectionsPostPageData.shopButtonLabel}
                  </span>
                </div>
              </AnimateLink>
            </div>
          </div>
        </div>
      </section>
      {filteredCollectionData && filteredCollectionData.backgroundImage && (
        <div className="bg-fixed no-mobile" data-aos="d:loop">
          <div className="container-img">
            <img
              src={generateImageURL({
                wix_url: filteredCollectionData.backgroundImage,
                w: "2126",
                h: "909",
                fit: "fit",
                q: "95",
              })}
              data-preload
              className="no-mobile media"
              data-parallax-top
              data-translate-y="-20%"
              alt="background-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionsPost;
