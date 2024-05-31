import ProductIndex from "@/components/Product";
import { getCollectionsData } from "@/services/apiServices";

export default async function Page({ searchParams }) {
  const { slug, category } = searchParams;

  const [collectionsData] = await Promise.all([getCollectionsData()]);
  return <ProductIndex collectionsData={collectionsData} />;
}
