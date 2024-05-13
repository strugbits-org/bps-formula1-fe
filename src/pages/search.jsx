import Search from "@/components/Search"
import { getSearchProducts } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions"

export default function Page({ result }) {
    markPageLoaded();
    return <Search searchedProducts={result} />;
}

export const getServerSideProps = async (context) => {
    const result = await getSearchProducts(context.query?.for || "");
    return {
        props: {
            result,
        },
    };
};
