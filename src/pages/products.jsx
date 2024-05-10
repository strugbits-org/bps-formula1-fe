import Products from "@/components/Product/Products";
import { getCollectionsData, getFilterProducts } from '@/services/apiServices';
import { markPageLoaded } from '@/utils/AnimationFunctions';

export default function Page({ filteredProducts ,collectionsData}) {
  console.log(filteredProducts, 'filtered Products >>>>');
  markPageLoaded();
  return <Products filteredProducts={filteredProducts} 
  collectionsData={collectionsData}/>;
}

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  console.log(slug, 'slug>>');
  const [filteredProducts,collectionsData] = await Promise.all([getFilterProducts(),
    getCollectionsData(),
  ]);
  return {
    props: {
      filteredProducts,
      collectionsData
    },
  };
};
