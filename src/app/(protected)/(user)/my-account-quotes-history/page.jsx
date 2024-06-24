import { getQuoteHistoryPageData, getQuotes } from "@/services/scApiCalls";
import QuotesHistory from "@/components/Account/QuotesHistory";

export default async function Page() {
  const [quoteHistoryPageData, quotesData] = await Promise.all([
    getQuoteHistoryPageData(),
    getQuotes(),
  ]);

  return (
    <QuotesHistory
      quoteHistoryPageData={quoteHistoryPageData}
      quotesData={quotesData || []}
    />
  );
}
