import Navbar from "@/components/Common/Navbar";
import { useRouter } from "next/router";
import Loader from "@/components/Common/Loader";
import {
  getCategoriesData,
  getCollectionsData,
  getFooterData,
  getFooterLinksData,
  getHomeBottomRightSocialLinks,
  getHomePageData,
} from "@/services/apiServices";

import "../../public/assets/utils.css";
import "../../public/assets/app.css";
import Footer from "@/components/Common/Footer";
// import { markPageLoaded } from "@/utils/AnimationFunctions";
import Account from "@/components/Account/Index";

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
  // markPageLoaded();
  if (typeof document !== "undefined") {
    const loggedIn = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("loggedIn=true"));
    if (loggedIn) {
      document.body.setAttribute("data-login-state", "logged");
    }
  }
  return (
    <div>
      <Loader />

      <Navbar
        homePageData={homePageData[0]}
        collectionsData={collectionsData}
        categoriesData={categoriesData}
      />
      <Account />
      <div id="main-transition">
        <div id={`pg-${cleanPath === "404" ? "error" : cleanPath}`} className="wrapper" data-scroll-container>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
      <Footer
        footerData={footerData[0]}
        footerLinksData={footerLinksData}
        socialLinks={footerBottomRightSocialLinks}
      />
    </div>
  );
}

App.getInitialProps = async (context) => {
  const router = context.router;
  const pathname =
    router.pathname.trim() === "/" ? "home" : router.pathname.substring(1);
  const page_name = pathname.split("/")[0].trim();

  const [
    homePageData,
    collectionsData,
    categoriesData,
    footerData,
    footerLinksData,
    footerBottomRightSocialLinks,
  ] = await Promise.all([
    getHomePageData(),
    getCollectionsData(),
    getCategoriesData(),
    getFooterData(),
    getFooterLinksData(),
    getHomeBottomRightSocialLinks(),
  ]);

  return {
    homePageData,
    collectionsData,
    categoriesData,
    footerData,
    footerLinksData,
    footerBottomRightSocialLinks,
  };
};
