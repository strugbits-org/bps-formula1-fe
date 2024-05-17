import useUserData from "@/hooks/useUserData";
import { getUserAuth } from "@/utils/GetUser";
import { useState, useEffect } from "react";

export const SaveProductButton = ({
  productId,
  members,
  dataAos,
  onUnSave,
}) => {
  const authToken = getUserAuth();
  const { memberId } = useUserData();

  const [productSaved, setProductSaved] = useState(false);

  useEffect(() => {
    if (members && members.length > 0) {
      setProductSaved(members.includes(memberId));
    }
  }, [members, memberId]);

  const handleProductSaveToggle = async (productId, isSaving) => {
    const endpoint = isSaving
      ? `http://localhost:8003/formula1/wix/saveProduct/${productId}`
      : `http://localhost:8003/formula1/wix/removeSavedProduct/${productId}`;

    try {
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

      await response.json();
      setProductSaved(isSaving);
      if (!isSaving && onUnSave) {
        onUnSave(productId);
      }
    } catch (error) {
      console.error(
        `Error ${isSaving ? "saving" : "unsaving"} product:`,
        error
      );
    }
  };

  const handleClick = () => {
    handleProductSaveToggle(productId, !productSaved);
  };

  const buttonProps = {
    className: `btn-bookmark aos-animate ${
      productSaved ? "productSavedColor" : ""
    }`,
    onClick: handleClick,
    ...(dataAos && { "data-aos": dataAos }),
  };

  return (
    <button type="button" {...buttonProps}>
      <i className="icon-bookmark"></i>
    </button>
  );
};
