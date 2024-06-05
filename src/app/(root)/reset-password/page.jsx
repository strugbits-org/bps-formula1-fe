import ResetPassword from "@/components/ForgotPassword/ResetPassword";
import { getSignInPage } from "@/services/apiServices";

export default async function Page() {
  const [signInPage] = await Promise.all([getSignInPage()]);
  return <ResetPassword signInPage={signInPage} />;
}
