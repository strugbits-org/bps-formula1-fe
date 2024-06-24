import Cart from '@/components/Cart';
import { getBackgroundImages } from '@/services/apiServices';

export default async function Page() {
  const [backgroundData] = await Promise.all([getBackgroundImages()]);
  return <Cart backgroundData={backgroundData} />;
}
