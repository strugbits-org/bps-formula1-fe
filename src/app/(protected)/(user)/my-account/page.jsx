import MyAccount from "@/components/Account/MyAccount";
import {
  getCreateAccountDropdown,
  getCreateAccountForm,
  getMyAccountPageData,
} from "@/services/apiServices";

export default async function Page() {
  const [myAccountPageData, createAccountForm, createAccountDropdown] =
    await Promise.all([
      getMyAccountPageData(),
      getCreateAccountForm(),
      getCreateAccountDropdown(),
    ]);

  return (
    <MyAccount
      myAccountPageData={myAccountPageData}
      createAccountForm={createAccountForm}
      dropdown={createAccountDropdown}
    />
  );
}
