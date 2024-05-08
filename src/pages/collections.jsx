import Collections from "@/components/Collection/Collections";
import {
  getCollectionsData,
  getCollectionsPageData,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ collectionsPageData, collectionsData }) {
  markPageLoaded();

  return (
    <Collections
      collectionsPageData={collectionsPageData[0]}
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
