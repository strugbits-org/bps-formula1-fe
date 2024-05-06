import SavedProducts from "@/components/Account/SavedProducts";
import { getSavedProductPageData } from "@/services/apiServices";

export default function Page({ savedProductPageData }) {
  return <SavedProducts savedProductPageData={savedProductPageData[0]} />;
}

export const getServerSideProps = async () => {
  const [savedProductPageData] = await Promise.all([getSavedProductPageData()]);
  return {
    props: {
      savedProductPageData,
    },
  };
};
