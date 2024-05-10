"use client";
import React, { useEffect, useRef, useState } from "react";
import AnimateLink from "@/components/Common/AnimateLink";
import RenderImage from "../utils/RenderImage";
import SocialLinks from "./Common/SocialLinks";

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
  const [visibleItems, setVisibleItems] = useState(15);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 15);
  };
  let totalVisibleItems = 0;

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

  useEffect(() => {
    let totalItemsCount = 0;
    collectionsData.forEach((data) => {
      if (
        collectionFilter === "all" ||
        data.collectionSlug === collectionFilter
      ) {
        totalItemsCount += data.gallery1.length;
      }
    });
    if (visibleItems >= totalItemsCount) {
      setAllItemsLoaded(true);
    } else {
      setAllItemsLoaded(false);
    }
  }, [visibleItems, collectionsData, collectionFilter]);

  collectionsData.sort((a, b) => a.order - b.order);

  let allItems = 0;
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
              <div className="container-dropdown active" data-parent-dropdown>
                <button
                  className="btn-dropdown"
                  onClick={() => setOption(!option)}
                  data-set-dropdown="collections"
                >
                  <span data-label-dropdown>All collections</span>
                  <i className="icon-arrow-down"></i>
                </button>
                <div
                  className={`wrapper-list-dropdown ${option === true ? "active" : ""
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
                      const { collectionName, collectionSlug } = data;
                      return (
                        <li key={index}>
                          <button
                            onClick={() => filterCollection(collectionSlug)}
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
                {collectionsData.map((data, index) => {
                  const { gallery1, collectionSlug } = data;
                  const isVisibleCollection =
                    collectionFilter === collectionSlug ||
                    collectionFilter === "all";
                  if (isVisibleCollection) {
                    const remainingItems = visibleItems - totalVisibleItems;
                    const visibleItemsFromCollection = Math.min(
                      remainingItems,
                      gallery1.length
                    );
                    totalVisibleItems += visibleItemsFromCollection;

                    if (visibleItemsFromCollection > 0) {
                      return (
                        <React.Fragment key={index}>
                          {gallery1
                            .slice(0, visibleItemsFromCollection)
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
                  }
                })}
              </ul>
            </div>
            {/* Load More Button */}
            {!allItemsLoaded && (
              <div className="flex-center mt-lg-30 mt-mobile-45">
                <button
                  onClick={loadMore}
                  className="btn-medium btn-red btn-hover-white"
                  // style={allItemsLoaded ? { cursor: "not-allowed" } : {}}
                  // disabled={allItemsLoaded}
                >
                  <div className="split-chars">
                    <span>
                      {galleryPageData && galleryPageData.loadMoreButtonLabel}
                    </span>
                  </div>
                </button>
              </div>
            )}

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
              <SocialLinks data={bottomSocialLinks} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
