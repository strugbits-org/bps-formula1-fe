import SocialLinks from '@/components/Common/SocialLinks';
import { getFullSvgURL } from '@/utils/GenerateImageURL';
import AnimateLink from './AnimateLink';

const Footer = ({ footerData, footerLinksData, socialLinks }) => {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-3 offset-lg-1 col-8 column-1 order-mobile-1">
            <a
              href="https://rentals.blueprintstudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="container-img"
            >
              <img
                src={getFullSvgURL(footerData?.bpsLogo)}
                data-preload
                className="media"
                alt="product"
              />
            </a>
            <div className="container-address mt-lg-60 mt-tablet-35 mt-phone-45">
              <address>
                {footerData && footerData.streetAddress}
                <br />
                {footerData && footerData.suiteNumber}
                <br />
                {footerData && footerData.cityName},{' '}
                {footerData && footerData.stateName}{' '}
                {footerData && footerData.zipCode}
                <br />
              </address>
              <a
                href="tel:+17027577987"
                className="tel btn-underline-white mt-lg-20 mt-mobile-15"
              >
                <span>{footerData && footerData.phoneNumber}</span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 column-2 order-mobile-3 mt-phone-20">
            <div className="container-logo pointer-events-none">
              <i className="icon-logo-formula-1"></i>
              <h2 className="fs--20 font-2 red-1 text-uppercase text-center mt-25">
                {footerData && footerData.footerFirstText}
              </h2>
              <h3 className="fs--14 red-1 text-uppercase mt-15">
                {footerData && footerData.footerSecondText}
              </h3>
            </div>
          </div>
          <div className="col-lg-2 col-4 offset-lg-2 column-3 order-mobile-2">
            <ul className="list-menu-footer">
              {footerLinksData &&
                footerLinksData
                  .sort((a, b) => a.order - b.order)
                  .map((data, index) => {
                    const { title, link } = data;
                    return (
                      <li key={index}>
                        <AnimateLink to={link || ''} className="link-footer">
                          <span>{title}</span>
                        </AnimateLink>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
        <div className="row row-2 mt-tablet-10 mt-phone-25">
          <div className="col-lg-3 col-md-6 offset-lg-1 column-1 order-phone-2 mt-phone-15">
            <p className="fs--10 white-1">
              <span className="if-its-not-remarkable">
                {footerData && footerData.footerTagline}
              </span>
              <span className="mt-phone-10 no-tablet all-rights">
                {footerData && footerData.allRightsReserved}
              </span>
            </p>
          </div>
          <div className="col-lg-2 col-md-6 offset-lg-6 column-2 order-phone-1">
            <SocialLinks data={socialLinks} />

            <span className="fs--10 white-1 no-desktop no-phone">
              {footerData && footerData.allRightsReserved}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
