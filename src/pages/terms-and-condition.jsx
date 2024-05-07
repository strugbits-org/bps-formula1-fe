import TermsAndCondition from "@/components/TermsAndCondition";
import { getTermsAndConditionsPageData } from "@/services/apiServices";

export default function Page({ termsAndConditionsPageData }) {
  return (
    <TermsAndCondition pages={termsAndConditionsPageData[0].content.nodes} />
  );
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
