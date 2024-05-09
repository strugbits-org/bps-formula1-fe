import CollectionsPost from "@/components/Collection/CollectionsPost";
import {
  getCollectionsData,
  getCollectionsPostPageData,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";

export default function Page({ collectionsPostPageData, collectionsData }) {
  const router = useRouter();
  markPageLoaded();

  return (
    <CollectionsPost
      slug={router.query.slug}
      collectionsPostPageData={collectionsPostPageData[0]}
      collectionsData={collectionsData}
    />
  );
}

export const getServerSideProps = async () => {
  const [collectionsPostPageData, collectionsData] = await Promise.all([
    getCollectionsPostPageData(),
    getCollectionsData(),
  ]);

  return {
    props: {
      collectionsPostPageData,
      collectionsData,
    },
  };
};
