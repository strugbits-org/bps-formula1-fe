import {
  getFilterCategory,
  getSelectedCollectionData,
} from "@/services/apiServices";
import CollectionCategory from "@/components/Collection/CollectionsCategory";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";

export default function Page({ filteredCategories, selectedCollectionData }) {
  const router = useRouter();
  markPageLoaded();
  return (
    <CollectionCategory
      selectedCollectionData={selectedCollectionData}
      filteredCategories={filteredCategories}
      collection={router.query.slug}
    />
  );
}

export const getServerSideProps = async (context) => {
  const slug = context.query.slug;
  const res = await getSelectedCollectionData(slug);
  const selectedCollectionId = res._id;

  const [filteredCategories] = await Promise.all([
    getFilterCategory(selectedCollectionId),
  ]);

  const filteredData = filteredCategories.filter(
    (x) => x.parentCollection.slug !== "all-products"
  );

  return {
    props: {
      filteredCategories: filteredData || [],
      selectedCollectionData: res,
    },
  };
};
