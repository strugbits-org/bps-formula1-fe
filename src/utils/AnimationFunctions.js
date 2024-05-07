export const AnimationFunction = () => {
  if (typeof window !== "undefined") {
    document.body.classList.add("page-leave-active");
    setTimeout(() => {
      document.body.classList.remove("page-leave-active");
      document.body.classList.add("page-enter-active");
    }, 900);
  }
};

let page;
let cleanPage;
if (typeof window !== "undefined") {
  page =
    window.location.pathname.trim() === "/"
      ? "home"
      : window.location.pathname.substring(1);
  cleanPage = page.split("/")[0].trim();
}

export const initAnimations = () => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      document.querySelector(".initScript").click();
    }, 200);
  }
};

export const updatedWatched = () => {
  if (typeof window !== "undefined") {
    setTimeout(() => {
      document.querySelector(".updateWatched").click();
    }, 200);
  }
};

export const pageLoadFinished = () => {
  if (typeof window !== "undefined") {
    const body = document.body;
    if (body.classList.contains("menu-active"))
      body.classList.remove("menu-active");
    window.scrollTo({ top: 0 });
    body.classList.add("page-enter-active");
    body.classList.remove("page-leave-active");
    setTimeout(() => {
      body.classList.remove("page-enter-active");
    }, 900);
  }
};

export const markPageLoaded = (watched = true) => {
  if (typeof window !== "undefined") {
    setTimeout(() => window.scrollTo({ top: 0 }), 200);
    initAnimations();
    if (watched) updatedWatched();
    const isFirstLoadDone = document.body.classList.contains("first-load-done");
    if (isFirstLoadDone) {
      pageLoadEnd();
    } else {
      firstLoadAnimation();
    }
  }
};

export const startLoading = (disableLoader) => {
  if (disableLoader) return;

  const isDataLoaded = document.body.classList.contains(cleanPage + "-loaded");
  if (isDataLoaded) pageLoadStart();
};

export const endLoading = (disableLoader) => {
  if (disableLoader) return;

  const isDataLoaded = document.body.classList.contains(cleanPage + "-loaded");
  if (isDataLoaded) {
    pageLoadFinished();
    updatedWatched();
  }
};

export const firstLoadAnimation = async () => {
  document.body.dataset.load = "first-leaving";
  setTimeout(() => {
    document.body.dataset.load = "first-done";
  }, 1200);
  document.body.classList.add("first-load-done");
};

export const pageLoadStart = () => {
  if (typeof window !== "undefined") {
    document.body.classList.add("page-leave-active");
  }
};
export const pageLoadEnd = () => {
  if (window && typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
    const body = document.body;
    body.classList.add("page-enter-active");
    body.classList.remove("page-leave-active");
    setTimeout(() => {
      body.classList.remove("page-enter-active");
    }, 900);
  }
};
