const BackgroundImages = () => {
  return (
    <div className="container-img">
      <img
        src="images/img-01.jpg"
        data-preload
        className="no-mobile media"
        data-parallax-top
        data-translate-y="-20%"
        alt="terms-1"
      />
      <img
        src="images/img-02.jpg"
        data-preload
        className="no-desktop media"
        alt="terms-2"
      />
    </div>
  );
};

export default BackgroundImages;
