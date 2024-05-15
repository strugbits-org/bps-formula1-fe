import Search from "@/components/Search"
import { getCollectionColors, getCollectionsData, getSearchProducts } from "@/services/apiServices";
import { markPageLoaded, pageLoadEnd, updatedWatched } from "@/utils/AnimationFunctions"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page({ collections, colors, searchTerm }) {
    const router = useRouter();
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchResults = async (collections, colors, firstLoad = false) => {
        const result = await getSearchProducts(collections, colors, searchTerm);
        setSearchResults(result.items.map(x => x.data));
        if (firstLoad) {
            markPageLoaded(false);
        } else {
            pageLoadEnd();
        }
        updatedWatched();
    };

    useEffect(() => {
        const collectionIds = collections.map((x) => x._id);
        handleSearchResults(collectionIds, colors, true);
    }, [router]);

    return <Search collections={collections} colors={colors} searchedProducts={searchResults} handleFilterChange={handleSearchResults} />;
}

export const getServerSideProps = async (context) => {
    const category = "00000000-000000-000000-000000000001";
    const [collections, colors] = await Promise.all([
        getCollectionsData(),
        getCollectionColors(category),
    ]);
    return {
        props: {
            collections,
            colors: colors.colors,
            searchTerm: context.query?.for || ""
        },
    };
};
