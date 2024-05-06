import CollectionsPost from "@/components/Collection/CollectionsPost";
import {
  getCollectionsData,
  getCollectionsPostPageData,
} from "@/services/apiServices";
import { useRouter } from "next/router";

export default function Page({ collectionsPostPageData, collectionsData }) {
  const router = useRouter();

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
