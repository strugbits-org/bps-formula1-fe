const screen = {
  isPhone: false,
  isTablet: false,
  isMobile: false,
  isDesktop: false,
  isPhonePlus: false,
  isIphone: false,
  isSafariDesktop: false,
  isMacChrome: false,
  isMac: false,
  isFirefox: false,
  /**@type {'phone' | 'tablet' | 'desktop'} */
  size: "",
  width: 0,
  height: 0,
  tresholdPhone: 768,
  tresholdTablet: 1025
};
const isMobileUserAgent = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const uA = navigator.userAgent;
const vendor = navigator.vendor;
screen.isSafariDesktop = /Safari/i.test(uA) && /Apple Computer/.test(vendor) && !/Mobi|Android/i.test(uA);
screen.isMac = navigator.userAgent.indexOf("Mac OS X") != -1;
screen.isIphone = navigator.userAgent.match(/iPhone/i);
if (screen.isMac && window.chrome) {
  screen.isMac = false;
  screen.isMacChrome = true;
}
screen.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
const size = function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  screen.isPhone = w < screen.tresholdPhone;
  screen.isTablet = w >= screen.tresholdPhone && w <= screen.tresholdTablet;
  screen.isMobile = w <= screen.tresholdTablet || isMobileUserAgent == true;
  screen.isDesktop = w >= screen.tresholdTablet;
  screen.phonePlus = w >= screen.tresholdPhone;
  if (screen.isPhone)
    screen.size = "phone";
  if (screen.isTablet)
    screen.size = "tablet";
  if (screen.isDesktop)
    screen.size = "desktop";
  screen.width = w;
  screen.height = h;
};
window.addEventListener("resize", size);
size();
export {
  screen as s
};
