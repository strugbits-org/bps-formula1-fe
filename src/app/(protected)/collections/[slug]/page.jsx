import CollectionsPost from "@/components/Collection/CollectionsPost";
import {
  getCollectionsData,
  getCollectionsPostPageData,
} from "@/services/apiServices";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const slug = params.slug;

  const [collectionsPostPageData, collectionsData] = await Promise.all([
    getCollectionsPostPageData(),
    getCollectionsData(),
  ]);
  const filteredCollectionData = collectionsData.find(
    (data) => data.collectionSlug === slug
  );

  if (!filteredCollectionData) {
    redirect("/error");
  }

  return (
    <CollectionsPost
      slug={slug}
      collectionsPostPageData={collectionsPostPageData}
      collectionsData={collectionsData}
    />
  );
}
