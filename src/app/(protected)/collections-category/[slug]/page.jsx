import CollectionCategory from "@/components/Collection/CollectionsCategory";
import {
  getFilterCategory,
  getSelectedCollectionData,
} from "@/services/apiServices";

export default async function Page({ params }) {
  const slug = params.slug;
  const res = await getSelectedCollectionData(slug);
  const selectedCollectionId = res[0]._id;

  const [filteredCategories] = await Promise.all([
    getFilterCategory(selectedCollectionId),
  ]);

  const filteredData = filteredCategories.filter(
    (x) => x.parentCollection.slug !== "all-products"
  );

  return (
    <CollectionCategory
      selectedCollectionData={res[0]}
      filteredCategories={filteredData}
      collection={slug}
    />
  );
}
