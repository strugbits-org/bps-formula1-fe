import useUserData from "@/hooks/useUserData";
import { getUserAuth } from "@/utils/GetUser";
import { useState, useEffect } from "react";

export const SaveProductButton = ({
  productData,
  productId,
  members,
  dataAos,
  onUnSave,
  savedProductsData,
  setSavedProductsData
}) => {
  const [productSaved, setProductSaved] = useState(false);
  const [error, setError] = useState("");
  const { memberId } = useUserData();
  const authToken = getUserAuth();

  useEffect(() => {
    if ((members && members.length > 0) || savedProductsData?.length) {
      setProductSaved(
        // members?.includes(memberId) ||
        savedProductsData?.some((i) => i?.product?._id === productId)
      );
    }
  }, [members, memberId, savedProductsData]);

  const handleProductSaveToggle = async (productId, isSaving) => {
    const base_url = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const endpoint = isSaving
      ? `${base_url}formula1/wix/saveProduct/${productId}`
      : `${base_url}formula1/wix/removeSavedProduct/${productId}`;

    try {
      setProductSaved(isSaving);
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const dat = await response.json();
      if (!isSaving && onUnSave) {
        onUnSave(productId);
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
    if (setSavedProductsData) {
      if (savedProductsData.findIndex((x) => x.product._id === productId) !== -1) {
        const data = savedProductsData.filter((x) => x.product._id !== productId);
        setSavedProductsData(data);
      } else {
        const data = [...savedProductsData, productData];
        setSavedProductsData(data);
      }
    }
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
