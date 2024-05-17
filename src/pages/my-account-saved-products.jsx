import SavedProducts from "@/components/Account/SavedProducts";
import {
  getSavedProductData,
  getSavedProductPageData,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import { getUserAuth } from "@/utils/GetUser";

export default function Page({ savedProductPageData, savedProductData }) {
  markPageLoaded();

  return (
    <SavedProducts
      savedProductPageData={savedProductPageData[0]}
      savedProductData={savedProductData}
    />
  );
}

export const getServerSideProps = async (context) => {
  const { req } = context;
  const authToken = req.cookies.authToken;

  const [savedProductPageData, savedProductData] = await Promise.all([
    getSavedProductPageData(),
    getSavedProductData(authToken),
  ]);

  return {
    props: {
      savedProductPageData,
      savedProductData: savedProductData || [],
    },
  };
};
