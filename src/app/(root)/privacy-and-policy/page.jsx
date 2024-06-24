import { getBackgroundImages, getPrivacyAndPolicyPageData } from '@/services/scApiCalls';
import PrivacyAndPolicy from '@/components/PrivacyAndPolicy';

export default async function Page() {
  const [privacyAndPolicy, backgroundData] = await Promise.all([
    getPrivacyAndPolicyPageData(),
    getBackgroundImages(),
  ]);

  return (
    <PrivacyAndPolicy data={privacyAndPolicy} backgroundData={backgroundData} />
  );
}
