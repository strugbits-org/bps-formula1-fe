import useUserData from "@/hooks/useUserData";
import { removeSavedProduct, saveProduct, unSaveProduct } from "@/services/scApiCalls";
import { getUserAuth } from "@/utils/GetUser";
import { useState, useEffect } from "react";

export const SaveProductButton = ({
  productData,
  dataAos,
  savedProductsData,
  setSavedProductsData,
}) => {
  const [productSaved, setProductSaved] = useState(false);
  const [error, setError] = useState("");
  const { memberId } = useUserData();
  const authToken = getUserAuth();

  const productId = productData?.product._id;

  useEffect(() => {
    if (savedProductsData?.length) {
      setProductSaved(savedProductsData?.some((i) => i?.product?._id === productId));
    }
  }, [memberId, savedProductsData]);

  const handleProductSaveToggle = async (productId, isSaving) => {
    try {
      setProductSaved(isSaving);
      if (isSaving) {
        await saveProduct(productId);
      } else {
        await unSaveProduct(productId);
      }

      if (setSavedProductsData) {
        if (savedProductsData.findIndex((x) => x.product._id === productId) !== -1) {
          const data = savedProductsData.filter((x) => x.product._id !== productId);
          setSavedProductsData(data);
        } else {
          const data = [...savedProductsData, productData];
          setSavedProductsData(data);
        }
      }
    } catch (error) {
      console.error(
        `Error ${isSaving ? "saving" : "unsaving"} product:`,
        error
      );
      if (isSaving) {
        setError("saving");
        setProductSaved(false);
      } else {
        setError("unsaving");
        setProductSaved(true);
      }
    }
  };

  const handleClick = () => {
    handleProductSaveToggle(productId, !productSaved);
  };

  const buttonProps = {
    className: `btn-bookmark aos-animate 
    ${error === "" && productSaved ? "productSavedColor" : ""}
    ${error === "saving" && productSaved ? "productSavedColor" : ""}
    ${error === "unsaving" && productSaved ? "productSavedColor" : ""}`,
    onClick: handleClick,
    ...(dataAos && { "data-aos": dataAos }),
  };

  return (
    <button type="button" {...buttonProps}>
      <i className="icon-bookmark"></i>
    </button>
  );
};
