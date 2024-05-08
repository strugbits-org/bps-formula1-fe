import MyAccount from "@/components/Account/MyAccount";
import { getCreateAccountDropdown, getCreateAccountForm, getMyAccountPageData } from "@/services/apiServices";
import { markPageLoaded } from "@/utils/AnimationFunctions";

export default function Page({ myAccountPageData,createAccountForm,createAccountDropdown }) {
  markPageLoaded();

  return <MyAccount myAccountPageData={myAccountPageData[0]} createAccountForm={createAccountForm} dropdown={createAccountDropdown}/>;
}

export const getServerSideProps = async () => {
  const [myAccountPageData,createAccountForm,createAccountDropdown] = await Promise.all([getMyAccountPageData(),
    getCreateAccountForm(),
    getCreateAccountDropdown(),


  ]);
  return {
    props: {
      myAccountPageData,
      createAccountForm,
      createAccountDropdown
    },
  };
};
