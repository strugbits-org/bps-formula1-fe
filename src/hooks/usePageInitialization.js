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

    if (initElement) {
      initElement.click();
    }

    if (secondaryElement) {
      secondaryElement.click();
    }
    if (tertiaryElement) {
      tertiaryElement.click();
    }
  }, [
    pageName,
    initialClickSelector,
    secondaryClickSelector,
    tertiaryClickSelector,
  ]);
}

export default usePageInitialization;
