function RenderImage(imageSRC) {
  if (
    imageSRC &&
    (imageSRC.startsWith("wix:image://v1/") ||
      imageSRC.startsWith("wix:vector://v1/"))
  ) {
    const wixImageURL = imageSRC.startsWith("wix:image://v1/")
      ? "https://static.wixstatic.com/media/"
      : "https://static.wixstatic.com/shapes/";
    const wixLocalURL = imageSRC
      .replace("wix:image://v1/", "")
      .replace("wix:vector://v1/", "")
      .split("/")[0];
    // Remove '#' symbol
    const trimmedURL = wixLocalURL.replace("#", "");
    return wixImageURL + trimmedURL;
  } else {
    return imageSRC;
  }
}

export function getFullImagePost(wix_url) {
  if (wix_url) {
    const src = wix_url.split("#")[0];
    if (
      src &&
      (src.startsWith("wix:image://v1/") || src.startsWith("wix:vector://v1/"))
    ) {
      const wixImageURL = src.startsWith("wix:image://v1/")
        ? "https://static.wixstatic.com/media/"
        : "https://static.wixstatic.com/shapes/";
      const wixLocalURL = src
        .replace("wix:image://v1/", "")
        .replace("wix:vector://v1/", "")
        .split("/")[1];
      return wixImageURL + wixLocalURL;
    } else {
      return src;
    }
  }
}

export default RenderImage;
