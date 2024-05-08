import Search from "@/components/Search"
import { markPageLoaded } from "@/utils/AnimationFunctions"

export default function Page() {
    markPageLoaded();
    return (
        <Search />
    )
}