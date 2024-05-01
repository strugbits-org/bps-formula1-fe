import TermsAndCondition from "@/appPages/TermsAndCondition";
import createWixClient from "@/config/WixConfig";
const WixClient = createWixClient();

const getTermsAndConditionsData = async () => {
  try {
    let options = {
      dataCollectionId: "TermsandConditionsPageContentF1",
    };
    const { items: fetchHomeData } = await WixClient.items
      .queryDataItems(options)
      .find();

    return fetchHomeData[0].data.content.nodes;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default async function Page() {
  const termsAndConditionsData = await getTermsAndConditionsData();

  return <TermsAndCondition pages={termsAndConditionsData} />;
}
