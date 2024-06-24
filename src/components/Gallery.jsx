'use client';
import React, { useEffect, useRef, useState } from 'react';

import { markPageLoaded } from '@/utils/AnimationFunctions';
import { generateImageURL } from '@/utils/GenerateImageURL';
import AnimateLink from '@/components/Common/AnimateLink';
import { checkParameters } from '@/utils/CheckParams';
import SocialLinks from './Common/SocialLinks';

const Gallery = ({
  galleryPageData,
  collectionsData,
  bottomLinks,
  bottomSocialLinks,
}) => {
  const selectRef = useRef(null);

  const [collectionFilter, setCollectionFilter] = useState('all');
  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(15);
  const [option, setOption] = useState(false);

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [option]);

  useEffect(() => {
    let totalItemsCount = 0;
    collectionsData.forEach((data) => {
      if (
        collectionFilter === 'all' ||
        data.collectionSlug === collectionFilter
      ) {
        totalItemsCount += data.gallery.length;
      }
    });
    if (visibleItems >= totalItemsCount) {
      setAllItemsLoaded(true);
    } else {
      setAllItemsLoaded(false);
    }
  }, [visibleItems, collectionsData, collectionFilter]);

  collectionsData.sort((a, b) => a.order - b.order);
  useEffect(() => {
    const params = [
      galleryPageData,
      collectionsData,
      bottomLinks,
      bottomSocialLinks,
    ];
    if (checkParameters(params)) {
      markPageLoaded();
    }
  }, [galleryPageData, collectionsData, bottomLinks, bottomSocialLinks]);
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
                  className={`wrapper-list-dropdown ${
                    option === true ? 'active' : ''
                  }`}
                  data-get-dropdown="collections"
                >
                  <ul className="list-dropdown">
                    <li>
                      <button
                        onClick={() => filterCollection('all')}
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
                  const { gallery, collectionSlug } = data;
                  const isVisibleCollection =
                    collectionFilter === collectionSlug ||
                    collectionFilter === 'all';
                  if (isVisibleCollection) {
                    const remainingItems = visibleItems - totalVisibleItems;
                    const visibleItemsFromCollection = Math.min(
                      remainingItems,
                      gallery.length
                    );
                    totalVisibleItems += visibleItemsFromCollection;

                    if (visibleItemsFromCollection > 0) {
                      return (
                        <React.Fragment key={index}>
                          {gallery
                            .slice(0, visibleItemsFromCollection)
                            .map((galleryData, galleryIndex) => {
                              const { src } = galleryData;
                              return (
                                <li key={galleryIndex}>
                                  <a
                                    href={generateImageURL({
                                      wix_url: src,
                                      w: '1059',
                                      h: '1059',
                                      fit: 'fill',
                                      q: '95',
                                    })}
                                    className="gallery-link no-pjax"
                                    data-fancybox="gallery-legacy"
                                  >
                                    <div className="container-img">
                                      <img
                                        src={generateImageURL({
                                          wix_url: src,
                                          w: '1280',
                                          h: '1280',
                                          fit: 'fill',
                                          q: '95',
                                        })}
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
                      to={links || ''}
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
