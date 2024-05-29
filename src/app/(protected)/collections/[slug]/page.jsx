import CollectionsPost from "@/components/Collection/CollectionsPost";
import {
  getCollectionsData,
  getCollectionsPostPageData,
} from "@/services/apiServices";

export default async function Page({ params }) {
  const slug = params.slug;

  const [collectionsPostPageData, collectionsData] = await Promise.all([
    getCollectionsPostPageData(),
    getCollectionsData(),
  ]);
  return (
    <CollectionsPost
      slug={slug}
      collectionsPostPageData={collectionsPostPageData}
      collectionsData={collectionsData}
    />
  );
}
