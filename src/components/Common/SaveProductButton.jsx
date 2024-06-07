import useUserData from "@/hooks/useUserData";
import { getUserAuth } from "@/utils/GetUser";
import { useState, useEffect } from "react";

export const SaveProductButton = ({ productId, members, dataAos, onUnSave }) => {
  const authToken = getUserAuth();
  const { memberId } = useUserData();
console.log(productId, "productId>>");
const [productSaved, setProductSaved] = useState(false);
const [error, setError] = useState("");
useEffect(() => {
  if (members && members.length > 0) {
    setProductSaved(members.includes(memberId));
  }
}, [members, memberId]);

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
    console.log(dat, "called");
    if (!isSaving && onUnSave) {
      console.log("if>>>>>");
      onUnSave(productId);
    }
  } catch (error) {
    console.error(`Error ${isSaving ? "saving" : "unsaving"} product:`, error);
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