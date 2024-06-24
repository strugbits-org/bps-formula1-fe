import CollectionsPost from '@/components/Collection/CollectionsPost';
import {
  getCollectionsData,
  getCollectionsPostPageData,
} from '@/services/scApiCalls';
import { redirect } from 'next/navigation';

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

  const [collectionsPostPageData, collectionsData] = await Promise.all([
    getCollectionsPostPageData(),
    getCollectionsData(),
  ]);
  const filteredCollectionData = collectionsData.find(
    (data) => data.collectionSlug === slug
  );

  if (!filteredCollectionData) {
    redirect('/error');
  }

  return (
    <CollectionsPost
      slug={slug}
      collectionsPostPageData={collectionsPostPageData}
      collectionsData={collectionsData}
    />
  );
}
