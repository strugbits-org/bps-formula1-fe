import { getQuoteHistoryPageData, getQuotes } from "@/services/scApiCalls";
import QuotesHistory from "@/components/Account/QuotesHistory";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  const [quoteHistoryPageData, quotesData] = await Promise.all([
    getQuoteHistoryPageData(),
    getQuotes(authToken),
  ]);

  return (
    <QuotesHistory
      quoteHistoryPageData={quoteHistoryPageData}
      quotesData={quotesData || []}
    />
  );
}
