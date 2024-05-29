import { getTermsAndConditionsPageData } from "@/services/apiServices";
import TermsAndCondition from "@/components/TermsAndCondition";

export default async function Page() {
  const [termsAndConditionsPageData] = await Promise.all([
    getTermsAndConditionsPageData(),
  ]);

  return <TermsAndCondition data={termsAndConditionsPageData} />;
}
