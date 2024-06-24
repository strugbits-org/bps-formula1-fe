import Cart from '@/components/Cart';
import { getBackgroundImages, getProductsCart } from '@/services/scApiCalls';

export default async function Page() {
  const [data, backgroundData] = await Promise.all([getProductsCart(), getBackgroundImages()]);
  return <Cart data={data} backgroundData={backgroundData} />;
}
