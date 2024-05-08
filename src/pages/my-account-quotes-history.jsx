import QuotesHistory from "@/components/Account/QuotesHistory";
import { getQuoteHistoryPageData } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ quoteHistoryPageData }) {
  markPageLoaded();

  return <QuotesHistory quoteHistoryPageData={quoteHistoryPageData[0]} />;
}

export const getServerSideProps = async () => {
  const [quoteHistoryPageData] = await Promise.all([getQuoteHistoryPageData()]);

  return {
    props: {
      quoteHistoryPageData,
    },
  };
};
