import Error404Page from "@/components/Error404Page";
import { markPageLoaded } from "@/utils/AnimationFunctions"

export default function Page() {
    markPageLoaded();
    return (
        <Error404Page />
    )
}
