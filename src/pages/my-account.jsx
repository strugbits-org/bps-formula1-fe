import MyAccount from "@/components/Account/MyAccount";
import { getMyAccountPageData } from "@/services/apiServices";

export default function Page({ myAccountPageData }) {
  return <MyAccount myAccountPageData={myAccountPageData[0]} />;
}

export const getServerSideProps = async () => {
  const [myAccountPageData] = await Promise.all([getMyAccountPageData()]);
  return {
    props: {
      myAccountPageData,
    },
  };
};
