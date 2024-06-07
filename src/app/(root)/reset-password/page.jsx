import ResetPassword from "@/components/ForgotPassword/ResetPassword";
import {
  getResetPasswordPageData,
  getSignInPage,
} from "@/services/apiServices";

export default async function Page() {
  const [signInPage, resetPasswordPageData] = await Promise.all([
    getSignInPage(),
    getResetPasswordPageData(),
  ]);
  return (
    <ResetPassword
      signInPage={signInPage}
      resetPasswordPageData={resetPasswordPageData}
    />
  );
}
