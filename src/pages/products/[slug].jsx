import ProductPost from "@/components/Product/ProductsPost";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page() {
  markPageLoaded();

  return (
    <ProductPost />
  );
}