import { Suspense } from 'react';
import {
  getAllCategoriesData,
  getCollectionsData,
  getFooterData,
  getFooterLinksData,
  getHomeBottomRightSocialLinks,
  getHomePageData,
} from '@/services/scApiCalls';

import { SpeedInsights } from '@vercel/speed-insights/next';
import CustomScripts from '@/services/CustomScripts';
import Wrapper from '../components/layout/Wrapper';
import Account from '@/components/Account/Index';
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import Footer from '@/components/Common/Footer';

import '../../public/assets/utils.css';
import '../../public/assets/app.css';
import '../../public/assets/custom.css';

export const metadata = {
  title: 'Blueprint Studios | F1 Las Vegas Grand Prix',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const collectionsData = await getCollectionsData();

  const [
    homePageData,
    categoriesData,
    footerData,
    footerLinksData,
    footerBottomRightSocialLinks,
  ] = await Promise.all([
    getHomePageData(),
    getAllCategoriesData(),
    getFooterData(),
    getFooterLinksData(),
    getHomeBottomRightSocialLinks(),
  ]);

  function SearchBarFallback() {
    return <>Loading</>;
  }

  return (
    <>
      <CustomScripts />
      <html lang="en">
        <body
          data-scroll-direction="initial"
          data-load="first-loading"
          class="overflow-hidden"
        >
          <div className='external-triggers d-none'>
            <span className="initScript"></span>
            <span className="initializeCanvas"></span>
            <span className="home"></span>
            <span className="updateWatched"></span>
            <span className="galleryLightBox"></span>
            <span className="collections"></span>
            <span className="products"></span>
            <span className="productsPost"></span>
            <span className="cartPage"></span>
            <span className="myAccount"></span>
            <span className="savedProducts"></span>
            <span className="quotesHistory"></span>
            <span className="changePassword"></span>
            <span className="galleryImages"></span>
            <span className="addToCart"></span>
            <span className="modalLoad"></span>
            <span className="loadMore"></span>
          </div>

          <Loader />
          <Suspense fallback={<SearchBarFallback />}>
            <Navbar
              homePageData={homePageData}
              collectionsData={collectionsData}
              categoriesData={categoriesData}
            />
          </Suspense>
          <Account />
          <Wrapper>
            <main>{children}</main>
            <SpeedInsights />
          </Wrapper>
          <Footer
            footerData={footerData}
            footerLinksData={footerLinksData}
            socialLinks={footerBottomRightSocialLinks}
          />
        </body>
      </html>
    </>
  );
}