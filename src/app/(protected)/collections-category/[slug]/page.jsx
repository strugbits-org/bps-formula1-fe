import CollectionCategory from '@/components/Collection/CollectionsCategory';
import {
  getCollectionsData,
  getFilterCategory,
  getSelectedCollectionData,
} from '@/services/scApiCalls';

export const generateStaticParams = async () => {
  try {
    const all_collections = await getCollectionsData();
    const paths = all_collections.map((data) => ({
      slug: data.collectionSlug,
    }));
    return paths;
  } catch (error) {
    console.log('Error:', error);
  }
};

export default async function Page({ params }) {
  const { slug } = params;
  console.log("slug", slug);
  const res = await getSelectedCollectionData(slug);
  console.log("resssssssssssss", res);
  const selectedCollectionId = res[0]._id;
  console.log("selectedCollectionId", selectedCollectionId);

  const [filteredCategories] = await Promise.all([
    getFilterCategory(selectedCollectionId),
  ]);

  const filteredData = filteredCategories.filter(
    (x) => x.parentCollection.slug !== 'all-products'
  );

  return (
    <CollectionCategory
      selectedCollectionData={res[0]}
      filteredCategories={filteredData}
      collection={slug}
    />
  );
}
