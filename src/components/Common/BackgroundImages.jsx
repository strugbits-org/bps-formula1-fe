import { useMemo } from 'react';
import { generateImageURL } from '@/utils/GenerateImageURL';

const BackgroundImages = ({ pageSlug, extraClasses, data }) => {
  const pageData = useMemo(() => {
    return data.find((page) => page.pageSlug === pageSlug);
  }, [data, pageSlug]);

  const firstImageUrl = useMemo(() => {
    return pageData
      ? generateImageURL({
          wix_url: pageData.firstBackgroundImage,
          w: '2126',
          h: '909',
          fit: 'fill',
          q: '95',
        })
      : '';
  }, [pageData]);

  const secondImageUrl = useMemo(() => {
    return pageData
      ? generateImageURL({
          wix_url: pageData.secondBackgroundImage,
          w: '768',
          h: '1024',
          fit: 'fill',
          q: '95',
        })
      : '';
  }, [pageData]);

  if (!pageData) {
    return null;
  }

  return (
    <div className={`container-img ${extraClasses}`}>
      <img
        src={firstImageUrl}
        data-preload
        className="no-mobile media"
        data-parallax-top
        data-translate-y="-20%"
        alt="background-1"
      />
      <img
        src={secondImageUrl}
        data-preload
        className="no-desktop media"
        alt="background-2"
      />
    </div>
  );
};

export default BackgroundImages;
