import { createWixClient } from "@/utils/createWixClient";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const params = req.nextUrl.searchParams;
    const payloadString = params.get('payload');
    const parsedPayload = JSON.parse(payloadString);

    const {
      dataCollectionId,
      includeReferencedItems,
      returnTotalCount,
      contains,
      limit,
      eq,
      ne,
      hasSome,
      skip,
    } = parsedPayload;

    const options = {};

    const authCollections = [
      "PrivacyandPolicyPageContentF1",
      "TermsandConditionsPageContentF1",
      "HomePageContentF1",
      "SocialMediaLinksF1",
      "HomePageBottomLeftLinksF1",
      "SignInPageF1",
      "CreateAccountPageF11",
      "HospitalitySpaceLocatedOptionsF1",
      "GalleryPageF1",
      "CollectionsF1",
      "BackgroundImagesF1",
      "ModalLogos",
      "ConfirmEmailPageContentF1",
      "ResetPasswordPageContentF1",
      "FooterDataF1",
      "FooterLinksDataF1",
      "F1CategoriesStructure",
      "colorFilterCache",
      "CollectionsPageDataF1",
      "CollectionsPostPageDataF1",
      "ProductPostPageF1",
      "Stores/Products",
      "locationFilteredVariant",
      "BPSPairItWith",
      "Stores/Variants",
      "BPSProductImages",
      "MyAccountPageDataF1",
      "ChangePasswordPageDataF1",
      "QuotesHistoryPageDataF1",
      "SavedProductPageData",
    ];

    const isValid = authCollections.includes(dataCollectionId);
    const wixClient = await createWixClient();

    if (dataCollectionId && !isValid) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (dataCollectionId) options.dataCollectionId = dataCollectionId;
    if (includeReferencedItems?.length > 0) options.includeReferencedItems = includeReferencedItems;
    if (returnTotalCount) options.returnTotalCount = returnTotalCount;

    let data = wixClient.items.queryDataItems(options);

    if (contains?.length === 2) {
      data = data.contains(contains[0], contains[1]);
    }

    if (eq && eq.length > 0 && eq !== "null") {
      eq.forEach((filter) => {
        data = data.eq(filter.key, filter.value);
      });
    }

    if (hasSome && hasSome.length > 0 && hasSome !== "null") {
      hasSome.forEach((filter) => {
        data = data.hasSome(filter.key, filter.values);
      });
    }

    if (skip && skip !== "null") {
      data = data.skip(skip);
    }

    if (limit && limit !== "null" && limit !== "infinite") {
      data = data.limit(limit);
    }

    if (limit == "infinite") {
      data = data.limit(50);
    }

    if (ne && ne.length === 2 && ne !== "null" && ne[0] !== null && ne[1] !== null) {
      data = data.ne(ne[0], ne[1]);
    }

    data = await data.find();

    if (limit == "infinite") {
      let items = data._items;
      while (items.length < data._totalCount) {
        data = await data._fetchNextPage();
        items = [...items, ...data._items];
      }
      data._items = items;
    }

    
    if (data._items.length > 0) {
      if (dataCollectionId === "Stores/Products") {
        data._items = data._items.map((val) => {
          delete val.data.formattedDiscountedPrice;
          delete val.data.formattedPrice;
          delete val.data.price;
          delete val.data.discountedPrice;
          return val;
        });
      }
      if (dataCollectionId === "locationFilteredVariant") {
        data._items = data._items.map((val) => {
          val.data.variantData = val.data.variantData.map((val2) => {
            delete val2.variant.discountedPrice;
            delete val2.variant.price;
            return val2;
          });
          delete val?.data?.product?.formattedDiscountedPrice;
          delete val?.data?.product?.discountedPrice;
          delete val?.data?.product?.formattedPrice;
          delete val?.data?.product?.price;
          return val;
        });
      }
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};