import ChangePassword from "@/components/Account/ChangePassword";
import { getChangePasswordPageData } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ changePasswordPageData }) {
  markPageLoaded();

  return <ChangePassword changePasswordPageData={changePasswordPageData} />;
}

export const getServerSideProps = async () => {
  const [changePasswordPageData] = await Promise.all([
    getChangePasswordPageData(),
  ]);
  return {
    props: {
      changePasswordPageData,
    },
  };
};
