import {
  initAnimations,
  pageLoadFinished,
  updatedWatched,
} from "./AnimationFunctions";

let collectionLoaded = 0;

export const resetCount = () => {
  collectionLoaded = 0;
};

const changeProgress = (percent) => {
  document.body.style.setProperty("--percentage", percent / 100);
  document.body.style.setProperty("--percentage2", `${percent}%`);
  const elProg = document.querySelector("[data-load-progress]");
  if (elProg) elProg.dataset.loadProgress = percent;
};

export const handleCollectionLoaded = () => {
  collectionLoaded++;

  const page =
    window.location.pathname.trim() === "/"
      ? "home"
      : window.location.pathname.substring(1);
  const cleanPage = page.split("/")[0].trim();

  const collectionsCount =
    {
      home: 6,
      gallery: 4,
      collections: 1,
      "collections-post": 1,
      "my-account": 1,
      "terms-and-condition": 1,
      "privacy-and-policy": 1,
      //   market: 3,
      //   services: 3,
      //   project: 3,
      //   article: 3,
      //   contact: 1,
    }[cleanPage] || 0;

  console.log(collectionsCount, collectionLoaded, "collectionsCount>>");
  const progressPercent = Math.ceil(
    (collectionLoaded / collectionsCount) * 100
  );
  changeProgress(progressPercent);

  const markPageLoaded = () => {
    console.log("page loaded ");
    collectionLoaded = 0;
    document.body.classList.add(`${cleanPage}-loaded`);
    initAnimations();
    updatedWatched();
    const isFirstLoadDone = document.body.classList.contains("first-load-done");
    if (isFirstLoadDone) {
      pageLoadFinished();
    } else {
      window.scrollTo({ top: 0 });
      document.body.dataset.load = "first-leaving";
      setTimeout(() => {
        document.body.dataset.load = "first-done";
      }, 1200);
      document.body.classList.add("first-load-done");
    }
  };
  if (collectionLoaded >= collectionsCount) {
    markPageLoaded();
  }
};
