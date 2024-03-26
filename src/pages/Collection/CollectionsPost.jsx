import { useEffect, useState } from "react";
import AnimateLink from "../../components/AnimateLink";

const collectionImages = [
  "images/gallery/img-05.jpg",
  "images/gallery/img-08.jpg",
  "images/gallery/img-07.jpg",
  "images/gallery/img-04.jpg",
  "images/gallery/img-03.jpg",
  "images/gallery/img-09.jpg",
];

const CollectionPost = () => {
  useEffect(() => {
    document.querySelector(".initScript").click();
    document.querySelector(".galleryLightBox").click();
    document.body.dataset.pg = "pg-collections-post";
  }, []);

  return (
    <div>
      <section className="collections-post-intro pt-lg-205">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 column-1">
              <h2
                className="fs--20 fw-600 text-uppercase white-1"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                Collection
              </h2>
              <h1
                className="fs--80 lh-110 font-2 text-uppercase text-center white-1 mt-lg-35 mt-tablet-25 mt-phone-30 split-chars"
                data-aos="d:loop"
              >
                Classic vegas
              </h1>
              <AnimateLink
                to="/collections-category"
                className="btn-medium btn-red btn-hover-white mt-lg-35 mt-tablet-25 mt-phone-30"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="split-chars">
                  <span data-letter="Shop">Shop</span>
                </div>
              </AnimateLink>
            </div>
          </div>
        </div>
      </section>
      <section className="collections-post-gallery mt-lg-105 mt-tablet-50 mt-phone-35 pb-lg-90 pb-tablet-50 pb-phone-130">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 column-1">
              <ul
                className="list-collections-gallery"
                data-delay-desktop="300"
                data-aos="d:loop"
              >
                {collectionImages.map((data, index) => {
                  return (
                    <li key={index}>
                      <button
                        href={data}
                        className="gallery-link no-pjax"
                        data-fancybox="gallery-classic-vegas"
                      >
                        <div className="container-img">
                          <img
                            src={data}
                            data-preload
                            className="media"
                            data-parallax
                            data-translate-y="30%"
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
                to="/collections-category"
                className="btn-medium btn-red btn-hover-white mt-30"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                <div className="split-chars">
                  <span data-letter="Shop">Shop</span>
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
        </div>
      </div>
    </div>
  );
};

export default CollectionPost;
