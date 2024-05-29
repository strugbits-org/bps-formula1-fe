import { getPrivacyAndPolicyPageData } from "@/services/apiServices";
import PrivacyAndPolicy from "@/components/PrivacyAndPolicy";

export default async function Page() {
  const [privacyAndPolicy] = await Promise.all([getPrivacyAndPolicyPageData()]);

  return <PrivacyAndPolicy data={privacyAndPolicy} />;
}
