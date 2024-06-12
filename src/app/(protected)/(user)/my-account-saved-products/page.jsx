import SavedProducts from "@/components/Account/SavedProducts";
import {
  getSavedProductData,
  getSavedProductPageData,
} from "@/services/scApiCalls";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  const data = {
    limit: "20",
    skip: "0",
  };
  const [savedProductPageData, savedProductData] = await Promise.all([
    getSavedProductPageData(),
    getSavedProductData(data, authToken),
  ]);

  return (
    <SavedProducts
      savedProductPageData={savedProductPageData}
      savedProductData={savedProductData}
    />
  );
}
