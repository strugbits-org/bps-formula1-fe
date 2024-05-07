import PrivacyAndPolicy from "@/components/PrivacyAndPolicy";
import { getPrivacyAndPolicyPageData } from "@/services/apiServices";

export default function Page({ privacyAndPolicy }) {
  return <PrivacyAndPolicy pages={privacyAndPolicy[0].content.nodes} />;
}

export const getServerSideProps = async () => {
  const [privacyAndPolicy] = await Promise.all([getPrivacyAndPolicyPageData()]);

  return {
    props: {
      privacyAndPolicy,
    },
  };
};
