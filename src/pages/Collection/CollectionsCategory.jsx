import collectionImage from "../../images/gallery/img-09.jpg";
import { useEffect } from "react";
import AnimateLink from "../../components/AnimateLink";
const CollectionData = [
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
  { name: "Legacy collection", image: collectionImage, link: "/products" },
];
const CollectionCategory = () => {
  useEffect(() => {
    document.querySelector(".initScript").click();
  }, []);
  return (
    <>
      <section className="collections-category-intro pt-lg-165 pb-lg-90 pb-tablet-50 pb-phone-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 column-1">
              <h2
                className="fs--21 fs-phone-13 text-uppercase text-center white-1"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                Collection
              </h2>
              <h1
                className="fs--30 fs-tablet-30 font-2 text-uppercase text-center white-1 mt-5 mt-tablet-25 mb-lg-60 mb-tablet-45 mb-phone-35 split-chars"
                data-aos="d:loop"
              >
                Classic vegas
              </h1>
              <ul className="list-collections grid-lg-33 grid-tablet-50">
                {CollectionData.map((data, index) => {
                  const { name, image, link } = data;
                  return (
                    <li key={index} className="grid-item" data-aos="d:loop">
                      <AnimateLink to={link} className="collection-link small">
                        <h3 className="collection-title">{name}</h3>
                        <div className="container-img">
                          <img src={image} data-preload className="media" />
                        </div>
                      </AnimateLink>
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
                Collection
              </h4>
              <h3
                className="fs--20 fs-phone-16 lh-100 font-2 text-uppercase text-center white-1 mt-lg-10 mt-tablet-5 mt-phone-10 split-chars"
                data-aos="d:loop"
              >
                Classic vegas
              </h3>
              <div
                className="container-text fs--14 fs-mobile-12 white-1 collection-text text-center mt-lg-20 mt-tablet-30 mt-phone-25"
                data-aos="fadeInUp .8s ease-in-out .2s, d:loop"
              >
                <p>
                  Experience the epitome of luxury with a stunning collection of
                  furniture and decor inspired by the glitz and glamour of Las
                  Vegas, complemented by the electrifying excitement of the
                  Formula One Las Vegas Grand Prix. This exclusive collection
                  brings together the best of both worlds, creating a truly
                  unique and extravagant event experience.
                </p>
                <p className="mt-mobile-15">
                  Our furniture pieces are meticulously handcrafted with
                  exquisite attention to detail, featuring sleek and modern
                  designs that reflect the opulent aesthetic of Las Vegas. From
                  plush velvet sofas to elegant marble tables, our collection
                  offers a range of luxurious options for your event. Each piece
                  is carefully selected to elevate the atmosphere and provide
                  the ultimate VIP experience for your guests.
                </p>
              </div>
              <AnimateLink
                to="/collections"
                className="btn-medium btn-red btn-hover-white mt-30"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="split-chars">
                  <span data-letter="Collections">Collections</span>
                </div>
              </AnimateLink>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-fixed no-mobile" data-aos="d:loop">
        <div className="container-img">
          <img
            src="images/img-03.jpg"
            data-preload
            className="no-mobile media"
            data-parallax-top
            data-translate-y="-20%"
          />
          <img
            src="images/img-02.jpg"
            data-preload
            className="no-desktop media"
          />
        </div>
      </div>
    </>
  );
};

export default CollectionCategory;
