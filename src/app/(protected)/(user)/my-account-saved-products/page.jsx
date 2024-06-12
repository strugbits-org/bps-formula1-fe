import SavedProducts from "@/components/Account/SavedProducts";
import {
  getSavedProductPageData,
} from "@/services/scApiCalls";
import { cookies } from "next/headers";

export default async function Page() {

  const savedProductPageData = await getSavedProductPageData();

  return (
    <SavedProducts savedProductPageData={savedProductPageData} />
  );
}
