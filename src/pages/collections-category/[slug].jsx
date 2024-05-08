import CollectionCategory from "@/components/Collection/CollectionsCategory";
import {
  getCollectionsData,
  getCollectionsPostPageData,
  getFilterCategory,
  getSelectedCollectionData,
} from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";
import { useRouter } from "next/router";

export default function Page({ collectionsPostPageData, collectionsData,filteredCategories ,selectedCollectionData}) {
  const router = useRouter();
  markPageLoaded();
  return (
    <CollectionCategory
    selectedCollectionData={selectedCollectionData[0]}
      filteredCategories={filteredCategories}
    />
  );
}

export const getServerSideProps = async (context) => {
    const slug = context.query.slug
    const res = await getSelectedCollectionData(slug)
    const selectedCollectionId  = res[0]._id

  const [collectionsPostPageData, collectionsData,filteredCategories] = await Promise.all([
    getCollectionsPostPageData(),
    getCollectionsData(),
    getFilterCategory(selectedCollectionId),
  ]);
  return {
    props: {
      collectionsPostPageData,
      collectionsData,
      filteredCategories,
      selectedCollectionData:res
    },
  };
};
