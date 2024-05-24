import {
  getCollectionsData,
  getCollectionsPageData,
} from "@/services/apiServices";
import Collections from "@/components/Collection/Collections";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ collectionsPageData, collectionsData }) {
  markPageLoaded();
  return (
    <Collections
      collectionsPageData={collectionsPageData}
      collectionsData={collectionsData}
    />
  );
}

export const getServerSideProps = async () => {
  const [collectionsPageData, collectionsData] = await Promise.all([
    getCollectionsPageData(),
    getCollectionsData(),
  ]);

  return {
    props: {
      collectionsPageData,
      collectionsData,
    },
  };
};
