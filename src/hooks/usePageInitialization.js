"use client";
import { useEffect } from "react";

function usePageInitialization(
  status,
  pageName,
  initialClickSelector,
  secondaryClickSelector,
  tertiaryClickSelector
) {
  useEffect(() => {
    if (status === "succeeded") {
      setTimeout(() => {
        document.body.dataset.pg = pageName;

        const initElement = document.querySelector(initialClickSelector);
        const secondaryElement = document.querySelector(secondaryClickSelector);
        const tertiaryElement = document.querySelector(tertiaryClickSelector);
        if (initElement) {
          if (initElement.click) {
            initElement.click();
          } else {
            console.warn("Element does not support click method:", initElement);
          }
        }

        if (secondaryElement) {
          if (secondaryElement.click) {
            console.log(secondaryElement);
            secondaryElement.click();
          } else {
            console.warn(
              "Element does not support click method:",
              secondaryElement
            );
          }
        }

        if (tertiaryElement) {
          if (tertiaryElement.click) {
            tertiaryElement.click();
          } else {
            console.warn(
              "Element does not support click method:",
              tertiaryElement
            );
          }
        }
      }, 800);
    }
  }, [
    status,
    pageName,
    initialClickSelector,
    secondaryClickSelector,
    tertiaryClickSelector,
  ]);
}

export default usePageInitialization;
