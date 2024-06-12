import Collections from "@/components/Collection/Collections";
import {
  getCollectionsData,
  getCollectionsPageData,
} from "@/services/scApiCalls";


export default async function Page() {
  const [collectionsPageData, collectionsData] = await Promise.all([
    getCollectionsPageData(),
    getCollectionsData(),
  ]);

  return (
    <Collections
      collectionsPageData={collectionsPageData}
      collectionsData={collectionsData}
    />
  );
}
