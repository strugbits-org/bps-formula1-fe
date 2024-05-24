import TermsAndCondition from "@/components/TermsAndCondition";
import { getTermsAndConditionsPageData } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ termsAndConditionsPageData }) {
  markPageLoaded();
  return <TermsAndCondition data={termsAndConditionsPageData} />;
}

export const getServerSideProps = async () => {
  const [termsAndConditionsPageData] = await Promise.all([
    getTermsAndConditionsPageData(),
  ]);

  return {
    props: {
      termsAndConditionsPageData,
    },
  };
};
