import { useEffect } from "react";
import usePageInitialization from "../hooks/usePageInitialization";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import RenderImage from "../utils/RenderImage";
import { galleryPageData } from "../redux/thunks/galleryPageThunk";

const Gallery = () => {
  const { status, pages } = useAppSelector((state) => state.gallery);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(galleryPageData());
    }
  }, [dispatch, status]);

  usePageInitialization(
    "pg-gallery",
    ".initScript",
    ".galleryImages",
    ".productsPost"
  );
  return (
    <section className="gallery pt-lg-145 pb-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1" data-parent-collections>
            <div className="container-title mb-30">
              <h1
                className="fs--30 text-uppercase white-1 split-chars"
                data-aos="d:loop"
              >
                Gallery
              </h1>
              <div className="container-dropdown" data-parent-dropdown>
                <button
                  className="btn-dropdown"
                  data-set-dropdown="collections"
                >
                  <span data-label-dropdown>All collections</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div
                  className="wrapper-list-dropdown"
                  data-get-dropdown="collections"
                >
                  <ul className="list-dropdown">
                    {pages["galleryPageData"]?.collectionsFilter?.map(
                      (data, index) => {
                        const formattedData = data
                          .toLowerCase()
                          .replace(/\s+/g, "-");
                        return (
                          <li key={index}>
                            <button
                              data-option-dropdown
                              data-set-collections={
                                formattedData === "all-collections"
                                  ? ""
                                  : formattedData
                              }
                              className="link-dropdown"
                            >
                              <span>{data}</span>
                            </button>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="container-gallery"
              data-aos="fadeIn .8s ease-in-out .2s, d:loop"
            >
              <ul
                className="list-gallery"
                data-default-collections-active
                data-get-collections="legacy"
              >
                {pages["galleryPageData"]?.legacyCollection?.map(
                  (data, index) => {
                    const { src } = data;
                    return (
                      <li key={index}>
                        <a
                          href="images/gallery/img-01.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-legacy"
                        >
                          <div className="container-img">
                            <img
                              src={RenderImage(src)}
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                              alt="product"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>

              <ul
                className="list-gallery"
                data-default-collections-active
                data-get-collections="neon-house"
              >
                {pages["galleryPageData"]?.neonHouseCollection?.map(
                  (data, index) => {
                    const { src } = data;
                    return (
                      <li key={index}>
                        <a
                          href="images/gallery/img-06.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-neon-house"
                        >
                          <div className="container-img">
                            <img
                              src={RenderImage(src)}
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                              alt="product"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>

              <ul
                className="list-gallery"
                data-default-collections-active
                data-get-collections="classic-vegas"
              >
                {pages["galleryPageData"]?.classicVegasCollection?.map(
                  (data, index) => {
                    const { src } = data;
                    return (
                      <li key={index}>
                        <a
                          href="images/gallery/img-02.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-classic-vegas"
                        >
                          <div className="container-img">
                            <img
                              src={RenderImage(src)}
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                              alt="product"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>

              <ul
                className="list-gallery"
                data-default-collections-active
                data-get-collections="paddock"
              >
                {pages["galleryPageData"]?.paddockCollection?.map(
                  (data, index) => {
                    const { src } = data;
                    return (
                      <li key={index}>
                        <a
                          href="images/gallery/img-09.jpg"
                          className="gallery-link no-pjax"
                          data-fancybox="gallery-paddock"
                        >
                          <div className="container-img">
                            <img
                              src={RenderImage(src)}
                              data-preload
                              className="media"
                              data-parallax
                              data-translate-y="20%"
                              alt="product"
                            />
                          </div>
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="flex-center mt-lg-30 mt-mobile-45">
              <button className="btn-medium btn-red btn-hover-white">
                <div className="split-chars">
                  <span>Load More</span>
                </div>
              </button>
            </div>
            <div className="footer-gallery mt-40">
              <div className="column-text mb-20">
                <a
                  href="privacy-policy.html"
                  className="fs--14 font-3 text-uppercase btn-underlined-gray mr-15"
                >
                  <span>Privacy Policy</span>
                </a>
                <a
                  href="https://www.blueprintstudios.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fs--14 font-3 text-uppercase btn-underline-gray"
                >
                  <span>© BLUEPRINT STUDIOS 2023</span>
                </a>
              </div>
              <ul className="list-social-media">
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-x"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html" className="link-social-media">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
