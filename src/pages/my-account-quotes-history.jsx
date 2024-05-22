import QuotesHistory from "@/components/Account/QuotesHistory";
import { getQuoteHistoryPageData } from "@/services/apiServices";
import { fetchQuotes } from "@/services/fetchFunction";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ quoteHistoryPageData, quotesData }) {
  markPageLoaded();

  return (
    <QuotesHistory
      quoteHistoryPageData={quoteHistoryPageData[0]}
      quotesData={quotesData}
    />
  );
}

export const getServerSideProps = async (context) => {
  const { authToken } = context.req.cookies;
  const [quoteHistoryPageData, quotesData] = await Promise.all([
    getQuoteHistoryPageData(),
    fetchQuotes(authToken),
  ]);

  return {
    props: {
      quoteHistoryPageData,
      quotesData: quotesData || [],
    },
  };
};
