import Cart from "@/components/Cart"
import { markPageLoaded } from "@/utils/AnimationFunctions"

export default function Page() {
    markPageLoaded();
    return (
        <Cart />
    )
}
