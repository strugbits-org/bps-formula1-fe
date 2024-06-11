import ProductIndex from "@/components/Product";
import {
  getCollectionsData,
} from "@/services/apiServices";


export default async function Page() {

  const collectionsData = await getCollectionsData();
  return (
    <ProductIndex
      collectionsData={collectionsData}
    />
  );
}
