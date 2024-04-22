import React, { useEffect, useRef, useState } from "react";
import usePageInitialization from "../hooks/usePageInitialization";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import RenderImage from "../utils/RenderImage";
import { galleryPageData } from "../redux/thunks/galleryPageThunk";
import {
  homeBottomLeftLink,
  homeBottomRightSocialLinks,
} from "../redux/thunks/homePageThunk";
import AnimateLink from "../components/AnimateLink";

const Gallery = () => {
  const { galleryStatus, pages } = useAppSelector((state) => state.gallery);
  const [collectionFilter, setCollectionFilter] = useState("all");
  const [option, setOption] = useState(false);
  const selectRef = useRef(null);
  usePageInitialization(
    galleryStatus,
    "pg-gallery",
    ".initScript",
    ".galleryImages",
    ".productsPost"
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(galleryPageData());
    dispatch(homeBottomLeftLink());
    dispatch(homeBottomRightSocialLinks());
  }, [dispatch]);

  const filterCollection = (data) => {
    setOption(false);
    setCollectionFilter(data);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current || !selectRef.current.contains(event.target)) {
        if (option) {
          setOption(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [option]);

  return (
    <section className="gallery pt-lg-145 pb-90" ref={selectRef}>
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
              <div class="container-dropdown active" data-parent-dropdown>
                <button
                  className="btn-dropdown"
                  onClick={() => setOption(!option)}
                  data-set-dropdown="collections"
                >
                  <span data-label-dropdown>All collections</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div
                  class={`wrapper-list-dropdown ${
                    option === true ? "active" : ""
                  }`}
                  data-get-dropdown="collections"
                >
                  <ul className="list-dropdown">
                    {pages["galleryPageData"]?.map((data, index) => {
                      const { collectionName, collectionClass } = data;
                      return (
                        <li key={index}>
                          <button
                            onClick={() => filterCollection(collectionClass)}
                            data-option-dropdown
                            className="link-dropdown"
                          >
                            <span>{collectionName}</span>
                          </button>
                        </li>
                      );
                    })}
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
                {pages["galleryPageData"]?.map((data, index) => {
                  const { gallery, collectionClass } = data;
                  if (
                    collectionFilter === collectionClass ||
                    collectionFilter === "all"
                  ) {
                    return (
                      <React.Fragment key={index}>
                        {gallery?.map((galleryData, galleryIndex) => {
                          const { src } = galleryData;

                          return (
                            <li key={galleryIndex}>
                              <a
                                href={RenderImage(src)}
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
                        })}
                      </React.Fragment>
                    );
                  } else {
                    return null;
                  }
                })}
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
                {pages["bottomLinks"]?.map((data, index) => {
                  const { links, title } = data;
                  return (
                    <AnimateLink
                      key={index}
                      to={links}
                      className="fs--14 font-3 text-uppercase btn-underlined-gray mr-15"
                    >
                      <span>{title}</span>
                    </AnimateLink>
                  );
                })}
              </div>
              <ul className="list-social-media">
                {pages["bottomSocialLinks"]?.map((data, index) => {
                  const { link, iconClass } = data;
                  return (
                    <li key={index}>
                      <AnimateLink to={link} className="link-social-media">
                        <i className={iconClass}></i>
                      </AnimateLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
