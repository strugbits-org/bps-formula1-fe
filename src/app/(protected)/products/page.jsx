import Products from '@/components/Product/Products';
import { getBackgroundImages } from '@/services/apiServices';
import {
  getProductSnapShots,
  getProductVariants,
  getSavedProductData,
} from '@/services/scApiCalls';
import {
  fetchProducts,
  getAllCategoriesData,
  getAllColorsData,
  getCollectionsData,
} from '@/services/scApiCalls';

export default async function Page() {
  const [
    products,
    collectionsData,
    categoriesData,
    colorsData,
    savedProductsData,
    backgroundData,
  ] = await Promise.all([
    fetchProducts(),
    getCollectionsData(),
    getAllCategoriesData(),
    getAllColorsData(),
    getSavedProductData(),
    getBackgroundImages(),
  ]);

  const productsData = await Promise.all(
    products.map(async (productData) => {
      const productId = productData.product._id;
      const [productSnapshotData, productVariantsData] = await Promise.all([
        getProductSnapShots(productId),
        getProductVariants(productId),
      ]);
      productData.productSnapshotData = productSnapshotData;
      productData.productVariantsData = productVariantsData;
      return productData;
    })
  );

  return (
    <Products
      products={productsData}
      collectionsData={collectionsData}
      categoriesData={categoriesData}
      colorsData={colorsData}
      savedProducts={savedProductsData}
      backgroundData={backgroundData}
    />
  );
}
