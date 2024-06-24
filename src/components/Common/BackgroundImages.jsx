import { useEffect, useState, useMemo } from 'react';
import { getBackgroundImages } from '@/services/apiServices';
import { generateImageURL } from '@/utils/GenerateImageURL';

const BackgroundImages = ({ pageSlug, extraClasses }) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await getBackgroundImages();
      const pageData = res.find((page) => page.pageSlug === pageSlug);
      setData(pageData);
    } catch (error) {
      console.error('Error fetching background images:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [pageSlug]);

  const firstImageUrl = useMemo(() => {
    return data
      ? generateImageURL({
          wix_url: data.firstBackgroundImage,
          w: '2126',
          h: '909',
          fit: 'fill',
          q: '95',
        })
      : '';
  }, [data]);

  const secondImageUrl = useMemo(() => {
    return data
      ? generateImageURL({
          wix_url: data.secondBackgroundImage,
          w: '768',
          h: '1024',
          fit: 'fill',
          q: '95',
        })
      : '';
  }, [data]);

  if (!data) {
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
