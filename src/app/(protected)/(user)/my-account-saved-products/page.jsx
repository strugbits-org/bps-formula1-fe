import SavedProducts from "@/components/Account/SavedProducts";
import { getSavedProductPageData } from "@/services/apiServices";

export default async function Page() {

  const savedProductPageData = await getSavedProductPageData();

  return (
    <SavedProducts savedProductPageData={savedProductPageData} />
  );
}
