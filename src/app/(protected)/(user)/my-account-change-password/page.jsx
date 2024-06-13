import { getChangePasswordPageData } from "@/services/scApiCalls";
import ChangePassword from "@/components/Account/ChangePassword";

export default async function Page() {
  const [changePasswordPageData] = await Promise.all([
    getChangePasswordPageData(),
  ]);
  return <ChangePassword changePasswordPageData={changePasswordPageData} />;
}
