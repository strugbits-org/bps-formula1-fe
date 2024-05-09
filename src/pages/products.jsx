import Products from "@/components/Product/Products";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page() {
  markPageLoaded();
  return <Products />;
}
