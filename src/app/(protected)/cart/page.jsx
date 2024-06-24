import Cart from "@/components/Cart";
import { getProductsCart } from "@/services/scApiCalls";

export default async function Page() {
  const data = await getProductsCart();

  return <Cart data={data} />;
}
