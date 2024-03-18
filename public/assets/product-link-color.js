import { D as DataSetGet } from "./data-set-get.js";
function parseAnimation(strAr) {
  let animation = "", duration = ".8s", timingFunction = "ease-in-out", delay = "", iteration = "", fill = "both";
  for (let i = 0; i < strAr.length; i++) {
    const str = strAr[i];
    const n = Number.parseFloat(str);
    if (i == 0) {
      animation = str;
      continue;
    }
    if (i == 1) {
      if (!isNaN(n)) {
        duration = str;
      } else if (isEase(str)) {
        timingFunction = timingDict[str];
      } else if (str === "infinite") {
        delay = "0s";
        iteration = str;
      }
      continue;
    }
    if (i == 2) {
      if (!isNaN(n)) {
        delay = str;
      } else if (str == "-") {
        delay = "0s";
      } else if (isEase(str)) {
        timingFunction = timingDict[str];
      } else if (str === "infinite") {
        delay = "0s";
        iteration = str;
      }
      continue;
    }
    if (i == 3) {
      if (!isNaN(n) && !delay) {
        delay = str;
      } else if (!isNaN(n) && delay) {
        iteration = str;
      } else if (str == "-") {
        delay = "0s";
      } else if (isEase(str)) {
        timingFunction = timingDict[str];
      } else if (str === "infinite") {
        delay = "0s";
        iteration = str;
      }
      continue;
    }
    if (i == 4) {
      if (!isNaN(str)) {
        iteration = str;
      } else if (str === "infinite") {
        iteration = str;
      }
    }
  }
  let result = `${animation} ${duration} ${timingFunction}`;
  if (delay)
    result += " " + delay;
  if (iteration)
    result += " " + iteration;
  result += " " + fill;
  return result;
}
function isEase(str) {
  if (timingDict[str]) {
    return true;
  } else {
    return false;
  }
}
const timingDict = {
  "ease": "ease",
  "linear": "linear",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  "ease-in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
  "ease-in-cubic": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
  "ease-in-quart": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
  "ease-in-quint": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
  "ease-in-sine": "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
  "ease-in-expo": "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
  "ease-in-circ": "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
  "ease-in-back": "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
  "ease-out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
  "ease-out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
  "ease-out-quart": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  "ease-out-quint": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
  "ease-out-sine": "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
  "ease-out-expo": "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
  "ease-out-circ": "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
  "ease-in-out-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
  "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
  "ease-in-out-quart": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
  "ease-in-out-quint": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
  "ease-in-out-sine": "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
  "ease-in-out-expo": "cubic-bezier(1.000, 0.000, 0.000, 1.000)",
  "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
  "ease-in-out-back": "cubic-bezier(0.680, -0.550, 0.265, 1.550)"
};
function tokenizer(input) {
  const regTokens = /([^,\s].[^,]*)/g;
  const regKey = /.+?(?=:)/;
  const regValues = /(?!.+?:)[^:\s]\S+|-|\d+/g;
  const result = [];
  const tokens = input.match(regTokens);
  if (!tokens)
    return null;
  tokens.forEach((t) => {
    const key = t.match(regKey);
    const values = t.match(regValues);
    result.push({ key: key ? key[0] : null, values });
  });
  return result;
}
let watched = [];
let screenSize = "";
const getsize = function() {
  const iw = window.innerWidth;
  if (iw < 768)
    screenSize = "phone";
  if (iw >= 768 && iw <= 1200)
    screenSize = "tablet";
  if (iw > 1200)
    screenSize = "desktop";
};
getsize();
window.addEventListener("resize", getsize);
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const defs = watched.filter((t) => t.trigger === entry.target);
    const vis = entry.isIntersecting;
    const scrollingDown = entry.boundingClientRect.top < 0;
    defs.forEach((def) => {
      if (!def.el.isConnected || vis && !def.isConnected) {
        def.isConnected = def.el.isConnected;
        return;
      }
      if (vis && !def.animated || vis && def.loop[screenSize]) {
        let animate = function() {
          def.animated = true;
          def.el.classList.add("aos-animate");
          if (def[screenSize]) {
            def.el.style.animation = def[screenSize];
            def.el.classList.add(def[screenSize].match(/^\S+/)[0]);
          }
        };
        let delay = 0;
        if (screenSize == "phone" && def.el.dataset.delayPhone) {
          delay = def.el.dataset.delayPhone;
        } else if (screenSize == "tablet" && def.el.dataset.delayTablet) {
          delay = def.el.dataset.delayTablet;
        } else if (screenSize == "desktop" && def.el.dataset.delayDesktop) {
          delay = def.el.dataset.delayDesktop;
        } else if (def.el.dataset.delay) {
          delay = def.el.dataset.delay;
        }
        if (delay > 0) {
          setTimeout(() => {
            animate();
          }, delay);
        } else {
          animate();
        }
      }
      if (!vis && def.loop[screenSize] && !scrollingDown) {
        if (def[screenSize]) {
          def.el.style.animation = "";
          const elclass = def[screenSize].match(/^\S+/);
          if (elclass)
            def.el.classList.remove(elclass[0]);
        }
        def.el.classList.remove("aos-animate");
      }
    });
  });
});
const obsAttrbutes = new MutationObserver(() => {
  updateWatched();
});
const updateWatched = function() {
  watched = [];
  obs.disconnect();
  obsAttrbutes.disconnect();
  const els = document.querySelectorAll("[data-aos]");
  els.forEach((el) => {
    createAosParams(el);
  });
};
function createAosParams(el) {
  const aosdef = {
    el,
    isConnected: el.isConnected,
    trigger: el,
    loop: {
      desktop: false,
      tablet: false,
      phone: false
    },
    animated: false,
    desktop: null,
    tablet: null,
    phone: null
  };
  const tokens = tokenizer(el.dataset.aos);
  if (tokens) {
    tokens.forEach((t) => {
      if (t.key === "trigger") {
        let trigger = el.closest(t.values[0]);
        if (!trigger) {
          trigger = document.querySelector(t.values[0]);
        }
        aosdef.trigger = trigger;
        return;
      }
      if (t.values[0] === "loop") {
        if (!t.key) {
          aosdef.loop.desktop = true;
          aosdef.loop.tablet = true;
          aosdef.loop.phone = true;
        } else {
          if (t.key.includes("d"))
            aosdef.loop.desktop = true;
          if (t.key.includes("t"))
            aosdef.loop.tablet = true;
          if (t.key.includes("p"))
            aosdef.loop.phone = true;
        }
        return;
      }
      const v = parseAnimation(t.values);
      if (!t.key) {
        aosdef.desktop = v;
        aosdef.tablet = v;
        aosdef.phone = v;
        return;
      }
      if (t.key.includes("d"))
        aosdef.desktop = v;
      if (t.key.includes("t"))
        aosdef.tablet = v;
      if (t.key.includes("p"))
        aosdef.phone = v;
    });
  }
  obs.observe(aosdef.trigger);
  obsAttrbutes.observe(aosdef.el, { attributeFilter: ["data-aos"] });
  watched.push(aosdef);
}
function productLinkColor() {
  let productLink = document.querySelectorAll(".product-link:not(.js-product-link-color-running)");
  productLink.forEach((element) => {
    element.classList.add("js-product-link-color-running");
    new DataSetGet({
      parentContainer: element,
      dataGetSelector: "[data-get-product-link-color]",
      dataSetSelector: "[data-set-product-link-color]",
      defaultActive: "[data-default-product-link-active]",
      listener: "hover",
      //'hover' ou 'click'
      toggle: false,
      multiple: false,
      deactivateOnClickOutside: false,
      leaveDelay: 0,
      onClose: () => {
      },
      onComplete: () => {
      },
      onActivate: (item) => {
      },
      onDeactivate: (item) => {
      }
    });
  });
}
export {
  productLinkColor as p,
  updateWatched as u
};
