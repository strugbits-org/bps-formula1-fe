import Collections from "@/appPages/Collection/Collections";
import createWixClient from "@/config/WixConfig";

const WixClient = createWixClient();

export const getCollectionsData = async () => {
  try {
    let options = {
      dataCollectionId: "Collectionsf1",
    };
    const { items: collectionsItemData } = await WixClient.items
      .queryDataItems(options)
      .find();
    const desiredData = [];
    for (let i = 0; i < collectionsItemData.length; i++) {
      const element = collectionsItemData[i];
      desiredData.push(element.data);
    }

    return desiredData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default async function Page() {
  const collectionsData = await getCollectionsData();

  return <Collections collectionsData={collectionsData} />;
}
