import Collections from "@/components/Collection/Collections";
import { getCollectionsData } from "@/services/apiServices";
import { markPageLoaded, pageLoadFinished } from "@/utils/AnimationFunctions";

export default function Page({ collectionsData }) {
  return <Collections collectionsData={collectionsData} />;
}

export const getServerSideProps = async () => {
  const [collectionsData] = await Promise.all([getCollectionsData()]);

  return {
    props: {
      collectionsData,
    },
  };
};
