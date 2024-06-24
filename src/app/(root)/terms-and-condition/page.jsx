import { getTermsAndConditionsPageData } from '@/services/scApiCalls';
import TermsAndCondition from '@/components/TermsAndCondition';
import { getBackgroundImages } from '@/services/apiServices';

export default async function Page() {
  const [termsAndConditionsPageData, backgroundData] = await Promise.all([
    getTermsAndConditionsPageData(),
    getBackgroundImages(),
  ]);

  return (
    <TermsAndCondition
      data={termsAndConditionsPageData}
      backgroundData={backgroundData}
    />
  );
}
