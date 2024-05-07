import QuotesHistory from "@/components/Account/QuotesHistory";
import { getQuoteHistoryPageData } from "@/services/apiServices";

export default function Page({ quoteHistoryPageData }) {
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
