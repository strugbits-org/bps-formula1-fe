import { useRouter } from "next/router";

import {
  getCategoriesData,
  getCollectionsData,
  getFooterData,
  getFooterLinksData,
  getHomeBottomRightSocialLinks,
  getHomePageData,
} from "@/services/apiServices";

import Account from "@/components/Account/Index";
import Navbar from "@/components/Common/Navbar";
import Loader from "@/components/Common/Loader";
import Footer from "@/components/Common/Footer";
import { getUserAuth, setAuthToken } from "@/utils/GetUser";

import "../../public/assets/utils.css";
import "../../public/assets/app.css";
import { CookiesProvider } from 'react-cookie';
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function App({
  Component,
  pageProps,
  homePageData,
  collectionsData,
  categoriesData,
  footerData,
  footerLinksData,
  footerBottomRightSocialLinks,
}) {
  const router = useRouter();
  const pathname =
    router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const cleanPath = pathname.split("/")[0].trim();

  if (typeof document !== "undefined") {
    
    const authToken = getUserAuth();
    setAuthToken(authToken);

    if (authToken) {
      document.body.setAttribute("data-login-state", "logged");
    }
  }

  return (
    <div>
      <Loader />

      <Navbar
        homePageData={homePageData}
        collectionsData={collectionsData}
        categoriesData={categoriesData}
      />
      <Account />
      <div id="main-transition">
        <div
          id={`pg-${cleanPath === "404" ? "error" : cleanPath}`}
          className="wrapper"
          data-scroll-container
        >
          <main>
            <CookiesProvider>
              <Component {...pageProps} />
            </CookiesProvider>
            <SpeedInsights />
          </main>
        </div>
      </div>
      <Footer
        footerData={footerData}
        footerLinksData={footerLinksData}
        socialLinks={footerBottomRightSocialLinks}
      />
    </div>
  );
}

App.getInitialProps = async (context) => {
  const router = context.router;

  const collectionsData = await getCollectionsData();
  const selectedCollections = router.query?.collection
    ? collectionsData
      .filter((x) => x.collectionSlug === router.query.collection)
      .map((x) => x._id)
    : collectionsData.map((x) => x._id);

  const [
    homePageData,
    categoriesData,
    footerData,
    footerLinksData,
    footerBottomRightSocialLinks,
  ] = await Promise.all([
    getHomePageData(),
    getCategoriesData(selectedCollections),
    getFooterData(),
    getFooterLinksData(),
    getHomeBottomRightSocialLinks(),
  ]);

  const filteredData = categoriesData.filter(
    (x) => x.parentCollection.slug !== "all-products"
  );

  return {
    homePageData,
    collectionsData,
    categoriesData: filteredData,
    footerData,
    footerLinksData,
    footerBottomRightSocialLinks,
  };
};
