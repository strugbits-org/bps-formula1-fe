"use client";
import React, { useEffect, useRef, useState } from "react";
import usePageInitialization from "../hooks/usePageInitialization";
import AnimateLink from "@/components/Common/AnimateLink";
import RenderImage from "../utils/RenderImage";

const Gallery = ({
  galleryPageData,
  collectionsData,
  bottomLinks,
  bottomSocialLinks,
}) => {
  const selectRef = useRef(null);
  const [collectionFilter, setCollectionFilter] = useState("all");
  const [option, setOption] = useState(false);
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  let totalItems = 0;
  const [visibleItems, setVisibleItems] = useState(3);

  usePageInitialization(
    "pg-gallery",
    ".initScript",
    ".galleryImages",
    ".productsPost"
  );
  const filterCollection = (data) => {
    setOption(false);
    setVisibleItems(5);
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

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => {
      if (prevVisibleItems < totalItems) {
        return prevVisibleItems + 3;
      } else {
        setAllItemsLoaded(true);
        return prevVisibleItems;
      }
    });
  };
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
                {galleryPageData && galleryPageData.galleryHeading}
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
                    {/* {collectionFilter !== "all" && ( */}
                    <li>
                      <button
                        onClick={() => filterCollection("all")}
                        data-option-dropdown
                        className="link-dropdown"
                      >
                        <span>All Collections</span>
                      </button>
                    </li>
                    {/* )} */}
                    {collectionsData?.map((data, index) => {
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
                {collectionsData
                  ?.slice()
                  .sort((a, b) => a.order - b.order)
                  .map((data, index) => {
                    const { gallery1, collectionClass } = data;
                    if (
                      collectionFilter === collectionClass ||
                      collectionFilter === "all"
                    ) {
                      totalItems += gallery1.length;
                      return (
                        <React.Fragment key={index}>
                          {gallery1
                            ?.slice(0, visibleItems) // Show only the first 'visibleItems' items
                            .map((galleryData, galleryIndex) => {
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
            {/* Load More Button */}
            <div className="flex-center mt-lg-30 mt-mobile-45">
              <button
                onClick={handleLoadMore}
                className="btn-medium btn-red btn-hover-white"
              >
                <div className="split-chars">
                  <span>
                    {galleryPageData && galleryPageData.loadMoreButtonLabel}
                  </span>
                </div>
              </button>
            </div>
            <div className="footer-gallery mt-40">
              <div className="column-text mb-20">
                {bottomLinks?.map((data, index) => {
                  const { links, title } = data;
                  return (
                    <AnimateLink
                      key={index}
                      to={links || ""}
                      className="fs--14 font-3 text-uppercase btn-underlined-gray mr-15"
                    >
                      <span>{title}</span>
                    </AnimateLink>
                  );
                })}
              </div>
              <ul className="list-social-media">
                {bottomSocialLinks?.map((data, index) => {
                  const { link, iconClass } = data;
                  return (
                    <li key={index}>
                      <AnimateLink
                        to={link || ""}
                        className="link-social-media"
                      >
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
