import ProductIndex from "@/components/Product";
import {
  getCollectionsData,
  getSavedProductData,
} from "@/services/apiServices";

import { cookies } from "next/headers";

export default async function Page({ searchParams }) {
  const { slug, category } = searchParams;
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  const data = {
    limit: "20",
    skip: "0",
  };

  const [collectionsData, savedProductsData] = await Promise.all([
    getCollectionsData(),
    getSavedProductData(data, authToken),
  ]);
  return (
    <ProductIndex
      collectionsData={collectionsData}
      savedProductsData={savedProductsData}
    />
  );
}
