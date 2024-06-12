import Search from "@/components/Search";
import {
  getCollectionColors,
  getCollectionsData,
} from "@/services/scApiCalls";

export default async function Page({ searchParams }) {
  const searchFor = searchParams.for;

  const category = "00000000-000000-000000-000000000001";
  const [collections, colors] = await Promise.all([
    getCollectionsData(),
    getCollectionColors(category),
  ]);
  return (
    <Search
      collections={collections}
      colors={colors.colors}
      searchTerm={searchFor}
    />
  );
}

// export const getServerSideProps = async (context) => {
//   const category = "00000000-000000-000000-000000000001";
//   const [collections, colors] = await Promise.all([
//     getCollectionsData(),
//     getCollectionColors(category),
//   ]);
//   return {
//     props: {
//       collections,
//       colors: colors.colors,
//       searchTerm: context.query?.for || "",
//     },
//   };
// };
