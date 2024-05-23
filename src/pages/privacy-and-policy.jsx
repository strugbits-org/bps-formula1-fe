import PrivacyAndPolicy from "@/components/PrivacyAndPolicy";
import { getPrivacyAndPolicyPageData } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ privacyAndPolicy }) {
  markPageLoaded();
  return <PrivacyAndPolicy data={privacyAndPolicy} />;
}

export const getServerSideProps = async () => {
  const [privacyAndPolicy] = await Promise.all([getPrivacyAndPolicyPageData()]);

  return {
    props: {
      privacyAndPolicy,
    },
  };
};
