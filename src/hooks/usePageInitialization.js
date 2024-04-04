import { useEffect } from "react";

function usePageInitialization(
  pageName,
  initialClickSelector,
  secondaryClickSelector,
  tertiaryClickSelector
) {
  useEffect(() => {
    document.body.dataset.pg = pageName;

    const initElement = document.querySelector(initialClickSelector);
    const secondaryElement = document.querySelector(secondaryClickSelector);
    const tertiaryElement = document.querySelector(tertiaryClickSelector);
    // console.log(secondaryElement, "secondaryElement");
    // console.log(tertiaryElement, "tertiaryElement");
    if (initElement) {
      // Call the function directly if available
      if (initElement.click) {
        initElement.click();
      } else {
        // Otherwise, you may need to handle non-clickable elements differently
        console.warn("Element does not support click method:", initElement);
      }
    }

    if (secondaryElement) {
      // console.log("secondaryElement Clicked");

      if (secondaryElement.click) {
        secondaryElement.click();
      } else {
        console.warn(
          "Element does not support click method:",
          secondaryElement
        );
      }
    }
    // setTimeout(() => {
    // }, 2000);

    if (tertiaryElement) {
      // console.log("tertiaryElement Clicked");

      if (tertiaryElement.click) {
        tertiaryElement.click();
      } else {
        console.warn("Element does not support click method:", tertiaryElement);
      }
    }
  }, [
    pageName,
    initialClickSelector,
    secondaryClickSelector,
    tertiaryClickSelector,
  ]);
}

export default usePageInitialization;
