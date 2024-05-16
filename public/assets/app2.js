var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
      (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
import {
  p as productLinkColor,
  u as updateWatched,
} from "./product-link-color.js";
import {
  g as geral,
  s as singlePjaxInstance,
  a as getDefaultExportFromCjs,
  c as commonjsGlobal,
  m as manualModalClose,
} from "./pjax.js";
import { t as toElement, D as DataSetGet } from "./data-set-get.js";
import { s as screen } from "./screen-size.js";
import {
  e as elementOuterSize,
  a as elementIndex,
  c as createElementIfNotDefined,
  b as elementParents,
  S as Swiper,
  N as Navigation,
} from "./navigation.js";
import { productContent } from "./product-content.js";
import { collections } from "./collections.js";
import { FormSignIn } from "./form-sign-in.js";
var require_app2 = __commonJS({
  "assets/app2.js"(exports, module) {
    const defaultConfig = {
      rootMargin: "0px",
      threshold: 0,
      load: function load(a2) {
        if ("picture" === a2.nodeName.toLowerCase()) {
          let src = a2.querySelector("source").getAttribute("srcset");
          let image = new Image();
          image.src = src;
          a2.append(image);
          image.onload = function () {
            markAsLoaded(a2);
          };
        }
        "iframe" === a2.nodeName.toLowerCase() &&
          a2.getAttribute("data-src") &&
          (a2.setAttribute("src", a2.getAttribute("data-src")),
            a2.setAttribute("data-loaded", "true"));
        if (
          "video" === a2.nodeName.toLowerCase() &&
          !a2.getAttribute("data-src") &&
          a2.children
        ) {
          a2.setAttribute("poster", a2.getAttribute("data-poster"));
          b = a2.children;
          for (var d2, c2 = 0; c2 <= b.length - 1; c2++)
            if ((d2 = b[c2].getAttribute("data-src"))) b[c2].src = d2;
          a2.load();
        }
        a2.getAttribute("data-src") && (a2.src = a2.getAttribute("data-src"));
        a2.getAttribute("data-srcset") &&
          a2.setAttribute("srcset", a2.getAttribute("data-srcset"));
        a2.getAttribute("data-background-image") &&
          (a2.style.backgroundImage =
            "url('" + a2.getAttribute("data-background-image") + "')");
        a2.getAttribute("data-toggle-class") &&
          a2.classList.toggle(a2.getAttribute("data-toggle-class"));
      },
      loaded: function loaded(e2) {
        e2.onload = (e3) => {
          markAsLoaded(e3.target);
        };
      },
    };
    function markAsLoaded(element) {
      element.setAttribute("data-loaded", true);
      element.parentElement.setAttribute("data-loaded", true);
    }
    const isLoaded = function (element) {
      return element.getAttribute("data-loaded") === "true";
    };
    const onIntersection = function onIntersection2(load, loaded) {
      return function (entries, observer2) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > 0 || entry.isIntersecting) {
            observer2.unobserve(entry.target);
            if (!isLoaded(entry.target)) {
              load(entry.target);
              loaded(entry.target);
            }
          }
        });
      };
    };
    const getElements = function getElements2(selector2) {
      var root =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : document;
      if (selector2 instanceof Element) {
        return [selector2];
      }
      if (selector2 instanceof NodeList) {
        return selector2;
      }
      return root.querySelectorAll(selector2);
    };
    function lozad(selector2 = ".lozad", options = {}) {
      var selector2 =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : ".lozad";
      var options =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var _Object$assign = Object.assign({}, defaultConfig, options),
        root = _Object$assign.root,
        rootMargin = _Object$assign.rootMargin,
        threshold = _Object$assign.threshold,
        load = _Object$assign.load,
        loaded = _Object$assign.loaded;
      var observer2 = void 0;
      if (typeof window !== "undefined" && window.IntersectionObserver) {
        observer2 = new IntersectionObserver(onIntersection(load, loaded), {
          root,
          rootMargin,
          threshold,
        });
      }
      return {
        observe: function observe() {
          var elements = getElements(selector2, root);
          for (var i2 = 0; i2 < elements.length; i2++) {
            if (isLoaded(elements[i2])) {
              continue;
            }
            if (observer2) {
              observer2.observe(elements[i2]);
              continue;
            }
            load(elements[i2]);
            markAsLoaded(elements[i2]);
            loaded(elements[i2]);
          }
        },
        triggerLoad: function triggerLoad(element) {
          if (isLoaded(element)) {
            return;
          }
          load(element);
          markAsLoaded(element);
          loaded(element);
        },
        observer: observer2,
      };
    }
    function observers() {
      var pictureObserver = lozad("[data-lazy]", {
        threshold: 0.01,
        rootMargin: "1000px 0px",
      });
      pictureObserver.observe();
      let video = document.querySelectorAll("video[data-play-pause]");
      let videoObserver = new IntersectionObserver(
        function (entries, videoObserver2) {
          entries.forEach(function (entry, key) {
            if (entry.intersectionRatio == 0 && !entry.target.paused) {
              entry.target.pause();
              this["isPaused" + key] = true;
            } else if (
              this["isPaused" + key] == true ||
              entry.target.hasAttribute("autoplay")
            ) {
              entry.target.play();
              this["isPaused" + key] = false;
            }
          });
        },
        {
          threshold: 0,
        }
      );
      video.forEach(function (video2) {
        videoObserver.observe(video2);
      });
      let play = document.querySelectorAll("[data-play-toggle]");
      let playObserver = new IntersectionObserver(
        function (entries, playObserver2) {
          entries.forEach(function (entry) {
            var slide = document.querySelector(
              "#" + entry.target.id + " .swiper-container"
            ).swiper;
            if (entry.intersectionRatio > 0) {
              slide.autoplay.start();
            } else {
              slide.autoplay.stop();
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "0px",
        }
      );
      play.forEach(function (play2) {
        playObserver.observe(play2);
      });
    }
    class Page {
      /**
       * Objeto definindo uma página
       * @param {object} params
       * @param {string} params.pageName Nome da página sem o "pg"
       * @param {function} params.init Primeira função a ser chamada, no primeiro carregamento é no "readyState interactive" no pjax, "success"
       * @param {function} params.main Principal função, chamada no primeiro carregamento no "readyState complete"
       * @param {function} params.destroy Chamada
       */
      constructor({ pageName: pageName2, main: main2, init, destroy }) {
        this.pageName = pageName2;
        this.init = init ? init : empty;
        this.main = main2;
        this.destroy = destroy ? destroy : empty;
        this.transitionDelayDesktop = 600;
        this.transitionDelayMobile = 300;
        function empty() {
          return true;
        }
      }
    }
    class PageController {
      constructor() {
        this.pages = [];
        this.currentPage = {};
        this.lastPage = {};
        this.firstPage = true;
        document.addEventListener("pjax:send", this);
        document.addEventListener("pjax:complete", this);
        document.addEventListener("pjax:error", this);
      }
      /**
       * @param {Event} ev
       */
      handleEvent(ev) {
        switch (ev.type) {
          case "pjax:send":
            if (this.currentPage) {
              this.currentPage.destroy();
            }
            break;
          case "pjax:complete":
            this.firstPage = false;
            if (this.updateCurrent()) {
              this.runCurrent();
            }
            break;
          case "pjax:error":
            const problematicUrl = ev.triggerElement.href;
            location.assign(problematicUrl);
            break;
        }
      }
      updateCurrent() {
        const pg = this.pages.find((e2) =>
          e2.pageName.includes(geral.currentPageId)
        );
        if (!pg) {
          this.currentPage = null;
          return false;
        }
        if (this.firstPage) {
          this.currentPage = pg;
          return true;
        } else {
          this.lastPage = this.currentPage;
          this.currentPage = pg;
          return true;
        }
      }
      runCurrent() {
        const pg = this.currentPage;
        try {
          pg.init();
        } catch (error) {
          console.error(`Erro no init da página ${pg.pageName}: ${error}`);
        }
        try {
          pg.main();
        } catch (error) {
          console.error(`Erro no main da página ${pg.pageName}: ${error}`);
        }
      }
      add(page) {
        this.pages.push(page);
      }
    }
    const pageName$8 = "home";
    function main$8() {
      let columnForm = document.querySelector(".column-form");
      let wrapperForm = document.querySelector(".wrapper-form");
      let btnSignIn = document.querySelector(".btn-sign-in:not(.js-running)");
      let btnCreateAccount = document.querySelector(".btn-create-account");
      let containerSignIn = document.querySelector(".container-sign-in");
      let containerCreateAccount = document.querySelector(
        ".container-create-account"
      );
      recalcWrapperHeight();
      btnCreateAccount.addEventListener("click", function () {
        wrapperForm.classList.add("create-account");
        location.hash = "create-account";
        setTimeout(() => {
          containerSignIn.classList.add("d-none");
          containerCreateAccount.classList.remove("d-none");
          if (!screen.isDesktop) {
            recalcWrapperHeight();
          }
        }, 600);
      });
      if (location.hash && location.hash == "#sign-in") {
        document.body.dataset.homeState = "sign-in";
      } else if (location.hash && location.hash == "#create-account") {
        document.body.dataset.homeState = "sign-in";
        wrapperForm.classList.add("create-account");
        setTimeout(() => {
          containerSignIn.classList.add("d-none");
          containerCreateAccount.classList.remove("d-none");
          if (!screen.isDesktop) {
            recalcWrapperHeight();
          }
        }, 600);
      }
      document.addEventListener(
        "pjax:switch",
        function () {
          document.body.dataset.homeState = "";
        },
        { once: true }
      );
      if (btnSignIn) {
        btnSignIn.classList.add("js-running");
        btnSignIn.addEventListener("click", function () {
          if (document.body.dataset.homeState == "sign-in") {
            if (wrapperForm.classList.contains("create-account")) {
              location.hash = "sign-in";
              wrapperForm.classList.remove("create-account");
              wrapperForm.classList.add("back-to-sign-in");
              setTimeout(() => {
                containerSignIn.classList.remove("d-none");
                containerCreateAccount.classList.add("d-none");
                if (!screen.isDesktop) {
                  recalcWrapperHeight();
                }
              }, 600);
              setTimeout(() => {
                wrapperForm.classList.remove("back-to-sign-in");
              }, 1200);
            } else {
              document.body.dataset.homeState = "";
              location.hash = "";
            }
          } else {
            location.hash = "sign-in";
            document.body.dataset.homeState = "sign-in";

            if (wrapperForm.classList.contains("create-account")) {
              location.hash = "sign-in";
              wrapperForm.classList.remove("create-account");
              wrapperForm.classList.add("back-to-sign-in");
              setTimeout(() => {
                containerSignIn.classList.remove("d-none");
                containerCreateAccount.classList.add("d-none");
                if (!screen.isDesktop) {
                  recalcWrapperHeight();
                }
              }, 600);
              setTimeout(() => {
                wrapperForm.classList.remove("back-to-sign-in");
              }, 1200);
            }
          }
        });
      }
      document.querySelectorAll("form").forEach((element) => {
        element.addEventListener("submit", function (e2) {
          setTimeout(() => {
            recalcWrapperHeight();
          }, 0);
        });
      });
      if (screen.isDesktop) {
        window.addEventListener("resize", recalcWrapperHeight);
        document.addEventListener(
          "pjax:switch",
          function () {
            window.removeEventListener("resize", recalcWrapperHeight);
          },
          { once: true }
        );
      } else {
        window.addEventListener("orientationchange", recalcWrapperHeight);
        document.addEventListener(
          "pjax:switch",
          function () {
            window.removeEventListener(
              "orientationchange",
              recalcWrapperHeight
            );
          },
          { once: true }
        );
      }
      if (!screen.isDesktop) {
        document.querySelectorAll(".container-select").forEach((element) => {
          element.addEventListener("input", checkSelect);
        });
      }
      function checkSelect() {
        document.querySelectorAll(".container-select").forEach((element) => {
          let select = element.querySelector(".main-select");
          let other = element.querySelector(".container-select-specify-other");
          if (select.value == "Other") {
            if (other) {
              recalcInputHeight();
            } else {
              if (other) {
                setTimeout(() => {
                  recalcWrapperHeight();
                }, 1e3);
              }
            }
          }
        });
      }
      function recalcWrapperHeight() {
        let wrapperForm2 = document.querySelector(".wrapper-form");
        if (!wrapperForm2) return;
        let height = wrapperForm2.clientHeight;
        columnForm.style.setProperty("--h", height + "px");
      }
      function recalcInputHeight() {
        let wrapperInput = document.querySelector(
          ".container-select-specify-other .wrapper-input"
        );
        if (!wrapperInput) return;
        let wrapperForm2 = document.querySelector(".wrapper-form");
        if (!wrapperForm2) return;
        let height = wrapperForm2.clientHeight;
        columnForm.style.setProperty("--h", height + inputHeight + "px");
      }
    }
    const pgHome = new Page({
      pageName: pageName$8,
      main: main$8,
    });
    (function scrollDetection() {
      let lastScrollTop = 0;
      let lastDirection = 0;
      let lastScrollPosition = 0;
      let vh = window.innerHeight;
      let containerHeight = sourceContainer().scrollHeight;
      document.body.dataset.scrollDirection = "initial";
      document.body.dataset.scrollPosition = "top";
      function scrollDetection2() {
        const currentScroll = scrollY;
        if (lastDirection != 0 && currentScroll <= 0) {
          document.body.dataset.scrollDirection = "initial";
          lastDirection = 0;
        } else if (
          lastDirection != 1 &&
          lastScrollTop > currentScroll &&
          currentScroll > 0
        ) {
          document.body.dataset.scrollDirection = "up";
          lastDirection = 1;
        } else if (
          lastDirection != 2 &&
          lastScrollTop < currentScroll &&
          currentScroll > 0
        ) {
          document.body.dataset.scrollDirection = "down";
          lastDirection = 2;
        }
        lastScrollTop = currentScroll;
        if (lastScrollPosition != 0 && currentScroll <= vh * 0.5) {
          document.body.dataset.scrollPosition = "top";
          lastScrollPosition = 0;
        } else if (
          lastScrollPosition != 1 &&
          currentScroll >= vh * 0.5 &&
          !(currentScroll + vh >= containerHeight - vh * 0.3)
        ) {
          document.body.dataset.scrollPosition = "center";
          lastScrollPosition = 1;
        } else if (
          lastScrollPosition != 2 &&
          currentScroll + vh >= containerHeight - vh * 0.3
        ) {
          document.body.dataset.scrollPosition = "bottom";
          lastScrollPosition = 2;
        }
      }
      window.addEventListener(
        "scroll",
        () => {
          scrollDetection2();
          if (document.getElementById("scroll-progress")) {
            document
              .getElementById("scroll-progress")
              .style.setProperty(
                "--scroll-progress",
                (scrollY + vh) / containerHeight
              );
          }
        },
        {
          passive: true,
        }
      );
      window.addEventListener("resize", () => {
        vh = window.innerHeight;
        containerHeight = sourceContainer().scrollHeight;
        if (document.getElementById("scroll-progress")) {
          document
            .getElementById("scroll-progress")
            .style.setProperty(
              "--scroll-progress",
              (scrollY + vh) / containerHeight
            );
        }
      });
      const bodyObserver = new MutationObserver(() => {
        containerHeight = sourceContainer().scrollHeight;
        if (document.getElementById("scroll-progress")) {
          document
            .getElementById("scroll-progress")
            .style.setProperty(
              "--scroll-progress",
              (scrollY + vh) / containerHeight
            );
        }
      });
      bodyObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
      let vs;
      function vsScrollFix() {
        if (!vs) {
          vs = document.querySelector(".vs-scroll-view");
          if (!vs) {
            return;
          }
        }
        containerHeight = sourceContainer().scrollHeight;
        if (document.getElementById("scroll-progress")) {
          document
            .getElementById("scroll-progress")
            .style.setProperty(
              "--scroll-progress",
              (scrollY + vh) / containerHeight
            );
        }
      }
      setInterval(() => {
        vsScrollFix();
      }, 100);
      function sourceContainer() {
        let container;
        if (window.innerWidth > 1025) {
          container = document.body;
        } else {
          container = document.body;
        }
        return container;
      }
    })();
    function toElementArray(selector2) {
      if (typeof selector2 == "string") {
        return Array.from(document.querySelectorAll(selector2));
      } else if (selector2 instanceof Array) {
        return selector2;
      } else if (
        selector2 instanceof HTMLCollection ||
        selector2 instanceof NodeList
      ) {
        return Array.from(selector2);
      } else if (selector2 instanceof HTMLElement) {
        return [selector2];
      } else {
        console.error("O que é isso? ", selector2);
      }
    }
    function onClickOutside(internalAreas, callback, options) {
      const {
        autoStop = true,
        autoStart = true,
        once = false,
      } = options ? options : {};
      const obj = {
        areas: toElementArray(internalAreas),
        clickInside: false,
        cb: callback,
        autoStop,
        once,
        in: (ev) => {
          obj.clickInside = true;
        },
        out: (ev) => {
          if (!obj.clickInside) {
            obj.cb(ev);
            if (obj.autoStop) obj.stop();
            if (obj.once) obj.destroy();
          }
          obj.clickInside = false;
        },
        start() {
          setTimeout(() => {
            this.areas.forEach((el) => el.addEventListener("click", this.in));
            document.addEventListener("click", this.out);
          }, 0);
        },
        stop() {
          this.areas.forEach((el) => el.removeEventListener("click", this.in));
          document.removeEventListener("click", this.out);
        },
        destroy() {
          this.stop();
          this.areas = null;
          this.cb = null;
        },
      };
      if (autoStart) obj.start();
      return obj;
    }
    class ModalGroup extends HTMLElement {
      constructor() {
        super();
        this.visible = false;
        this.leaveTime = 600;
      }
      connectedCallback() {
        const areas = this.querySelectorAll("[data-modal-area]");
        if (areas.length > 0) {
          this.hideOnClickOutside = onClickOutside(
            areas,
            this.close.bind(this),
            { autoStart: false }
          );
        } else {
          this.hideOnClickOutside = null;
        }
      }
      disconnectedCallback() {
        if (this.hideOnClickOutside) this.hideOnClickOutside.stop();
      }
      static get observedAttributes() {
        return ["name", "active", "leave"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
          case "active":
            queueMicrotask(() => {
              if (newValue === null) {
                this.close();
              } else {
                this.open(newValue);
              }
            });
            break;
          case "name":
            this.name = newValue;
            break;
          case "leave":
            this.leaveTime = Number.parseInt(newValue);
            break;
        }
      }
      handleEvent(ev) {
        if (ev.type === "keydown") {
          if (ev.key === "Escape") this.close();
        }
      }
      open(name) {
        const children = Array.from(this.querySelectorAll("modal-item"));
        const item = name
          ? children.find((c2) => c2.name == name)
          : children[0];
        this.bodyState("active", item.name);
        children.forEach((c2) => c2.close(0));
        this.addActive();
        item.open();
        this.dispatchEvent(new CustomEvent("modal:open", { detail: { item } }));
        document.dispatchEvent(
          new CustomEvent("modal:open", { detail: { item } })
        );
        if (this.hideOnClickOutside) this.hideOnClickOutside.start();
        document.addEventListener("keydown", this);
      }
      next() {
        const children = Array.from(this.querySelectorAll("modal-item"));
        const idx = children.indexOf(children.find((c2) => c2.visible));
        if (idx < children.length - 1) {
          children[idx].close();
          children[idx + 1].open();
        } else {
          children[idx].close();
          children[0].open();
        }
      }
      prev() {
        const children = Array.from(this.querySelectorAll("modal-item"));
        const idx = children.indexOf(children.find((c2) => c2.visible));
        if (idx > 0) {
          children[idx].close();
          children[idx - 1].open();
        } else {
          children[idx].close();
          children[children.length - 1].open();
        }
      }
      close() {
        const delay = this.leaveTime || 0;
        const children = Array.from(this.querySelectorAll("modal-item"));
        children.forEach((c2) => {
          c2.close(delay);
        });
        this.removeActive({ leaveDelay: delay });
        if (delay > 0) this.bodyState("leave");
        setTimeout(() => {
          this.bodyState(null, null);
          this.dispatchEvent(new CustomEvent("modal:close"));
          document.dispatchEvent(new CustomEvent("modal:close"));
        }, delay);
        if (this.hideOnClickOutside) this.hideOnClickOutside.stop();
        document.removeEventListener("keydown", this);
      }
      bodyState(state, item) {
        const ds = document.body.dataset;
        state ? (ds.modalState = state) : delete ds.modalState;
        item ? (ds.modalItem = item) : delete ds.modalItem;
        if (!state && !item) {
          delete ds.modal;
        } else {
          ds.modal = this.name;
        }
      }
    }
    function templateIframe(dataset) {
      const template = document.createElement("template");
      template.innerHTML = `
    <modal-group name="iframe" active>
      <modal-container>
        <modal-item>
        <div class="modal-container-iframe">
        <div class="modal-iframe" data-modal-area>
          <iframe src="${dataset.href}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
          
        <btn-modal-close></btn-modal-close>
        </modal-item>
      </modal-container>
      </modal-group>
      `;
      const modal = template.content;
      modal.firstElementChild.addEventListener(
        "modal:close",
        function () {
          this.remove();
        },
        {
          once: true,
        }
      );
      document.body.appendChild(modal);
    }
    function templateImage(dataset) {
      const template = document.createElement("template");
      let ext = dataset.href;
      ext = ext.substr(ext.lastIndexOf(".") + 1);
      let media;
      if (["mp4", "webm"].includes(ext)) {
        media = `<video src="${dataset.href}" autoplay playsinline muted loop data-modal-area ></video>`;
      } else {
        media = `<img src="${dataset.href}" data-modal-area />`;
      }
      template.innerHTML = `
    <modal-group name="image" active data-cursor-style="default">
      <modal-container>
        <modal-item>
          <div class="modal-container-image">
            <div class="modal-image">

          
            ${media}

            
              
            </div>
          </div>
        </modal-item>
      </modal-container>
      </modal-group>`;
      const modal = template.content;
      modal.firstElementChild.addEventListener(
        "modal:close",
        function () {
          this.remove();
        },
        { once: true }
      );
      document.body.appendChild(modal);
    }
    function templateVideo(dataset) {
      const template = document.createElement("template");
      template.innerHTML = `
    <modal-group name="video" active>
      <modal-container>
        <modal-item>
          <div class="modal-container-video">
            <div class="modal-video" data-modal-area>
            <video autoplay loop controls src="${dataset.href}" />
              
            </div>
          </div>
        </modal-item>
      </modal-container>
      </modal-group>`;
      const modal = template.content;
      modal.firstElementChild.addEventListener(
        "modal:close",
        function () {
          this.remove();
        },
        { once: true }
      );
      document.body.appendChild(modal);
    }
    const modalLocalName = "modal-group";
    class ModalItem extends HTMLElement {
      constructor() {
        super();
        this.visible = false;
      }
      connectedCallback() {
        this.modal = this.closest(modalLocalName);
      }
      disconnectedCallback() { }
      open() {
        if (this.visible) return;
        this.visible = true;
        this.addActive();
      }
      close(timeout) {
        if (!this.visible) return;
        this.visible = false;
        this.removeActive({
          leave: timeout > 0 ? true : false,
          leaveDelay: timeout,
        });
      }
      static get observedAttributes() {
        return ["name", "hash"];
      }
      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
      }
    }
    class ModalButton extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.modal = this.closest(modalLocalName);
        this.addEventListener("click", this.action);
      }
      disconnectedCallback() {
        this.removeEventListener("click", this.action);
      }
      attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
      }
    }
    class ModalNext extends ModalButton {
      action() {
        this.modal.next();
      }
    }
    class ModalPrevious extends ModalButton {
      action() {
        this.modal.prev();
      }
    }
    class ModalClose extends ModalButton {
      action() {
        this.modal.close();
      }
    }
    class ModalOpen extends ModalButton {
      action() {
        const template = this.template;
        if (template) {
          if (template === "iframe") templateIframe(this.dataset);
          if (template === "image") templateImage(this.dataset);
          if (template === "video") templateVideo(this.dataset);
        } else {
          const selector2 = `${modalLocalName}[name=${this.group}]`;
          const modal = document.querySelector(selector2);
          if (!modal) {
            console.warn("não existe modal: " + selector2);
            return;
          }
          modal.open(this.item);
        }
      }
      static get observedAttributes() {
        return ["group", "item", "template"];
      }
      connectedCallback() {
        this.addEventListener("click", this.action);
      }
    }
    window.customElements.define("modal-group", ModalGroup);
    window.customElements.define("modal-item", ModalItem);
    window.customElements.define("btn-modal-close", ModalClose);
    window.customElements.define("btn-modal-open", ModalOpen);
    window.customElements.define("btn-modal-next", ModalNext);
    window.customElements.define("btn-modal-prev", ModalPrevious);
    function inputMoney(input) {
      input.addEventListener("keydown", (ev) => {
        const v2 = input.value;
        let p2 = input.selectionStart;
        if (ev.key === "Delete") {
          const toDel = input.value.charAt(input.selectionStart);
          if (toDel === "," || toDel === ".") {
            ev.preventDefault();
            input.value = v2.slice(0, p2) + v2.slice(p2 + 2);
            input.setSelectionRange(p2, p2);
            formatInput();
          }
        }
        if (ev.key === "Backspace") {
          const toDel = input.value.charAt(input.selectionStart - 1);
          if (toDel === "," || toDel === ".") {
            ev.preventDefault();
            input.value = v2.slice(0, p2 - 2) + v2.slice(p2);
            input.setSelectionRange(p2 - 2, p2 - 2);
            formatInput();
          }
        }
      });
      input.addEventListener("input", formatInput);
      function formatInput() {
        const negative = input.value.includes("-");
        const n2 = input.value.replace(/[^\d]/g, "").replace(/^0+/g, "");
        const l2 = n2.length;
        let c2 =
          input.selectionStart - input.value.replace(/[^,.]/g, "").length;
        let newValue = "";
        if (l2 > 2) {
          let milhar = n2.substr(0, l2 - 2);
          let decimal = "," + n2.substr(l2 - 2, l2);
          c2++;
          let formatted = "";
          for (let i2 = 0; i2 < milhar.length; i2++) {
            if ((milhar.length - i2) % 3 === 0 && i2 != 0) {
              formatted += ".";
              c2++;
            }
            formatted += milhar[i2];
          }
          newValue = formatted + decimal;
        } else if (l2 == 1) {
          newValue = "0,0" + n2;
          c2 += 3;
        } else if (l2 == 2) {
          newValue = "0," + n2;
          c2 += 2;
        }
        if (negative) newValue = "-" + newValue;
        input.value = newValue;
        if (c2 < 0) c2 = 0;
        input.setSelectionRange(c2, c2);
      }
    }
    //! moment.js
    //! version : 2.30.1
    //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
    //! license : MIT
    //! momentjs.com
    var hookCallback;
    function hooks() {
      return hookCallback.apply(null, arguments);
    }
    function setHookCallback(callback) {
      hookCallback = callback;
    }
    function isArray(input) {
      return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === "[object Array]"
      );
    }
    function isObject(input) {
      return (
        input != null &&
        Object.prototype.toString.call(input) === "[object Object]"
      );
    }
    function hasOwnProp(a2, b2) {
      return Object.prototype.hasOwnProperty.call(a2, b2);
    }
    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      } else {
        var k2;
        for (k2 in obj) {
          if (hasOwnProp(obj, k2)) {
            return false;
          }
        }
        return true;
      }
    }
    function isUndefined(input) {
      return input === void 0;
    }
    function isNumber(input) {
      return (
        typeof input === "number" ||
        Object.prototype.toString.call(input) === "[object Number]"
      );
    }
    function isDate(input) {
      return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === "[object Date]"
      );
    }
    function map(arr, fn) {
      var res = [],
        i2,
        arrLen = arr.length;
      for (i2 = 0; i2 < arrLen; ++i2) {
        res.push(fn(arr[i2], i2));
      }
      return res;
    }
    function extend(a2, b2) {
      for (var i2 in b2) {
        if (hasOwnProp(b2, i2)) {
          a2[i2] = b2[i2];
        }
      }
      if (hasOwnProp(b2, "toString")) {
        a2.toString = b2.toString;
      }
      if (hasOwnProp(b2, "valueOf")) {
        a2.valueOf = b2.valueOf;
      }
      return a2;
    }
    function createUTC(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, true).utc();
    }
    function defaultParsingFlags() {
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
      };
    }
    function getParsingFlags(m2) {
      if (m2._pf == null) {
        m2._pf = defaultParsingFlags();
      }
      return m2._pf;
    }
    var some;
    if (Array.prototype.some) {
      some = Array.prototype.some;
    } else {
      some = function (fun) {
        var t2 = Object(this),
          len = t2.length >>> 0,
          i2;
        for (i2 = 0; i2 < len; i2++) {
          if (i2 in t2 && fun.call(this, t2[i2], i2, t2)) {
            return true;
          }
        }
        return false;
      };
    }
    function isValid(m2) {
      var flags = null,
        parsedParts = false,
        isNowValid = m2._d && !isNaN(m2._d.getTime());
      if (isNowValid) {
        flags = getParsingFlags(m2);
        parsedParts = some.call(flags.parsedDateParts, function (i2) {
          return i2 != null;
        });
        isNowValid =
          flags.overflow < 0 &&
          !flags.empty &&
          !flags.invalidEra &&
          !flags.invalidMonth &&
          !flags.invalidWeekday &&
          !flags.weekdayMismatch &&
          !flags.nullInput &&
          !flags.invalidFormat &&
          !flags.userInvalidated &&
          (!flags.meridiem || (flags.meridiem && parsedParts));
        if (m2._strict) {
          isNowValid =
            isNowValid &&
            flags.charsLeftOver === 0 &&
            flags.unusedTokens.length === 0 &&
            flags.bigHour === void 0;
        }
      }
      if (Object.isFrozen == null || !Object.isFrozen(m2)) {
        m2._isValid = isNowValid;
      } else {
        return isNowValid;
      }
      return m2._isValid;
    }
    function createInvalid(flags) {
      var m2 = createUTC(NaN);
      if (flags != null) {
        extend(getParsingFlags(m2), flags);
      } else {
        getParsingFlags(m2).userInvalidated = true;
      }
      return m2;
    }
    var momentProperties = (hooks.momentProperties = []),
      updateInProgress = false;
    function copyConfig(to2, from2) {
      var i2,
        prop,
        val,
        momentPropertiesLen = momentProperties.length;
      if (!isUndefined(from2._isAMomentObject)) {
        to2._isAMomentObject = from2._isAMomentObject;
      }
      if (!isUndefined(from2._i)) {
        to2._i = from2._i;
      }
      if (!isUndefined(from2._f)) {
        to2._f = from2._f;
      }
      if (!isUndefined(from2._l)) {
        to2._l = from2._l;
      }
      if (!isUndefined(from2._strict)) {
        to2._strict = from2._strict;
      }
      if (!isUndefined(from2._tzm)) {
        to2._tzm = from2._tzm;
      }
      if (!isUndefined(from2._isUTC)) {
        to2._isUTC = from2._isUTC;
      }
      if (!isUndefined(from2._offset)) {
        to2._offset = from2._offset;
      }
      if (!isUndefined(from2._pf)) {
        to2._pf = getParsingFlags(from2);
      }
      if (!isUndefined(from2._locale)) {
        to2._locale = from2._locale;
      }
      if (momentPropertiesLen > 0) {
        for (i2 = 0; i2 < momentPropertiesLen; i2++) {
          prop = momentProperties[i2];
          val = from2[prop];
          if (!isUndefined(val)) {
            to2[prop] = val;
          }
        }
      }
      return to2;
    }
    function Moment(config) {
      copyConfig(this, config);
      this._d = new Date(config._d != null ? config._d.getTime() : NaN);
      if (!this.isValid()) {
        this._d = /* @__PURE__ */ new Date(NaN);
      }
      if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
      }
    }
    function isMoment(obj) {
      return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
      );
    }
    function warn(msg) {
      if (
        hooks.suppressDeprecationWarnings === false &&
        typeof console !== "undefined" &&
        console.warn
      ) {
        console.warn("Deprecation warning: " + msg);
      }
    }
    function deprecate(msg, fn) {
      var firstTime = true;
      return extend(function () {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
          var args = [],
            arg,
            i2,
            key,
            argLen = arguments.length;
          for (i2 = 0; i2 < argLen; i2++) {
            arg = "";
            if (typeof arguments[i2] === "object") {
              arg += "\n[" + i2 + "] ";
              for (key in arguments[0]) {
                if (hasOwnProp(arguments[0], key)) {
                  arg += key + ": " + arguments[0][key] + ", ";
                }
              }
              arg = arg.slice(0, -2);
            } else {
              arg = arguments[i2];
            }
            args.push(arg);
          }
          warn(
            msg +
            "\nArguments: " +
            Array.prototype.slice.call(args).join("") +
            "\n" +
            new Error().stack
          );
          firstTime = false;
        }
        return fn.apply(this, arguments);
      }, fn);
    }
    var deprecations = {};
    function deprecateSimple(name, msg) {
      if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
      }
      if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
      }
    }
    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;
    function isFunction(input) {
      return (
        (typeof Function !== "undefined" && input instanceof Function) ||
        Object.prototype.toString.call(input) === "[object Function]"
      );
    }
    function set(config) {
      var prop, i2;
      for (i2 in config) {
        if (hasOwnProp(config, i2)) {
          prop = config[i2];
          if (isFunction(prop)) {
            this[i2] = prop;
          } else {
            this["_" + i2] = prop;
          }
        }
      }
      this._config = config;
      this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
        "|" +
        /\d{1,2}/.source
      );
    }
    function mergeConfigs(parentConfig, childConfig) {
      var res = extend({}, parentConfig),
        prop;
      for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
            res[prop] = {};
            extend(res[prop], parentConfig[prop]);
            extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
            res[prop] = childConfig[prop];
          } else {
            delete res[prop];
          }
        }
      }
      for (prop in parentConfig) {
        if (
          hasOwnProp(parentConfig, prop) &&
          !hasOwnProp(childConfig, prop) &&
          isObject(parentConfig[prop])
        ) {
          res[prop] = extend({}, res[prop]);
        }
      }
      return res;
    }
    function Locale(config) {
      if (config != null) {
        this.set(config);
      }
    }
    var keys;
    if (Object.keys) {
      keys = Object.keys;
    } else {
      keys = function (obj) {
        var i2,
          res = [];
        for (i2 in obj) {
          if (hasOwnProp(obj, i2)) {
            res.push(i2);
          }
        }
        return res;
      };
    }
    var defaultCalendar = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    };
    function calendar(key, mom, now2) {
      var output = this._calendar[key] || this._calendar["sameElse"];
      return isFunction(output) ? output.call(mom, now2) : output;
    }
    function zeroFill(number, targetLength, forceSign) {
      var absNumber = "" + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign2 = number >= 0;
      return (
        (sign2 ? (forceSign ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
      );
    }
    var formattingTokens =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      formatFunctions = {},
      formatTokenFunctions = {};
    function addFormatToken(token2, padded, ordinal2, callback) {
      var func = callback;
      if (typeof callback === "string") {
        func = function () {
          return this[callback]();
        };
      }
      if (token2) {
        formatTokenFunctions[token2] = func;
      }
      if (padded) {
        formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
      }
      if (ordinal2) {
        formatTokenFunctions[ordinal2] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token2);
        };
      }
    }
    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, "");
      }
      return input.replace(/\\/g, "");
    }
    function makeFormatFunction(format2) {
      var array = format2.match(formattingTokens),
        i2,
        length;
      for (i2 = 0, length = array.length; i2 < length; i2++) {
        if (formatTokenFunctions[array[i2]]) {
          array[i2] = formatTokenFunctions[array[i2]];
        } else {
          array[i2] = removeFormattingTokens(array[i2]);
        }
      }
      return function (mom) {
        var output = "",
          i3;
        for (i3 = 0; i3 < length; i3++) {
          output += isFunction(array[i3])
            ? array[i3].call(mom, format2)
            : array[i3];
        }
        return output;
      };
    }
    function formatMoment(m2, format2) {
      if (!m2.isValid()) {
        return m2.localeData().invalidDate();
      }
      format2 = expandFormat(format2, m2.localeData());
      formatFunctions[format2] =
        formatFunctions[format2] || makeFormatFunction(format2);
      return formatFunctions[format2](m2);
    }
    function expandFormat(format2, locale2) {
      var i2 = 5;
      function replaceLongDateFormatTokens(input) {
        return locale2.longDateFormat(input) || input;
      }
      localFormattingTokens.lastIndex = 0;
      while (i2 >= 0 && localFormattingTokens.test(format2)) {
        format2 = format2.replace(
          localFormattingTokens,
          replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i2 -= 1;
      }
      return format2;
    }
    var defaultLongDateFormat = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    };
    function longDateFormat(key) {
      var format2 = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];
      if (format2 || !formatUpper) {
        return format2;
      }
      this._longDateFormat[key] = formatUpper
        .match(formattingTokens)
        .map(function (tok) {
          if (
            tok === "MMMM" ||
            tok === "MM" ||
            tok === "DD" ||
            tok === "dddd"
          ) {
            return tok.slice(1);
          }
          return tok;
        })
        .join("");
      return this._longDateFormat[key];
    }
    var defaultInvalidDate = "Invalid date";
    function invalidDate() {
      return this._invalidDate;
    }
    var defaultOrdinal = "%d",
      defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    function ordinal(number) {
      return this._ordinal.replace("%d", number);
    }
    var defaultRelativeTime = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    };
    function relativeTime(number, withoutSuffix, string, isFuture) {
      var output = this._relativeTime[string];
      return isFunction(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
    }
    function pastFuture(diff2, output) {
      var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
      return isFunction(format2)
        ? format2(output)
        : format2.replace(/%s/i, output);
    }
    var aliases = {
      D: "date",
      dates: "date",
      date: "date",
      d: "day",
      days: "day",
      day: "day",
      e: "weekday",
      weekdays: "weekday",
      weekday: "weekday",
      E: "isoWeekday",
      isoweekdays: "isoWeekday",
      isoweekday: "isoWeekday",
      DDD: "dayOfYear",
      dayofyears: "dayOfYear",
      dayofyear: "dayOfYear",
      h: "hour",
      hours: "hour",
      hour: "hour",
      ms: "millisecond",
      milliseconds: "millisecond",
      millisecond: "millisecond",
      m: "minute",
      minutes: "minute",
      minute: "minute",
      M: "month",
      months: "month",
      month: "month",
      Q: "quarter",
      quarters: "quarter",
      quarter: "quarter",
      s: "second",
      seconds: "second",
      second: "second",
      gg: "weekYear",
      weekyears: "weekYear",
      weekyear: "weekYear",
      GG: "isoWeekYear",
      isoweekyears: "isoWeekYear",
      isoweekyear: "isoWeekYear",
      w: "week",
      weeks: "week",
      week: "week",
      W: "isoWeek",
      isoweeks: "isoWeek",
      isoweek: "isoWeek",
      y: "year",
      years: "year",
      year: "year",
    };
    function normalizeUnits(units) {
      return typeof units === "string"
        ? aliases[units] || aliases[units.toLowerCase()]
        : void 0;
    }
    function normalizeObjectUnits(inputObject) {
      var normalizedInput = {},
        normalizedProp,
        prop;
      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }
      return normalizedInput;
    }
    var priorities = {
      date: 9,
      day: 11,
      weekday: 11,
      isoWeekday: 11,
      dayOfYear: 4,
      hour: 13,
      millisecond: 16,
      minute: 14,
      month: 8,
      quarter: 7,
      second: 15,
      weekYear: 1,
      isoWeekYear: 1,
      week: 5,
      isoWeek: 5,
      year: 1,
    };
    function getPrioritizedUnits(unitsObj) {
      var units = [],
        u2;
      for (u2 in unitsObj) {
        if (hasOwnProp(unitsObj, u2)) {
          units.push({ unit: u2, priority: priorities[u2] });
        }
      }
      units.sort(function (a2, b2) {
        return a2.priority - b2.priority;
      });
      return units;
    }
    var match1 = /\d/,
      match2 = /\d\d/,
      match3 = /\d{3}/,
      match4 = /\d{4}/,
      match6 = /[+-]?\d{6}/,
      match1to2 = /\d\d?/,
      match3to4 = /\d\d\d\d?/,
      match5to6 = /\d\d\d\d\d\d?/,
      match1to3 = /\d{1,3}/,
      match1to4 = /\d{1,4}/,
      match1to6 = /[+-]?\d{1,6}/,
      matchUnsigned = /\d+/,
      matchSigned = /[+-]?\d+/,
      matchOffset = /Z|[+-]\d\d:?\d\d/gi,
      matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi,
      matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
      matchWord =
        /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      match1to2NoLeadingZero = /^[1-9]\d?/,
      match1to2HasZero = /^([1-9]\d|\d)/,
      regexes;
    regexes = {};
    function addRegexToken(token2, regex, strictRegex) {
      regexes[token2] = isFunction(regex)
        ? regex
        : function (isStrict, localeData2) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
    }
    function getParseRegexForToken(token2, config) {
      if (!hasOwnProp(regexes, token2)) {
        return new RegExp(unescapeFormat(token2));
      }
      return regexes[token2](config._strict, config._locale);
    }
    function unescapeFormat(s2) {
      return regexEscape(
        s2
          .replace("\\", "")
          .replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function (matched, p1, p2, p3, p4) {
              return p1 || p2 || p3 || p4;
            }
          )
      );
    }
    function regexEscape(s2) {
      return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function absFloor(number) {
      if (number < 0) {
        return Math.ceil(number) || 0;
      } else {
        return Math.floor(number);
      }
    }
    function toInt(argumentForCoercion) {
      var coercedNumber = +argumentForCoercion,
        value = 0;
      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }
      return value;
    }
    var tokens = {};
    function addParseToken(token2, callback) {
      var i2,
        func = callback,
        tokenLen;
      if (typeof token2 === "string") {
        token2 = [token2];
      }
      if (isNumber(callback)) {
        func = function (input, array) {
          array[callback] = toInt(input);
        };
      }
      tokenLen = token2.length;
      for (i2 = 0; i2 < tokenLen; i2++) {
        tokens[token2[i2]] = func;
      }
    }
    function addWeekParseToken(token2, callback) {
      addParseToken(token2, function (input, array, config, token3) {
        config._w = config._w || {};
        callback(input, config._w, config, token3);
      });
    }
    function addTimeToArrayFromToken(token2, input, config) {
      if (input != null && hasOwnProp(tokens, token2)) {
        tokens[token2](input, config._a, config, token2);
      }
    }
    function isLeapYear(year) {
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
    var YEAR = 0,
      MONTH = 1,
      DATE = 2,
      HOUR = 3,
      MINUTE = 4,
      SECOND = 5,
      MILLISECOND = 6,
      WEEK = 7,
      WEEKDAY = 8;
    addFormatToken("Y", 0, 0, function () {
      var y2 = this.year();
      return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
    });
    addFormatToken(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    });
    addFormatToken(0, ["YYYY", 4], 0, "year");
    addFormatToken(0, ["YYYYY", 5], 0, "year");
    addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
    addRegexToken("Y", matchSigned);
    addRegexToken("YY", match1to2, match2);
    addRegexToken("YYYY", match1to4, match4);
    addRegexToken("YYYYY", match1to6, match6);
    addRegexToken("YYYYYY", match1to6, match6);
    addParseToken(["YYYYY", "YYYYYY"], YEAR);
    addParseToken("YYYY", function (input, array) {
      array[YEAR] =
        input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken("YY", function (input, array) {
      array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken("Y", function (input, array) {
      array[YEAR] = parseInt(input, 10);
    });
    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    hooks.parseTwoDigitYear = function (input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
    };
    var getSetYear = makeGetSet("FullYear", true);
    function getIsLeapYear() {
      return isLeapYear(this.year());
    }
    function makeGetSet(unit, keepTime) {
      return function (value) {
        if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
        } else {
          return get(this, unit);
        }
      };
    }
    function get(mom, unit) {
      if (!mom.isValid()) {
        return NaN;
      }
      var d2 = mom._d,
        isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return isUTC ? d2.getUTCMilliseconds() : d2.getMilliseconds();
        case "Seconds":
          return isUTC ? d2.getUTCSeconds() : d2.getSeconds();
        case "Minutes":
          return isUTC ? d2.getUTCMinutes() : d2.getMinutes();
        case "Hours":
          return isUTC ? d2.getUTCHours() : d2.getHours();
        case "Date":
          return isUTC ? d2.getUTCDate() : d2.getDate();
        case "Day":
          return isUTC ? d2.getUTCDay() : d2.getDay();
        case "Month":
          return isUTC ? d2.getUTCMonth() : d2.getMonth();
        case "FullYear":
          return isUTC ? d2.getUTCFullYear() : d2.getFullYear();
        default:
          return NaN;
      }
    }
    function set$1(mom, unit, value) {
      var d2, isUTC, year, month, date;
      if (!mom.isValid() || isNaN(value)) {
        return;
      }
      d2 = mom._d;
      isUTC = mom._isUTC;
      switch (unit) {
        case "Milliseconds":
          return void (isUTC
            ? d2.setUTCMilliseconds(value)
            : d2.setMilliseconds(value));
        case "Seconds":
          return void (isUTC ? d2.setUTCSeconds(value) : d2.setSeconds(value));
        case "Minutes":
          return void (isUTC ? d2.setUTCMinutes(value) : d2.setMinutes(value));
        case "Hours":
          return void (isUTC ? d2.setUTCHours(value) : d2.setHours(value));
        case "Date":
          return void (isUTC ? d2.setUTCDate(value) : d2.setDate(value));
        case "FullYear":
          break;
        default:
          return;
      }
      year = value;
      month = mom.month();
      date = mom.date();
      date = date === 29 && month === 1 && !isLeapYear(year) ? 28 : date;
      void (isUTC
        ? d2.setUTCFullYear(year, month, date)
        : d2.setFullYear(year, month, date));
    }
    function stringGet(units) {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units]();
      }
      return this;
    }
    function stringSet(units, value) {
      if (typeof units === "object") {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units),
          i2,
          prioritizedLen = prioritized.length;
        for (i2 = 0; i2 < prioritizedLen; i2++) {
          this[prioritized[i2].unit](units[prioritized[i2].unit]);
        }
      } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units](value);
        }
      }
      return this;
    }
    function mod(n2, x2) {
      return ((n2 % x2) + x2) % x2;
    }
    var indexOf;
    if (Array.prototype.indexOf) {
      indexOf = Array.prototype.indexOf;
    } else {
      indexOf = function (o2) {
        var i2;
        for (i2 = 0; i2 < this.length; ++i2) {
          if (this[i2] === o2) {
            return i2;
          }
        }
        return -1;
      };
    }
    function daysInMonth(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      var modMonth = mod(month, 12);
      year += (month - modMonth) / 12;
      return modMonth === 1
        ? isLeapYear(year)
          ? 29
          : 28
        : 31 - ((modMonth % 7) % 2);
    }
    addFormatToken("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    });
    addFormatToken("MMM", 0, 0, function (format2) {
      return this.localeData().monthsShort(this, format2);
    });
    addFormatToken("MMMM", 0, 0, function (format2) {
      return this.localeData().months(this, format2);
    });
    addRegexToken("M", match1to2, match1to2NoLeadingZero);
    addRegexToken("MM", match1to2, match2);
    addRegexToken("MMM", function (isStrict, locale2) {
      return locale2.monthsShortRegex(isStrict);
    });
    addRegexToken("MMMM", function (isStrict, locale2) {
      return locale2.monthsRegex(isStrict);
    });
    addParseToken(["M", "MM"], function (input, array) {
      array[MONTH] = toInt(input) - 1;
    });
    addParseToken(["MMM", "MMMM"], function (input, array, config, token2) {
      var month = config._locale.monthsParse(input, token2, config._strict);
      if (month != null) {
        array[MONTH] = month;
      } else {
        getParsingFlags(config).invalidMonth = input;
      }
    });
    var defaultLocaleMonths =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
      defaultLocaleMonthsShort =
        "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      defaultMonthsShortRegex = matchWord,
      defaultMonthsRegex = matchWord;
    function localeMonths(m2, format2) {
      if (!m2) {
        return isArray(this._months)
          ? this._months
          : this._months["standalone"];
      }
      return isArray(this._months)
        ? this._months[m2.month()]
        : this._months[
        (this._months.isFormat || MONTHS_IN_FORMAT).test(format2)
          ? "format"
          : "standalone"
        ][m2.month()];
    }
    function localeMonthsShort(m2, format2) {
      if (!m2) {
        return isArray(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort["standalone"];
      }
      return isArray(this._monthsShort)
        ? this._monthsShort[m2.month()]
        : this._monthsShort[
        MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"
        ][m2.month()];
    }
    function handleStrictParse(monthName, format2, strict) {
      var i2,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i2 = 0; i2 < 12; ++i2) {
          mom = createUTC([2e3, i2]);
          this._shortMonthsParse[i2] = this.monthsShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._longMonthsParse[i2] = this.months(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "MMM") {
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format2 === "MMM") {
          ii = indexOf.call(this._shortMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._longMonthsParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }
    function localeMonthsParse(monthName, format2, strict) {
      var i2, mom, regex;
      if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format2, strict);
      }
      if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
      }
      for (i2 = 0; i2 < 12; i2++) {
        mom = createUTC([2e3, i2]);
        if (strict && !this._longMonthsParse[i2]) {
          this._longMonthsParse[i2] = new RegExp(
            "^" + this.months(mom, "").replace(".", "") + "$",
            "i"
          );
          this._shortMonthsParse[i2] = new RegExp(
            "^" + this.monthsShort(mom, "").replace(".", "") + "$",
            "i"
          );
        }
        if (!strict && !this._monthsParse[i2]) {
          regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
          this._monthsParse[i2] = new RegExp(regex.replace(".", ""), "i");
        }
        if (
          strict &&
          format2 === "MMMM" &&
          this._longMonthsParse[i2].test(monthName)
        ) {
          return i2;
        } else if (
          strict &&
          format2 === "MMM" &&
          this._shortMonthsParse[i2].test(monthName)
        ) {
          return i2;
        } else if (!strict && this._monthsParse[i2].test(monthName)) {
          return i2;
        }
      }
    }
    function setMonth(mom, value) {
      if (!mom.isValid()) {
        return mom;
      }
      if (typeof value === "string") {
        if (/^\d+$/.test(value)) {
          value = toInt(value);
        } else {
          value = mom.localeData().monthsParse(value);
          if (!isNumber(value)) {
            return mom;
          }
        }
      }
      var month = value,
        date = mom.date();
      date = date < 29 ? date : Math.min(date, daysInMonth(mom.year(), month));
      void (mom._isUTC
        ? mom._d.setUTCMonth(month, date)
        : mom._d.setMonth(month, date));
      return mom;
    }
    function getSetMonth(value) {
      if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
      } else {
        return get(this, "Month");
      }
    }
    function getDaysInMonth() {
      return daysInMonth(this.year(), this.month());
    }
    function monthsShortRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsShortStrictRegex;
        } else {
          return this._monthsShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsShortRegex")) {
          this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex;
      }
    }
    function monthsRegex(isStrict) {
      if (this._monthsParseExact) {
        if (!hasOwnProp(this, "_monthsRegex")) {
          computeMonthsParse.call(this);
        }
        if (isStrict) {
          return this._monthsStrictRegex;
        } else {
          return this._monthsRegex;
        }
      } else {
        if (!hasOwnProp(this, "_monthsRegex")) {
          this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
          ? this._monthsStrictRegex
          : this._monthsRegex;
      }
    }
    function computeMonthsParse() {
      function cmpLenRev(a2, b2) {
        return b2.length - a2.length;
      }
      var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i2,
        mom,
        shortP,
        longP;
      for (i2 = 0; i2 < 12; i2++) {
        mom = createUTC([2e3, i2]);
        shortP = regexEscape(this.monthsShort(mom, ""));
        longP = regexEscape(this.months(mom, ""));
        shortPieces.push(shortP);
        longPieces.push(longP);
        mixedPieces.push(longP);
        mixedPieces.push(shortP);
      }
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._monthsShortRegex = this._monthsRegex;
      this._monthsStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._monthsShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
    }
    function createDate(y2, m2, d2, h2, M2, s2, ms) {
      var date;
      if (y2 < 100 && y2 >= 0) {
        date = new Date(y2 + 400, m2, d2, h2, M2, s2, ms);
        if (isFinite(date.getFullYear())) {
          date.setFullYear(y2);
        }
      } else {
        date = new Date(y2, m2, d2, h2, M2, s2, ms);
      }
      return date;
    }
    function createUTCDate(y2) {
      var date, args;
      if (y2 < 100 && y2 >= 0) {
        args = Array.prototype.slice.call(arguments);
        args[0] = y2 + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
          date.setUTCFullYear(y2);
        }
      } else {
        date = new Date(Date.UTC.apply(null, arguments));
      }
      return date;
    }
    function firstWeekOffset(year, dow, doy) {
      var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
    }
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;
      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }
      return {
        year: resYear,
        dayOfYear: resDayOfYear,
      };
    }
    function weekOfYear(mom, dow, doy) {
      var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;
      if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
      } else {
        resYear = mom.year();
        resWeek = week;
      }
      return {
        week: resWeek,
        year: resYear,
      };
    }
    function weeksInYear(year, dow, doy) {
      var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    addFormatToken("w", ["ww", 2], "wo", "week");
    addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
    addRegexToken("w", match1to2, match1to2NoLeadingZero);
    addRegexToken("ww", match1to2, match2);
    addRegexToken("W", match1to2, match1to2NoLeadingZero);
    addRegexToken("WW", match1to2, match2);
    addWeekParseToken(
      ["w", "ww", "W", "WW"],
      function (input, week, config, token2) {
        week[token2.substr(0, 1)] = toInt(input);
      }
    );
    function localeWeek(mom) {
      return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }
    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6,
      // The week that contains Jan 6th is the first week of the year.
    };
    function localeFirstDayOfWeek() {
      return this._week.dow;
    }
    function localeFirstDayOfYear() {
      return this._week.doy;
    }
    function getSetWeek(input) {
      var week = this.localeData().week(this);
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    function getSetISOWeek(input) {
      var week = weekOfYear(this, 1, 4).week;
      return input == null ? week : this.add((input - week) * 7, "d");
    }
    addFormatToken("d", 0, "do", "day");
    addFormatToken("dd", 0, 0, function (format2) {
      return this.localeData().weekdaysMin(this, format2);
    });
    addFormatToken("ddd", 0, 0, function (format2) {
      return this.localeData().weekdaysShort(this, format2);
    });
    addFormatToken("dddd", 0, 0, function (format2) {
      return this.localeData().weekdays(this, format2);
    });
    addFormatToken("e", 0, 0, "weekday");
    addFormatToken("E", 0, 0, "isoWeekday");
    addRegexToken("d", match1to2);
    addRegexToken("e", match1to2);
    addRegexToken("E", match1to2);
    addRegexToken("dd", function (isStrict, locale2) {
      return locale2.weekdaysMinRegex(isStrict);
    });
    addRegexToken("ddd", function (isStrict, locale2) {
      return locale2.weekdaysShortRegex(isStrict);
    });
    addRegexToken("dddd", function (isStrict, locale2) {
      return locale2.weekdaysRegex(isStrict);
    });
    addWeekParseToken(
      ["dd", "ddd", "dddd"],
      function (input, week, config, token2) {
        var weekday = config._locale.weekdaysParse(
          input,
          token2,
          config._strict
        );
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      }
    );
    addWeekParseToken(["d", "e", "E"], function (input, week, config, token2) {
      week[token2] = toInt(input);
    });
    function parseWeekday(input, locale2) {
      if (typeof input !== "string") {
        return input;
      }
      if (!isNaN(input)) {
        return parseInt(input, 10);
      }
      input = locale2.weekdaysParse(input);
      if (typeof input === "number") {
        return input;
      }
      return null;
    }
    function parseIsoWeekday(input, locale2) {
      if (typeof input === "string") {
        return locale2.weekdaysParse(input) % 7 || 7;
      }
      return isNaN(input) ? null : input;
    }
    function shiftWeekdays(ws, n2) {
      return ws.slice(n2, 7).concat(ws.slice(0, n2));
    }
    var defaultLocaleWeekdays =
      "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      defaultWeekdaysRegex = matchWord,
      defaultWeekdaysShortRegex = matchWord,
      defaultWeekdaysMinRegex = matchWord;
    function localeWeekdays(m2, format2) {
      var weekdays = isArray(this._weekdays)
        ? this._weekdays
        : this._weekdays[
        m2 && m2 !== true && this._weekdays.isFormat.test(format2)
          ? "format"
          : "standalone"
        ];
      return m2 === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m2
          ? weekdays[m2.day()]
          : weekdays;
    }
    function localeWeekdaysShort(m2) {
      return m2 === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m2
          ? this._weekdaysShort[m2.day()]
          : this._weekdaysShort;
    }
    function localeWeekdaysMin(m2) {
      return m2 === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m2
          ? this._weekdaysMin[m2.day()]
          : this._weekdaysMin;
    }
    function handleStrictParse$1(weekdayName, format2, strict) {
      var i2,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];
        for (i2 = 0; i2 < 7; ++i2) {
          mom = createUTC([2e3, 1]).day(i2);
          this._minWeekdaysParse[i2] = this.weekdaysMin(
            mom,
            ""
          ).toLocaleLowerCase();
          this._shortWeekdaysParse[i2] = this.weekdaysShort(
            mom,
            ""
          ).toLocaleLowerCase();
          this._weekdaysParse[i2] = this.weekdays(mom, "").toLocaleLowerCase();
        }
      }
      if (strict) {
        if (format2 === "dddd") {
          ii = indexOf.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format2 === "ddd") {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      } else {
        if (format2 === "dddd") {
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else if (format2 === "ddd") {
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        } else {
          ii = indexOf.call(this._minWeekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._weekdaysParse, llc);
          if (ii !== -1) {
            return ii;
          }
          ii = indexOf.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
        }
      }
    }
    function localeWeekdaysParse(weekdayName, format2, strict) {
      var i2, mom, regex;
      if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format2, strict);
      }
      if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
      }
      for (i2 = 0; i2 < 7; i2++) {
        mom = createUTC([2e3, 1]).day(i2);
        if (strict && !this._fullWeekdaysParse[i2]) {
          this._fullWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdays(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._shortWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
          this._minWeekdaysParse[i2] = new RegExp(
            "^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$",
            "i"
          );
        }
        if (!this._weekdaysParse[i2]) {
          regex =
            "^" +
            this.weekdays(mom, "") +
            "|^" +
            this.weekdaysShort(mom, "") +
            "|^" +
            this.weekdaysMin(mom, "");
          this._weekdaysParse[i2] = new RegExp(regex.replace(".", ""), "i");
        }
        if (
          strict &&
          format2 === "dddd" &&
          this._fullWeekdaysParse[i2].test(weekdayName)
        ) {
          return i2;
        } else if (
          strict &&
          format2 === "ddd" &&
          this._shortWeekdaysParse[i2].test(weekdayName)
        ) {
          return i2;
        } else if (
          strict &&
          format2 === "dd" &&
          this._minWeekdaysParse[i2].test(weekdayName)
        ) {
          return i2;
        } else if (!strict && this._weekdaysParse[i2].test(weekdayName)) {
          return i2;
        }
      }
    }
    function getSetDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var day = get(this, "Day");
      if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, "d");
      } else {
        return day;
      }
    }
    function getSetLocaleDayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return input == null ? weekday : this.add(input - weekday, "d");
    }
    function getSetISODayOfWeek(input) {
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
      } else {
        return this.day() || 7;
      }
    }
    function weekdaysRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysStrictRegex;
        } else {
          return this._weekdaysRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex;
      }
    }
    function weekdaysShortRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysShortStrictRegex;
        } else {
          return this._weekdaysShortRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysShortRegex")) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex;
      }
    }
    function weekdaysMinRegex(isStrict) {
      if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, "_weekdaysRegex")) {
          computeWeekdaysParse.call(this);
        }
        if (isStrict) {
          return this._weekdaysMinStrictRegex;
        } else {
          return this._weekdaysMinRegex;
        }
      } else {
        if (!hasOwnProp(this, "_weekdaysMinRegex")) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex;
      }
    }
    function computeWeekdaysParse() {
      function cmpLenRev(a2, b2) {
        return b2.length - a2.length;
      }
      var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i2,
        mom,
        minp,
        shortp,
        longp;
      for (i2 = 0; i2 < 7; i2++) {
        mom = createUTC([2e3, 1]).day(i2);
        minp = regexEscape(this.weekdaysMin(mom, ""));
        shortp = regexEscape(this.weekdaysShort(mom, ""));
        longp = regexEscape(this.weekdays(mom, ""));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
      }
      minPieces.sort(cmpLenRev);
      shortPieces.sort(cmpLenRev);
      longPieces.sort(cmpLenRev);
      mixedPieces.sort(cmpLenRev);
      this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._weekdaysShortRegex = this._weekdaysRegex;
      this._weekdaysMinRegex = this._weekdaysRegex;
      this._weekdaysStrictRegex = new RegExp(
        "^(" + longPieces.join("|") + ")",
        "i"
      );
      this._weekdaysShortStrictRegex = new RegExp(
        "^(" + shortPieces.join("|") + ")",
        "i"
      );
      this._weekdaysMinStrictRegex = new RegExp(
        "^(" + minPieces.join("|") + ")",
        "i"
      );
    }
    function hFormat() {
      return this.hours() % 12 || 12;
    }
    function kFormat() {
      return this.hours() || 24;
    }
    addFormatToken("H", ["HH", 2], 0, "hour");
    addFormatToken("h", ["hh", 2], 0, hFormat);
    addFormatToken("k", ["kk", 2], 0, kFormat);
    addFormatToken("hmm", 0, 0, function () {
      return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });
    addFormatToken("hmmss", 0, 0, function () {
      return (
        "" +
        hFormat.apply(this) +
        zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2)
      );
    });
    addFormatToken("Hmm", 0, 0, function () {
      return "" + this.hours() + zeroFill(this.minutes(), 2);
    });
    addFormatToken("Hmmss", 0, 0, function () {
      return (
        "" +
        this.hours() +
        zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2)
      );
    });
    function meridiem(token2, lowercase) {
      addFormatToken(token2, 0, 0, function () {
        return this.localeData().meridiem(
          this.hours(),
          this.minutes(),
          lowercase
        );
      });
    }
    meridiem("a", true);
    meridiem("A", false);
    function matchMeridiem(isStrict, locale2) {
      return locale2._meridiemParse;
    }
    addRegexToken("a", matchMeridiem);
    addRegexToken("A", matchMeridiem);
    addRegexToken("H", match1to2, match1to2HasZero);
    addRegexToken("h", match1to2, match1to2NoLeadingZero);
    addRegexToken("k", match1to2, match1to2NoLeadingZero);
    addRegexToken("HH", match1to2, match2);
    addRegexToken("hh", match1to2, match2);
    addRegexToken("kk", match1to2, match2);
    addRegexToken("hmm", match3to4);
    addRegexToken("hmmss", match5to6);
    addRegexToken("Hmm", match3to4);
    addRegexToken("Hmmss", match5to6);
    addParseToken(["H", "HH"], HOUR);
    addParseToken(["k", "kk"], function (input, array, config) {
      var kInput = toInt(input);
      array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(["a", "A"], function (input, array, config) {
      config._isPm = config._locale.isPM(input);
      config._meridiem = input;
    });
    addParseToken(["h", "hh"], function (input, array, config) {
      array[HOUR] = toInt(input);
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmm", function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("hmmss", function (input, array, config) {
      var pos1 = input.length - 4,
        pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
      getParsingFlags(config).bigHour = true;
    });
    addParseToken("Hmm", function (input, array, config) {
      var pos = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos));
      array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken("Hmmss", function (input, array, config) {
      var pos1 = input.length - 4,
        pos2 = input.length - 2;
      array[HOUR] = toInt(input.substr(0, pos1));
      array[MINUTE] = toInt(input.substr(pos1, 2));
      array[SECOND] = toInt(input.substr(pos2));
    });
    function localeIsPM(input) {
      return (input + "").toLowerCase().charAt(0) === "p";
    }
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
      getSetHour = makeGetSet("Hours", true);
    function localeMeridiem(hours2, minutes2, isLower) {
      if (hours2 > 11) {
        return isLower ? "pm" : "PM";
      } else {
        return isLower ? "am" : "AM";
      }
    }
    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse,
    };
    var locales = {},
      localeFamilies = {},
      globalLocale;
    function commonPrefix(arr1, arr2) {
      var i2,
        minl = Math.min(arr1.length, arr2.length);
      for (i2 = 0; i2 < minl; i2 += 1) {
        if (arr1[i2] !== arr2[i2]) {
          return i2;
        }
      }
      return minl;
    }
    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace("_", "-") : key;
    }
    function chooseLocale(names) {
      var i2 = 0,
        j2,
        next,
        locale2,
        split;
      while (i2 < names.length) {
        split = normalizeLocale(names[i2]).split("-");
        j2 = split.length;
        next = normalizeLocale(names[i2 + 1]);
        next = next ? next.split("-") : null;
        while (j2 > 0) {
          locale2 = loadLocale(split.slice(0, j2).join("-"));
          if (locale2) {
            return locale2;
          }
          if (
            next &&
            next.length >= j2 &&
            commonPrefix(split, next) >= j2 - 1
          ) {
            break;
          }
          j2--;
        }
        i2++;
      }
      return globalLocale;
    }
    function isLocaleNameSane(name) {
      return !!(name && name.match("^[^/\\\\]*$"));
    }
    function loadLocale(name) {
      var oldLocale = null,
        aliasedRequire;
      if (
        locales[name] === void 0 &&
        typeof module !== "undefined" &&
        module &&
        module.exports &&
        isLocaleNameSane(name)
      ) {
        try {
          oldLocale = globalLocale._abbr;
          aliasedRequire = require;
          aliasedRequire("./locale/" + name);
          getSetGlobalLocale(oldLocale);
        } catch (e2) {
          locales[name] = null;
        }
      }
      return locales[name];
    }
    function getSetGlobalLocale(key, values) {
      var data;
      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else {
          data = defineLocale(key, values);
        }
        if (data) {
          globalLocale = data;
        } else {
          if (typeof console !== "undefined" && console.warn) {
            console.warn(
              "Locale " + key + " not found. Did you forget to load it?"
            );
          }
        }
      }
      return globalLocale._abbr;
    }
    function defineLocale(name, config) {
      if (config !== null) {
        var locale2,
          parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
          deprecateSimple(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          );
          parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
          } else {
            locale2 = loadLocale(config.parentLocale);
            if (locale2 != null) {
              parentConfig = locale2._config;
            } else {
              if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                name,
                config,
              });
              return null;
            }
          }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));
        if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x2) {
            defineLocale(x2.name, x2.config);
          });
        }
        getSetGlobalLocale(name);
        return locales[name];
      } else {
        delete locales[name];
        return null;
      }
    }
    function updateLocale(name, config) {
      if (config != null) {
        var locale2,
          tmpLocale,
          parentConfig = baseConfig;
        if (locales[name] != null && locales[name].parentLocale != null) {
          locales[name].set(mergeConfigs(locales[name]._config, config));
        } else {
          tmpLocale = loadLocale(name);
          if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
          }
          config = mergeConfigs(parentConfig, config);
          if (tmpLocale == null) {
            config.abbr = name;
          }
          locale2 = new Locale(config);
          locale2.parentLocale = locales[name];
          locales[name] = locale2;
        }
        getSetGlobalLocale(name);
      } else {
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
            if (name === getSetGlobalLocale()) {
              getSetGlobalLocale(name);
            }
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }
      return locales[name];
    }
    function getLocale(key) {
      var locale2;
      if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
      }
      if (!key) {
        return globalLocale;
      }
      if (!isArray(key)) {
        locale2 = loadLocale(key);
        if (locale2) {
          return locale2;
        }
        key = [key];
      }
      return chooseLocale(key);
    }
    function listLocales() {
      return keys(locales);
    }
    function checkOverflow(m2) {
      var overflow,
        a2 = m2._a;
      if (a2 && getParsingFlags(m2).overflow === -2) {
        overflow =
          a2[MONTH] < 0 || a2[MONTH] > 11
            ? MONTH
            : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH])
              ? DATE
              : a2[HOUR] < 0 ||
                a2[HOUR] > 24 ||
                (a2[HOUR] === 24 &&
                  (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0))
                ? HOUR
                : a2[MINUTE] < 0 || a2[MINUTE] > 59
                  ? MINUTE
                  : a2[SECOND] < 0 || a2[SECOND] > 59
                    ? SECOND
                    : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999
                      ? MILLISECOND
                      : -1;
        if (
          getParsingFlags(m2)._overflowDayOfYear &&
          (overflow < YEAR || overflow > DATE)
        ) {
          overflow = DATE;
        }
        if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }
        if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }
        getParsingFlags(m2).overflow = overflow;
      }
      return m2;
    }
    var extendedIsoRegex =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      basicIsoRegex =
        /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
      isoDates = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, false],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, false],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, false],
        ["YYYY", /\d{4}/, false],
      ],
      isoTimes = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/],
      ],
      aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
      rfc2822 =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
      obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
      };
    function configFromISO(config) {
      var i2,
        l2,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat,
        isoDatesLen = isoDates.length,
        isoTimesLen = isoTimes.length;
      if (match) {
        getParsingFlags(config).iso = true;
        for (i2 = 0, l2 = isoDatesLen; i2 < l2; i2++) {
          if (isoDates[i2][1].exec(match[1])) {
            dateFormat = isoDates[i2][0];
            allowTime = isoDates[i2][2] !== false;
            break;
          }
        }
        if (dateFormat == null) {
          config._isValid = false;
          return;
        }
        if (match[3]) {
          for (i2 = 0, l2 = isoTimesLen; i2 < l2; i2++) {
            if (isoTimes[i2][1].exec(match[3])) {
              timeFormat = (match[2] || " ") + isoTimes[i2][0];
              break;
            }
          }
          if (timeFormat == null) {
            config._isValid = false;
            return;
          }
        }
        if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
        }
        if (match[4]) {
          if (tzRegex.exec(match[4])) {
            tzFormat = "Z";
          } else {
            config._isValid = false;
            return;
          }
        }
        config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
        configFromStringAndFormat(config);
      } else {
        config._isValid = false;
      }
    }
    function extractFromRFC2822Strings(
      yearStr,
      monthStr,
      dayStr,
      hourStr,
      minuteStr,
      secondStr
    ) {
      var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
      ];
      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }
      return result;
    }
    function untruncateYear(yearStr) {
      var year = parseInt(yearStr, 10);
      if (year <= 49) {
        return 2e3 + year;
      } else if (year <= 999) {
        return 1900 + year;
      }
      return year;
    }
    function preprocessRFC2822(s2) {
      return s2
        .replace(/\([^()]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s\s*/, "")
        .replace(/\s\s*$/, "");
    }
    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
          weekdayActual = new Date(
            parsedInput[0],
            parsedInput[1],
            parsedInput[2]
          ).getDay();
        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }
      return true;
    }
    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        return 0;
      } else {
        var hm = parseInt(numOffset, 10),
          m2 = hm % 100,
          h2 = (hm - m2) / 100;
        return h2 * 60 + m2;
      }
    }
    function configFromRFC2822(config) {
      var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
      if (match) {
        parsedArray = extractFromRFC2822Strings(
          match[4],
          match[3],
          match[2],
          match[5],
          match[6],
          match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
          return;
        }
        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);
        config._d = createUTCDate.apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        getParsingFlags(config).rfc2822 = true;
      } else {
        config._isValid = false;
      }
    }
    function configFromString(config) {
      var matched = aspNetJsonRegex.exec(config._i);
      if (matched !== null) {
        config._d = /* @__PURE__ */ new Date(+matched[1]);
        return;
      }
      configFromISO(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      configFromRFC2822(config);
      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return;
      }
      if (config._strict) {
        config._isValid = false;
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    hooks.createFromInputFallback = deprecate(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function (config) {
        config._d = /* @__PURE__ */ new Date(
          config._i + (config._useUTC ? " UTC" : "")
        );
      }
    );
    function defaults(a2, b2, c2) {
      if (a2 != null) {
        return a2;
      }
      if (b2 != null) {
        return b2;
      }
      return c2;
    }
    function currentDateArray(config) {
      var nowValue = new Date(hooks.now());
      if (config._useUTC) {
        return [
          nowValue.getUTCFullYear(),
          nowValue.getUTCMonth(),
          nowValue.getUTCDate(),
        ];
      }
      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }
    function configFromArray(config) {
      var i2,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;
      if (config._d) {
        return;
      }
      currentDate = currentDateArray(config);
      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      }
      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (
          config._dayOfYear > daysInYear(yearToUse) ||
          config._dayOfYear === 0
        ) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      }
      for (i2 = 0; i2 < 3 && config._a[i2] == null; ++i2) {
        config._a[i2] = input[i2] = currentDate[i2];
      }
      for (; i2 < 7; i2++) {
        config._a[i2] = input[i2] =
          config._a[i2] == null ? (i2 === 2 ? 1 : 0) : config._a[i2];
      }
      if (
        config._a[HOUR] === 24 &&
        config._a[MINUTE] === 0 &&
        config._a[SECOND] === 0 &&
        config._a[MILLISECOND] === 0
      ) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }
      config._d = (config._useUTC ? createUTCDate : createDate).apply(
        null,
        input
      );
      expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();
      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }
      if (config._nextDay) {
        config._a[HOUR] = 24;
      }
      if (
        config._w &&
        typeof config._w.d !== "undefined" &&
        config._w.d !== expectedWeekday
      ) {
        getParsingFlags(config).weekdayMismatch = true;
      }
    }
    function dayOfYearFromWeekInfo(config) {
      var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
      w2 = config._w;
      if (w2.GG != null || w2.W != null || w2.E != null) {
        dow = 1;
        doy = 4;
        weekYear = defaults(
          w2.GG,
          config._a[YEAR],
          weekOfYear(createLocal(), 1, 4).year
        );
        week = defaults(w2.W, 1);
        weekday = defaults(w2.E, 1);
        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        curWeek = weekOfYear(createLocal(), dow, doy);
        weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
        week = defaults(w2.w, curWeek.week);
        if (w2.d != null) {
          weekday = w2.d;
          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w2.e != null) {
          weekday = w2.e + dow;
          if (w2.e < 0 || w2.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          weekday = dow;
        }
      }
      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }
    }
    hooks.ISO_8601 = function () { };
    hooks.RFC_2822 = function () { };
    function configFromStringAndFormat(config) {
      if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
      }
      if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
      }
      config._a = [];
      getParsingFlags(config).empty = true;
      var string = "" + config._i,
        i2,
        parsedInput,
        tokens2,
        token2,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era,
        tokenLen;
      tokens2 =
        expandFormat(config._f, config._locale).match(formattingTokens) || [];
      tokenLen = tokens2.length;
      for (i2 = 0; i2 < tokenLen; i2++) {
        token2 = tokens2[i2];
        parsedInput = (string.match(getParseRegexForToken(token2, config)) ||
          [])[0];
        if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(
            string.indexOf(parsedInput) + parsedInput.length
          );
          totalParsedInputLength += parsedInput.length;
        }
        if (formatTokenFunctions[token2]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token2);
          }
          addTimeToArrayFromToken(token2, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token2);
        }
      }
      getParsingFlags(config).charsLeftOver =
        stringLength - totalParsedInputLength;
      if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
      }
      if (
        config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0
      ) {
        getParsingFlags(config).bigHour = void 0;
      }
      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem;
      config._a[HOUR] = meridiemFixWrap(
        config._locale,
        config._a[HOUR],
        config._meridiem
      );
      era = getParsingFlags(config).era;
      if (era !== null) {
        config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
      }
      configFromArray(config);
      checkOverflow(config);
    }
    function meridiemFixWrap(locale2, hour, meridiem2) {
      var isPm;
      if (meridiem2 == null) {
        return hour;
      }
      if (locale2.meridiemHour != null) {
        return locale2.meridiemHour(hour, meridiem2);
      } else if (locale2.isPM != null) {
        isPm = locale2.isPM(meridiem2);
        if (isPm && hour < 12) {
          hour += 12;
        }
        if (!isPm && hour === 12) {
          hour = 0;
        }
        return hour;
      } else {
        return hour;
      }
    }
    function configFromStringAndArray(config) {
      var tempConfig,
        bestMoment,
        scoreToBeat,
        i2,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false,
        configfLen = config._f.length;
      if (configfLen === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = /* @__PURE__ */ new Date(NaN);
        return;
      }
      for (i2 = 0; i2 < configfLen; i2++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i2];
        configFromStringAndFormat(tempConfig);
        if (isValid(tempConfig)) {
          validFormatFound = true;
        }
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (!bestFormatIsValid) {
          if (
            scoreToBeat == null ||
            currentScore < scoreToBeat ||
            validFormatFound
          ) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
            if (validFormatFound) {
              bestFormatIsValid = true;
            }
          }
        } else {
          if (currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
          }
        }
      }
      extend(config, bestMoment || tempConfig);
    }
    function configFromObject(config) {
      if (config._d) {
        return;
      }
      var i2 = normalizeObjectUnits(config._i),
        dayOrDate = i2.day === void 0 ? i2.date : i2.day;
      config._a = map(
        [
          i2.year,
          i2.month,
          dayOrDate,
          i2.hour,
          i2.minute,
          i2.second,
          i2.millisecond,
        ],
        function (obj) {
          return obj && parseInt(obj, 10);
        }
      );
      configFromArray(config);
    }
    function createFromConfig(config) {
      var res = new Moment(checkOverflow(prepareConfig(config)));
      if (res._nextDay) {
        res.add(1, "d");
        res._nextDay = void 0;
      }
      return res;
    }
    function prepareConfig(config) {
      var input = config._i,
        format2 = config._f;
      config._locale = config._locale || getLocale(config._l);
      if (input === null || (format2 === void 0 && input === "")) {
        return createInvalid({ nullInput: true });
      }
      if (typeof input === "string") {
        config._i = input = config._locale.preparse(input);
      }
      if (isMoment(input)) {
        return new Moment(checkOverflow(input));
      } else if (isDate(input)) {
        config._d = input;
      } else if (isArray(format2)) {
        configFromStringAndArray(config);
      } else if (format2) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }
      if (!isValid(config)) {
        config._d = null;
      }
      return config;
    }
    function configFromInput(config) {
      var input = config._i;
      if (isUndefined(input)) {
        config._d = new Date(hooks.now());
      } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
      } else if (typeof input === "string") {
        configFromString(config);
      } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        config._d = new Date(input);
      } else {
        hooks.createFromInputFallback(config);
      }
    }
    function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
      var c2 = {};
      if (format2 === true || format2 === false) {
        strict = format2;
        format2 = void 0;
      }
      if (locale2 === true || locale2 === false) {
        strict = locale2;
        locale2 = void 0;
      }
      if (
        (isObject(input) && isObjectEmpty(input)) ||
        (isArray(input) && input.length === 0)
      ) {
        input = void 0;
      }
      c2._isAMomentObject = true;
      c2._useUTC = c2._isUTC = isUTC;
      c2._l = locale2;
      c2._i = input;
      c2._f = format2;
      c2._strict = strict;
      return createFromConfig(c2);
    }
    function createLocal(input, format2, locale2, strict) {
      return createLocalOrUTC(input, format2, locale2, strict, false);
    }
    var prototypeMin = deprecate(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      }
    ),
      prototypeMax = deprecate(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function () {
          var other = createLocal.apply(null, arguments);
          if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
          } else {
            return createInvalid();
          }
        }
      );
    function pickBy(fn, moments) {
      var res, i2;
      if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
      }
      if (!moments.length) {
        return createLocal();
      }
      res = moments[0];
      for (i2 = 1; i2 < moments.length; ++i2) {
        if (!moments[i2].isValid() || moments[i2][fn](res)) {
          res = moments[i2];
        }
      }
      return res;
    }
    function min() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isBefore", args);
    }
    function max() {
      var args = [].slice.call(arguments, 0);
      return pickBy("isAfter", args);
    }
    var now = function () {
      return Date.now ? Date.now() : +(/* @__PURE__ */ new Date());
    };
    var ordering = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
    function isDurationValid(m2) {
      var key,
        unitHasDecimal = false,
        i2,
        orderLen = ordering.length;
      for (key in m2) {
        if (
          hasOwnProp(m2, key) &&
          !(
            indexOf.call(ordering, key) !== -1 &&
            (m2[key] == null || !isNaN(m2[key]))
          )
        ) {
          return false;
        }
      }
      for (i2 = 0; i2 < orderLen; ++i2) {
        if (m2[ordering[i2]]) {
          if (unitHasDecimal) {
            return false;
          }
          if (parseFloat(m2[ordering[i2]]) !== toInt(m2[ordering[i2]])) {
            unitHasDecimal = true;
          }
        }
      }
      return true;
    }
    function isValid$1() {
      return this._isValid;
    }
    function createInvalid$1() {
      return createDuration(NaN);
    }
    function Duration(duration) {
      var normalizedInput = normalizeObjectUnits(duration),
        years2 = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months2 = normalizedInput.month || 0,
        weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0,
        days2 = normalizedInput.day || 0,
        hours2 = normalizedInput.hour || 0,
        minutes2 = normalizedInput.minute || 0,
        seconds2 = normalizedInput.second || 0,
        milliseconds2 = normalizedInput.millisecond || 0;
      this._isValid = isDurationValid(normalizedInput);
      this._milliseconds =
        +milliseconds2 +
        seconds2 * 1e3 + // 1000
        minutes2 * 6e4 + // 1000 * 60
        hours2 * 1e3 * 60 * 60;
      this._days = +days2 + weeks2 * 7;
      this._months = +months2 + quarters * 3 + years2 * 12;
      this._data = {};
      this._locale = getLocale();
      this._bubble();
    }
    function isDuration(obj) {
      return obj instanceof Duration;
    }
    function absRound(number) {
      if (number < 0) {
        return Math.round(-1 * number) * -1;
      } else {
        return Math.round(number);
      }
    }
    function compareArrays(array1, array2, dontConvert) {
      var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i2;
      for (i2 = 0; i2 < len; i2++) {
        if (
          (dontConvert && array1[i2] !== array2[i2]) ||
          (!dontConvert && toInt(array1[i2]) !== toInt(array2[i2]))
        ) {
          diffs++;
        }
      }
      return diffs + lengthDiff;
    }
    function offset(token2, separator) {
      addFormatToken(token2, 0, 0, function () {
        var offset2 = this.utcOffset(),
          sign2 = "+";
        if (offset2 < 0) {
          offset2 = -offset2;
          sign2 = "-";
        }
        return (
          sign2 +
          zeroFill(~~(offset2 / 60), 2) +
          separator +
          zeroFill(~~offset2 % 60, 2)
        );
      });
    }
    offset("Z", ":");
    offset("ZZ", "");
    addRegexToken("Z", matchShortOffset);
    addRegexToken("ZZ", matchShortOffset);
    addParseToken(["Z", "ZZ"], function (input, array, config) {
      config._useUTC = true;
      config._tzm = offsetFromString(matchShortOffset, input);
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    function offsetFromString(matcher, string) {
      var matches = (string || "").match(matcher),
        chunk,
        parts,
        minutes2;
      if (matches === null) {
        return null;
      }
      chunk = matches[matches.length - 1] || [];
      parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
      minutes2 = +(parts[1] * 60) + toInt(parts[2]);
      return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
    }
    function cloneWithOffset(input, model) {
      var res, diff2;
      if (model._isUTC) {
        res = model.clone();
        diff2 =
          (isMoment(input) || isDate(input)
            ? input.valueOf()
            : createLocal(input).valueOf()) - res.valueOf();
        res._d.setTime(res._d.valueOf() + diff2);
        hooks.updateOffset(res, false);
        return res;
      } else {
        return createLocal(input).local();
      }
    }
    function getDateOffset(m2) {
      return -Math.round(m2._d.getTimezoneOffset());
    }
    hooks.updateOffset = function () { };
    function getSetOffset(input, keepLocalTime, keepMinutes) {
      var offset2 = this._offset || 0,
        localAdjust;
      if (!this.isValid()) {
        return input != null ? this : NaN;
      }
      if (input != null) {
        if (typeof input === "string") {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
            return this;
          }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
          input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
          this.add(localAdjust, "m");
        }
        if (offset2 !== input) {
          if (!keepLocalTime || this._changeInProgress) {
            addSubtract(this, createDuration(input - offset2, "m"), 1, false);
          } else if (!this._changeInProgress) {
            this._changeInProgress = true;
            hooks.updateOffset(this, true);
            this._changeInProgress = null;
          }
        }
        return this;
      } else {
        return this._isUTC ? offset2 : getDateOffset(this);
      }
    }
    function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== "string") {
          input = -input;
        }
        this.utcOffset(input, keepLocalTime);
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    function setOffsetToUTC(keepLocalTime) {
      return this.utcOffset(0, keepLocalTime);
    }
    function setOffsetToLocal(keepLocalTime) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), "m");
        }
      }
      return this;
    }
    function setOffsetToParsedOffset() {
      if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
      } else if (typeof this._i === "string") {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
          this.utcOffset(tZone);
        } else {
          this.utcOffset(0, true);
        }
      }
      return this;
    }
    function hasAlignedHourOffset(input) {
      if (!this.isValid()) {
        return false;
      }
      input = input ? createLocal(input).utcOffset() : 0;
      return (this.utcOffset() - input) % 60 === 0;
    }
    function isDaylightSavingTime() {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }
    function isDaylightSavingTimeShifted() {
      if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
      }
      var c2 = {},
        other;
      copyConfig(c2, this);
      c2 = prepareConfig(c2);
      if (c2._a) {
        other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
        this._isDSTShifted =
          this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
      } else {
        this._isDSTShifted = false;
      }
      return this._isDSTShifted;
    }
    function isLocal() {
      return this.isValid() ? !this._isUTC : false;
    }
    function isUtcOffset() {
      return this.isValid() ? this._isUTC : false;
    }
    function isUtc() {
      return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
      isoRegex =
        /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function createDuration(input, key) {
      var duration = input,
        match = null,
        sign2,
        ret,
        diffRes;
      if (isDuration(input)) {
        duration = {
          ms: input._milliseconds,
          d: input._days,
          M: input._months,
        };
      } else if (isNumber(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
          duration[key] = +input;
        } else {
          duration.milliseconds = +input;
        }
      } else if ((match = aspNetRegex.exec(input))) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: 0,
          d: toInt(match[DATE]) * sign2,
          h: toInt(match[HOUR]) * sign2,
          m: toInt(match[MINUTE]) * sign2,
          s: toInt(match[SECOND]) * sign2,
          ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2,
          // the millisecond decimal point is included in the match
        };
      } else if ((match = isoRegex.exec(input))) {
        sign2 = match[1] === "-" ? -1 : 1;
        duration = {
          y: parseIso(match[2], sign2),
          M: parseIso(match[3], sign2),
          w: parseIso(match[4], sign2),
          d: parseIso(match[5], sign2),
          h: parseIso(match[6], sign2),
          m: parseIso(match[7], sign2),
          s: parseIso(match[8], sign2),
        };
      } else if (duration == null) {
        duration = {};
      } else if (
        typeof duration === "object" &&
        ("from" in duration || "to" in duration)
      ) {
        diffRes = momentsDifference(
          createLocal(duration.from),
          createLocal(duration.to)
        );
        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
      }
      ret = new Duration(duration);
      if (isDuration(input) && hasOwnProp(input, "_locale")) {
        ret._locale = input._locale;
      }
      if (isDuration(input) && hasOwnProp(input, "_isValid")) {
        ret._isValid = input._isValid;
      }
      return ret;
    }
    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;
    function parseIso(inp, sign2) {
      var res = inp && parseFloat(inp.replace(",", "."));
      return (isNaN(res) ? 0 : res) * sign2;
    }
    function positiveMomentsDifference(base, other) {
      var res = {};
      res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
      if (base.clone().add(res.months, "M").isAfter(other)) {
        --res.months;
      }
      res.milliseconds = +other - +base.clone().add(res.months, "M");
      return res;
    }
    function momentsDifference(base, other) {
      var res;
      if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
      }
      other = cloneWithOffset(other, base);
      if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
      } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }
      return res;
    }
    function createAdder(direction, name) {
      return function (val, period) {
        var dur, tmp;
        if (period !== null && !isNaN(+period)) {
          deprecateSimple(
            name,
            "moment()." +
            name +
            "(period, number) is deprecated. Please use moment()." +
            name +
            "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          );
          tmp = val;
          val = period;
          period = tmp;
        }
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
      };
    }
    function addSubtract(mom, duration, isAdding, updateOffset) {
      var milliseconds2 = duration._milliseconds,
        days2 = absRound(duration._days),
        months2 = absRound(duration._months);
      if (!mom.isValid()) {
        return;
      }
      updateOffset = updateOffset == null ? true : updateOffset;
      if (months2) {
        setMonth(mom, get(mom, "Month") + months2 * isAdding);
      }
      if (days2) {
        set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
      }
      if (milliseconds2) {
        mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
      }
      if (updateOffset) {
        hooks.updateOffset(mom, days2 || months2);
      }
    }
    var add = createAdder(1, "add"),
      subtract = createAdder(-1, "subtract");
    function isString(input) {
      return typeof input === "string" || input instanceof String;
    }
    function isMomentInput(input) {
      return (
        isMoment(input) ||
        isDate(input) ||
        isString(input) ||
        isNumber(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === void 0
      );
    }
    function isMomentInputObject(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input),
        propertyTest = false,
        properties = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms",
        ],
        i2,
        property,
        propertyLen = properties.length;
      for (i2 = 0; i2 < propertyLen; i2 += 1) {
        property = properties[i2];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function isNumberOrStringArray(input) {
      var arrayTest = isArray(input),
        dataTypeTest = false;
      if (arrayTest) {
        dataTypeTest =
          input.filter(function (item) {
            return !isNumber(item) && isString(input);
          }).length === 0;
      }
      return arrayTest && dataTypeTest;
    }
    function isCalendarSpec(input) {
      var objectTest = isObject(input) && !isObjectEmpty(input),
        propertyTest = false,
        properties = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse",
        ],
        i2,
        property;
      for (i2 = 0; i2 < properties.length; i2 += 1) {
        property = properties[i2];
        propertyTest = propertyTest || hasOwnProp(input, property);
      }
      return objectTest && propertyTest;
    }
    function getCalendarFormat(myMoment, now2) {
      var diff2 = myMoment.diff(now2, "days", true);
      return diff2 < -6
        ? "sameElse"
        : diff2 < -1
          ? "lastWeek"
          : diff2 < 0
            ? "lastDay"
            : diff2 < 1
              ? "sameDay"
              : diff2 < 2
                ? "nextDay"
                : diff2 < 7
                  ? "nextWeek"
                  : "sameElse";
    }
    function calendar$1(time, formats) {
      if (arguments.length === 1) {
        if (!arguments[0]) {
          time = void 0;
          formats = void 0;
        } else if (isMomentInput(arguments[0])) {
          time = arguments[0];
          formats = void 0;
        } else if (isCalendarSpec(arguments[0])) {
          formats = arguments[0];
          time = void 0;
        }
      }
      var now2 = time || createLocal(),
        sod = cloneWithOffset(now2, this).startOf("day"),
        format2 = hooks.calendarFormat(this, sod) || "sameElse",
        output =
          formats &&
          (isFunction(formats[format2])
            ? formats[format2].call(this, now2)
            : formats[format2]);
      return this.format(
        output || this.localeData().calendar(format2, this, createLocal(now2))
      );
    }
    function clone() {
      return new Moment(this);
    }
    function isAfter(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() > localInput.valueOf();
      } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
      }
    }
    function isBefore(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input);
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() < localInput.valueOf();
      } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
      }
    }
    function isBetween(from2, to2, units, inclusivity) {
      var localFrom = isMoment(from2) ? from2 : createLocal(from2),
        localTo = isMoment(to2) ? to2 : createLocal(to2);
      if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
      }
      inclusivity = inclusivity || "()";
      return (
        (inclusivity[0] === "("
          ? this.isAfter(localFrom, units)
          : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ")"
          ? this.isBefore(localTo, units)
          : !this.isAfter(localTo, units))
      );
    }
    function isSame(input, units) {
      var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
      if (!(this.isValid() && localInput.isValid())) {
        return false;
      }
      units = normalizeUnits(units) || "millisecond";
      if (units === "millisecond") {
        return this.valueOf() === localInput.valueOf();
      } else {
        inputMs = localInput.valueOf();
        return (
          this.clone().startOf(units).valueOf() <= inputMs &&
          inputMs <= this.clone().endOf(units).valueOf()
        );
      }
    }
    function isSameOrAfter(input, units) {
      return this.isSame(input, units) || this.isAfter(input, units);
    }
    function isSameOrBefore(input, units) {
      return this.isSame(input, units) || this.isBefore(input, units);
    }
    function diff(input, units, asFloat) {
      var that, zoneDelta, output;
      if (!this.isValid()) {
        return NaN;
      }
      that = cloneWithOffset(input, this);
      if (!that.isValid()) {
        return NaN;
      }
      zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
      units = normalizeUnits(units);
      switch (units) {
        case "year":
          output = monthDiff(this, that) / 12;
          break;
        case "month":
          output = monthDiff(this, that);
          break;
        case "quarter":
          output = monthDiff(this, that) / 3;
          break;
        case "second":
          output = (this - that) / 1e3;
          break;
        case "minute":
          output = (this - that) / 6e4;
          break;
        case "hour":
          output = (this - that) / 36e5;
          break;
        case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;
        case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;
        default:
          output = this - that;
      }
      return asFloat ? output : absFloor(output);
    }
    function monthDiff(a2, b2) {
      if (a2.date() < b2.date()) {
        return -monthDiff(b2, a2);
      }
      var wholeMonthDiff =
        (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()),
        anchor = a2.clone().add(wholeMonthDiff, "months"),
        anchor2,
        adjust;
      if (b2 - anchor < 0) {
        anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
        adjust = (b2 - anchor) / (anchor - anchor2);
      } else {
        anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
        adjust = (b2 - anchor) / (anchor2 - anchor);
      }
      return -(wholeMonthDiff + adjust) || 0;
    }
    hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    function toString() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }
    function toISOString(keepOffset) {
      if (!this.isValid()) {
        return null;
      }
      var utc = keepOffset !== true,
        m2 = utc ? this.clone().utc() : this;
      if (m2.year() < 0 || m2.year() > 9999) {
        return formatMoment(
          m2,
          utc
            ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
            : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      if (isFunction(Date.prototype.toISOString)) {
        if (utc) {
          return this.toDate().toISOString();
        } else {
          return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace("Z", formatMoment(m2, "Z"));
        }
      }
      return formatMoment(
        m2,
        utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
      );
    }
    function inspect() {
      if (!this.isValid()) {
        return "moment.invalid(/* " + this._i + " */)";
      }
      var func = "moment",
        zone = "",
        prefix,
        year,
        datetime,
        suffix;
      if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
        zone = "Z";
      }
      prefix = "[" + func + '("]';
      year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
      datetime = "-MM-DD[T]HH:mm:ss.SSS";
      suffix = zone + '[")]';
      return this.format(prefix + year + datetime + suffix);
    }
    function format(inputString) {
      if (!inputString) {
        inputString = this.isUtc()
          ? hooks.defaultFormatUtc
          : hooks.defaultFormat;
      }
      var output = formatMoment(this, inputString);
      return this.localeData().postformat(output);
    }
    function from(time, withoutSuffix) {
      if (
        this.isValid() &&
        ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
      ) {
        return createDuration({ to: this, from: time })
          .locale(this.locale())
          .humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function fromNow(withoutSuffix) {
      return this.from(createLocal(), withoutSuffix);
    }
    function to(time, withoutSuffix) {
      if (
        this.isValid() &&
        ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
      ) {
        return createDuration({ from: this, to: time })
          .locale(this.locale())
          .humanize(!withoutSuffix);
      } else {
        return this.localeData().invalidDate();
      }
    }
    function toNow(withoutSuffix) {
      return this.to(createLocal(), withoutSuffix);
    }
    function locale(key) {
      var newLocaleData;
      if (key === void 0) {
        return this._locale._abbr;
      } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
          this._locale = newLocaleData;
        }
        return this;
      }
    }
    var lang = deprecate(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function (key) {
        if (key === void 0) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }
    );
    function localeData() {
      return this._locale;
    }
    var MS_PER_SECOND = 1e3,
      MS_PER_MINUTE = 60 * MS_PER_SECOND,
      MS_PER_HOUR = 60 * MS_PER_MINUTE,
      MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
    function mod$1(dividend, divisor) {
      return ((dividend % divisor) + divisor) % divisor;
    }
    function localStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return new Date(y2, m2, d2).valueOf();
      }
    }
    function utcStartOfDate(y2, m2, d2) {
      if (y2 < 100 && y2 >= 0) {
        return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
      } else {
        return Date.UTC(y2, m2, d2);
      }
    }
    function startOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year(), 0, 1);
          break;
        case "quarter":
          time = startOfDate(this.year(), this.month() - (this.month() % 3), 1);
          break;
        case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;
        case "week":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - this.weekday()
          );
          break;
        case "isoWeek":
          time = startOfDate(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1)
          );
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;
        case "hour":
          time = this._d.valueOf();
          time -= mod$1(
            time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
            MS_PER_HOUR
          );
          break;
        case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;
        case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function endOf(units) {
      var time, startOfDate;
      units = normalizeUnits(units);
      if (units === void 0 || units === "millisecond" || !this.isValid()) {
        return this;
      }
      startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
      switch (units) {
        case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;
        case "quarter":
          time =
            startOfDate(this.year(), this.month() - (this.month() % 3) + 3, 1) -
            1;
          break;
        case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;
        case "week":
          time =
            startOfDate(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
          break;
        case "isoWeek":
          time =
            startOfDate(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
          break;
        case "day":
        case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;
        case "hour":
          time = this._d.valueOf();
          time +=
            MS_PER_HOUR -
            mod$1(
              time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
              MS_PER_HOUR
            ) -
            1;
          break;
        case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;
        case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
      }
      this._d.setTime(time);
      hooks.updateOffset(this, true);
      return this;
    }
    function valueOf() {
      return this._d.valueOf() - (this._offset || 0) * 6e4;
    }
    function unix() {
      return Math.floor(this.valueOf() / 1e3);
    }
    function toDate() {
      return new Date(this.valueOf());
    }
    function toArray$1() {
      var m2 = this;
      return [
        m2.year(),
        m2.month(),
        m2.date(),
        m2.hour(),
        m2.minute(),
        m2.second(),
        m2.millisecond(),
      ];
    }
    function toObject() {
      var m2 = this;
      return {
        years: m2.year(),
        months: m2.month(),
        date: m2.date(),
        hours: m2.hours(),
        minutes: m2.minutes(),
        seconds: m2.seconds(),
        milliseconds: m2.milliseconds(),
      };
    }
    function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    }
    function isValid$2() {
      return isValid(this);
    }
    function parsingFlags() {
      return extend({}, getParsingFlags(this));
    }
    function invalidAt() {
      return getParsingFlags(this).overflow;
    }
    function creationData() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }
    addFormatToken("N", 0, 0, "eraAbbr");
    addFormatToken("NN", 0, 0, "eraAbbr");
    addFormatToken("NNN", 0, 0, "eraAbbr");
    addFormatToken("NNNN", 0, 0, "eraName");
    addFormatToken("NNNNN", 0, 0, "eraNarrow");
    addFormatToken("y", ["y", 1], "yo", "eraYear");
    addFormatToken("y", ["yy", 2], 0, "eraYear");
    addFormatToken("y", ["yyy", 3], 0, "eraYear");
    addFormatToken("y", ["yyyy", 4], 0, "eraYear");
    addRegexToken("N", matchEraAbbr);
    addRegexToken("NN", matchEraAbbr);
    addRegexToken("NNN", matchEraAbbr);
    addRegexToken("NNNN", matchEraName);
    addRegexToken("NNNNN", matchEraNarrow);
    addParseToken(
      ["N", "NN", "NNN", "NNNN", "NNNNN"],
      function (input, array, config, token2) {
        var era = config._locale.erasParse(input, token2, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }
    );
    addRegexToken("y", matchUnsigned);
    addRegexToken("yy", matchUnsigned);
    addRegexToken("yyy", matchUnsigned);
    addRegexToken("yyyy", matchUnsigned);
    addRegexToken("yo", matchEraYearOrdinal);
    addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
    addParseToken(["yo"], function (input, array, config, token2) {
      var match;
      if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
      }
      if (config._locale.eraYearOrdinalParse) {
        array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
      } else {
        array[YEAR] = parseInt(input, 10);
      }
    });
    function localeEras(m2, format2) {
      var i2,
        l2,
        date,
        eras = this._eras || getLocale("en")._eras;
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        switch (typeof eras[i2].since) {
          case "string":
            date = hooks(eras[i2].since).startOf("day");
            eras[i2].since = date.valueOf();
            break;
        }
        switch (typeof eras[i2].until) {
          case "undefined":
            eras[i2].until = Infinity;
            break;
          case "string":
            date = hooks(eras[i2].until).startOf("day").valueOf();
            eras[i2].until = date.valueOf();
            break;
        }
      }
      return eras;
    }
    function localeErasParse(eraName, format2, strict) {
      var i2,
        l2,
        eras = this.eras(),
        name,
        abbr,
        narrow;
      eraName = eraName.toUpperCase();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        name = eras[i2].name.toUpperCase();
        abbr = eras[i2].abbr.toUpperCase();
        narrow = eras[i2].narrow.toUpperCase();
        if (strict) {
          switch (format2) {
            case "N":
            case "NN":
            case "NNN":
              if (abbr === eraName) {
                return eras[i2];
              }
              break;
            case "NNNN":
              if (name === eraName) {
                return eras[i2];
              }
              break;
            case "NNNNN":
              if (narrow === eraName) {
                return eras[i2];
              }
              break;
          }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
          return eras[i2];
        }
      }
    }
    function localeErasConvertYear(era, year) {
      var dir = era.since <= era.until ? 1 : -1;
      if (year === void 0) {
        return hooks(era.since).year();
      } else {
        return hooks(era.since).year() + (year - era.offset) * dir;
      }
    }
    function getEraName() {
      var i2,
        l2,
        val,
        eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].name;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].name;
        }
      }
      return "";
    }
    function getEraNarrow() {
      var i2,
        l2,
        val,
        eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].narrow;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].narrow;
        }
      }
      return "";
    }
    function getEraAbbr() {
      var i2,
        l2,
        val,
        eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        val = this.clone().startOf("day").valueOf();
        if (eras[i2].since <= val && val <= eras[i2].until) {
          return eras[i2].abbr;
        }
        if (eras[i2].until <= val && val <= eras[i2].since) {
          return eras[i2].abbr;
        }
      }
      return "";
    }
    function getEraYear() {
      var i2,
        l2,
        dir,
        val,
        eras = this.localeData().eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        dir = eras[i2].since <= eras[i2].until ? 1 : -1;
        val = this.clone().startOf("day").valueOf();
        if (
          (eras[i2].since <= val && val <= eras[i2].until) ||
          (eras[i2].until <= val && val <= eras[i2].since)
        ) {
          return (
            (this.year() - hooks(eras[i2].since).year()) * dir + eras[i2].offset
          );
        }
      }
      return this.year();
    }
    function erasNameRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNameRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNameRegex : this._erasRegex;
    }
    function erasAbbrRegex(isStrict) {
      if (!hasOwnProp(this, "_erasAbbrRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }
    function erasNarrowRegex(isStrict) {
      if (!hasOwnProp(this, "_erasNarrowRegex")) {
        computeErasParse.call(this);
      }
      return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }
    function matchEraAbbr(isStrict, locale2) {
      return locale2.erasAbbrRegex(isStrict);
    }
    function matchEraName(isStrict, locale2) {
      return locale2.erasNameRegex(isStrict);
    }
    function matchEraNarrow(isStrict, locale2) {
      return locale2.erasNarrowRegex(isStrict);
    }
    function matchEraYearOrdinal(isStrict, locale2) {
      return locale2._eraYearOrdinalRegex || matchUnsigned;
    }
    function computeErasParse() {
      var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i2,
        l2,
        erasName,
        erasAbbr,
        erasNarrow,
        eras = this.eras();
      for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
        erasName = regexEscape(eras[i2].name);
        erasAbbr = regexEscape(eras[i2].abbr);
        erasNarrow = regexEscape(eras[i2].narrow);
        namePieces.push(erasName);
        abbrPieces.push(erasAbbr);
        narrowPieces.push(erasNarrow);
        mixedPieces.push(erasName);
        mixedPieces.push(erasAbbr);
        mixedPieces.push(erasNarrow);
      }
      this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
      this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
      this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
      this._erasNarrowRegex = new RegExp(
        "^(" + narrowPieces.join("|") + ")",
        "i"
      );
    }
    addFormatToken(0, ["gg", 2], 0, function () {
      return this.weekYear() % 100;
    });
    addFormatToken(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    });
    function addWeekYearFormatToken(token2, getter) {
      addFormatToken(0, [token2, token2.length], 0, getter);
    }
    addWeekYearFormatToken("gggg", "weekYear");
    addWeekYearFormatToken("ggggg", "weekYear");
    addWeekYearFormatToken("GGGG", "isoWeekYear");
    addWeekYearFormatToken("GGGGG", "isoWeekYear");
    addRegexToken("G", matchSigned);
    addRegexToken("g", matchSigned);
    addRegexToken("GG", match1to2, match2);
    addRegexToken("gg", match1to2, match2);
    addRegexToken("GGGG", match1to4, match4);
    addRegexToken("gggg", match1to4, match4);
    addRegexToken("GGGGG", match1to6, match6);
    addRegexToken("ggggg", match1to6, match6);
    addWeekParseToken(
      ["gggg", "ggggg", "GGGG", "GGGGG"],
      function (input, week, config, token2) {
        week[token2.substr(0, 2)] = toInt(input);
      }
    );
    addWeekParseToken(["gg", "GG"], function (input, week, config, token2) {
      week[token2] = hooks.parseTwoDigitYear(input);
    });
    function getSetWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday() + this.localeData()._week.dow,
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }
    function getSetISOWeekYear(input) {
      return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
      );
    }
    function getISOWeeksInYear() {
      return weeksInYear(this.year(), 1, 4);
    }
    function getISOWeeksInISOWeekYear() {
      return weeksInYear(this.isoWeekYear(), 1, 4);
    }
    function getWeeksInYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }
    function getWeeksInWeekYear() {
      var weekInfo = this.localeData()._week;
      return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
      var weeksTarget;
      if (input == null) {
        return weekOfYear(this, dow, doy).year;
      } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
          week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
      }
    }
    function setWeekAll(weekYear, week, weekday, dow, doy) {
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
      this.year(date.getUTCFullYear());
      this.month(date.getUTCMonth());
      this.date(date.getUTCDate());
      return this;
    }
    addFormatToken("Q", 0, "Qo", "quarter");
    addRegexToken("Q", match1);
    addParseToken("Q", function (input, array) {
      array[MONTH] = (toInt(input) - 1) * 3;
    });
    function getSetQuarter(input) {
      return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
    }
    addFormatToken("D", ["DD", 2], "Do", "date");
    addRegexToken("D", match1to2, match1to2NoLeadingZero);
    addRegexToken("DD", match1to2, match2);
    addRegexToken("Do", function (isStrict, locale2) {
      return isStrict
        ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse
        : locale2._dayOfMonthOrdinalParseLenient;
    });
    addParseToken(["D", "DD"], DATE);
    addParseToken("Do", function (input, array) {
      array[DATE] = toInt(input.match(match1to2)[0]);
    });
    var getSetDayOfMonth = makeGetSet("Date", true);
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
    addRegexToken("DDD", match1to3);
    addRegexToken("DDDD", match3);
    addParseToken(["DDD", "DDDD"], function (input, array, config) {
      config._dayOfYear = toInt(input);
    });
    function getSetDayOfYear(input) {
      var dayOfYear =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
    }
    addFormatToken("m", ["mm", 2], 0, "minute");
    addRegexToken("m", match1to2, match1to2HasZero);
    addRegexToken("mm", match1to2, match2);
    addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", false);
    addFormatToken("s", ["ss", 2], 0, "second");
    addRegexToken("s", match1to2, match1to2HasZero);
    addRegexToken("ss", match1to2, match2);
    addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", false);
    addFormatToken("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    });
    addFormatToken(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    });
    addFormatToken(0, ["SSS", 3], 0, "millisecond");
    addFormatToken(0, ["SSSS", 4], 0, function () {
      return this.millisecond() * 10;
    });
    addFormatToken(0, ["SSSSS", 5], 0, function () {
      return this.millisecond() * 100;
    });
    addFormatToken(0, ["SSSSSS", 6], 0, function () {
      return this.millisecond() * 1e3;
    });
    addFormatToken(0, ["SSSSSSS", 7], 0, function () {
      return this.millisecond() * 1e4;
    });
    addFormatToken(0, ["SSSSSSSS", 8], 0, function () {
      return this.millisecond() * 1e5;
    });
    addFormatToken(0, ["SSSSSSSSS", 9], 0, function () {
      return this.millisecond() * 1e6;
    });
    addRegexToken("S", match1to3, match1);
    addRegexToken("SS", match1to3, match2);
    addRegexToken("SSS", match1to3, match3);
    var token, getSetMillisecond;
    for (token = "SSSS"; token.length <= 9; token += "S") {
      addRegexToken(token, matchUnsigned);
    }
    function parseMs(input, array) {
      array[MILLISECOND] = toInt(("0." + input) * 1e3);
    }
    for (token = "S"; token.length <= 9; token += "S") {
      addParseToken(token, parseMs);
    }
    getSetMillisecond = makeGetSet("Milliseconds", false);
    addFormatToken("z", 0, 0, "zoneAbbr");
    addFormatToken("zz", 0, 0, "zoneName");
    function getZoneAbbr() {
      return this._isUTC ? "UTC" : "";
    }
    function getZoneName() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }
    var proto = Moment.prototype;
    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray$1;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== "undefined" && Symbol.for != null) {
      proto[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">";
      };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
      "dates accessor is deprecated. Use date instead.",
      getSetDayOfMonth
    );
    proto.months = deprecate(
      "months accessor is deprecated. Use month instead",
      getSetMonth
    );
    proto.years = deprecate(
      "years accessor is deprecated. Use year instead",
      getSetYear
    );
    proto.zone = deprecate(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      getSetZone
    );
    proto.isDSTShifted = deprecate(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      isDaylightSavingTimeShifted
    );
    function createUnix(input) {
      return createLocal(input * 1e3);
    }
    function createInZone() {
      return createLocal.apply(null, arguments).parseZone();
    }
    function preParsePostFormat(string) {
      return string;
    }
    var proto$1 = Locale.prototype;
    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;
    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;
    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;
    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;
    function get$1(format2, index, field, setter) {
      var locale2 = getLocale(),
        utc = createUTC().set(setter, index);
      return locale2[field](utc, format2);
    }
    function listMonthsImpl(format2, index, field) {
      if (isNumber(format2)) {
        index = format2;
        format2 = void 0;
      }
      format2 = format2 || "";
      if (index != null) {
        return get$1(format2, index, field, "month");
      }
      var i2,
        out = [];
      for (i2 = 0; i2 < 12; i2++) {
        out[i2] = get$1(format2, i2, field, "month");
      }
      return out;
    }
    function listWeekdaysImpl(localeSorted, format2, index, field) {
      if (typeof localeSorted === "boolean") {
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      } else {
        format2 = localeSorted;
        index = format2;
        localeSorted = false;
        if (isNumber(format2)) {
          index = format2;
          format2 = void 0;
        }
        format2 = format2 || "";
      }
      var locale2 = getLocale(),
        shift = localeSorted ? locale2._week.dow : 0,
        i2,
        out = [];
      if (index != null) {
        return get$1(format2, (index + shift) % 7, field, "day");
      }
      for (i2 = 0; i2 < 7; i2++) {
        out[i2] = get$1(format2, (i2 + shift) % 7, field, "day");
      }
      return out;
    }
    function listMonths(format2, index) {
      return listMonthsImpl(format2, index, "months");
    }
    function listMonthsShort(format2, index) {
      return listMonthsImpl(format2, index, "monthsShort");
    }
    function listWeekdays(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
    }
    function listWeekdaysShort(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
    }
    function listWeekdaysMin(localeSorted, format2, index) {
      return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
    }
    getSetGlobalLocale("en", {
      eras: [
        {
          since: "0001-01-01",
          until: Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD",
        },
        {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC",
        },
      ],
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (number) {
        var b2 = number % 10,
          output =
            toInt((number % 100) / 10) === 1
              ? "th"
              : b2 === 1
                ? "st"
                : b2 === 2
                  ? "nd"
                  : b2 === 3
                    ? "rd"
                    : "th";
        return number + output;
      },
    });
    hooks.lang = deprecate(
      "moment.lang is deprecated. Use moment.locale instead.",
      getSetGlobalLocale
    );
    hooks.langData = deprecate(
      "moment.langData is deprecated. Use moment.localeData instead.",
      getLocale
    );
    var mathAbs = Math.abs;
    function abs() {
      var data = this._data;
      this._milliseconds = mathAbs(this._milliseconds);
      this._days = mathAbs(this._days);
      this._months = mathAbs(this._months);
      data.milliseconds = mathAbs(data.milliseconds);
      data.seconds = mathAbs(data.seconds);
      data.minutes = mathAbs(data.minutes);
      data.hours = mathAbs(data.hours);
      data.months = mathAbs(data.months);
      data.years = mathAbs(data.years);
      return this;
    }
    function addSubtract$1(duration, input, value, direction) {
      var other = createDuration(input, value);
      duration._milliseconds += direction * other._milliseconds;
      duration._days += direction * other._days;
      duration._months += direction * other._months;
      return duration._bubble();
    }
    function add$1(input, value) {
      return addSubtract$1(this, input, value, 1);
    }
    function subtract$1(input, value) {
      return addSubtract$1(this, input, value, -1);
    }
    function absCeil(number) {
      if (number < 0) {
        return Math.floor(number);
      } else {
        return Math.ceil(number);
      }
    }
    function bubble() {
      var milliseconds2 = this._milliseconds,
        days2 = this._days,
        months2 = this._months,
        data = this._data,
        seconds2,
        minutes2,
        hours2,
        years2,
        monthsFromDays;
      if (
        !(
          (milliseconds2 >= 0 && days2 >= 0 && months2 >= 0) ||
          (milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)
        )
      ) {
        milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
        days2 = 0;
        months2 = 0;
      }
      data.milliseconds = milliseconds2 % 1e3;
      seconds2 = absFloor(milliseconds2 / 1e3);
      data.seconds = seconds2 % 60;
      minutes2 = absFloor(seconds2 / 60);
      data.minutes = minutes2 % 60;
      hours2 = absFloor(minutes2 / 60);
      data.hours = hours2 % 24;
      days2 += absFloor(hours2 / 24);
      monthsFromDays = absFloor(daysToMonths(days2));
      months2 += monthsFromDays;
      days2 -= absCeil(monthsToDays(monthsFromDays));
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      data.days = days2;
      data.months = months2;
      data.years = years2;
      return this;
    }
    function daysToMonths(days2) {
      return (days2 * 4800) / 146097;
    }
    function monthsToDays(months2) {
      return (months2 * 146097) / 4800;
    }
    function as(units) {
      if (!this.isValid()) {
        return NaN;
      }
      var days2,
        months2,
        milliseconds2 = this._milliseconds;
      units = normalizeUnits(units);
      if (units === "month" || units === "quarter" || units === "year") {
        days2 = this._days + milliseconds2 / 864e5;
        months2 = this._months + daysToMonths(days2);
        switch (units) {
          case "month":
            return months2;
          case "quarter":
            return months2 / 3;
          case "year":
            return months2 / 12;
        }
      } else {
        days2 = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
          case "week":
            return days2 / 7 + milliseconds2 / 6048e5;
          case "day":
            return days2 + milliseconds2 / 864e5;
          case "hour":
            return days2 * 24 + milliseconds2 / 36e5;
          case "minute":
            return days2 * 1440 + milliseconds2 / 6e4;
          case "second":
            return days2 * 86400 + milliseconds2 / 1e3;
          case "millisecond":
            return Math.floor(days2 * 864e5) + milliseconds2;
          default:
            throw new Error("Unknown unit " + units);
        }
      }
    }
    function makeAs(alias) {
      return function () {
        return this.as(alias);
      };
    }
    var asMilliseconds = makeAs("ms"),
      asSeconds = makeAs("s"),
      asMinutes = makeAs("m"),
      asHours = makeAs("h"),
      asDays = makeAs("d"),
      asWeeks = makeAs("w"),
      asMonths = makeAs("M"),
      asQuarters = makeAs("Q"),
      asYears = makeAs("y"),
      valueOf$1 = asMilliseconds;
    function clone$1() {
      return createDuration(this);
    }
    function get$2(units) {
      units = normalizeUnits(units);
      return this.isValid() ? this[units + "s"]() : NaN;
    }
    function makeGetter(name) {
      return function () {
        return this.isValid() ? this._data[name] : NaN;
      };
    }
    var milliseconds = makeGetter("milliseconds"),
      seconds = makeGetter("seconds"),
      minutes = makeGetter("minutes"),
      hours = makeGetter("hours"),
      days = makeGetter("days"),
      months = makeGetter("months"),
      years = makeGetter("years");
    function weeks() {
      return absFloor(this.days() / 7);
    }
    var round = Math.round,
      thresholds = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11,
        // months to year
      };
    function substituteTimeAgo(
      string,
      number,
      withoutSuffix,
      isFuture,
      locale2
    ) {
      return locale2.relativeTime(
        number || 1,
        !!withoutSuffix,
        string,
        isFuture
      );
    }
    function relativeTime$1(
      posNegDuration,
      withoutSuffix,
      thresholds2,
      locale2
    ) {
      var duration = createDuration(posNegDuration).abs(),
        seconds2 = round(duration.as("s")),
        minutes2 = round(duration.as("m")),
        hours2 = round(duration.as("h")),
        days2 = round(duration.as("d")),
        months2 = round(duration.as("M")),
        weeks2 = round(duration.as("w")),
        years2 = round(duration.as("y")),
        a2 =
          (seconds2 <= thresholds2.ss && ["s", seconds2]) ||
          (seconds2 < thresholds2.s && ["ss", seconds2]) ||
          (minutes2 <= 1 && ["m"]) ||
          (minutes2 < thresholds2.m && ["mm", minutes2]) ||
          (hours2 <= 1 && ["h"]) ||
          (hours2 < thresholds2.h && ["hh", hours2]) ||
          (days2 <= 1 && ["d"]) ||
          (days2 < thresholds2.d && ["dd", days2]);
      if (thresholds2.w != null) {
        a2 =
          a2 ||
          (weeks2 <= 1 && ["w"]) ||
          (weeks2 < thresholds2.w && ["ww", weeks2]);
      }
      a2 = a2 ||
        (months2 <= 1 && ["M"]) ||
        (months2 < thresholds2.M && ["MM", months2]) ||
        (years2 <= 1 && ["y"]) || ["yy", years2];
      a2[2] = withoutSuffix;
      a2[3] = +posNegDuration > 0;
      a2[4] = locale2;
      return substituteTimeAgo.apply(null, a2);
    }
    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === void 0) {
        return round;
      }
      if (typeof roundingFunction === "function") {
        round = roundingFunction;
        return true;
      }
      return false;
    }
    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === void 0) {
        return false;
      }
      if (limit === void 0) {
        return thresholds[threshold];
      }
      thresholds[threshold] = limit;
      if (threshold === "s") {
        thresholds.ss = limit - 1;
      }
      return true;
    }
    function humanize(argWithSuffix, argThresholds) {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var withSuffix = false,
        th = thresholds,
        locale2,
        output;
      if (typeof argWithSuffix === "object") {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
      }
      if (typeof argWithSuffix === "boolean") {
        withSuffix = argWithSuffix;
      }
      if (typeof argThresholds === "object") {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
          th.ss = argThresholds.s - 1;
        }
      }
      locale2 = this.localeData();
      output = relativeTime$1(this, !withSuffix, th, locale2);
      if (withSuffix) {
        output = locale2.pastFuture(+this, output);
      }
      return locale2.postformat(output);
    }
    var abs$1 = Math.abs;
    function sign(x2) {
      return (x2 > 0) - (x2 < 0) || +x2;
    }
    function toISOString$1() {
      if (!this.isValid()) {
        return this.localeData().invalidDate();
      }
      var seconds2 = abs$1(this._milliseconds) / 1e3,
        days2 = abs$1(this._days),
        months2 = abs$1(this._months),
        minutes2,
        hours2,
        years2,
        s2,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;
      if (!total) {
        return "P0D";
      }
      minutes2 = absFloor(seconds2 / 60);
      hours2 = absFloor(minutes2 / 60);
      seconds2 %= 60;
      minutes2 %= 60;
      years2 = absFloor(months2 / 12);
      months2 %= 12;
      s2 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
      totalSign = total < 0 ? "-" : "";
      ymSign = sign(this._months) !== sign(total) ? "-" : "";
      daysSign = sign(this._days) !== sign(total) ? "-" : "";
      hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
      return (
        totalSign +
        "P" +
        (years2 ? ymSign + years2 + "Y" : "") +
        (months2 ? ymSign + months2 + "M" : "") +
        (days2 ? daysSign + days2 + "D" : "") +
        (hours2 || minutes2 || seconds2 ? "T" : "") +
        (hours2 ? hmsSign + hours2 + "H" : "") +
        (minutes2 ? hmsSign + minutes2 + "M" : "") +
        (seconds2 ? hmsSign + s2 + "S" : "")
      );
    }
    var proto$2 = Duration.prototype;
    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;
    proto$2.toIsoString = deprecate(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      toISOString$1
    );
    proto$2.lang = lang;
    addFormatToken("X", 0, 0, "unix");
    addFormatToken("x", 0, 0, "valueOf");
    addRegexToken("x", matchSigned);
    addRegexToken("X", matchTimestamp);
    addParseToken("X", function (input, array, config) {
      config._d = new Date(parseFloat(input) * 1e3);
    });
    addParseToken("x", function (input, array, config) {
      config._d = new Date(toInt(input));
    });
    //! moment.js
    hooks.version = "2.30.1";
    setHookCallback(createLocal);
    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;
    hooks.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      // <input type="datetime-local" />
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      // <input type="datetime-local" step="1" />
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      // <input type="datetime-local" step="0.001" />
      DATE: "YYYY-MM-DD",
      // <input type="date" />
      TIME: "HH:mm",
      // <input type="time" />
      TIME_SECONDS: "HH:mm:ss",
      // <input type="time" step="1" />
      TIME_MS: "HH:mm:ss.SSS",
      // <input type="time" step="0.001" />
      WEEK: "GGGG-[W]WW",
      // <input type="week" />
      MONTH: "YYYY-MM",
      // <input type="month" />
    };
    function validaCep(cep) {
      cep.addEventListener("input", (ev) => {
        let digits = ev.target.value.match(/\d/g);
        if (digits === null) {
          ev.target.value = "";
          return;
        }
        let newVal = "";
        for (let i2 = 0; i2 < (digits.length > 8 ? 8 : digits.length); i2++) {
          if (i2 == 5) {
            newVal += "-";
          }
          newVal += digits[i2];
        }
        ev.target.value = newVal;
        if (newVal.length === 9) {
          cep.setCustomValidity("");
        } else {
          cep.setCustomValidity("Campo inválido");
        }
      });
    }
    function maskCPF(cpf) {
      cpf = cpf.replace(/\D/g, "");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      return cpf;
    }
    function validaTelefone(e2) {
      var digits = e2.value.match(/\d/g);
      if (!digits) {
        e2.value = "";
        return null;
      }
      if (digits[0] == 0 || digits[1] == 0) {
        e2.value = "";
        return null;
      }
      let phone = digits[2] == 9 ? true : false;
      if (digits.length > phone ? 11 : 10) {
        digits = digits.slice(0, phone ? 11 : 10);
      }
      let newVal = "";
      for (let i2 = 0; i2 < digits.length; i2++) {
        switch (i2) {
          case 0:
            newVal += "(";
            break;
          case 2:
            newVal += ") ";
            break;
          case 3:
            if (phone) {
              newVal += " ";
            }
            break;
          case 6:
            if (!phone) {
              newVal += "-";
            }
            break;
          case 7:
            if (phone) {
              newVal += "-";
            }
            break;
        }
        newVal += digits[i2];
      }
      e2.value = newVal;
      switch (digits.length) {
        case 10:
          return "fixo";
        case 11:
          return "celular";
        default:
          return null;
      }
    }
    function formatDateInput(input) {
      input.addEventListener("input", (e2) => {
        let v2 = input.value.replaceAll(/\D/g, "");
        if (v2.length > 8) v2 = v2.substring(0, 8);
        let date = "";
        for (let i2 = 0; i2 < v2.length; i2++) {
          const c2 = v2[i2];
          if (i2 == 2 || i2 == 4) {
            date += "/";
            date += c2;
          } else {
            date += c2;
          }
        }
        input.value = date;
        var newDate = hooks(date, "DD/MM/YYYY");
        if (newDate.isValid() && v2.length == 8) {
          this.setDate();
          this.clearTBody();
          this.renderCalendar();
        }
      });
      input.addEventListener("focusout", (e2) => {
        const d2 = input.value;
        const n2 = d2.replaceAll(/\D/g, "");
        if (n2.length === 6) {
          const year = parseInt(n2.substring(4, 6));
          let century;
          if (year > 50) {
            century = "19";
          } else {
            century = "20";
          }
          input.value = d2.substring(0, 6) + century + d2.substring(6, 8);
        }
      });
    }
    function marcarFormPreenchido() {
      document.querySelectorAll("input.cep:not(.js-running)").forEach((el) => {
        validaCep(el);
      });
      document.querySelectorAll("input.cpf:not(.js-running)").forEach((el) => {
        el.addEventListener("input", function () {
          el.value = maskCPF(el.value);
        });
      });
      document.querySelectorAll("input.money").forEach((el) => {
        inputMoney(el);
      });
      document.querySelectorAll(".tel:not(.js-running)").forEach((el) => {
        el.addEventListener("input", function () {
          validaTelefone(el);
        });
        el.addEventListener("focusout", function () {
          validaTelefone(el);
          let type = validaTelefone(el);
          if (
            (type === "fixo" && el.value.length !== 14) ||
            (type === "celular" && el.value.length !== 16) ||
            !type
          ) {
            el.value = "";
          }
        });
      });
      document.querySelectorAll("input.date:not(.js-running)").forEach((el) => {
        el.classList.add("js-running");
        formatDateInput(el);
      });
      document.querySelectorAll("input,textarea").forEach((element) => {
        element.addEventListener("focus", function () {
          this.closest("div").classList.add("preenchido");
        });
        element.addEventListener("input", function () {
          this.closest("div").classList.remove("error");
          if (this.dataset.error) this.setCustomValidity("");
        });
        element.addEventListener("focusout", function () {
          if (this.value.length === 0) {
            this.closest("div").classList.remove("preenchido");
          }
        });
        element.addEventListener("invalid", function oninvalid() {
          setFieldError(this);
        });
      });
      document.querySelectorAll("select").forEach((el) => {
        el.addEventListener("input", function preenchido() {
          if (this.selectedIndex >= 0) {
            this.closest("div.container-select").classList.add("preenchido");
          }
        });
        el.addEventListener("invalid", function oninvalid() {
          if (this.selectedIndex >= 0) {
            setFieldError(this, "div.container-select");
          }
        });
      });
      setTimeout(() => {
        document
          .querySelectorAll("input:-webkit-autofill,textarea:-webkit-autofill")
          .forEach((element) => {
            element.closest("div").classList.add("preenchido");
          });
      }, 1e3);
    }
    function setFieldError(field, closest = "div") {
      field.closest(closest).classList.add("error");
      field.focus();
      if (field.dataset.error) field.setCustomValidity(field.dataset.error);
    }
    function Contato() {
      let forms = document.querySelectorAll(
        ".container-contato:not(.js-running)"
      );
      forms.forEach((formContato) => {
        formContato.classList.add("js-running");
        formContato
          .querySelector("form")
          .addEventListener("submit", function (e2) {
            e2.preventDefault();
            formContato
              .querySelector(".feedback-contato")
              .classList.add("d-none");
            formContato.querySelector(".submit-text").innerHTML =
              VARS.contactSending;
            formContato
              .querySelector(".bt-submit")
              .classList.add("pointer-events-none");
            fetch(VARS.contactURL, {
              method: "POST",
              headers: {
                "X-CSRF-Token": document.querySelector("meta[name=csrf-token]")
                  .content,
              },
              body: new FormData(formContato.querySelector("form")),
            })
              .then(function (data) {
                if (data.ok) {
                  formContato.classList.add("feedback-sucesso");
                  formContato
                    .querySelector(".feedback-contato")
                    .classList.remove("d-none");
                  formContato.querySelector(".feedback-contato").innerHTML =
                    VARS.contactSent;
                } else {
                  formContato.querySelector(".submit-text").innerHTML =
                    VARS.contactSend;
                  formContato.querySelector(".feedback-contato").innerHTML =
                    VARS.contactError;
                  formContato
                    .querySelector(".feedback-contato")
                    .classList.remove("d-none");
                  formContato
                    .querySelector(".bt-submit")
                    .classList.remove("pointer-events-none");
                }
              })
              .catch(function (error) {
                formContato.querySelector(".submit-text").innerHTML =
                  VARS.contactSend;
                formContato.querySelector(".feedback-contato").innerHTML =
                  VARS.contactError;
                formContato
                  .querySelector(".feedback-contato")
                  .classList.remove("d-none");
                formContato
                  .querySelector(".bt-submit")
                  .classList.remove("pointer-events-none");
              });
          });
      });
    }
    let watchList = [];
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const obj = watchList.find((item) => item.el == entry.target);
        if (obj.cb) {
          obj.cb(entry.isIntersecting, obj.el);
        } else {
          if (entry.isIntersecting) {
            if (obj.wasPlaying) {
              obj.el.play();
            }
          } else {
            if (!obj.el.paused) {
              obj.wasPlaying = true;
              obj.el.pause();
            } else {
              obj.wasPlaying = false;
            }
          }
        }
      });
    });
    document.addEventListener("pjax:send", () => {
      observer.disconnect();
      watchList = [];
    });
    function autoPause(element, callback) {
      let el = toElement(element);
      watchList.push({
        el,
        cb: callback,
        wasPlaying: false,
      });
      observer.observe(el);
    }
    function initVideo() {
      document
        .querySelectorAll("video[data-autoplay]:not(.js-video-running)")
        .forEach((el) => {
          el.classList.add("js-video-running");
          autoPause(el, (intersecting, el2) => {
            if (intersecting) {
              let promise = el2.play();
              if (promise !== void 0) {
                promise
                  .then((_2) => { })
                  .catch((error) => {
                    if (screen.isIphone) {
                      document.body.addEventListener(
                        "touchstart",
                        function () {
                          const videosOnScreen = document.querySelectorAll(
                            "video[data-autoplay],video[data-autopause],video[autoplay]"
                          );
                          videosOnScreen.forEach((element) => {
                            if (element.playing);
                            else {
                              element.play();
                              let promise2 = element.play();
                              if (promise2 !== void 0) {
                                promise2
                                  .then((_2) => { })
                                  .catch((error2) => {
                                    element.play();
                                    element.controls = true;
                                  });
                              }
                            }
                          });
                        },
                        {
                          once: true,
                        }
                      );
                    }
                  });
              }
            } else {
              el2.pause();
            }
          });
        });
      document
        .querySelectorAll("video[data-autopause]:not(.js-video-running)")
        .forEach((el) => {
          el.classList.add("js-video-running");
          autoPause(el);
        });
    }
    function viewportHeight() {
      if (screen.isMobile) {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        setTimeout(() => {
          let vh2 = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh2}px`);
        }, 1e3);
      }
    }
    function _assertThisInitialized(self2) {
      if (self2 === void 0) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      }
      return self2;
    }
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    /*!
     * GSAP 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var _config$1 = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: "",
      },
    },
      _defaults$1 = {
        duration: 0.5,
        overwrite: false,
        delay: 0,
      },
      _suppressOverwrites$1,
      _reverting$1,
      _context$2,
      _bigNum$1 = 1e8,
      _tinyNum = 1 / _bigNum$1,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString$2 = function _isString2(value) {
        return typeof value === "string";
      },
      _isFunction$2 = function _isFunction2(value) {
        return typeof value === "function";
      },
      _isNumber$1 = function _isNumber2(value) {
        return typeof value === "number";
      },
      _isUndefined = function _isUndefined2(value) {
        return typeof value === "undefined";
      },
      _isObject$1 = function _isObject2(value) {
        return typeof value === "object";
      },
      _isNotFalse = function _isNotFalse2(value) {
        return value !== false;
      },
      _windowExists$3 = function _windowExists2() {
        return typeof window !== "undefined";
      },
      _isFuncOrString = function _isFuncOrString2(value) {
        return _isFunction$2(value) || _isString$2(value);
      },
      _isTypedArray =
        (typeof ArrayBuffer === "function" && ArrayBuffer.isView) ||
        function () { },
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globalTimeline,
      _win$3,
      _coreInitted$3,
      _doc$3,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install2(scope) {
        return (_installScope = _merge(scope, _globals)) && gsap$3;
      },
      _missingPlugin = function _missingPlugin2(property, value) {
        return console.warn(
          "Invalid property",
          property,
          "set to",
          value,
          "Missing plugin? gsap.registerPlugin()"
        );
      },
      _warn = function _warn2(message, suppress) {
        return !suppress && console.warn(message);
      },
      _addGlobal = function _addGlobal2(name, obj) {
        return (
          (name &&
            (_globals[name] = obj) &&
            _installScope &&
            (_installScope[name] = obj)) ||
          _globals
        );
      },
      _emptyFunc = function _emptyFunc2() {
        return 0;
      },
      _startAtRevertConfig = {
        suppressEvents: true,
        isStart: true,
        kill: false,
      },
      _revertConfigNoKill = {
        suppressEvents: true,
        kill: false,
      },
      _revertConfig = {
        suppressEvents: true,
      },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness2(targets) {
        var target = targets[0],
          harnessPlugin,
          i2;
        _isObject$1(target) || _isFunction$2(target) || (targets = [targets]);
        if (!(harnessPlugin = (target._gsap || {}).harness)) {
          i2 = _harnessPlugins.length;
          while (i2-- && !_harnessPlugins[i2].targetTest(target)) { }
          harnessPlugin = _harnessPlugins[i2];
        }
        i2 = targets.length;
        while (i2--) {
          (targets[i2] &&
            (targets[i2]._gsap ||
              (targets[i2]._gsap = new GSCache(targets[i2], harnessPlugin)))) ||
            targets.splice(i2, 1);
        }
        return targets;
      },
      _getCache = function _getCache2(target) {
        return target._gsap || _harness(toArray(target))[0]._gsap;
      },
      _getProperty = function _getProperty2(target, property, v2) {
        return (v2 = target[property]) && _isFunction$2(v2)
          ? target[property]()
          : (_isUndefined(v2) &&
            target.getAttribute &&
            target.getAttribute(property)) ||
          v2;
      },
      _forEachName = function _forEachName2(names, func) {
        return (names = names.split(",")).forEach(func) || names;
      },
      _round$1 = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      },
      _roundPrecise = function _roundPrecise2(value) {
        return Math.round(value * 1e7) / 1e7 || 0;
      },
      _parseRelative = function _parseRelative2(start, value) {
        var operator = value.charAt(0),
          end = parseFloat(value.substr(2));
        start = parseFloat(start);
        return operator === "+"
          ? start + end
          : operator === "-"
            ? start - end
            : operator === "*"
              ? start * end
              : start / end;
      },
      _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
        var l2 = toFind.length,
          i2 = 0;
        for (; toSearch.indexOf(toFind[i2]) < 0 && ++i2 < l2;) { }
        return i2 < l2;
      },
      _lazyRender = function _lazyRender2() {
        var l2 = _lazyTweens.length,
          a2 = _lazyTweens.slice(0),
          i2,
          tween;
        _lazyLookup = {};
        _lazyTweens.length = 0;
        for (i2 = 0; i2 < l2; i2++) {
          tween = a2[i2];
          tween &&
            tween._lazy &&
            (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
        }
      },
      _lazySafeRender = function _lazySafeRender2(
        animation,
        time,
        suppressEvents,
        force
      ) {
        _lazyTweens.length && !_reverting$1 && _lazyRender();
        animation.render(
          time,
          suppressEvents,
          force ||
          (_reverting$1 &&
            time < 0 &&
            (animation._initted || animation._startAt))
        );
        _lazyTweens.length && !_reverting$1 && _lazyRender();
      },
      _numericIfPossible = function _numericIfPossible2(value) {
        var n2 = parseFloat(value);
        return (n2 || n2 === 0) &&
          (value + "").match(_delimitedValueExp).length < 2
          ? n2
          : _isString$2(value)
            ? value.trim()
            : value;
      },
      _passThrough$1 = function _passThrough2(p2) {
        return p2;
      },
      _setDefaults$1 = function _setDefaults2(obj, defaults2) {
        for (var p2 in defaults2) {
          p2 in obj || (obj[p2] = defaults2[p2]);
        }
        return obj;
      },
      _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
        return function (obj, defaults2) {
          for (var p2 in defaults2) {
            p2 in obj ||
              (p2 === "duration" && excludeDuration) ||
              p2 === "ease" ||
              (obj[p2] = defaults2[p2]);
          }
        };
      },
      _merge = function _merge2(base, toMerge) {
        for (var p2 in toMerge) {
          base[p2] = toMerge[p2];
        }
        return base;
      },
      _mergeDeep = function _mergeDeep2(base, toMerge) {
        for (var p2 in toMerge) {
          p2 !== "__proto__" &&
            p2 !== "constructor" &&
            p2 !== "prototype" &&
            (base[p2] = _isObject$1(toMerge[p2])
              ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2])
              : toMerge[p2]);
        }
        return base;
      },
      _copyExcluding = function _copyExcluding2(obj, excluding) {
        var copy = {},
          p2;
        for (p2 in obj) {
          p2 in excluding || (copy[p2] = obj[p2]);
        }
        return copy;
      },
      _inheritDefaults = function _inheritDefaults2(vars) {
        var parent2 = vars.parent || _globalTimeline,
          func = vars.keyframes
            ? _setKeyframeDefaults(_isArray(vars.keyframes))
            : _setDefaults$1;
        if (_isNotFalse(vars.inherit)) {
          while (parent2) {
            func(vars, parent2.vars.defaults);
            parent2 = parent2.parent || parent2._dp;
          }
        }
        return vars;
      },
      _arraysMatch = function _arraysMatch2(a1, a2) {
        var i2 = a1.length,
          match = i2 === a2.length;
        while (match && i2-- && a1[i2] === a2[i2]) { }
        return i2 < 0;
      },
      _addLinkedListItem = function _addLinkedListItem2(
        parent2,
        child,
        firstProp,
        lastProp,
        sortBy
      ) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = parent2[lastProp],
          t2;
        if (sortBy) {
          t2 = child[sortBy];
          while (prev && prev[sortBy] > t2) {
            prev = prev._prev;
          }
        }
        if (prev) {
          child._next = prev._next;
          prev._next = child;
        } else {
          child._next = parent2[firstProp];
          parent2[firstProp] = child;
        }
        if (child._next) {
          child._next._prev = child;
        } else {
          parent2[lastProp] = child;
        }
        child._prev = prev;
        child.parent = child._dp = parent2;
        return child;
      },
      _removeLinkedListItem = function _removeLinkedListItem2(
        parent2,
        child,
        firstProp,
        lastProp
      ) {
        if (firstProp === void 0) {
          firstProp = "_first";
        }
        if (lastProp === void 0) {
          lastProp = "_last";
        }
        var prev = child._prev,
          next = child._next;
        if (prev) {
          prev._next = next;
        } else if (parent2[firstProp] === child) {
          parent2[firstProp] = next;
        }
        if (next) {
          next._prev = prev;
        } else if (parent2[lastProp] === child) {
          parent2[lastProp] = prev;
        }
        child._next = child._prev = child.parent = null;
      },
      _removeFromParent = function _removeFromParent2(
        child,
        onlyIfParentHasAutoRemove
      ) {
        child.parent &&
          (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) &&
          child.parent.remove &&
          child.parent.remove(child);
        child._act = 0;
      },
      _uncache = function _uncache2(animation, child) {
        if (
          animation &&
          (!child || child._end > animation._dur || child._start < 0)
        ) {
          var a2 = animation;
          while (a2) {
            a2._dirty = 1;
            a2 = a2.parent;
          }
        }
        return animation;
      },
      _recacheAncestors = function _recacheAncestors2(animation) {
        var parent2 = animation.parent;
        while (parent2 && parent2.parent) {
          parent2._dirty = 1;
          parent2.totalDuration();
          parent2 = parent2.parent;
        }
        return animation;
      },
      _rewindStartAt = function _rewindStartAt2(
        tween,
        totalTime,
        suppressEvents,
        force
      ) {
        return (
          tween._startAt &&
          (_reverting$1
            ? tween._startAt.revert(_revertConfigNoKill)
            : (tween.vars.immediateRender && !tween.vars.autoRevert) ||
            tween._startAt.render(totalTime, true, force))
        );
      },
      _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
        return (
          !animation ||
          (animation._ts && _hasNoPausedAncestors2(animation.parent))
        );
      },
      _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
        return animation._repeat
          ? _animationCycle(
            animation._tTime,
            (animation = animation.duration() + animation._rDelay)
          ) * animation
          : 0;
      },
      _animationCycle = function _animationCycle2(tTime, cycleDuration) {
        var whole = Math.floor((tTime /= cycleDuration));
        return tTime && whole === tTime ? whole - 1 : whole;
      },
      _parentToChildTotalTime = function _parentToChildTotalTime2(
        parentTime,
        child
      ) {
        return (
          (parentTime - child._start) * child._ts +
          (child._ts >= 0
            ? 0
            : child._dirty
              ? child.totalDuration()
              : child._tDur)
        );
      },
      _setEnd = function _setEnd2(animation) {
        return (animation._end = _roundPrecise(
          animation._start +
          (animation._tDur /
            Math.abs(animation._ts || animation._rts || _tinyNum) || 0)
        ));
      },
      _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
        var parent2 = animation._dp;
        if (parent2 && parent2.smoothChildTiming && animation._ts) {
          animation._start = _roundPrecise(
            parent2._time -
            (animation._ts > 0
              ? totalTime / animation._ts
              : ((animation._dirty
                ? animation.totalDuration()
                : animation._tDur) -
                totalTime) /
              -animation._ts)
          );
          _setEnd(animation);
          parent2._dirty || _uncache(parent2, animation);
        }
        return animation;
      },
      _postAddChecks = function _postAddChecks2(timeline, child) {
        var t2;
        if (
          child._time ||
          (!child._dur && child._initted) ||
          (child._start < timeline._time && (child._dur || !child.add))
        ) {
          t2 = _parentToChildTotalTime(timeline.rawTime(), child);
          if (
            !child._dur ||
            _clamp$1(0, child.totalDuration(), t2) - child._tTime > _tinyNum
          ) {
            child.render(t2, true);
          }
        }
        if (
          _uncache(timeline, child)._dp &&
          timeline._initted &&
          timeline._time >= timeline._dur &&
          timeline._ts
        ) {
          if (timeline._dur < timeline.duration()) {
            t2 = timeline;
            while (t2._dp) {
              t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
              t2 = t2._dp;
            }
          }
          timeline._zTime = -_tinyNum;
        }
      },
      _addToTimeline = function _addToTimeline2(
        timeline,
        child,
        position,
        skipChecks
      ) {
        child.parent && _removeFromParent(child);
        child._start = _roundPrecise(
          (_isNumber$1(position)
            ? position
            : position || timeline !== _globalTimeline
              ? _parsePosition$1(timeline, position, child)
              : timeline._time) + child._delay
        );
        child._end = _roundPrecise(
          child._start +
          (child.totalDuration() / Math.abs(child.timeScale()) || 0)
        );
        _addLinkedListItem(
          timeline,
          child,
          "_first",
          "_last",
          timeline._sort ? "_start" : 0
        );
        _isFromOrFromStart(child) || (timeline._recent = child);
        skipChecks || _postAddChecks(timeline, child);
        timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
        return timeline;
      },
      _scrollTrigger = function _scrollTrigger2(animation, trigger) {
        return (
          (_globals.ScrollTrigger ||
            _missingPlugin("scrollTrigger", trigger)) &&
          _globals.ScrollTrigger.create(trigger, animation)
        );
      },
      _attemptInitTween = function _attemptInitTween2(
        tween,
        time,
        force,
        suppressEvents,
        tTime
      ) {
        _initTween(tween, time, tTime);
        if (!tween._initted) {
          return 1;
        }
        if (
          !force &&
          tween._pt &&
          !_reverting$1 &&
          ((tween._dur && tween.vars.lazy !== false) ||
            (!tween._dur && tween.vars.lazy)) &&
          _lastRenderedFrame !== _ticker.frame
        ) {
          _lazyTweens.push(tween);
          tween._lazy = [tTime, suppressEvents];
          return 1;
        }
      },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(
        _ref
      ) {
        var parent2 = _ref.parent;
        return (
          parent2 &&
          parent2._ts &&
          parent2._initted &&
          !parent2._lock &&
          (parent2.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent2))
        );
      },
      _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
        var data = _ref2.data;
        return data === "isFromStart" || data === "isStart";
      },
      _renderZeroDurationTween = function _renderZeroDurationTween2(
        tween,
        totalTime,
        suppressEvents,
        force
      ) {
        var prevRatio = tween.ratio,
          ratio =
            totalTime < 0 ||
              (!totalTime &&
                ((!tween._start &&
                  _parentPlayheadIsBeforeStart(tween) &&
                  !(!tween._initted && _isFromOrFromStart(tween))) ||
                  ((tween._ts < 0 || tween._dp._ts < 0) &&
                    !_isFromOrFromStart(tween))))
              ? 0
              : 1,
          repeatDelay = tween._rDelay,
          tTime = 0,
          pt2,
          iteration,
          prevIteration;
        if (repeatDelay && tween._repeat) {
          tTime = _clamp$1(0, tween._tDur, totalTime);
          iteration = _animationCycle(tTime, repeatDelay);
          tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
          if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
          }
        }
        if (
          ratio !== prevRatio ||
          _reverting$1 ||
          force ||
          tween._zTime === _tinyNum ||
          (!totalTime && tween._zTime)
        ) {
          if (
            !tween._initted &&
            _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)
          ) {
            return;
          }
          prevIteration = tween._zTime;
          tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
          suppressEvents || (suppressEvents = totalTime && !prevIteration);
          tween.ratio = ratio;
          tween._from && (ratio = 1 - ratio);
          tween._time = 0;
          tween._tTime = tTime;
          pt2 = tween._pt;
          while (pt2) {
            pt2.r(ratio, pt2.d);
            pt2 = pt2._next;
          }
          totalTime < 0 &&
            _rewindStartAt(tween, totalTime, suppressEvents, true);
          tween._onUpdate && !suppressEvents && _callback$1(tween, "onUpdate");
          tTime &&
            tween._repeat &&
            !suppressEvents &&
            tween.parent &&
            _callback$1(tween, "onRepeat");
          if (
            (totalTime >= tween._tDur || totalTime < 0) &&
            tween.ratio === ratio
          ) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting$1) {
              _callback$1(
                tween,
                ratio ? "onComplete" : "onReverseComplete",
                true
              );
              tween._prom && tween._prom();
            }
          }
        } else if (!tween._zTime) {
          tween._zTime = totalTime;
        }
      },
      _findNextPauseTween = function _findNextPauseTween2(
        animation,
        prevTime,
        time
      ) {
        var child;
        if (time > prevTime) {
          child = animation._first;
          while (child && child._start <= time) {
            if (child.data === "isPause" && child._start > prevTime) {
              return child;
            }
            child = child._next;
          }
        } else {
          child = animation._last;
          while (child && child._start >= time) {
            if (child.data === "isPause" && child._start < prevTime) {
              return child;
            }
            child = child._prev;
          }
        }
      },
      _setDuration = function _setDuration2(
        animation,
        duration,
        skipUncache,
        leavePlayhead
      ) {
        var repeat = animation._repeat,
          dur = _roundPrecise(duration) || 0,
          totalProgress = animation._tTime / animation._tDur;
        totalProgress &&
          !leavePlayhead &&
          (animation._time *= dur / animation._dur);
        animation._dur = dur;
        animation._tDur = !repeat
          ? dur
          : repeat < 0
            ? 1e10
            : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
        totalProgress > 0 &&
          !leavePlayhead &&
          _alignPlayhead(
            animation,
            (animation._tTime = animation._tDur * totalProgress)
          );
        animation.parent && _setEnd(animation);
        skipUncache || _uncache(animation.parent, animation);
        return animation;
      },
      _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
        return animation instanceof Timeline
          ? _uncache(animation)
          : _setDuration(animation, animation._dur);
      },
      _zeroPosition = {
        _start: 0,
        endTime: _emptyFunc,
        totalDuration: _emptyFunc,
      },
      _parsePosition$1 = function _parsePosition2(
        animation,
        position,
        percentAnimation
      ) {
        var labels = animation.labels,
          recent = animation._recent || _zeroPosition,
          clippedDuration =
            animation.duration() >= _bigNum$1
              ? recent.endTime(false)
              : animation._dur,
          i2,
          offset2,
          isPercent;
        if (_isString$2(position) && (isNaN(position) || position in labels)) {
          offset2 = position.charAt(0);
          isPercent = position.substr(-1) === "%";
          i2 = position.indexOf("=");
          if (offset2 === "<" || offset2 === ">") {
            i2 >= 0 && (position = position.replace(/=/, ""));
            return (
              (offset2 === "<"
                ? recent._start
                : recent.endTime(recent._repeat >= 0)) +
              (parseFloat(position.substr(1)) || 0) *
              (isPercent
                ? (i2 < 0 ? recent : percentAnimation).totalDuration() / 100
                : 1)
            );
          }
          if (i2 < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
          }
          offset2 = parseFloat(
            position.charAt(i2 - 1) + position.substr(i2 + 1)
          );
          if (isPercent && percentAnimation) {
            offset2 =
              (offset2 / 100) *
              (_isArray(percentAnimation)
                ? percentAnimation[0]
                : percentAnimation
              ).totalDuration();
          }
          return i2 > 1
            ? _parsePosition2(
              animation,
              position.substr(0, i2 - 1),
              percentAnimation
            ) + offset2
            : clippedDuration + offset2;
        }
        return position == null ? clippedDuration : +position;
      },
      _createTweenType = function _createTweenType2(type, params, timeline) {
        var isLegacy = _isNumber$1(params[1]),
          varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
          vars = params[varsIndex],
          irVars,
          parent2;
        isLegacy && (vars.duration = params[1]);
        vars.parent = timeline;
        if (type) {
          irVars = vars;
          parent2 = timeline;
          while (parent2 && !("immediateRender" in irVars)) {
            irVars = parent2.vars.defaults || {};
            parent2 = _isNotFalse(parent2.vars.inherit) && parent2.parent;
          }
          vars.immediateRender = _isNotFalse(irVars.immediateRender);
          type < 2
            ? (vars.runBackwards = 1)
            : (vars.startAt = params[varsIndex - 1]);
        }
        return new Tween(params[0], vars, params[varsIndex + 1]);
      },
      _conditionalReturn = function _conditionalReturn2(value, func) {
        return value || value === 0 ? func(value) : func;
      },
      _clamp$1 = function _clamp2(min2, max2, value) {
        return value < min2 ? min2 : value > max2 ? max2 : value;
      },
      getUnit = function getUnit2(value, v2) {
        return !_isString$2(value) || !(v2 = _unitExp.exec(value)) ? "" : v2[1];
      },
      clamp = function clamp2(min2, max2, value) {
        return _conditionalReturn(value, function (v2) {
          return _clamp$1(min2, max2, v2);
        });
      },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike2(value, nonEmpty) {
        return (
          value &&
          _isObject$1(value) &&
          "length" in value &&
          ((!nonEmpty && !value.length) ||
            (value.length - 1 in value && _isObject$1(value[0]))) &&
          !value.nodeType &&
          value !== _win$3
        );
      },
      _flatten = function _flatten2(ar, leaveStrings, accumulator) {
        if (accumulator === void 0) {
          accumulator = [];
        }
        return (
          ar.forEach(function (value) {
            var _accumulator;
            return (_isString$2(value) && !leaveStrings) ||
              _isArrayLike(value, 1)
              ? (_accumulator = accumulator).push.apply(
                _accumulator,
                toArray(value)
              )
              : accumulator.push(value);
          }) || accumulator
        );
      },
      toArray = function toArray2(value, scope, leaveStrings) {
        return _context$2 && !scope && _context$2.selector
          ? _context$2.selector(value)
          : _isString$2(value) && !leaveStrings && (_coreInitted$3 || !_wake())
            ? _slice.call((scope || _doc$3).querySelectorAll(value), 0)
            : _isArray(value)
              ? _flatten(value, leaveStrings)
              : _isArrayLike(value)
                ? _slice.call(value, 0)
                : value
                  ? [value]
                  : [];
      },
      selector = function selector2(value) {
        value = toArray(value)[0] || _warn("Invalid scope") || {};
        return function (v2) {
          var el = value.current || value.nativeElement || value;
          return toArray(
            v2,
            el.querySelectorAll
              ? el
              : el === value
                ? _warn("Invalid scope") || _doc$3.createElement("div")
                : value
          );
        };
      },
      shuffle = function shuffle2(a2) {
        return a2.sort(function () {
          return 0.5 - Math.random();
        });
      },
      distribute = function distribute2(v2) {
        if (_isFunction$2(v2)) {
          return v2;
        }
        var vars = _isObject$1(v2)
          ? v2
          : {
            each: v2,
          },
          ease = _parseEase(vars.ease),
          from2 = vars.from || 0,
          base = parseFloat(vars.base) || 0,
          cache = {},
          isDecimal = from2 > 0 && from2 < 1,
          ratios = isNaN(from2) || isDecimal,
          axis = vars.axis,
          ratioX = from2,
          ratioY = from2;
        if (_isString$2(from2)) {
          ratioX = ratioY =
            {
              center: 0.5,
              edges: 0.5,
              end: 1,
            }[from2] || 0;
        } else if (!isDecimal && ratios) {
          ratioX = from2[0];
          ratioY = from2[1];
        }
        return function (i2, target, a2) {
          var l2 = (a2 || vars).length,
            distances = cache[l2],
            originX,
            originY,
            x2,
            y2,
            d2,
            j2,
            max2,
            min2,
            wrapAt;
          if (!distances) {
            wrapAt =
              vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum$1])[1];
            if (!wrapAt) {
              max2 = -_bigNum$1;
              while (
                max2 < (max2 = a2[wrapAt++].getBoundingClientRect().left) &&
                wrapAt < l2
              ) { }
              wrapAt < l2 && wrapAt--;
            }
            distances = cache[l2] = [];
            originX = ratios
              ? Math.min(wrapAt, l2) * ratioX - 0.5
              : from2 % wrapAt;
            originY =
              wrapAt === _bigNum$1
                ? 0
                : ratios
                  ? (l2 * ratioY) / wrapAt - 0.5
                  : (from2 / wrapAt) | 0;
            max2 = 0;
            min2 = _bigNum$1;
            for (j2 = 0; j2 < l2; j2++) {
              x2 = (j2 % wrapAt) - originX;
              y2 = originY - ((j2 / wrapAt) | 0);
              distances[j2] = d2 = !axis
                ? _sqrt(x2 * x2 + y2 * y2)
                : Math.abs(axis === "y" ? y2 : x2);
              d2 > max2 && (max2 = d2);
              d2 < min2 && (min2 = d2);
            }
            from2 === "random" && shuffle(distances);
            distances.max = max2 - min2;
            distances.min = min2;
            distances.v = l2 =
              (parseFloat(vars.amount) ||
                parseFloat(vars.each) *
                (wrapAt > l2
                  ? l2 - 1
                  : !axis
                    ? Math.max(wrapAt, l2 / wrapAt)
                    : axis === "y"
                      ? l2 / wrapAt
                      : wrapAt) ||
                0) * (from2 === "edges" ? -1 : 1);
            distances.b = l2 < 0 ? base - l2 : base;
            distances.u = getUnit(vars.amount || vars.each) || 0;
            ease = ease && l2 < 0 ? _invertEase(ease) : ease;
          }
          l2 = (distances[i2] - distances.min) / distances.max || 0;
          return (
            _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) +
            distances.u
          );
        };
      },
      _roundModifier = function _roundModifier2(v2) {
        var p2 = Math.pow(10, ((v2 + "").split(".")[1] || "").length);
        return function (raw) {
          var n2 = _roundPrecise(Math.round(parseFloat(raw) / v2) * v2 * p2);
          return (n2 - (n2 % 1)) / p2 + (_isNumber$1(raw) ? 0 : getUnit(raw));
        };
      },
      snap = function snap2(snapTo, value) {
        var isArray2 = _isArray(snapTo),
          radius,
          is2D;
        if (!isArray2 && _isObject$1(snapTo)) {
          radius = isArray2 = snapTo.radius || _bigNum$1;
          if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if ((is2D = !_isNumber$1(snapTo[0]))) {
              radius *= radius;
            }
          } else {
            snapTo = _roundModifier(snapTo.increment);
          }
        }
        return _conditionalReturn(
          value,
          !isArray2
            ? _roundModifier(snapTo)
            : _isFunction$2(snapTo)
              ? function (raw) {
                is2D = snapTo(raw);
                return Math.abs(is2D - raw) <= radius ? is2D : raw;
              }
              : function (raw) {
                var x2 = parseFloat(is2D ? raw.x : raw),
                  y2 = parseFloat(is2D ? raw.y : 0),
                  min2 = _bigNum$1,
                  closest = 0,
                  i2 = snapTo.length,
                  dx,
                  dy;
                while (i2--) {
                  if (is2D) {
                    dx = snapTo[i2].x - x2;
                    dy = snapTo[i2].y - y2;
                    dx = dx * dx + dy * dy;
                  } else {
                    dx = Math.abs(snapTo[i2] - x2);
                  }
                  if (dx < min2) {
                    min2 = dx;
                    closest = i2;
                  }
                }
                closest = !radius || min2 <= radius ? snapTo[closest] : raw;
                return is2D || closest === raw || _isNumber$1(raw)
                  ? closest
                  : closest + getUnit(raw);
              }
        );
      },
      random = function random2(min2, max2, roundingIncrement, returnFunction) {
        return _conditionalReturn(
          _isArray(min2)
            ? !max2
            : roundingIncrement === true
              ? !!(roundingIncrement = 0)
              : !returnFunction,
          function () {
            return _isArray(min2)
              ? min2[~~(Math.random() * min2.length)]
              : (roundingIncrement = roundingIncrement || 1e-5) &&
              (returnFunction =
                roundingIncrement < 1
                  ? Math.pow(10, (roundingIncrement + "").length - 2)
                  : 1) &&
              Math.floor(
                Math.round(
                  (min2 -
                    roundingIncrement / 2 +
                    Math.random() *
                    (max2 - min2 + roundingIncrement * 0.99)) /
                  roundingIncrement
                ) *
                roundingIncrement *
                returnFunction
              ) / returnFunction;
          }
        );
      },
      pipe = function pipe2() {
        for (
          var _len = arguments.length, functions = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          functions[_key] = arguments[_key];
        }
        return function (value) {
          return functions.reduce(function (v2, f2) {
            return f2(v2);
          }, value);
        };
      },
      unitize = function unitize2(func, unit) {
        return function (value) {
          return func(parseFloat(value)) + (unit || getUnit(value));
        };
      },
      normalize = function normalize2(min2, max2, value) {
        return mapRange(min2, max2, 0, 1, value);
      },
      _wrapArray = function _wrapArray2(a2, wrapper, value) {
        return _conditionalReturn(value, function (index) {
          return a2[~~wrapper(index)];
        });
      },
      wrap = function wrap2(min2, max2, value) {
        var range = max2 - min2;
        return _isArray(min2)
          ? _wrapArray(min2, wrap2(0, min2.length), max2)
          : _conditionalReturn(value, function (value2) {
            return ((range + ((value2 - min2) % range)) % range) + min2;
          });
      },
      wrapYoyo = function wrapYoyo2(min2, max2, value) {
        var range = max2 - min2,
          total = range * 2;
        return _isArray(min2)
          ? _wrapArray(min2, wrapYoyo2(0, min2.length - 1), max2)
          : _conditionalReturn(value, function (value2) {
            value2 = (total + ((value2 - min2) % total)) % total || 0;
            return min2 + (value2 > range ? total - value2 : value2);
          });
      },
      _replaceRandom = function _replaceRandom2(value) {
        var prev = 0,
          s2 = "",
          i2,
          nums,
          end,
          isArray2;
        while (~(i2 = value.indexOf("random(", prev))) {
          end = value.indexOf(")", i2);
          isArray2 = value.charAt(i2 + 7) === "[";
          nums = value
            .substr(i2 + 7, end - i2 - 7)
            .match(isArray2 ? _delimitedValueExp : _strictNumExp);
          s2 +=
            value.substr(prev, i2 - prev) +
            random(
              isArray2 ? nums : +nums[0],
              isArray2 ? 0 : +nums[1],
              +nums[2] || 1e-5
            );
          prev = end + 1;
        }
        return s2 + value.substr(prev, value.length - prev);
      },
      mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
        var inRange = inMax - inMin,
          outRange = outMax - outMin;
        return _conditionalReturn(value, function (value2) {
          return outMin + (((value2 - inMin) / inRange) * outRange || 0);
        });
      },
      interpolate = function interpolate2(start, end, progress, mutate) {
        var func = isNaN(start + end)
          ? 0
          : function (p3) {
            return (1 - p3) * start + p3 * end;
          };
        if (!func) {
          var isString2 = _isString$2(start),
            master = {},
            p2,
            i2,
            interpolators,
            l2,
            il;
          progress === true && (mutate = 1) && (progress = null);
          if (isString2) {
            start = {
              p: start,
            };
            end = {
              p: end,
            };
          } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l2 = start.length;
            il = l2 - 2;
            for (i2 = 1; i2 < l2; i2++) {
              interpolators.push(interpolate2(start[i2 - 1], start[i2]));
            }
            l2--;
            func = function func2(p3) {
              p3 *= l2;
              var i3 = Math.min(il, ~~p3);
              return interpolators[i3](p3 - i3);
            };
            progress = end;
          } else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
          }
          if (!interpolators) {
            for (p2 in end) {
              _addPropTween.call(master, start, p2, "get", end[p2]);
            }
            func = function func2(p3) {
              return (
                _renderPropTweens(p3, master) || (isString2 ? start.p : start)
              );
            };
          }
        }
        return _conditionalReturn(progress, func);
      },
      _getLabelInDirection = function _getLabelInDirection2(
        timeline,
        fromTime,
        backward
      ) {
        var labels = timeline.labels,
          min2 = _bigNum$1,
          p2,
          distance,
          label;
        for (p2 in labels) {
          distance = labels[p2] - fromTime;
          if (
            distance < 0 === !!backward &&
            distance &&
            min2 > (distance = Math.abs(distance))
          ) {
            label = p2;
            min2 = distance;
          }
        }
        return label;
      },
      _callback$1 = function _callback2(animation, type, executeLazyFirst) {
        var v2 = animation.vars,
          callback = v2[type],
          prevContext = _context$2,
          context = animation._ctx,
          params,
          scope,
          result;
        if (!callback) {
          return;
        }
        params = v2[type + "Params"];
        scope = v2.callbackScope || animation;
        executeLazyFirst && _lazyTweens.length && _lazyRender();
        context && (_context$2 = context);
        result = params ? callback.apply(scope, params) : callback.call(scope);
        _context$2 = prevContext;
        return result;
      },
      _interrupt = function _interrupt2(animation) {
        _removeFromParent(animation);
        animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting$1);
        animation.progress() < 1 && _callback$1(animation, "onInterrupt");
        return animation;
      },
      _quickTween,
      _registerPluginQueue = [],
      _createPlugin = function _createPlugin2(config) {
        if (!config) return;
        config = (!config.name && config["default"]) || config;
        if (_windowExists$3() || config.headless) {
          var name = config.name,
            isFunc = _isFunction$2(config),
            Plugin =
              name && !isFunc && config.init
                ? function () {
                  this._props = [];
                }
                : config,
            instanceDefaults = {
              init: _emptyFunc,
              render: _renderPropTweens,
              add: _addPropTween,
              kill: _killPropTweensOf,
              modifier: _addPluginModifier,
              rawVars: 0,
            },
            statics = {
              targetTest: 0,
              get: 0,
              getSetter: _getSetter,
              aliases: {},
              register: 0,
            };
          _wake();
          if (config !== Plugin) {
            if (_plugins[name]) {
              return;
            }
            _setDefaults$1(
              Plugin,
              _setDefaults$1(_copyExcluding(config, instanceDefaults), statics)
            );
            _merge(
              Plugin.prototype,
              _merge(instanceDefaults, _copyExcluding(config, statics))
            );
            _plugins[(Plugin.prop = name)] = Plugin;
            if (config.targetTest) {
              _harnessPlugins.push(Plugin);
              _reservedProps[name] = 1;
            }
            name =
              (name === "css"
                ? "CSS"
                : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
          }
          _addGlobal(name, Plugin);
          config.register && config.register(gsap$3, Plugin, PropTween);
        } else {
          _registerPluginQueue.push(config);
        }
      },
      _255 = 255,
      _colorLookup = {
        aqua: [0, _255, _255],
        lime: [0, _255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, _255],
        navy: [0, 0, 128],
        white: [_255, _255, _255],
        olive: [128, 128, 0],
        yellow: [_255, _255, 0],
        orange: [_255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [_255, 0, 0],
        pink: [_255, 192, 203],
        cyan: [0, _255, _255],
        transparent: [_255, _255, _255, 0],
      },
      _hue = function _hue2(h2, m1, m2) {
        h2 += h2 < 0 ? 1 : h2 > 1 ? -1 : 0;
        return (
          ((h2 * 6 < 1
            ? m1 + (m2 - m1) * h2 * 6
            : h2 < 0.5
              ? m2
              : h2 * 3 < 2
                ? m1 + (m2 - m1) * (2 / 3 - h2) * 6
                : m1) *
            _255 +
            0.5) |
          0
        );
      },
      splitColor = function splitColor2(v2, toHSL, forceAlpha) {
        var a2 = !v2
          ? _colorLookup.black
          : _isNumber$1(v2)
            ? [v2 >> 16, (v2 >> 8) & _255, v2 & _255]
            : 0,
          r2,
          g2,
          b2,
          h2,
          s2,
          l2,
          max2,
          min2,
          d2,
          wasHSL;
        if (!a2) {
          if (v2.substr(-1) === ",") {
            v2 = v2.substr(0, v2.length - 1);
          }
          if (_colorLookup[v2]) {
            a2 = _colorLookup[v2];
          } else if (v2.charAt(0) === "#") {
            if (v2.length < 6) {
              r2 = v2.charAt(1);
              g2 = v2.charAt(2);
              b2 = v2.charAt(3);
              v2 =
                "#" +
                r2 +
                r2 +
                g2 +
                g2 +
                b2 +
                b2 +
                (v2.length === 5 ? v2.charAt(4) + v2.charAt(4) : "");
            }
            if (v2.length === 9) {
              a2 = parseInt(v2.substr(1, 6), 16);
              return [
                a2 >> 16,
                (a2 >> 8) & _255,
                a2 & _255,
                parseInt(v2.substr(7), 16) / 255,
              ];
            }
            v2 = parseInt(v2.substr(1), 16);
            a2 = [v2 >> 16, (v2 >> 8) & _255, v2 & _255];
          } else if (v2.substr(0, 3) === "hsl") {
            a2 = wasHSL = v2.match(_strictNumExp);
            if (!toHSL) {
              h2 = (+a2[0] % 360) / 360;
              s2 = +a2[1] / 100;
              l2 = +a2[2] / 100;
              g2 = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
              r2 = l2 * 2 - g2;
              a2.length > 3 && (a2[3] *= 1);
              a2[0] = _hue(h2 + 1 / 3, r2, g2);
              a2[1] = _hue(h2, r2, g2);
              a2[2] = _hue(h2 - 1 / 3, r2, g2);
            } else if (~v2.indexOf("=")) {
              a2 = v2.match(_numExp);
              forceAlpha && a2.length < 4 && (a2[3] = 1);
              return a2;
            }
          } else {
            a2 = v2.match(_strictNumExp) || _colorLookup.transparent;
          }
          a2 = a2.map(Number);
        }
        if (toHSL && !wasHSL) {
          r2 = a2[0] / _255;
          g2 = a2[1] / _255;
          b2 = a2[2] / _255;
          max2 = Math.max(r2, g2, b2);
          min2 = Math.min(r2, g2, b2);
          l2 = (max2 + min2) / 2;
          if (max2 === min2) {
            h2 = s2 = 0;
          } else {
            d2 = max2 - min2;
            s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
            h2 =
              max2 === r2
                ? (g2 - b2) / d2 + (g2 < b2 ? 6 : 0)
                : max2 === g2
                  ? (b2 - r2) / d2 + 2
                  : (r2 - g2) / d2 + 4;
            h2 *= 60;
          }
          a2[0] = ~~(h2 + 0.5);
          a2[1] = ~~(s2 * 100 + 0.5);
          a2[2] = ~~(l2 * 100 + 0.5);
        }
        forceAlpha && a2.length < 4 && (a2[3] = 1);
        return a2;
      },
      _colorOrderData = function _colorOrderData2(v2) {
        var values = [],
          c2 = [],
          i2 = -1;
        v2.split(_colorExp).forEach(function (v3) {
          var a2 = v3.match(_numWithUnitExp) || [];
          values.push.apply(values, a2);
          c2.push((i2 += a2.length + 1));
        });
        values.c = c2;
        return values;
      },
      _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
        var result = "",
          colors = (s2 + result).match(_colorExp),
          type = toHSL ? "hsla(" : "rgba(",
          i2 = 0,
          c2,
          shell,
          d2,
          l2;
        if (!colors) {
          return s2;
        }
        colors = colors.map(function (color) {
          return (
            (color = splitColor(color, toHSL, 1)) &&
            type +
            (toHSL
              ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3]
              : color.join(",")) +
            ")"
          );
        });
        if (orderMatchData) {
          d2 = _colorOrderData(s2);
          c2 = orderMatchData.c;
          if (c2.join(result) !== d2.c.join(result)) {
            shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
            l2 = shell.length - 1;
            for (; i2 < l2; i2++) {
              result +=
                shell[i2] +
                (~c2.indexOf(i2)
                  ? colors.shift() || type + "0,0,0,0)"
                  : (d2.length
                    ? d2
                    : colors.length
                      ? colors
                      : orderMatchData
                  ).shift());
            }
          }
        }
        if (!shell) {
          shell = s2.split(_colorExp);
          l2 = shell.length - 1;
          for (; i2 < l2; i2++) {
            result += shell[i2] + colors[i2];
          }
        }
        return result + shell[l2];
      },
      _colorExp = (function () {
        var s2 =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
          p2;
        for (p2 in _colorLookup) {
          s2 += "|" + p2 + "\\b";
        }
        return new RegExp(s2 + ")", "gi");
      })(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter2(a2) {
        var combined = a2.join(" "),
          toHSL;
        _colorExp.lastIndex = 0;
        if (_colorExp.test(combined)) {
          toHSL = _hslExp.test(combined);
          a2[1] = _formatColors(a2[1], toHSL);
          a2[0] = _formatColors(a2[0], toHSL, _colorOrderData(a2[1]));
          return true;
        }
      },
      _tickerActive,
      _ticker = (function () {
        var _getTime2 = Date.now,
          _lagThreshold = 500,
          _adjustedLag = 33,
          _startTime = _getTime2(),
          _lastUpdate = _startTime,
          _gap = 1e3 / 240,
          _nextTime = _gap,
          _listeners2 = [],
          _id,
          _req,
          _raf,
          _self,
          _delta,
          _i2,
          _tick = function _tick2(v2) {
            var elapsed = _getTime2() - _lastUpdate,
              manual = v2 === true,
              overlap,
              dispatch,
              time,
              frame;
            (elapsed > _lagThreshold || elapsed < 0) &&
              (_startTime += elapsed - _adjustedLag);
            _lastUpdate += elapsed;
            time = _lastUpdate - _startTime;
            overlap = time - _nextTime;
            if (overlap > 0 || manual) {
              frame = ++_self.frame;
              _delta = time - _self.time * 1e3;
              _self.time = time = time / 1e3;
              _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
              dispatch = 1;
            }
            manual || (_id = _req(_tick2));
            if (dispatch) {
              for (_i2 = 0; _i2 < _listeners2.length; _i2++) {
                _listeners2[_i2](time, _delta, frame, v2);
              }
            }
          };
        _self = {
          time: 0,
          frame: 0,
          tick: function tick() {
            _tick(true);
          },
          deltaRatio: function deltaRatio(fps) {
            return _delta / (1e3 / (fps || 60));
          },
          wake: function wake() {
            if (_coreReady) {
              if (!_coreInitted$3 && _windowExists$3()) {
                _win$3 = _coreInitted$3 = window;
                _doc$3 = _win$3.document || {};
                _globals.gsap = gsap$3;
                (_win$3.gsapVersions || (_win$3.gsapVersions = [])).push(
                  gsap$3.version
                );
                _install(
                  _installScope ||
                  _win$3.GreenSockGlobals ||
                  (!_win$3.gsap && _win$3) ||
                  {}
                );
                _registerPluginQueue.forEach(_createPlugin);
              }
              _raf =
                typeof requestAnimationFrame !== "undefined" &&
                requestAnimationFrame;
              _id && _self.sleep();
              _req =
                _raf ||
                function (f2) {
                  return setTimeout(f2, (_nextTime - _self.time * 1e3 + 1) | 0);
                };
              _tickerActive = 1;
              _tick(2);
            }
          },
          sleep: function sleep() {
            (_raf ? cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
          },
          lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity;
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
          },
          fps: function fps(_fps) {
            _gap = 1e3 / (_fps || 240);
            _nextTime = _self.time * 1e3 + _gap;
          },
          add: function add2(callback, once, prioritize) {
            var func = once
              ? function (t2, d2, f2, v2) {
                callback(t2, d2, f2, v2);
                _self.remove(func);
              }
              : callback;
            _self.remove(callback);
            _listeners2[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
          },
          remove: function remove(callback, i2) {
            ~(i2 = _listeners2.indexOf(callback)) &&
              _listeners2.splice(i2, 1) &&
              _i2 >= i2 &&
              _i2--;
          },
          _listeners: _listeners2,
        };
        return _self;
      })(),
      _wake = function _wake2() {
        return !_tickerActive && _ticker.wake();
      },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString2(value) {
        var obj = {},
          split = value.substr(1, value.length - 3).split(":"),
          key = split[0],
          i2 = 1,
          l2 = split.length,
          index,
          val,
          parsedVal;
        for (; i2 < l2; i2++) {
          val = split[i2];
          index = i2 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
          parsedVal = val.substr(0, index);
          obj[key] = isNaN(parsedVal)
            ? parsedVal.replace(_quotesExp, "").trim()
            : +parsedVal;
          key = val.substr(index + 1).trim();
        }
        return obj;
      },
      _valueInParentheses = function _valueInParentheses2(value) {
        var open = value.indexOf("(") + 1,
          close = value.indexOf(")"),
          nested = value.indexOf("(", open);
        return value.substring(
          open,
          ~nested && nested < close ? value.indexOf(")", close + 1) : close
        );
      },
      _configEaseFromString = function _configEaseFromString2(name) {
        var split = (name + "").split("("),
          ease = _easeMap[split[0]];
        return ease && split.length > 1 && ease.config
          ? ease.config.apply(
            null,
            ~name.indexOf("{")
              ? [_parseObjectInString(split[1])]
              : _valueInParentheses(name).split(",").map(_numericIfPossible)
          )
          : _easeMap._CE && _customEaseExp.test(name)
            ? _easeMap._CE("", name)
            : ease;
      },
      _invertEase = function _invertEase2(ease) {
        return function (p2) {
          return 1 - ease(1 - p2);
        };
      },
      _propagateYoyoEase = function _propagateYoyoEase2(timeline, isYoyo) {
        var child = timeline._first,
          ease;
        while (child) {
          if (child instanceof Timeline) {
            _propagateYoyoEase2(child, isYoyo);
          } else if (
            child.vars.yoyoEase &&
            (!child._yoyo || !child._repeat) &&
            child._yoyo !== isYoyo
          ) {
            if (child.timeline) {
              _propagateYoyoEase2(child.timeline, isYoyo);
            } else {
              ease = child._ease;
              child._ease = child._yEase;
              child._yEase = ease;
              child._yoyo = isYoyo;
            }
          }
          child = child._next;
        }
      },
      _parseEase = function _parseEase2(ease, defaultEase) {
        return !ease
          ? defaultEase
          : (_isFunction$2(ease)
            ? ease
            : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
      },
      _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
        if (easeOut === void 0) {
          easeOut = function easeOut2(p2) {
            return 1 - easeIn(1 - p2);
          };
        }
        if (easeInOut === void 0) {
          easeInOut = function easeInOut2(p2) {
            return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
          };
        }
        var ease = {
          easeIn,
          easeOut,
          easeInOut,
        },
          lowercaseName;
        _forEachName(names, function (name) {
          _easeMap[name] = _globals[name] = ease;
          _easeMap[(lowercaseName = name.toLowerCase())] = easeOut;
          for (var p2 in ease) {
            _easeMap[
              lowercaseName +
              (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")
            ] = _easeMap[name + "." + p2] = ease[p2];
          }
        });
        return ease;
      },
      _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
        return function (p2) {
          return p2 < 0.5
            ? (1 - easeOut(1 - p2 * 2)) / 2
            : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
        };
      },
      _configElastic = function _configElastic2(type, amplitude, period) {
        var p1 = amplitude >= 1 ? amplitude : 1,
          p2 =
            (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1),
          p3 = (p2 / _2PI) * (Math.asin(1 / p1) || 0),
          easeOut = function easeOut2(p4) {
            return p4 === 1
              ? 1
              : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
          },
          ease =
            type === "out"
              ? easeOut
              : type === "in"
                ? function (p4) {
                  return 1 - easeOut(1 - p4);
                }
                : _easeInOutFromOut(easeOut);
        p2 = _2PI / p2;
        ease.config = function (amplitude2, period2) {
          return _configElastic2(type, amplitude2, period2);
        };
        return ease;
      },
      _configBack = function _configBack2(type, overshoot) {
        if (overshoot === void 0) {
          overshoot = 1.70158;
        }
        var easeOut = function easeOut2(p2) {
          return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
        },
          ease =
            type === "out"
              ? easeOut
              : type === "in"
                ? function (p2) {
                  return 1 - easeOut(1 - p2);
                }
                : _easeInOutFromOut(easeOut);
        ease.config = function (overshoot2) {
          return _configBack2(type, overshoot2);
        };
        return ease;
      };
    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i2) {
      var power = i2 < 5 ? i2 + 1 : i2;
      _insertEase(
        name + ",Power" + (power - 1),
        i2
          ? function (p2) {
            return Math.pow(p2, power);
          }
          : function (p2) {
            return p2;
          },
        function (p2) {
          return 1 - Math.pow(1 - p2, power);
        },
        function (p2) {
          return p2 < 0.5
            ? Math.pow(p2 * 2, power) / 2
            : 1 - Math.pow((1 - p2) * 2, power) / 2;
        }
      );
    });
    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
    _insertEase(
      "Elastic",
      _configElastic("in"),
      _configElastic("out"),
      _configElastic()
    );
    (function (n2, c2) {
      var n1 = 1 / c2,
        n22 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut2(p2) {
          return p2 < n1
            ? n2 * p2 * p2
            : p2 < n22
              ? n2 * Math.pow(p2 - 1.5 / c2, 2) + 0.75
              : p2 < n3
                ? n2 * (p2 -= 2.25 / c2) * p2 + 0.9375
                : n2 * Math.pow(p2 - 2.625 / c2, 2) + 0.984375;
        };
      _insertEase(
        "Bounce",
        function (p2) {
          return 1 - easeOut(1 - p2);
        },
        easeOut
      );
    })(7.5625, 2.75);
    _insertEase("Expo", function (p2) {
      return p2 ? Math.pow(2, 10 * (p2 - 1)) : 0;
    });
    _insertEase("Circ", function (p2) {
      return -(_sqrt(1 - p2 * p2) - 1);
    });
    _insertEase("Sine", function (p2) {
      return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
    });
    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
    _easeMap.SteppedEase =
      _easeMap.steps =
      _globals.SteppedEase =
      {
        config: function config(steps, immediateStart) {
          if (steps === void 0) {
            steps = 1;
          }
          var p1 = 1 / steps,
            p2 = steps + (immediateStart ? 0 : 1),
            p3 = immediateStart ? 1 : 0,
            max2 = 1 - _tinyNum;
          return function (p4) {
            return (((p2 * _clamp$1(0, max2, p4)) | 0) + p3) * p1;
          };
        },
      };
    _defaults$1.ease = _easeMap["quad.out"];
    _forEachName(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (name) {
        return (_callbackNames += name + "," + name + "Params,");
      }
    );
    var GSCache = function GSCache2(target, harness) {
      this.id = _gsID++;
      target._gsap = this;
      this.target = target;
      this.harness = harness;
      this.get = harness ? harness.get : _getProperty;
      this.set = harness ? harness.getSetter : _getSetter;
    };
    var Animation = /* @__PURE__ */ (function () {
      function Animation2(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if ((this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0)) {
          this._rDelay = vars.repeatDelay || 0;
          this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context$2) {
          this._ctx = _context$2;
          _context$2.data.push(this);
        }
        _tickerActive || _ticker.wake();
      }
      var _proto = Animation2.prototype;
      _proto.delay = function delay(value) {
        if (value || value === 0) {
          this.parent &&
            this.parent.smoothChildTiming &&
            this.startTime(this._start + value - this._delay);
          this._delay = value;
          return this;
        }
        return this._delay;
      };
      _proto.duration = function duration(value) {
        return arguments.length
          ? this.totalDuration(
            this._repeat > 0
              ? value + (value + this._rDelay) * this._repeat
              : value
          )
          : this.totalDuration() && this._dur;
      };
      _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
          return this._tDur;
        }
        this._dirty = 0;
        return _setDuration(
          this,
          this._repeat < 0
            ? value
            : (value - this._repeat * this._rDelay) / (this._repeat + 1)
        );
      };
      _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) {
          return this._tTime;
        }
        var parent2 = this._dp;
        if (parent2 && parent2.smoothChildTiming && this._ts) {
          _alignPlayhead(this, _totalTime);
          !parent2._dp || parent2.parent || _postAddChecks(parent2, this);
          while (parent2 && parent2.parent) {
            if (
              parent2.parent._time !==
              parent2._start +
              (parent2._ts >= 0
                ? parent2._tTime / parent2._ts
                : (parent2.totalDuration() - parent2._tTime) / -parent2._ts)
            ) {
              parent2.totalTime(parent2._tTime, true);
            }
            parent2 = parent2.parent;
          }
          if (
            !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && _totalTime < this._tDur) ||
              (this._ts < 0 && _totalTime > 0) ||
              (!this._tDur && !_totalTime))
          ) {
            _addToTimeline(this._dp, this, this._start - this._delay);
          }
        }
        if (
          this._tTime !== _totalTime ||
          (!this._dur && !suppressEvents) ||
          (this._initted && Math.abs(this._zTime) === _tinyNum) ||
          (!_totalTime && !this._initted && (this.add || this._ptLookup))
        ) {
          this._ts || (this._pTime = _totalTime);
          _lazySafeRender(this, _totalTime, suppressEvents);
        }
        return this;
      };
      _proto.time = function time(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(
            Math.min(
              this.totalDuration(),
              value + _elapsedCycleDuration(this)
            ) %
            (this._dur + this._rDelay) || (value ? this._dur : 0),
            suppressEvents
          )
          : this._time;
      };
      _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * value, suppressEvents)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
              ? 1
              : 0;
      };
      _proto.progress = function progress(value, suppressEvents) {
        return arguments.length
          ? this.totalTime(
            this.duration() *
            (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) +
            _elapsedCycleDuration(this),
            suppressEvents
          )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      };
      _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(
            this._time + (value - 1) * cycleDuration,
            suppressEvents
          )
          : this._repeat
            ? _animationCycle(this._tTime, cycleDuration) + 1
            : 1;
      };
      _proto.timeScale = function timeScale(value, suppressEvents) {
        if (!arguments.length) {
          return this._rts === -_tinyNum ? 0 : this._rts;
        }
        if (this._rts === value) {
          return this;
        }
        var tTime =
          this.parent && this._ts
            ? _parentToChildTotalTime(this.parent._time, this)
            : this._tTime;
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
        this.totalTime(
          _clamp$1(-Math.abs(this._delay), this._tDur, tTime),
          suppressEvents !== false
        );
        _setEnd(this);
        return _recacheAncestors(this);
      };
      _proto.paused = function paused(value) {
        if (!arguments.length) {
          return this._ps;
        }
        if (this._ps !== value) {
          this._ps = value;
          if (value) {
            this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
            this._ts = this._act = 0;
          } else {
            _wake();
            this._ts = this._rts;
            this.totalTime(
              this.parent && !this.parent.smoothChildTiming
                ? this.rawTime()
                : this._tTime || this._pTime,
              this.progress() === 1 &&
              Math.abs(this._zTime) !== _tinyNum &&
              (this._tTime -= _tinyNum)
            );
          }
        }
        return this;
      };
      _proto.startTime = function startTime(value) {
        if (arguments.length) {
          this._start = value;
          var parent2 = this.parent || this._dp;
          parent2 &&
            (parent2._sort || !this.parent) &&
            _addToTimeline(parent2, this, value - this._delay);
          return this;
        }
        return this._start;
      };
      _proto.endTime = function endTime(includeRepeats) {
        return (
          this._start +
          (_isNotFalse(includeRepeats)
            ? this.totalDuration()
            : this.duration()) /
          Math.abs(this._ts || 1)
        );
      };
      _proto.rawTime = function rawTime(wrapRepeats) {
        var parent2 = this.parent || this._dp;
        return !parent2
          ? this._tTime
          : wrapRepeats &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : !this._ts
              ? this._tTime
              : _parentToChildTotalTime(parent2.rawTime(wrapRepeats), this);
      };
      _proto.revert = function revert(config) {
        if (config === void 0) {
          config = _revertConfig;
        }
        var prevIsReverting = _reverting$1;
        _reverting$1 = config;
        if (this._initted || this._startAt) {
          this.timeline && this.timeline.revert(config);
          this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting$1 = prevIsReverting;
        return this;
      };
      _proto.globalTime = function globalTime(rawTime) {
        var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();
        while (animation) {
          time = animation._start + time / (Math.abs(animation._ts) || 1);
          animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
      };
      _proto.repeat = function repeat(value) {
        if (arguments.length) {
          this._repeat = value === Infinity ? -2 : value;
          return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
      };
      _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
          var time = this._time;
          this._rDelay = value;
          _onUpdateTotalDuration(this);
          return time ? this.time(time) : this;
        }
        return this._rDelay;
      };
      _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
          this._yoyo = value;
          return this;
        }
        return this._yoyo;
      };
      _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(
          _parsePosition$1(this, position),
          _isNotFalse(suppressEvents)
        );
      };
      _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(
          includeDelay ? -this._delay : 0,
          _isNotFalse(suppressEvents)
        );
      };
      _proto.play = function play(from2, suppressEvents) {
        from2 != null && this.seek(from2, suppressEvents);
        return this.reversed(false).paused(false);
      };
      _proto.reverse = function reverse(from2, suppressEvents) {
        from2 != null &&
          this.seek(from2 || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
      };
      _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
      };
      _proto.resume = function resume() {
        return this.paused(false);
      };
      _proto.reversed = function reversed(value) {
        if (arguments.length) {
          !!value !== this.reversed() &&
            this.timeScale(-this._rts || (value ? -_tinyNum : 0));
          return this;
        }
        return this._rts < 0;
      };
      _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
      };
      _proto.isActive = function isActive() {
        var parent2 = this.parent || this._dp,
          start = this._start,
          rawTime;
        return !!(
          !parent2 ||
          (this._ts &&
            this._initted &&
            parent2.isActive() &&
            (rawTime = parent2.rawTime(true)) >= start &&
            rawTime < this.endTime(true) - _tinyNum)
        );
      };
      _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
          if (!callback) {
            delete vars[type];
          } else {
            vars[type] = callback;
            params && (vars[type + "Params"] = params);
            type === "onUpdate" && (this._onUpdate = callback);
          }
          return this;
        }
        return vars[type];
      };
      _proto.then = function then(onFulfilled) {
        var self2 = this;
        return new Promise(function (resolve) {
          var f2 = _isFunction$2(onFulfilled) ? onFulfilled : _passThrough$1,
            _resolve = function _resolve2() {
              var _then = self2.then;
              self2.then = null;
              _isFunction$2(f2) &&
                (f2 = f2(self2)) &&
                (f2.then || f2 === self2) &&
                (self2.then = _then);
              resolve(f2);
              self2.then = _then;
            };
          if (
            (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0) ||
            (!self2._tTime && self2._ts < 0)
          ) {
            _resolve();
          } else {
            self2._prom = _resolve;
          }
        });
      };
      _proto.kill = function kill() {
        _interrupt(this);
      };
      return Animation2;
    })();
    _setDefaults$1(Animation.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: false,
      parent: null,
      _initted: false,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -_tinyNum,
      _prom: 0,
      _ps: false,
      _rts: 1,
    });
    var Timeline = /* @__PURE__ */ (function (_Animation) {
      _inheritsLoose(Timeline2, _Animation);
      function Timeline2(vars, position) {
        var _this;
        if (vars === void 0) {
          vars = {};
        }
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline &&
          _addToTimeline(
            vars.parent || _globalTimeline,
            _assertThisInitialized(_this),
            position
          );
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger &&
          _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
      }
      var _proto2 = Timeline2.prototype;
      _proto2.to = function to2(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
      };
      _proto2.from = function from2(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
      };
      _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
      };
      _proto2.set = function set2(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition$1(this, position), 1);
        return this;
      };
      _proto2.call = function call(callback, params, position) {
        return _addToTimeline(
          this,
          Tween.delayedCall(0, callback, params),
          position
        );
      };
      _proto2.staggerTo = function staggerTo(
        targets,
        duration,
        vars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition$1(this, position));
        return this;
      };
      _proto2.staggerFrom = function staggerFrom(
        targets,
        duration,
        vars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(
          vars.immediateRender
        );
        return this.staggerTo(
          targets,
          duration,
          vars,
          stagger,
          position,
          onCompleteAll,
          onCompleteAllParams
        );
      };
      _proto2.staggerFromTo = function staggerFromTo(
        targets,
        duration,
        fromVars,
        toVars,
        stagger,
        position,
        onCompleteAll,
        onCompleteAllParams
      ) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(
          toVars.immediateRender
        );
        return this.staggerTo(
          targets,
          duration,
          toVars,
          stagger,
          position,
          onCompleteAll,
          onCompleteAllParams
        );
      };
      _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart =
            this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;
        this !== _globalTimeline &&
          tTime > tDur &&
          totalTime >= 0 &&
          (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
          if (prevTime !== this._time && dur) {
            tTime += this._time - prevTime;
            totalTime += this._time - prevTime;
          }
          time = tTime;
          prevStart = this._start;
          timeScale = this._ts;
          prevPaused = !timeScale;
          if (crossingStart) {
            dur || (prevTime = this._zTime);
            (totalTime || !suppressEvents) && (this._zTime = totalTime);
          }
          if (this._repeat) {
            yoyo = this._yoyo;
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && totalTime < 0) {
              return this.totalTime(
                cycleDuration * 100 + totalTime,
                suppressEvents,
                force
              );
            }
            time = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);
              if (iteration && iteration === tTime / cycleDuration) {
                time = dur;
                iteration--;
              }
              time > dur && (time = dur);
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            !prevTime &&
              this._tTime &&
              prevIteration !== iteration &&
              this._tTime - prevIteration * cycleDuration - this._dur <= 0 &&
              (prevIteration = iteration);
            if (yoyo && iteration & 1) {
              time = dur - time;
              isYoyo = 1;
            }
            if (iteration !== prevIteration && !this._lock) {
              var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
              iteration < prevIteration && (rewinding = !rewinding);
              prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
              this._lock = 1;
              this.render(
                prevTime ||
                (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)),
                suppressEvents,
                !dur
              )._lock = 0;
              this._tTime = tTime;
              !suppressEvents && this.parent && _callback$1(this, "onRepeat");
              this.vars.repeatRefresh &&
                !isYoyo &&
                (this.invalidate()._lock = 1);
              if (
                (prevTime && prevTime !== this._time) ||
                prevPaused !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act)
              ) {
                return this;
              }
              dur = this._dur;
              tDur = this._tDur;
              if (doesWrap) {
                this._lock = 2;
                prevTime = rewinding ? dur : -1e-4;
                this.render(prevTime, true);
                this.vars.repeatRefresh && !isYoyo && this.invalidate();
              }
              this._lock = 0;
              if (!this._ts && !prevPaused) {
                return this;
              }
              _propagateYoyoEase(this, isYoyo);
            }
          }
          if (this._hasPause && !this._forcing && this._lock < 2) {
            pauseTween = _findNextPauseTween(
              this,
              _roundPrecise(prevTime),
              _roundPrecise(time)
            );
            if (pauseTween) {
              tTime -= time - (time = pauseTween._start);
            }
          }
          this._tTime = tTime;
          this._time = time;
          this._act = !timeScale;
          if (!this._initted) {
            this._onUpdate = this.vars.onUpdate;
            this._initted = 1;
            this._zTime = totalTime;
            prevTime = 0;
          }
          if (!prevTime && time && !suppressEvents && !iteration) {
            _callback$1(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          if (time >= prevTime && totalTime >= 0) {
            child = this._first;
            while (child) {
              next = child._next;
              if (
                (child._act || time >= child._start) &&
                child._ts &&
                pauseTween !== child
              ) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(
                  child._ts > 0
                    ? (time - child._start) * child._ts
                    : (child._dirty ? child.totalDuration() : child._tDur) +
                    (time - child._start) * child._ts,
                  suppressEvents,
                  force
                );
                if (time !== this._time || (!this._ts && !prevPaused)) {
                  pauseTween = 0;
                  next && (tTime += this._zTime = -_tinyNum);
                  break;
                }
              }
              child = next;
            }
          } else {
            child = this._last;
            var adjustedTime = totalTime < 0 ? totalTime : time;
            while (child) {
              next = child._prev;
              if (
                (child._act || adjustedTime <= child._end) &&
                child._ts &&
                pauseTween !== child
              ) {
                if (child.parent !== this) {
                  return this.render(totalTime, suppressEvents, force);
                }
                child.render(
                  child._ts > 0
                    ? (adjustedTime - child._start) * child._ts
                    : (child._dirty ? child.totalDuration() : child._tDur) +
                    (adjustedTime - child._start) * child._ts,
                  suppressEvents,
                  force || (_reverting$1 && (child._initted || child._startAt))
                );
                if (time !== this._time || (!this._ts && !prevPaused)) {
                  pauseTween = 0;
                  next &&
                    (tTime += this._zTime =
                      adjustedTime ? -_tinyNum : _tinyNum);
                  break;
                }
              }
              child = next;
            }
          }
          if (pauseTween && !suppressEvents) {
            this.pause();
            pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime =
              time >= prevTime ? 1 : -1;
            if (this._ts) {
              this._start = prevStart;
              _setEnd(this);
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._onUpdate &&
            !suppressEvents &&
            _callback$1(this, "onUpdate", true);
          if (
            (tTime === tDur && this._tTime >= this.totalDuration()) ||
            (!tTime && prevTime)
          ) {
            if (
              prevStart === this._start ||
              Math.abs(timeScale) !== Math.abs(this._ts)
            ) {
              if (!this._lock) {
                (totalTime || !dur) &&
                  ((tTime === tDur && this._ts > 0) ||
                    (!tTime && this._ts < 0)) &&
                  _removeFromParent(this, 1);
                if (
                  !suppressEvents &&
                  !(totalTime < 0 && !prevTime) &&
                  (tTime || prevTime || !tDur)
                ) {
                  _callback$1(
                    this,
                    tTime === tDur && totalTime >= 0
                      ? "onComplete"
                      : "onReverseComplete",
                    true
                  );
                  this._prom &&
                    !(tTime < tDur && this.timeScale() > 0) &&
                    this._prom();
                }
              }
            }
          }
        }
        return this;
      };
      _proto2.add = function add2(child, position) {
        var _this2 = this;
        _isNumber$1(position) ||
          (position = _parsePosition$1(this, position, child));
        if (!(child instanceof Animation)) {
          if (_isArray(child)) {
            child.forEach(function (obj) {
              return _this2.add(obj, position);
            });
            return this;
          }
          if (_isString$2(child)) {
            return this.addLabel(child, position);
          }
          if (_isFunction$2(child)) {
            child = Tween.delayedCall(0, child);
          } else {
            return this;
          }
        }
        return this !== child ? _addToTimeline(this, child, position) : this;
      };
      _proto2.getChildren = function getChildren(
        nested,
        tweens,
        timelines,
        ignoreBeforeTime
      ) {
        if (nested === void 0) {
          nested = true;
        }
        if (tweens === void 0) {
          tweens = true;
        }
        if (timelines === void 0) {
          timelines = true;
        }
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = -_bigNum$1;
        }
        var a2 = [],
          child = this._first;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            if (child instanceof Tween) {
              tweens && a2.push(child);
            } else {
              timelines && a2.push(child);
              nested &&
                a2.push.apply(a2, child.getChildren(true, tweens, timelines));
            }
          }
          child = child._next;
        }
        return a2;
      };
      _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1),
          i2 = animations.length;
        while (i2--) {
          if (animations[i2].vars.id === id) {
            return animations[i2];
          }
        }
      };
      _proto2.remove = function remove(child) {
        if (_isString$2(child)) {
          return this.removeLabel(child);
        }
        if (_isFunction$2(child)) {
          return this.killTweensOf(child);
        }
        _removeLinkedListItem(this, child);
        if (child === this._recent) {
          this._recent = this._last;
        }
        return _uncache(this);
      };
      _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
          return this._tTime;
        }
        this._forcing = 1;
        if (!this._dp && this._ts) {
          this._start = _roundPrecise(
            _ticker.time -
            (this._ts > 0
              ? _totalTime2 / this._ts
              : (this.totalDuration() - _totalTime2) / -this._ts)
          );
        }
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
      };
      _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition$1(this, position);
        return this;
      };
      _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
      };
      _proto2.addPause = function addPause(position, callback, params) {
        var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
        t2.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t2, _parsePosition$1(this, position));
      };
      _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition$1(this, position);
        while (child) {
          if (child._start === position && child.data === "isPause") {
            _removeFromParent(child);
          }
          child = child._next;
        }
      };
      _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive),
          i2 = tweens.length;
        while (i2--) {
          _overwritingTween !== tweens[i2] && tweens[i2].kill(targets, props);
        }
        return this;
      };
      _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a2 = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber$1(onlyActive),
          children;
        while (child) {
          if (child instanceof Tween) {
            if (
              _arrayContainsAny(child._targets, parsedTargets) &&
              (isGlobalTime
                ? (!_overwritingTween || (child._initted && child._ts)) &&
                child.globalTime(0) <= onlyActive &&
                child.globalTime(child.totalDuration()) > onlyActive
                : !onlyActive || child.isActive())
            ) {
              a2.push(child);
            }
          } else if (
            (children = child.getTweensOf(parsedTargets, onlyActive)).length
          ) {
            a2.push.apply(a2, children);
          }
          child = child._next;
        }
        return a2;
      };
      _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this,
          endTime = _parsePosition$1(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          initted,
          tween = Tween.to(
            tl,
            _setDefaults$1(
              {
                ease: vars.ease || "none",
                lazy: false,
                immediateRender: false,
                time: endTime,
                overwrite: "auto",
                duration:
                  vars.duration ||
                  Math.abs(
                    (endTime -
                      (startAt && "time" in startAt
                        ? startAt.time
                        : tl._time)) /
                    tl.timeScale()
                  ) ||
                  _tinyNum,
                onStart: function onStart() {
                  tl.pause();
                  if (!initted) {
                    var duration =
                      vars.duration ||
                      Math.abs(
                        (endTime -
                          (startAt && "time" in startAt
                            ? startAt.time
                            : tl._time)) /
                        tl.timeScale()
                      );
                    tween._dur !== duration &&
                      _setDuration(tween, duration, 0, 1).render(
                        tween._time,
                        true,
                        true
                      );
                    initted = 1;
                  }
                  _onStart && _onStart.apply(tween, onStartParams || []);
                },
              },
              vars
            )
          );
        return immediateRender ? tween.render(0) : tween;
      };
      _proto2.tweenFromTo = function tweenFromTo(
        fromPosition,
        toPosition,
        vars
      ) {
        return this.tweenTo(
          toPosition,
          _setDefaults$1(
            {
              startAt: {
                time: _parsePosition$1(this, fromPosition),
              },
            },
            vars
          )
        );
      };
      _proto2.recent = function recent() {
        return this._recent;
      };
      _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
          afterTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition$1(this, afterTime));
      };
      _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
          beforeTime = this._time;
        }
        return _getLabelInDirection(
          this,
          _parsePosition$1(this, beforeTime),
          1
        );
      };
      _proto2.currentLabel = function currentLabel(value) {
        return arguments.length
          ? this.seek(value, true)
          : this.previousLabel(this._time + _tinyNum);
      };
      _proto2.shiftChildren = function shiftChildren(
        amount,
        adjustLabels,
        ignoreBeforeTime
      ) {
        if (ignoreBeforeTime === void 0) {
          ignoreBeforeTime = 0;
        }
        var child = this._first,
          labels = this.labels,
          p2;
        while (child) {
          if (child._start >= ignoreBeforeTime) {
            child._start += amount;
            child._end += amount;
          }
          child = child._next;
        }
        if (adjustLabels) {
          for (p2 in labels) {
            if (labels[p2] >= ignoreBeforeTime) {
              labels[p2] += amount;
            }
          }
        }
        return _uncache(this);
      };
      _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while (child) {
          child.invalidate(soft);
          child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
      };
      _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
          includeLabels = true;
        }
        var child = this._first,
          next;
        while (child) {
          next = child._next;
          this.remove(child);
          child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
      };
      _proto2.totalDuration = function totalDuration(value) {
        var max2 = 0,
          self2 = this,
          child = self2._last,
          prevStart = _bigNum$1,
          prev,
          start,
          parent2;
        if (arguments.length) {
          return self2.timeScale(
            (self2._repeat < 0 ? self2.duration() : self2.totalDuration()) /
            (self2.reversed() ? -value : value)
          );
        }
        if (self2._dirty) {
          parent2 = self2.parent;
          while (child) {
            prev = child._prev;
            child._dirty && child.totalDuration();
            start = child._start;
            if (start > prevStart && self2._sort && child._ts && !self2._lock) {
              self2._lock = 1;
              _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
            } else {
              prevStart = start;
            }
            if (start < 0 && child._ts) {
              max2 -= start;
              if (
                (!parent2 && !self2._dp) ||
                (parent2 && parent2.smoothChildTiming)
              ) {
                self2._start += start / self2._ts;
                self2._time -= start;
                self2._tTime -= start;
              }
              self2.shiftChildren(-start, false, -Infinity);
              prevStart = 0;
            }
            child._end > max2 && child._ts && (max2 = child._end);
            child = prev;
          }
          _setDuration(
            self2,
            self2 === _globalTimeline && self2._time > max2
              ? self2._time
              : max2,
            1,
            1
          );
          self2._dirty = 0;
        }
        return self2._tDur;
      };
      Timeline2.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
          _lazySafeRender(
            _globalTimeline,
            _parentToChildTotalTime(time, _globalTimeline)
          );
          _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
          _nextGCFrame += _config$1.autoSleep || 120;
          var child = _globalTimeline._first;
          if (!child || !child._ts) {
            if (_config$1.autoSleep && _ticker._listeners.length < 2) {
              while (child && !child._ts) {
                child = child._next;
              }
              child || _ticker.sleep();
            }
          }
        }
      };
      return Timeline2;
    })(Animation);
    _setDefaults$1(Timeline.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0,
    });
    var _addComplexStringPropTween = function _addComplexStringPropTween2(
      target,
      prop,
      start,
      end,
      setter,
      stringFilter,
      funcParam
    ) {
      var pt2 = new PropTween(
        this._pt,
        target,
        prop,
        0,
        1,
        _renderComplexString,
        null,
        setter
      ),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a2;
      pt2.b = start;
      pt2.e = end;
      start += "";
      end += "";
      if ((hasRandom = ~end.indexOf("random("))) {
        end = _replaceRandom(end);
      }
      if (stringFilter) {
        a2 = [start, end];
        stringFilter(a2, target, prop);
        start = a2[0];
        end = a2[1];
      }
      startNums = start.match(_complexStringNumExp) || [];
      while ((result = _complexStringNumExp.exec(end))) {
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(") {
          color = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
          startNum = parseFloat(startNums[matchIndex - 1]) || 0;
          pt2._pt = {
            _next: pt2._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c:
              endNum.charAt(1) === "="
                ? _parseRelative(startNum, endNum) - startNum
                : parseFloat(endNum) - startNum,
            m: color && color < 4 ? Math.round : 0,
          };
          index = _complexStringNumExp.lastIndex;
        }
      }
      pt2.c = index < end.length ? end.substring(index, end.length) : "";
      pt2.fp = funcParam;
      if (_relExp.test(end) || hasRandom) {
        pt2.e = 0;
      }
      this._pt = pt2;
      return pt2;
    },
      _addPropTween = function _addPropTween2(
        target,
        prop,
        start,
        end,
        index,
        targets,
        modifier,
        stringFilter,
        funcParam,
        optional
      ) {
        _isFunction$2(end) && (end = end(index || 0, target, targets));
        var currentValue = target[prop],
          parsedStart =
            start !== "get"
              ? start
              : !_isFunction$2(currentValue)
                ? currentValue
                : funcParam
                  ? target[
                    prop.indexOf("set") ||
                      !_isFunction$2(target["get" + prop.substr(3)])
                      ? prop
                      : "get" + prop.substr(3)
                  ](funcParam)
                  : target[prop](),
          setter = !_isFunction$2(currentValue)
            ? _setterPlain
            : funcParam
              ? _setterFuncWithParam
              : _setterFunc,
          pt2;
        if (_isString$2(end)) {
          if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
          }
          if (end.charAt(1) === "=") {
            pt2 =
              _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt2 || pt2 === 0) {
              end = pt2;
            }
          }
        }
        if (!optional || parsedStart !== end || _forceAllPropTweens) {
          if (!isNaN(parsedStart * end) && end !== "") {
            pt2 = new PropTween(
              this._pt,
              target,
              prop,
              +parsedStart || 0,
              end - (parsedStart || 0),
              typeof currentValue === "boolean" ? _renderBoolean : _renderPlain,
              0,
              setter
            );
            funcParam && (pt2.fp = funcParam);
            modifier && pt2.modifier(modifier, this, target);
            return (this._pt = pt2);
          }
          !currentValue && !(prop in target) && _missingPlugin(prop, end);
          return _addComplexStringPropTween.call(
            this,
            target,
            prop,
            parsedStart,
            end,
            setter,
            stringFilter || _config$1.stringFilter,
            funcParam
          );
        }
      },
      _processVars = function _processVars2(
        vars,
        index,
        target,
        targets,
        tween
      ) {
        _isFunction$2(vars) &&
          (vars = _parseFuncOrString(vars, tween, index, target, targets));
        if (
          !_isObject$1(vars) ||
          (vars.style && vars.nodeType) ||
          _isArray(vars) ||
          _isTypedArray(vars)
        ) {
          return _isString$2(vars)
            ? _parseFuncOrString(vars, tween, index, target, targets)
            : vars;
        }
        var copy = {},
          p2;
        for (p2 in vars) {
          copy[p2] = _parseFuncOrString(
            vars[p2],
            tween,
            index,
            target,
            targets
          );
        }
        return copy;
      },
      _checkPlugin = function _checkPlugin2(
        property,
        vars,
        tween,
        index,
        target,
        targets
      ) {
        var plugin, pt2, ptLookup, i2;
        if (
          _plugins[property] &&
          (plugin = new _plugins[property]()).init(
            target,
            plugin.rawVars
              ? vars[property]
              : _processVars(vars[property], index, target, targets, tween),
            tween,
            index,
            targets
          ) !== false
        ) {
          tween._pt = pt2 = new PropTween(
            tween._pt,
            target,
            property,
            0,
            1,
            plugin.render,
            plugin,
            0,
            plugin.priority
          );
          if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
            i2 = plugin._props.length;
            while (i2--) {
              ptLookup[plugin._props[i2]] = pt2;
            }
          }
        }
        return plugin;
      },
      _overwritingTween,
      _forceAllPropTweens,
      _initTween = function _initTween2(tween, time, tTime) {
        var vars = tween.vars,
          ease = vars.ease,
          startAt = vars.startAt,
          immediateRender = vars.immediateRender,
          lazy = vars.lazy,
          onUpdate = vars.onUpdate,
          runBackwards = vars.runBackwards,
          yoyoEase = vars.yoyoEase,
          keyframes = vars.keyframes,
          autoRevert = vars.autoRevert,
          dur = tween._dur,
          prevStartAt = tween._startAt,
          targets = tween._targets,
          parent2 = tween.parent,
          fullTargets =
            parent2 && parent2.data === "nested"
              ? parent2.vars.targets
              : targets,
          autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites$1,
          tl = tween.timeline,
          cleanVars,
          i2,
          p2,
          pt2,
          target,
          hasPriority,
          gsData,
          harness,
          plugin,
          ptLookup,
          index,
          harnessVars,
          overwritten;
        tl && (!keyframes || !ease) && (ease = "none");
        tween._ease = _parseEase(ease, _defaults$1.ease);
        tween._yEase = yoyoEase
          ? _invertEase(
            _parseEase(yoyoEase === true ? ease : yoyoEase, _defaults$1.ease)
          )
          : 0;
        if (yoyoEase && tween._yoyo && !tween._repeat) {
          yoyoEase = tween._yEase;
          tween._yEase = tween._ease;
          tween._ease = yoyoEase;
        }
        tween._from = !tl && !!vars.runBackwards;
        if (!tl || (keyframes && !vars.stagger)) {
          harness = targets[0] ? _getCache(targets[0]).harness : 0;
          harnessVars = harness && vars[harness.prop];
          cleanVars = _copyExcluding(vars, _reservedProps);
          if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1);
            time < 0 && runBackwards && immediateRender && !autoRevert
              ? prevStartAt.render(-1, true)
              : prevStartAt.revert(
                runBackwards && dur
                  ? _revertConfigNoKill
                  : _startAtRevertConfig
              );
            prevStartAt._lazy = 0;
          }
          if (startAt) {
            _removeFromParent(
              (tween._startAt = Tween.set(
                targets,
                _setDefaults$1(
                  {
                    data: "isStart",
                    overwrite: false,
                    parent: parent2,
                    immediateRender: true,
                    lazy: !prevStartAt && _isNotFalse(lazy),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      onUpdate &&
                      function () {
                        return _callback$1(tween, "onUpdate");
                      },
                    stagger: 0,
                  },
                  startAt
                )
              ))
            );
            tween._startAt._dp = 0;
            tween._startAt._sat = tween;
            time < 0 &&
              (_reverting$1 || (!immediateRender && !autoRevert)) &&
              tween._startAt.revert(_revertConfigNoKill);
            if (immediateRender) {
              if (dur && time <= 0 && tTime <= 0) {
                time && (tween._zTime = time);
                return;
              }
            }
          } else if (runBackwards && dur) {
            if (!prevStartAt) {
              time && (immediateRender = false);
              p2 = _setDefaults$1(
                {
                  overwrite: false,
                  data: "isFromStart",
                  //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                  lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                  immediateRender,
                  //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                  stagger: 0,
                  parent: parent2,
                  //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
                },
                cleanVars
              );
              harnessVars && (p2[harness.prop] = harnessVars);
              _removeFromParent((tween._startAt = Tween.set(targets, p2)));
              tween._startAt._dp = 0;
              tween._startAt._sat = tween;
              time < 0 &&
                (_reverting$1
                  ? tween._startAt.revert(_revertConfigNoKill)
                  : tween._startAt.render(-1, true));
              tween._zTime = time;
              if (!immediateRender) {
                _initTween2(tween._startAt, _tinyNum, _tinyNum);
              } else if (!time) {
                return;
              }
            }
          }
          tween._pt = tween._ptCache = 0;
          lazy = (dur && _isNotFalse(lazy)) || (lazy && !dur);
          for (i2 = 0; i2 < targets.length; i2++) {
            target = targets[i2];
            gsData = target._gsap || _harness(targets)[i2]._gsap;
            tween._ptLookup[i2] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
            index = fullTargets === targets ? i2 : fullTargets.indexOf(target);
            if (
              harness &&
              (plugin = new harness()).init(
                target,
                harnessVars || cleanVars,
                tween,
                index,
                fullTargets
              ) !== false
            ) {
              tween._pt = pt2 = new PropTween(
                tween._pt,
                target,
                plugin.name,
                0,
                1,
                plugin.render,
                plugin,
                0,
                plugin.priority
              );
              plugin._props.forEach(function (name) {
                ptLookup[name] = pt2;
              });
              plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
              for (p2 in cleanVars) {
                if (
                  _plugins[p2] &&
                  (plugin = _checkPlugin(
                    p2,
                    cleanVars,
                    tween,
                    index,
                    target,
                    fullTargets
                  ))
                ) {
                  plugin.priority && (hasPriority = 1);
                } else {
                  ptLookup[p2] = pt2 = _addPropTween.call(
                    tween,
                    target,
                    p2,
                    "get",
                    cleanVars[p2],
                    index,
                    fullTargets,
                    0,
                    vars.stringFilter
                  );
                }
              }
            }
            tween._op && tween._op[i2] && tween.kill(target, tween._op[i2]);
            if (autoOverwrite && tween._pt) {
              _overwritingTween = tween;
              _globalTimeline.killTweensOf(
                target,
                ptLookup,
                tween.globalTime(time)
              );
              overwritten = !tween.parent;
              _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
          }
          hasPriority && _sortPropTweensByPriority(tween);
          tween._onInit && tween._onInit(tween);
        }
        tween._onUpdate = onUpdate;
        tween._initted = (!tween._op || tween._pt) && !overwritten;
        keyframes && time <= 0 && tl.render(_bigNum$1, true, true);
      },
      _updatePropTweens = function _updatePropTweens2(
        tween,
        property,
        value,
        start,
        startIsRelative,
        ratio,
        time,
        skipRecursion
      ) {
        var ptCache = ((tween._pt && tween._ptCache) || (tween._ptCache = {}))[
          property
        ],
          pt2,
          rootPT,
          lookup,
          i2;
        if (!ptCache) {
          ptCache = tween._ptCache[property] = [];
          lookup = tween._ptLookup;
          i2 = tween._targets.length;
          while (i2--) {
            pt2 = lookup[i2][property];
            if (pt2 && pt2.d && pt2.d._pt) {
              pt2 = pt2.d._pt;
              while (pt2 && pt2.p !== property && pt2.fp !== property) {
                pt2 = pt2._next;
              }
            }
            if (!pt2) {
              _forceAllPropTweens = 1;
              tween.vars[property] = "+=0";
              _initTween(tween, time);
              _forceAllPropTweens = 0;
              return skipRecursion
                ? _warn(property + " not eligible for reset")
                : 1;
            }
            ptCache.push(pt2);
          }
        }
        i2 = ptCache.length;
        while (i2--) {
          rootPT = ptCache[i2];
          pt2 = rootPT._pt || rootPT;
          pt2.s =
            (start || start === 0) && !startIsRelative
              ? start
              : pt2.s + (start || 0) + ratio * pt2.c;
          pt2.c = value - pt2.s;
          rootPT.e && (rootPT.e = _round$1(value) + getUnit(rootPT.e));
          rootPT.b && (rootPT.b = pt2.s + getUnit(rootPT.b));
        }
      },
      _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
        var harness = targets[0] ? _getCache(targets[0]).harness : 0,
          propertyAliases = harness && harness.aliases,
          copy,
          p2,
          i2,
          aliases2;
        if (!propertyAliases) {
          return vars;
        }
        copy = _merge({}, vars);
        for (p2 in propertyAliases) {
          if (p2 in copy) {
            aliases2 = propertyAliases[p2].split(",");
            i2 = aliases2.length;
            while (i2--) {
              copy[aliases2[i2]] = copy[p2];
            }
          }
        }
        return copy;
      },
      _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
        var ease = obj.ease || easeEach || "power1.inOut",
          p2,
          a2;
        if (_isArray(obj)) {
          a2 = allProps[prop] || (allProps[prop] = []);
          obj.forEach(function (value, i2) {
            return a2.push({
              t: (i2 / (obj.length - 1)) * 100,
              v: value,
              e: ease,
            });
          });
        } else {
          for (p2 in obj) {
            a2 = allProps[p2] || (allProps[p2] = []);
            p2 === "ease" ||
              a2.push({
                t: parseFloat(prop),
                v: obj[p2],
                e: ease,
              });
          }
        }
      },
      _parseFuncOrString = function _parseFuncOrString2(
        value,
        tween,
        i2,
        target,
        targets
      ) {
        return _isFunction$2(value)
          ? value.call(tween, i2, target, targets)
          : _isString$2(value) && ~value.indexOf("random(")
            ? _replaceRandom(value)
            : value;
      },
      _staggerTweenProps =
        _callbackNames +
        "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      _staggerPropsToSkip = {};
    _forEachName(
      _staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger",
      function (name) {
        return (_staggerPropsToSkip[name] = 1);
      }
    );
    var Tween = /* @__PURE__ */ (function (_Animation2) {
      _inheritsLoose(Tween2, _Animation2);
      function Tween2(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
          position.duration = vars;
          vars = position;
          position = null;
        }
        _this3 =
          _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) ||
          this;
        var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults2 = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent2 = vars.parent || _globalTimeline,
          parsedTargets = (
            _isArray(targets) || _isTypedArray(targets)
              ? _isNumber$1(targets[0])
              : "length" in vars
          )
            ? [targets]
            : toArray(targets),
          tl,
          i2,
          copy,
          l2,
          p2,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
        _this3._targets = parsedTargets.length
          ? _harness(parsedTargets)
          : _warn(
            "GSAP target " + targets + " not found. https://gsap.com",
            !_config$1.nullTargetWarn
          ) || [];
        _this3._ptLookup = [];
        _this3._overwrite = overwrite;
        if (
          keyframes ||
          stagger ||
          _isFuncOrString(duration) ||
          _isFuncOrString(delay)
        ) {
          vars = _this3.vars;
          tl = _this3.timeline = new Timeline({
            data: "nested",
            defaults: defaults2 || {},
            targets:
              parent2 && parent2.data === "nested"
                ? parent2.vars.targets
                : parsedTargets,
          });
          tl.kill();
          tl.parent = tl._dp = _assertThisInitialized(_this3);
          tl._start = 0;
          if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            l2 = parsedTargets.length;
            staggerFunc = stagger && distribute(stagger);
            if (_isObject$1(stagger)) {
              for (p2 in stagger) {
                if (~_staggerTweenProps.indexOf(p2)) {
                  staggerVarsToMerge || (staggerVarsToMerge = {});
                  staggerVarsToMerge[p2] = stagger[p2];
                }
              }
            }
            for (i2 = 0; i2 < l2; i2++) {
              copy = _copyExcluding(vars, _staggerPropsToSkip);
              copy.stagger = 0;
              yoyoEase && (copy.yoyoEase = yoyoEase);
              staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
              curTarget = parsedTargets[i2];
              copy.duration = +_parseFuncOrString(
                duration,
                _assertThisInitialized(_this3),
                i2,
                curTarget,
                parsedTargets
              );
              copy.delay =
                (+_parseFuncOrString(
                  delay,
                  _assertThisInitialized(_this3),
                  i2,
                  curTarget,
                  parsedTargets
                ) || 0) - _this3._delay;
              if (!stagger && l2 === 1 && copy.delay) {
                _this3._delay = delay = copy.delay;
                _this3._start += delay;
                copy.delay = 0;
              }
              tl.to(
                curTarget,
                copy,
                staggerFunc ? staggerFunc(i2, curTarget, parsedTargets) : 0
              );
              tl._ease = _easeMap.none;
            }
            tl.duration() ? (duration = delay = 0) : (_this3.timeline = 0);
          } else if (keyframes) {
            _inheritDefaults(
              _setDefaults$1(tl.vars.defaults, {
                ease: "none",
              })
            );
            tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
            var time = 0,
              a2,
              kf,
              v2;
            if (_isArray(keyframes)) {
              keyframes.forEach(function (frame) {
                return tl.to(parsedTargets, frame, ">");
              });
              tl.duration();
            } else {
              copy = {};
              for (p2 in keyframes) {
                p2 === "ease" ||
                  p2 === "easeEach" ||
                  _parseKeyframe(p2, keyframes[p2], copy, keyframes.easeEach);
              }
              for (p2 in copy) {
                a2 = copy[p2].sort(function (a3, b2) {
                  return a3.t - b2.t;
                });
                time = 0;
                for (i2 = 0; i2 < a2.length; i2++) {
                  kf = a2[i2];
                  v2 = {
                    ease: kf.e,
                    duration:
                      ((kf.t - (i2 ? a2[i2 - 1].t : 0)) / 100) * duration,
                  };
                  v2[p2] = kf.v;
                  tl.to(parsedTargets, v2, time);
                  time += v2.duration;
                }
              }
              tl.duration() < duration &&
                tl.to(
                  {},
                  {
                    duration: duration - tl.duration(),
                  }
                );
            }
          }
          duration || _this3.duration((duration = tl.duration()));
        } else {
          _this3.timeline = 0;
        }
        if (overwrite === true && !_suppressOverwrites$1) {
          _overwritingTween = _assertThisInitialized(_this3);
          _globalTimeline.killTweensOf(parsedTargets);
          _overwritingTween = 0;
        }
        _addToTimeline(parent2, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (
          immediateRender ||
          (!duration &&
            !keyframes &&
            _this3._start === _roundPrecise(parent2._time) &&
            _isNotFalse(immediateRender) &&
            _hasNoPausedAncestors(_assertThisInitialized(_this3)) &&
            parent2.data !== "nested")
        ) {
          _this3._tTime = -_tinyNum;
          _this3.render(Math.max(0, -delay) || 0);
        }
        scrollTrigger &&
          _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
      }
      var _proto3 = Tween2.prototype;
      _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          isNegative = totalTime < 0,
          tTime =
            totalTime > tDur - _tinyNum && !isNegative
              ? tDur
              : totalTime < _tinyNum
                ? 0
                : totalTime,
          time,
          pt2,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;
        if (!dur) {
          _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        } else if (
          tTime !== this._tTime ||
          !totalTime ||
          force ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== isNegative)
        ) {
          time = tTime;
          timeline = this.timeline;
          if (this._repeat) {
            cycleDuration = dur + this._rDelay;
            if (this._repeat < -1 && isNegative) {
              return this.totalTime(
                cycleDuration * 100 + totalTime,
                suppressEvents,
                force
              );
            }
            time = _roundPrecise(tTime % cycleDuration);
            if (tTime === tDur) {
              iteration = this._repeat;
              time = dur;
            } else {
              iteration = ~~(tTime / cycleDuration);
              if (
                iteration &&
                iteration === _roundPrecise(tTime / cycleDuration)
              ) {
                time = dur;
                iteration--;
              }
              time > dur && (time = dur);
            }
            isYoyo = this._yoyo && iteration & 1;
            if (isYoyo) {
              yoyoEase = this._yEase;
              time = dur - time;
            }
            prevIteration = _animationCycle(this._tTime, cycleDuration);
            if (
              time === prevTime &&
              !force &&
              this._initted &&
              iteration === prevIteration
            ) {
              this._tTime = tTime;
              return this;
            }
            if (iteration !== prevIteration) {
              timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
              if (
                this.vars.repeatRefresh &&
                !isYoyo &&
                !this._lock &&
                this._time !== cycleDuration &&
                this._initted
              ) {
                this._lock = force = 1;
                this.render(
                  _roundPrecise(cycleDuration * iteration),
                  true
                ).invalidate()._lock = 0;
              }
            }
          }
          if (!this._initted) {
            if (
              _attemptInitTween(
                this,
                isNegative ? totalTime : time,
                force,
                suppressEvents,
                tTime
              )
            ) {
              this._tTime = 0;
              return this;
            }
            if (
              prevTime !== this._time &&
              !(force && this.vars.repeatRefresh && iteration !== prevIteration)
            ) {
              return this;
            }
            if (dur !== this._dur) {
              return this.render(totalTime, suppressEvents, force);
            }
          }
          this._tTime = tTime;
          this._time = time;
          if (!this._act && this._ts) {
            this._act = 1;
            this._lazy = 0;
          }
          this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
          if (this._from) {
            this.ratio = ratio = 1 - ratio;
          }
          if (time && !prevTime && !suppressEvents && !iteration) {
            _callback$1(this, "onStart");
            if (this._tTime !== tTime) {
              return this;
            }
          }
          pt2 = this._pt;
          while (pt2) {
            pt2.r(ratio, pt2.d);
            pt2 = pt2._next;
          }
          (timeline &&
            timeline.render(
              totalTime < 0
                ? totalTime
                : timeline._dur * timeline._ease(time / this._dur),
              suppressEvents,
              force
            )) ||
            (this._startAt && (this._zTime = totalTime));
          if (this._onUpdate && !suppressEvents) {
            isNegative &&
              _rewindStartAt(this, totalTime, suppressEvents, force);
            _callback$1(this, "onUpdate");
          }
          this._repeat &&
            iteration !== prevIteration &&
            this.vars.onRepeat &&
            !suppressEvents &&
            this.parent &&
            _callback$1(this, "onRepeat");
          if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
            isNegative &&
              !this._onUpdate &&
              _rewindStartAt(this, totalTime, true, true);
            (totalTime || !dur) &&
              ((tTime === this._tDur && this._ts > 0) ||
                (!tTime && this._ts < 0)) &&
              _removeFromParent(this, 1);
            if (
              !suppressEvents &&
              !(isNegative && !prevTime) &&
              (tTime || prevTime || isYoyo)
            ) {
              _callback$1(
                this,
                tTime === tDur ? "onComplete" : "onReverseComplete",
                true
              );
              this._prom &&
                !(tTime < tDur && this.timeScale() > 0) &&
                this._prom();
            }
          }
        }
        return this;
      };
      _proto3.targets = function targets() {
        return this._targets;
      };
      _proto3.invalidate = function invalidate(soft) {
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
      };
      _proto3.resetTo = function resetTo(
        property,
        value,
        start,
        startIsRelative,
        skipRecursion
      ) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(
          this._dur,
          (this._dp._time - this._start) * this._ts
        ),
          ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur);
        if (
          _updatePropTweens(
            this,
            property,
            value,
            start,
            startIsRelative,
            ratio,
            time,
            skipRecursion
          )
        ) {
          return this.resetTo(property, value, start, startIsRelative, 1);
        }
        _alignPlayhead(this, 0);
        this.parent ||
          _addLinkedListItem(
            this._dp,
            this,
            "_first",
            "_last",
            this._dp._sort ? "_start" : 0
          );
        return this.render(0);
      };
      _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
          vars = "all";
        }
        if (!targets && (!vars || vars === "all")) {
          this._lazy = this._pt = 0;
          return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
          var tDur = this.timeline.totalDuration();
          this.timeline.killTweensOf(
            targets,
            vars,
            _overwritingTween && _overwritingTween.vars.overwrite !== true
          )._first || _interrupt(this);
          this.parent &&
            tDur !== this.timeline.totalDuration() &&
            _setDuration(this, (this._dur * this.timeline._tDur) / tDur, 0, 1);
          return this;
        }
        var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p2,
          pt2,
          i2;
        if (
          (!vars || vars === "all") &&
          _arraysMatch(parsedTargets, killingTargets)
        ) {
          vars === "all" && (this._pt = 0);
          return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
          if (_isString$2(vars)) {
            p2 = {};
            _forEachName(vars, function (name) {
              return (p2[name] = 1);
            });
            vars = p2;
          }
          vars = _addAliasesToVars(parsedTargets, vars);
        }
        i2 = parsedTargets.length;
        while (i2--) {
          if (~killingTargets.indexOf(parsedTargets[i2])) {
            curLookup = propTweenLookup[i2];
            if (vars === "all") {
              overwrittenProps[i2] = vars;
              props = curLookup;
              curOverwriteProps = {};
            } else {
              curOverwriteProps = overwrittenProps[i2] =
                overwrittenProps[i2] || {};
              props = vars;
            }
            for (p2 in props) {
              pt2 = curLookup && curLookup[p2];
              if (pt2) {
                if (!("kill" in pt2.d) || pt2.d.kill(p2) === true) {
                  _removeLinkedListItem(this, pt2, "_pt");
                }
                delete curLookup[p2];
              }
              if (curOverwriteProps !== "all") {
                curOverwriteProps[p2] = 1;
              }
            }
          }
        }
        this._initted && !this._pt && firstPT && _interrupt(this);
        return this;
      };
      Tween2.to = function to2(targets, vars) {
        return new Tween2(targets, vars, arguments[2]);
      };
      Tween2.from = function from2(targets, vars) {
        return _createTweenType(1, arguments);
      };
      Tween2.delayedCall = function delayedCall(
        delay,
        callback,
        params,
        scope
      ) {
        return new Tween2(callback, 0, {
          immediateRender: false,
          lazy: false,
          overwrite: false,
          delay,
          onComplete: callback,
          onReverseComplete: callback,
          onCompleteParams: params,
          onReverseCompleteParams: params,
          callbackScope: scope,
        });
      };
      Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
      };
      Tween2.set = function set2(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween2(targets, vars);
      };
      Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
      };
      return Tween2;
    })(Animation);
    _setDefaults$1(Tween.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    });
    _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
      Tween[name] = function () {
        var tl = new Timeline(),
          params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
      };
    });
    var _setterPlain = function _setterPlain2(target, property, value) {
      return (target[property] = value);
    },
      _setterFunc = function _setterFunc2(target, property, value) {
        return target[property](value);
      },
      _setterFuncWithParam = function _setterFuncWithParam2(
        target,
        property,
        value,
        data
      ) {
        return target[property](data.fp, value);
      },
      _setterAttribute = function _setterAttribute2(target, property, value) {
        return target.setAttribute(property, value);
      },
      _getSetter = function _getSetter2(target, property) {
        return _isFunction$2(target[property])
          ? _setterFunc
          : _isUndefined(target[property]) && target.setAttribute
            ? _setterAttribute
            : _setterPlain;
      },
      _renderPlain = function _renderPlain2(ratio, data) {
        return data.set(
          data.t,
          data.p,
          Math.round((data.s + data.c * ratio) * 1e6) / 1e6,
          data
        );
      },
      _renderBoolean = function _renderBoolean2(ratio, data) {
        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
      },
      _renderComplexString = function _renderComplexString2(ratio, data) {
        var pt2 = data._pt,
          s2 = "";
        if (!ratio && data.b) {
          s2 = data.b;
        } else if (ratio === 1 && data.e) {
          s2 = data.e;
        } else {
          while (pt2) {
            s2 =
              pt2.p +
              (pt2.m
                ? pt2.m(pt2.s + pt2.c * ratio)
                : Math.round((pt2.s + pt2.c * ratio) * 1e4) / 1e4) +
              s2;
            pt2 = pt2._next;
          }
          s2 += data.c;
        }
        data.set(data.t, data.p, s2, data);
      },
      _renderPropTweens = function _renderPropTweens2(ratio, data) {
        var pt2 = data._pt;
        while (pt2) {
          pt2.r(ratio, pt2.d);
          pt2 = pt2._next;
        }
      },
      _addPluginModifier = function _addPluginModifier2(
        modifier,
        tween,
        target,
        property
      ) {
        var pt2 = this._pt,
          next;
        while (pt2) {
          next = pt2._next;
          pt2.p === property && pt2.modifier(modifier, tween, target);
          pt2 = next;
        }
      },
      _killPropTweensOf = function _killPropTweensOf2(property) {
        var pt2 = this._pt,
          hasNonDependentRemaining,
          next;
        while (pt2) {
          next = pt2._next;
          if ((pt2.p === property && !pt2.op) || pt2.op === property) {
            _removeLinkedListItem(this, pt2, "_pt");
          } else if (!pt2.dep) {
            hasNonDependentRemaining = 1;
          }
          pt2 = next;
        }
        return !hasNonDependentRemaining;
      },
      _setterWithModifier = function _setterWithModifier2(
        target,
        property,
        value,
        data
      ) {
        data.mSet(
          target,
          property,
          data.m.call(data.tween, value, data.mt),
          data
        );
      },
      _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent2) {
        var pt2 = parent2._pt,
          next,
          pt22,
          first,
          last;
        while (pt2) {
          next = pt2._next;
          pt22 = first;
          while (pt22 && pt22.pr > pt2.pr) {
            pt22 = pt22._next;
          }
          if ((pt2._prev = pt22 ? pt22._prev : last)) {
            pt2._prev._next = pt2;
          } else {
            first = pt2;
          }
          if ((pt2._next = pt22)) {
            pt22._prev = pt2;
          } else {
            last = pt2;
          }
          pt2 = next;
        }
        parent2._pt = first;
      };
    var PropTween = /* @__PURE__ */ (function () {
      function PropTween2(
        next,
        target,
        prop,
        start,
        change,
        renderer,
        data,
        setter,
        priority
      ) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) {
          next._prev = this;
        }
      }
      var _proto4 = PropTween2.prototype;
      _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set;
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target;
        this.tween = tween;
      };
      return PropTween2;
    })();
    _forEachName(
      _callbackNames +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (name) {
        return (_reservedProps[name] = 1);
      }
    );
    _globals.TweenMax = _globals.TweenLite = Tween;
    _globals.TimelineLite = _globals.TimelineMax = Timeline;
    _globalTimeline = new Timeline({
      sortChildren: false,
      defaults: _defaults$1,
      autoRemoveChildren: true,
      id: "root",
      smoothChildTiming: true,
    });
    _config$1.stringFilter = _colorStringFilter;
    var _media = [],
      _listeners$1 = {},
      _emptyArray$1 = [],
      _lastMediaTime = 0,
      _contextID = 0,
      _dispatch$1 = function _dispatch2(type) {
        return (_listeners$1[type] || _emptyArray$1).map(function (f2) {
          return f2();
        });
      },
      _onMediaChange = function _onMediaChange2() {
        var time = Date.now(),
          matches = [];
        if (time - _lastMediaTime > 2) {
          _dispatch$1("matchMediaInit");
          _media.forEach(function (c2) {
            var queries = c2.queries,
              conditions = c2.conditions,
              match,
              p2,
              anyMatch,
              toggled;
            for (p2 in queries) {
              match = _win$3.matchMedia(queries[p2]).matches;
              match && (anyMatch = 1);
              if (match !== conditions[p2]) {
                conditions[p2] = match;
                toggled = 1;
              }
            }
            if (toggled) {
              c2.revert();
              anyMatch && matches.push(c2);
            }
          });
          _dispatch$1("matchMediaRevert");
          matches.forEach(function (c2) {
            return c2.onMatch(c2, function (func) {
              return c2.add(null, func);
            });
          });
          _lastMediaTime = time;
          _dispatch$1("matchMedia");
        }
      };
    var Context = /* @__PURE__ */ (function () {
      function Context2(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = [];
        this.isReverted = false;
        this.id = _contextID++;
        func && this.add(func);
      }
      var _proto5 = Context2.prototype;
      _proto5.add = function add2(name, func, scope) {
        if (_isFunction$2(name)) {
          scope = func;
          func = name;
          name = _isFunction$2;
        }
        var self2 = this,
          f2 = function f3() {
            var prev = _context$2,
              prevSelector = self2.selector,
              result;
            prev && prev !== self2 && prev.data.push(self2);
            scope && (self2.selector = selector(scope));
            _context$2 = self2;
            result = func.apply(self2, arguments);
            _isFunction$2(result) && self2._r.push(result);
            _context$2 = prev;
            self2.selector = prevSelector;
            self2.isReverted = false;
            return result;
          };
        self2.last = f2;
        return name === _isFunction$2
          ? f2(self2, function (func2) {
            return self2.add(null, func2);
          })
          : name
            ? (self2[name] = f2)
            : f2;
      };
      _proto5.ignore = function ignore(func) {
        var prev = _context$2;
        _context$2 = null;
        func(this);
        _context$2 = prev;
      };
      _proto5.getTweens = function getTweens() {
        var a2 = [];
        this.data.forEach(function (e2) {
          return e2 instanceof Context2
            ? a2.push.apply(a2, e2.getTweens())
            : e2 instanceof Tween &&
            !(e2.parent && e2.parent.data === "nested") &&
            a2.push(e2);
        });
        return a2;
      };
      _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
      };
      _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
          (function () {
            var tweens = _this4.getTweens(),
              i3 = _this4.data.length,
              t2;
            while (i3--) {
              t2 = _this4.data[i3];
              if (t2.data === "isFlip") {
                t2.revert();
                t2.getChildren(true, true, false).forEach(function (tween) {
                  return tweens.splice(tweens.indexOf(tween), 1);
                });
              }
            }
            tweens
              .map(function (t3) {
                return {
                  g:
                    t3._dur ||
                      t3._delay ||
                      (t3._sat && !t3._sat.vars.immediateRender)
                      ? t3.globalTime(0)
                      : -Infinity,
                  t: t3,
                };
              })
              .sort(function (a2, b2) {
                return b2.g - a2.g || -Infinity;
              })
              .forEach(function (o2) {
                return o2.t.revert(revert);
              });
            i3 = _this4.data.length;
            while (i3--) {
              t2 = _this4.data[i3];
              if (t2 instanceof Timeline) {
                if (t2.data !== "nested") {
                  t2.scrollTrigger && t2.scrollTrigger.revert();
                  t2.kill();
                }
              } else {
                !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
              }
            }
            _this4._r.forEach(function (f2) {
              return f2(revert, _this4);
            });
            _this4.isReverted = true;
          })();
        } else {
          this.data.forEach(function (e2) {
            return e2.kill && e2.kill();
          });
        }
        this.clear();
        if (matchMedia) {
          var i2 = _media.length;
          while (i2--) {
            _media[i2].id === this.id && _media.splice(i2, 1);
          }
        }
      };
      _proto5.revert = function revert(config) {
        this.kill(config || {});
      };
      return Context2;
    })();
    var MatchMedia = /* @__PURE__ */ (function () {
      function MatchMedia2(scope) {
        this.contexts = [];
        this.scope = scope;
        _context$2 && _context$2.data.push(this);
      }
      var _proto6 = MatchMedia2.prototype;
      _proto6.add = function add2(conditions, func, scope) {
        _isObject$1(conditions) ||
          (conditions = {
            matches: conditions,
          });
        var context = new Context(0, scope || this.scope),
          cond = (context.conditions = {}),
          mq,
          p2,
          active;
        _context$2 &&
          !context.selector &&
          (context.selector = _context$2.selector);
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for (p2 in conditions) {
          if (p2 === "all") {
            active = 1;
          } else {
            mq = _win$3.matchMedia(conditions[p2]);
            if (mq) {
              _media.indexOf(context) < 0 && _media.push(context);
              (cond[p2] = mq.matches) && (active = 1);
              mq.addListener
                ? mq.addListener(_onMediaChange)
                : mq.addEventListener("change", _onMediaChange);
            }
          }
        }
        active &&
          func(context, function (f2) {
            return context.add(null, f2);
          });
        return this;
      };
      _proto6.revert = function revert(config) {
        this.kill(config || {});
      };
      _proto6.kill = function kill(revert) {
        this.contexts.forEach(function (c2) {
          return c2.kill(revert, true);
        });
      };
      return MatchMedia2;
    })();
    var _gsap = {
      registerPlugin: function registerPlugin() {
        for (
          var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
          _key2 < _len2;
          _key2++
        ) {
          args[_key2] = arguments[_key2];
        }
        args.forEach(function (config) {
          return _createPlugin(config);
        });
      },
      timeline: function timeline(vars) {
        return new Timeline(vars);
      },
      getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
      },
      getProperty: function getProperty(target, property, unit, uncache) {
        _isString$2(target) && (target = toArray(target)[0]);
        var getter = _getCache(target || {}).get,
          format2 = unit ? _passThrough$1 : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target
          ? target
          : !property
            ? function (property2, unit2, uncache2) {
              return format2(
                ((_plugins[property2] && _plugins[property2].get) || getter)(
                  target,
                  property2,
                  unit2,
                  uncache2
                )
              );
            }
            : format2(
              ((_plugins[property] && _plugins[property].get) || getter)(
                target,
                property,
                unit,
                uncache
              )
            );
      },
      quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
          var setters = target.map(function (t2) {
            return gsap$3.quickSetter(t2, property, unit);
          }),
            l2 = setters.length;
          return function (value) {
            var i2 = l2;
            while (i2--) {
              setters[i2](value);
            }
          };
        }
        target = target[0] || {};
        var Plugin = _plugins[property],
          cache = _getCache(target),
          p2 =
            (cache.harness && (cache.harness.aliases || {})[property]) ||
            property,
          setter = Plugin
            ? function (value) {
              var p3 = new Plugin();
              _quickTween._pt = 0;
              p3.init(target, unit ? value + unit : value, _quickTween, 0, [
                target,
              ]);
              p3.render(1, p3);
              _quickTween._pt && _renderPropTweens(1, _quickTween);
            }
            : cache.set(target, p2);
        return Plugin
          ? setter
          : function (value) {
            return setter(target, p2, unit ? value + unit : value, cache, 1);
          };
      },
      quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = gsap$3.to(
          target,
          _merge(
            ((_merge2 = {}),
              (_merge2[property] = "+=0.1"),
              (_merge2.paused = true),
              _merge2),
            vars || {}
          )
        ),
          func = function func2(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
          };
        func.tween = tween;
        return func;
      },
      isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
      },
      defaults: function defaults2(value) {
        value &&
          value.ease &&
          (value.ease = _parseEase(value.ease, _defaults$1.ease));
        return _mergeDeep(_defaults$1, value || {});
      },
      config: function config(value) {
        return _mergeDeep(_config$1, value || {});
      },
      registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name,
          effect = _ref3.effect,
          plugins = _ref3.plugins,
          defaults2 = _ref3.defaults,
          extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function (pluginName) {
          return (
            pluginName &&
            !_plugins[pluginName] &&
            !_globals[pluginName] &&
            _warn(name + " effect requires " + pluginName + " plugin.")
          );
        });
        _effects[name] = function (targets, vars, tl) {
          return effect(
            toArray(targets),
            _setDefaults$1(vars || {}, defaults2),
            tl
          );
        };
        if (extendTimeline) {
          Timeline.prototype[name] = function (targets, vars, position) {
            return this.add(
              _effects[name](
                targets,
                _isObject$1(vars) ? vars : (position = vars) && {},
                this
              ),
              position
            );
          };
        }
      },
      registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
      },
      parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
      },
      getById: function getById(id) {
        return _globalTimeline.getById(id);
      },
      exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
          vars = {};
        }
        var tl = new Timeline(vars),
          child,
          next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0;
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while (child) {
          next = child._next;
          if (
            includeDelayedCalls ||
            !(
              !child._dur &&
              child instanceof Tween &&
              child.vars.onComplete === child._targets[0]
            )
          ) {
            _addToTimeline(tl, child, child._start - child._delay);
          }
          child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
      },
      context: function context(func, scope) {
        return func ? new Context(func, scope) : _context$2;
      },
      matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
      },
      matchMediaRefresh: function matchMediaRefresh() {
        return (
          _media.forEach(function (c2) {
            var cond = c2.conditions,
              found,
              p2;
            for (p2 in cond) {
              if (cond[p2]) {
                cond[p2] = false;
                found = 1;
              }
            }
            found && c2.revert();
          }) || _onMediaChange()
        );
      },
      addEventListener: function addEventListener(type, callback) {
        var a2 = _listeners$1[type] || (_listeners$1[type] = []);
        ~a2.indexOf(callback) || a2.push(callback);
      },
      removeEventListener: function removeEventListener(type, callback) {
        var a2 = _listeners$1[type],
          i2 = a2 && a2.indexOf(callback);
        i2 >= 0 && a2.splice(i2, 1);
      },
      utils: {
        wrap,
        wrapYoyo,
        distribute,
        random,
        snap,
        normalize,
        getUnit,
        clamp,
        splitColor,
        toArray,
        selector,
        mapRange,
        pipe,
        unitize,
        interpolate,
        shuffle,
      },
      install: _install,
      effects: _effects,
      ticker: _ticker,
      updateRoot: Timeline.updateRoot,
      plugins: _plugins,
      globalTimeline: _globalTimeline,
      core: {
        PropTween,
        globals: _addGlobal,
        Tween,
        Timeline,
        Animation,
        getCache: _getCache,
        _removeLinkedListItem,
        reverting: function reverting() {
          return _reverting$1;
        },
        context: function context(toAdd) {
          if (toAdd && _context$2) {
            _context$2.data.push(toAdd);
            toAdd._ctx = _context$2;
          }
          return _context$2;
        },
        suppressOverwrites: function suppressOverwrites(value) {
          return (_suppressOverwrites$1 = value);
        },
      },
    };
    _forEachName(
      "to,from,fromTo,delayedCall,set,killTweensOf",
      function (name) {
        return (_gsap[name] = Tween[name]);
      }
    );
    _ticker.add(Timeline.updateRoot);
    _quickTween = _gsap.to(
      {},
      {
        duration: 0,
      }
    );
    var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
      var pt2 = plugin._pt;
      while (pt2 && pt2.p !== prop && pt2.op !== prop && pt2.fp !== prop) {
        pt2 = pt2._next;
      }
      return pt2;
    },
      _addModifiers = function _addModifiers2(tween, modifiers) {
        var targets = tween._targets,
          p2,
          i2,
          pt2;
        for (p2 in modifiers) {
          i2 = targets.length;
          while (i2--) {
            pt2 = tween._ptLookup[i2][p2];
            if (pt2 && (pt2 = pt2.d)) {
              if (pt2._pt) {
                pt2 = _getPluginPropTween(pt2, p2);
              }
              pt2 &&
                pt2.modifier &&
                pt2.modifier(modifiers[p2], tween, targets[i2], p2);
            }
          }
        }
      },
      _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
        return {
          name,
          rawVars: 1,
          //don't pre-process function-based values or "random()" strings.
          init: function init(target, vars, tween) {
            tween._onInit = function (tween2) {
              var temp, p2;
              if (_isString$2(vars)) {
                temp = {};
                _forEachName(vars, function (name2) {
                  return (temp[name2] = 1);
                });
                vars = temp;
              }
              if (modifier) {
                temp = {};
                for (p2 in vars) {
                  temp[p2] = modifier(vars[p2]);
                }
                vars = temp;
              }
              _addModifiers(tween2, vars);
            };
          },
        };
      };
    var gsap$3 =
      _gsap.registerPlugin(
        {
          name: "attr",
          init: function init(target, vars, tween, index, targets) {
            var p2, pt2, v2;
            this.tween = tween;
            for (p2 in vars) {
              v2 = target.getAttribute(p2) || "";
              pt2 = this.add(
                target,
                "setAttribute",
                (v2 || 0) + "",
                vars[p2],
                index,
                targets,
                0,
                0,
                p2
              );
              pt2.op = p2;
              pt2.b = v2;
              this._props.push(p2);
            }
          },
          render: function render(ratio, data) {
            var pt2 = data._pt;
            while (pt2) {
              _reverting$1
                ? pt2.set(pt2.t, pt2.p, pt2.b, pt2)
                : pt2.r(ratio, pt2.d);
              pt2 = pt2._next;
            }
          },
        },
        {
          name: "endArray",
          init: function init(target, value) {
            var i2 = value.length;
            while (i2--) {
              this.add(
                target,
                i2,
                target[i2] || 0,
                value[i2],
                0,
                0,
                0,
                0,
                0,
                1
              );
            }
          },
        },
        _buildModifierPlugin("roundProps", _roundModifier),
        _buildModifierPlugin("modifiers"),
        _buildModifierPlugin("snap", snap)
      ) || _gsap;
    Tween.version = Timeline.version = gsap$3.version = "3.12.5";
    _coreReady = 1;
    _windowExists$3() && _wake();
    var Power0 = _easeMap.Power0;
    _easeMap.Power1;
    _easeMap.Power2;
    var Power3 = _easeMap.Power3;
    _easeMap.Power4;
    _easeMap.Linear;
    _easeMap.Quad;
    _easeMap.Cubic;
    _easeMap.Quart;
    _easeMap.Quint;
    _easeMap.Strong;
    _easeMap.Elastic;
    var Back = _easeMap.Back;
    _easeMap.SteppedEase;
    _easeMap.Bounce;
    _easeMap.Sine;
    _easeMap.Expo;
    _easeMap.Circ;
    /*!
     * CSSPlugin 3.12.5
     * https://gsap.com
     *
     * Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var _win$2,
      _doc$2,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _recentSetterPlugin,
      _reverting,
      _windowExists$2 = function _windowExists2() {
        return typeof window !== "undefined";
      },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum = 1e8,
      _capsExp$1 = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      _renderCSSProp = function _renderCSSProp2(ratio, data) {
        return data.set(
          data.t,
          data.p,
          Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u,
          data
        );
      },
      _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
        return data.set(
          data.t,
          data.p,
          ratio === 1
            ? data.e
            : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u,
          data
        );
      },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(
        ratio,
        data
      ) {
        return data.set(
          data.t,
          data.p,
          ratio
            ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u
            : data.b,
          data
        );
      },
      _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
        var value = data.s + data.c * ratio;
        data.set(
          data.t,
          data.p,
          ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u,
          data
        );
      },
      _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
      },
      _renderNonTweeningValueOnlyAtEnd =
        function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
          return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        },
      _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
        return (target.style[property] = value);
      },
      _setterCSSProp = function _setterCSSProp2(target, property, value) {
        return target.style.setProperty(property, value);
      },
      _setterTransform = function _setterTransform2(target, property, value) {
        return (target._gsap[property] = value);
      },
      _setterScale = function _setterScale2(target, property, value) {
        return (target._gsap.scaleX = target._gsap.scaleY = value);
      },
      _setterScaleWithRender = function _setterScaleWithRender2(
        target,
        property,
        value,
        data,
        ratio
      ) {
        var cache = target._gsap;
        cache.scaleX = cache.scaleY = value;
        cache.renderTransform(ratio, cache);
      },
      _setterTransformWithRender = function _setterTransformWithRender2(
        target,
        property,
        value,
        data,
        ratio
      ) {
        var cache = target._gsap;
        cache[property] = value;
        cache.renderTransform(ratio, cache);
      },
      _transformProp$1 = "transform",
      _transformOriginProp = _transformProp$1 + "Origin",
      _saveStyle = function _saveStyle2(property, isNotCSS) {
        var _this = this;
        var target = this.target,
          style = target.style,
          cache = target._gsap;
        if (property in _transformProps && style) {
          this.tfm = this.tfm || {};
          if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",")
              ? property.split(",").forEach(function (a2) {
                return (_this.tfm[a2] = _get(target, a2));
              })
              : (this.tfm[property] = cache.x
                ? cache[property]
                : _get(target, property));
            property === _transformOriginProp &&
              (this.tfm.zOrigin = cache.zOrigin);
          } else {
            return _propertyAliases.transform.split(",").forEach(function (p2) {
              return _saveStyle2.call(_this, p2, isNotCSS);
            });
          }
          if (this.props.indexOf(_transformProp$1) >= 0) {
            return;
          }
          if (cache.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
          }
          property = _transformProp$1;
        }
        (style || isNotCSS) &&
          this.props.push(property, isNotCSS, style[property]);
      },
      _removeIndependentTransforms = function _removeIndependentTransforms2(
        style
      ) {
        if (style.translate) {
          style.removeProperty("translate");
          style.removeProperty("scale");
          style.removeProperty("rotate");
        }
      },
      _revertStyle = function _revertStyle2() {
        var props = this.props,
          target = this.target,
          style = target.style,
          cache = target._gsap,
          i2,
          p2;
        for (i2 = 0; i2 < props.length; i2 += 3) {
          props[i2 + 1]
            ? (target[props[i2]] = props[i2 + 2])
            : props[i2 + 2]
              ? (style[props[i2]] = props[i2 + 2])
              : style.removeProperty(
                props[i2].substr(0, 2) === "--"
                  ? props[i2]
                  : props[i2].replace(_capsExp$1, "-$1").toLowerCase()
              );
        }
        if (this.tfm) {
          for (p2 in this.tfm) {
            cache[p2] = this.tfm[p2];
          }
          if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
          }
          i2 = _reverting();
          if ((!i2 || !i2.isStart) && !style[_transformProp$1]) {
            _removeIndependentTransforms(style);
            if (cache.zOrigin && style[_transformOriginProp]) {
              style[_transformOriginProp] += " " + cache.zOrigin + "px";
              cache.zOrigin = 0;
              cache.renderTransform();
            }
            cache.uncache = 1;
          }
        }
      },
      _getStyleSaver = function _getStyleSaver2(target, properties) {
        var saver = {
          target,
          props: [],
          revert: _revertStyle,
          save: _saveStyle,
        };
        target._gsap || gsap$3.core.getCache(target);
        properties &&
          properties.split(",").forEach(function (p2) {
            return saver.save(p2);
          });
        return saver;
      },
      _supports3D,
      _createElement = function _createElement2(type, ns) {
        var e2 = _doc$2.createElementNS
          ? _doc$2.createElementNS(
            (ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            type
          )
          : _doc$2.createElement(type);
        return e2 && e2.style ? e2 : _doc$2.createElement(type);
      },
      _getComputedProperty = function _getComputedProperty2(
        target,
        property,
        skipPrefixFallback
      ) {
        var cs = getComputedStyle(target);
        return (
          cs[property] ||
          cs.getPropertyValue(
            property.replace(_capsExp$1, "-$1").toLowerCase()
          ) ||
          cs.getPropertyValue(property) ||
          (!skipPrefixFallback &&
            _getComputedProperty2(
              target,
              _checkPropPrefix(property) || property,
              1
            )) ||
          ""
        );
      },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix2(
        property,
        element,
        preferPrefix
      ) {
        var e2 = element || _tempDiv,
          s2 = e2.style,
          i2 = 5;
        if (property in s2 && !preferPrefix) {
          return property;
        }
        property = property.charAt(0).toUpperCase() + property.substr(1);
        while (i2-- && !(_prefixes[i2] + property in s2)) { }
        return i2 < 0
          ? null
          : (i2 === 3 ? "ms" : i2 >= 0 ? _prefixes[i2] : "") + property;
      },
      _initCore$2 = function _initCore2() {
        if (_windowExists$2() && window.document) {
          _win$2 = window;
          _doc$2 = _win$2.document;
          _docElement = _doc$2.documentElement;
          _tempDiv = _createElement("div") || {
            style: {},
          };
          _createElement("div");
          _transformProp$1 = _checkPropPrefix(_transformProp$1);
          _transformOriginProp = _transformProp$1 + "Origin";
          _tempDiv.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0";
          _supports3D = !!_checkPropPrefix("perspective");
          _reverting = gsap$3.core.reverting;
          _pluginInitted = 1;
        }
      },
      _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
        var svg = _createElement(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
        ),
          oldParent = this.parentNode,
          oldSibling = this.nextSibling,
          oldCSS = this.style.cssText,
          bbox;
        _docElement.appendChild(svg);
        svg.appendChild(this);
        this.style.display = "block";
        if (swapIfPossible) {
          try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox;
            this.getBBox = _getBBoxHack2;
          } catch (e2) { }
        } else if (this._gsapBBox) {
          bbox = this._gsapBBox();
        }
        if (oldParent) {
          if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
          } else {
            oldParent.appendChild(this);
          }
        }
        _docElement.removeChild(svg);
        this.style.cssText = oldCSS;
        return bbox;
      },
      _getAttributeFallbacks = function _getAttributeFallbacks2(
        target,
        attributesArray
      ) {
        var i2 = attributesArray.length;
        while (i2--) {
          if (target.hasAttribute(attributesArray[i2])) {
            return target.getAttribute(attributesArray[i2]);
          }
        }
      },
      _getBBox = function _getBBox2(target) {
        var bounds;
        try {
          bounds = target.getBBox();
        } catch (error) {
          bounds = _getBBoxHack.call(target, true);
        }
        (bounds && (bounds.width || bounds.height)) ||
          target.getBBox === _getBBoxHack ||
          (bounds = _getBBoxHack.call(target, true));
        return bounds && !bounds.width && !bounds.x && !bounds.y
          ? {
            x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
            y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
          : bounds;
      },
      _isSVG = function _isSVG2(e2) {
        return !!(
          e2.getCTM &&
          (!e2.parentNode || e2.ownerSVGElement) &&
          _getBBox(e2)
        );
      },
      _removeProperty = function _removeProperty2(target, property) {
        if (property) {
          var style = target.style,
            first2Chars;
          if (
            property in _transformProps &&
            property !== _transformOriginProp
          ) {
            property = _transformProp$1;
          }
          if (style.removeProperty) {
            first2Chars = property.substr(0, 2);
            if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
              property = "-" + property;
            }
            style.removeProperty(
              first2Chars === "--"
                ? property
                : property.replace(_capsExp$1, "-$1").toLowerCase()
            );
          } else {
            style.removeAttribute(property);
          }
        }
      },
      _addNonTweeningPT = function _addNonTweeningPT2(
        plugin,
        target,
        property,
        beginning,
        end,
        onlySetAtEnd
      ) {
        var pt2 = new PropTween(
          plugin._pt,
          target,
          property,
          0,
          1,
          onlySetAtEnd
            ? _renderNonTweeningValueOnlyAtEnd
            : _renderNonTweeningValue
        );
        plugin._pt = pt2;
        pt2.b = beginning;
        pt2.e = end;
        plugin._props.push(property);
        return pt2;
      },
      _nonConvertibleUnits = {
        deg: 1,
        rad: 1,
        turn: 1,
      },
      _nonStandardLayouts = {
        grid: 1,
        flex: 1,
      },
      _convertToUnit = function _convertToUnit2(target, property, value, unit) {
        var curValue = parseFloat(value) || 0,
          curUnit = (value + "").trim().substr((curValue + "").length) || "px",
          style = _tempDiv.style,
          horizontal = _horizontalExp.test(property),
          isRootSVG = target.tagName.toLowerCase() === "svg",
          measureProperty =
            (isRootSVG ? "client" : "offset") +
            (horizontal ? "Width" : "Height"),
          amount = 100,
          toPixels = unit === "px",
          toPercent = unit === "%",
          px,
          parent2,
          cache,
          isSVG;
        if (
          unit === curUnit ||
          !curValue ||
          _nonConvertibleUnits[unit] ||
          _nonConvertibleUnits[curUnit]
        ) {
          return curValue;
        }
        curUnit !== "px" &&
          !toPixels &&
          (curValue = _convertToUnit2(target, property, value, "px"));
        isSVG = target.getCTM && _isSVG(target);
        if (
          (toPercent || curUnit === "%") &&
          (_transformProps[property] || ~property.indexOf("adius"))
        ) {
          px = isSVG
            ? target.getBBox()[horizontal ? "width" : "height"]
            : target[measureProperty];
          return _round$1(
            toPercent ? (curValue / px) * amount : (curValue / 100) * px
          );
        }
        style[horizontal ? "width" : "height"] =
          amount + (toPixels ? curUnit : unit);
        parent2 =
          ~property.indexOf("adius") ||
            (unit === "em" && target.appendChild && !isRootSVG)
            ? target
            : target.parentNode;
        if (isSVG) {
          parent2 = (target.ownerSVGElement || {}).parentNode;
        }
        if (!parent2 || parent2 === _doc$2 || !parent2.appendChild) {
          parent2 = _doc$2.body;
        }
        cache = parent2._gsap;
        if (
          cache &&
          toPercent &&
          cache.width &&
          horizontal &&
          cache.time === _ticker.time &&
          !cache.uncache
        ) {
          return _round$1((curValue / cache.width) * amount);
        } else {
          if (toPercent && (property === "height" || property === "width")) {
            var v2 = target.style[property];
            target.style[property] = amount + unit;
            px = target[measureProperty];
            v2
              ? (target.style[property] = v2)
              : _removeProperty(target, property);
          } else {
            (toPercent || curUnit === "%") &&
              !_nonStandardLayouts[_getComputedProperty(parent2, "display")] &&
              (style.position = _getComputedProperty(target, "position"));
            parent2 === target && (style.position = "static");
            parent2.appendChild(_tempDiv);
            px = _tempDiv[measureProperty];
            parent2.removeChild(_tempDiv);
            style.position = "absolute";
          }
          if (horizontal && toPercent) {
            cache = _getCache(parent2);
            cache.time = _ticker.time;
            cache.width = parent2[measureProperty];
          }
        }
        return _round$1(
          toPixels
            ? (px * curValue) / amount
            : px && curValue
              ? (amount / px) * curValue
              : 0
        );
      },
      _get = function _get2(target, property, unit, uncache) {
        var value;
        _pluginInitted || _initCore$2();
        if (property in _propertyAliases && property !== "transform") {
          property = _propertyAliases[property];
          if (~property.indexOf(",")) {
            property = property.split(",")[0];
          }
        }
        if (_transformProps[property] && property !== "transform") {
          value = _parseTransform(target, uncache);
          value =
            property !== "transformOrigin"
              ? value[property]
              : value.svg
                ? value.origin
                : _firstTwoOnly(
                  _getComputedProperty(target, _transformOriginProp)
                ) +
                " " +
                value.zOrigin +
                "px";
        } else {
          value = target.style[property];
          if (
            !value ||
            value === "auto" ||
            uncache ||
            ~(value + "").indexOf("calc(")
          ) {
            value =
              (_specialProps[property] &&
                _specialProps[property](target, property, unit)) ||
              _getComputedProperty(target, property) ||
              _getProperty(target, property) ||
              (property === "opacity" ? 1 : 0);
          }
        }
        return unit && !~(value + "").trim().indexOf(" ")
          ? _convertToUnit(target, property, value, unit) + unit
          : value;
      },
      _tweenComplexCSSString = function _tweenComplexCSSString2(
        target,
        prop,
        start,
        end
      ) {
        if (!start || start === "none") {
          var p2 = _checkPropPrefix(prop, target, 1),
            s2 = p2 && _getComputedProperty(target, p2, 1);
          if (s2 && s2 !== start) {
            prop = p2;
            start = s2;
          } else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor");
          }
        }
        var pt2 = new PropTween(
          this._pt,
          target.style,
          prop,
          0,
          1,
          _renderComplexString
        ),
          index = 0,
          matchIndex = 0,
          a2,
          result,
          startValues,
          startNum,
          color,
          startValue,
          endValue,
          endNum,
          chunk,
          endUnit,
          startUnit,
          endValues;
        pt2.b = start;
        pt2.e = end;
        start += "";
        end += "";
        if (end === "auto") {
          startValue = target.style[prop];
          target.style[prop] = end;
          end = _getComputedProperty(target, prop) || end;
          startValue
            ? (target.style[prop] = startValue)
            : _removeProperty(target, prop);
        }
        a2 = [start, end];
        _colorStringFilter(a2);
        start = a2[0];
        end = a2[1];
        startValues = start.match(_numWithUnitExp) || [];
        endValues = end.match(_numWithUnitExp) || [];
        if (endValues.length) {
          while ((result = _numWithUnitExp.exec(end))) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
              color = (color + 1) % 5;
            } else if (
              chunk.substr(-5) === "rgba(" ||
              chunk.substr(-5) === "hsla("
            ) {
              color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
              startNum = parseFloat(startValue) || 0;
              startUnit = startValue.substr((startNum + "").length);
              endValue.charAt(1) === "=" &&
                (endValue = _parseRelative(startNum, endValue) + startUnit);
              endNum = parseFloat(endValue);
              endUnit = endValue.substr((endNum + "").length);
              index = _numWithUnitExp.lastIndex - endUnit.length;
              if (!endUnit) {
                endUnit = endUnit || _config$1.units[prop] || startUnit;
                if (index === end.length) {
                  end += endUnit;
                  pt2.e += endUnit;
                }
              }
              if (startUnit !== endUnit) {
                startNum =
                  _convertToUnit(target, prop, startValue, endUnit) || 0;
              }
              pt2._pt = {
                _next: pt2._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum - startNum,
                m: (color && color < 4) || prop === "zIndex" ? Math.round : 0,
              };
            }
          }
          pt2.c = index < end.length ? end.substring(index, end.length) : "";
        } else {
          pt2.r =
            prop === "display" && end === "none"
              ? _renderNonTweeningValueOnlyAtEnd
              : _renderNonTweeningValue;
        }
        _relExp.test(end) && (pt2.e = 0);
        this._pt = pt2;
        return pt2;
      },
      _keywordToPercent = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(
        value
      ) {
        var split = value.split(" "),
          x2 = split[0],
          y2 = split[1] || "50%";
        if (
          x2 === "top" ||
          x2 === "bottom" ||
          y2 === "left" ||
          y2 === "right"
        ) {
          value = x2;
          x2 = y2;
          y2 = value;
        }
        split[0] = _keywordToPercent[x2] || x2;
        split[1] = _keywordToPercent[y2] || y2;
        return split.join(" ");
      },
      _renderClearProps = function _renderClearProps2(ratio, data) {
        if (data.tween && data.tween._time === data.tween._dur) {
          var target = data.t,
            style = target.style,
            props = data.u,
            cache = target._gsap,
            prop,
            clearTransforms,
            i2;
          if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
          } else {
            props = props.split(",");
            i2 = props.length;
            while (--i2 > -1) {
              prop = props[i2];
              if (_transformProps[prop]) {
                clearTransforms = 1;
                prop =
                  prop === "transformOrigin"
                    ? _transformOriginProp
                    : _transformProp$1;
              }
              _removeProperty(target, prop);
            }
          }
          if (clearTransforms) {
            _removeProperty(target, _transformProp$1);
            if (cache) {
              cache.svg && target.removeAttribute("transform");
              _parseTransform(target, 1);
              cache.uncache = 1;
              _removeIndependentTransforms(style);
            }
          }
        }
      },
      _specialProps = {
        clearProps: function clearProps(
          plugin,
          target,
          property,
          endValue,
          tween
        ) {
          if (tween.data !== "isFromStart") {
            var pt2 = (plugin._pt = new PropTween(
              plugin._pt,
              target,
              property,
              0,
              0,
              _renderClearProps
            ));
            pt2.u = endValue;
            pt2.pr = -10;
            pt2.tween = tween;
            plugin._props.push(property);
            return 1;
          }
        },
        /* className feature (about 0.4kb gzipped).
      , className(plugin, target, property, endValue, tween) {
        let _renderClassName = (ratio, data) => {
            data.css.render(ratio, data.css);
            if (!ratio || ratio === 1) {
              let inline = data.rmv,
                target = data.t,
                p;
              target.setAttribute("class", ratio ? data.e : data.b);
              for (p in inline) {
                _removeProperty(target, p);
              }
            }
          },
          _getAllStyles = (target) => {
            let styles = {},
              computed = getComputedStyle(target),
              p;
            for (p in computed) {
              if (isNaN(p) && p !== "cssText" && p !== "length") {
                styles[p] = computed[p];
              }
            }
            _setDefaults(styles, _parseTransform(target, 1));
            return styles;
          },
          startClassList = target.getAttribute("class"),
          style = target.style,
          cssText = style.cssText,
          cache = target._gsap,
          classPT = cache.classPT,
          inlineToRemoveAtEnd = {},
          data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
          changingVars = {},
          startVars = _getAllStyles(target),
          transformRelated = /(transform|perspective)/i,
          endVars, p;
        if (classPT) {
          classPT.r(1, classPT.d);
          _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
        }
        target.setAttribute("class", data.e);
        endVars = _getAllStyles(target, true);
        target.setAttribute("class", startClassList);
        for (p in endVars) {
          if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
            changingVars[p] = endVars[p];
            if (!style[p] && style[p] !== "0") {
              inlineToRemoveAtEnd[p] = 1;
            }
          }
        }
        cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
        if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
          style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        }
        _parseTransform(target, true); //to clear the caching of transforms
        data.css = new gsap.plugins.css();
        data.css.init(target, changingVars, tween);
        plugin._props.push(...data.css._props);
        return 1;
      }
      */
      },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform2(value) {
        return (
          value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value
        );
      },
      _getComputedTransformMatrixAsArray =
        function _getComputedTransformMatrixAsArray2(target) {
          var matrixString = _getComputedProperty(target, _transformProp$1);
          return _isNullTransform(matrixString)
            ? _identity2DMatrix
            : matrixString.substr(7).match(_numExp).map(_round$1);
        },
      _getMatrix = function _getMatrix2(target, force2D) {
        var cache = target._gsap || _getCache(target),
          style = target.style,
          matrix = _getComputedTransformMatrixAsArray(target),
          parent2,
          nextSibling,
          temp,
          addedToDOM;
        if (cache.svg && target.getAttribute("transform")) {
          temp = target.transform.baseVal.consolidate().matrix;
          matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
          return matrix.join(",") === "1,0,0,1,0,0"
            ? _identity2DMatrix
            : matrix;
        } else if (
          matrix === _identity2DMatrix &&
          !target.offsetParent &&
          target !== _docElement &&
          !cache.svg
        ) {
          temp = style.display;
          style.display = "block";
          parent2 = target.parentNode;
          if (!parent2 || !target.offsetParent) {
            addedToDOM = 1;
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target);
          }
          matrix = _getComputedTransformMatrixAsArray(target);
          temp ? (style.display = temp) : _removeProperty(target, "display");
          if (addedToDOM) {
            nextSibling
              ? parent2.insertBefore(target, nextSibling)
              : parent2
                ? parent2.appendChild(target)
                : _docElement.removeChild(target);
          }
        }
        return force2D && matrix.length > 6
          ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]]
          : matrix;
      },
      _applySVGOrigin = function _applySVGOrigin2(
        target,
        origin,
        originIsAbsolute,
        smooth,
        matrixArray,
        pluginToAddPropTweensTo
      ) {
        var cache = target._gsap,
          matrix = matrixArray || _getMatrix(target, true),
          xOriginOld = cache.xOrigin || 0,
          yOriginOld = cache.yOrigin || 0,
          xOffsetOld = cache.xOffset || 0,
          yOffsetOld = cache.yOffset || 0,
          a2 = matrix[0],
          b2 = matrix[1],
          c2 = matrix[2],
          d2 = matrix[3],
          tx = matrix[4],
          ty = matrix[5],
          originSplit = origin.split(" "),
          xOrigin = parseFloat(originSplit[0]) || 0,
          yOrigin = parseFloat(originSplit[1]) || 0,
          bounds,
          determinant,
          x2,
          y2;
        if (!originIsAbsolute) {
          bounds = _getBBox(target);
          xOrigin =
            bounds.x +
            (~originSplit[0].indexOf("%")
              ? (xOrigin / 100) * bounds.width
              : xOrigin);
          yOrigin =
            bounds.y +
            (~(originSplit[1] || originSplit[0]).indexOf("%")
              ? (yOrigin / 100) * bounds.height
              : yOrigin);
        } else if (
          matrix !== _identity2DMatrix &&
          (determinant = a2 * d2 - b2 * c2)
        ) {
          x2 =
            xOrigin * (d2 / determinant) +
            yOrigin * (-c2 / determinant) +
            (c2 * ty - d2 * tx) / determinant;
          y2 =
            xOrigin * (-b2 / determinant) +
            yOrigin * (a2 / determinant) -
            (a2 * ty - b2 * tx) / determinant;
          xOrigin = x2;
          yOrigin = y2;
        }
        if (smooth || (smooth !== false && cache.smooth)) {
          tx = xOrigin - xOriginOld;
          ty = yOrigin - yOriginOld;
          cache.xOffset = xOffsetOld + (tx * a2 + ty * c2) - tx;
          cache.yOffset = yOffsetOld + (tx * b2 + ty * d2) - ty;
        } else {
          cache.xOffset = cache.yOffset = 0;
        }
        cache.xOrigin = xOrigin;
        cache.yOrigin = yOrigin;
        cache.smooth = !!smooth;
        cache.origin = origin;
        cache.originIsAbsolute = !!originIsAbsolute;
        target.style[_transformOriginProp] = "0px 0px";
        if (pluginToAddPropTweensTo) {
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            "xOrigin",
            xOriginOld,
            xOrigin
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            "yOrigin",
            yOriginOld,
            yOrigin
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            "xOffset",
            xOffsetOld,
            cache.xOffset
          );
          _addNonTweeningPT(
            pluginToAddPropTweensTo,
            cache,
            "yOffset",
            yOffsetOld,
            cache.yOffset
          );
        }
        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
      },
      _parseTransform = function _parseTransform2(target, uncache) {
        var cache = target._gsap || new GSCache(target);
        if ("x" in cache && !uncache && !cache.uncache) {
          return cache;
        }
        var style = target.style,
          invertedScaleX = cache.scaleX < 0,
          px = "px",
          deg = "deg",
          cs = getComputedStyle(target),
          origin = _getComputedProperty(target, _transformOriginProp) || "0",
          x2,
          y2,
          z2,
          scaleX,
          scaleY,
          rotation,
          rotationX,
          rotationY,
          skewX,
          skewY,
          perspective,
          xOrigin,
          yOrigin,
          matrix,
          angle,
          cos,
          sin,
          a2,
          b2,
          c2,
          d2,
          a12,
          a22,
          t1,
          t2,
          t3,
          a13,
          a23,
          a33,
          a42,
          a43,
          a32;
        x2 =
          y2 =
          z2 =
          rotation =
          rotationX =
          rotationY =
          skewX =
          skewY =
          perspective =
          0;
        scaleX = scaleY = 1;
        cache.svg = !!(target.getCTM && _isSVG(target));
        if (cs.translate) {
          if (
            cs.translate !== "none" ||
            cs.scale !== "none" ||
            cs.rotate !== "none"
          ) {
            style[_transformProp$1] =
              (cs.translate !== "none"
                ? "translate3d(" +
                (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
                : "") +
              (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") +
              (cs.scale !== "none"
                ? "scale(" + cs.scale.split(" ").join(",") + ") "
                : "") +
              (cs[_transformProp$1] !== "none" ? cs[_transformProp$1] : "");
          }
          style.scale = style.rotate = style.translate = "none";
        }
        matrix = _getMatrix(target, cache.svg);
        if (cache.svg) {
          if (cache.uncache) {
            t2 = target.getBBox();
            origin =
              cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
          } else {
            t1 = !uncache && target.getAttribute("data-svg-origin");
          }
          _applySVGOrigin(
            target,
            t1 || origin,
            !!t1 || cache.originIsAbsolute,
            cache.smooth !== false,
            matrix
          );
        }
        xOrigin = cache.xOrigin || 0;
        yOrigin = cache.yOrigin || 0;
        if (matrix !== _identity2DMatrix) {
          a2 = matrix[0];
          b2 = matrix[1];
          c2 = matrix[2];
          d2 = matrix[3];
          x2 = a12 = matrix[4];
          y2 = a22 = matrix[5];
          if (matrix.length === 6) {
            scaleX = Math.sqrt(a2 * a2 + b2 * b2);
            scaleY = Math.sqrt(d2 * d2 + c2 * c2);
            rotation = a2 || b2 ? _atan2(b2, a2) * _RAD2DEG : 0;
            skewX = c2 || d2 ? _atan2(c2, d2) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
              x2 -= xOrigin - (xOrigin * a2 + yOrigin * c2);
              y2 -= yOrigin - (xOrigin * b2 + yOrigin * d2);
            }
          } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x2 = matrix[12];
            y2 = matrix[13];
            z2 = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a12 * cos + a13 * sin;
              t2 = a22 * cos + a23 * sin;
              t3 = a32 * cos + a33 * sin;
              a13 = a12 * -sin + a13 * cos;
              a23 = a22 * -sin + a23 * cos;
              a33 = a32 * -sin + a33 * cos;
              a43 = a42 * -sin + a43 * cos;
              a12 = t1;
              a22 = t2;
              a32 = t3;
            }
            angle = _atan2(-c2, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(-angle);
              sin = Math.sin(-angle);
              t1 = a2 * cos - a13 * sin;
              t2 = b2 * cos - a23 * sin;
              t3 = c2 * cos - a33 * sin;
              a43 = d2 * sin + a43 * cos;
              a2 = t1;
              b2 = t2;
              c2 = t3;
            }
            angle = _atan2(b2, a2);
            rotation = angle * _RAD2DEG;
            if (angle) {
              cos = Math.cos(angle);
              sin = Math.sin(angle);
              t1 = a2 * cos + b2 * sin;
              t2 = a12 * cos + a22 * sin;
              b2 = b2 * cos - a2 * sin;
              a22 = a22 * cos - a12 * sin;
              a2 = t1;
              a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
              rotationX = rotation = 0;
              rotationY = 180 - rotationY;
            }
            scaleX = _round$1(Math.sqrt(a2 * a2 + b2 * b2 + c2 * c2));
            scaleY = _round$1(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
          }
          if (cache.svg) {
            t1 = target.getAttribute("transform");
            cache.forceCSS =
              target.setAttribute("transform", "") ||
              !_isNullTransform(_getComputedProperty(target, _transformProp$1));
            t1 && target.setAttribute("transform", t1);
          }
        }
        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
          if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
          } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
          }
        }
        uncache = uncache || cache.uncache;
        cache.x =
          x2 -
          ((cache.xPercent =
            x2 &&
            ((!uncache && cache.xPercent) ||
              (Math.round(target.offsetWidth / 2) === Math.round(-x2)
                ? -50
                : 0)))
            ? (target.offsetWidth * cache.xPercent) / 100
            : 0) +
          px;
        cache.y =
          y2 -
          ((cache.yPercent =
            y2 &&
            ((!uncache && cache.yPercent) ||
              (Math.round(target.offsetHeight / 2) === Math.round(-y2)
                ? -50
                : 0)))
            ? (target.offsetHeight * cache.yPercent) / 100
            : 0) +
          px;
        cache.z = z2 + px;
        cache.scaleX = _round$1(scaleX);
        cache.scaleY = _round$1(scaleY);
        cache.rotation = _round$1(rotation) + deg;
        cache.rotationX = _round$1(rotationX) + deg;
        cache.rotationY = _round$1(rotationY) + deg;
        cache.skewX = skewX + deg;
        cache.skewY = skewY + deg;
        cache.transformPerspective = perspective + px;
        if (
          (cache.zOrigin =
            parseFloat(origin.split(" ")[2]) ||
            (!uncache && cache.zOrigin) ||
            0)
        ) {
          style[_transformOriginProp] = _firstTwoOnly(origin);
        }
        cache.xOffset = cache.yOffset = 0;
        cache.force3D = _config$1.force3D;
        cache.renderTransform = cache.svg
          ? _renderSVGTransforms
          : _supports3D
            ? _renderCSSTransforms
            : _renderNon3DTransforms;
        cache.uncache = 0;
        return cache;
      },
      _firstTwoOnly = function _firstTwoOnly2(value) {
        return (value = value.split(" "))[0] + " " + value[1];
      },
      _addPxTranslate = function _addPxTranslate2(target, start, value) {
        var unit = getUnit(start);
        return (
          _round$1(
            parseFloat(start) +
            parseFloat(_convertToUnit(target, "x", value + "px", unit))
          ) + unit
        );
      },
      _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
        cache.z = "0px";
        cache.rotationY = cache.rotationX = "0deg";
        cache.force3D = 0;
        _renderCSSTransforms(ratio, cache);
      },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
        var _ref = cache || this,
          xPercent = _ref.xPercent,
          yPercent = _ref.yPercent,
          x2 = _ref.x,
          y2 = _ref.y,
          z2 = _ref.z,
          rotation = _ref.rotation,
          rotationY = _ref.rotationY,
          rotationX = _ref.rotationX,
          skewX = _ref.skewX,
          skewY = _ref.skewY,
          scaleX = _ref.scaleX,
          scaleY = _ref.scaleY,
          transformPerspective = _ref.transformPerspective,
          force3D = _ref.force3D,
          target = _ref.target,
          zOrigin = _ref.zOrigin,
          transforms = "",
          use3D =
            (force3D === "auto" && ratio && ratio !== 1) || force3D === true;
        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
          var angle = parseFloat(rotationY) * _DEG2RAD,
            a13 = Math.sin(angle),
            a33 = Math.cos(angle),
            cos;
          angle = parseFloat(rotationX) * _DEG2RAD;
          cos = Math.cos(angle);
          x2 = _addPxTranslate(target, x2, a13 * cos * -zOrigin);
          y2 = _addPxTranslate(target, y2, -Math.sin(angle) * -zOrigin);
          z2 = _addPxTranslate(target, z2, a33 * cos * -zOrigin + zOrigin);
        }
        if (transformPerspective !== _zeroPx) {
          transforms += "perspective(" + transformPerspective + _endParenthesis;
        }
        if (xPercent || yPercent) {
          transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
        }
        if (use3D || x2 !== _zeroPx || y2 !== _zeroPx || z2 !== _zeroPx) {
          transforms +=
            z2 !== _zeroPx || use3D
              ? "translate3d(" + x2 + ", " + y2 + ", " + z2 + ") "
              : "translate(" + x2 + ", " + y2 + _endParenthesis;
        }
        if (rotation !== _zeroDeg) {
          transforms += "rotate(" + rotation + _endParenthesis;
        }
        if (rotationY !== _zeroDeg) {
          transforms += "rotateY(" + rotationY + _endParenthesis;
        }
        if (rotationX !== _zeroDeg) {
          transforms += "rotateX(" + rotationX + _endParenthesis;
        }
        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
          transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
        }
        if (scaleX !== 1 || scaleY !== 1) {
          transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
        }
        target.style[_transformProp$1] = transforms || "translate(0, 0)";
      },
      _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
        var _ref2 = cache || this,
          xPercent = _ref2.xPercent,
          yPercent = _ref2.yPercent,
          x2 = _ref2.x,
          y2 = _ref2.y,
          rotation = _ref2.rotation,
          skewX = _ref2.skewX,
          skewY = _ref2.skewY,
          scaleX = _ref2.scaleX,
          scaleY = _ref2.scaleY,
          target = _ref2.target,
          xOrigin = _ref2.xOrigin,
          yOrigin = _ref2.yOrigin,
          xOffset = _ref2.xOffset,
          yOffset = _ref2.yOffset,
          forceCSS = _ref2.forceCSS,
          tx = parseFloat(x2),
          ty = parseFloat(y2),
          a11,
          a21,
          a12,
          a22,
          temp;
        rotation = parseFloat(rotation);
        skewX = parseFloat(skewX);
        skewY = parseFloat(skewY);
        if (skewY) {
          skewY = parseFloat(skewY);
          skewX += skewY;
          rotation += skewY;
        }
        if (rotation || skewX) {
          rotation *= _DEG2RAD;
          skewX *= _DEG2RAD;
          a11 = Math.cos(rotation) * scaleX;
          a21 = Math.sin(rotation) * scaleX;
          a12 = Math.sin(rotation - skewX) * -scaleY;
          a22 = Math.cos(rotation - skewX) * scaleY;
          if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
              temp = Math.tan(skewY);
              temp = Math.sqrt(1 + temp * temp);
              a11 *= temp;
              a21 *= temp;
            }
          }
          a11 = _round$1(a11);
          a21 = _round$1(a21);
          a12 = _round$1(a12);
          a22 = _round$1(a22);
        } else {
          a11 = scaleX;
          a22 = scaleY;
          a21 = a12 = 0;
        }
        if (
          (tx && !~(x2 + "").indexOf("px")) ||
          (ty && !~(y2 + "").indexOf("px"))
        ) {
          tx = _convertToUnit(target, "x", x2, "px");
          ty = _convertToUnit(target, "y", y2, "px");
        }
        if (xOrigin || yOrigin || xOffset || yOffset) {
          tx = _round$1(
            tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset
          );
          ty = _round$1(
            ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset
          );
        }
        if (xPercent || yPercent) {
          temp = target.getBBox();
          tx = _round$1(tx + (xPercent / 100) * temp.width);
          ty = _round$1(ty + (yPercent / 100) * temp.height);
        }
        temp =
          "matrix(" +
          a11 +
          "," +
          a21 +
          "," +
          a12 +
          "," +
          a22 +
          "," +
          tx +
          "," +
          ty +
          ")";
        target.setAttribute("transform", temp);
        forceCSS && (target.style[_transformProp$1] = temp);
      },
      _addRotationalPropTween = function _addRotationalPropTween2(
        plugin,
        target,
        property,
        startNum,
        endValue
      ) {
        var cap = 360,
          isString2 = _isString$2(endValue),
          endNum =
            parseFloat(endValue) *
            (isString2 && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
          change = endNum - startNum,
          finalValue = startNum + change + "deg",
          direction,
          pt2;
        if (isString2) {
          direction = endValue.split("_")[1];
          if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
              change += change < 0 ? cap : -cap;
            }
          }
          if (direction === "cw" && change < 0) {
            change = ((change + cap * _bigNum) % cap) - ~~(change / cap) * cap;
          } else if (direction === "ccw" && change > 0) {
            change = ((change - cap * _bigNum) % cap) - ~~(change / cap) * cap;
          }
        }
        plugin._pt = pt2 = new PropTween(
          plugin._pt,
          target,
          property,
          startNum,
          change,
          _renderPropWithEnd
        );
        pt2.e = finalValue;
        pt2.u = "deg";
        plugin._props.push(property);
        return pt2;
      },
      _assign = function _assign2(target, source) {
        for (var p2 in source) {
          target[p2] = source[p2];
        }
        return target;
      },
      _addRawTransformPTs = function _addRawTransformPTs2(
        plugin,
        transforms,
        target
      ) {
        var startCache = _assign({}, target._gsap),
          exclude = "perspective,force3D,transformOrigin,svgOrigin",
          style = target.style,
          endCache,
          p2,
          startValue,
          endValue,
          startNum,
          endNum,
          startUnit,
          endUnit;
        if (startCache.svg) {
          startValue = target.getAttribute("transform");
          target.setAttribute("transform", "");
          style[_transformProp$1] = transforms;
          endCache = _parseTransform(target, 1);
          _removeProperty(target, _transformProp$1);
          target.setAttribute("transform", startValue);
        } else {
          startValue = getComputedStyle(target)[_transformProp$1];
          style[_transformProp$1] = transforms;
          endCache = _parseTransform(target, 1);
          style[_transformProp$1] = startValue;
        }
        for (p2 in _transformProps) {
          startValue = startCache[p2];
          endValue = endCache[p2];
          if (startValue !== endValue && exclude.indexOf(p2) < 0) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum =
              startUnit !== endUnit
                ? _convertToUnit(target, p2, startValue, endUnit)
                : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(
              plugin._pt,
              endCache,
              p2,
              startNum,
              endNum - startNum,
              _renderCSSProp
            );
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p2);
          }
        }
        _assign(endCache, startCache);
      };
    _forEachName("padding,margin,Width,Radius", function (name, index) {
      var t2 = "Top",
        r2 = "Right",
        b2 = "Bottom",
        l2 = "Left",
        props = (
          index < 3 ? [t2, r2, b2, l2] : [t2 + l2, t2 + r2, b2 + r2, b2 + l2]
        ).map(function (side) {
          return index < 2 ? name + side : "border" + side + name;
        });
      _specialProps[index > 1 ? "border" + name : name] = function (
        plugin,
        target,
        property,
        endValue,
        tween
      ) {
        var a2, vars;
        if (arguments.length < 4) {
          a2 = props.map(function (prop) {
            return _get(plugin, prop, property);
          });
          vars = a2.join(" ");
          return vars.split(a2[0]).length === 5 ? a2[0] : vars;
        }
        a2 = (endValue + "").split(" ");
        vars = {};
        props.forEach(function (prop, i2) {
          return (vars[prop] = a2[i2] = a2[i2] || a2[((i2 - 1) / 2) | 0]);
        });
        plugin.init(target, vars, tween);
      };
    });
    var CSSPlugin = {
      name: "css",
      register: _initCore$2,
      targetTest: function targetTest(target) {
        return target.style && target.nodeType;
      },
      init: function init(target, vars, tween, index, targets) {
        var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p2,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority,
          inlineProps;
        _pluginInitted || _initCore$2();
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for (p2 in vars) {
          if (p2 === "autoRound") {
            continue;
          }
          endValue = vars[p2];
          if (
            _plugins[p2] &&
            _checkPlugin(p2, vars, tween, index, target, targets)
          ) {
            continue;
          }
          type = typeof endValue;
          specialProp = _specialProps[p2];
          if (type === "function") {
            endValue = endValue.call(tween, index, target, targets);
            type = typeof endValue;
          }
          if (type === "string" && ~endValue.indexOf("random(")) {
            endValue = _replaceRandom(endValue);
          }
          if (specialProp) {
            specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
          } else if (p2.substr(0, 2) === "--") {
            startValue = (
              getComputedStyle(target).getPropertyValue(p2) + ""
            ).trim();
            endValue += "";
            _colorExp.lastIndex = 0;
            if (!_colorExp.test(startValue)) {
              startUnit = getUnit(startValue);
              endUnit = getUnit(endValue);
            }
            endUnit
              ? startUnit !== endUnit &&
              (startValue =
                _convertToUnit(target, p2, startValue, endUnit) + endUnit)
              : startUnit && (endValue += startUnit);
            this.add(
              style,
              "setProperty",
              startValue,
              endValue,
              index,
              targets,
              0,
              0,
              p2
            );
            props.push(p2);
            inlineProps.push(p2, 0, style[p2]);
          } else if (type !== "undefined") {
            if (startAt && p2 in startAt) {
              startValue =
                typeof startAt[p2] === "function"
                  ? startAt[p2].call(tween, index, target, targets)
                  : startAt[p2];
              _isString$2(startValue) &&
                ~startValue.indexOf("random(") &&
                (startValue = _replaceRandom(startValue));
              getUnit(startValue + "") ||
                startValue === "auto" ||
                (startValue +=
                  _config$1.units[p2] || getUnit(_get(target, p2)) || "");
              (startValue + "").charAt(1) === "=" &&
                (startValue = _get(target, p2));
            } else {
              startValue = _get(target, p2);
            }
            startNum = parseFloat(startValue);
            relative =
              type === "string" &&
              endValue.charAt(1) === "=" &&
              endValue.substr(0, 2);
            relative && (endValue = endValue.substr(2));
            endNum = parseFloat(endValue);
            if (p2 in _propertyAliases) {
              if (p2 === "autoAlpha") {
                if (
                  startNum === 1 &&
                  _get(target, "visibility") === "hidden" &&
                  endNum
                ) {
                  startNum = 0;
                }
                inlineProps.push("visibility", 0, style.visibility);
                _addNonTweeningPT(
                  this,
                  style,
                  "visibility",
                  startNum ? "inherit" : "hidden",
                  endNum ? "inherit" : "hidden",
                  !endNum
                );
              }
              if (p2 !== "scale" && p2 !== "transform") {
                p2 = _propertyAliases[p2];
                ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
              }
            }
            isTransformRelated = p2 in _transformProps;
            if (isTransformRelated) {
              this.styles.save(p2);
              if (!transformPropTween) {
                cache = target._gsap;
                (cache.renderTransform && !vars.parseTransform) ||
                  _parseTransform(target, vars.parseTransform);
                smooth = vars.smoothOrigin !== false && cache.smooth;
                transformPropTween = this._pt = new PropTween(
                  this._pt,
                  style,
                  _transformProp$1,
                  0,
                  1,
                  cache.renderTransform,
                  cache,
                  0,
                  -1
                );
                transformPropTween.dep = 1;
              }
              if (p2 === "scale") {
                this._pt = new PropTween(
                  this._pt,
                  cache,
                  "scaleY",
                  cache.scaleY,
                  (relative
                    ? _parseRelative(cache.scaleY, relative + endNum)
                    : endNum) - cache.scaleY || 0,
                  _renderCSSProp
                );
                this._pt.u = 0;
                props.push("scaleY", p2);
                p2 += "X";
              } else if (p2 === "transformOrigin") {
                inlineProps.push(
                  _transformOriginProp,
                  0,
                  style[_transformOriginProp]
                );
                endValue = _convertKeywordsToPercentages(endValue);
                if (cache.svg) {
                  _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                } else {
                  endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                  endUnit !== cache.zOrigin &&
                    _addNonTweeningPT(
                      this,
                      cache,
                      "zOrigin",
                      cache.zOrigin,
                      endUnit
                    );
                  _addNonTweeningPT(
                    this,
                    style,
                    p2,
                    _firstTwoOnly(startValue),
                    _firstTwoOnly(endValue)
                  );
                }
                continue;
              } else if (p2 === "svgOrigin") {
                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                continue;
              } else if (p2 in _rotationalProperties) {
                _addRotationalPropTween(
                  this,
                  cache,
                  p2,
                  startNum,
                  relative
                    ? _parseRelative(startNum, relative + endValue)
                    : endValue
                );
                continue;
              } else if (p2 === "smoothOrigin") {
                _addNonTweeningPT(
                  this,
                  cache,
                  "smooth",
                  cache.smooth,
                  endValue
                );
                continue;
              } else if (p2 === "force3D") {
                cache[p2] = endValue;
                continue;
              } else if (p2 === "transform") {
                _addRawTransformPTs(this, endValue, target);
                continue;
              }
            } else if (!(p2 in style)) {
              p2 = _checkPropPrefix(p2) || p2;
            }
            if (
              isTransformRelated ||
              ((endNum || endNum === 0) &&
                (startNum || startNum === 0) &&
                !_complexExp.test(endValue) &&
                p2 in style)
            ) {
              startUnit = (startValue + "").substr((startNum + "").length);
              endNum || (endNum = 0);
              endUnit =
                getUnit(endValue) ||
                (p2 in _config$1.units ? _config$1.units[p2] : startUnit);
              startUnit !== endUnit &&
                (startNum = _convertToUnit(target, p2, startValue, endUnit));
              this._pt = new PropTween(
                this._pt,
                isTransformRelated ? cache : style,
                p2,
                startNum,
                (relative
                  ? _parseRelative(startNum, relative + endNum)
                  : endNum) - startNum,
                !isTransformRelated &&
                  (endUnit === "px" || p2 === "zIndex") &&
                  vars.autoRound !== false
                  ? _renderRoundedCSSProp
                  : _renderCSSProp
              );
              this._pt.u = endUnit || 0;
              if (startUnit !== endUnit && endUnit !== "%") {
                this._pt.b = startValue;
                this._pt.r = _renderCSSPropWithBeginning;
              }
            } else if (!(p2 in style)) {
              if (p2 in target) {
                this.add(
                  target,
                  p2,
                  startValue || target[p2],
                  relative ? relative + endValue : endValue,
                  index,
                  targets
                );
              } else if (p2 !== "parseTransform") {
                _missingPlugin(p2, endValue);
                continue;
              }
            } else {
              _tweenComplexCSSString.call(
                this,
                target,
                p2,
                startValue,
                relative ? relative + endValue : endValue
              );
            }
            isTransformRelated ||
              (p2 in style
                ? inlineProps.push(p2, 0, style[p2])
                : inlineProps.push(p2, 1, startValue || target[p2]));
            props.push(p2);
          }
        }
        hasPriority && _sortPropTweensByPriority(this);
      },
      render: function render(ratio, data) {
        if (data.tween._time || !_reverting()) {
          var pt2 = data._pt;
          while (pt2) {
            pt2.r(ratio, pt2.d);
            pt2 = pt2._next;
          }
        } else {
          data.styles.revert();
        }
      },
      get: _get,
      aliases: _propertyAliases,
      getSetter: function getSetter(target, property, plugin) {
        var p2 = _propertyAliases[property];
        p2 && p2.indexOf(",") < 0 && (property = p2);
        return property in _transformProps &&
          property !== _transformOriginProp &&
          (target._gsap.x || _get(target, "x"))
          ? plugin && _recentSetterPlugin === plugin
            ? property === "scale"
              ? _setterScale
              : _setterTransform
            : (_recentSetterPlugin = plugin || {}) &&
            (property === "scale"
              ? _setterScaleWithRender
              : _setterTransformWithRender)
          : target.style && !_isUndefined(target.style[property])
            ? _setterCSSStyle
            : ~property.indexOf("-")
              ? _setterCSSProp
              : _getSetter(target, property);
      },
      core: {
        _removeProperty,
        _getMatrix,
      },
    };
    gsap$3.utils.checkPrefix = _checkPropPrefix;
    gsap$3.core.getStyleSaver = _getStyleSaver;
    (function (positionAndScale, rotation, others, aliases2) {
      var all = _forEachName(
        positionAndScale + "," + rotation + "," + others,
        function (name) {
          _transformProps[name] = 1;
        }
      );
      _forEachName(rotation, function (name) {
        _config$1.units[name] = "deg";
        _rotationalProperties[name] = 1;
      });
      _propertyAliases[all[13]] = positionAndScale + "," + rotation;
      _forEachName(aliases2, function (name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
      });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    );
    _forEachName(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (name) {
        _config$1.units[name] = "px";
      }
    );
    gsap$3.registerPlugin(CSSPlugin);
    function _defineProperties(target, props) {
      for (var i2 = 0; i2 < props.length; i2++) {
        var descriptor = props[i2];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    /*!
     * Observer 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gsap$2,
      _coreInitted$2,
      _win$1,
      _doc$1,
      _docEl$2,
      _body$2,
      _isTouch,
      _pointerType,
      ScrollTrigger$2,
      _root$1,
      _normalizer$1,
      _eventTypes,
      _context$1,
      _getGSAP$2 = function _getGSAP2() {
        return (
          gsap$2 ||
          (typeof window !== "undefined" &&
            (gsap$2 = window.gsap) &&
            gsap$2.registerPlugin &&
            gsap$2)
        );
      },
      _startup$1 = 1,
      _observers = [],
      _scrollers = [],
      _proxies = [],
      _getTime$1 = Date.now,
      _bridge = function _bridge2(name, value) {
        return value;
      },
      _integrate = function _integrate2() {
        var core = ScrollTrigger$2.core,
          data = core.bridge || {},
          scrollers = core._scrollers,
          proxies = core._proxies;
        scrollers.push.apply(scrollers, _scrollers);
        proxies.push.apply(proxies, _proxies);
        _scrollers = scrollers;
        _proxies = proxies;
        _bridge = function _bridge2(name, value) {
          return data[name](value);
        };
      },
      _getProxyProp = function _getProxyProp2(element, property) {
        return (
          ~_proxies.indexOf(element) &&
          _proxies[_proxies.indexOf(element) + 1][property]
        );
      },
      _isViewport$1 = function _isViewport2(el) {
        return !!~_root$1.indexOf(el);
      },
      _addListener$1 = function _addListener2(
        element,
        type,
        func,
        passive,
        capture
      ) {
        return element.addEventListener(type, func, {
          passive: passive !== false,
          capture: !!capture,
        });
      },
      _removeListener$1 = function _removeListener2(
        element,
        type,
        func,
        capture
      ) {
        return element.removeEventListener(type, func, !!capture);
      },
      _scrollLeft = "scrollLeft",
      _scrollTop = "scrollTop",
      _onScroll$1 = function _onScroll2() {
        return (_normalizer$1 && _normalizer$1.isPressed) || _scrollers.cache++;
      },
      _scrollCacheFunc = function _scrollCacheFunc2(f2, doNotCache) {
        var cachingFunc = function cachingFunc2(value) {
          if (value || value === 0) {
            _startup$1 && (_win$1.history.scrollRestoration = "manual");
            var isNormalizing = _normalizer$1 && _normalizer$1.isPressed;
            value = cachingFunc2.v =
              Math.round(value) || (_normalizer$1 && _normalizer$1.iOS ? 1 : 0);
            f2(value);
            cachingFunc2.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value);
          } else if (
            doNotCache ||
            _scrollers.cache !== cachingFunc2.cacheID ||
            _bridge("ref")
          ) {
            cachingFunc2.cacheID = _scrollers.cache;
            cachingFunc2.v = f2();
          }
          return cachingFunc2.v + cachingFunc2.offset;
        };
        cachingFunc.offset = 0;
        return f2 && cachingFunc;
      },
      _horizontal = {
        s: _scrollLeft,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: _scrollCacheFunc(function (value) {
          return arguments.length
            ? _win$1.scrollTo(value, _vertical.sc())
            : _win$1.pageXOffset ||
            _doc$1[_scrollLeft] ||
            _docEl$2[_scrollLeft] ||
            _body$2[_scrollLeft] ||
            0;
        }),
      },
      _vertical = {
        s: _scrollTop,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: _horizontal,
        sc: _scrollCacheFunc(function (value) {
          return arguments.length
            ? _win$1.scrollTo(_horizontal.sc(), value)
            : _win$1.pageYOffset ||
            _doc$1[_scrollTop] ||
            _docEl$2[_scrollTop] ||
            _body$2[_scrollTop] ||
            0;
        }),
      },
      _getTarget = function _getTarget2(t2, self2) {
        return (
          (
            (self2 && self2._ctx && self2._ctx.selector) ||
            gsap$2.utils.toArray
          )(t2)[0] ||
          (typeof t2 === "string" && gsap$2.config().nullTargetWarn !== false
            ? console.warn("Element not found:", t2)
            : null)
        );
      },
      _getScrollFunc = function _getScrollFunc2(element, _ref) {
        var s2 = _ref.s,
          sc = _ref.sc;
        _isViewport$1(element) &&
          (element = _doc$1.scrollingElement || _docEl$2);
        var i2 = _scrollers.indexOf(element),
          offset2 = sc === _vertical.sc ? 1 : 2;
        !~i2 && (i2 = _scrollers.push(element) - 1);
        _scrollers[i2 + offset2] ||
          _addListener$1(element, "scroll", _onScroll$1);
        var prev = _scrollers[i2 + offset2],
          func =
            prev ||
            (_scrollers[i2 + offset2] =
              _scrollCacheFunc(_getProxyProp(element, s2), true) ||
              (_isViewport$1(element)
                ? sc
                : _scrollCacheFunc(function (value) {
                  return arguments.length
                    ? (element[s2] = value)
                    : element[s2];
                })));
        func.target = element;
        prev ||
          (func.smooth =
            gsap$2.getProperty(element, "scrollBehavior") === "smooth");
        return func;
      },
      _getVelocityProp = function _getVelocityProp2(
        value,
        minTimeRefresh,
        useDelta
      ) {
        var v1 = value,
          v2 = value,
          t1 = _getTime$1(),
          t2 = t1,
          min2 = minTimeRefresh || 50,
          dropToZeroTime = Math.max(500, min2 * 3),
          update = function update2(value2, force) {
            var t3 = _getTime$1();
            if (force || t3 - t1 > min2) {
              v2 = v1;
              v1 = value2;
              t2 = t1;
              t1 = t3;
            } else if (useDelta) {
              v1 += value2;
            } else {
              v1 = v2 + ((value2 - v2) / (t3 - t2)) * (t1 - t2);
            }
          },
          reset = function reset2() {
            v2 = v1 = useDelta ? 0 : v1;
            t2 = t1 = 0;
          },
          getVelocity = function getVelocity2(latestValue) {
            var tOld = t2,
              vOld = v2,
              t3 = _getTime$1();
            (latestValue || latestValue === 0) &&
              latestValue !== v1 &&
              update(latestValue);
            return t1 === t2 || t3 - t2 > dropToZeroTime
              ? 0
              : ((v1 + (useDelta ? vOld : -vOld)) /
                ((useDelta ? t3 : t1) - tOld)) *
              1e3;
          };
        return {
          update,
          reset,
          getVelocity,
        };
      },
      _getEvent = function _getEvent2(e2, preventDefault) {
        preventDefault && !e2._gsapAllow && e2.preventDefault();
        return e2.changedTouches ? e2.changedTouches[0] : e2;
      },
      _getAbsoluteMax = function _getAbsoluteMax2(a2) {
        var max2 = Math.max.apply(Math, a2),
          min2 = Math.min.apply(Math, a2);
        return Math.abs(max2) >= Math.abs(min2) ? max2 : min2;
      },
      _setScrollTrigger = function _setScrollTrigger2() {
        ScrollTrigger$2 = gsap$2.core.globals().ScrollTrigger;
        ScrollTrigger$2 && ScrollTrigger$2.core && _integrate();
      },
      _initCore$1 = function _initCore2(core) {
        gsap$2 = core || _getGSAP$2();
        if (
          !_coreInitted$2 &&
          gsap$2 &&
          typeof document !== "undefined" &&
          document.body
        ) {
          _win$1 = window;
          _doc$1 = document;
          _docEl$2 = _doc$1.documentElement;
          _body$2 = _doc$1.body;
          _root$1 = [_win$1, _doc$1, _docEl$2, _body$2];
          gsap$2.utils.clamp;
          _context$1 = gsap$2.core.context || function () { };
          _pointerType = "onpointerenter" in _body$2 ? "pointer" : "mouse";
          _isTouch = Observer.isTouch =
            _win$1.matchMedia &&
              _win$1.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in _win$1 ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
                ? 2
                : 0;
          _eventTypes = Observer.eventTypes = (
            "ontouchstart" in _docEl$2
              ? "touchstart,touchmove,touchcancel,touchend"
              : !("onpointerdown" in _docEl$2)
                ? "mousedown,mousemove,mouseup,mouseup"
                : "pointerdown,pointermove,pointercancel,pointerup"
          ).split(",");
          setTimeout(function () {
            return (_startup$1 = 0);
          }, 500);
          _setScrollTrigger();
          _coreInitted$2 = 1;
        }
        return _coreInitted$2;
      };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    var Observer = /* @__PURE__ */ (function () {
      function Observer2(vars) {
        this.init(vars);
      }
      var _proto = Observer2.prototype;
      _proto.init = function init(vars) {
        _coreInitted$2 ||
          _initCore$1(gsap$2) ||
          console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger$2 || _setScrollTrigger();
        var tolerance = vars.tolerance,
          dragMinimum = vars.dragMinimum,
          type = vars.type,
          target = vars.target,
          lineHeight = vars.lineHeight,
          debounce = vars.debounce,
          preventDefault = vars.preventDefault,
          onStop = vars.onStop,
          onStopDelay = vars.onStopDelay,
          ignore = vars.ignore,
          wheelSpeed = vars.wheelSpeed,
          event = vars.event,
          onDragStart = vars.onDragStart,
          onDragEnd = vars.onDragEnd,
          onDrag = vars.onDrag,
          onPress = vars.onPress,
          onRelease = vars.onRelease,
          onRight = vars.onRight,
          onLeft = vars.onLeft,
          onUp = vars.onUp,
          onDown = vars.onDown,
          onChangeX = vars.onChangeX,
          onChangeY = vars.onChangeY,
          onChange = vars.onChange,
          onToggleX = vars.onToggleX,
          onToggleY = vars.onToggleY,
          onHover = vars.onHover,
          onHoverEnd = vars.onHoverEnd,
          onMove = vars.onMove,
          ignoreCheck = vars.ignoreCheck,
          isNormalizer = vars.isNormalizer,
          onGestureStart = vars.onGestureStart,
          onGestureEnd = vars.onGestureEnd,
          onWheel = vars.onWheel,
          onEnable = vars.onEnable,
          onDisable = vars.onDisable,
          onClick = vars.onClick,
          scrollSpeed = vars.scrollSpeed,
          capture = vars.capture,
          allowClicks = vars.allowClicks,
          lockAxis = vars.lockAxis,
          onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl$2;
        this.vars = vars;
        ignore && (ignore = gsap$2.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight ||
          (lineHeight =
            parseFloat(_win$1.getComputedStyle(_body$2).lineHeight) || 22);
        var id,
          onStopDelayedCall,
          dragged,
          moved,
          wheeled,
          locked,
          axis,
          self2 = this,
          prevDeltaX = 0,
          prevDeltaY = 0,
          passive = vars.passive || !preventDefault,
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollX = scrollFuncX(),
          scrollY2 = scrollFuncY(),
          limitToTouch =
            ~type.indexOf("touch") &&
            !~type.indexOf("pointer") &&
            _eventTypes[0] === "pointerdown",
          isViewport = _isViewport$1(target),
          ownerDoc = target.ownerDocument || _doc$1,
          deltaX = [0, 0, 0],
          deltaY = [0, 0, 0],
          onClickTime = 0,
          clickCapture = function clickCapture2() {
            return (onClickTime = _getTime$1());
          },
          _ignoreCheck = function _ignoreCheck2(e2, isPointerOrTouch) {
            return (
              ((self2.event = e2) && ignore && ~ignore.indexOf(e2.target)) ||
              (isPointerOrTouch &&
                limitToTouch &&
                e2.pointerType !== "touch") ||
              (ignoreCheck && ignoreCheck(e2, isPointerOrTouch))
            );
          },
          onStopFunc = function onStopFunc2() {
            self2._vx.reset();
            self2._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self2);
          },
          update = function update2() {
            var dx = (self2.deltaX = _getAbsoluteMax(deltaX)),
              dy = (self2.deltaY = _getAbsoluteMax(deltaY)),
              changedX = Math.abs(dx) >= tolerance,
              changedY = Math.abs(dy) >= tolerance;
            onChange &&
              (changedX || changedY) &&
              onChange(self2, dx, dy, deltaX, deltaY);
            if (changedX) {
              onRight && self2.deltaX > 0 && onRight(self2);
              onLeft && self2.deltaX < 0 && onLeft(self2);
              onChangeX && onChangeX(self2);
              onToggleX &&
                self2.deltaX < 0 !== prevDeltaX < 0 &&
                onToggleX(self2);
              prevDeltaX = self2.deltaX;
              deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
              onDown && self2.deltaY > 0 && onDown(self2);
              onUp && self2.deltaY < 0 && onUp(self2);
              onChangeY && onChangeY(self2);
              onToggleY &&
                self2.deltaY < 0 !== prevDeltaY < 0 &&
                onToggleY(self2);
              prevDeltaY = self2.deltaY;
              deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
              onMove && onMove(self2);
              if (dragged) {
                onDrag(self2);
                dragged = false;
              }
              moved = false;
            }
            locked && !(locked = false) && onLockAxis && onLockAxis(self2);
            if (wheeled) {
              onWheel(self2);
              wheeled = false;
            }
            id = 0;
          },
          onDelta = function onDelta2(x2, y2, index) {
            deltaX[index] += x2;
            deltaY[index] += y2;
            self2._vx.update(x2);
            self2._vy.update(y2);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          },
          onTouchOrPointerDelta = function onTouchOrPointerDelta2(x2, y2) {
            if (lockAxis && !axis) {
              self2.axis = axis = Math.abs(x2) > Math.abs(y2) ? "x" : "y";
              locked = true;
            }
            if (axis !== "y") {
              deltaX[2] += x2;
              self2._vx.update(x2, true);
            }
            if (axis !== "x") {
              deltaY[2] += y2;
              self2._vy.update(y2, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
          },
          _onDrag = function _onDrag2(e2) {
            if (_ignoreCheck(e2, 1)) {
              return;
            }
            e2 = _getEvent(e2, preventDefault);
            var x2 = e2.clientX,
              y2 = e2.clientY,
              dx = x2 - self2.x,
              dy = y2 - self2.y,
              isDragging = self2.isDragging;
            self2.x = x2;
            self2.y = y2;
            if (
              isDragging ||
              Math.abs(self2.startX - x2) >= dragMinimum ||
              Math.abs(self2.startY - y2) >= dragMinimum
            ) {
              onDrag && (dragged = true);
              isDragging || (self2.isDragging = true);
              onTouchOrPointerDelta(dx, dy);
              isDragging || (onDragStart && onDragStart(self2));
            }
          },
          _onPress = (self2.onPress = function (e2) {
            if (_ignoreCheck(e2, 1) || (e2 && e2.button)) {
              return;
            }
            self2.axis = axis = null;
            onStopDelayedCall.pause();
            self2.isPressed = true;
            e2 = _getEvent(e2);
            prevDeltaX = prevDeltaY = 0;
            self2.startX = self2.x = e2.clientX;
            self2.startY = self2.y = e2.clientY;
            self2._vx.reset();
            self2._vy.reset();
            _addListener$1(
              isNormalizer ? target : ownerDoc,
              _eventTypes[1],
              _onDrag,
              passive,
              true
            );
            self2.deltaX = self2.deltaY = 0;
            onPress && onPress(self2);
          }),
          _onRelease = (self2.onRelease = function (e2) {
            if (_ignoreCheck(e2, 1)) {
              return;
            }
            _removeListener$1(
              isNormalizer ? target : ownerDoc,
              _eventTypes[1],
              _onDrag,
              true
            );
            var isTrackingDrag = !isNaN(self2.y - self2.startY),
              wasDragging = self2.isDragging,
              isDragNotClick =
                wasDragging &&
                (Math.abs(self2.x - self2.startX) > 3 ||
                  Math.abs(self2.y - self2.startY) > 3),
              eventData = _getEvent(e2);
            if (!isDragNotClick && isTrackingDrag) {
              self2._vx.reset();
              self2._vy.reset();
              if (preventDefault && allowClicks) {
                gsap$2.delayedCall(0.08, function () {
                  if (
                    _getTime$1() - onClickTime > 300 &&
                    !e2.defaultPrevented
                  ) {
                    if (e2.target.click) {
                      e2.target.click();
                    } else if (ownerDoc.createEvent) {
                      var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                      syntheticEvent.initMouseEvent(
                        "click",
                        true,
                        true,
                        _win$1,
                        1,
                        eventData.screenX,
                        eventData.screenY,
                        eventData.clientX,
                        eventData.clientY,
                        false,
                        false,
                        false,
                        false,
                        0,
                        null
                      );
                      e2.target.dispatchEvent(syntheticEvent);
                    }
                  }
                });
              }
            }
            self2.isDragging = self2.isGesturing = self2.isPressed = false;
            onStop &&
              wasDragging &&
              !isNormalizer &&
              onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self2);
            onRelease && onRelease(self2, isDragNotClick);
          }),
          _onGestureStart = function _onGestureStart2(e2) {
            return (
              e2.touches &&
              e2.touches.length > 1 &&
              (self2.isGesturing = true) &&
              onGestureStart(e2, self2.isDragging)
            );
          },
          _onGestureEnd = function _onGestureEnd2() {
            return (self2.isGesturing = false) || onGestureEnd(self2);
          },
          onScroll = function onScroll2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            var x2 = scrollFuncX(),
              y2 = scrollFuncY();
            onDelta(
              (x2 - scrollX) * scrollSpeed,
              (y2 - scrollY2) * scrollSpeed,
              1
            );
            scrollX = x2;
            scrollY2 = y2;
            onStop && onStopDelayedCall.restart(true);
          },
          _onWheel = function _onWheel2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            e2 = _getEvent(e2, preventDefault);
            onWheel && (wheeled = true);
            var multiplier =
              (e2.deltaMode === 1
                ? lineHeight
                : e2.deltaMode === 2
                  ? _win$1.innerHeight
                  : 1) * wheelSpeed;
            onDelta(e2.deltaX * multiplier, e2.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
          },
          _onMove = function _onMove2(e2) {
            if (_ignoreCheck(e2)) {
              return;
            }
            var x2 = e2.clientX,
              y2 = e2.clientY,
              dx = x2 - self2.x,
              dy = y2 - self2.y;
            self2.x = x2;
            self2.y = y2;
            moved = true;
            onStop && onStopDelayedCall.restart(true);
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
          },
          _onHover = function _onHover2(e2) {
            self2.event = e2;
            onHover(self2);
          },
          _onHoverEnd = function _onHoverEnd2(e2) {
            self2.event = e2;
            onHoverEnd(self2);
          },
          _onClick = function _onClick2(e2) {
            return (
              _ignoreCheck(e2) ||
              (_getEvent(e2, preventDefault) && onClick(self2))
            );
          };
        onStopDelayedCall = self2._dc = gsap$2
          .delayedCall(onStopDelay || 0.25, onStopFunc)
          .pause();
        self2.deltaX = self2.deltaY = 0;
        self2._vx = _getVelocityProp(0, 50, true);
        self2._vy = _getVelocityProp(0, 50, true);
        self2.scrollX = scrollFuncX;
        self2.scrollY = scrollFuncY;
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        _context$1(this);
        self2.enable = function (e2) {
          if (!self2.isEnabled) {
            _addListener$1(
              isViewport ? ownerDoc : target,
              "scroll",
              _onScroll$1
            );
            type.indexOf("scroll") >= 0 &&
              _addListener$1(
                isViewport ? ownerDoc : target,
                "scroll",
                onScroll,
                passive,
                capture
              );
            type.indexOf("wheel") >= 0 &&
              _addListener$1(target, "wheel", _onWheel, passive, capture);
            if (
              (type.indexOf("touch") >= 0 && _isTouch) ||
              type.indexOf("pointer") >= 0
            ) {
              _addListener$1(
                target,
                _eventTypes[0],
                _onPress,
                passive,
                capture
              );
              _addListener$1(ownerDoc, _eventTypes[2], _onRelease);
              _addListener$1(ownerDoc, _eventTypes[3], _onRelease);
              allowClicks &&
                _addListener$1(target, "click", clickCapture, true, true);
              onClick && _addListener$1(target, "click", _onClick);
              onGestureStart &&
                _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
              onGestureEnd &&
                _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
              onHover &&
                _addListener$1(target, _pointerType + "enter", _onHover);
              onHoverEnd &&
                _addListener$1(target, _pointerType + "leave", _onHoverEnd);
              onMove && _addListener$1(target, _pointerType + "move", _onMove);
            }
            self2.isEnabled = true;
            e2 && e2.type && _onPress(e2);
            onEnable && onEnable(self2);
          }
          return self2;
        };
        self2.disable = function () {
          if (self2.isEnabled) {
            _observers.filter(function (o2) {
              return o2 !== self2 && _isViewport$1(o2.target);
            }).length ||
              _removeListener$1(
                isViewport ? ownerDoc : target,
                "scroll",
                _onScroll$1
              );
            if (self2.isPressed) {
              self2._vx.reset();
              self2._vy.reset();
              _removeListener$1(
                isNormalizer ? target : ownerDoc,
                _eventTypes[1],
                _onDrag,
                true
              );
            }
            _removeListener$1(
              isViewport ? ownerDoc : target,
              "scroll",
              onScroll,
              capture
            );
            _removeListener$1(target, "wheel", _onWheel, capture);
            _removeListener$1(target, _eventTypes[0], _onPress, capture);
            _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);
            _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);
            _removeListener$1(target, "click", clickCapture, true);
            _removeListener$1(target, "click", _onClick);
            _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);
            _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);
            _removeListener$1(target, _pointerType + "enter", _onHover);
            _removeListener$1(target, _pointerType + "leave", _onHoverEnd);
            _removeListener$1(target, _pointerType + "move", _onMove);
            self2.isEnabled = self2.isPressed = self2.isDragging = false;
            onDisable && onDisable(self2);
          }
        };
        self2.kill = self2.revert = function () {
          self2.disable();
          var i2 = _observers.indexOf(self2);
          i2 >= 0 && _observers.splice(i2, 1);
          _normalizer$1 === self2 && (_normalizer$1 = 0);
        };
        _observers.push(self2);
        isNormalizer && _isViewport$1(target) && (_normalizer$1 = self2);
        self2.enable(event);
      };
      _createClass(Observer2, [
        {
          key: "velocityX",
          get: function get2() {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function get2() {
            return this._vy.getVelocity();
          },
        },
      ]);
      return Observer2;
    })();
    Observer.version = "3.12.5";
    Observer.create = function (vars) {
      return new Observer(vars);
    };
    Observer.register = _initCore$1;
    Observer.getAll = function () {
      return _observers.slice();
    };
    Observer.getById = function (id) {
      return _observers.filter(function (o2) {
        return o2.vars.id === id;
      })[0];
    };
    _getGSAP$2() && gsap$2.registerPlugin(Observer);
    /*!
     * ScrollToPlugin 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gsap$1,
      _coreInitted$1,
      _window,
      _docEl$1,
      _body$1,
      _toArray$1,
      _config,
      ScrollTrigger$1,
      _windowExists$1 = function _windowExists2() {
        return typeof window !== "undefined";
      },
      _getGSAP$1 = function _getGSAP2() {
        return (
          gsap$1 ||
          (_windowExists$1() &&
            (gsap$1 = window.gsap) &&
            gsap$1.registerPlugin &&
            gsap$1)
        );
      },
      _isString$1 = function _isString2(value) {
        return typeof value === "string";
      },
      _isFunction$1 = function _isFunction2(value) {
        return typeof value === "function";
      },
      _max = function _max2(element, axis) {
        var dim = axis === "x" ? "Width" : "Height",
          scroll = "scroll" + dim,
          client = "client" + dim;
        return element === _window ||
          element === _docEl$1 ||
          element === _body$1
          ? Math.max(_docEl$1[scroll], _body$1[scroll]) -
          (_window["inner" + dim] || _docEl$1[client] || _body$1[client])
          : element[scroll] - element["offset" + dim];
      },
      _buildGetter = function _buildGetter2(e2, axis) {
        var p2 = "scroll" + (axis === "x" ? "Left" : "Top");
        if (e2 === _window) {
          if (e2.pageXOffset != null) {
            p2 = "page" + axis.toUpperCase() + "Offset";
          } else {
            e2 = _docEl$1[p2] != null ? _docEl$1 : _body$1;
          }
        }
        return function () {
          return e2[p2];
        };
      },
      _clean = function _clean2(value, index, target, targets) {
        _isFunction$1(value) && (value = value(index, target, targets));
        if (typeof value !== "object") {
          return _isString$1(value) &&
            value !== "max" &&
            value.charAt(1) !== "="
            ? {
              x: value,
              y: value,
            }
            : {
              y: value,
            };
        } else if (value.nodeType) {
          return {
            y: value,
            x: value,
          };
        } else {
          var result = {},
            p2;
          for (p2 in value) {
            result[p2] =
              p2 !== "onAutoKill" && _isFunction$1(value[p2])
                ? value[p2](index, target, targets)
                : value[p2];
          }
          return result;
        }
      },
      _getOffset = function _getOffset2(element, container) {
        element = _toArray$1(element)[0];
        if (!element || !element.getBoundingClientRect) {
          return (
            console.warn("scrollTo target doesn't exist. Using 0") || {
              x: 0,
              y: 0,
            }
          );
        }
        var rect = element.getBoundingClientRect(),
          isRoot = !container || container === _window || container === _body$1,
          cRect = isRoot
            ? {
              top:
                _docEl$1.clientTop -
                (_window.pageYOffset ||
                  _docEl$1.scrollTop ||
                  _body$1.scrollTop ||
                  0),
              left:
                _docEl$1.clientLeft -
                (_window.pageXOffset ||
                  _docEl$1.scrollLeft ||
                  _body$1.scrollLeft ||
                  0),
            }
            : container.getBoundingClientRect(),
          offsets = {
            x: rect.left - cRect.left,
            y: rect.top - cRect.top,
          };
        if (!isRoot && container) {
          offsets.x += _buildGetter(container, "x")();
          offsets.y += _buildGetter(container, "y")();
        }
        return offsets;
      },
      _parseVal = function _parseVal2(
        value,
        target,
        axis,
        currentVal,
        offset2
      ) {
        return !isNaN(value) && typeof value !== "object"
          ? parseFloat(value) - offset2
          : _isString$1(value) && value.charAt(1) === "="
            ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) +
            currentVal -
            offset2
            : value === "max"
              ? _max(target, axis) - offset2
              : Math.min(
                _max(target, axis),
                _getOffset(value, target)[axis] - offset2
              );
      },
      _initCore = function _initCore2() {
        gsap$1 = _getGSAP$1();
        if (
          _windowExists$1() &&
          gsap$1 &&
          typeof document !== "undefined" &&
          document.body
        ) {
          _window = window;
          _body$1 = document.body;
          _docEl$1 = document.documentElement;
          _toArray$1 = gsap$1.utils.toArray;
          gsap$1.config({
            autoKillThreshold: 7,
          });
          _config = gsap$1.config();
          _coreInitted$1 = 1;
        }
      };
    var ScrollToPlugin = {
      version: "3.12.5",
      name: "scrollTo",
      rawVars: 1,
      register: function register(core) {
        gsap$1 = core;
        _initCore();
      },
      init: function init(target, value, tween, index, targets) {
        _coreInitted$1 || _initCore();
        var data = this,
          snapType = gsap$1.getProperty(target, "scrollSnapType");
        data.isWin = target === _window;
        data.target = target;
        data.tween = tween;
        value = _clean(value, index, target, targets);
        data.vars = value;
        data.autoKill = !!value.autoKill;
        data.getX = _buildGetter(target, "x");
        data.getY = _buildGetter(target, "y");
        data.x = data.xPrev = data.getX();
        data.y = data.yPrev = data.getY();
        ScrollTrigger$1 ||
          (ScrollTrigger$1 = gsap$1.core.globals().ScrollTrigger);
        gsap$1.getProperty(target, "scrollBehavior") === "smooth" &&
          gsap$1.set(target, {
            scrollBehavior: "auto",
          });
        if (snapType && snapType !== "none") {
          data.snap = 1;
          data.snapInline = target.style.scrollSnapType;
          target.style.scrollSnapType = "none";
        }
        if (value.x != null) {
          data.add(
            data,
            "x",
            data.x,
            _parseVal(value.x, target, "x", data.x, value.offsetX || 0),
            index,
            targets
          );
          data._props.push("scrollTo_x");
        } else {
          data.skipX = 1;
        }
        if (value.y != null) {
          data.add(
            data,
            "y",
            data.y,
            _parseVal(value.y, target, "y", data.y, value.offsetY || 0),
            index,
            targets
          );
          data._props.push("scrollTo_y");
        } else {
          data.skipY = 1;
        }
      },
      render: function render(ratio, data) {
        var pt2 = data._pt,
          target = data.target,
          tween = data.tween,
          autoKill = data.autoKill,
          xPrev = data.xPrev,
          yPrev = data.yPrev,
          isWin = data.isWin,
          snap2 = data.snap,
          snapInline = data.snapInline,
          x2,
          y2,
          yDif,
          xDif,
          threshold;
        while (pt2) {
          pt2.r(ratio, pt2.d);
          pt2 = pt2._next;
        }
        x2 = isWin || !data.skipX ? data.getX() : xPrev;
        y2 = isWin || !data.skipY ? data.getY() : yPrev;
        yDif = y2 - yPrev;
        xDif = x2 - xPrev;
        threshold = _config.autoKillThreshold;
        if (data.x < 0) {
          data.x = 0;
        }
        if (data.y < 0) {
          data.y = 0;
        }
        if (autoKill) {
          if (
            !data.skipX &&
            (xDif > threshold || xDif < -threshold) &&
            x2 < _max(target, "x")
          ) {
            data.skipX = 1;
          }
          if (
            !data.skipY &&
            (yDif > threshold || yDif < -threshold) &&
            y2 < _max(target, "y")
          ) {
            data.skipY = 1;
          }
          if (data.skipX && data.skipY) {
            tween.kill();
            data.vars.onAutoKill &&
              data.vars.onAutoKill.apply(
                tween,
                data.vars.onAutoKillParams || []
              );
          }
        }
        if (isWin) {
          _window.scrollTo(
            !data.skipX ? data.x : x2,
            !data.skipY ? data.y : y2
          );
        } else {
          data.skipY || (target.scrollTop = data.y);
          data.skipX || (target.scrollLeft = data.x);
        }
        if (snap2 && (ratio === 1 || ratio === 0)) {
          y2 = target.scrollTop;
          x2 = target.scrollLeft;
          snapInline
            ? (target.style.scrollSnapType = snapInline)
            : target.style.removeProperty("scroll-snap-type");
          target.scrollTop = y2 + 1;
          target.scrollLeft = x2 + 1;
          target.scrollTop = y2;
          target.scrollLeft = x2;
        }
        data.xPrev = data.x;
        data.yPrev = data.y;
        ScrollTrigger$1 && ScrollTrigger$1.update();
      },
      kill: function kill(property) {
        var both = property === "scrollTo",
          i2 = this._props.indexOf(property);
        if (both || property === "scrollTo_x") {
          this.skipX = 1;
        }
        if (both || property === "scrollTo_y") {
          this.skipY = 1;
        }
        i2 > -1 && this._props.splice(i2, 1);
        return !this._props.length;
      },
    };
    ScrollToPlugin.max = _max;
    ScrollToPlugin.getOffset = _getOffset;
    ScrollToPlugin.buildGetter = _buildGetter;
    _getGSAP$1() && gsap$1.registerPlugin(ScrollToPlugin);
    /*!
     * ScrollTrigger 3.12.5
     * https://gsap.com
     *
     * @license Copyright 2008-2024, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var gsap,
      _coreInitted,
      _win,
      _doc,
      _docEl,
      _body,
      _root,
      _resizeDelay,
      _toArray,
      _clamp,
      _time2,
      _syncInterval,
      _refreshing,
      _pointerIsDown,
      _transformProp,
      _i,
      _prevWidth,
      _prevHeight,
      _autoRefresh,
      _sort,
      _suppressOverwrites,
      _ignoreResize,
      _normalizer,
      _ignoreMobileResize,
      _baseScreenHeight,
      _baseScreenWidth,
      _fixIOSBug,
      _context,
      _scrollRestoration,
      _div100vh,
      _100vh,
      _isReverted,
      _clampingMax,
      _limitCallbacks,
      _startup = 1,
      _getTime = Date.now,
      _time1 = _getTime(),
      _lastScrollTime = 0,
      _enabled = 0,
      _parseClamp = function _parseClamp2(value, type, self2) {
        var clamp2 =
          _isString(value) &&
          (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
        self2["_" + type + "Clamp"] = clamp2;
        return clamp2 ? value.substr(6, value.length - 7) : value;
      },
      _keepClamp = function _keepClamp2(value, clamp2) {
        return clamp2 && (!_isString(value) || value.substr(0, 6) !== "clamp(")
          ? "clamp(" + value + ")"
          : value;
      },
      _rafBugFix = function _rafBugFix2() {
        return _enabled && requestAnimationFrame(_rafBugFix2);
      },
      _pointerDownHandler = function _pointerDownHandler2() {
        return (_pointerIsDown = 1);
      },
      _pointerUpHandler = function _pointerUpHandler2() {
        return (_pointerIsDown = 0);
      },
      _passThrough = function _passThrough2(v2) {
        return v2;
      },
      _round = function _round2(value) {
        return Math.round(value * 1e5) / 1e5 || 0;
      },
      _windowExists = function _windowExists2() {
        return typeof window !== "undefined";
      },
      _getGSAP = function _getGSAP2() {
        return (
          gsap ||
          (_windowExists() &&
            (gsap = window.gsap) &&
            gsap.registerPlugin &&
            gsap)
        );
      },
      _isViewport = function _isViewport2(e2) {
        return !!~_root.indexOf(e2);
      },
      _getViewportDimension = function _getViewportDimension2(
        dimensionProperty
      ) {
        return (
          (dimensionProperty === "Height"
            ? _100vh
            : _win["inner" + dimensionProperty]) ||
          _docEl["client" + dimensionProperty] ||
          _body["client" + dimensionProperty]
        );
      },
      _getBoundsFunc = function _getBoundsFunc2(element) {
        return (
          _getProxyProp(element, "getBoundingClientRect") ||
          (_isViewport(element)
            ? function () {
              _winOffsets.width = _win.innerWidth;
              _winOffsets.height = _100vh;
              return _winOffsets;
            }
            : function () {
              return _getBounds(element);
            })
        );
      },
      _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
        var d2 = _ref.d,
          d22 = _ref.d2,
          a2 = _ref.a;
        return (a2 = _getProxyProp(scroller, "getBoundingClientRect"))
          ? function () {
            return a2()[d2];
          }
          : function () {
            return (
              (isViewport
                ? _getViewportDimension(d22)
                : scroller["client" + d22]) || 0
            );
          };
      },
      _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
        return !isViewport || ~_proxies.indexOf(element)
          ? _getBoundsFunc(element)
          : function () {
            return _winOffsets;
          };
      },
      _maxScroll = function _maxScroll2(element, _ref2) {
        var s2 = _ref2.s,
          d2 = _ref2.d2,
          d3 = _ref2.d,
          a2 = _ref2.a;
        return Math.max(
          0,
          (s2 = "scroll" + d2) && (a2 = _getProxyProp(element, s2))
            ? a2() - _getBoundsFunc(element)()[d3]
            : _isViewport(element)
              ? (_docEl[s2] || _body[s2]) - _getViewportDimension(d2)
              : element[s2] - element["offset" + d2]
        );
      },
      _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
        for (var i2 = 0; i2 < _autoRefresh.length; i2 += 3) {
          (!events || ~events.indexOf(_autoRefresh[i2 + 1])) &&
            func(_autoRefresh[i2], _autoRefresh[i2 + 1], _autoRefresh[i2 + 2]);
        }
      },
      _isString = function _isString2(value) {
        return typeof value === "string";
      },
      _isFunction = function _isFunction2(value) {
        return typeof value === "function";
      },
      _isNumber = function _isNumber2(value) {
        return typeof value === "number";
      },
      _isObject = function _isObject2(value) {
        return typeof value === "object";
      },
      _endAnimation = function _endAnimation2(animation, reversed, pause) {
        return (
          animation &&
          animation.progress(reversed ? 0 : 1) &&
          pause &&
          animation.pause()
        );
      },
      _callback = function _callback2(self2, func) {
        if (self2.enabled) {
          var result = self2._ctx
            ? self2._ctx.add(function () {
              return func(self2);
            })
            : func(self2);
          result && result.totalTime && (self2.callbackAnimation = result);
        }
      },
      _abs = Math.abs,
      _left = "left",
      _top = "top",
      _right = "right",
      _bottom = "bottom",
      _width = "width",
      _height = "height",
      _Right = "Right",
      _Left = "Left",
      _Top = "Top",
      _Bottom = "Bottom",
      _padding = "padding",
      _margin = "margin",
      _Width = "Width",
      _Height = "Height",
      _px = "px",
      _getComputedStyle = function _getComputedStyle2(element) {
        return _win.getComputedStyle(element);
      },
      _makePositionable = function _makePositionable2(element) {
        var position = _getComputedStyle(element).position;
        element.style.position =
          position === "absolute" || position === "fixed"
            ? position
            : "relative";
      },
      _setDefaults = function _setDefaults2(obj, defaults2) {
        for (var p2 in defaults2) {
          p2 in obj || (obj[p2] = defaults2[p2]);
        }
        return obj;
      },
      _getBounds = function _getBounds2(element, withoutTransforms) {
        var tween =
          withoutTransforms &&
          _getComputedStyle(element)[_transformProp] !==
          "matrix(1, 0, 0, 1, 0, 0)" &&
          gsap
            .to(element, {
              x: 0,
              y: 0,
              xPercent: 0,
              yPercent: 0,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              skewX: 0,
              skewY: 0,
            })
            .progress(1),
          bounds = element.getBoundingClientRect();
        tween && tween.progress(0).kill();
        return bounds;
      },
      _getSize = function _getSize2(element, _ref3) {
        var d2 = _ref3.d2;
        return element["offset" + d2] || element["client" + d2] || 0;
      },
      _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
        var a2 = [],
          labels = timeline.labels,
          duration = timeline.duration(),
          p2;
        for (p2 in labels) {
          a2.push(labels[p2] / duration);
        }
        return a2;
      },
      _getClosestLabel = function _getClosestLabel2(animation) {
        return function (value) {
          return gsap.utils.snap(_getLabelRatioArray(animation), value);
        };
      },
      _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
        var snap2 = gsap.utils.snap(snapIncrementOrArray),
          a2 =
            Array.isArray(snapIncrementOrArray) &&
            snapIncrementOrArray.slice(0).sort(function (a3, b2) {
              return a3 - b2;
            });
        return a2
          ? function (value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var i2;
            if (!direction) {
              return snap2(value);
            }
            if (direction > 0) {
              value -= threshold;
              for (i2 = 0; i2 < a2.length; i2++) {
                if (a2[i2] >= value) {
                  return a2[i2];
                }
              }
              return a2[i2 - 1];
            } else {
              i2 = a2.length;
              value += threshold;
              while (i2--) {
                if (a2[i2] <= value) {
                  return a2[i2];
                }
              }
            }
            return a2[0];
          }
          : function (value, direction, threshold) {
            if (threshold === void 0) {
              threshold = 1e-3;
            }
            var snapped = snap2(value);
            return !direction ||
              Math.abs(snapped - value) < threshold ||
              snapped - value < 0 === direction < 0
              ? snapped
              : snap2(
                direction < 0
                  ? value - snapIncrementOrArray
                  : value + snapIncrementOrArray
              );
          };
      },
      _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
        return function (value, st2) {
          return _snapDirectional(_getLabelRatioArray(timeline))(
            value,
            st2.direction
          );
        };
      },
      _multiListener = function _multiListener2(
        func,
        element,
        types,
        callback
      ) {
        return types.split(",").forEach(function (type) {
          return func(element, type, callback);
        });
      },
      _addListener = function _addListener2(
        element,
        type,
        func,
        nonPassive,
        capture
      ) {
        return element.addEventListener(type, func, {
          passive: !nonPassive,
          capture: !!capture,
        });
      },
      _removeListener = function _removeListener2(
        element,
        type,
        func,
        capture
      ) {
        return element.removeEventListener(type, func, !!capture);
      },
      _wheelListener = function _wheelListener2(func, el, scrollFunc) {
        scrollFunc = scrollFunc && scrollFunc.wheelHandler;
        if (scrollFunc) {
          func(el, "wheel", scrollFunc);
          func(el, "touchmove", scrollFunc);
        }
      },
      _markerDefaults = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      _defaults = {
        toggleActions: "play",
        anticipatePin: 0,
      },
      _keywords = {
        top: 0,
        left: 0,
        center: 0.5,
        bottom: 1,
        right: 1,
      },
      _offsetToPx = function _offsetToPx2(value, size) {
        if (_isString(value)) {
          var eqIndex = value.indexOf("="),
            relative = ~eqIndex
              ? +(value.charAt(eqIndex - 1) + 1) *
              parseFloat(value.substr(eqIndex + 1))
              : 0;
          if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
          }
          value =
            relative +
            (value in _keywords
              ? _keywords[value] * size
              : ~value.indexOf("%")
                ? (parseFloat(value) * size) / 100
                : parseFloat(value) || 0);
        }
        return value;
      },
      _createMarker = function _createMarker2(
        type,
        name,
        container,
        direction,
        _ref4,
        offset2,
        matchWidthEl,
        containerAnimation
      ) {
        var startColor = _ref4.startColor,
          endColor = _ref4.endColor,
          fontSize = _ref4.fontSize,
          indent = _ref4.indent,
          fontWeight = _ref4.fontWeight;
        var e2 = _doc.createElement("div"),
          useFixedPosition =
            _isViewport(container) ||
            _getProxyProp(container, "pinType") === "fixed",
          isScroller = type.indexOf("scroller") !== -1,
          parent2 = useFixedPosition ? _body : container,
          isStart = type.indexOf("start") !== -1,
          color = isStart ? startColor : endColor,
          css =
            "border-color:" +
            color +
            ";font-size:" +
            fontSize +
            ";color:" +
            color +
            ";font-weight:" +
            fontWeight +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        css +=
          "position:" +
          ((isScroller || containerAnimation) && useFixedPosition
            ? "fixed;"
            : "absolute;");
        (isScroller || containerAnimation || !useFixedPosition) &&
          (css +=
            (direction === _vertical ? _right : _bottom) +
            ":" +
            (offset2 + parseFloat(indent)) +
            "px;");
        matchWidthEl &&
          (css +=
            "box-sizing:border-box;text-align:left;width:" +
            matchWidthEl.offsetWidth +
            "px;");
        e2._isStart = isStart;
        e2.setAttribute(
          "class",
          "gsap-marker-" + type + (name ? " marker-" + name : "")
        );
        e2.style.cssText = css;
        e2.innerText = name || name === 0 ? type + "-" + name : type;
        parent2.children[0]
          ? parent2.insertBefore(e2, parent2.children[0])
          : parent2.appendChild(e2);
        e2._offset = e2["offset" + direction.op.d2];
        _positionMarker(e2, 0, direction, isStart);
        return e2;
      },
      _positionMarker = function _positionMarker2(
        marker,
        start,
        direction,
        flipped
      ) {
        var vars = {
          display: "block",
        },
          side = direction[flipped ? "os2" : "p2"],
          oppositeSide = direction[flipped ? "p2" : "os2"];
        marker._isFlipped = flipped;
        vars[direction.a + "Percent"] = flipped ? -100 : 0;
        vars[direction.a] = flipped ? "1px" : 0;
        vars["border" + side + _Width] = 1;
        vars["border" + oppositeSide + _Width] = 0;
        vars[direction.p] = start + "px";
        gsap.set(marker, vars);
      },
      _triggers = [],
      _ids = {},
      _rafID,
      _sync = function _sync2() {
        return (
          _getTime() - _lastScrollTime > 34 &&
          (_rafID || (_rafID = requestAnimationFrame(_updateAll)))
        );
      },
      _onScroll = function _onScroll2() {
        if (
          !_normalizer ||
          !_normalizer.isPressed ||
          _normalizer.startX > _body.clientWidth
        ) {
          _scrollers.cache++;
          if (_normalizer) {
            _rafID || (_rafID = requestAnimationFrame(_updateAll));
          } else {
            _updateAll();
          }
          _lastScrollTime || _dispatch("scrollStart");
          _lastScrollTime = _getTime();
        }
      },
      _setBaseDimensions = function _setBaseDimensions2() {
        _baseScreenWidth = _win.innerWidth;
        _baseScreenHeight = _win.innerHeight;
      },
      _onResize = function _onResize2() {
        _scrollers.cache++;
        !_refreshing &&
          !_ignoreResize &&
          !_doc.fullscreenElement &&
          !_doc.webkitFullscreenElement &&
          (!_ignoreMobileResize ||
            _baseScreenWidth !== _win.innerWidth ||
            Math.abs(_win.innerHeight - _baseScreenHeight) >
            _win.innerHeight * 0.25) &&
          _resizeDelay.restart(true);
      },
      _listeners = {},
      _emptyArray = [],
      _softRefresh = function _softRefresh2() {
        return (
          _removeListener(ScrollTrigger, "scrollEnd", _softRefresh2) ||
          _refreshAll(true)
        );
      },
      _dispatch = function _dispatch2(type) {
        return (
          (_listeners[type] &&
            _listeners[type].map(function (f2) {
              return f2();
            })) ||
          _emptyArray
        );
      },
      _savedStyles = [],
      _revertRecorded = function _revertRecorded2(media) {
        for (var i2 = 0; i2 < _savedStyles.length; i2 += 5) {
          if (
            !media ||
            (_savedStyles[i2 + 4] && _savedStyles[i2 + 4].query === media)
          ) {
            _savedStyles[i2].style.cssText = _savedStyles[i2 + 1];
            _savedStyles[i2].getBBox &&
              _savedStyles[i2].setAttribute(
                "transform",
                _savedStyles[i2 + 2] || ""
              );
            _savedStyles[i2 + 3].uncache = 1;
          }
        }
      },
      _revertAll = function _revertAll2(kill, media) {
        var trigger;
        for (_i = 0; _i < _triggers.length; _i++) {
          trigger = _triggers[_i];
          if (trigger && (!media || trigger._ctx === media)) {
            if (kill) {
              trigger.kill(1);
            } else {
              trigger.revert(true, true);
            }
          }
        }
        _isReverted = true;
        media && _revertRecorded(media);
        media || _dispatch("revert");
      },
      _clearScrollMemory = function _clearScrollMemory2(
        scrollRestoration,
        force
      ) {
        _scrollers.cache++;
        (force || !_refreshingAll) &&
          _scrollers.forEach(function (obj) {
            return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
          });
        _isString(scrollRestoration) &&
          (_win.history.scrollRestoration = _scrollRestoration =
            scrollRestoration);
      },
      _refreshingAll,
      _refreshID = 0,
      _queueRefreshID,
      _queueRefreshAll = function _queueRefreshAll2() {
        if (_queueRefreshID !== _refreshID) {
          var id = (_queueRefreshID = _refreshID);
          requestAnimationFrame(function () {
            return id === _refreshID && _refreshAll(true);
          });
        }
      },
      _refresh100vh = function _refresh100vh2() {
        _body.appendChild(_div100vh);
        _100vh = (!_normalizer && _div100vh.offsetHeight) || _win.innerHeight;
        _body.removeChild(_div100vh);
      },
      _hideAllMarkers = function _hideAllMarkers2(hide) {
        return _toArray(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
        ).forEach(function (el) {
          return (el.style.display = hide ? "none" : "block");
        });
      },
      _refreshAll = function _refreshAll2(force, skipRevert) {
        if (_lastScrollTime && !force && !_isReverted) {
          _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
          return;
        }
        _refresh100vh();
        _refreshingAll = ScrollTrigger.isRefreshing = true;
        _scrollers.forEach(function (obj) {
          return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
        });
        var refreshInits = _dispatch("refreshInit");
        _sort && ScrollTrigger.sort();
        skipRevert || _revertAll();
        _scrollers.forEach(function (obj) {
          if (_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto");
            obj(0);
          }
        });
        _triggers.slice(0).forEach(function (t2) {
          return t2.refresh();
        });
        _isReverted = false;
        _triggers.forEach(function (t2) {
          if (t2._subPinOffset && t2.pin) {
            var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight",
              original = t2.pin[prop];
            t2.revert(true, 1);
            t2.adjustPinSpacing(t2.pin[prop] - original);
            t2.refresh();
          }
        });
        _clampingMax = 1;
        _hideAllMarkers(true);
        _triggers.forEach(function (t2) {
          var max2 = _maxScroll(t2.scroller, t2._dir),
            endClamp = t2.vars.end === "max" || (t2._endClamp && t2.end > max2),
            startClamp = t2._startClamp && t2.start >= max2;
          (endClamp || startClamp) &&
            t2.setPositions(
              startClamp ? max2 - 1 : t2.start,
              endClamp
                ? Math.max(startClamp ? max2 : t2.start + 1, max2)
                : t2.end,
              true
            );
        });
        _hideAllMarkers(false);
        _clampingMax = 0;
        refreshInits.forEach(function (result) {
          return result && result.render && result.render(-1);
        });
        _scrollers.forEach(function (obj) {
          if (_isFunction(obj)) {
            obj.smooth &&
              requestAnimationFrame(function () {
                return (obj.target.style.scrollBehavior = "smooth");
              });
            obj.rec && obj(obj.rec);
          }
        });
        _clearScrollMemory(_scrollRestoration, 1);
        _resizeDelay.pause();
        _refreshID++;
        _refreshingAll = 2;
        _updateAll(2);
        _triggers.forEach(function (t2) {
          return _isFunction(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
        });
        _refreshingAll = ScrollTrigger.isRefreshing = false;
        _dispatch("refresh");
      },
      _lastScroll = 0,
      _direction = 1,
      _primary,
      _updateAll = function _updateAll2(force) {
        if (force === 2 || (!_refreshingAll && !_isReverted)) {
          ScrollTrigger.isUpdating = true;
          _primary && _primary.update(0);
          var l2 = _triggers.length,
            time = _getTime(),
            recordVelocity = time - _time1 >= 50,
            scroll = l2 && _triggers[0].scroll();
          _direction = _lastScroll > scroll ? -1 : 1;
          _refreshingAll || (_lastScroll = scroll);
          if (recordVelocity) {
            if (
              _lastScrollTime &&
              !_pointerIsDown &&
              time - _lastScrollTime > 200
            ) {
              _lastScrollTime = 0;
              _dispatch("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
          }
          if (_direction < 0) {
            _i = l2;
            while (_i-- > 0) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
            _direction = 1;
          } else {
            for (_i = 0; _i < l2; _i++) {
              _triggers[_i] && _triggers[_i].update(0, recordVelocity);
            }
          }
          ScrollTrigger.isUpdating = false;
        }
        _rafID = 0;
      },
      _propNamesToCopy = [
        _left,
        _top,
        _bottom,
        _right,
        _margin + _Bottom,
        _margin + _Right,
        _margin + _Top,
        _margin + _Left,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      _stateProps = _propNamesToCopy.concat([
        _width,
        _height,
        "boxSizing",
        "max" + _Width,
        "max" + _Height,
        "position",
        _margin,
        _padding,
        _padding + _Top,
        _padding + _Right,
        _padding + _Bottom,
        _padding + _Left,
      ]),
      _swapPinOut = function _swapPinOut2(pin, spacer, state) {
        _setState(state);
        var cache = pin._gsap;
        if (cache.spacerIsNative) {
          _setState(cache.spacerState);
        } else if (pin._gsap.swappedIn) {
          var parent2 = spacer.parentNode;
          if (parent2) {
            parent2.insertBefore(pin, spacer);
            parent2.removeChild(spacer);
          }
        }
        pin._gsap.swappedIn = false;
      },
      _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
        if (!pin._gsap.swappedIn) {
          var i2 = _propNamesToCopy.length,
            spacerStyle = spacer.style,
            pinStyle = pin.style,
            p2;
          while (i2--) {
            p2 = _propNamesToCopy[i2];
            spacerStyle[p2] = cs[p2];
          }
          spacerStyle.position =
            cs.position === "absolute" ? "absolute" : "relative";
          cs.display === "inline" && (spacerStyle.display = "inline-block");
          pinStyle[_bottom] = pinStyle[_right] = "auto";
          spacerStyle.flexBasis = cs.flexBasis || "auto";
          spacerStyle.overflow = "visible";
          spacerStyle.boxSizing = "border-box";
          spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
          spacerStyle[_height] = _getSize(pin, _vertical) + _px;
          spacerStyle[_padding] =
            pinStyle[_margin] =
            pinStyle[_top] =
            pinStyle[_left] =
            "0";
          _setState(spacerState);
          pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
          pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
          pinStyle[_padding] = cs[_padding];
          if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
          }
          pin._gsap.swappedIn = true;
        }
      },
      _capsExp = /([A-Z])/g,
      _setState = function _setState2(state) {
        if (state) {
          var style = state.t.style,
            l2 = state.length,
            i2 = 0,
            p2,
            value;
          (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1;
          for (; i2 < l2; i2 += 2) {
            value = state[i2 + 1];
            p2 = state[i2];
            if (value) {
              style[p2] = value;
            } else if (style[p2]) {
              style.removeProperty(p2.replace(_capsExp, "-$1").toLowerCase());
            }
          }
        }
      },
      _getState = function _getState2(element) {
        var l2 = _stateProps.length,
          style = element.style,
          state = [],
          i2 = 0;
        for (; i2 < l2; i2++) {
          state.push(_stateProps[i2], style[_stateProps[i2]]);
        }
        state.t = element;
        return state;
      },
      _copyState = function _copyState2(state, override, omitOffsets) {
        var result = [],
          l2 = state.length,
          i2 = omitOffsets ? 8 : 0,
          p2;
        for (; i2 < l2; i2 += 2) {
          p2 = state[i2];
          result.push(p2, p2 in override ? override[p2] : state[i2 + 1]);
        }
        result.t = state.t;
        return result;
      },
      _winOffsets = {
        left: 0,
        top: 0,
      },
      _parsePosition = function _parsePosition2(
        value,
        trigger,
        scrollerSize,
        direction,
        scroll,
        marker,
        markerScroller,
        self2,
        scrollerBounds,
        borderWidth,
        useFixedPosition,
        scrollerMax,
        containerAnimation,
        clampZeroProp
      ) {
        _isFunction(value) && (value = value(self2));
        if (_isString(value) && value.substr(0, 3) === "max") {
          value =
            scrollerMax +
            (value.charAt(4) === "="
              ? _offsetToPx("0" + value.substr(3), scrollerSize)
              : 0);
        }
        var time = containerAnimation ? containerAnimation.time() : 0,
          p1,
          p2,
          element;
        containerAnimation && containerAnimation.seek(0);
        isNaN(value) || (value = +value);
        if (!_isNumber(value)) {
          _isFunction(trigger) && (trigger = trigger(self2));
          var offsets = (value || "0").split(" "),
            bounds,
            localOffset,
            globalOffset,
            display;
          element = _getTarget(trigger, self2) || _body;
          bounds = _getBounds(element) || {};
          if (
            (!bounds || (!bounds.left && !bounds.top)) &&
            _getComputedStyle(element).display === "none"
          ) {
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display
              ? (element.style.display = display)
              : element.style.removeProperty("display");
          }
          localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
          globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
          value =
            bounds[direction.p] -
            scrollerBounds[direction.p] -
            borderWidth +
            localOffset +
            scroll -
            globalOffset;
          markerScroller &&
            _positionMarker(
              markerScroller,
              globalOffset,
              direction,
              scrollerSize - globalOffset < 20 ||
              (markerScroller._isStart && globalOffset > 20)
            );
          scrollerSize -= scrollerSize - globalOffset;
        } else {
          containerAnimation &&
            (value = gsap.utils.mapRange(
              containerAnimation.scrollTrigger.start,
              containerAnimation.scrollTrigger.end,
              0,
              scrollerMax,
              value
            ));
          markerScroller &&
            _positionMarker(markerScroller, scrollerSize, direction, true);
        }
        if (clampZeroProp) {
          self2[clampZeroProp] = value || -1e-3;
          value < 0 && (value = 0);
        }
        if (marker) {
          var position = value + scrollerSize,
            isStart = marker._isStart;
          p1 = "scroll" + direction.d2;
          _positionMarker(
            marker,
            position,
            direction,
            (isStart && position > 20) ||
            (!isStart &&
              (useFixedPosition
                ? Math.max(_body[p1], _docEl[p1])
                : marker.parentNode[p1]) <=
              position + 1)
          );
          if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition &&
              (marker.style[direction.op.p] =
                scrollerBounds[direction.op.p] -
                direction.op.m -
                marker._offset +
                _px);
          }
        }
        if (containerAnimation && element) {
          p1 = _getBounds(element);
          containerAnimation.seek(scrollerMax);
          p2 = _getBounds(element);
          containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
          value = (value / containerAnimation._caScrollDist) * scrollerMax;
        }
        containerAnimation && containerAnimation.seek(time);
        return containerAnimation ? value : Math.round(value);
      },
      _prefixExp = /(webkit|moz|length|cssText|inset)/i,
      _reparent = function _reparent2(element, parent2, top2, left) {
        if (element.parentNode !== parent2) {
          var style = element.style,
            p2,
            cs;
          if (parent2 === _body) {
            element._stOrig = style.cssText;
            cs = _getComputedStyle(element);
            for (p2 in cs) {
              if (
                !+p2 &&
                !_prefixExp.test(p2) &&
                cs[p2] &&
                typeof style[p2] === "string" &&
                p2 !== "0"
              ) {
                style[p2] = cs[p2];
              }
            }
            style.top = top2;
            style.left = left;
          } else {
            style.cssText = element._stOrig;
          }
          gsap.core.getCache(element).uncache = 1;
          parent2.appendChild(element);
        }
      },
      _interruptionTracker = function _interruptionTracker2(
        getValueFunc,
        initialValue,
        onInterrupt
      ) {
        var last1 = initialValue,
          last2 = last1;
        return function (value) {
          var current = Math.round(getValueFunc());
          if (
            current !== last1 &&
            current !== last2 &&
            Math.abs(current - last1) > 3 &&
            Math.abs(current - last2) > 3
          ) {
            value = current;
            onInterrupt && onInterrupt();
          }
          last2 = last1;
          last1 = value;
          return value;
        };
      },
      _shiftMarker = function _shiftMarker2(marker, direction, value) {
        var vars = {};
        vars[direction.p] = "+=" + value;
        gsap.set(marker, vars);
      },
      _getTweenCreator = function _getTweenCreator2(scroller, direction) {
        var getScroll = _getScrollFunc(scroller, direction),
          prop = "_scroll" + direction.p2,
          getTween = function getTween2(
            scrollTo2,
            vars,
            initialValue,
            change1,
            change2
          ) {
            var tween = getTween2.tween,
              onComplete = vars.onComplete,
              modifiers = {};
            initialValue = initialValue || getScroll();
            var checkForInterruption = _interruptionTracker(
              getScroll,
              initialValue,
              function () {
                tween.kill();
                getTween2.tween = 0;
              }
            );
            change2 = (change1 && change2) || 0;
            change1 = change1 || scrollTo2 - initialValue;
            tween && tween.kill();
            vars[prop] = scrollTo2;
            vars.inherit = false;
            vars.modifiers = modifiers;
            modifiers[prop] = function () {
              return checkForInterruption(
                initialValue +
                change1 * tween.ratio +
                change2 * tween.ratio * tween.ratio
              );
            };
            vars.onUpdate = function () {
              _scrollers.cache++;
              getTween2.tween && _updateAll();
            };
            vars.onComplete = function () {
              getTween2.tween = 0;
              onComplete && onComplete.call(tween);
            };
            tween = getTween2.tween = gsap.to(scroller, vars);
            return tween;
          };
        scroller[prop] = getScroll;
        getScroll.wheelHandler = function () {
          return (
            getTween.tween && getTween.tween.kill() && (getTween.tween = 0)
          );
        };
        _addListener(scroller, "wheel", getScroll.wheelHandler);
        ScrollTrigger.isTouch &&
          _addListener(scroller, "touchmove", getScroll.wheelHandler);
        return getTween;
      };
    var ScrollTrigger = /* @__PURE__ */ (function () {
      function ScrollTrigger2(vars, animation) {
        _coreInitted ||
          ScrollTrigger2.register(gsap) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context(this);
        this.init(vars, animation);
      }
      var _proto = ScrollTrigger2.prototype;
      _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = _passThrough;
          return;
        }
        vars = _setDefaults(
          _isString(vars) || _isNumber(vars) || vars.nodeType
            ? {
              trigger: vars,
            }
            : vars,
          _defaults
        );
        var _vars = vars,
          onUpdate = _vars.onUpdate,
          toggleClass = _vars.toggleClass,
          id = _vars.id,
          onToggle = _vars.onToggle,
          onRefresh = _vars.onRefresh,
          scrub = _vars.scrub,
          trigger = _vars.trigger,
          pin = _vars.pin,
          pinSpacing = _vars.pinSpacing,
          invalidateOnRefresh = _vars.invalidateOnRefresh,
          anticipatePin = _vars.anticipatePin,
          onScrubComplete = _vars.onScrubComplete,
          onSnapComplete = _vars.onSnapComplete,
          once = _vars.once,
          snap2 = _vars.snap,
          pinReparent = _vars.pinReparent,
          pinSpacer = _vars.pinSpacer,
          containerAnimation = _vars.containerAnimation,
          fastScrollEnd = _vars.fastScrollEnd,
          preventOverlaps = _vars.preventOverlaps,
          direction =
            vars.horizontal ||
              (vars.containerAnimation && vars.horizontal !== false)
              ? _horizontal
              : _vertical,
          isToggle = !scrub && scrub !== 0,
          scroller = _getTarget(vars.scroller || _win),
          scrollerCache = gsap.core.getCache(scroller),
          isViewport = _isViewport(scroller),
          useFixedPosition =
            ("pinType" in vars
              ? vars.pinType
              : _getProxyProp(scroller, "pinType") ||
              (isViewport && "fixed")) === "fixed",
          callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack,
          ],
          toggleActions = isToggle && vars.toggleActions.split(" "),
          markers = "markers" in vars ? vars.markers : _defaults.markers,
          borderWidth = isViewport
            ? 0
            : parseFloat(
              _getComputedStyle(scroller)["border" + direction.p2 + _Width]
            ) || 0,
          self2 = this,
          onRefreshInit =
            vars.onRefreshInit &&
            function () {
              return vars.onRefreshInit(self2);
            },
          getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
          getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
          lastSnap = 0,
          lastRefresh = 0,
          prevProgress = 0,
          scrollFunc = _getScrollFunc(scroller, direction),
          tweenTo,
          pinCache,
          snapFunc,
          scroll1,
          scroll2,
          start,
          end,
          markerStart,
          markerEnd,
          markerStartTrigger,
          markerEndTrigger,
          markerVars,
          executingOnRefresh,
          change,
          pinOriginalState,
          pinActiveState,
          pinState,
          spacer,
          offset2,
          pinGetter,
          pinSetter,
          pinStart,
          pinChange,
          spacingStart,
          spacerState,
          markerStartSetter,
          pinMoves,
          markerEndSetter,
          cs,
          snap1,
          snap22,
          scrubTween,
          scrubSmooth,
          snapDurClamp,
          snapDelayedCall,
          prevScroll,
          prevAnimProgress,
          caMarkerSetter,
          customRevertReturn;
        self2._startClamp = self2._endClamp = false;
        self2._dir = direction;
        anticipatePin *= 45;
        self2.scroller = scroller;
        self2.scroll = containerAnimation
          ? containerAnimation.time.bind(containerAnimation)
          : scrollFunc;
        scroll1 = scrollFunc();
        self2.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
          _sort = 1;
          vars.refreshPriority === -9999 && (_primary = self2);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal),
        };
        self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self2.scrubDuration = function (value) {
          scrubSmooth = _isNumber(value) && value;
          if (!scrubSmooth) {
            scrubTween && scrubTween.progress(1).kill();
            scrubTween = 0;
          } else {
            scrubTween
              ? scrubTween.duration(value)
              : (scrubTween = gsap.to(animation, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: false,
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                  return onScrubComplete && onScrubComplete(self2);
                },
              }));
          }
        };
        if (animation) {
          animation.vars.lazy = false;
          (animation._initted && !self2.isReverted) ||
            (animation.vars.immediateRender !== false &&
              vars.immediateRender !== false &&
              animation.duration() &&
              animation.render(0, true, true));
          self2.animation = animation.pause();
          animation.scrollTrigger = self2;
          self2.scrubDuration(scrub);
          snap1 = 0;
          id || (id = animation.vars.id);
        }
        if (snap2) {
          if (!_isObject(snap2) || snap2.push) {
            snap2 = {
              snapTo: snap2,
            };
          }
          "scrollBehavior" in _body.style &&
            gsap.set(isViewport ? [_body, _docEl] : scroller, {
              scrollBehavior: "auto",
            });
          _scrollers.forEach(function (o2) {
            return (
              _isFunction(o2) &&
              o2.target ===
              (isViewport ? _doc.scrollingElement || _docEl : scroller) &&
              (o2.smooth = false)
            );
          });
          snapFunc = _isFunction(snap2.snapTo)
            ? snap2.snapTo
            : snap2.snapTo === "labels"
              ? _getClosestLabel(animation)
              : snap2.snapTo === "labelsDirectional"
                ? _getLabelAtDirection(animation)
                : snap2.directional !== false
                  ? function (value, st2) {
                    return _snapDirectional(snap2.snapTo)(
                      value,
                      _getTime() - lastRefresh < 500 ? 0 : st2.direction
                    );
                  }
                  : gsap.utils.snap(snap2.snapTo);
          snapDurClamp = snap2.duration || {
            min: 0.1,
            max: 2,
          };
          snapDurClamp = _isObject(snapDurClamp)
            ? _clamp(snapDurClamp.min, snapDurClamp.max)
            : _clamp(snapDurClamp, snapDurClamp);
          snapDelayedCall = gsap
            .delayedCall(snap2.delay || scrubSmooth / 2 || 0.1, function () {
              var scroll = scrollFunc(),
                refreshedRecently = _getTime() - lastRefresh < 500,
                tween = tweenTo.tween;
              if (
                (refreshedRecently || Math.abs(self2.getVelocity()) < 10) &&
                !tween &&
                !_pointerIsDown &&
                lastSnap !== scroll
              ) {
                var progress = (scroll - start) / change,
                  totalProgress =
                    animation && !isToggle
                      ? animation.totalProgress()
                      : progress,
                  velocity = refreshedRecently
                    ? 0
                    : ((totalProgress - snap22) / (_getTime() - _time2)) *
                    1e3 || 0,
                  change1 = gsap.utils.clamp(
                    -progress,
                    1 - progress,
                    (_abs(velocity / 2) * velocity) / 0.185
                  ),
                  naturalEnd =
                    progress + (snap2.inertia === false ? 0 : change1),
                  endValue,
                  endScroll,
                  _snap = snap2,
                  onStart = _snap.onStart,
                  _onInterrupt = _snap.onInterrupt,
                  _onComplete = _snap.onComplete;
                endValue = snapFunc(naturalEnd, self2);
                _isNumber(endValue) || (endValue = naturalEnd);
                endScroll = Math.round(start + endValue * change);
                if (scroll <= end && scroll >= start && endScroll !== scroll) {
                  if (
                    tween &&
                    !tween._initted &&
                    tween.data <= _abs(endScroll - scroll)
                  ) {
                    return;
                  }
                  if (snap2.inertia === false) {
                    change1 = endValue - progress;
                  }
                  tweenTo(
                    endScroll,
                    {
                      duration: snapDurClamp(
                        _abs(
                          (Math.max(
                            _abs(naturalEnd - totalProgress),
                            _abs(endValue - totalProgress)
                          ) *
                            0.185) /
                          velocity /
                          0.05 || 0
                        )
                      ),
                      ease: snap2.ease || "power3",
                      data: _abs(endScroll - scroll),
                      // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                      onInterrupt: function onInterrupt() {
                        return (
                          snapDelayedCall.restart(true) &&
                          _onInterrupt &&
                          _onInterrupt(self2)
                        );
                      },
                      onComplete: function onComplete() {
                        self2.update();
                        lastSnap = scrollFunc();
                        if (animation) {
                          scrubTween
                            ? scrubTween.resetTo(
                              "totalProgress",
                              endValue,
                              animation._tTime / animation._tDur
                            )
                            : animation.progress(endValue);
                        }
                        snap1 = snap22 =
                          animation && !isToggle
                            ? animation.totalProgress()
                            : self2.progress;
                        onSnapComplete && onSnapComplete(self2);
                        _onComplete && _onComplete(self2);
                      },
                    },
                    scroll,
                    change1 * change,
                    endScroll - scroll - change1 * change
                  );
                  onStart && onStart(self2, tweenTo.tween);
                }
              } else if (self2.isActive && lastSnap !== scroll) {
                snapDelayedCall.restart(true);
              }
            })
            .pause();
        }
        id && (_ids[id] = self2);
        trigger = self2.trigger = _getTarget(trigger || (pin !== true && pin));
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self2));
        pin = pin === true ? trigger : _getTarget(pin);
        _isString(toggleClass) &&
          (toggleClass = {
            targets: trigger,
            className: toggleClass,
          });
        if (pin) {
          pinSpacing === false ||
            pinSpacing === _margin ||
            (pinSpacing =
              !pinSpacing &&
                pin.parentNode &&
                pin.parentNode.style &&
                _getComputedStyle(pin.parentNode).display === "flex"
                ? false
                : _padding);
          self2.pin = pin;
          pinCache = gsap.core.getCache(pin);
          if (!pinCache.spacer) {
            if (pinSpacer) {
              pinSpacer = _getTarget(pinSpacer);
              pinSpacer &&
                !pinSpacer.nodeType &&
                (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
              pinCache.spacerIsNative = !!pinSpacer;
              pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
            }
            pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
            spacer.classList.add("pin-spacer");
            id && spacer.classList.add("pin-spacer-" + id);
            pinCache.pinState = pinOriginalState = _getState(pin);
          } else {
            pinOriginalState = pinCache.pinState;
          }
          vars.force3D !== false &&
            gsap.set(pin, {
              force3D: true,
            });
          self2.spacer = spacer = pinCache.spacer;
          cs = _getComputedStyle(pin);
          spacingStart = cs[pinSpacing + direction.os2];
          pinGetter = gsap.getProperty(pin);
          pinSetter = gsap.quickSetter(pin, direction.a, _px);
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
        }
        if (markers) {
          markerVars = _isObject(markers)
            ? _setDefaults(markers, _markerDefaults)
            : _markerDefaults;
          markerStartTrigger = _createMarker(
            "scroller-start",
            id,
            scroller,
            direction,
            markerVars,
            0
          );
          markerEndTrigger = _createMarker(
            "scroller-end",
            id,
            scroller,
            direction,
            markerVars,
            0,
            markerStartTrigger
          );
          offset2 = markerStartTrigger["offset" + direction.op.d2];
          var content = _getTarget(
            _getProxyProp(scroller, "content") || scroller
          );
          markerStart = this.markerStart = _createMarker(
            "start",
            id,
            content,
            direction,
            markerVars,
            offset2,
            0,
            containerAnimation
          );
          markerEnd = this.markerEnd = _createMarker(
            "end",
            id,
            content,
            direction,
            markerVars,
            offset2,
            0,
            containerAnimation
          );
          containerAnimation &&
            (caMarkerSetter = gsap.quickSetter(
              [markerStart, markerEnd],
              direction.a,
              _px
            ));
          if (
            !useFixedPosition &&
            !(
              _proxies.length &&
              _getProxyProp(scroller, "fixedMarkers") === true
            )
          ) {
            _makePositionable(isViewport ? _body : scroller);
            gsap.set([markerStartTrigger, markerEndTrigger], {
              force3D: true,
            });
            markerStartSetter = gsap.quickSetter(
              markerStartTrigger,
              direction.a,
              _px
            );
            markerEndSetter = gsap.quickSetter(
              markerEndTrigger,
              direction.a,
              _px
            );
          }
        }
        if (containerAnimation) {
          var oldOnUpdate = containerAnimation.vars.onUpdate,
            oldParams = containerAnimation.vars.onUpdateParams;
          containerAnimation.eventCallback("onUpdate", function () {
            self2.update(0, 0, 1);
            oldOnUpdate &&
              oldOnUpdate.apply(containerAnimation, oldParams || []);
          });
        }
        self2.previous = function () {
          return _triggers[_triggers.indexOf(self2) - 1];
        };
        self2.next = function () {
          return _triggers[_triggers.indexOf(self2) + 1];
        };
        self2.revert = function (revert, temp) {
          if (!temp) {
            return self2.kill(true);
          }
          var r2 = revert !== false || !self2.enabled,
            prevRefreshing = _refreshing;
          if (r2 !== self2.isReverted) {
            if (r2) {
              prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
              prevProgress = self2.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart &&
              [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger,
              ].forEach(function (m2) {
                return (m2.style.display = r2 ? "none" : "block");
              });
            if (r2) {
              _refreshing = self2;
              self2.update(r2);
            }
            if (pin && (!pinReparent || !self2.isActive)) {
              if (r2) {
                _swapPinOut(pin, spacer, pinOriginalState);
              } else {
                _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
              }
            }
            r2 || self2.update(r2);
            _refreshing = prevRefreshing;
            self2.isReverted = r2;
          }
        };
        self2.refresh = function (soft, force, position, pinOffset) {
          if ((_refreshing || !self2.enabled) && !force) {
            return;
          }
          if (pin && soft && _lastScrollTime) {
            _addListener(ScrollTrigger2, "scrollEnd", _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self2);
          _refreshing = self2;
          if (tweenTo.tween && !position) {
            tweenTo.tween.kill();
            tweenTo.tween = 0;
          }
          scrubTween && scrubTween.pause();
          invalidateOnRefresh &&
            animation &&
            animation
              .revert({
                kill: false,
              })
              .invalidate();
          self2.isReverted || self2.revert(true, true);
          self2._subPinOffset = false;
          var size = getScrollerSize(),
            scrollerBounds = getScrollerOffsets(),
            max2 = containerAnimation
              ? containerAnimation.duration()
              : _maxScroll(scroller, direction),
            isFirstRefresh = change <= 0.01,
            offset3 = 0,
            otherPinOffset = pinOffset || 0,
            parsedEnd = _isObject(position) ? position.end : vars.end,
            parsedEndTrigger = vars.endTrigger || trigger,
            parsedStart = _isObject(position)
              ? position.start
              : vars.start ||
              (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
            pinnedContainer = (self2.pinnedContainer =
              vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2)),
            triggerIndex =
              (trigger && Math.max(0, _triggers.indexOf(self2))) || 0,
            i2 = triggerIndex,
            cs2,
            bounds,
            scroll,
            isVertical,
            override,
            curTrigger,
            curPin,
            oppositeScroll,
            initted,
            revertedPins,
            forcedOverflow,
            markerStartOffset,
            markerEndOffset;
          if (markers && _isObject(position)) {
            markerStartOffset = gsap.getProperty(
              markerStartTrigger,
              direction.p
            );
            markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
          }
          while (i2--) {
            curTrigger = _triggers[i2];
            curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
            curPin = curTrigger.pin;
            if (
              curPin &&
              (curPin === trigger ||
                curPin === pin ||
                curPin === pinnedContainer) &&
              !curTrigger.isReverted
            ) {
              revertedPins || (revertedPins = []);
              revertedPins.unshift(curTrigger);
              curTrigger.revert(true, true);
            }
            if (curTrigger !== _triggers[i2]) {
              triggerIndex--;
              i2--;
            }
          }
          _isFunction(parsedStart) && (parsedStart = parsedStart(self2));
          parsedStart = _parseClamp(parsedStart, "start", self2);
          start =
            _parsePosition(
              parsedStart,
              trigger,
              size,
              direction,
              scrollFunc(),
              markerStart,
              markerStartTrigger,
              self2,
              scrollerBounds,
              borderWidth,
              useFixedPosition,
              max2,
              containerAnimation,
              self2._startClamp && "_startClamp"
            ) || (pin ? -1e-3 : 0);
          _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self2));
          if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
            if (~parsedEnd.indexOf(" ")) {
              parsedEnd =
                (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") +
                parsedEnd;
            } else {
              offset3 = _offsetToPx(parsedEnd.substr(2), size);
              parsedEnd = _isString(parsedStart)
                ? parsedStart
                : (containerAnimation
                  ? gsap.utils.mapRange(
                    0,
                    containerAnimation.duration(),
                    containerAnimation.scrollTrigger.start,
                    containerAnimation.scrollTrigger.end,
                    start
                  )
                  : start) + offset3;
              parsedEndTrigger = trigger;
            }
          }
          parsedEnd = _parseClamp(parsedEnd, "end", self2);
          end =
            Math.max(
              start,
              _parsePosition(
                parsedEnd || (parsedEndTrigger ? "100% 0" : max2),
                parsedEndTrigger,
                size,
                direction,
                scrollFunc() + offset3,
                markerEnd,
                markerEndTrigger,
                self2,
                scrollerBounds,
                borderWidth,
                useFixedPosition,
                max2,
                containerAnimation,
                self2._endClamp && "_endClamp"
              )
            ) || -1e-3;
          offset3 = 0;
          i2 = triggerIndex;
          while (i2--) {
            curTrigger = _triggers[i2];
            curPin = curTrigger.pin;
            if (
              curPin &&
              curTrigger.start - curTrigger._pinPush <= start &&
              !containerAnimation &&
              curTrigger.end > 0
            ) {
              cs2 =
                curTrigger.end -
                (self2._startClamp
                  ? Math.max(0, curTrigger.start)
                  : curTrigger.start);
              if (
                ((curPin === trigger &&
                  curTrigger.start - curTrigger._pinPush < start) ||
                  curPin === pinnedContainer) &&
                isNaN(parsedStart)
              ) {
                offset3 += cs2 * (1 - curTrigger.progress);
              }
              curPin === pin && (otherPinOffset += cs2);
            }
          }
          start += offset3;
          end += offset3;
          self2._startClamp && (self2._startClamp += offset3);
          if (self2._endClamp && !_refreshingAll) {
            self2._endClamp = end || -1e-3;
            end = Math.min(end, _maxScroll(scroller, direction));
          }
          change = end - start || ((start -= 0.01) && 1e-3);
          if (isFirstRefresh) {
            prevProgress = gsap.utils.clamp(
              0,
              1,
              gsap.utils.normalize(start, end, prevScroll)
            );
          }
          self2._pinPush = otherPinOffset;
          if (markerStart && offset3) {
            cs2 = {};
            cs2[direction.a] = "+=" + offset3;
            pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
            gsap.set([markerStart, markerEnd], cs2);
          }
          if (
            pin &&
            !(_clampingMax && self2.end >= _maxScroll(scroller, direction))
          ) {
            cs2 = _getComputedStyle(pin);
            isVertical = direction === _vertical;
            scroll = scrollFunc();
            pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
            if (!max2 && end > 1) {
              forcedOverflow = (
                isViewport ? _doc.scrollingElement || _docEl : scroller
              ).style;
              forcedOverflow = {
                style: forcedOverflow,
                value: forcedOverflow["overflow" + direction.a.toUpperCase()],
              };
              if (
                isViewport &&
                _getComputedStyle(_body)[
                "overflow" + direction.a.toUpperCase()
                ] !== "scroll"
              ) {
                forcedOverflow.style["overflow" + direction.a.toUpperCase()] =
                  "scroll";
              }
            }
            _swapPinIn(pin, spacer, cs2);
            pinState = _getState(pin);
            bounds = _getBounds(pin, true);
            oppositeScroll =
              useFixedPosition &&
              _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
            if (pinSpacing) {
              spacerState = [
                pinSpacing + direction.os2,
                change + otherPinOffset + _px,
              ];
              spacerState.t = spacer;
              i2 =
                pinSpacing === _padding
                  ? _getSize(pin, direction) + change + otherPinOffset
                  : 0;
              if (i2) {
                spacerState.push(direction.d, i2 + _px);
                spacer.style.flexBasis !== "auto" &&
                  (spacer.style.flexBasis = i2 + _px);
              }
              _setState(spacerState);
              if (pinnedContainer) {
                _triggers.forEach(function (t2) {
                  if (
                    t2.pin === pinnedContainer &&
                    t2.vars.pinSpacing !== false
                  ) {
                    t2._subPinOffset = true;
                  }
                });
              }
              useFixedPosition && scrollFunc(prevScroll);
            } else {
              i2 = _getSize(pin, direction);
              i2 &&
                spacer.style.flexBasis !== "auto" &&
                (spacer.style.flexBasis = i2 + _px);
            }
            if (useFixedPosition) {
              override = {
                top:
                  bounds.top +
                  (isVertical ? scroll - start : oppositeScroll) +
                  _px,
                left:
                  bounds.left +
                  (isVertical ? oppositeScroll : scroll - start) +
                  _px,
                boxSizing: "border-box",
                position: "fixed",
              };
              override[_width] = override["max" + _Width] =
                Math.ceil(bounds.width) + _px;
              override[_height] = override["max" + _Height] =
                Math.ceil(bounds.height) + _px;
              override[_margin] =
                override[_margin + _Top] =
                override[_margin + _Right] =
                override[_margin + _Bottom] =
                override[_margin + _Left] =
                "0";
              override[_padding] = cs2[_padding];
              override[_padding + _Top] = cs2[_padding + _Top];
              override[_padding + _Right] = cs2[_padding + _Right];
              override[_padding + _Bottom] = cs2[_padding + _Bottom];
              override[_padding + _Left] = cs2[_padding + _Left];
              pinActiveState = _copyState(
                pinOriginalState,
                override,
                pinReparent
              );
              _refreshingAll && scrollFunc(0);
            }
            if (animation) {
              initted = animation._initted;
              _suppressOverwrites(1);
              animation.render(animation.duration(), true, true);
              pinChange =
                pinGetter(direction.a) - pinStart + change + otherPinOffset;
              pinMoves = Math.abs(change - pinChange) > 1;
              useFixedPosition &&
                pinMoves &&
                pinActiveState.splice(pinActiveState.length - 2, 2);
              animation.render(0, true, true);
              initted || animation.invalidate(true);
              animation.parent || animation.totalTime(animation.totalTime());
              _suppressOverwrites(0);
            } else {
              pinChange = change;
            }
            forcedOverflow &&
              (forcedOverflow.value
                ? (forcedOverflow.style[
                  "overflow" + direction.a.toUpperCase()
                ] = forcedOverflow.value)
                : forcedOverflow.style.removeProperty(
                  "overflow-" + direction.a
                ));
          } else if (trigger && scrollFunc() && !containerAnimation) {
            bounds = trigger.parentNode;
            while (bounds && bounds !== _body) {
              if (bounds._pinOffset) {
                start -= bounds._pinOffset;
                end -= bounds._pinOffset;
              }
              bounds = bounds.parentNode;
            }
          }
          revertedPins &&
            revertedPins.forEach(function (t2) {
              return t2.revert(false, true);
            });
          self2.start = start;
          self2.end = end;
          scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
          if (!containerAnimation && !_refreshingAll) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self2.scroll.rec = 0;
          }
          self2.revert(false, true);
          lastRefresh = _getTime();
          if (snapDelayedCall) {
            lastSnap = -1;
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation &&
            isToggle &&
            (animation._initted || prevAnimProgress) &&
            animation.progress() !== prevAnimProgress &&
            animation
              .progress(prevAnimProgress || 0, true)
              .render(animation.time(), true, true);
          if (
            isFirstRefresh ||
            prevProgress !== self2.progress ||
            containerAnimation ||
            invalidateOnRefresh
          ) {
            animation &&
              !isToggle &&
              animation.totalProgress(
                containerAnimation && start < -1e-3 && !prevProgress
                  ? gsap.utils.normalize(start, end, 0)
                  : prevProgress,
                true
              );
            self2.progress =
              isFirstRefresh || (scroll1 - start) / change === prevProgress
                ? 0
                : prevProgress;
          }
          pin &&
            pinSpacing &&
            (spacer._pinOffset = Math.round(self2.progress * pinChange));
          scrubTween && scrubTween.invalidate();
          if (!isNaN(markerStartOffset)) {
            markerStartOffset -= gsap.getProperty(
              markerStartTrigger,
              direction.p
            );
            markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
            _shiftMarker(markerStartTrigger, direction, markerStartOffset);
            _shiftMarker(
              markerStart,
              direction,
              markerStartOffset - (pinOffset || 0)
            );
            _shiftMarker(markerEndTrigger, direction, markerEndOffset);
            _shiftMarker(
              markerEnd,
              direction,
              markerEndOffset - (pinOffset || 0)
            );
          }
          isFirstRefresh && !_refreshingAll && self2.update();
          if (onRefresh && !_refreshingAll && !executingOnRefresh) {
            executingOnRefresh = true;
            onRefresh(self2);
            executingOnRefresh = false;
          }
        };
        self2.getVelocity = function () {
          return ((scrollFunc() - scroll2) / (_getTime() - _time2)) * 1e3 || 0;
        };
        self2.endAnimation = function () {
          _endAnimation(self2.callbackAnimation);
          if (animation) {
            scrubTween
              ? scrubTween.progress(1)
              : !animation.paused()
                ? _endAnimation(animation, animation.reversed())
                : isToggle || _endAnimation(animation, self2.direction < 0, 1);
          }
        };
        self2.labelToScroll = function (label) {
          return (
            (animation &&
              animation.labels &&
              (start || self2.refresh() || start) +
              (animation.labels[label] / animation.duration()) * change) ||
            0
          );
        };
        self2.getTrailing = function (name) {
          var i2 = _triggers.indexOf(self2),
            a2 =
              self2.direction > 0
                ? _triggers.slice(0, i2).reverse()
                : _triggers.slice(i2 + 1);
          return (
            _isString(name)
              ? a2.filter(function (t2) {
                return t2.vars.preventOverlaps === name;
              })
              : a2
          ).filter(function (t2) {
            return self2.direction > 0 ? t2.end <= start : t2.start >= end;
          });
        };
        self2.update = function (reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) {
            return;
          }
          var scroll = _refreshingAll === true ? prevScroll : self2.scroll(),
            p2 = reset ? 0 : (scroll - start) / change,
            clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0,
            prevProgress2 = self2.progress,
            isActive,
            wasActive,
            toggleState,
            action,
            stateChanged,
            toggled,
            isAtMax,
            isTakingAction;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap2) {
              snap22 = snap1;
              snap1 =
                animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          if (
            anticipatePin &&
            pin &&
            !_refreshing &&
            !_startup &&
            _lastScrollTime
          ) {
            if (
              !clipped &&
              start <
              scroll +
              ((scroll - scroll2) / (_getTime() - _time2)) * anticipatePin
            ) {
              clipped = 1e-4;
            } else if (
              clipped === 1 &&
              end >
              scroll +
              ((scroll - scroll2) / (_getTime() - _time2)) * anticipatePin
            ) {
              clipped = 0.9999;
            }
          }
          if (clipped !== prevProgress2 && self2.enabled) {
            isActive = self2.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress2 && prevProgress2 < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress2;
            self2.direction = clipped > prevProgress2 ? 1 : -1;
            self2.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState =
                clipped && !prevProgress2
                  ? 0
                  : clipped === 1
                    ? 1
                    : prevProgress2 === 1
                      ? 2
                      : 3;
              if (isToggle) {
                action =
                  (!toggled &&
                    toggleActions[toggleState + 1] !== "none" &&
                    toggleActions[toggleState + 1]) ||
                  toggleActions[toggleState];
                isTakingAction =
                  animation &&
                  (action === "complete" ||
                    action === "reset" ||
                    action in animation);
              }
            }
            preventOverlaps &&
              (toggled || isTakingAction) &&
              (isTakingAction || scrub || !animation) &&
              (_isFunction(preventOverlaps)
                ? preventOverlaps(self2)
                : self2.getTrailing(preventOverlaps).forEach(function (t2) {
                  return t2.endAnimation();
                }));
            if (!isToggle) {
              if (scrubTween && !_refreshing && !_startup) {
                scrubTween._dp._time - scrubTween._start !== scrubTween._time &&
                  scrubTween.render(scrubTween._dp._time - scrubTween._start);
                if (scrubTween.resetTo) {
                  scrubTween.resetTo(
                    "totalProgress",
                    clipped,
                    animation._tTime / animation._tDur
                  );
                } else {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                }
              } else if (animation) {
                animation.totalProgress(
                  clipped,
                  !!(_refreshing && (lastRefresh || reset))
                );
              }
            }
            if (pin) {
              reset &&
                pinSpacing &&
                (spacer.style[pinSpacing + direction.os2] = spacingStart);
              if (!useFixedPosition) {
                pinSetter(_round(pinStart + pinChange * clipped));
              } else if (stateChanged) {
                isAtMax =
                  !reset &&
                  clipped > prevProgress2 &&
                  end + 1 > scroll &&
                  scroll + 1 >= _maxScroll(scroller, direction);
                if (pinReparent) {
                  if (!reset && (isActive || isAtMax)) {
                    var bounds = _getBounds(pin, true),
                      _offset = scroll - start;
                    _reparent(
                      pin,
                      _body,
                      bounds.top +
                      (direction === _vertical ? _offset : 0) +
                      _px,
                      bounds.left +
                      (direction === _vertical ? 0 : _offset) +
                      _px
                    );
                  } else {
                    _reparent(pin, spacer);
                  }
                }
                _setState(isActive || isAtMax ? pinActiveState : pinState);
                (pinMoves && clipped < 1 && isActive) ||
                  pinSetter(
                    pinStart + (clipped === 1 && !isAtMax ? pinChange : 0)
                  );
              }
            }
            snap2 &&
              !tweenTo.tween &&
              !_refreshing &&
              !_startup &&
              snapDelayedCall.restart(true);
            toggleClass &&
              (toggled ||
                (once && clipped && (clipped < 1 || !_limitCallbacks))) &&
              _toArray(toggleClass.targets).forEach(function (el) {
                return el.classList[isActive || once ? "add" : "remove"](
                  toggleClass.className
                );
              });
            onUpdate && !isToggle && !reset && onUpdate(self2);
            if (stateChanged && !_refreshing) {
              if (isToggle) {
                if (isTakingAction) {
                  if (action === "complete") {
                    animation.pause().totalProgress(1);
                  } else if (action === "reset") {
                    animation.restart(true).pause();
                  } else if (action === "restart") {
                    animation.restart(true);
                  } else {
                    animation[action]();
                  }
                }
                onUpdate && onUpdate(self2);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && _callback(self2, onToggle);
                callbacks[toggleState] &&
                  _callback(self2, callbacks[toggleState]);
                once &&
                  (clipped === 1
                    ? self2.kill(false, 1)
                    : (callbacks[toggleState] = 0));
                if (!toggled) {
                  toggleState = clipped === 1 ? 1 : 3;
                  callbacks[toggleState] &&
                    _callback(self2, callbacks[toggleState]);
                }
              }
              if (
                fastScrollEnd &&
                !isActive &&
                Math.abs(self2.getVelocity()) >
                (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)
              ) {
                _endAnimation(self2.callbackAnimation);
                scrubTween
                  ? scrubTween.progress(1)
                  : _endAnimation(
                    animation,
                    action === "reverse" ? 1 : !clipped,
                    1
                  );
              }
            } else if (isToggle && onUpdate && !_refreshing) {
              onUpdate(self2);
            }
          }
          if (markerEndSetter) {
            var n2 = containerAnimation
              ? (scroll / containerAnimation.duration()) *
              (containerAnimation._caScrollDist || 0)
              : scroll;
            markerStartSetter(n2 + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n2);
          }
          caMarkerSetter &&
            caMarkerSetter(
              (-scroll / containerAnimation.duration()) *
              (containerAnimation._caScrollDist || 0)
            );
        };
        self2.enable = function (reset, refresh) {
          if (!self2.enabled) {
            self2.enabled = true;
            _addListener(scroller, "resize", _onResize);
            isViewport || _addListener(scroller, "scroll", _onScroll);
            onRefreshInit &&
              _addListener(ScrollTrigger2, "refreshInit", onRefreshInit);
            if (reset !== false) {
              self2.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            refresh !== false && self2.refresh();
          }
        };
        self2.getTween = function (snap3) {
          return snap3 && tweenTo ? tweenTo.tween : scrubTween;
        };
        self2.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
          if (containerAnimation) {
            var st2 = containerAnimation.scrollTrigger,
              duration = containerAnimation.duration(),
              _change = st2.end - st2.start;
            newStart = st2.start + (_change * newStart) / duration;
            newEnd = st2.start + (_change * newEnd) / duration;
          }
          self2.refresh(
            false,
            false,
            {
              start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
              end: _keepClamp(newEnd, keepClamp && !!self2._endClamp),
            },
            pinOffset
          );
          self2.update();
        };
        self2.adjustPinSpacing = function (amount) {
          if (spacerState && amount) {
            var i2 = spacerState.indexOf(direction.d) + 1;
            spacerState[i2] = parseFloat(spacerState[i2]) + amount + _px;
            spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
            _setState(spacerState);
          }
        };
        self2.disable = function (reset, allowAnimation) {
          if (self2.enabled) {
            reset !== false && self2.revert(true, true);
            self2.enabled = self2.isActive = false;
            allowAnimation || (scrubTween && scrubTween.pause());
            prevScroll = 0;
            pinCache && (pinCache.uncache = 1);
            onRefreshInit &&
              _removeListener(ScrollTrigger2, "refreshInit", onRefreshInit);
            if (snapDelayedCall) {
              snapDelayedCall.pause();
              tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
            }
            if (!isViewport) {
              var i2 = _triggers.length;
              while (i2--) {
                if (
                  _triggers[i2].scroller === scroller &&
                  _triggers[i2] !== self2
                ) {
                  return;
                }
              }
              _removeListener(scroller, "resize", _onResize);
              isViewport || _removeListener(scroller, "scroll", _onScroll);
            }
          }
        };
        self2.kill = function (revert, allowAnimation) {
          self2.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id && delete _ids[id];
          var i2 = _triggers.indexOf(self2);
          i2 >= 0 && _triggers.splice(i2, 1);
          i2 === _i && _direction > 0 && _i--;
          i2 = 0;
          _triggers.forEach(function (t2) {
            return t2.scroller === self2.scroller && (i2 = 1);
          });
          i2 || _refreshingAll || (self2.scroll.rec = 0);
          if (animation) {
            animation.scrollTrigger = null;
            revert &&
              animation.revert({
                kill: false,
              });
            allowAnimation || animation.kill();
          }
          markerStart &&
            [
              markerStart,
              markerEnd,
              markerStartTrigger,
              markerEndTrigger,
            ].forEach(function (m2) {
              return m2.parentNode && m2.parentNode.removeChild(m2);
            });
          _primary === self2 && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i2 = 0;
            _triggers.forEach(function (t2) {
              return t2.pin === pin && i2++;
            });
            i2 || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self2);
        };
        _triggers.push(self2);
        self2.enable(false, false);
        customRevertReturn && customRevertReturn(self2);
        if (animation && animation.add && !change) {
          var updateFunc = self2.update;
          self2.update = function () {
            self2.update = updateFunc;
            start || end || self2.refresh();
          };
          gsap.delayedCall(0.01, self2.update);
          change = 0.01;
          start = end = 0;
        } else {
          self2.refresh();
        }
        pin && _queueRefreshAll();
      };
      ScrollTrigger2.register = function register(core) {
        if (!_coreInitted) {
          gsap = core || _getGSAP();
          _windowExists() && window.document && ScrollTrigger2.enable();
          _coreInitted = _enabled;
        }
        return _coreInitted;
      };
      ScrollTrigger2.defaults = function defaults2(config) {
        if (config) {
          for (var p2 in config) {
            _defaults[p2] = config[p2];
          }
        }
        return _defaults;
      };
      ScrollTrigger2.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function (trigger) {
          return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener(_win, "wheel", _onScroll);
        _removeListener(_doc, "scroll", _onScroll);
        clearInterval(_syncInterval);
        _removeListener(_doc, "touchcancel", _passThrough);
        _removeListener(_body, "touchstart", _passThrough);
        _multiListener(
          _removeListener,
          _doc,
          "pointerdown,touchstart,mousedown",
          _pointerDownHandler
        );
        _multiListener(
          _removeListener,
          _doc,
          "pointerup,touchend,mouseup",
          _pointerUpHandler
        );
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener);
        for (var i2 = 0; i2 < _scrollers.length; i2 += 3) {
          _wheelListener(_removeListener, _scrollers[i2], _scrollers[i2 + 1]);
          _wheelListener(_removeListener, _scrollers[i2], _scrollers[i2 + 2]);
        }
      };
      ScrollTrigger2.enable = function enable() {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        if (gsap) {
          _toArray = gsap.utils.toArray;
          _clamp = gsap.utils.clamp;
          _context = gsap.core.context || _passThrough;
          _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
          _scrollRestoration = _win.history.scrollRestoration || "auto";
          _lastScroll = _win.pageYOffset;
          gsap.core.globals("ScrollTrigger", ScrollTrigger2);
          if (_body) {
            _enabled = 1;
            _div100vh = document.createElement("div");
            _div100vh.style.height = "100vh";
            _div100vh.style.position = "absolute";
            _refresh100vh();
            _rafBugFix();
            Observer.register(gsap);
            ScrollTrigger2.isTouch = Observer.isTouch;
            _fixIOSBug =
              Observer.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
            _ignoreMobileResize = Observer.isTouch === 1;
            _addListener(_win, "wheel", _onScroll);
            _root = [_win, _doc, _docEl, _body];
            if (gsap.matchMedia) {
              ScrollTrigger2.matchMedia = function (vars) {
                var mm = gsap.matchMedia(),
                  p2;
                for (p2 in vars) {
                  mm.add(p2, vars[p2]);
                }
                return mm;
              };
              gsap.addEventListener("matchMediaInit", function () {
                return _revertAll();
              });
              gsap.addEventListener("matchMediaRevert", function () {
                return _revertRecorded();
              });
              gsap.addEventListener("matchMedia", function () {
                _refreshAll(0, 1);
                _dispatch("matchMedia");
              });
              gsap.matchMedia("(orientation: portrait)", function () {
                _setBaseDimensions();
                return _setBaseDimensions;
              });
            } else {
              console.warn("Requires GSAP 3.11.0 or later");
            }
            _setBaseDimensions();
            _addListener(_doc, "scroll", _onScroll);
            var bodyStyle = _body.style,
              border = bodyStyle.borderTopStyle,
              AnimationProto = gsap.core.Animation.prototype,
              bounds,
              i2;
            AnimationProto.revert ||
              Object.defineProperty(AnimationProto, "revert", {
                value: function value() {
                  return this.time(-0.01, true);
                },
              });
            bodyStyle.borderTopStyle = "solid";
            bounds = _getBounds(_body);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border
              ? (bodyStyle.borderTopStyle = border)
              : bodyStyle.removeProperty("border-top-style");
            _syncInterval = setInterval(_sync, 250);
            gsap.delayedCall(0.5, function () {
              return (_startup = 0);
            });
            _addListener(_doc, "touchcancel", _passThrough);
            _addListener(_body, "touchstart", _passThrough);
            _multiListener(
              _addListener,
              _doc,
              "pointerdown,touchstart,mousedown",
              _pointerDownHandler
            );
            _multiListener(
              _addListener,
              _doc,
              "pointerup,touchend,mouseup",
              _pointerUpHandler
            );
            _transformProp = gsap.utils.checkPrefix("transform");
            _stateProps.push(_transformProp);
            _coreInitted = _getTime();
            _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [
              _doc,
              "visibilitychange",
              function () {
                var w2 = _win.innerWidth,
                  h2 = _win.innerHeight;
                if (_doc.hidden) {
                  _prevWidth = w2;
                  _prevHeight = h2;
                } else if (_prevWidth !== w2 || _prevHeight !== h2) {
                  _onResize();
                }
              },
              _doc,
              "DOMContentLoaded",
              _refreshAll,
              _win,
              "load",
              _refreshAll,
              _win,
              "resize",
              _onResize,
            ];
            _iterateAutoRefresh(_addListener);
            _triggers.forEach(function (trigger) {
              return trigger.enable(0, 1);
            });
            for (i2 = 0; i2 < _scrollers.length; i2 += 3) {
              _wheelListener(
                _removeListener,
                _scrollers[i2],
                _scrollers[i2 + 1]
              );
              _wheelListener(
                _removeListener,
                _scrollers[i2],
                _scrollers[i2 + 2]
              );
            }
          }
        }
      };
      ScrollTrigger2.config = function config(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        (ms && clearInterval(_syncInterval)) ||
          ((_syncInterval = ms) && setInterval(_sync, ms));
        "ignoreMobileResize" in vars &&
          (_ignoreMobileResize =
            ScrollTrigger2.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
          _iterateAutoRefresh(_removeListener) ||
            _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
          _ignoreResize =
            (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
      };
      ScrollTrigger2.scrollerProxy = function scrollerProxy(target, vars) {
        var t2 = _getTarget(target),
          i2 = _scrollers.indexOf(t2),
          isViewport = _isViewport(t2);
        if (~i2) {
          _scrollers.splice(i2, isViewport ? 6 : 2);
        }
        if (vars) {
          isViewport
            ? _proxies.unshift(_win, vars, _body, vars, _docEl, vars)
            : _proxies.unshift(t2, vars);
        }
      };
      ScrollTrigger2.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function (t2) {
          return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
        });
      };
      ScrollTrigger2.isInViewport = function isInViewport(
        element,
        ratio,
        horizontal
      ) {
        var bounds = (
          _isString(element) ? _getTarget(element) : element
        ).getBoundingClientRect(),
          offset2 = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal
          ? bounds.right - offset2 > 0 &&
          bounds.left + offset2 < _win.innerWidth
          : bounds.bottom - offset2 > 0 &&
          bounds.top + offset2 < _win.innerHeight;
      };
      ScrollTrigger2.positionInViewport = function positionInViewport(
        element,
        referencePoint,
        horizontal
      ) {
        _isString(element) && (element = _getTarget(element));
        var bounds = element.getBoundingClientRect(),
          size = bounds[horizontal ? _width : _height],
          offset2 =
            referencePoint == null
              ? size / 2
              : referencePoint in _keywords
                ? _keywords[referencePoint] * size
                : ~referencePoint.indexOf("%")
                  ? (parseFloat(referencePoint) * size) / 100
                  : parseFloat(referencePoint) || 0;
        return horizontal
          ? (bounds.left + offset2) / _win.innerWidth
          : (bounds.top + offset2) / _win.innerHeight;
      };
      ScrollTrigger2.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function (t2) {
          return t2.vars.id !== "ScrollSmoother" && t2.kill();
        });
        if (allowListeners !== true) {
          var listeners = _listeners.killAll || [];
          _listeners = {};
          listeners.forEach(function (f2) {
            return f2();
          });
        }
      };
      return ScrollTrigger2;
    })();
    ScrollTrigger.version = "3.12.5";
    ScrollTrigger.saveStyles = function (targets) {
      return targets
        ? _toArray(targets).forEach(function (target) {
          if (target && target.style) {
            var i2 = _savedStyles.indexOf(target);
            i2 >= 0 && _savedStyles.splice(i2, 5);
            _savedStyles.push(
              target,
              target.style.cssText,
              target.getBBox && target.getAttribute("transform"),
              gsap.core.getCache(target),
              _context()
            );
          }
        })
        : _savedStyles;
    };
    ScrollTrigger.revert = function (soft, media) {
      return _revertAll(!soft, media);
    };
    ScrollTrigger.create = function (vars, animation) {
      return new ScrollTrigger(vars, animation);
    };
    ScrollTrigger.refresh = function (safe) {
      return safe
        ? _onResize()
        : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
    };
    ScrollTrigger.update = function (force) {
      return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
    };
    ScrollTrigger.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger.maxScroll = function (element, horizontal) {
      return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger.getScrollFunc = function (element, horizontal) {
      return _getScrollFunc(
        _getTarget(element),
        horizontal ? _horizontal : _vertical
      );
    };
    ScrollTrigger.getById = function (id) {
      return _ids[id];
    };
    ScrollTrigger.getAll = function () {
      return _triggers.filter(function (t2) {
        return t2.vars.id !== "ScrollSmoother";
      });
    };
    ScrollTrigger.isScrolling = function () {
      return !!_lastScrollTime;
    };
    ScrollTrigger.snapDirectional = _snapDirectional;
    ScrollTrigger.addEventListener = function (type, callback) {
      var a2 = _listeners[type] || (_listeners[type] = []);
      ~a2.indexOf(callback) || a2.push(callback);
    };
    ScrollTrigger.removeEventListener = function (type, callback) {
      var a2 = _listeners[type],
        i2 = a2 && a2.indexOf(callback);
      i2 >= 0 && a2.splice(i2, 1);
    };
    ScrollTrigger.batch = function (targets, vars) {
      var result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback2(type, callback) {
          var elements = [],
            triggers = [],
            delay = gsap
              .delayedCall(interval, function () {
                callback(elements, triggers);
                elements = [];
                triggers = [];
              })
              .pause();
          return function (self2) {
            elements.length || delay.restart(true);
            elements.push(self2.trigger);
            triggers.push(self2);
            batchMax <= elements.length && delay.progress(1);
          };
        },
        p2;
      for (p2 in vars) {
        varsCopy[p2] =
          p2.substr(0, 2) === "on" &&
            _isFunction(vars[p2]) &&
            p2 !== "onRefreshInit"
            ? proxyCallback(p2, vars[p2])
            : vars[p2];
      }
      if (_isFunction(batchMax)) {
        batchMax = batchMax();
        _addListener(ScrollTrigger, "refresh", function () {
          return (batchMax = vars.batchMax());
        });
      }
      _toArray(targets).forEach(function (target) {
        var config = {};
        for (p2 in varsCopy) {
          config[p2] = varsCopy[p2];
        }
        config.trigger = target;
        result.push(ScrollTrigger.create(config));
      });
      return result;
    };
    var _clampScrollAndGetDurationMultiplier =
      function _clampScrollAndGetDurationMultiplier2(
        scrollFunc,
        current,
        end,
        max2
      ) {
        current > max2 ? scrollFunc(max2) : current < 0 && scrollFunc(0);
        return end > max2
          ? (max2 - current) / (end - current)
          : end < 0
            ? current / (current - end)
            : 1;
      },
      _allowNativePanning = function _allowNativePanning2(target, direction) {
        if (direction === true) {
          target.style.removeProperty("touch-action");
        } else {
          target.style.touchAction =
            direction === true
              ? "auto"
              : direction
                ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "")
                : "none";
        }
        target === _docEl && _allowNativePanning2(_body, direction);
      },
      _overflow = {
        auto: 1,
        scroll: 1,
      },
      _nestedScroll = function _nestedScroll2(_ref5) {
        var event = _ref5.event,
          target = _ref5.target,
          axis = _ref5.axis;
        var node = (event.changedTouches ? event.changedTouches[0] : event)
          .target,
          cache = node._gsap || gsap.core.getCache(node),
          time = _getTime(),
          cs;
        if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
          while (
            node &&
            node !== _body &&
            ((node.scrollHeight <= node.clientHeight &&
              node.scrollWidth <= node.clientWidth) ||
              !(
                _overflow[(cs = _getComputedStyle(node)).overflowY] ||
                _overflow[cs.overflowX]
              ))
          ) {
            node = node.parentNode;
          }
          cache._isScroll =
            node &&
            node !== target &&
            !_isViewport(node) &&
            (_overflow[(cs = _getComputedStyle(node)).overflowY] ||
              _overflow[cs.overflowX]);
          cache._isScrollT = time;
        }
        if (cache._isScroll || axis === "x") {
          event.stopPropagation();
          event._gsapAllow = true;
        }
      },
      _inputObserver = function _inputObserver2(target, type, inputs, nested) {
        return Observer.create({
          target,
          capture: true,
          debounce: false,
          lockAxis: true,
          type,
          onWheel: (nested = nested && _nestedScroll),
          onPress: nested,
          onDrag: nested,
          onScroll: nested,
          onEnable: function onEnable() {
            return (
              inputs &&
              _addListener(
                _doc,
                Observer.eventTypes[0],
                _captureInputs,
                false,
                true
              )
            );
          },
          onDisable: function onDisable() {
            return _removeListener(
              _doc,
              Observer.eventTypes[0],
              _captureInputs,
              true
            );
          },
        });
      },
      _inputExp = /(input|label|select|textarea)/i,
      _inputIsFocused,
      _captureInputs = function _captureInputs2(e2) {
        var isInput = _inputExp.test(e2.target.tagName);
        if (isInput || _inputIsFocused) {
          e2._gsapAllow = true;
          _inputIsFocused = isInput;
        }
      },
      _getScrollNormalizer = function _getScrollNormalizer2(vars) {
        _isObject(vars) || (vars = {});
        vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
        vars.type || (vars.type = "wheel,touch");
        vars.debounce = !!vars.debounce;
        vars.id = vars.id || "normalizer";
        var _vars2 = vars,
          normalizeScrollX = _vars2.normalizeScrollX,
          momentum = _vars2.momentum,
          allowNestedScroll = _vars2.allowNestedScroll,
          onRelease = _vars2.onRelease,
          self2,
          maxY,
          target = _getTarget(vars.target) || _docEl,
          smoother = gsap.core.globals().ScrollSmoother,
          smootherInstance = smoother && smoother.get(),
          content =
            _fixIOSBug &&
            ((vars.content && _getTarget(vars.content)) ||
              (smootherInstance &&
                vars.content !== false &&
                !smootherInstance.smooth() &&
                smootherInstance.content())),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scale = 1,
          initialScale =
            (Observer.isTouch && _win.visualViewport
              ? _win.visualViewport.scale * _win.visualViewport.width
              : _win.outerWidth) / _win.innerWidth,
          wheelRefresh = 0,
          resolveMomentumDuration = _isFunction(momentum)
            ? function () {
              return momentum(self2);
            }
            : function () {
              return momentum || 2.8;
            },
          lastRefreshID,
          skipTouchMove,
          inputObserver = _inputObserver(
            target,
            vars.type,
            true,
            allowNestedScroll
          ),
          resumeTouchMove = function resumeTouchMove2() {
            return (skipTouchMove = false);
          },
          scrollClampX = _passThrough,
          scrollClampY = _passThrough,
          updateClamps = function updateClamps2() {
            maxY = _maxScroll(target, _vertical);
            scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
            normalizeScrollX &&
              (scrollClampX = _clamp(0, _maxScroll(target, _horizontal)));
            lastRefreshID = _refreshID;
          },
          removeContentOffset = function removeContentOffset2() {
            content._gsap.y =
              _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
            content.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(content._gsap.y) +
              ", 0, 1)";
            scrollFuncY.offset = scrollFuncY.cacheID = 0;
          },
          ignoreDrag = function ignoreDrag2() {
            if (skipTouchMove) {
              requestAnimationFrame(resumeTouchMove);
              var offset2 = _round(self2.deltaY / 2),
                scroll = scrollClampY(scrollFuncY.v - offset2);
              if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y2 = _round(
                  (parseFloat(content && content._gsap.y) || 0) -
                  scrollFuncY.offset
                );
                content.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  y2 +
                  ", 0, 1)";
                content._gsap.y = y2 + "px";
                scrollFuncY.cacheID = _scrollers.cache;
                _updateAll();
              }
              return true;
            }
            scrollFuncY.offset && removeContentOffset();
            skipTouchMove = true;
          },
          tween,
          startScrollX,
          startScrollY,
          onStopDelayedCall,
          onResize = function onResize2() {
            updateClamps();
            if (tween.isActive() && tween.vars.scrollY > maxY) {
              scrollFuncY() > maxY
                ? tween.progress(1) && scrollFuncY(maxY)
                : tween.resetTo("scrollY", maxY);
            }
          };
        content &&
          gsap.set(content, {
            y: "+=0",
          });
        vars.ignoreCheck = function (e2) {
          return (
            (_fixIOSBug && e2.type === "touchmove" && ignoreDrag()) ||
            (scale > 1.05 && e2.type !== "touchstart") ||
            self2.isGesturing ||
            (e2.touches && e2.touches.length > 1)
          );
        };
        vars.onPress = function () {
          skipTouchMove = false;
          var prevScale = scale;
          scale = _round(
            ((_win.visualViewport && _win.visualViewport.scale) || 1) /
            initialScale
          );
          tween.pause();
          prevScale !== scale &&
            _allowNativePanning(
              target,
              scale > 1.01 ? true : normalizeScrollX ? false : "x"
            );
          startScrollX = scrollFuncX();
          startScrollY = scrollFuncY();
          updateClamps();
          lastRefreshID = _refreshID;
        };
        vars.onRelease = vars.onGestureStart = function (self3, wasDragging) {
          scrollFuncY.offset && removeContentOffset();
          if (!wasDragging) {
            onStopDelayedCall.restart(true);
          } else {
            _scrollers.cache++;
            var dur = resolveMomentumDuration(),
              currentScroll,
              endScroll;
            if (normalizeScrollX) {
              currentScroll = scrollFuncX();
              endScroll =
                currentScroll + (dur * 0.05 * -self3.velocityX) / 0.227;
              dur *= _clampScrollAndGetDurationMultiplier(
                scrollFuncX,
                currentScroll,
                endScroll,
                _maxScroll(target, _horizontal)
              );
              tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + (dur * 0.05 * -self3.velocityY) / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(
              scrollFuncY,
              currentScroll,
              endScroll,
              _maxScroll(target, _vertical)
            );
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (
              (_fixIOSBug && tween.vars.scrollY >= maxY) ||
              currentScroll >= maxY - 1
            ) {
              gsap.to(
                {},
                {
                  onUpdate: onResize,
                  duration: dur,
                }
              );
            }
          }
          onRelease && onRelease(self3);
        };
        vars.onWheel = function () {
          tween._ts && tween.pause();
          if (_getTime() - wheelRefresh > 1e3) {
            lastRefreshID = 0;
            wheelRefresh = _getTime();
          }
        };
        vars.onChange = function (self3, dx, dy, xArray, yArray) {
          _refreshID !== lastRefreshID && updateClamps();
          dx &&
            normalizeScrollX &&
            scrollFuncX(
              scrollClampX(
                xArray[2] === dx
                  ? startScrollX + (self3.startX - self3.x)
                  : scrollFuncX() + dx - xArray[1]
              )
            );
          if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy,
              y2 = isTouch
                ? startScrollY + self3.startY - self3.y
                : scrollFuncY() + dy - yArray[1],
              yClamped = scrollClampY(y2);
            isTouch && y2 !== yClamped && (startScrollY += yClamped - y2);
            scrollFuncY(yClamped);
          }
          (dy || dx) && _updateAll();
        };
        vars.onEnable = function () {
          _allowNativePanning(target, normalizeScrollX ? false : "x");
          ScrollTrigger.addEventListener("refresh", onResize);
          _addListener(_win, "resize", onResize);
          if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
          }
          inputObserver.enable();
        };
        vars.onDisable = function () {
          _allowNativePanning(target, true);
          _removeListener(_win, "resize", onResize);
          ScrollTrigger.removeEventListener("refresh", onResize);
          inputObserver.kill();
        };
        vars.lockAxis = vars.lockAxis !== false;
        self2 = new Observer(vars);
        self2.iOS = _fixIOSBug;
        _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
        _fixIOSBug && gsap.ticker.add(_passThrough);
        onStopDelayedCall = self2._dc;
        tween = gsap.to(self2, {
          ease: "power4",
          paused: true,
          inherit: false,
          scrollX: normalizeScrollX ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: _interruptionTracker(
              scrollFuncY,
              scrollFuncY(),
              function () {
                return tween.pause();
              }
            ),
          },
          onUpdate: _updateAll,
          onComplete: onStopDelayedCall.vars.onComplete,
        });
        return self2;
      };
    ScrollTrigger.sort = function (func) {
      return _triggers.sort(
        func ||
        function (a2, b2) {
          return (
            (a2.vars.refreshPriority || 0) * -1e6 +
            a2.start -
            (b2.start + (b2.vars.refreshPriority || 0) * -1e6)
          );
        }
      );
    };
    ScrollTrigger.observe = function (vars) {
      return new Observer(vars);
    };
    ScrollTrigger.normalizeScroll = function (vars) {
      if (typeof vars === "undefined") {
        return _normalizer;
      }
      if (vars === true && _normalizer) {
        return _normalizer.enable();
      }
      if (vars === false) {
        _normalizer && _normalizer.kill();
        _normalizer = vars;
        return;
      }
      var normalizer =
        vars instanceof Observer ? vars : _getScrollNormalizer(vars);
      _normalizer &&
        _normalizer.target === normalizer.target &&
        _normalizer.kill();
      _isViewport(normalizer.target) && (_normalizer = normalizer);
      return normalizer;
    };
    ScrollTrigger.core = {
      // smaller file size way to leverage in ScrollSmoother and Observer
      _getVelocityProp,
      _inputObserver,
      _scrollers,
      _proxies,
      bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
          _lastScrollTime || _dispatch("scrollStart");
          _lastScrollTime = _getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
          return _refreshing;
        },
      },
    };
    _getGSAP() && gsap.registerPlugin(ScrollTrigger);
    var gsapWithCSS$1 = gsap$3.registerPlugin(CSSPlugin) || gsap$3;
    gsapWithCSS$1.core.Tween;
    gsapWithCSS$1.registerPlugin(
      ScrollTrigger,
      Power3,
      Power0,
      ScrollToPlugin,
      Back
    );
    function Parallax() {
      let parallaxes = document.querySelectorAll(
        "[data-parallax]:not(.js-running)"
      );
      parallaxes.forEach((element) => {
        element.classList.add("js-running");
        let yFrom = element.dataset.translateYFrom
          ? element.dataset.translateYFrom
          : "0";
        let yTo = element.dataset.translateY ? element.dataset.translateY : "0";
        let xFrom = element.dataset.translateXFrom
          ? element.dataset.translateXFrom
          : "0";
        let xTo = element.dataset.translateX ? element.dataset.translateX : "0";
        let rotateFrom = element.dataset.rotateFrom
          ? element.dataset.rotateFrom
          : "0deg";
        let rotateTo = element.dataset.rotateTo
          ? element.dataset.rotateTo
          : "0deg";
        let scaleFrom = element.dataset.scaleFrom
          ? element.dataset.scaleFrom
          : "1";
        let scaleTo = element.dataset.scale ? element.dataset.scale : "1";
        let duration = element.dataset.duration ? element.dataset.duration : 1;
        let repeat = element.dataset.repeat ? element.dataset.repeat : 0;
        let yoyo = element.dataset.yoyo ? element.dataset.yoyo : false;
        let trigger = element.dataset.trigger
          ? document.querySelector(element.dataset.trigger)
          : element;
        let endTrigger = element.dataset.endTrigger
          ? document.querySelector(element.dataset.endTrigger)
          : trigger;
        let ease = element.dataset.ease
          ? element.dataset.ease
          : "Power0.easeInOut";
        let delay = element.dataset.delay ? element.dataset.delay : 0;
        let repeatDelay = element.dataset.repeatDelay
          ? element.dataset.repeatDelay
          : 0;
        let opacity = element.dataset.opacity ? element.dataset.opacity : 1;
        let opacityFrom = element.dataset.opacityFrom
          ? element.dataset.opacityFrom
          : 1;
        let start = element.dataset.start
          ? element.dataset.start
          : "top bottom";
        let end = element.dataset.end ? element.dataset.end : "bottom top";
        let markers = false;
        if (element.dataset.trigger && element.dataset.trigger == "parent")
          trigger = element.parentElement;
        if (element.dataset.parallaxTop) {
          trigger = document.querySelector(".wrapper");
          start = element.dataset.start
            ? element.dataset.start
            : window.innerHeight + " top";
          end = element.dataset.end
            ? element.dataset.end
            : window.innerHeight * 2 + " top";
          markers = true;
        }
        let scrub =
          element.dataset.repeat && element.dataset.repeat == "-1"
            ? false
            : true;
        const animation = gsapWithCSS$1.timeline({
          repeat,
          delay,
          repeatDelay,
          yoyo,
          scrollTrigger: {
            trigger,
            endTrigger,
            start,
            end,
            // pin: '.home-missao-bem-bolada .container-space',
            pinSpacing: false,
            //   pinReparent:true,
            markers,
            scrub,
            anticipatePin: true,
            invalidateOnRefresh: true,
            toggleActions: "play pause play pause",
            onUpdate: function (ev) { },
          },
        });
        animation.fromTo(
          element,
          {
            y: yFrom,
            x: xFrom,
            rotate: rotateFrom,
            opacity: opacityFrom,
            scale: scaleFrom,
            force3D: true,
          },
          {
            y: yTo,
            x: xTo,
            rotate: rotateTo,
            scale: scaleTo,
            duration,
            delay: 0,
            opacity,
            ease,
            transformOrigin: "center center",
          }
        );
      });
      let parallaxesTop = document.querySelectorAll(
        "[data-parallax-top]:not(.js-running)"
      );
      parallaxesTop.forEach((element) => {
        element.classList.add("js-running");
        let yFrom = element.dataset.translateYFrom
          ? element.dataset.translateYFrom
          : "0";
        let yTo = element.dataset.translateY ? element.dataset.translateY : "0";
        let xFrom = element.dataset.translateXFrom
          ? element.dataset.translateXFrom
          : "0";
        let xTo = element.dataset.translateX ? element.dataset.translateX : "0";
        let rotateFrom = element.dataset.rotateFrom
          ? element.dataset.rotateFrom
          : "0deg";
        let rotateTo = element.dataset.rotateTo
          ? element.dataset.rotateTo
          : "0deg";
        let scaleFrom = element.dataset.scaleFrom
          ? element.dataset.scaleFrom
          : "1";
        let scaleTo = element.dataset.scale ? element.dataset.scale : "1";
        let duration = element.dataset.duration ? element.dataset.duration : 1;
        let repeat = element.dataset.repeat ? element.dataset.repeat : 0;
        let yoyo = element.dataset.yoyo ? element.dataset.yoyo : false;
        let trigger = element.dataset.trigger
          ? document.querySelector(element.dataset.trigger)
          : document.querySelector(".wrapper");
        let endTrigger = element.dataset.endTrigger
          ? document.querySelector(element.dataset.endTrigger)
          : trigger;
        let ease = element.dataset.ease
          ? element.dataset.ease
          : "Power0.easeInOut";
        let delay = element.dataset.delay ? element.dataset.delay : 0;
        let repeatDelay = element.dataset.repeatDelay
          ? element.dataset.repeatDelay
          : 0;
        let opacity = element.dataset.opacity ? element.dataset.opacity : 1;
        let opacityFrom = element.dataset.opacityFrom
          ? element.dataset.opacityFrom
          : 1;
        let start = element.dataset.start ? element.dataset.start : "top top";
        let end = element.dataset.end
          ? element.dataset.end
          : window.innerHeight + " top";
        let markers = false;
        if (element.dataset.trigger && element.dataset.trigger == "parent")
          trigger = element.parentElement;
        let scrub =
          element.dataset.repeat && element.dataset.repeat == "-1"
            ? false
            : true;
        const animation = gsapWithCSS$1.timeline({
          repeat,
          delay,
          repeatDelay,
          yoyo,
          scrollTrigger: {
            trigger,
            endTrigger,
            start,
            end,
            // pin: '.home-missao-bem-bolada .container-space',
            pinSpacing: false,
            //   pinReparent:true,
            markers,
            scrub,
            anticipatePin: true,
            invalidateOnRefresh: true,
            toggleActions: "play pause play pause",
            onUpdate: function (ev) { },
          },
        });
        animation.fromTo(
          element,
          {
            y: yFrom,
            x: xFrom,
            rotate: rotateFrom,
            opacity: opacityFrom,
            scale: scaleFrom,
            force3D: true,
          },
          {
            y: yTo,
            x: xTo,
            rotate: rotateTo,
            scale: scaleTo,
            duration,
            delay: 0,
            opacity,
            ease,
            transformOrigin: "center center",
          }
        );
      });
    }
    var gsapWithCSS = gsap$3.registerPlugin(CSSPlugin) || gsap$3;
    gsapWithCSS.core.Tween;
    gsapWithCSS.registerPlugin(ScrollToPlugin);
    function scrollTo(headerDesktop, headerMobile) {
      let scrollToArray = Array.from(
        document.querySelectorAll(
          "[data-scrollto]:not(.js-running):not(btn-modal-open)"
        )
      );
      scrollToArray.forEach((element) => {
        element.classList.add("js-running");
        element.addEventListener("click", function (ev) {
          ev.preventDefault();
          let targetId = element.dataset.scrollto;
          let header = screen.isDesktop ? headerDesktop : headerMobile;
          if (targetId === "0") {
            gsapWithCSS.to(window, {
              scrollTo: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          } else {
            let targetElement = document.querySelector(`#${targetId}`);
            if (targetElement) {
              let offsetY = header
                ? document.querySelector(header).offsetHeight
                : 0;
              gsapWithCSS.to(window, {
                scrollTo: { y: targetElement, offsetY },
                duration: 0.8,
                ease: "power2.out",
              });
            } else {
              singlePjaxInstance.loadUrl(element.dataset.href);
              document.addEventListener(
                "pjax:complete",
                function () {
                  let newTargetElement = document.querySelector(`#${targetId}`);
                  if (newTargetElement) {
                    let offsetY = header
                      ? document.querySelector(header).offsetHeight
                      : 0;
                    gsapWithCSS.to(window, {
                      scrollTo: { y: newTargetElement, offsetY },
                      duration: 0.8,
                      ease: "power2.out",
                    });
                  }
                },
                { once: true }
              );
            }
          }
        });
      });
    }
    gsap$3.registerPlugin(ScrollToPlugin);
    var SmoothScroll$1 = { exports: {} };
    (function (module2, exports2) {
      (function () {
        var defaultOptions = {
          // Scrolling Core
          frameRate: 150,
          // [Hz]
          animationTime: 400,
          // [ms]
          stepSize: 100,
          // [px]
          // Pulse (less tweakable)
          // ratio of "tail" to "acceleration"
          pulseAlgorithm: true,
          pulseScale: 4,
          pulseNormalize: 1,
          // Acceleration
          accelerationDelta: 50,
          // 50
          accelerationMax: 3,
          // 3
          // Keyboard Settings
          keyboardSupport: true,
          // option
          arrowScroll: 50,
          // [px]
          // Other
          fixedBackground: true,
          excluded: "",
        };
        var options = defaultOptions;
        var isExcluded = false;
        var isFrame = false;
        var direction = { x: 0, y: 0 };
        var initDone = false;
        var root = document.documentElement;
        var activeElement;
        var observer2;
        var refreshSize;
        var deltaBuffer = [];
        var deltaBufferTimer;
        var isMac = /^Mac/.test(navigator.platform);
        var key = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          spacebar: 32,
          pageup: 33,
          pagedown: 34,
          end: 35,
          home: 36,
        };
        var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };
        function initTest() {
          if (options.keyboardSupport) {
            addEvent("keydown", keydown);
          }
        }
        function init() {
          if (initDone || !document.body) return;
          initDone = true;
          var body = document.body;
          var html = document.documentElement;
          var windowHeight = window.innerHeight;
          var scrollHeight = body.scrollHeight;
          root = document.compatMode.indexOf("CSS") >= 0 ? html : body;
          activeElement = body;
          initTest();
          if (top != self) {
            isFrame = true;
          } else if (
            isOldSafari &&
            scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight ||
              html.offsetHeight <= windowHeight)
          ) {
            var fullPageElem = document.createElement("div");
            fullPageElem.style.cssText =
              "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
              root.scrollHeight +
              "px";
            document.body.appendChild(fullPageElem);
            var pendingRefresh;
            refreshSize = function () {
              if (pendingRefresh) return;
              pendingRefresh = setTimeout(function () {
                fullPageElem.style.height = "0";
                fullPageElem.style.height = root.scrollHeight + "px";
                pendingRefresh = null;
              }, 500);
            };
            setTimeout(refreshSize, 10);
            addEvent("resize", refreshSize);
            var config = {
              attributes: true,
              childList: true,
              characterData: false,
              // subtree: true
            };
            observer2 = new MutationObserver2(refreshSize);
            observer2.observe(body, config);
            if (root.offsetHeight <= windowHeight) {
              var clearfix = document.createElement("div");
              clearfix.style.clear = "both";
              body.appendChild(clearfix);
            }
          }
          if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = "scroll";
            html.style.backgroundAttachment = "scroll";
          }
        }
        function cleanup() {
          observer2 && observer2.disconnect();
          removeEvent(wheelEvent, wheel);
          removeEvent("mousedown", mousedown);
          removeEvent("keydown", keydown);
          removeEvent("resize", refreshSize);
          removeEvent("load", init);
        }
        var que = [];
        var pending = false;
        var lastScroll = Date.now();
        function scrollArray(elem, left, top2) {
          directionCheck(left, top2);
          if (options.accelerationMax != 1) {
            var now2 = Date.now();
            var elapsed = now2 - lastScroll;
            if (elapsed < options.accelerationDelta) {
              var factor = (1 + 50 / elapsed) / 2;
              if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top2 *= factor;
              }
            }
            lastScroll = Date.now();
          }
          que.push({
            x: left,
            y: top2,
            lastX: left < 0 ? 0.99 : -0.99,
            lastY: top2 < 0 ? 0.99 : -0.99,
            start: Date.now(),
          });
          if (pending) {
            return;
          }
          var scrollRoot = getScrollRoot();
          var isWindowScroll = elem === scrollRoot || elem === document.body;
          if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
            elem.$scrollBehavior = elem.style.scrollBehavior;
            elem.style.scrollBehavior = "auto";
          }
          var step = function (time) {
            var now3 = Date.now();
            var scrollX = 0;
            var scrollY2 = 0;
            for (var i2 = 0; i2 < que.length; i2++) {
              var item = que[i2];
              var elapsed2 = now3 - item.start;
              var finished = elapsed2 >= options.animationTime;
              var position = finished ? 1 : elapsed2 / options.animationTime;
              if (options.pulseAlgorithm) {
                position = pulse(position);
              }
              var x2 = (item.x * position - item.lastX) >> 0;
              var y2 = (item.y * position - item.lastY) >> 0;
              scrollX += x2;
              scrollY2 += y2;
              item.lastX += x2;
              item.lastY += y2;
              if (finished) {
                que.splice(i2, 1);
                i2--;
              }
            }
            if (isWindowScroll) {
              window.scrollBy(scrollX, scrollY2);
            } else {
              if (scrollX) elem.scrollLeft += scrollX;
              if (scrollY2) elem.scrollTop += scrollY2;
            }
            if (!left && !top2) {
              que = [];
            }
            if (que.length) {
              requestFrame(step, elem, 1e3 / options.frameRate + 1);
            } else {
              pending = false;
              if (elem.$scrollBehavior != null) {
                elem.style.scrollBehavior = elem.$scrollBehavior;
                elem.$scrollBehavior = null;
              }
            }
          };
          requestFrame(step, elem, 0);
          pending = true;
        }
        function wheel(event) {
          if (!initDone) {
            init();
          }
          var target = event.target;
          if (event.defaultPrevented || event.ctrlKey) {
            return true;
          }
          if (
            isNodeName(activeElement, "embed") ||
            (isNodeName(target, "embed") && /\.pdf/i.test(target.src)) ||
            isNodeName(activeElement, "object") ||
            target.shadowRoot
          ) {
            return true;
          }
          var deltaX = -event.wheelDeltaX || event.deltaX || 0;
          var deltaY = -event.wheelDeltaY || event.deltaY || 0;
          if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
              deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
              deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
          }
          if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
          }
          if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
          }
          var overflowing = overflowingAncestor(target);
          if (!overflowing) {
            if (isFrame && isChrome) {
              Object.defineProperty(event, "target", {
                value: window.frameElement,
              });
              return parent.wheel(event);
            }
            return true;
          }
          if (isTouchpad(deltaY)) {
            return true;
          }
          if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
          }
          if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
          }
          scrollArray(overflowing, deltaX, deltaY);
          event.preventDefault();
          scheduleClearCache();
        }
        function keydown(event) {
          var target = event.target;
          var modifier =
            event.ctrlKey ||
            event.altKey ||
            event.metaKey ||
            (event.shiftKey && event.keyCode !== key.spacebar);
          if (!document.body.contains(activeElement)) {
            activeElement = document.activeElement;
          }
          var inputNodeNames = /^(textarea|select|embed|object)$/i;
          var buttonTypes =
            /^(button|submit|radio|checkbox|file|color|image)$/i;
          if (
            event.defaultPrevented ||
            inputNodeNames.test(target.nodeName) ||
            (isNodeName(target, "input") && !buttonTypes.test(target.type)) ||
            isNodeName(activeElement, "video") ||
            isInsideYoutubeVideo(event) ||
            target.isContentEditable ||
            modifier
          ) {
            return true;
          }
          if (
            (isNodeName(target, "button") ||
              (isNodeName(target, "input") && buttonTypes.test(target.type))) &&
            event.keyCode === key.spacebar
          ) {
            return true;
          }
          if (
            isNodeName(target, "input") &&
            target.type == "radio" &&
            arrowKeys[event.keyCode]
          ) {
            return true;
          }
          var shift,
            x2 = 0,
            y2 = 0;
          var overflowing = overflowingAncestor(activeElement);
          if (!overflowing) {
            return isFrame && isChrome ? parent.keydown(event) : true;
          }
          var clientHeight = overflowing.clientHeight;
          if (overflowing == document.body) {
            clientHeight = window.innerHeight;
          }
          switch (event.keyCode) {
            case key.up:
              y2 = -options.arrowScroll;
              break;
            case key.down:
              y2 = options.arrowScroll;
              break;
            case key.spacebar:
              shift = event.shiftKey ? 1 : -1;
              y2 = -shift * clientHeight * 0.9;
              break;
            case key.pageup:
              y2 = -clientHeight * 0.9;
              break;
            case key.pagedown:
              y2 = clientHeight * 0.9;
              break;
            case key.home:
              if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
              y2 = -overflowing.scrollTop;
              break;
            case key.end:
              var scroll = overflowing.scrollHeight - overflowing.scrollTop;
              var scrollRemaining = scroll - clientHeight;
              y2 = scrollRemaining > 0 ? scrollRemaining + 10 : 0;
              break;
            case key.left:
              x2 = -options.arrowScroll;
              break;
            case key.right:
              x2 = options.arrowScroll;
              break;
            default:
              return true;
          }
          scrollArray(overflowing, x2, y2);
          event.preventDefault();
          scheduleClearCache();
        }
        function mousedown(event) {
          activeElement = event.target;
        }
        var uniqueID = (function () {
          var i2 = 0;
          return function (el) {
            return el.uniqueID || (el.uniqueID = i2++);
          };
        })();
        var cacheX = {};
        var cacheY = {};
        var clearCacheTimer;
        var smoothBehaviorForElement = {};
        function scheduleClearCache() {
          clearTimeout(clearCacheTimer);
          clearCacheTimer = setInterval(function () {
            cacheX = cacheY = smoothBehaviorForElement = {};
          }, 1 * 1e3);
        }
        function setCache(elems, overflowing, x2) {
          var cache = x2 ? cacheX : cacheY;
          for (var i2 = elems.length; i2--;)
            cache[uniqueID(elems[i2])] = overflowing;
          return overflowing;
        }
        function getCache(el, x2) {
          return (x2 ? cacheX : cacheY)[uniqueID(el)];
        }
        function overflowingAncestor(el) {
          var elems = [];
          var body = document.body;
          var rootScrollHeight = root.scrollHeight;
          do {
            var cached = getCache(el, false);
            if (cached) {
              return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
              var topOverflowsNotHidden =
                overflowNotHidden(root) && overflowNotHidden(body);
              var isOverflowCSS =
                topOverflowsNotHidden || overflowAutoOrScroll(root);
              if (
                (isFrame && isContentOverflowing(root)) ||
                (!isFrame && isOverflowCSS)
              ) {
                return setCache(elems, getScrollRoot());
              }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
              return setCache(elems, el);
            }
          } while ((el = el.parentElement));
        }
        function isContentOverflowing(el) {
          return el.clientHeight + 10 < el.scrollHeight;
        }
        function overflowNotHidden(el) {
          var overflow = getComputedStyle(el, "").getPropertyValue(
            "overflow-y"
          );
          return overflow !== "hidden";
        }
        function overflowAutoOrScroll(el) {
          var overflow = getComputedStyle(el, "").getPropertyValue(
            "overflow-y"
          );
          return overflow === "scroll" || overflow === "auto";
        }
        function isScrollBehaviorSmooth(el) {
          var id = uniqueID(el);
          if (smoothBehaviorForElement[id] == null) {
            var scrollBehavior = getComputedStyle(el, "")["scroll-behavior"];
            smoothBehaviorForElement[id] = "smooth" == scrollBehavior;
          }
          return smoothBehaviorForElement[id];
        }
        function addEvent(type, fn, arg) {
          window.addEventListener(type, fn, arg || false);
        }
        function removeEvent(type, fn, arg) {
          window.removeEventListener(type, fn, arg || false);
        }
        function isNodeName(el, tag) {
          return el && (el.nodeName || "").toLowerCase() === tag.toLowerCase();
        }
        function directionCheck(x2, y2) {
          x2 = x2 > 0 ? 1 : -1;
          y2 = y2 > 0 ? 1 : -1;
          if (direction.x !== x2 || direction.y !== y2) {
            direction.x = x2;
            direction.y = y2;
            que = [];
            lastScroll = 0;
          }
        }
        if (window.localStorage && localStorage.SS_deltaBuffer) {
          try {
            deltaBuffer = localStorage.SS_deltaBuffer.split(",");
          } catch (e2) { }
        }
        function isTouchpad(deltaY) {
          if (!deltaY) return;
          if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
          }
          deltaY = Math.abs(deltaY);
          deltaBuffer.push(deltaY);
          deltaBuffer.shift();
          clearTimeout(deltaBufferTimer);
          deltaBufferTimer = setTimeout(function () {
            try {
              localStorage.SS_deltaBuffer = deltaBuffer.join(",");
            } catch (e2) { }
          }, 1e3);
          var dpiScaledWheelDelta =
            deltaY > 120 && allDeltasDivisableBy(deltaY);
          var tp =
            !allDeltasDivisableBy(120) &&
            !allDeltasDivisableBy(100) &&
            !dpiScaledWheelDelta;
          if (deltaY < 50) return true;
          return tp;
        }
        function isDivisible(n2, divisor) {
          return Math.floor(n2 / divisor) == n2 / divisor;
        }
        function allDeltasDivisableBy(divisor) {
          return (
            isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor)
          );
        }
        function isInsideYoutubeVideo(event) {
          var elem = event.target;
          var isControl = false;
          if (document.URL.indexOf("www.youtube.com/watch") != -1) {
            do {
              isControl =
                elem.classList &&
                elem.classList.contains("html5-video-controls");
              if (isControl) break;
            } while ((elem = elem.parentNode));
          }
          return isControl;
        }
        var requestFrame = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback, element, delay) {
              window.setTimeout(callback, delay || 1e3 / 60);
            }
          );
        })();
        var MutationObserver2 =
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver;
        var getScrollRoot = (function () {
          var SCROLL_ROOT = document.scrollingElement;
          return function () {
            if (!SCROLL_ROOT) {
              var dummy = document.createElement("div");
              dummy.style.cssText = "height:10000px;width:1px;";
              document.body.appendChild(dummy);
              var bodyScrollTop = document.body.scrollTop;
              document.documentElement.scrollTop;
              window.scrollBy(0, 3);
              if (document.body.scrollTop != bodyScrollTop)
                SCROLL_ROOT = document.body;
              else SCROLL_ROOT = document.documentElement;
              window.scrollBy(0, -3);
              document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
          };
        })();
        function pulse_(x2) {
          var val, start, expx;
          x2 = x2 * options.pulseScale;
          if (x2 < 1) {
            val = x2 - (1 - Math.exp(-x2));
          } else {
            start = Math.exp(-1);
            x2 -= 1;
            expx = 1 - Math.exp(-x2);
            val = start + expx * (1 - start);
          }
          return val * options.pulseNormalize;
        }
        function pulse(x2) {
          if (x2 >= 1) return 1;
          if (x2 <= 0) return 0;
          if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
          }
          return pulse_(x2);
        }
        var userAgent = window.navigator.userAgent;
        var isEdge = /Edge/.test(userAgent);
        var isChrome = /chrome/i.test(userAgent) && !isEdge;
        var isSafari = /safari/i.test(userAgent) && !isEdge;
        var isMobile = /mobile/i.test(userAgent);
        var isIEWin7 =
          /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
        var isOldSafari =
          isSafari &&
          (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
        var isEnabledForBrowser =
          (isChrome || isSafari || isIEWin7) && !isMobile;
        var supportsPassive = false;
        try {
          window.addEventListener(
            "test",
            null,
            Object.defineProperty({}, "passive", {
              get: function () {
                supportsPassive = true;
              },
            })
          );
        } catch (e2) { }
        var wheelOpt = supportsPassive ? { passive: false } : false;
        var wheelEvent =
          "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        if (wheelEvent && isEnabledForBrowser) {
          addEvent(wheelEvent, wheel, wheelOpt);
          addEvent("mousedown", mousedown);
          addEvent("load", init);
        }
        function SmoothScroll2(optionsToSet) {
          for (var key2 in optionsToSet)
            if (defaultOptions.hasOwnProperty(key2))
              options[key2] = optionsToSet[key2];
        }
        SmoothScroll2.destroy = cleanup;
        if (window.SmoothScrollOptions)
          SmoothScroll2(window.SmoothScrollOptions);
        module2.exports = SmoothScroll2;
      })();
    })(SmoothScroll$1);
    var SmoothScrollExports = SmoothScroll$1.exports;
    const SmoothScroll =
      /* @__PURE__ */ getDefaultExportFromCjs(SmoothScrollExports);
    function smoothScrollConvencional() {
      SmoothScroll({
        animationTime: 1200,
        stepSize: 140,
        accelerationMax: 5,
        pulseAlgorithm: true,
        pulseScale: 5,
      });
    }
    function Forms() {
      let forms = document.querySelectorAll(
        "[data-form-container]:not(.js-running)"
      );
      forms.forEach((containerForm) => {
        containerForm.classList.add("js-running");
        const containerPassword = containerForm.querySelectorAll(
          ".container-input-password"
        );
        if (containerPassword) {
          containerPassword.forEach((element) => {
            const togglePassword = element.querySelector(".toggle-password");
            const password = element.querySelector(".password");
            togglePassword.addEventListener("click", function (e2) {
              const type =
                password.getAttribute("type") === "password"
                  ? "text"
                  : "password";
              password.setAttribute("type", type);
              this.classList.toggle("show");
            });
          });
        }
        const btnDiscard = containerForm.querySelector(".btn-discard");
        if (btnDiscard) {
          btnDiscard.addEventListener("click", function () {
            containerForm.querySelector("form").reset();
          });
        }
        containerForm
          .querySelector("form")
          .addEventListener("submit", function (e2) {
            e2.preventDefault();
            {
              containerForm.dataset.formState = "success";
            }
          });
      });
      if (screen.isDesktop) {
        var containerSelect,
          i2,
          j2,
          containerSelectList,
          ll,
          selectContent,
          selected,
          select,
          option;
        containerSelect = document.getElementsByClassName("wrapper-select");
        containerSelectList = containerSelect.length;
        if (containerSelect) {
          let closeAllSelect = function (elmnt) {
            var x2,
              y2,
              i3,
              xl,
              yl,
              arrNo = [];
            x2 = document.getElementsByClassName("select-items");
            y2 = document.getElementsByClassName("select-selected");
            xl = x2.length;
            yl = y2.length;
            for (i3 = 0; i3 < yl; i3++) {
              if (elmnt == y2[i3]) {
                arrNo.push(i3);
              } else {
                y2[i3].classList.remove("select-arrow-active");
              }
            }
            for (i3 = 0; i3 < xl; i3++) {
              if (arrNo.indexOf(i3)) {
                x2[i3].classList.add("select-hide");
              }
            }
            setTimeout(() => {
              checkSelect();
            }, 100);
          };
          for (i2 = 0; i2 < containerSelectList; i2++) {
            if (containerSelect[i2].classList.contains("js-select-running")) {
              continue;
            }
            containerSelect[i2].classList.add("js-select-running");
            selectContent =
              containerSelect[i2].getElementsByTagName("select")[0];
            ll = selectContent.length;
            selected = document.createElement("DIV");
            selected.setAttribute("class", "select-selected");
            selected.innerHTML =
              selectContent.options[selectContent.selectedIndex].innerHTML;
            containerSelect[i2].appendChild(selected);
            select = document.createElement("DIV");
            select.setAttribute("class", "select-items select-hide");
            for (j2 = 1; j2 < ll; j2++) {
              option = document.createElement("DIV");
              option.innerHTML = selectContent.options[j2].innerHTML;
              option.addEventListener("click", function (e2) {
                var y2, i3, k2, s2, h2, sl, yl;
                s2 =
                  this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s2.length;
                h2 = this.parentNode.previousSibling;
                for (i3 = 0; i3 < sl; i3++) {
                  if (s2.options[i3].innerHTML == this.innerHTML) {
                    s2.selectedIndex = i3;
                    h2.innerHTML = this.innerHTML;
                    y2 =
                      this.parentNode.getElementsByClassName(
                        "same-as-selected"
                      );
                    yl = y2.length;
                    for (k2 = 0; k2 < yl; k2++) {
                      y2[k2].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h2.click();
              });
              select.appendChild(option);
            }
            containerSelect[i2].appendChild(select);
            selected.addEventListener("click", function (e2) {
              e2.stopPropagation();
              closeAllSelect(this);
              this.nextSibling.classList.toggle("select-hide");
              this.classList.toggle("select-arrow-active");
              this.parentElement.classList.toggle("active");
            });
          }
        }
      }
      if (!screen.isDesktop) {
        document.querySelectorAll(".container-select").forEach((element) => {
          element.addEventListener("input", checkSelect);
        });
      }
      function checkSelect() {
        document.querySelectorAll(".container-select").forEach((element) => {
          let select2 = element.querySelector(".main-select");
          let other = element.querySelector(".container-select-specify-other");
          if (select2.value == "Other") {
            if (other) {
              if (screen.isDesktop) {
                setTimeout(() => {
                  other.classList.remove("input-hide");
                  other.querySelector("input").required = true;
                }, 300);
              } else {
                other.classList.remove("input-hide");
                other.querySelector("input").required = true;
              }
            }
          } else {
            if (other) {
              if (screen.isDesktop) {
                setTimeout(() => {
                  other.classList.add("input-hide");
                  other.querySelector("input").required = false;
                }, 300);
              } else {
                other.classList.add("input-hide");
                other.querySelector("input").required = false;
              }
            }
          }
        });
      }
    }
    // Forms();
    // document.addEventListener("pjax:complete", Forms);

    // Products Post page Custom JS
    document.querySelector(".home").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      main$8();
      // Forms();
    });
    // Products Post page Cuctom JS

    // Products Page
    const pageName$7 = "products";
    function main$7() { }
    const pgProducts = new Page({
      pageName: pageName$7,
      main: main$7,
    });

    // Products Post page Cuctom JS
    document.querySelector(".products").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      filterProducts();
    });

    // Products Post page Cuctom JS

    // Cart Page
    const pageName$6 = "cart";
    function main$6() {
      formCart();
    }
    const pgCart = new Page({
      pageName: pageName$6,
      main: main$6,
    });
    function classesToSelector(classes = "") {
      return `.${classes
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function Pagination({ swiper, extendParams, on, emit }) {
      const pfx = "swiper-pagination";
      extendParams({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: "bullets",
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: (number) => number,
          formatFractionTotal: (number) => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`,
          paginationDisabledClass: `${pfx}-disabled`,
        },
      });
      swiper.pagination = {
        el: null,
        bullets: [],
      };
      let bulletSize;
      let dynamicBulletIndex = 0;
      const makeElementsArray = (el) => {
        if (!Array.isArray(el)) el = [el].filter((e2) => !!e2);
        return el;
      };
      function isPaginationDisabled() {
        return (
          !swiper.params.pagination.el ||
          !swiper.pagination.el ||
          (Array.isArray(swiper.pagination.el) &&
            swiper.pagination.el.length === 0)
        );
      }
      function setSideBullets(bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        if (!bulletEl) return;
        bulletEl =
          bulletEl[
          `${position === "prev" ? "previous" : "next"}ElementSibling`
          ];
        if (bulletEl) {
          bulletEl.classList.add(`${bulletActiveClass}-${position}`);
          bulletEl =
            bulletEl[
            `${position === "prev" ? "previous" : "next"}ElementSibling`
            ];
          if (bulletEl) {
            bulletEl.classList.add(
              `${bulletActiveClass}-${position}-${position}`
            );
          }
        }
      }
      function onBulletClick(e2) {
        const bulletEl = e2.target.closest(
          classesToSelector(swiper.params.pagination.bulletClass)
        );
        if (!bulletEl) {
          return;
        }
        e2.preventDefault();
        const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
        if (swiper.params.loop) {
          if (swiper.realIndex === index) return;
          const newSlideIndex = swiper.getSlideIndexByData(index);
          const currentSlideIndex = swiper.getSlideIndexByData(
            swiper.realIndex
          );
          if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
            swiper.loopFix({
              direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
              activeSlideIndex: newSlideIndex,
              slideTo: false,
            });
          }
          swiper.slideToLoop(index);
        } else {
          swiper.slideTo(index);
        }
      }
      function update() {
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        let current;
        let previousIndex;
        const slidesLength =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.slides.length
            : swiper.slides.length;
        const total = swiper.params.loop
          ? Math.ceil(slidesLength / swiper.params.slidesPerGroup)
          : swiper.snapGrid.length;
        if (swiper.params.loop) {
          previousIndex = swiper.previousRealIndex || 0;
          current =
            swiper.params.slidesPerGroup > 1
              ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup)
              : swiper.realIndex;
        } else if (typeof swiper.snapIndex !== "undefined") {
          current = swiper.snapIndex;
          previousIndex = swiper.previousSnapIndex;
        } else {
          previousIndex = swiper.previousIndex || 0;
          current = swiper.activeIndex || 0;
        }
        if (
          params.type === "bullets" &&
          swiper.pagination.bullets &&
          swiper.pagination.bullets.length > 0
        ) {
          const bullets = swiper.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;
          if (params.dynamicBullets) {
            bulletSize = elementOuterSize(
              bullets[0],
              swiper.isHorizontal() ? "width" : "height",
              true
            );
            el.forEach((subEl) => {
              subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)
                }px`;
            });
            if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
              dynamicBulletIndex += current - (previousIndex || 0);
              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }
            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex =
              firstIndex +
              (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
          bullets.forEach((bulletEl) => {
            const classesToRemove = [
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((suffix) => `${params.bulletActiveClass}${suffix}`),
            ]
              .map((s2) =>
                typeof s2 === "string" && s2.includes(" ") ? s2.split(" ") : s2
              )
              .flat();
            bulletEl.classList.remove(...classesToRemove);
          });
          if (el.length > 1) {
            bullets.forEach((bullet) => {
              const bulletIndex = elementIndex(bullet);
              if (bulletIndex === current) {
                bullet.classList.add(...params.bulletActiveClass.split(" "));
              } else if (swiper.isElement) {
                bullet.setAttribute("part", "bullet");
              }
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  bullet.classList.add(
                    ...`${params.bulletActiveClass}-main`.split(" ")
                  );
                }
                if (bulletIndex === firstIndex) {
                  setSideBullets(bullet, "prev");
                }
                if (bulletIndex === lastIndex) {
                  setSideBullets(bullet, "next");
                }
              }
            });
          } else {
            const bullet = bullets[current];
            if (bullet) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            }
            if (swiper.isElement) {
              bullets.forEach((bulletEl, bulletIndex) => {
                bulletEl.setAttribute(
                  "part",
                  bulletIndex === current ? "bullet-active" : "bullet"
                );
              });
            }
            if (params.dynamicBullets) {
              const firstDisplayedBullet = bullets[firstIndex];
              const lastDisplayedBullet = bullets[lastIndex];
              for (let i2 = firstIndex; i2 <= lastIndex; i2 += 1) {
                if (bullets[i2]) {
                  bullets[i2].classList.add(
                    ...`${params.bulletActiveClass}-main`.split(" ")
                  );
                }
              }
              setSideBullets(firstDisplayedBullet, "prev");
              setSideBullets(lastDisplayedBullet, "next");
            }
          }
          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(
              bullets.length,
              params.dynamicMainBullets + 4
            );
            const bulletsOffset =
              (bulletSize * dynamicBulletsLength - bulletSize) / 2 -
              midIndex * bulletSize;
            const offsetProp = rtl ? "right" : "left";
            bullets.forEach((bullet) => {
              bullet.style[
                swiper.isHorizontal() ? offsetProp : "top"
              ] = `${bulletsOffset}px`;
            });
          }
        }
        el.forEach((subEl, subElIndex) => {
          if (params.type === "fraction") {
            subEl
              .querySelectorAll(classesToSelector(params.currentClass))
              .forEach((fractionEl) => {
                fractionEl.textContent = params.formatFractionCurrent(
                  current + 1
                );
              });
            subEl
              .querySelectorAll(classesToSelector(params.totalClass))
              .forEach((totalEl) => {
                totalEl.textContent = params.formatFractionTotal(total);
              });
          }
          if (params.type === "progressbar") {
            let progressbarDirection;
            if (params.progressbarOpposite) {
              progressbarDirection = swiper.isHorizontal()
                ? "vertical"
                : "horizontal";
            } else {
              progressbarDirection = swiper.isHorizontal()
                ? "horizontal"
                : "vertical";
            }
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === "horizontal") {
              scaleX = scale;
            } else {
              scaleY = scale;
            }
            subEl
              .querySelectorAll(classesToSelector(params.progressbarFillClass))
              .forEach((progressEl) => {
                progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
              });
          }
          if (params.type === "custom" && params.renderCustom) {
            subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
            if (subElIndex === 0) emit("paginationRender", subEl);
          } else {
            if (subElIndex === 0) emit("paginationRender", subEl);
            emit("paginationUpdate", subEl);
          }
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](
              params.lockClass
            );
          }
        });
      }
      function render() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength =
          swiper.virtual && swiper.params.virtual.enabled
            ? swiper.virtual.slides.length
            : swiper.slides.length;
        let el = swiper.pagination.el;
        el = makeElementsArray(el);
        let paginationHTML = "";
        if (params.type === "bullets") {
          let numberOfBullets = swiper.params.loop
            ? Math.ceil(slidesLength / swiper.params.slidesPerGroup)
            : swiper.snapGrid.length;
          if (
            swiper.params.freeMode &&
            swiper.params.freeMode.enabled &&
            numberOfBullets > slidesLength
          ) {
            numberOfBullets = slidesLength;
          }
          for (let i2 = 0; i2 < numberOfBullets; i2 += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(
                swiper,
                i2,
                params.bulletClass
              );
            } else {
              paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ""
                } class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }
        }
        if (params.type === "fraction") {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(
              swiper,
              params.currentClass,
              params.totalClass
            );
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
          }
        }
        if (params.type === "progressbar") {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(
              swiper,
              params.progressbarFillClass
            );
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }
        }
        swiper.pagination.bullets = [];
        el.forEach((subEl) => {
          if (params.type !== "custom") {
            subEl.innerHTML = paginationHTML || "";
          }
          if (params.type === "bullets") {
            swiper.pagination.bullets.push(
              ...subEl.querySelectorAll(classesToSelector(params.bulletClass))
            );
          }
        });
        if (params.type !== "custom") {
          emit("paginationRender", el[0]);
        }
      }
      function init() {
        swiper.params.pagination = createElementIfNotDefined(
          swiper,
          swiper.originalParams.pagination,
          swiper.params.pagination,
          {
            el: "swiper-pagination",
          }
        );
        const params = swiper.params.pagination;
        if (!params.el) return;
        let el;
        if (typeof params.el === "string" && swiper.isElement) {
          el = swiper.el.shadowRoot.querySelector(params.el);
        }
        if (!el && typeof params.el === "string") {
          el = [...document.querySelectorAll(params.el)];
        }
        if (!el) {
          el = params.el;
        }
        if (!el || el.length === 0) return;
        if (
          swiper.params.uniqueNavElements &&
          typeof params.el === "string" &&
          Array.isArray(el) &&
          el.length > 1
        ) {
          el = [...swiper.el.querySelectorAll(params.el)];
          if (el.length > 1) {
            el = el.filter((subEl) => {
              if (elementParents(subEl, ".swiper")[0] !== swiper.el)
                return false;
              return true;
            })[0];
          }
        }
        if (Array.isArray(el) && el.length === 1) el = el[0];
        Object.assign(swiper.pagination, {
          el,
        });
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          if (params.type === "bullets" && params.clickable) {
            subEl.classList.add(params.clickableClass);
          }
          subEl.classList.add(params.modifierClass + params.type);
          subEl.classList.add(
            swiper.isHorizontal()
              ? params.horizontalClass
              : params.verticalClass
          );
          if (params.type === "bullets" && params.dynamicBullets) {
            subEl.classList.add(
              `${params.modifierClass}${params.type}-dynamic`
            );
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) {
              params.dynamicMainBullets = 1;
            }
          }
          if (params.type === "progressbar" && params.progressbarOpposite) {
            subEl.classList.add(params.progressbarOppositeClass);
          }
          if (params.clickable) {
            subEl.addEventListener("click", onBulletClick);
          }
          if (!swiper.enabled) {
            subEl.classList.add(params.lockClass);
          }
        });
      }
      function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        let el = swiper.pagination.el;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) => {
            subEl.classList.remove(params.hiddenClass);
            subEl.classList.remove(params.modifierClass + params.type);
            subEl.classList.remove(
              swiper.isHorizontal()
                ? params.horizontalClass
                : params.verticalClass
            );
            if (params.clickable) {
              subEl.removeEventListener("click", onBulletClick);
            }
          });
        }
        if (swiper.pagination.bullets)
          swiper.pagination.bullets.forEach((subEl) =>
            subEl.classList.remove(...params.bulletActiveClass.split(" "))
          );
      }
      on("changeDirection", () => {
        if (!swiper.pagination || !swiper.pagination.el) return;
        const params = swiper.params.pagination;
        let { el } = swiper.pagination;
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.horizontalClass, params.verticalClass);
          subEl.classList.add(
            swiper.isHorizontal()
              ? params.horizontalClass
              : params.verticalClass
          );
        });
      });
      on("init", () => {
        if (swiper.params.pagination.enabled === false) {
          disable();
        } else {
          init();
          render();
          update();
        }
      });
      on("activeIndexChange", () => {
        if (typeof swiper.snapIndex === "undefined") {
          update();
        }
      });
      on("snapIndexChange", () => {
        update();
      });
      on("snapGridLengthChange", () => {
        render();
        update();
      });
      on("destroy", () => {
        destroy();
      });
      on("enable disable", () => {
        let { el } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) =>
            subEl.classList[swiper.enabled ? "remove" : "add"](
              swiper.params.pagination.lockClass
            )
          );
        }
      });
      on("lock unlock", () => {
        update();
      });
      on("click", (_s, e2) => {
        const targetEl = e2.target;
        let { el } = swiper.pagination;
        if (!Array.isArray(el)) el = [el].filter((element) => !!element);
        if (
          swiper.params.pagination.el &&
          swiper.params.pagination.hideOnClick &&
          el &&
          el.length > 0 &&
          !targetEl.classList.contains(swiper.params.pagination.bulletClass)
        ) {
          if (
            swiper.navigation &&
            ((swiper.navigation.nextEl &&
              targetEl === swiper.navigation.nextEl) ||
              (swiper.navigation.prevEl &&
                targetEl === swiper.navigation.prevEl))
          )
            return;
          const isHidden = el[0].classList.contains(
            swiper.params.pagination.hiddenClass
          );
          if (isHidden === true) {
            emit("paginationShow");
          } else {
            emit("paginationHide");
          }
          el.forEach((subEl) =>
            subEl.classList.toggle(swiper.params.pagination.hiddenClass)
          );
        }
      });
      const enable = () => {
        swiper.el.classList.remove(
          swiper.params.pagination.paginationDisabledClass
        );
        let { el } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) =>
            subEl.classList.remove(
              swiper.params.pagination.paginationDisabledClass
            )
          );
        }
        init();
        render();
        update();
      };
      const disable = () => {
        swiper.el.classList.add(
          swiper.params.pagination.paginationDisabledClass
        );
        let { el } = swiper.pagination;
        if (el) {
          el = makeElementsArray(el);
          el.forEach((subEl) =>
            subEl.classList.add(
              swiper.params.pagination.paginationDisabledClass
            )
          );
        }
        destroy();
      };
      Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy,
      });
    }
    function formCart() {
      let forms = document.querySelectorAll(
        "[data-form-container-cart]:not(.js-running)"
      );
      let containerNumber = document.querySelectorAll(
        ".container-input-quantity:not(.js-running)"
      );
      containerNumber.forEach((element) => {
        element.classList.add("js-running");
        const number = element.querySelector(".input-number");
        element.querySelector(".minus").addEventListener("click", function () {
          number.value = number.value - 1;
          if (number.value < 0) number.value = 0;
        });
        element.querySelector(".plus").addEventListener("click", function () {
          number.value = parseInt(number.value) + 1;
        });
      });
      forms.forEach((containerForm) => {
        containerForm.classList.add("js-running");
        let btnCloseFeedback = document.querySelectorAll(
          "[data-close-feedback]"
        );
        btnCloseFeedback.forEach((element) => {
          element.addEventListener("click", function () {
            document.body.dataset.formCartState = "leave";
            setTimeout(() => {
              document.body.dataset.formCartState = "";
            }, 1e3);
          });
        });
        containerForm
          .querySelector("form")
          .addEventListener("submit", function (e2) {
            e2.preventDefault();
            {
              document.body.dataset.formCartState = "success";
              let area = document.querySelector("[data-feedback-area]");
              document.addEventListener(
                "click",
                function (e3) {
                  if (e3.target !== area) {
                    document.body.dataset.formCartState = "leave";
                    setTimeout(() => {
                      document.body.dataset.formCartState = "";
                    }, 1e3);
                  }
                },
                { once: true }
              );
            }
            document.addEventListener(
              "pjax:switch",
              function () {
                document.body.dataset.formCartState = "";
              },
              { once: true }
            );
          });
      });
    }
    document.addEventListener("pjax:complete", formCart);

    // Cart page Cuctom JS
    document.querySelector(".cartPage").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      formCart();
    });

    // Cart page Cuctom JS

    // Products Page
    const pageName$5 = "products";
    function main$5() {
      filterProducts();
      productContent();

      let description = document.querySelector(
        ".container-info-text.description"
      );
      let btnReadMore = document.querySelector(".btn-read-more");
      let height = document.querySelector(".text").clientHeight;
      description.style.setProperty("--h", height + "px");
      btnReadMore.addEventListener("click", function () {
        if (description.classList.contains("active")) {
          description.removeActive();
        } else {
          description.addActive();
        }
      });
      new Swiper("#slider-match-with .swiper-container", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        effect: "slide",
        pagination: {
          el: "#slider-match-with .swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: "#slider-match-with .swiper-button-next",
          prevEl: "#slider-match-with .swiper-button-prev",
        },
        loopFillGroupWithBlank: false,
        centerInsufficientSlides: true,
        grabCursor: false,
        observer: true,
        watchOverflow: true,
        speed: 600,
        preventClicksPropagation: false,
        // Responsive breakpoints
        breakpoints: {
          767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1025: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
          },
        },
      });
    }
    const pgProductsPost = new Page({
      pageName: pageName$5,
      main: main$5,
    });
    function filterProducts() {
      let btnFilter = document.querySelector(".btn-filter:not(.js-running)");
      let columnFilter = document.querySelector(".container-filter-products");
      if (btnFilter) {
        btnFilter.classList.add("js-running");
        btnFilter.addEventListener("click", function () {
          if (columnFilter.classList.contains("active")) {
            columnFilter.removeActive();
          } else {
            columnFilter.addActive();
          }
        });
      }
      let btnTag = document.querySelectorAll(".btn-tag:not(.js-running)");
      btnTag.forEach((element) => {
        element.classList.add("js-running");
        element.addEventListener("click", function () {
          if (this.classList.contains("active")) {
            this.removeActive();
          } else {
            this.addActive();
          }
        });
      });
      function onLoadItems() {
        productLinkColor();
        updateWatched();
      }
      onLoadItems();
    }
    filterProducts();
    document.addEventListener("pjax:complete", filterProducts);

    // Products Post page Cuctom JS
    document.querySelector(".productsPost").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });

      new Swiper("#slider-match-with .swiper-container", {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        effect: "slide",
        pagination: {
          el: "#slider-match-with .swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: "#slider-match-with .swiper-button-next",
          prevEl: "#slider-match-with .swiper-button-prev",
        },
        loopFillGroupWithBlank: false,
        centerInsufficientSlides: true,
        grabCursor: false,
        observer: true,
        watchOverflow: true,
        speed: 600,
        preventClicksPropagation: false,
        // Responsive breakpoints
        breakpoints: {
          767: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1025: {
            slidesPerView: "auto",
            slidesPerGroup: 1,
          },
        },
      });
      filterProducts();
      productContent();
    });

    // Products Post page Cuctom JS

    // Search Page
    const pageName$4 = "search";
    function main$4() {
      filterProducts();
      productLinkColor();
      // document.addEventListener(
      //   "pjax:switch",
      //   function () {
      //     document.querySelector(".form-search").reset();
      //     document
      //       .querySelectorAll(".form-search .preenchido")
      //       .forEach((element) => {
      //         element.classList.remove("preenchido");
      //       });
      //   },
      //   { once: true }
      // );
    }
    const pgSearch = new Page({
      pageName: pageName$4,
      main: main$4,
    });
    const t = (t2, e2 = 1e4) => (
      (t2 = parseFloat(t2 + "") || 0),
      Math.round((t2 + Number.EPSILON) * e2) / e2
    ),
      e = function (t2) {
        if (!(t2 && t2 instanceof Element && t2.offsetParent)) return false;
        const e2 = t2.scrollHeight > t2.clientHeight,
          i2 = window.getComputedStyle(t2).overflowY,
          n2 = -1 !== i2.indexOf("hidden"),
          s2 = -1 !== i2.indexOf("visible");
        return e2 && !n2 && !s2;
      },
      i = function (t2, n2) {
        return (
          !(!t2 || t2 === document.body || (n2 && t2 === n2)) &&
          (e(t2) ? t2 : i(t2.parentElement, n2))
        );
      },
      n = function (t2) {
        var e2 = new DOMParser().parseFromString(t2, "text/html").body;
        if (e2.childElementCount > 1) {
          for (var i2 = document.createElement("div"); e2.firstChild;)
            i2.appendChild(e2.firstChild);
          return i2;
        }
        return e2.firstChild;
      },
      s = (t2) => `${t2 || ""}`.split(" ").filter((t3) => !!t3),
      o = (t2, e2, i2) => {
        s(e2).forEach((e3) => {
          t2 && t2.classList.toggle(e3, i2 || false);
        });
      };
    class a {
      constructor(t2) {
        Object.defineProperty(this, "pageX", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0,
        }),
          Object.defineProperty(this, "pageY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "clientX", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "clientY", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "nativePointer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          (this.nativePointer = t2),
          (this.pageX = t2.pageX),
          (this.pageY = t2.pageY),
          (this.clientX = t2.clientX),
          (this.clientY = t2.clientY),
          (this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1),
          (this.time = Date.now());
      }
    }
    const r = { passive: false };
    class l {
      constructor(
        t2,
        { start: e2 = () => true, move: i2 = () => { }, end: n2 = () => { } }
      ) {
        Object.defineProperty(this, "element", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0,
        }),
          Object.defineProperty(this, "startCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "moveCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "endCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "currentPointers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [],
          }),
          Object.defineProperty(this, "startPointers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [],
          }),
          (this.element = t2),
          (this.startCallback = e2),
          (this.moveCallback = i2),
          (this.endCallback = n2);
        for (const t3 of [
          "onPointerStart",
          "onTouchStart",
          "onMove",
          "onTouchEnd",
          "onPointerEnd",
          "onWindowBlur",
        ])
          this[t3] = this[t3].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, r),
          this.element.addEventListener("touchstart", this.onTouchStart, r),
          this.element.addEventListener("touchmove", this.onMove, r),
          this.element.addEventListener("touchend", this.onTouchEnd),
          this.element.addEventListener("touchcancel", this.onTouchEnd);
      }
      onPointerStart(t2) {
        if (!t2.buttons || 0 !== t2.button) return;
        const e2 = new a(t2);
        this.currentPointers.some((t3) => t3.id === e2.id) ||
          (this.triggerPointerStart(e2, t2) &&
            (window.addEventListener("mousemove", this.onMove),
              window.addEventListener("mouseup", this.onPointerEnd),
              window.addEventListener("blur", this.onWindowBlur)));
      }
      onTouchStart(t2) {
        for (const e2 of Array.from(t2.changedTouches || []))
          this.triggerPointerStart(new a(e2), t2);
        window.addEventListener("blur", this.onWindowBlur);
      }
      onMove(t2) {
        const e2 = this.currentPointers.slice(),
          i2 =
            "changedTouches" in t2
              ? Array.from(t2.changedTouches || []).map((t3) => new a(t3))
              : [new a(t2)],
          n2 = [];
        for (const t3 of i2) {
          const e3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
          e3 < 0 || (n2.push(t3), (this.currentPointers[e3] = t3));
        }
        n2.length && this.moveCallback(t2, this.currentPointers.slice(), e2);
      }
      onPointerEnd(t2) {
        (t2.buttons > 0 && 0 !== t2.button) ||
          (this.triggerPointerEnd(t2, new a(t2)),
            window.removeEventListener("mousemove", this.onMove),
            window.removeEventListener("mouseup", this.onPointerEnd),
            window.removeEventListener("blur", this.onWindowBlur));
      }
      onTouchEnd(t2) {
        for (const e2 of Array.from(t2.changedTouches || []))
          this.triggerPointerEnd(t2, new a(e2));
      }
      triggerPointerStart(t2, e2) {
        return (
          !!this.startCallback(e2, t2, this.currentPointers.slice()) &&
          (this.currentPointers.push(t2), this.startPointers.push(t2), true)
        );
      }
      triggerPointerEnd(t2, e2) {
        const i2 = this.currentPointers.findIndex((t3) => t3.id === e2.id);
        i2 < 0 ||
          (this.currentPointers.splice(i2, 1),
            this.startPointers.splice(i2, 1),
            this.endCallback(t2, e2, this.currentPointers.slice()));
      }
      onWindowBlur() {
        this.clear();
      }
      clear() {
        for (; this.currentPointers.length;) {
          const t2 = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(
              new Event("touchend", {
                bubbles: true,
                cancelable: true,
                clientX: t2.clientX,
                clientY: t2.clientY,
              }),
              t2,
              this.currentPointers.slice()
            );
        }
      }
      stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, r),
          this.element.removeEventListener("touchstart", this.onTouchStart, r),
          this.element.removeEventListener("touchmove", this.onMove, r),
          this.element.removeEventListener("touchend", this.onTouchEnd),
          this.element.removeEventListener("touchcancel", this.onTouchEnd),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur);
      }
    }
    function c(t2, e2) {
      return e2
        ? Math.sqrt(
          Math.pow(e2.clientX - t2.clientX, 2) +
          Math.pow(e2.clientY - t2.clientY, 2)
        )
        : 0;
    }
    function h(t2, e2) {
      return e2
        ? {
          clientX: (t2.clientX + e2.clientX) / 2,
          clientY: (t2.clientY + e2.clientY) / 2,
        }
        : t2;
    }
    const d = (t2) =>
      "object" == typeof t2 &&
      null !== t2 &&
      t2.constructor === Object &&
      "[object Object]" === Object.prototype.toString.call(t2),
      u = (t2, ...e2) => {
        const i2 = e2.length;
        for (let n2 = 0; n2 < i2; n2++) {
          const i3 = e2[n2] || {};
          Object.entries(i3).forEach(([e3, i4]) => {
            const n3 = Array.isArray(i4) ? [] : {};
            t2[e3] || Object.assign(t2, { [e3]: n3 }),
              d(i4)
                ? Object.assign(t2[e3], u(n3, i4))
                : Array.isArray(i4)
                  ? Object.assign(t2, { [e3]: [...i4] })
                  : Object.assign(t2, { [e3]: i4 });
          });
        }
        return t2;
      },
      p = function (t2, e2) {
        return t2
          .split(".")
          .reduce((t3, e3) => ("object" == typeof t3 ? t3[e3] : void 0), e2);
      };
    class f {
      constructor(t2 = {}) {
        Object.defineProperty(this, "options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: t2,
        }),
          Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /* @__PURE__ */ new Map(),
          }),
          this.setOptions(t2);
        for (const t3 of Object.getOwnPropertyNames(
          Object.getPrototypeOf(this)
        ))
          t3.startsWith("on") &&
            "function" == typeof this[t3] &&
            (this[t3] = this[t3].bind(this));
      }
      setOptions(t2) {
        this.options = t2 ? u({}, this.constructor.defaults, t2) : {};
        for (const [t3, e2] of Object.entries(this.option("on") || {}))
          this.on(t3, e2);
      }
      option(t2, ...e2) {
        let i2 = p(t2, this.options);
        return (
          i2 && "function" == typeof i2 && (i2 = i2.call(this, this, ...e2)), i2
        );
      }
      optionFor(t2, e2, i2, ...n2) {
        let s2 = p(e2, t2);
        var o2;
        "string" != typeof (o2 = s2) ||
          isNaN(o2) ||
          isNaN(parseFloat(o2)) ||
          (s2 = parseFloat(s2)),
          "true" === s2 && (s2 = true),
          "false" === s2 && (s2 = false),
          s2 &&
          "function" == typeof s2 &&
          (s2 = s2.call(this, this, t2, ...n2));
        let a2 = p(e2, this.options);
        return (
          a2 && "function" == typeof a2
            ? (s2 = a2.call(this, this, t2, ...n2, s2))
            : void 0 === s2 && (s2 = a2),
          void 0 === s2 ? i2 : s2
        );
      }
      cn(t2) {
        const e2 = this.options.classes;
        return (e2 && e2[t2]) || "";
      }
      localize(t2, e2 = []) {
        t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, e3, i2) => {
          let n2 = "";
          return (
            i2
              ? (n2 = this.option(
                `${e3[0] + e3.toLowerCase().substring(1)}.l10n.${i2}`
              ))
              : e3 && (n2 = this.option(`l10n.${e3}`)),
            n2 || (n2 = t3),
            n2
          );
        });
        for (let i2 = 0; i2 < e2.length; i2++)
          t2 = t2.split(e2[i2][0]).join(e2[i2][1]);
        return (t2 = t2.replace(/\{\{(.*?)\}\}/g, (t3, e3) => e3));
      }
      on(t2, e2) {
        let i2 = [];
        "string" == typeof t2
          ? (i2 = t2.split(" "))
          : Array.isArray(t2) && (i2 = t2),
          this.events || (this.events = /* @__PURE__ */ new Map()),
          i2.forEach((t3) => {
            let i3 = this.events.get(t3);
            i3 || (this.events.set(t3, []), (i3 = [])),
              i3.includes(e2) || i3.push(e2),
              this.events.set(t3, i3);
          });
      }
      off(t2, e2) {
        let i2 = [];
        "string" == typeof t2
          ? (i2 = t2.split(" "))
          : Array.isArray(t2) && (i2 = t2),
          i2.forEach((t3) => {
            const i3 = this.events.get(t3);
            if (Array.isArray(i3)) {
              const t4 = i3.indexOf(e2);
              t4 > -1 && i3.splice(t4, 1);
            }
          });
      }
      emit(t2, ...e2) {
        [...(this.events.get(t2) || [])].forEach((t3) => t3(this, ...e2)),
          "*" !== t2 && this.emit("*", t2, ...e2);
      }
    }
    Object.defineProperty(f, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "5.0.19",
    }),
      Object.defineProperty(f, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {},
      });
    class m extends f {
      constructor(t2 = {}) {
        super(t2),
          Object.defineProperty(this, "plugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {},
          });
      }
      attachPlugins(t2 = {}) {
        const e2 = /* @__PURE__ */ new Map();
        for (const [i2, n2] of Object.entries(t2)) {
          const t3 = this.option(i2),
            s2 = this.plugins[i2];
          s2 || false === t3
            ? s2 && false === t3 && (s2.detach(), delete this.plugins[i2])
            : e2.set(i2, new n2(this, t3 || {}));
        }
        for (const [t3, i2] of e2) (this.plugins[t3] = i2), i2.attach();
        this.emit("attachPlugins");
      }
      detachPlugins(t2) {
        t2 = t2 || Object.keys(this.plugins);
        for (const e2 of t2) {
          const t3 = this.plugins[e2];
          t3 && t3.detach(), delete this.plugins[e2];
        }
        return this.emit("detachPlugins"), this;
      }
    }
    var g;
    !(function (t2) {
      (t2[(t2.Init = 0)] = "Init"),
        (t2[(t2.Error = 1)] = "Error"),
        (t2[(t2.Ready = 2)] = "Ready"),
        (t2[(t2.Panning = 3)] = "Panning"),
        (t2[(t2.Mousemove = 4)] = "Mousemove"),
        (t2[(t2.Destroy = 5)] = "Destroy");
    })(g || (g = {}));
    const b$1 = ["a", "b", "c", "d", "e", "f"],
      v = {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      },
      y = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: true,
        dragMinThreshold: 3,
        lockAxis: false,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: true,
        pinchToZoom: true,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: false,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: true,
        bounds: "auto",
        infinite: false,
        rubberband: true,
        bounce: true,
        maxVelocity: 75,
        transformParent: false,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen",
        },
        l10n: v,
      },
      w =
        '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
      x = (t2) =>
        t2 && null !== t2 && t2 instanceof Element && "nodeType" in t2,
      S = (t2, e2) => {
        t2 &&
          s(e2).forEach((e3) => {
            t2.classList.remove(e3);
          });
      },
      E = (t2, e2) => {
        t2 &&
          s(e2).forEach((e3) => {
            t2.classList.add(e3);
          });
      },
      P = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    let C = null,
      M = null;
    class T extends m {
      get isTouchDevice() {
        return (
          null === M && (M = window.matchMedia("(hover: none)").matches), M
        );
      }
      get isMobile() {
        return (
          null === C &&
          (C = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
          C
        );
      }
      get panMode() {
        return "mousemove" !== this.options.panMode || this.isTouchDevice
          ? "drag"
          : "mousemove";
      }
      get panOnlyZoomed() {
        const t2 = this.options.panOnlyZoomed;
        return "auto" === t2 ? this.isTouchDevice : t2;
      }
      get isInfinite() {
        return this.option("infinite");
      }
      get angle() {
        return (
          (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
        );
      }
      get targetAngle() {
        return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
      }
      get scale() {
        const { a: t2, b: e2 } = this.current;
        return Math.sqrt(t2 * t2 + e2 * e2) || 1;
      }
      get targetScale() {
        const { a: t2, b: e2 } = this.target;
        return Math.sqrt(t2 * t2 + e2 * e2) || 1;
      }
      get minScale() {
        return this.option("minScale") || 1;
      }
      get fullScale() {
        const { contentRect: t2 } = this;
        return t2.fullWidth / t2.fitWidth || 1;
      }
      get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
      get coverScale() {
        const { containerRect: t2, contentRect: e2 } = this,
          i2 = Math.max(t2.height / e2.fitHeight, t2.width / e2.fitWidth) || 1;
        return Math.min(this.fullScale, i2);
      }
      get isScaling() {
        return (
          Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        );
      }
      get isContentLoading() {
        const t2 = this.content;
        return !!(t2 && t2 instanceof HTMLImageElement) && !t2.complete;
      }
      get isResting() {
        if (this.isBouncingX || this.isBouncingY) return false;
        for (const t2 of b$1) {
          const e2 = "e" == t2 || "f" === t2 ? 1e-3 : 1e-5;
          if (Math.abs(this.target[t2] - this.current[t2]) > e2) return false;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
      constructor(t2, e2 = {}, i2 = {}) {
        var s2;
        if (
          (super(e2),
            Object.defineProperty(this, "pointerTracker", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "resizeObserver", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "updateTimer", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "clickTimer", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "rAF", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "isTicking", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            Object.defineProperty(this, "friction", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "ignoreBounds", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            Object.defineProperty(this, "isBouncingX", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            Object.defineProperty(this, "isBouncingY", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            Object.defineProperty(this, "clicks", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "trackingPoints", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: [],
            }),
            Object.defineProperty(this, "pwt", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "cwd", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "pmme", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: void 0,
            }),
            Object.defineProperty(this, "state", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: g.Init,
            }),
            Object.defineProperty(this, "isDragging", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            Object.defineProperty(this, "container", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: void 0,
            }),
            Object.defineProperty(this, "content", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: void 0,
            }),
            Object.defineProperty(this, "spinner", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "containerRect", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
            }),
            Object.defineProperty(this, "contentRect", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                fullWidth: 0,
                fullHeight: 0,
                fitWidth: 0,
                fitHeight: 0,
                width: 0,
                height: 0,
              },
            }),
            Object.defineProperty(this, "dragStart", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
            }),
            Object.defineProperty(this, "dragOffset", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: { x: 0, y: 0, time: 0 },
            }),
            Object.defineProperty(this, "current", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: Object.assign({}, P),
            }),
            Object.defineProperty(this, "target", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: Object.assign({}, P),
            }),
            Object.defineProperty(this, "velocity", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
            }),
            Object.defineProperty(this, "lockedAxis", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: false,
            }),
            !t2)
        )
          throw new Error("Container Element Not Found");
        (this.container = t2),
          this.initContent(),
          this.attachPlugins(Object.assign(Object.assign({}, T.Plugins), i2)),
          this.emit("init");
        const o2 = this.content;
        if (
          (o2.addEventListener("load", this.onLoad),
            o2.addEventListener("error", this.onError),
            this.isContentLoading)
        ) {
          if (this.option("spinner")) {
            t2.classList.add(this.cn("isLoading"));
            const e3 = n(w);
            !t2.contains(o2) || o2.parentElement instanceof HTMLPictureElement
              ? (this.spinner = t2.appendChild(e3))
              : (this.spinner =
                (null === (s2 = o2.parentElement) || void 0 === s2
                  ? void 0
                  : s2.insertBefore(e3, o2)) || null);
          }
          this.emit("beforeLoad");
        } else
          queueMicrotask(() => {
            this.enable();
          });
      }
      initContent() {
        const { container: t2 } = this,
          e2 = this.cn("content");
        let i2 = this.option("content") || t2.querySelector(`.${e2}`);
        if (
          (i2 ||
            ((i2 = t2.querySelector("img,picture") || t2.firstElementChild),
              i2 && E(i2, e2)),
            i2 instanceof HTMLPictureElement && (i2 = i2.querySelector("img")),
            !i2)
        )
          throw new Error("No content found");
        this.content = i2;
      }
      onLoad() {
        this.spinner && (this.spinner.remove(), (this.spinner = null)),
          this.option("spinner") &&
          this.container.classList.remove(this.cn("isLoading")),
          this.emit("afterLoad"),
          this.state === g.Init ? this.enable() : this.updateMetrics();
      }
      onError() {
        this.state !== g.Destroy &&
          (this.spinner && (this.spinner.remove(), (this.spinner = null)),
            this.stop(),
            this.detachEvents(),
            (this.state = g.Error),
            this.emit("error"));
      }
      attachObserver() {
        var t2;
        const e2 = () =>
          Math.abs(
            this.containerRect.width -
            this.container.getBoundingClientRect().width
          ) > 0.1 ||
          Math.abs(
            this.containerRect.height -
            this.container.getBoundingClientRect().height
          ) > 0.1;
        this.resizeObserver ||
          void 0 === window.ResizeObserver ||
          (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer ||
              (e2()
                ? (this.onResize(),
                  this.isMobile &&
                  (this.updateTimer = setTimeout(() => {
                    e2() && this.onResize(), (this.updateTimer = null);
                  }, 500)))
                : this.updateTimer &&
                (clearTimeout(this.updateTimer), (this.updateTimer = null)));
          })),
          null === (t2 = this.resizeObserver) ||
          void 0 === t2 ||
          t2.observe(this.container);
      }
      detachObserver() {
        var t2;
        null === (t2 = this.resizeObserver) || void 0 === t2 || t2.disconnect();
      }
      attachEvents() {
        const { container: t2 } = this;
        t2.addEventListener("click", this.onClick, {
          passive: false,
          capture: false,
        }),
          t2.addEventListener("wheel", this.onWheel, { passive: false }),
          (this.pointerTracker = new l(t2, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp,
          })),
          document.addEventListener("mousemove", this.onMouseMove);
      }
      detachEvents() {
        var t2;
        const { container: e2 } = this;
        e2.removeEventListener("click", this.onClick, {
          passive: false,
          capture: false,
        }),
          e2.removeEventListener("wheel", this.onWheel, { passive: false }),
          null === (t2 = this.pointerTracker) || void 0 === t2 || t2.stop(),
          (this.pointerTracker = null),
          document.removeEventListener("mousemove", this.onMouseMove),
          document.removeEventListener("keydown", this.onKeydown, true),
          this.clickTimer &&
          (clearTimeout(this.clickTimer), (this.clickTimer = null)),
          this.updateTimer &&
          (clearTimeout(this.updateTimer), (this.updateTimer = null));
      }
      animate() {
        const t2 = this.friction;
        this.setTargetForce();
        const e2 = this.option("maxVelocity");
        for (const i2 of b$1)
          t2
            ? ((this.velocity[i2] *= 1 - t2),
              e2 &&
              !this.isScaling &&
              (this.velocity[i2] = Math.max(
                Math.min(this.velocity[i2], e2),
                -1 * e2
              )),
              (this.current[i2] += this.velocity[i2]))
            : (this.current[i2] = this.target[i2]);
        this.setTransform(),
          this.setEdgeForce(),
          !this.isResting || this.isDragging
            ? (this.rAF = requestAnimationFrame(() => this.animate()))
            : this.stop("current");
      }
      setTargetForce() {
        for (const t2 of b$1)
          ("e" === t2 && this.isBouncingX) ||
            ("f" === t2 && this.isBouncingY) ||
            (this.velocity[t2] =
              (1 / (1 - this.friction) - 1) *
              (this.target[t2] - this.current[t2]));
      }
      checkBounds(t2 = 0, e2 = 0) {
        const { current: i2 } = this,
          n2 = i2.e + t2,
          s2 = i2.f + e2,
          o2 = this.getBounds(),
          { x: a2, y: r2 } = o2,
          l2 = a2.min,
          c2 = a2.max,
          h2 = r2.min,
          d2 = r2.max;
        let u2 = 0,
          p2 = 0;
        return (
          l2 !== 1 / 0 && n2 < l2
            ? (u2 = l2 - n2)
            : c2 !== 1 / 0 && n2 > c2 && (u2 = c2 - n2),
          h2 !== 1 / 0 && s2 < h2
            ? (p2 = h2 - s2)
            : d2 !== 1 / 0 && s2 > d2 && (p2 = d2 - s2),
          Math.abs(u2) < 1e-3 && (u2 = 0),
          Math.abs(p2) < 1e-3 && (p2 = 0),
          Object.assign(Object.assign({}, o2), {
            xDiff: u2,
            yDiff: p2,
            inBounds: !u2 && !p2,
          })
        );
      }
      clampTargetBounds() {
        const { target: t2 } = this,
          { x: e2, y: i2 } = this.getBounds();
        e2.min !== 1 / 0 && (t2.e = Math.max(t2.e, e2.min)),
          e2.max !== 1 / 0 && (t2.e = Math.min(t2.e, e2.max)),
          i2.min !== 1 / 0 && (t2.f = Math.max(t2.f, i2.min)),
          i2.max !== 1 / 0 && (t2.f = Math.min(t2.f, i2.max));
      }
      calculateContentDim(t2 = this.current) {
        const { content: e2, contentRect: i2 } = this,
          { fitWidth: n2, fitHeight: s2, fullWidth: o2, fullHeight: a2 } = i2;
        let r2 = o2,
          l2 = a2;
        if (this.option("zoom") || 0 !== this.angle) {
          const i3 =
            !(e2 instanceof HTMLImageElement) &&
            ("none" === window.getComputedStyle(e2).maxWidth ||
              "none" === window.getComputedStyle(e2).maxHeight),
            c2 = i3 ? o2 : n2,
            h2 = i3 ? a2 : s2,
            d2 = this.getMatrix(t2),
            u2 = new DOMPoint(0, 0).matrixTransform(d2),
            p2 = new DOMPoint(0 + c2, 0).matrixTransform(d2),
            f2 = new DOMPoint(0 + c2, 0 + h2).matrixTransform(d2),
            m2 = new DOMPoint(0, 0 + h2).matrixTransform(d2),
            g2 = Math.abs(f2.x - u2.x),
            b2 = Math.abs(f2.y - u2.y),
            v2 = Math.abs(m2.x - p2.x),
            y2 = Math.abs(m2.y - p2.y);
          (r2 = Math.max(g2, v2)), (l2 = Math.max(b2, y2));
        }
        return { contentWidth: r2, contentHeight: l2 };
      }
      setEdgeForce() {
        if (
          this.ignoreBounds ||
          this.isDragging ||
          "mousemove" === this.panMode ||
          this.targetScale < this.scale
        )
          return (this.isBouncingX = false), void (this.isBouncingY = false);
        const { target: t2 } = this,
          { x: e2, y: i2, xDiff: n2, yDiff: s2 } = this.checkBounds();
        const o2 = this.option("maxVelocity");
        let a2 = this.velocity.e,
          r2 = this.velocity.f;
        0 !== n2
          ? ((this.isBouncingX = true),
            n2 * a2 <= 0
              ? (a2 += 0.14 * n2)
              : ((a2 = 0.14 * n2),
                e2.min !== 1 / 0 && (this.target.e = Math.max(t2.e, e2.min)),
                e2.max !== 1 / 0 && (this.target.e = Math.min(t2.e, e2.max))),
            o2 && (a2 = Math.max(Math.min(a2, o2), -1 * o2)))
          : (this.isBouncingX = false),
          0 !== s2
            ? ((this.isBouncingY = true),
              s2 * r2 <= 0
                ? (r2 += 0.14 * s2)
                : ((r2 = 0.14 * s2),
                  i2.min !== 1 / 0 && (this.target.f = Math.max(t2.f, i2.min)),
                  i2.max !== 1 / 0 && (this.target.f = Math.min(t2.f, i2.max))),
              o2 && (r2 = Math.max(Math.min(r2, o2), -1 * o2)))
            : (this.isBouncingY = false),
          this.isBouncingX && (this.velocity.e = a2),
          this.isBouncingY && (this.velocity.f = r2);
      }
      enable() {
        const { content: t2 } = this,
          e2 = new DOMMatrixReadOnly(window.getComputedStyle(t2).transform);
        for (const t3 of b$1) this.current[t3] = this.target[t3] = e2[t3];
        this.updateMetrics(),
          this.attachObserver(),
          this.attachEvents(),
          (this.state = g.Ready),
          this.emit("ready");
      }
      onClick(t2) {
        var e2;
        this.isDragging &&
          (null === (e2 = this.pointerTracker) || void 0 === e2 || e2.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
        const i2 = t2.target;
        if (!i2 || t2.defaultPrevented) return;
        if (i2 && i2.hasAttribute("disabled"))
          return t2.preventDefault(), void t2.stopPropagation();
        if (
          (() => {
            const t3 = window.getSelection();
            return t3 && "Range" === t3.type;
          })() &&
          !i2.closest("button")
        )
          return;
        const n2 = i2.closest("[data-panzoom-action]"),
          s2 = i2.closest("[data-panzoom-change]"),
          o2 = n2 || s2,
          a2 = o2 && x(o2) ? o2.dataset : null;
        if (a2) {
          const e3 = a2.panzoomChange,
            i3 = a2.panzoomAction;
          if (((e3 || i3) && t2.preventDefault(), e3)) {
            let t3 = {};
            try {
              t3 = JSON.parse(e3);
            } catch (t4) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(t3);
          }
          if (i3) return void (this[i3] && this[i3]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
          return t2.preventDefault(), void t2.stopPropagation();
        const r2 = this.content.getBoundingClientRect();
        if (
          this.dragStart.time &&
          !this.canZoomOut() &&
          (Math.abs(r2.x - this.dragStart.x) > 2 ||
            Math.abs(r2.y - this.dragStart.y) > 2)
        )
          return;
        this.dragStart.time = 0;
        const l2 = (e3) => {
          this.option("zoom") &&
            e3 &&
            "string" == typeof e3 &&
            /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
              e3
            ) &&
            "function" == typeof this[e3] &&
            (t2.preventDefault(), this[e3]({ event: t2 }));
        },
          c2 = this.option("click", t2),
          h2 = this.option("dblClick", t2);
        h2
          ? (this.clicks++,
            1 == this.clicks &&
            (this.clickTimer = setTimeout(() => {
              1 === this.clicks
                ? (this.emit("click", t2),
                  !t2.defaultPrevented && c2 && l2(c2))
                : (this.emit("dblClick", t2), t2.defaultPrevented || l2(h2)),
                (this.clicks = 0),
                (this.clickTimer = null);
            }, 350)))
          : (this.emit("click", t2), !t2.defaultPrevented && c2 && l2(c2));
      }
      addTrackingPoint(t2) {
        const e2 = this.trackingPoints.filter(
          (t3) => t3.time > Date.now() - 100
        );
        e2.push(t2), (this.trackingPoints = e2);
      }
      onPointerDown(t2, e2, i2) {
        var n2;
        (this.pwt = 0),
          (this.dragOffset = { x: 0, y: 0, time: 0 }),
          (this.trackingPoints = []);
        const s2 = this.content.getBoundingClientRect();
        if (
          ((this.dragStart = {
            x: s2.x,
            y: s2.y,
            top: s2.top,
            left: s2.left,
            time: Date.now(),
          }),
            this.clickTimer)
        )
          return false;
        if ("mousemove" === this.panMode && this.targetScale > 1)
          return t2.preventDefault(), t2.stopPropagation(), false;
        if (!i2.length) {
          const e3 = t2.composedPath()[0];
          if (
            ["A", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(
              e3.nodeName
            ) ||
            e3.closest("[contenteditable]") ||
            e3.closest("[data-selectable]") ||
            e3.closest("[data-draggable]") ||
            e3.closest("[data-panzoom-change]") ||
            e3.closest("[data-panzoom-action]")
          )
            return false;
          null === (n2 = window.getSelection()) ||
            void 0 === n2 ||
            n2.removeAllRanges();
        }
        if ("mousedown" === t2.type) t2.preventDefault();
        else if (Math.abs(this.velocity.a) > 0.3) return false;
        return (
          (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          this.stop(),
          this.isDragging ||
          ((this.isDragging = true),
            this.addTrackingPoint(e2),
            this.emit("touchStart", t2)),
          true
        );
      }
      onPointerMove(e2, n2, s2) {
        if (false === this.option("touch", e2)) return;
        if (!this.isDragging) return;
        if (
          n2.length < 2 &&
          this.panOnlyZoomed &&
          t(this.targetScale) <= t(this.minScale)
        )
          return;
        if ((this.emit("touchMove", e2), e2.defaultPrevented)) return;
        this.addTrackingPoint(n2[0]);
        const { content: o2 } = this,
          a2 = h(s2[0], s2[1]),
          r2 = h(n2[0], n2[1]);
        let l2 = 0,
          d2 = 0;
        if (n2.length > 1) {
          const t2 = o2.getBoundingClientRect();
          (l2 = a2.clientX - t2.left - 0.5 * t2.width),
            (d2 = a2.clientY - t2.top - 0.5 * t2.height);
        }
        const u2 = c(s2[0], s2[1]),
          p2 = c(n2[0], n2[1]);
        let f2 = u2 ? p2 / u2 : 1,
          m2 = r2.clientX - a2.clientX,
          g2 = r2.clientY - a2.clientY;
        (this.dragOffset.x += m2),
          (this.dragOffset.y += g2),
          (this.dragOffset.time = Date.now() - this.dragStart.time);
        let b2 =
          t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
        if (b2 && !this.lockedAxis)
          if ("xy" === b2 || "y" === b2 || "touchmove" === e2.type) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void e2.preventDefault();
            const t2 = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            (this.lockedAxis = t2 > 45 && t2 < 135 ? "y" : "x"),
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              (m2 = 0),
              (g2 = 0);
          } else this.lockedAxis = b2;
        if (
          (i(e2.target, this.content) && ((b2 = "x"), (this.dragOffset.y = 0)),
            b2 &&
            "xy" !== b2 &&
            this.lockedAxis !== b2 &&
            t(this.targetScale) === t(this.minScale))
        )
          return;
        e2.cancelable && e2.preventDefault(),
          this.container.classList.add(this.cn("isDragging"));
        const v2 = this.checkBounds(m2, g2);
        this.option("rubberband")
          ? ("x" !== this.isInfinite &&
            ((v2.xDiff > 0 && m2 < 0) || (v2.xDiff < 0 && m2 > 0)) &&
            (m2 *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * v2.xDiff)
            )),
            "y" !== this.isInfinite &&
            ((v2.yDiff > 0 && g2 < 0) || (v2.yDiff < 0 && g2 > 0)) &&
            (g2 *= Math.max(
              0,
              0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * v2.yDiff)
            )))
          : (v2.xDiff && (m2 = 0), v2.yDiff && (g2 = 0));
        const y2 = this.targetScale,
          w2 = this.minScale,
          x2 = this.maxScale;
        y2 < 0.5 * w2 && (f2 = Math.max(f2, w2)),
          y2 > 1.5 * x2 && (f2 = Math.min(f2, x2)),
          "y" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0),
          "x" === this.lockedAxis && t(y2) === t(w2) && (g2 = 0),
          this.applyChange({
            originX: l2,
            originY: d2,
            panX: m2,
            panY: g2,
            scale: f2,
            friction: this.option("dragFriction"),
            ignoreBounds: true,
          });
      }
      onPointerUp(t2, e2, n2) {
        if (n2.length)
          return (
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            void (this.trackingPoints = [])
          );
        this.container.classList.remove(this.cn("isDragging")),
          this.isDragging &&
          (this.addTrackingPoint(e2),
            this.panOnlyZoomed &&
            this.contentRect.width - this.contentRect.fitWidth < 1 &&
            this.contentRect.height - this.contentRect.fitHeight < 1 &&
            (this.trackingPoints = []),
            i(t2.target, this.content) &&
            "y" === this.lockedAxis &&
            (this.trackingPoints = []),
            this.emit("touchEnd", t2),
            (this.isDragging = false),
            (this.lockedAxis = false),
            this.state !== g.Destroy &&
            (t2.defaultPrevented || this.startDecelAnim()));
      }
      startDecelAnim() {
        var e2;
        const i2 = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = false),
          (this.isBouncingY = false);
        for (const t2 of b$1) this.velocity[t2] = 0;
        (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          S(this.container, "is-scaling"),
          S(this.container, "is-animating"),
          (this.isTicking = false);
        const { trackingPoints: n2 } = this,
          s2 = n2[0],
          o2 = n2[n2.length - 1];
        let a2 = 0,
          r2 = 0,
          l2 = 0;
        o2 &&
          s2 &&
          ((a2 = o2.clientX - s2.clientX),
            (r2 = o2.clientY - s2.clientY),
            (l2 = o2.time - s2.time));
        const c2 =
          (null === (e2 = window.visualViewport) || void 0 === e2
            ? void 0
            : e2.scale) || 1;
        1 !== c2 && ((a2 *= c2), (r2 *= c2));
        let h2 = 0,
          d2 = 0,
          u2 = 0,
          p2 = 0,
          f2 = this.option("decelFriction");
        const m2 = this.targetScale;
        if (l2 > 0) {
          (u2 = Math.abs(a2) > 3 ? a2 / (l2 / 30) : 0),
            (p2 = Math.abs(r2) > 3 ? r2 / (l2 / 30) : 0);
          const t2 = this.option("maxVelocity");
          t2 &&
            ((u2 = Math.max(Math.min(u2, t2), -1 * t2)),
              (p2 = Math.max(Math.min(p2, t2), -1 * t2)));
        }
        u2 && (h2 = u2 / (1 / (1 - f2) - 1)),
          p2 && (d2 = p2 / (1 / (1 - f2) - 1)),
          ("y" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "y" === this.lockedAxis &&
              t(m2) === this.minScale)) &&
          (h2 = u2 = 0),
          ("x" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "x" === this.lockedAxis &&
              t(m2) === this.minScale)) &&
          (d2 = p2 = 0);
        const g2 = this.dragOffset.x,
          v2 = this.dragOffset.y,
          y2 = this.option("dragMinThreshold") || 0;
        Math.abs(g2) < y2 &&
          Math.abs(v2) < y2 &&
          ((h2 = d2 = 0), (u2 = p2 = 0)),
          (m2 < this.minScale - 1e-5 ||
            m2 > this.maxScale + 1e-5 ||
            (i2 && !h2 && !d2)) &&
          (f2 = 0.35),
          this.applyChange({ panX: h2, panY: d2, friction: f2 }),
          this.emit("decel", u2, p2, g2, v2);
      }
      onWheel(t2) {
        var e2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(
          function (t3, e3) {
            return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
          }
        );
        const i2 = Math.max(-1, Math.min(1, e2));
        if ((this.emit("wheel", t2, i2), "mousemove" === this.panMode)) return;
        if (t2.defaultPrevented) return;
        const n2 = this.option("wheel");
        "pan" === n2
          ? (t2.preventDefault(),
            (this.panOnlyZoomed && !this.canZoomOut()) ||
            this.applyChange({
              panX: 2 * -t2.deltaX,
              panY: 2 * -t2.deltaY,
              bounce: false,
            }))
          : "zoom" === n2 &&
          false !== this.option("zoom") &&
          this.zoomWithWheel(t2);
      }
      onMouseMove(t2) {
        this.panWithMouse(t2);
      }
      onKeydown(t2) {
        "Escape" === t2.key && this.toggleFS();
      }
      onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
      setTransform() {
        this.emit("beforeTransform");
        const { current: e2, target: i2, content: n2, contentRect: s2 } = this,
          o2 = Object.assign({}, P);
        for (const n3 of b$1) {
          const s3 = "e" == n3 || "f" === n3 ? 1e3 : 1e5;
          (o2[n3] = t(e2[n3], s3)),
            Math.abs(i2[n3] - e2[n3]) <
            ("e" == n3 || "f" === n3 ? 0.51 : 1e-3) && (e2[n3] = i2[n3]);
        }
        let { a: a2, b: r2, c: l2, d: c2, e: h2, f: d2 } = o2,
          u2 = `matrix(${a2}, ${r2}, ${l2}, ${c2}, ${h2}, ${d2})`,
          p2 =
            n2.parentElement instanceof HTMLPictureElement
              ? n2.parentElement
              : n2;
        if (
          (this.option("transformParent") && (p2 = p2.parentElement || p2),
            p2.style.transform === u2)
        )
          return;
        p2.style.transform = u2;
        const { contentWidth: f2, contentHeight: m2 } =
          this.calculateContentDim();
        (s2.width = f2), (s2.height = m2), this.emit("afterTransform");
      }
      updateMetrics(e2 = false) {
        var i2;
        if (!this || this.state === g.Destroy) return;
        if (this.isContentLoading) return;
        const n2 = Math.max(
          1,
          (null === (i2 = window.visualViewport) || void 0 === i2
            ? void 0
            : i2.scale) || 1
        ),
          { container: s2, content: o2 } = this,
          a2 = o2 instanceof HTMLImageElement,
          r2 = s2.getBoundingClientRect(),
          l2 = getComputedStyle(this.container);
        let c2 = r2.width * n2,
          h2 = r2.height * n2;
        const d2 = parseFloat(l2.paddingTop) + parseFloat(l2.paddingBottom),
          u2 = c2 - (parseFloat(l2.paddingLeft) + parseFloat(l2.paddingRight)),
          p2 = h2 - d2;
        this.containerRect = {
          width: c2,
          height: h2,
          innerWidth: u2,
          innerHeight: p2,
        };
        let f2 = this.option("width") || "auto",
          m2 = this.option("height") || "auto";
        "auto" === f2 &&
          (f2 =
            parseFloat(o2.dataset.width || "") ||
            ((t2) => {
              let e3 = 0;
              return (
                (e3 =
                  t2 instanceof HTMLImageElement
                    ? t2.naturalWidth
                    : t2 instanceof SVGElement
                      ? t2.width.baseVal.value
                      : Math.max(t2.offsetWidth, t2.scrollWidth)),
                e3 || 0
              );
            })(o2)),
          "auto" === m2 &&
          (m2 =
            parseFloat(o2.dataset.height || "") ||
            ((t2) => {
              let e3 = 0;
              return (
                (e3 =
                  t2 instanceof HTMLImageElement
                    ? t2.naturalHeight
                    : t2 instanceof SVGElement
                      ? t2.height.baseVal.value
                      : Math.max(t2.offsetHeight, t2.scrollHeight)),
                e3 || 0
              );
            })(o2));
        let b2 =
          o2.parentElement instanceof HTMLPictureElement
            ? o2.parentElement
            : o2;
        this.option("transformParent") && (b2 = b2.parentElement || b2);
        const v2 = b2.getAttribute("style") || "";
        b2.style.setProperty("transform", "none", "important"),
          a2 && ((b2.style.width = ""), (b2.style.height = "")),
          b2.offsetHeight;
        const y2 = o2.getBoundingClientRect();
        let w2 = y2.width * n2,
          x2 = y2.height * n2,
          S2 = 0,
          E2 = 0;
        a2 &&
          (Math.abs(f2 - w2) > 1 || Math.abs(m2 - x2) > 1) &&
          ({
            width: w2,
            height: x2,
            top: S2,
            left: E2,
          } = ((t2, e3, i3, n3) => {
            const s3 = i3 / n3;
            return (
              s3 > t2 / e3
                ? ((i3 = t2), (n3 = t2 / s3))
                : ((i3 = e3 * s3), (n3 = e3)),
              {
                width: i3,
                height: n3,
                top: 0.5 * (e3 - n3),
                left: 0.5 * (t2 - i3),
              }
            );
          })(w2, x2, f2, m2)),
          (this.contentRect = Object.assign(
            Object.assign({}, this.contentRect),
            {
              top: y2.top - r2.top + S2,
              bottom: r2.bottom - y2.bottom + S2,
              left: y2.left - r2.left + E2,
              right: r2.right - y2.right + E2,
              fitWidth: w2,
              fitHeight: x2,
              width: w2,
              height: x2,
              fullWidth: f2,
              fullHeight: m2,
            }
          )),
          (b2.style.cssText = v2),
          a2 && ((b2.style.width = `${w2}px`), (b2.style.height = `${x2}px`)),
          this.setTransform(),
          true !== e2 && this.emit("refresh"),
          this.ignoreBounds ||
          (t(this.targetScale) < t(this.minScale)
            ? this.zoomTo(this.minScale, { friction: 0 })
            : this.targetScale > this.maxScale
              ? this.zoomTo(this.maxScale, { friction: 0 })
              : this.state === g.Init ||
              this.checkBounds().inBounds ||
              this.requestTick()),
          this.updateControls();
      }
      getBounds() {
        const e2 = this.option("bounds");
        if ("auto" !== e2) return e2;
        const { contentWidth: i2, contentHeight: n2 } =
          this.calculateContentDim(this.target);
        let s2 = 0,
          o2 = 0,
          a2 = 0,
          r2 = 0;
        const l2 = this.option("infinite");
        if (true === l2 || (this.lockedAxis && l2 === this.lockedAxis))
          (s2 = -1 / 0), (a2 = 1 / 0), (o2 = -1 / 0), (r2 = 1 / 0);
        else {
          let { containerRect: e3, contentRect: l3 } = this,
            c2 = t(this.contentRect.fitWidth * this.targetScale, 1e3),
            h2 = t(this.contentRect.fitHeight * this.targetScale, 1e3),
            { innerWidth: d2, innerHeight: u2 } = e3;
          if (
            (this.containerRect.width === c2 && (d2 = e3.width),
              this.containerRect.width === h2 && (u2 = e3.height),
              i2 > d2)
          ) {
            (a2 = 0.5 * (i2 - d2)), (s2 = -1 * a2);
            let t2 = 0.5 * (l3.right - l3.left);
            (s2 += t2), (a2 += t2);
          }
          if (
            (this.contentRect.fitWidth > d2 &&
              i2 < d2 &&
              ((s2 -= 0.5 * (this.contentRect.fitWidth - d2)),
                (a2 -= 0.5 * (this.contentRect.fitWidth - d2))),
              n2 > u2)
          ) {
            (r2 = 0.5 * (n2 - u2)), (o2 = -1 * r2);
            let t2 = 0.5 * (l3.bottom - l3.top);
            (o2 += t2), (r2 += t2);
          }
          this.contentRect.fitHeight > u2 &&
            n2 < u2 &&
            ((s2 -= 0.5 * (this.contentRect.fitHeight - u2)),
              (a2 -= 0.5 * (this.contentRect.fitHeight - u2)));
        }
        return { x: { min: s2, max: a2 }, y: { min: o2, max: r2 } };
      }
      updateControls() {
        const e2 = this,
          i2 = e2.container,
          {
            panMode: n2,
            contentRect: s2,
            fullScale: a2,
            targetScale: r2,
            coverScale: l2,
            maxScale: c2,
            minScale: h2,
          } = e2;
        let d2 =
          {
            toggleMax: r2 - h2 < 0.5 * (c2 - h2) ? c2 : h2,
            toggleCover: r2 - h2 < 0.5 * (l2 - h2) ? l2 : h2,
            toggleZoom: r2 - h2 < 0.5 * (a2 - h2) ? a2 : h2,
          }[e2.option("click") || ""] || h2,
          u2 = e2.canZoomIn(),
          p2 = e2.canZoomOut(),
          f2 = p2 && "drag" === n2;
        t(r2) < t(h2) && !this.panOnlyZoomed && (f2 = true),
          (t(s2.width, 1) > t(s2.fitWidth, 1) ||
            t(s2.height, 1) > t(s2.fitHeight, 1)) &&
          (f2 = true),
          t(s2.width * r2, 1) < t(s2.fitWidth, 1) && (f2 = false),
          "mousemove" === n2 && (f2 = false);
        let m2 = u2 && t(d2) > t(r2),
          g2 = !m2 && !f2 && p2 && t(d2) < t(r2);
        o(i2, this.cn("canZoomIn"), m2),
          o(i2, this.cn("canZoomOut"), g2),
          o(i2, this.cn("isDraggable"), f2);
        for (const t2 of i2.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          u2
            ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex"))
            : (t2.setAttribute("disabled", ""),
              t2.setAttribute("tabindex", "-1"));
        for (const t2 of i2.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          p2
            ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex"))
            : (t2.setAttribute("disabled", ""),
              t2.setAttribute("tabindex", "-1"));
        for (const t2 of i2.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          u2 || p2
            ? (t2.removeAttribute("disabled"), t2.removeAttribute("tabindex"))
            : (t2.setAttribute("disabled", ""),
              t2.setAttribute("tabindex", "-1"));
          const e3 = t2.querySelector("g");
          e3 && (e3.style.display = u2 ? "" : "none");
        }
      }
      panTo({
        x: t2 = this.target.e,
        y: e2 = this.target.f,
        scale: i2 = this.targetScale,
        friction: n2 = this.option("friction"),
        angle: s2 = 0,
        originX: o2 = 0,
        originY: a2 = 0,
        flipX: r2 = false,
        flipY: l2 = false,
        ignoreBounds: c2 = false,
      }) {
        this.state !== g.Destroy &&
          this.applyChange({
            panX: t2 - this.target.e,
            panY: e2 - this.target.f,
            scale: i2 / this.targetScale,
            angle: s2,
            originX: o2,
            originY: a2,
            friction: n2,
            flipX: r2,
            flipY: l2,
            ignoreBounds: c2,
          });
      }
      applyChange({
        panX: e2 = 0,
        panY: i2 = 0,
        scale: n2 = 1,
        angle: s2 = 0,
        originX: o2 = -this.current.e,
        originY: a2 = -this.current.f,
        friction: r2 = this.option("friction"),
        flipX: l2 = false,
        flipY: c2 = false,
        ignoreBounds: h2 = false,
        bounce: d2 = this.option("bounce"),
      }) {
        if (this.state === g.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.friction = r2 || 0),
          (this.ignoreBounds = h2);
        const { current: u2 } = this,
          p2 = u2.e,
          f2 = u2.f,
          m2 = this.getMatrix(this.target);
        let v2 = new DOMMatrix()
          .translate(p2, f2)
          .translate(o2, a2)
          .translate(e2, i2);
        if (this.option("zoom")) {
          if (!h2) {
            const t2 = this.targetScale,
              e3 = this.minScale,
              i3 = this.maxScale;
            t2 * n2 < e3 && (n2 = e3 / t2), t2 * n2 > i3 && (n2 = i3 / t2);
          }
          v2 = v2.scale(n2);
        }
        (v2 = v2.translate(-o2, -a2).translate(-p2, -f2).multiply(m2)),
          s2 && (v2 = v2.rotate(s2)),
          l2 && (v2 = v2.scale(-1, 1)),
          c2 && (v2 = v2.scale(1, -1));
        for (const e3 of b$1)
          "e" !== e3 &&
            "f" !== e3 &&
            (v2[e3] > this.minScale + 1e-5 || v2[e3] < this.minScale - 1e-5)
            ? (this.target[e3] = v2[e3])
            : (this.target[e3] = t(v2[e3], 1e3));
        (this.targetScale < this.scale ||
          Math.abs(n2 - 1) > 0.1 ||
          "mousemove" === this.panMode ||
          false === d2) &&
          !h2 &&
          this.clampTargetBounds(),
          this.isResting || ((this.state = g.Panning), this.requestTick());
      }
      stop(t2 = false) {
        if (this.state === g.Init || this.state === g.Destroy) return;
        const e2 = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = false),
          (this.isBouncingY = false);
        for (const e3 of b$1)
          (this.velocity[e3] = 0),
            "current" === t2
              ? (this.current[e3] = this.target[e3])
              : "target" === t2 && (this.target[e3] = this.current[e3]);
        this.setTransform(),
          S(this.container, "is-scaling"),
          S(this.container, "is-animating"),
          (this.isTicking = false),
          (this.state = g.Ready),
          e2 && (this.emit("endAnimation"), this.updateControls());
      }
      requestTick() {
        this.isTicking ||
          (this.emit("startAnimation"),
            this.updateControls(),
            E(this.container, "is-animating"),
            this.isScaling && E(this.container, "is-scaling")),
          (this.isTicking = true),
          this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
      }
      panWithMouse(e2, i2 = this.option("mouseMoveFriction")) {
        if (((this.pmme = e2), "mousemove" !== this.panMode || !e2)) return;
        if (t(this.targetScale) <= t(this.minScale)) return;
        this.emit("mouseMove", e2);
        const { container: n2, containerRect: s2, contentRect: o2 } = this,
          a2 = s2.width,
          r2 = s2.height,
          l2 = n2.getBoundingClientRect(),
          c2 = (e2.clientX || 0) - l2.left,
          h2 = (e2.clientY || 0) - l2.top;
        let { contentWidth: d2, contentHeight: u2 } = this.calculateContentDim(
          this.target
        );
        const p2 = this.option("mouseMoveFactor");
        p2 > 1 && (d2 !== a2 && (d2 *= p2), u2 !== r2 && (u2 *= p2));
        let f2 = 0.5 * (d2 - a2) - (((c2 / a2) * 100) / 100) * (d2 - a2);
        f2 += 0.5 * (o2.right - o2.left);
        let m2 = 0.5 * (u2 - r2) - (((h2 / r2) * 100) / 100) * (u2 - r2);
        (m2 += 0.5 * (o2.bottom - o2.top)),
          this.applyChange({
            panX: f2 - this.target.e,
            panY: m2 - this.target.f,
            friction: i2,
          });
      }
      zoomWithWheel(e2) {
        if (this.state === g.Destroy || this.state === g.Init) return;
        const i2 = Date.now();
        if (i2 - this.pwt < 45) return void e2.preventDefault();
        this.pwt = i2;
        var n2 = [-e2.deltaX || 0, -e2.deltaY || 0, -e2.detail || 0].reduce(
          function (t2, e3) {
            return Math.abs(e3) > Math.abs(t2) ? e3 : t2;
          }
        );
        const s2 = Math.max(-1, Math.min(1, n2)),
          { targetScale: o2, maxScale: a2, minScale: r2 } = this;
        let l2 = (o2 * (100 + 45 * s2)) / 100;
        t(l2) < t(r2) && t(o2) <= t(r2)
          ? ((this.cwd += Math.abs(s2)), (l2 = r2))
          : t(l2) > t(a2) && t(o2) >= t(a2)
            ? ((this.cwd += Math.abs(s2)), (l2 = a2))
            : ((this.cwd = 0), (l2 = Math.max(Math.min(l2, a2), r2))),
          this.cwd > this.option("wheelLimit") ||
          (e2.preventDefault(),
            t(l2) !== t(o2) && this.zoomTo(l2, { event: e2 }));
      }
      canZoomIn() {
        return (
          this.option("zoom") &&
          (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) ||
            t(this.targetScale) < t(this.maxScale))
        );
      }
      canZoomOut() {
        return this.option("zoom") && t(this.targetScale) > t(this.minScale);
      }
      zoomIn(t2 = 1.25, e2) {
        this.zoomTo(this.targetScale * t2, e2);
      }
      zoomOut(t2 = 0.8, e2) {
        this.zoomTo(this.targetScale * t2, e2);
      }
      zoomToFit(t2) {
        this.zoomTo("fit", t2);
      }
      zoomToCover(t2) {
        this.zoomTo("cover", t2);
      }
      zoomToFull(t2) {
        this.zoomTo("full", t2);
      }
      zoomToMax(t2) {
        this.zoomTo("max", t2);
      }
      toggleZoom(t2) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.fullScale - this.minScale)
            ? "full"
            : "fit",
          t2
        );
      }
      toggleMax(t2) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.maxScale - this.minScale)
            ? "max"
            : "fit",
          t2
        );
      }
      toggleCover(t2) {
        this.zoomTo(
          this.targetScale - this.minScale <
            0.5 * (this.coverScale - this.minScale)
            ? "cover"
            : "fit",
          t2
        );
      }
      iterateZoom(t2) {
        this.zoomTo("next", t2);
      }
      zoomTo(
        t2 = 1,
        {
          friction: e2 = "auto",
          originX: i2 = 0,
          originY: n2 = 0,
          event: s2,
        } = {}
      ) {
        if (this.isContentLoading || this.state === g.Destroy) return;
        const { targetScale: o2 } = this;
        this.stop();
        let a2 = 1;
        if (("mousemove" === this.panMode && (s2 = this.pmme || s2), s2)) {
          const t3 = this.content.getBoundingClientRect(),
            e3 = s2.clientX || 0,
            o3 = s2.clientY || 0;
          (i2 = e3 - t3.left - 0.5 * t3.width),
            (n2 = o3 - t3.top - 0.5 * t3.height);
        }
        const r2 = this.fullScale,
          l2 = this.maxScale;
        let c2 = this.coverScale;
        "number" == typeof t2
          ? (a2 = t2 / o2)
          : ("next" === t2 &&
            (r2 - c2 < 0.2 && (c2 = r2),
              (t2 = o2 < r2 - 1e-5 ? "full" : o2 < l2 - 1e-5 ? "max" : "fit")),
            (a2 =
              "full" === t2
                ? r2 / o2 || 1
                : "cover" === t2
                  ? c2 / o2 || 1
                  : "max" === t2
                    ? l2 / o2 || 1
                    : 1 / o2 || 1)),
          (e2 = "auto" === e2 ? (a2 > 1 ? 0.15 : 0.25) : e2),
          this.applyChange({
            scale: a2,
            originX: i2,
            originY: n2,
            friction: e2,
          }),
          s2 && "mousemove" === this.panMode && this.panWithMouse(s2, e2);
      }
      rotateCCW() {
        this.applyChange({ angle: -90 });
      }
      rotateCW() {
        this.applyChange({ angle: 90 });
      }
      flipX() {
        this.applyChange({ flipX: true });
      }
      flipY() {
        this.applyChange({ flipY: true });
      }
      fitX() {
        this.stop("target");
        const { containerRect: t2, contentRect: e2, target: i2 } = this;
        this.applyChange({
          panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e,
          panY: 0.5 * t2.height - (e2.top + 0.5 * e2.fitHeight) - i2.f,
          scale: t2.width / e2.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: true,
        });
      }
      fitY() {
        this.stop("target");
        const { containerRect: t2, contentRect: e2, target: i2 } = this;
        this.applyChange({
          panX: 0.5 * t2.width - (e2.left + 0.5 * e2.fitWidth) - i2.e,
          panY: 0.5 * t2.innerHeight - (e2.top + 0.5 * e2.fitHeight) - i2.f,
          scale: t2.height / e2.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: true,
        });
      }
      toggleFS() {
        const { container: t2 } = this,
          e2 = this.cn("inFullscreen"),
          i2 = this.cn("htmlHasFullscreen");
        t2.classList.toggle(e2);
        const n2 = t2.classList.contains(e2);
        n2
          ? (document.documentElement.classList.add(i2),
            document.addEventListener("keydown", this.onKeydown, true))
          : (document.documentElement.classList.remove(i2),
            document.removeEventListener("keydown", this.onKeydown, true)),
          this.updateMetrics(),
          this.emit(n2 ? "enterFS" : "exitFS");
      }
      getMatrix(t2 = this.current) {
        const { a: e2, b: i2, c: n2, d: s2, e: o2, f: a2 } = t2;
        return new DOMMatrix([e2, i2, n2, s2, o2, a2]);
      }
      reset(t2) {
        if (this.state !== g.Init && this.state !== g.Destroy) {
          this.stop("current");
          for (const t3 of b$1) this.target[t3] = P[t3];
          (this.target.a = this.minScale),
            (this.target.d = this.minScale),
            this.clampTargetBounds(),
            this.isResting ||
            ((this.friction = void 0 === t2 ? this.option("friction") : t2),
              (this.state = g.Panning),
              this.requestTick());
        }
      }
      destroy() {
        this.stop(),
          (this.state = g.Destroy),
          this.detachEvents(),
          this.detachObserver();
        const { container: t2, content: e2 } = this,
          i2 = this.option("classes") || {};
        for (const e3 of Object.values(i2)) t2.classList.remove(e3 + "");
        e2 &&
          (e2.removeEventListener("load", this.onLoad),
            e2.removeEventListener("error", this.onError)),
          this.detachPlugins();
      }
    }
    Object.defineProperty(T, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y,
    }),
      Object.defineProperty(T, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: {},
      });
    const O = function (t2, e2) {
      let i2 = true;
      return (...n2) => {
        i2 &&
          ((i2 = false),
            t2(...n2),
            setTimeout(() => {
              i2 = true;
            }, e2));
      };
    },
      A = (t2, e2) => {
        let i2 = [];
        return (
          t2.childNodes.forEach((t3) => {
            t3.nodeType !== Node.ELEMENT_NODE ||
              (e2 && !t3.matches(e2)) ||
              i2.push(t3);
          }),
          i2
        );
      },
      z = {
        viewport: null,
        track: null,
        enabled: true,
        slides: [],
        axis: "x",
        transition: "fade",
        preload: 1,
        slidesPerPage: "auto",
        initialPage: 0,
        friction: 0.12,
        Panzoom: { decelFriction: 0.12 },
        center: true,
        infinite: true,
        fill: true,
        dragFree: false,
        adaptiveHeight: false,
        direction: "ltr",
        classes: {
          container: "f-carousel",
          viewport: "f-carousel__viewport",
          track: "f-carousel__track",
          slide: "f-carousel__slide",
          isLTR: "is-ltr",
          isRTL: "is-rtl",
          isHorizontal: "is-horizontal",
          isVertical: "is-vertical",
          inTransition: "in-transition",
          isSelected: "is-selected",
        },
        l10n: {
          NEXT: "Next slide",
          PREV: "Previous slide",
          GOTO: "Go to slide #%d",
        },
      };
    var L;
    !(function (t2) {
      (t2[(t2.Init = 0)] = "Init"),
        (t2[(t2.Ready = 1)] = "Ready"),
        (t2[(t2.Destroy = 2)] = "Destroy");
    })(L || (L = {}));
    const R = (t2) => {
      if (
        ("string" == typeof t2 && (t2 = { html: t2 }),
          !(t2 instanceof String || t2 instanceof HTMLElement))
      ) {
        const e2 = t2.thumb;
        void 0 !== e2 &&
          ("string" == typeof e2 && (t2.thumbSrc = e2),
            e2 instanceof HTMLImageElement &&
            ((t2.thumbEl = e2),
              (t2.thumbElSrc = e2.src),
              (t2.thumbSrc = e2.src)),
            delete t2.thumb);
      }
      return Object.assign(
        {
          html: "",
          el: null,
          isDom: false,
          class: "",
          index: -1,
          dim: 0,
          gap: 0,
          pos: 0,
          transition: false,
        },
        t2
      );
    },
      k = (t2 = {}) =>
        Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t2);
    class I extends f {
      constructor(t2, e2) {
        super(e2),
          Object.defineProperty(this, "instance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: t2,
          });
      }
      attach() { }
      detach() { }
    }
    const D = {
      classes: {
        list: "f-carousel__dots",
        isDynamic: "is-dynamic",
        hasDots: "has-dots",
        dot: "f-carousel__dot",
        isBeforePrev: "is-before-prev",
        isPrev: "is-prev",
        isCurrent: "is-current",
        isNext: "is-next",
        isAfterNext: "is-after-next",
      },
      dotTpl:
        '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
      dynamicFrom: 11,
      maxCount: 1 / 0,
      minCount: 2,
    };
    class F extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "isDynamic", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false,
          }),
          Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      onRefresh() {
        this.refresh();
      }
      build() {
        let t2 = this.list;
        return (
          t2 ||
          ((t2 = document.createElement("ul")),
            E(t2, this.cn("list")),
            t2.setAttribute("role", "tablist"),
            this.instance.container.appendChild(t2),
            E(this.instance.container, this.cn("hasDots")),
            (this.list = t2)),
          t2
        );
      }
      refresh() {
        var t2;
        const e2 = this.instance.pages.length,
          i2 = Math.min(2, this.option("minCount")),
          n2 = Math.max(2e3, this.option("maxCount")),
          s2 = this.option("dynamicFrom");
        if (e2 < i2 || e2 > n2) return void this.cleanup();
        const a2 = "number" == typeof s2 && e2 > 5 && e2 >= s2,
          r2 =
            !this.list ||
            this.isDynamic !== a2 ||
            this.list.children.length !== e2;
        r2 && this.cleanup();
        const l2 = this.build();
        if ((o(l2, this.cn("isDynamic"), !!a2), r2))
          for (let t3 = 0; t3 < e2; t3++) l2.append(this.createItem(t3));
        let c2,
          h2 = 0;
        for (const e3 of [...l2.children]) {
          const i3 = h2 === this.instance.page;
          i3 && (c2 = e3),
            o(e3, this.cn("isCurrent"), i3),
            null === (t2 = e3.children[0]) ||
            void 0 === t2 ||
            t2.setAttribute("aria-selected", i3 ? "true" : "false");
          for (const t3 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
            S(e3, this.cn(t3));
          h2++;
        }
        if (((c2 = c2 || l2.firstChild), a2 && c2)) {
          const t3 = c2.previousElementSibling,
            e3 = t3 && t3.previousElementSibling;
          E(t3, this.cn("isPrev")), E(e3, this.cn("isBeforePrev"));
          const i3 = c2.nextElementSibling,
            n3 = i3 && i3.nextElementSibling;
          E(i3, this.cn("isNext")), E(n3, this.cn("isAfterNext"));
        }
        this.isDynamic = a2;
      }
      createItem(t2 = 0) {
        var e2;
        const i2 = document.createElement("li");
        i2.setAttribute("role", "presentation");
        const s2 = n(
          this.instance
            .localize(this.option("dotTpl"), [["%d", t2 + 1]])
            .replace(/\%i/g, t2 + "")
        );
        return (
          i2.appendChild(s2),
          null === (e2 = i2.children[0]) ||
          void 0 === e2 ||
          e2.setAttribute("role", "tab"),
          i2
        );
      }
      cleanup() {
        this.list && (this.list.remove(), (this.list = null)),
          (this.isDynamic = false),
          S(this.instance.container, this.cn("hasDots"));
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(F, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: D,
    });
    class j extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "prev", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "next", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      onRefresh() {
        const t2 = this.instance,
          e2 = t2.pages.length,
          i2 = t2.page;
        if (e2 < 2) return void this.cleanup();
        this.build();
        let n2 = this.prev,
          s2 = this.next;
        n2 &&
          s2 &&
          (n2.removeAttribute("disabled"),
            s2.removeAttribute("disabled"),
            t2.isInfinite ||
            (i2 <= 0 && n2.setAttribute("disabled", ""),
              i2 >= e2 - 1 && s2.setAttribute("disabled", "")));
      }
      createButton(t2) {
        const e2 = this.instance,
          i2 = document.createElement("button");
        i2.setAttribute("tabindex", "0"),
          i2.setAttribute("title", e2.localize(`{{${t2.toUpperCase()}}}`)),
          E(
            i2,
            this.cn("button") +
            " " +
            this.cn("next" === t2 ? "isNext" : "isPrev")
          );
        const n2 = e2.isRTL ? ("next" === t2 ? "prev" : "next") : t2;
        var s2;
        return (
          (i2.innerHTML = e2.localize(this.option(`${n2}Tpl`))),
          (i2.dataset[
            `carousel${((s2 = t2),
              s2
                ? s2.match("^[a-z]")
                  ? s2.charAt(0).toUpperCase() + s2.substring(1)
                  : s2
                : "")
            }`
          ] = "true"),
          i2
        );
      }
      build() {
        let t2 = this.container;
        t2 ||
          ((this.container = t2 = document.createElement("div")),
            E(t2, this.cn("container")),
            this.instance.container.appendChild(t2)),
          this.next || (this.next = t2.appendChild(this.createButton("next"))),
          this.prev || (this.prev = t2.appendChild(this.createButton("prev")));
      }
      cleanup() {
        this.prev && this.prev.remove(),
          this.next && this.next.remove(),
          this.container && this.container.remove(),
          (this.prev = null),
          (this.next = null),
          (this.container = null);
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(j, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        classes: {
          container: "f-carousel__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
      },
    });
    class H extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "selectedIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "target", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "nav", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      addAsTargetFor(t2) {
        (this.target = this.instance), (this.nav = t2), this.attachEvents();
      }
      addAsNavFor(t2) {
        (this.nav = this.instance), (this.target = t2), this.attachEvents();
      }
      attachEvents() {
        this.nav &&
          this.target &&
          ((this.nav.options.initialSlide = this.target.options.initialPage),
            this.nav.on("ready", this.onNavReady),
            this.nav.state === L.Ready && this.onNavReady(this.nav),
            this.target.on("ready", this.onTargetReady),
            this.target.state === L.Ready && this.onTargetReady(this.target));
      }
      onNavReady(t2) {
        t2.on("createSlide", this.onNavCreateSlide),
          t2.on("Panzoom.click", this.onNavClick),
          t2.on("Panzoom.touchEnd", this.onNavTouch),
          this.onTargetChange();
      }
      onTargetReady(t2) {
        t2.on("change", this.onTargetChange),
          t2.on("Panzoom.refresh", this.onTargetChange),
          this.onTargetChange();
      }
      onNavClick(t2, e2, i2) {
        i2.pointerType || this.onNavTouch(t2, t2.panzoom, i2);
      }
      onNavTouch(t2, e2, i2) {
        var n2, s2;
        if (Math.abs(e2.dragOffset.x) > 3 || Math.abs(e2.dragOffset.y) > 3)
          return;
        const o2 = i2.target,
          { nav: a2, target: r2 } = this;
        if (!a2 || !r2 || !o2) return;
        const l2 = o2.closest("[data-index]");
        if ((i2.stopPropagation(), i2.preventDefault(), !l2)) return;
        const c2 = parseInt(l2.dataset.index || "", 10) || 0,
          h2 = r2.getPageForSlide(c2),
          d2 = a2.getPageForSlide(c2);
        a2.slideTo(d2),
          r2.slideTo(h2, {
            friction:
              (null ===
                (s2 =
                  null === (n2 = this.nav) || void 0 === n2
                    ? void 0
                    : n2.plugins) || void 0 === s2
                ? void 0
                : s2.Sync.option("friction")) || 0,
          }),
          this.markSelectedSlide(c2);
      }
      onNavCreateSlide(t2, e2) {
        e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
      }
      onTargetChange() {
        const { target: t2, nav: e2 } = this;
        if (!t2 || !e2) return;
        if (e2.state !== L.Ready || t2.state !== L.Ready) return;
        const i2 = t2.pages[t2.page].slides[0].index,
          n2 = e2.getPageForSlide(i2);
        this.markSelectedSlide(i2), e2.slideTo(n2);
      }
      markSelectedSlide(t2) {
        const e2 = this.nav;
        e2 &&
          e2.state === L.Ready &&
          ((this.selectedIndex = t2),
            [...e2.slides].map((e3) => {
              e3.el &&
                e3.el.classList[e3.index === t2 ? "add" : "remove"](
                  "is-nav-selected"
                );
            }));
      }
      attach() {
        const t2 = this;
        let e2 = t2.options.target,
          i2 = t2.options.nav;
        e2 ? t2.addAsNavFor(e2) : i2 && t2.addAsTargetFor(i2);
      }
      detach() {
        const t2 = this,
          e2 = t2.nav,
          i2 = t2.target;
        e2 &&
          (e2.off("ready", t2.onNavReady),
            e2.off("createSlide", t2.onNavCreateSlide),
            e2.off("Panzoom.click", t2.onNavClick),
            e2.off("Panzoom.touchEnd", t2.onNavTouch)),
          (t2.nav = null),
          i2 &&
          (i2.off("ready", t2.onTargetReady),
            i2.off("refresh", t2.onTargetChange),
            i2.off("change", t2.onTargetChange)),
          (t2.target = null);
      }
    }
    Object.defineProperty(H, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { friction: 0.35 },
    });
    const B = { Navigation: j, Dots: F, Sync: H };
    class _ extends m {
      get axis() {
        return this.isHorizontal ? "e" : "f";
      }
      get isEnabled() {
        return this.state === L.Ready;
      }
      get isInfinite() {
        let t2 = false;
        const { contentDim: e2, viewportDim: i2, pages: n2, slides: s2 } = this;
        return (
          n2.length >= 2 &&
          e2 + s2[0].dim >= i2 &&
          (t2 = this.option("infinite")),
          t2
        );
      }
      get isRTL() {
        return "rtl" === this.option("direction");
      }
      get isHorizontal() {
        return "x" === this.option("axis");
      }
      constructor(t2, e2 = {}, i2 = {}) {
        if (
          (super(),
            Object.defineProperty(this, "userOptions", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: {},
            }),
            Object.defineProperty(this, "userPlugins", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: {},
            }),
            Object.defineProperty(this, "bp", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: "",
            }),
            Object.defineProperty(this, "lp", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "state", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: L.Init,
            }),
            Object.defineProperty(this, "page", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "prevPage", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "container", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: void 0,
            }),
            Object.defineProperty(this, "viewport", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "track", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "slides", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: [],
            }),
            Object.defineProperty(this, "pages", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: [],
            }),
            Object.defineProperty(this, "panzoom", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: null,
            }),
            Object.defineProperty(this, "inTransition", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: /* @__PURE__ */ new Set(),
            }),
            Object.defineProperty(this, "contentDim", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            Object.defineProperty(this, "viewportDim", {
              enumerable: true,
              configurable: true,
              writable: true,
              value: 0,
            }),
            "string" == typeof t2 && (t2 = document.querySelector(t2)),
            !t2 || !x(t2))
        )
          throw new Error("No Element found");
        (this.container = t2),
          (this.slideNext = O(this.slideNext.bind(this), 150)),
          (this.slidePrev = O(this.slidePrev.bind(this), 150)),
          (this.userOptions = e2),
          (this.userPlugins = i2),
          queueMicrotask(() => {
            this.processOptions();
          });
      }
      processOptions() {
        const t2 = u({}, _.defaults, this.userOptions);
        let e2 = "";
        const i2 = t2.breakpoints;
        if (i2 && d(i2))
          for (const [n2, s2] of Object.entries(i2))
            window.matchMedia(n2).matches && d(s2) && ((e2 += n2), u(t2, s2));
        (e2 === this.bp && this.state !== L.Init) ||
          ((this.bp = e2),
            this.state === L.Ready &&
            (t2.initialSlide = this.pages[this.page].slides[0].index),
            this.state !== L.Init && this.destroy(),
            super.setOptions(t2),
            false === this.option("enabled")
              ? this.attachEvents()
              : setTimeout(() => {
                this.init();
              }, 0));
      }
      init() {
        (this.state = L.Init),
          this.emit("init"),
          this.attachPlugins(
            Object.assign(Object.assign({}, _.Plugins), this.userPlugins)
          ),
          this.initLayout(),
          this.initSlides(),
          this.updateMetrics(),
          this.setInitialPosition(),
          this.initPanzoom(),
          this.attachEvents(),
          (this.state = L.Ready),
          this.emit("ready");
      }
      initLayout() {
        const { container: t2 } = this,
          e2 = this.option("classes");
        E(t2, this.cn("container")),
          o(t2, e2.isLTR, !this.isRTL),
          o(t2, e2.isRTL, this.isRTL),
          o(t2, e2.isVertical, !this.isHorizontal),
          o(t2, e2.isHorizontal, this.isHorizontal);
        let i2 = this.option("viewport") || t2.querySelector(`.${e2.viewport}`);
        i2 ||
          ((i2 = document.createElement("div")),
            E(i2, e2.viewport),
            i2.append(...A(t2, `.${e2.slide}`)),
            t2.prepend(i2));
        let n2 = this.option("track") || t2.querySelector(`.${e2.track}`);
        n2 ||
          ((n2 = document.createElement("div")),
            E(n2, e2.track),
            n2.append(...Array.from(i2.childNodes))),
          n2.setAttribute("aria-live", "polite"),
          i2.contains(n2) || i2.prepend(n2),
          (this.viewport = i2),
          (this.track = n2),
          this.emit("initLayout");
      }
      initSlides() {
        const { track: t2 } = this;
        if (t2) {
          (this.slides = []),
            [...A(t2, `.${this.cn("slide")}`)].forEach((t3) => {
              if (x(t3)) {
                const e2 = R({
                  el: t3,
                  isDom: true,
                  index: this.slides.length,
                });
                this.slides.push(e2),
                  this.emit("initSlide", e2, this.slides.length);
              }
            });
          for (let t3 of this.option("slides", [])) {
            const e2 = R(t3);
            (e2.index = this.slides.length),
              this.slides.push(e2),
              this.emit("initSlide", e2, this.slides.length);
          }
          this.emit("initSlides");
        }
      }
      setInitialPage() {
        let t2 = 0;
        const e2 = this.option("initialSlide");
        (t2 =
          "number" == typeof e2
            ? this.getPageForSlide(e2)
            : parseInt(this.option("initialPage", 0) + "", 10) || 0),
          (this.page = t2);
      }
      setInitialPosition() {
        if (!this.track || !this.pages.length) return;
        const t2 = this.isHorizontal;
        let e2 = this.page;
        this.pages[e2] || (this.page = e2 = 0);
        const i2 = this.pages[e2].pos * (this.isRTL && t2 ? 1 : -1),
          n2 = t2 ? `${i2}px` : "0",
          s2 = t2 ? "0" : `${i2}px`;
        (this.track.style.transform = `translate3d(${n2}, ${s2}, 0) scale(1)`),
          this.option("adaptiveHeight") && this.setViewportHeight();
      }
      initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
        const t2 = this.option("Panzoom") || {};
        (this.panzoom = new T(
          this.viewport,
          u(
            {},
            {
              content: this.track,
              zoom: false,
              panOnlyZoomed: false,
              lockAxis: this.isHorizontal ? "x" : "y",
              infinite: this.isInfinite,
              click: false,
              dblClick: false,
              touch: (t3) => !(this.pages.length < 2 && !t3.options.infinite),
              bounds: () => this.getBounds(),
              maxVelocity: (t3) =>
                Math.abs(t3.target[this.axis] - t3.current[this.axis]) <
                  2 * this.viewportDim
                  ? 100
                  : 0,
            },
            t2
          )
        )),
          this.panzoom.on("*", (t3, e2, ...i2) => {
            this.emit(`Panzoom.${e2}`, t3, ...i2);
          }),
          this.panzoom.on("decel", this.onDecel),
          this.panzoom.on("refresh", this.onRefresh),
          this.panzoom.on("beforeTransform", this.onBeforeTransform),
          this.panzoom.on("endAnimation", this.onEndAnimation);
      }
      attachEvents() {
        const t2 = this.container;
        t2 &&
          (t2.addEventListener("click", this.onClick, {
            passive: false,
            capture: false,
          }),
            t2.addEventListener("slideTo", this.onSlideTo)),
          window.addEventListener("resize", this.onResize);
      }
      createPages() {
        let t2 = [];
        const { contentDim: e2, viewportDim: i2 } = this;
        let n2 = this.option("slidesPerPage");
        ("number" != typeof n2 || e2 <= i2) && (n2 = 1 / 0);
        let s2 = 0,
          o2 = 0,
          a2 = 0;
        for (const e3 of this.slides)
          (!t2.length || o2 + e3.dim > i2 || a2 === n2) &&
            (t2.push(k()), (s2 = t2.length - 1), (o2 = 0), (a2 = 0)),
            t2[s2].slides.push(e3),
            (o2 += e3.dim + e3.gap),
            a2++;
        return t2;
      }
      processPages() {
        const e2 = this.pages,
          { contentDim: i2, viewportDim: n2 } = this,
          s2 = this.option("center"),
          o2 = this.option("fill"),
          a2 = o2 && s2 && i2 > n2 && !this.isInfinite;
        if (
          (e2.forEach((t2, e3) => {
            (t2.index = e3), (t2.pos = t2.slides[0].pos), (t2.dim = 0);
            for (const [e4, i3] of t2.slides.entries())
              (t2.dim += i3.dim),
                e4 < t2.slides.length - 1 && (t2.dim += i3.gap);
            a2 && t2.pos + 0.5 * t2.dim < 0.5 * n2
              ? (t2.pos = 0)
              : a2 && t2.pos + 0.5 * t2.dim >= i2 - 0.5 * n2
                ? (t2.pos = i2 - n2)
                : s2 && (t2.pos += -0.5 * (n2 - t2.dim));
          }),
            e2.forEach((e3, s3) => {
              o2 &&
                !this.isInfinite &&
                i2 > n2 &&
                ((e3.pos = Math.max(e3.pos, 0)),
                  (e3.pos = Math.min(e3.pos, i2 - n2))),
                (e3.pos = t(e3.pos, 1e3)),
                (e3.dim = t(e3.dim, 1e3)),
                e3.pos < 0.1 && e3.pos > -0.1 && (e3.pos = 0);
            }),
            this.isInfinite)
        )
          return e2;
        const r2 = [];
        let l2;
        return (
          e2.forEach((t2) => {
            const e3 = Object.assign({}, t2);
            l2 && e3.pos === l2.pos
              ? ((l2.dim += e3.dim), (l2.slides = [...l2.slides, ...e3.slides]))
              : ((e3.index = r2.length), (l2 = e3), r2.push(e3));
          }),
          r2
        );
      }
      getPageFromIndex(t2 = 0) {
        const e2 = this.pages.length;
        let i2;
        return (
          (t2 = parseInt((t2 || 0).toString()) || 0),
          (i2 = this.isInfinite
            ? ((t2 % e2) + e2) % e2
            : Math.max(Math.min(t2, e2 - 1), 0)),
          i2
        );
      }
      getSlideMetrics(e2) {
        var i2;
        const n2 = this.isHorizontal ? "width" : "height";
        let s2 = 0,
          o2 = 0,
          a2 = e2.el;
        if (
          (a2
            ? (s2 = parseFloat(a2.dataset[n2] || "") || 0)
            : ((a2 = document.createElement("div")),
              (a2.style.visibility = "hidden"),
              E(a2, this.cn("slide") + " " + e2.class),
              (this.track || document.body).prepend(a2)),
            s2)
        )
          (a2.style[n2] = `${s2}px`),
            (a2.style["width" === n2 ? "height" : "width"] = "");
        else {
          const t2 = Math.max(
            1,
            (null === (i2 = window.visualViewport) || void 0 === i2
              ? void 0
              : i2.scale) || 1
          );
          s2 = a2.getBoundingClientRect()[n2] * t2;
        }
        const r2 = getComputedStyle(a2);
        return (
          "content-box" === r2.boxSizing &&
          (this.isHorizontal
            ? ((s2 += parseFloat(r2.paddingLeft) || 0),
              (s2 += parseFloat(r2.paddingRight) || 0))
            : ((s2 += parseFloat(r2.paddingTop) || 0),
              (s2 += parseFloat(r2.paddingBottom) || 0))),
          (o2 =
            parseFloat(
              r2[this.isHorizontal ? "marginRight" : "marginBottom"]
            ) || 0),
          e2.el || a2.remove(),
          { dim: t(s2, 1e3), gap: t(o2, 1e3) }
        );
      }
      getBounds() {
        const { isInfinite: t2, isRTL: e2, isHorizontal: i2, pages: n2 } = this;
        let s2 = { min: 0, max: 0 };
        if (t2) s2 = { min: -1 / 0, max: 1 / 0 };
        else if (n2.length) {
          const t3 = n2[0].pos,
            o2 = n2[n2.length - 1].pos;
          s2 = e2 && i2 ? { min: t3, max: o2 } : { min: -1 * o2, max: -1 * t3 };
        }
        return {
          x: i2 ? s2 : { min: 0, max: 0 },
          y: i2 ? { min: 0, max: 0 } : s2,
        };
      }
      repositionSlides() {
        let e2,
          {
            isHorizontal: i2,
            isRTL: n2,
            isInfinite: s2,
            viewport: o2,
            viewportDim: a2,
            contentDim: r2,
            page: l2,
            pages: c2,
            slides: h2,
            panzoom: d2,
          } = this,
          u2 = 0,
          p2 = 0,
          f2 = 0,
          m2 = 0;
        d2
          ? (m2 = -1 * d2.current[this.axis])
          : c2[l2] && (m2 = c2[l2].pos || 0),
          (e2 = i2 ? (n2 ? "right" : "left") : "top"),
          n2 && i2 && (m2 *= -1);
        for (const i3 of h2)
          i3.el
            ? ("top" === e2
              ? ((i3.el.style.right = ""), (i3.el.style.left = ""))
              : (i3.el.style.top = ""),
              i3.index !== u2
                ? (i3.el.style[e2] = 0 === p2 ? "" : `${t(p2, 1e3)}px`)
                : (i3.el.style[e2] = ""),
              (f2 += i3.dim + i3.gap),
              u2++)
            : (p2 += i3.dim + i3.gap);
        if (s2 && f2 && o2) {
          let n3 = getComputedStyle(o2),
            s3 = "padding",
            l3 = i2 ? "Right" : "Bottom",
            c3 = parseFloat(n3[s3 + (i2 ? "Left" : "Top")]);
          (m2 -= c3), (a2 += c3), (a2 += parseFloat(n3[s3 + l3]));
          for (const i3 of h2)
            i3.el &&
              (t(i3.pos) < t(a2) &&
                t(i3.pos + i3.dim + i3.gap) < t(m2) &&
                t(m2) > t(r2 - a2) &&
                (i3.el.style[e2] = `${t(p2 + f2, 1e3)}px`),
                t(i3.pos + i3.gap) >= t(r2 - a2) &&
                t(i3.pos) > t(m2 + a2) &&
                t(m2) < t(a2) &&
                (i3.el.style[e2] = `-${t(f2, 1e3)}px`));
        }
        let g2,
          b2,
          v2 = [...this.inTransition];
        if ((v2.length > 1 && ((g2 = c2[v2[0]]), (b2 = c2[v2[1]])), g2 && b2)) {
          let i3 = 0;
          for (const n3 of h2)
            n3.el
              ? this.inTransition.has(n3.index) &&
              g2.slides.indexOf(n3) < 0 &&
              (n3.el.style[e2] = `${t(i3 + (g2.pos - b2.pos), 1e3)}px`)
              : (i3 += n3.dim + n3.gap);
        }
      }
      createSlideEl(t2) {
        const { track: e2, slides: i2 } = this;
        if (!e2 || !t2) return;
        if (t2.el) return;
        const n2 = document.createElement("div");
        E(n2, this.cn("slide")),
          E(n2, t2.class),
          E(n2, t2.customClass),
          t2.html && (n2.innerHTML = t2.html);
        const s2 = [];
        i2.forEach((t3, e3) => {
          t3.el && s2.push(e3);
        });
        const o2 = t2.index;
        let a2 = null;
        if (s2.length) {
          a2 =
            i2[
            s2.reduce((t3, e3) =>
              Math.abs(e3 - o2) < Math.abs(t3 - o2) ? e3 : t3
            )
            ];
        }
        const r2 =
          a2 && a2.el
            ? a2.index < t2.index
              ? a2.el.nextSibling
              : a2.el
            : null;
        e2.insertBefore(n2, e2.contains(r2) ? r2 : null),
          (t2.el = n2),
          this.emit("createSlide", t2);
      }
      removeSlideEl(t2, e2 = false) {
        const i2 = t2.el;
        if (!i2) return;
        if ((S(i2, this.cn("isSelected")), t2.isDom && !e2))
          return (
            i2.removeAttribute("aria-hidden"),
            i2.removeAttribute("data-index"),
            S(i2, this.cn("isSelected")),
            void (i2.style.left = "")
          );
        this.emit("removeSlide", t2);
        const n2 = new CustomEvent("animationend");
        i2.dispatchEvent(n2), t2.el && t2.el.remove(), (t2.el = null);
      }
      transitionTo(e2 = 0, i2 = this.option("transition")) {
        if (!i2) return false;
        const { pages: n2, panzoom: s2 } = this;
        e2 = parseInt((e2 || 0).toString()) || 0;
        const o2 = this.getPageFromIndex(e2);
        if (
          !s2 ||
          !n2[o2] ||
          n2.length < 2 ||
          Math.abs(n2[this.page].slides[0].dim - this.viewportDim) > 1
        )
          return false;
        const a2 = e2 > this.page ? 1 : -1,
          r2 = this.pages[o2].pos * (this.isRTL ? 1 : -1);
        if (this.page === o2 && t(r2, 1e3) === t(s2.target[this.axis], 1e3))
          return false;
        this.clearTransitions();
        const l2 = s2.isResting;
        E(this.container, this.cn("inTransition"));
        const c2 = this.pages[this.page].slides[0],
          h2 = this.pages[o2].slides[0];
        this.inTransition.add(h2.index), this.createSlideEl(h2);
        let d2 = c2.el,
          u2 = h2.el;
        l2 || "slide" === i2 || ((i2 = "fadeFast"), (d2 = null));
        const p2 = this.isRTL ? "next" : "prev",
          f2 = this.isRTL ? "prev" : "next";
        return (
          d2 &&
          (this.inTransition.add(c2.index),
            (c2.transition = i2),
            d2.addEventListener("animationend", this.onAnimationEnd),
            d2.classList.add(`f-${i2}Out`, `to-${a2 > 0 ? f2 : p2}`)),
          u2 &&
          ((h2.transition = i2),
            u2.addEventListener("animationend", this.onAnimationEnd),
            u2.classList.add(`f-${i2}In`, `from-${a2 > 0 ? p2 : f2}`)),
          s2.panTo({
            x: this.isHorizontal ? r2 : 0,
            y: this.isHorizontal ? 0 : r2,
            friction: 0,
          }),
          this.onChange(o2),
          true
        );
      }
      manageSlideVisiblity() {
        const t2 = /* @__PURE__ */ new Set(),
          e2 = /* @__PURE__ */ new Set(),
          i2 = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
        for (const n2 of this.slides) i2.has(n2) ? t2.add(n2) : e2.add(n2);
        for (const e3 of this.inTransition) t2.add(this.slides[e3]);
        for (const e3 of t2) this.createSlideEl(e3), this.lazyLoadSlide(e3);
        for (const i3 of e2) t2.has(i3) || this.removeSlideEl(i3);
        this.markSelectedSlides(), this.repositionSlides();
      }
      markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const t2 = "aria-hidden";
        let e2 = this.cn("isSelected");
        if (e2)
          for (const i2 of this.slides)
            i2.el &&
              ((i2.el.dataset.index = `${i2.index}`),
                this.pages[this.page].slides.includes(i2)
                  ? (i2.el.classList.contains(e2) ||
                    (E(i2.el, e2), this.emit("selectSlide", i2)),
                    i2.el.removeAttribute(t2))
                  : (i2.el.classList.contains(e2) &&
                    (S(i2.el, e2), this.emit("unselectSlide", i2)),
                    i2.el.setAttribute(t2, "true")));
      }
      flipInfiniteTrack() {
        const t2 = this.panzoom;
        if (!t2 || !this.isInfinite) return;
        const e2 = "x" === this.option("axis") ? "e" : "f",
          { viewportDim: i2, contentDim: n2 } = this;
        let s2 = t2.current[e2],
          o2 = t2.target[e2] - s2,
          a2 = 0,
          r2 = 0.5 * i2,
          l2 = n2;
        this.isRTL && this.isHorizontal
          ? (s2 < -r2 && ((a2 = -1), (s2 += l2)),
            s2 > l2 - r2 && ((a2 = 1), (s2 -= l2)))
          : (s2 > r2 && ((a2 = 1), (s2 -= l2)),
            s2 < -l2 + r2 && ((a2 = -1), (s2 += l2))),
          a2 && ((t2.current[e2] = s2), (t2.target[e2] = s2 + o2));
      }
      lazyLoadSlide(t2) {
        const e2 = this,
          i2 = t2 && t2.el;
        if (!i2) return;
        const s2 = /* @__PURE__ */ new Set(),
          o2 = "f-fadeIn";
        i2.querySelectorAll("[data-lazy-srcset]").forEach((t3) => {
          t3 instanceof HTMLImageElement && s2.add(t3);
        });
        let a2 = Array.from(i2.querySelectorAll("[data-lazy-src]"));
        i2.dataset.lazySrc && a2.push(i2),
          a2.map((t3) => {
            t3 instanceof HTMLImageElement
              ? s2.add(t3)
              : x(t3) &&
              ((t3.style.backgroundImage = `url('${t3.dataset.lazySrc || ""
                }')`),
                delete t3.dataset.lazySrc);
          });
        const r2 = (t3, i3, n2) => {
          n2 && (n2.remove(), (n2 = null)),
            i3.complete &&
            (i3.classList.add(o2),
              setTimeout(() => {
                i3.classList.remove(o2);
              }, 350),
              (i3.style.display = "")),
            this.option("adaptiveHeight") &&
            t3.el &&
            this.pages[this.page].slides.indexOf(t3) > -1 &&
            (e2.updateMetrics(), e2.setViewportHeight()),
            this.emit("load", t3);
        };
        for (const e3 of s2) {
          let i3 = null;
          (e3.src = e3.dataset.lazySrcset || e3.dataset.lazySrc || ""),
            delete e3.dataset.lazySrc,
            delete e3.dataset.lazySrcset,
            (e3.style.display = "none"),
            e3.addEventListener("error", () => {
              r2(t2, e3, i3);
            }),
            e3.addEventListener("load", () => {
              r2(t2, e3, i3);
            }),
            setTimeout(() => {
              e3.parentNode &&
                t2.el &&
                (e3.complete
                  ? r2(t2, e3, i3)
                  : ((i3 = n(w)), e3.parentNode.insertBefore(i3, e3)));
            }, 300);
        }
      }
      onAnimationEnd(t2) {
        var e2;
        const i2 = t2.target,
          n2 = i2 ? parseInt(i2.dataset.index || "", 10) || 0 : -1,
          s2 = this.slides[n2],
          o2 = t2.animationName;
        if (!i2 || !s2 || !o2) return;
        const a2 = !!this.inTransition.has(n2) && s2.transition;
        a2 &&
          o2.substring(0, a2.length + 2) === `f-${a2}` &&
          this.inTransition.delete(n2),
          this.inTransition.size || this.clearTransitions(),
          n2 === this.page &&
          (null === (e2 = this.panzoom) || void 0 === e2
            ? void 0
            : e2.isResting) &&
          this.emit("settle");
      }
      onDecel(t2, e2 = 0, i2 = 0, n2 = 0, s2 = 0) {
        const { isRTL: o2, isHorizontal: a2, axis: r2, pages: l2 } = this,
          c2 = l2.length,
          h2 = Math.abs(Math.atan2(i2, e2) / (Math.PI / 180));
        let d2 = 0;
        if (((d2 = h2 > 45 && h2 < 135 ? (a2 ? 0 : i2) : a2 ? e2 : 0), !c2))
          return;
        const u2 = this.option("dragFree");
        let p2 = this.page,
          f2 = o2 && a2 ? 1 : -1;
        const m2 = t2.target[r2] * f2,
          g2 = t2.current[r2] * f2;
        let { pageIndex: b2 } = this.getPageFromPosition(m2),
          { pageIndex: v2 } = this.getPageFromPosition(g2);
        u2
          ? this.onChange(b2)
          : (Math.abs(d2) > 5
            ? (l2[p2].dim <
              document.documentElement[
              "client" + (this.isHorizontal ? "Width" : "Height")
              ] -
              1 && (p2 = v2),
              (p2 =
                o2 && a2
                  ? d2 < 0
                    ? p2 - 1
                    : p2 + 1
                  : d2 < 0
                    ? p2 + 1
                    : p2 - 1))
            : (p2 = 0 === n2 && 0 === s2 ? p2 : v2),
            this.slideTo(p2, {
              transition: false,
              friction: t2.option("decelFriction"),
            }));
      }
      onClick(t2) {
        const e2 = t2.target,
          i2 = e2 && x(e2) ? e2.dataset : null;
        let n2, s2;
        i2 &&
          (void 0 !== i2.carouselPage
            ? ((s2 = "slideTo"), (n2 = i2.carouselPage))
            : void 0 !== i2.carouselNext
              ? (s2 = "slideNext")
              : void 0 !== i2.carouselPrev && (s2 = "slidePrev")),
          s2
            ? (t2.preventDefault(),
              t2.stopPropagation(),
              e2 && !e2.hasAttribute("disabled") && this[s2](n2))
            : this.emit("click", t2);
      }
      onSlideTo(t2) {
        const e2 = t2.detail || 0;
        this.slideTo(this.getPageForSlide(e2), { friction: 0 });
      }
      onChange(t2, e2 = 0) {
        const i2 = this.page;
        (this.prevPage = i2),
          (this.page = t2),
          this.option("adaptiveHeight") && this.setViewportHeight(),
          t2 !== i2 &&
          (this.markSelectedSlides(), this.emit("change", t2, i2, e2));
      }
      onRefresh() {
        let t2 = this.contentDim,
          e2 = this.viewportDim;
        this.updateMetrics(),
          (this.contentDim === t2 && this.viewportDim === e2) ||
          this.slideTo(this.page, { friction: 0, transition: false });
      }
      onResize() {
        this.option("breakpoints") && this.processOptions();
      }
      onBeforeTransform(t2) {
        this.lp !== t2.current[this.axis] &&
          (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
          (this.lp = t2.current.e);
      }
      onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
      reInit(t2 = null, e2 = null) {
        this.destroy(),
          (this.state = L.Init),
          (this.userOptions = t2 || this.userOptions),
          (this.userPlugins = e2 || this.userPlugins),
          this.processOptions();
      }
      slideTo(
        t2 = 0,
        {
          friction: e2 = this.option("friction"),
          transition: i2 = this.option("transition"),
        } = {}
      ) {
        if (this.state === L.Destroy) return;
        const {
          axis: n2,
          isHorizontal: s2,
          isRTL: o2,
          pages: a2,
          panzoom: r2,
        } = this,
          l2 = a2.length,
          c2 = o2 && s2 ? 1 : -1;
        if (!r2 || !l2) return;
        if (this.transitionTo(t2, i2)) return;
        const h2 = this.getPageFromIndex(t2);
        let d2 = a2[h2].pos;
        if (this.isInfinite) {
          const e3 = this.contentDim,
            i3 = r2.target[n2] * c2;
          if (2 === l2) d2 += e3 * Math.floor(parseFloat(t2 + "") / 2);
          else {
            const t3 = i3;
            d2 = [d2, d2 - e3, d2 + e3].reduce(function (e4, i4) {
              return Math.abs(i4 - t3) < Math.abs(e4 - t3) ? i4 : e4;
            });
          }
        }
        (d2 *= c2),
          Math.abs(r2.target[n2] - d2) < 0.1 ||
          (r2.panTo({ x: s2 ? d2 : 0, y: s2 ? 0 : d2, friction: e2 }),
            this.onChange(h2));
      }
      slideToClosest(t2) {
        if (this.panzoom) {
          const { pageIndex: e2 } = this.getPageFromPosition(
            this.panzoom.current[this.isHorizontal ? "e" : "f"]
          );
          this.slideTo(e2, t2);
        }
      }
      slideNext() {
        this.slideTo(this.page + 1);
      }
      slidePrev() {
        this.slideTo(this.page - 1);
      }
      clearTransitions() {
        this.inTransition.clear(), S(this.container, this.cn("inTransition"));
        const t2 = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const e2 of this.slides) {
          const i2 = e2.el;
          if (i2) {
            i2.removeEventListener("animationend", this.onAnimationEnd),
              i2.classList.remove(...t2);
            const n2 = e2.transition;
            n2 && i2.classList.remove(`f-${n2}Out`, `f-${n2}In`);
          }
        }
        this.manageSlideVisiblity();
      }
      prependSlide(t2) {
        var e2, i2;
        let n2 = Array.isArray(t2) ? t2 : [t2];
        for (const t3 of n2.reverse()) this.slides.unshift(R(t3));
        for (let t3 = 0; t3 < this.slides.length; t3++)
          this.slides[t3].index = t3;
        const s2 =
          (null === (e2 = this.pages[this.page]) || void 0 === e2
            ? void 0
            : e2.pos) || 0;
        (this.page += n2.length), this.updateMetrics();
        const o2 =
          (null === (i2 = this.pages[this.page]) || void 0 === i2
            ? void 0
            : i2.pos) || 0;
        if (this.panzoom) {
          const t3 = this.isRTL ? s2 - o2 : o2 - s2;
          (this.panzoom.target.e -= t3),
            (this.panzoom.current.e -= t3),
            this.panzoom.requestTick();
        }
      }
      appendSlide(t2) {
        let e2 = Array.isArray(t2) ? t2 : [t2];
        for (const t3 of e2) {
          const e3 = R(t3);
          (e3.index = this.slides.length),
            this.slides.push(e3),
            this.emit("initSlide", t3, this.slides.length);
        }
        this.updateMetrics();
      }
      removeSlide(t2) {
        const e2 = this.slides.length;
        (t2 = ((t2 % e2) + e2) % e2),
          this.removeSlideEl(this.slides[t2], true),
          this.slides.splice(t2, 1);
        for (let t3 = 0; t3 < this.slides.length; t3++)
          this.slides[t3].index = t3;
        this.updateMetrics(),
          this.slideTo(this.page, { friction: 0, transition: false });
      }
      updateMetrics() {
        const { panzoom: e2, viewport: i2, track: n2, isHorizontal: s2 } = this;
        if (!n2) return;
        const o2 = s2 ? "width" : "height",
          a2 = s2 ? "offsetWidth" : "offsetHeight";
        if (i2) {
          let e3 = Math.max(i2[a2], t(i2.getBoundingClientRect()[o2], 1e3)),
            n3 = getComputedStyle(i2),
            r3 = "padding",
            l3 = s2 ? "Right" : "Bottom";
          (e3 -=
            parseFloat(n3[r3 + (s2 ? "Left" : "Top")]) +
            parseFloat(n3[r3 + l3])),
            (this.viewportDim = e3);
        }
        let r2,
          l2 = this.pages.length,
          c2 = 0;
        for (const [e3, i3] of this.slides.entries()) {
          let n3 = 0,
            s3 = 0;
          !i3.el && r2
            ? ((n3 = r2.dim), (s3 = r2.gap))
            : (({ dim: n3, gap: s3 } = this.getSlideMetrics(i3)), (r2 = i3)),
            (n3 = t(n3, 1e3)),
            (s3 = t(s3, 1e3)),
            (i3.dim = n3),
            (i3.gap = s3),
            (i3.pos = c2),
            (c2 += n3),
            (this.isInfinite || e3 < this.slides.length - 1) && (c2 += s3);
        }
        const h2 = this.contentDim;
        (c2 = t(c2, 1e3)),
          (this.contentDim = c2),
          e2 &&
          ((e2.contentRect[o2] = c2),
            (e2.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] =
              c2)),
          (this.pages = this.createPages()),
          (this.pages = this.processPages()),
          this.state === L.Init && this.setInitialPage(),
          (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
          e2 &&
          l2 === this.pages.length &&
          Math.abs(c2 - h2) > 0.5 &&
          ((e2.target[this.axis] = -1 * this.pages[this.page].pos),
            (e2.current[this.axis] = -1 * this.pages[this.page].pos),
            e2.stop()),
          this.manageSlideVisiblity(),
          this.emit("refresh");
      }
      getProgress(e2, i2 = false) {
        void 0 === e2 && (e2 = this.page);
        const n2 = this,
          s2 = n2.panzoom,
          o2 = n2.pages[e2] || 0;
        if (!o2 || !s2) return 0;
        let a2 = -1 * s2.current.e,
          r2 = n2.contentDim;
        var l2 = [
          t((a2 - o2.pos) / (1 * o2.dim), 1e3),
          t((a2 + r2 - o2.pos) / (1 * o2.dim), 1e3),
          t((a2 - r2 - o2.pos) / (1 * o2.dim), 1e3),
        ].reduce(function (t2, e3) {
          return Math.abs(e3) < Math.abs(t2) ? e3 : t2;
        });
        return i2 ? l2 : Math.max(-1, Math.min(1, l2));
      }
      setViewportHeight() {
        const { page: t2, pages: e2, viewport: i2, isHorizontal: n2 } = this;
        if (!i2 || !e2[t2]) return;
        let s2 = 0;
        n2 &&
          this.track &&
          ((this.track.style.height = "auto"),
            e2[t2].slides.forEach((t3) => {
              t3.el && (s2 = Math.max(s2, t3.el.offsetHeight));
            })),
          (i2.style.height = s2 ? `${s2}px` : "");
      }
      getPageForSlide(t2) {
        for (const e2 of this.pages)
          for (const i2 of e2.slides) if (i2.index === t2) return e2.index;
        return -1;
      }
      getVisibleSlides(t2 = 0) {
        var e2;
        const i2 = /* @__PURE__ */ new Set();
        let { contentDim: n2, viewportDim: s2, pages: o2, page: a2 } = this;
        n2 =
          n2 +
          (null === (e2 = this.slides[this.slides.length - 1]) ||
            void 0 === e2
            ? void 0
            : e2.gap) || 0;
        let r2 = 0;
        (r2 = this.panzoom
          ? -1 * this.panzoom.current[this.axis]
          : (o2[a2] && o2[a2].pos) || 0),
          this.isInfinite && (r2 -= Math.floor(r2 / n2) * n2),
          this.isRTL && this.isHorizontal && (r2 *= -1);
        const l2 = r2 - s2 * t2,
          c2 = r2 + s2 * (t2 + 1),
          h2 = this.isInfinite ? [-1, 0, 1] : [0];
        for (const t3 of this.slides)
          for (const e3 of h2) {
            const s3 = t3.pos + e3 * n2,
              o3 = t3.pos + t3.dim + t3.gap + e3 * n2;
            s3 < c2 && o3 > l2 && i2.add(t3);
          }
        return i2;
      }
      getPageFromPosition(t2) {
        const { viewportDim: e2, contentDim: i2 } = this,
          n2 = this.pages.length,
          s2 = this.slides.length,
          o2 = this.slides[s2 - 1];
        let a2 = 0,
          r2 = 0,
          l2 = 0;
        const c2 = this.option("center");
        c2 && (t2 += 0.5 * e2),
          this.isInfinite ||
          (t2 = Math.max(this.slides[0].pos, Math.min(t2, o2.pos)));
        const h2 = i2 + o2.gap;
        (l2 = Math.floor(t2 / h2) || 0), (t2 -= l2 * h2);
        let d2 = o2,
          u2 = this.slides.find((e3) => {
            const i3 = t2 + (d2 && !c2 ? 0.5 * d2.dim : 0);
            return (d2 = e3), e3.pos <= i3 && e3.pos + e3.dim + e3.gap > i3;
          });
        return (
          u2 || (u2 = o2),
          (r2 = this.getPageForSlide(u2.index)),
          (a2 = r2 + l2 * n2),
          { page: a2, pageIndex: r2 }
        );
      }
      destroy() {
        if ([L.Destroy].includes(this.state)) return;
        this.state = L.Destroy;
        const {
          container: t2,
          viewport: e2,
          track: i2,
          slides: n2,
          panzoom: s2,
        } = this,
          o2 = this.option("classes");
        t2.removeEventListener("click", this.onClick, {
          passive: false,
          capture: false,
        }),
          t2.removeEventListener("slideTo", this.onSlideTo),
          window.removeEventListener("resize", this.onResize),
          s2 && (s2.destroy(), (this.panzoom = null)),
          n2 &&
          n2.forEach((t3) => {
            this.removeSlideEl(t3);
          }),
          this.detachPlugins(),
          e2 &&
          e2.offsetParent &&
          i2 &&
          i2.offsetParent &&
          e2.replaceWith(...i2.childNodes);
        for (const [e3, i3] of Object.entries(o2))
          "container" !== e3 && i3 && t2.classList.remove(i3);
        (this.track = null),
          (this.viewport = null),
          (this.page = 0),
          (this.slides = []);
        const a2 = this.events.get("ready");
        (this.events = /* @__PURE__ */ new Map()),
          a2 && this.events.set("ready", a2);
      }
    }
    Object.defineProperty(_, "Panzoom", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: T,
    }),
      Object.defineProperty(_, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: z,
      }),
      Object.defineProperty(_, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: B,
      });
    const N = function (t2) {
      const e2 = window.pageYOffset,
        i2 = window.pageYOffset + window.innerHeight;
      if (!x(t2)) return 0;
      const n2 = t2.getBoundingClientRect(),
        s2 = n2.y + window.pageYOffset,
        o2 = n2.y + n2.height + window.pageYOffset;
      if (e2 > o2 || i2 < s2) return 0;
      if (e2 < s2 && i2 > o2) return 100;
      if (s2 < e2 && o2 > i2) return 100;
      let a2 = n2.height;
      s2 < e2 && (a2 -= window.pageYOffset - s2), o2 > i2 && (a2 -= o2 - i2);
      const r2 = (a2 / window.innerHeight) * 100;
      return Math.round(r2);
    },
      W = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    let $;
    const X = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ].join(","),
      Y = (t2) => {
        if (t2 && W) {
          void 0 === $ &&
            document.createElement("div").focus({
              get preventScroll() {
                return ($ = true), false;
              },
            });
          try {
            if ($) t2.focus({ preventScroll: true });
            else {
              const e2 = window.pageXOffset || document.body.scrollTop,
                i2 = window.pageYOffset || document.body.scrollLeft;
              t2.focus(),
                document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
            }
          } catch (t3) { }
        }
      },
      q = {
        dragToClose: true,
        hideScrollbar: true,
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide",
          },
        },
        contentClick: "toggleZoom",
        contentDblClick: false,
        backdropClick: "close",
        animated: true,
        idle: 3500,
        showClass: "f-zoomInUp",
        hideClass: "f-fadeOut",
        commonCaption: false,
        parentEl: null,
        startIndex: 0,
        l10n: Object.assign(Object.assign({}, v), {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          MODAL: "You can close this modal content with the ESC key",
          ERROR: "Something Went Wrong, Please Try Again Later",
          IMAGE_ERROR: "Image Not Found",
          ELEMENT_NOT_FOUND: "HTML Element Not Found",
          AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
          AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
          IFRAME_ERROR: "Error Loading Page",
          TOGGLE_ZOOM: "Toggle zoom level",
          TOGGLE_THUMBS: "Toggle thumbnails",
          TOGGLE_SLIDESHOW: "Toggle slideshow",
          TOGGLE_FULLSCREEN: "Toggle full-screen mode",
          DOWNLOAD: "Download",
        }),
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
        },
        groupAll: false,
        groupAttr: "data-fancybox",
        defaultType: "image",
        defaultDisplay: "block",
        autoFocus: true,
        trapFocus: true,
        placeFocusBack: true,
        closeButton: "auto",
        keyboard: {
          Escape: "close",
          Delete: "close",
          Backspace: "close",
          PageUp: "next",
          PageDown: "prev",
          ArrowUp: "prev",
          ArrowDown: "next",
          ArrowRight: "next",
          ArrowLeft: "prev",
        },
        Fullscreen: { autoStart: false },
        compact: () =>
          window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        wheel: "zoom",
      };
    var V, Z;
    !(function (t2) {
      (t2[(t2.Init = 0)] = "Init"),
        (t2[(t2.Ready = 1)] = "Ready"),
        (t2[(t2.Closing = 2)] = "Closing"),
        (t2[(t2.CustomClosing = 3)] = "CustomClosing"),
        (t2[(t2.Destroy = 4)] = "Destroy");
    })(V || (V = {})),
      (function (t2) {
        (t2[(t2.Loading = 0)] = "Loading"),
          (t2[(t2.Opening = 1)] = "Opening"),
          (t2[(t2.Ready = 2)] = "Ready"),
          (t2[(t2.Closing = 3)] = "Closing");
      })(Z || (Z = {}));
    const G = () => {
      queueMicrotask(() => {
        (() => {
          const { slug: t2, index: e2 } = U.parseURL(),
            i2 = xt.getInstance();
          if (i2 && false !== i2.option("Hash")) {
            const n2 = i2.carousel;
            if (t2 && n2) {
              for (let e3 of n2.slides)
                if (e3.slug && e3.slug === t2) return n2.slideTo(e3.index);
              if (t2 === i2.option("slug")) return n2.slideTo(e2 - 1);
              const s2 = i2.getSlide(),
                o2 = s2 && s2.triggerEl && s2.triggerEl.dataset;
              if (o2 && o2.fancybox === t2) return n2.slideTo(e2 - 1);
            }
            (U.hasSilentClose = true), i2.close();
          }
          U.startFromUrl();
        })();
      });
    };
    class U extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "origHash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "",
          }),
          Object.defineProperty(this, "timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      onChange() {
        const t2 = this.instance,
          e2 = t2.carousel;
        this.timer && clearTimeout(this.timer);
        const i2 = t2.getSlide();
        if (!e2 || !i2) return;
        const n2 = t2.isOpeningSlide(i2),
          s2 = new URL(document.URL).hash;
        let o2,
          a2 = i2.slug || void 0,
          r2 = i2.triggerEl || void 0;
        (o2 = a2 || this.instance.option("slug")),
          !o2 && r2 && r2.dataset && (o2 = r2.dataset.fancybox);
        let l2 = "";
        o2 &&
          "true" !== o2 &&
          (l2 =
            "#" +
            o2 +
            (!a2 && e2.slides.length > 1 ? "-" + (i2.index + 1) : "")),
          n2 && (this.origHash = s2 !== l2 ? s2 : ""),
          l2 &&
          s2 !== l2 &&
          (this.timer = setTimeout(() => {
            try {
              t2.state === V.Ready &&
                window.history[n2 ? "pushState" : "replaceState"](
                  {},
                  document.title,
                  window.location.pathname + window.location.search + l2
                );
            } catch (t3) { }
          }, 300));
      }
      onClose() {
        if ((this.timer && clearTimeout(this.timer), true !== U.hasSilentClose))
          try {
            window.history.replaceState(
              {},
              document.title,
              window.location.pathname +
              window.location.search +
              (this.origHash || "")
            );
          } catch (t2) { }
      }
      attach() {
        const t2 = this.instance;
        t2.on("Carousel.ready", this.onChange),
          t2.on("Carousel.change", this.onChange),
          t2.on("close", this.onClose);
      }
      detach() {
        const t2 = this.instance;
        t2.off("Carousel.ready", this.onChange),
          t2.off("Carousel.change", this.onChange),
          t2.off("close", this.onClose);
      }
      static parseURL() {
        const t2 = window.location.hash.slice(1),
          e2 = t2.split("-"),
          i2 = e2[e2.length - 1],
          n2 =
            (i2 && /^\+?\d+$/.test(i2) && parseInt(e2.pop() || "1", 10)) || 1;
        return { hash: t2, slug: e2.join("-"), index: n2 };
      }
      static startFromUrl() {
        if (
          ((U.hasSilentClose = false),
            xt.getInstance() || false === xt.defaults.Hash)
        )
          return;
        const { hash: t2, slug: e2, index: i2 } = U.parseURL();
        if (!e2) return;
        let n2 = document.querySelector(`[data-slug="${t2}"]`);
        if (
          (n2 &&
            n2.dispatchEvent(
              new CustomEvent("click", { bubbles: true, cancelable: true })
            ),
            xt.getInstance())
        )
          return;
        const s2 = document.querySelectorAll(`[data-fancybox="${e2}"]`);
        s2.length &&
          ((n2 = s2[i2 - 1]),
            n2 &&
            n2.dispatchEvent(
              new CustomEvent("click", { bubbles: true, cancelable: true })
            ));
      }
      static destroy() {
        window.removeEventListener("hashchange", G, false);
      }
    }
    function K() {
      window.addEventListener("hashchange", G, false),
        setTimeout(() => {
          U.startFromUrl();
        }, 500);
    }
    Object.defineProperty(U, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {},
    }),
      Object.defineProperty(U, "hasSilentClose", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false,
      }),
      W &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? K()
        : document.addEventListener("DOMContentLoaded", K));
    class J extends I {
      onCreateSlide(t2, e2, i2) {
        const n2 = this.instance.optionFor(i2, "src") || "";
        i2.el &&
          "image" === i2.type &&
          "string" == typeof n2 &&
          this.setImage(i2, n2);
      }
      onRemoveSlide(t2, e2, i2) {
        i2.panzoom && i2.panzoom.destroy(),
          (i2.panzoom = void 0),
          (i2.imageEl = void 0);
      }
      onChange(t2, e2, i2, n2) {
        for (const t3 of e2.slides) {
          const e3 = t3.panzoom;
          e3 && t3.index !== i2 && e3.reset(0.35);
        }
      }
      onClose() {
        var t2;
        const e2 = this.instance,
          i2 = e2.container,
          n2 = e2.getSlide();
        if (!i2 || !i2.parentElement || !n2) return;
        const { el: s2, contentEl: o2, panzoom: a2 } = n2,
          r2 = n2.thumbElSrc;
        if (
          !s2 ||
          !r2 ||
          !o2 ||
          !a2 ||
          a2.isContentLoading ||
          a2.state === g.Init ||
          a2.state === g.Destroy
        )
          return;
        a2.updateMetrics();
        let l2 = this.getZoomInfo(n2);
        if (!l2) return;
        (this.instance.state = V.CustomClosing),
          i2.classList.remove("is-zooming-in"),
          i2.classList.add("is-zooming-out"),
          (o2.style.backgroundImage = `url('${r2}')`);
        const c2 = i2.getBoundingClientRect();
        1 ===
          ((null === (t2 = window.visualViewport) || void 0 === t2
            ? void 0
            : t2.scale) || 1) &&
          Object.assign(i2.style, {
            position: "absolute",
            top: `${window.pageYOffset}px`,
            left: `${window.pageXOffset}px`,
            bottom: "auto",
            right: "auto",
            width: `${c2.width}px`,
            height: `${c2.height}px`,
            overflow: "hidden",
          });
        const { x: h2, y: d2, scale: u2, opacity: p2 } = l2;
        if (p2) {
          const t3 = ((t4, e3, i3, n3) => {
            const s3 = e3 - t4,
              o3 = n3 - i3;
            return (e4) => i3 + (((e4 - t4) / s3) * o3 || 0);
          })(a2.scale, u2, 1, 0);
          a2.on("afterTransform", () => {
            o2.style.opacity = t3(a2.scale) + "";
          });
        }
        a2.on("endAnimation", () => {
          e2.destroy();
        }),
          (a2.target.a = u2),
          (a2.target.b = 0),
          (a2.target.c = 0),
          (a2.target.d = u2),
          a2.panTo({
            x: h2,
            y: d2,
            scale: u2,
            friction: p2 ? 0.2 : 0.33,
            ignoreBounds: true,
          }),
          a2.isResting && e2.destroy();
      }
      setImage(t2, e2) {
        const i2 = this.instance;
        (t2.src = e2),
          this.process(t2, e2).then(
            (e3) => {
              var n2;
              const s2 = t2.contentEl,
                o2 = t2.imageEl,
                a2 = t2.thumbElSrc;
              if (i2.isClosing() || !s2 || !o2) return;
              s2.offsetHeight;
              const r2 = !!i2.isOpeningSlide(t2) && this.getZoomInfo(t2);
              if (this.option("protected")) {
                null === (n2 = t2.el) ||
                  void 0 === n2 ||
                  n2.addEventListener("contextmenu", (t3) => {
                    t3.preventDefault();
                  });
                const e4 = document.createElement("div");
                E(e4, "fancybox-protected"), s2.appendChild(e4);
              }
              if (a2 && r2) {
                const n3 = e3.contentRect,
                  o3 = Math.max(n3.fullWidth, n3.fullHeight);
                let c2 = null;
                !r2.opacity &&
                  o3 > 1200 &&
                  ((c2 = document.createElement("img")),
                    E(c2, "fancybox-ghost"),
                    (c2.src = a2),
                    s2.appendChild(c2));
                const h2 = () => {
                  c2 &&
                    (E(c2, "f-fadeFastOut"),
                      setTimeout(() => {
                        c2 && (c2.remove(), (c2 = null));
                      }, 200));
                };
                ((l2 = a2),
                  new Promise((t3, e4) => {
                    const i3 = new Image();
                    (i3.onload = t3), (i3.onerror = e4), (i3.src = l2);
                  })).then(
                    () => {
                      (t2.state = Z.Opening),
                        this.instance.emit("reveal", t2),
                        this.zoomIn(t2).then(
                          () => {
                            h2(), this.instance.done(t2);
                          },
                          () => {
                            i2.hideLoading(t2);
                          }
                        ),
                        c2 &&
                        setTimeout(
                          () => {
                            h2();
                          },
                          o3 > 2500 ? 800 : 200
                        );
                    },
                    () => {
                      i2.hideLoading(t2), i2.revealContent(t2);
                    }
                  );
              } else {
                const n3 = this.optionFor(t2, "initialSize"),
                  s3 = this.optionFor(t2, "zoom"),
                  o3 = {
                    event: i2.prevMouseMoveEvent || i2.options.event,
                    friction: s3 ? 0.12 : 0,
                  };
                let a3 = i2.optionFor(t2, "showClass") || void 0,
                  r3 = true;
                i2.isOpeningSlide(t2) &&
                  ("full" === n3
                    ? e3.zoomToFull(o3)
                    : "cover" === n3
                      ? e3.zoomToCover(o3)
                      : "max" === n3
                        ? e3.zoomToMax(o3)
                        : (r3 = false),
                    e3.stop("current")),
                  r3 && a3 && (a3 = e3.isDragging ? "f-fadeIn" : ""),
                  i2.revealContent(t2, a3);
              }
              var l2;
            },
            () => {
              i2.setError(t2, "{{IMAGE_ERROR}}");
            }
          );
      }
      process(t2, e2) {
        return new Promise((i2, s2) => {
          var o2, a2;
          const r2 = this.instance,
            l2 = t2.el;
          r2.clearContent(t2), r2.showLoading(t2);
          let c2 = this.optionFor(t2, "content");
          "string" == typeof c2 && (c2 = n(c2)),
            (c2 && x(c2)) ||
            ((c2 = document.createElement("img")),
              c2 instanceof HTMLImageElement &&
              ((c2.src = e2 || ""),
                (c2.alt =
                  (null === (o2 = t2.caption) || void 0 === o2
                    ? void 0
                    : o2.replace(/<[^>]+>/gi, "").substring(0, 1e3)) ||
                  `Image ${t2.index + 1} of ${null === (a2 = r2.carousel) || void 0 === a2
                    ? void 0
                    : a2.pages.length
                  }`),
                (c2.draggable = false),
                t2.srcset && c2.setAttribute("srcset", t2.srcset)),
              t2.sizes && c2.setAttribute("sizes", t2.sizes)),
            c2.classList.add("fancybox-image"),
            (t2.imageEl = c2),
            r2.setContent(t2, c2, false);
          t2.panzoom = new T(
            l2,
            u({}, this.option("Panzoom") || {}, {
              content: c2,
              width: r2.optionFor(t2, "width", "auto"),
              height: r2.optionFor(t2, "height", "auto"),
              wheel: () => {
                const t3 = r2.option("wheel");
                return ("zoom" === t3 || "pan" == t3) && t3;
              },
              click: (e3, i3) => {
                var n2, s3;
                if (r2.isCompact || r2.isClosing()) return false;
                if (
                  t2.index !==
                  (null === (n2 = r2.getSlide()) || void 0 === n2
                    ? void 0
                    : n2.index)
                )
                  return false;
                let o3 =
                  !i3 ||
                  (i3.target &&
                    (null === (s3 = t2.contentEl) || void 0 === s3
                      ? void 0
                      : s3.contains(i3.target)));
                return (
                  r2.option(o3 ? "contentClick" : "backdropClick") || false
                );
              },
              dblClick: () =>
                r2.isCompact
                  ? "toggleZoom"
                  : r2.option("contentDblClick") || false,
              spinner: false,
              panOnlyZoomed: true,
              wheelLimit: 1 / 0,
              transformParent: true,
              on: {
                ready: (t3) => {
                  i2(t3);
                },
                error: () => {
                  s2();
                },
                destroy: () => {
                  s2();
                },
              },
            })
          );
        });
      }
      zoomIn(t2) {
        return new Promise((e2, i2) => {
          const n2 = this.instance,
            s2 = n2.container,
            { panzoom: o2, contentEl: a2, el: r2 } = t2;
          o2 && o2.updateMetrics();
          const l2 = this.getZoomInfo(t2);
          if (!(l2 && r2 && a2 && o2 && s2)) return void i2();
          const { x: c2, y: h2, scale: d2, opacity: u2 } = l2,
            p2 = () => {
              t2.state !== Z.Closing &&
                (u2 &&
                  (a2.style.opacity =
                    Math.max(Math.min(1, 1 - (1 - o2.scale) / (1 - d2)), 0) +
                    ""),
                  o2.scale >= 1 && o2.scale > o2.targetScale - 0.1 && e2(o2));
            },
            f2 = (t3) => {
              S(s2, "is-zooming-in"),
                t3.scale < 0.99 ||
                t3.scale > 1.01 ||
                ((a2.style.opacity = ""),
                  t3.off("endAnimation", f2),
                  t3.off("touchStart", f2),
                  t3.off("afterTransform", p2),
                  e2(t3));
            };
          o2.on("endAnimation", f2),
            o2.on("touchStart", f2),
            o2.on("afterTransform", p2),
            o2.on(["error", "destroy"], () => {
              i2();
            }),
            o2.panTo({
              x: c2,
              y: h2,
              scale: d2,
              friction: 0,
              ignoreBounds: true,
            }),
            o2.stop("current");
          const m2 = {
            event:
              "mousemove" === o2.panMode
                ? n2.prevMouseMoveEvent || n2.options.event
                : void 0,
          },
            g2 = this.optionFor(t2, "initialSize");
          E(s2, "is-zooming-in"),
            n2.hideLoading(t2),
            "full" === g2
              ? o2.zoomToFull(m2)
              : "cover" === g2
                ? o2.zoomToCover(m2)
                : "max" === g2
                  ? o2.zoomToMax(m2)
                  : o2.reset(0.172);
        });
      }
      getZoomInfo(t2) {
        var e2;
        const { el: i2, imageEl: n2, thumbEl: s2, panzoom: o2 } = t2;
        if (
          !i2 ||
          !n2 ||
          !s2 ||
          !o2 ||
          N(s2) < 3 ||
          !this.optionFor(t2, "zoom") ||
          this.instance.state === V.Destroy
        )
          return false;
        if (
          1 !==
          ((null === (e2 = window.visualViewport) || void 0 === e2
            ? void 0
            : e2.scale) || 1)
        )
          return false;
        let {
          top: a2,
          left: r2,
          width: l2,
          height: c2,
        } = s2.getBoundingClientRect(),
          { top: h2, left: d2, fitWidth: u2, fitHeight: p2 } = o2.contentRect;
        if (!(l2 && c2 && u2 && p2)) return false;
        const f2 = o2.container.getBoundingClientRect();
        (d2 += f2.left), (h2 += f2.top);
        const m2 = -1 * (d2 + 0.5 * u2 - (r2 + 0.5 * l2)),
          g2 = -1 * (h2 + 0.5 * p2 - (a2 + 0.5 * c2)),
          b2 = l2 / u2;
        let v2 = this.option("zoomOpacity") || false;
        return (
          "auto" === v2 && (v2 = Math.abs(l2 / c2 - u2 / p2) > 0.1),
          { x: m2, y: g2, scale: b2, opacity: v2 }
        );
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("Carousel.change", t2.onChange),
          e2.on("Carousel.createSlide", t2.onCreateSlide),
          e2.on("Carousel.removeSlide", t2.onRemoveSlide),
          e2.on("close", t2.onClose);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("Carousel.change", t2.onChange),
          e2.off("Carousel.createSlide", t2.onCreateSlide),
          e2.off("Carousel.removeSlide", t2.onRemoveSlide),
          e2.off("close", t2.onClose);
      }
    }
    Object.defineProperty(J, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        initialSize: "fit",
        Panzoom: { maxScale: 1 },
        protected: false,
        zoom: true,
        zoomOpacity: "auto",
      },
    });
    const Q = (t2, e2 = {}) => {
      const i2 = new URL(t2),
        n2 = new URLSearchParams(i2.search),
        s2 = new URLSearchParams();
      for (const [t3, i3] of [...n2, ...Object.entries(e2)]) {
        let e3 = i3.toString();
        "t" === t3
          ? s2.set("start", parseInt(e3).toString())
          : s2.set(t3, e3);
      }
      let o2 = s2.toString(),
        a2 = t2.match(/#t=((.*)?\d+s)/);
      return a2 && (o2 += `#t=${a2[1]}`), o2;
    },
      tt = {
        ajax: null,
        autoSize: true,
        iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
        preload: true,
        videoAutoplay: true,
        videoRatio: 16 / 9,
        videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
        videoFormat: "",
        vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
        youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
      },
      et = [
        "image",
        "html",
        "ajax",
        "inline",
        "clone",
        "iframe",
        "map",
        "pdf",
        "html5video",
        "youtube",
        "vimeo",
        "video",
      ];
    class it extends I {
      onInitSlide(t2, e2, i2) {
        this.processType(i2);
      }
      onCreateSlide(t2, e2, i2) {
        this.setContent(i2);
      }
      onRemoveSlide(t2, e2, i2) {
        i2.xhr && (i2.xhr.abort(), (i2.xhr = null));
        const n2 = i2.iframeEl;
        n2 &&
          ((n2.onload = n2.onerror = null),
            (n2.src = "//about:blank"),
            (i2.iframeEl = null));
        const s2 = i2.contentEl,
          o2 = i2.placeholderEl;
        if ("inline" === i2.type && s2 && o2)
          s2.classList.remove("fancybox__content"),
            "none" !== s2.style.display && (s2.style.display = "none"),
            o2.parentNode && o2.parentNode.insertBefore(s2, o2),
            o2.remove(),
            (i2.contentEl = void 0),
            (i2.placeholderEl = void 0);
        else
          for (; i2.el && i2.el.firstChild;)
            i2.el.removeChild(i2.el.firstChild);
      }
      onSelectSlide(t2, e2, i2) {
        i2.state === Z.Ready && this.playVideo();
      }
      onUnselectSlide(t2, e2, i2) {
        var n2, s2;
        if ("html5video" === i2.type) {
          try {
            null ===
              (s2 =
                null === (n2 = i2.el) || void 0 === n2
                  ? void 0
                  : n2.querySelector("video")) ||
              void 0 === s2 ||
              s2.pause();
          } catch (t3) { }
          return;
        }
        let o2;
        "vimeo" === i2.type
          ? (o2 = { method: "pause", value: "true" })
          : "youtube" === i2.type &&
          (o2 = { event: "command", func: "pauseVideo" }),
          o2 &&
          i2.iframeEl &&
          i2.iframeEl.contentWindow &&
          i2.iframeEl.contentWindow.postMessage(JSON.stringify(o2), "*"),
          i2.poller && clearTimeout(i2.poller);
      }
      onDone(t2, e2) {
        t2.isCurrentSlide(e2) && !t2.isClosing() && this.playVideo();
      }
      onRefresh(t2, e2) {
        e2.slides.forEach((t3) => {
          t3.el && (this.setAspectRatio(t3), this.resizeIframe(t3));
        });
      }
      onMessage(t2) {
        try {
          let e2 = JSON.parse(t2.data);
          if ("https://player.vimeo.com" === t2.origin) {
            if ("ready" === e2.event)
              for (let e3 of Array.from(
                document.getElementsByClassName("fancybox__iframe")
              ))
                e3 instanceof HTMLIFrameElement &&
                  e3.contentWindow === t2.source &&
                  (e3.dataset.ready = "true");
          } else if (
            t2.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
            "onReady" === e2.event
          ) {
            const t3 = document.getElementById(e2.id);
            t3 && (t3.dataset.ready = "true");
          }
        } catch (t3) { }
      }
      loadAjaxContent(t2) {
        const e2 = this.instance.optionFor(t2, "src") || "";
        this.instance.showLoading(t2);
        const i2 = this.instance,
          n2 = new XMLHttpRequest();
        i2.showLoading(t2),
          (n2.onreadystatechange = function () {
            n2.readyState === XMLHttpRequest.DONE &&
              i2.state === V.Ready &&
              (i2.hideLoading(t2),
                200 === n2.status
                  ? i2.setContent(t2, n2.responseText)
                  : i2.setError(
                    t2,
                    404 === n2.status
                      ? "{{AJAX_NOT_FOUND}}"
                      : "{{AJAX_FORBIDDEN}}"
                  ));
          });
        const s2 = t2.ajax || null;
        n2.open(s2 ? "POST" : "GET", e2 + ""),
          n2.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          n2.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          n2.send(s2),
          (t2.xhr = n2);
      }
      setInlineContent(t2) {
        let e2 = null;
        if (x(t2.src)) e2 = t2.src;
        else if ("string" == typeof t2.src) {
          const i2 = t2.src.split("#", 2).pop();
          e2 = i2 ? document.getElementById(i2) : null;
        }
        if (e2) {
          if ("clone" === t2.type || e2.closest(".fancybox__slide")) {
            e2 = e2.cloneNode(true);
            const i2 = e2.dataset.animationName;
            i2 && (e2.classList.remove(i2), delete e2.dataset.animationName);
            let n2 = e2.getAttribute("id");
            (n2 = n2
              ? `${n2}--clone`
              : `clone-${this.instance.id}-${t2.index}`),
              e2.setAttribute("id", n2);
          } else if (e2.parentNode) {
            const i2 = document.createElement("div");
            i2.classList.add("fancybox-placeholder"),
              e2.parentNode.insertBefore(i2, e2),
              (t2.placeholderEl = i2);
          }
          this.instance.setContent(t2, e2);
        } else this.instance.setError(t2, "{{ELEMENT_NOT_FOUND}}");
      }
      setIframeContent(t2) {
        const { src: e2, el: i2 } = t2;
        if (!e2 || "string" != typeof e2 || !i2) return;
        const n2 = this.instance,
          s2 = document.createElement("iframe");
        (s2.className = "fancybox__iframe"),
          s2.setAttribute("id", `fancybox__iframe_${n2.id}_${t2.index}`);
        for (const [e3, i3] of Object.entries(
          this.optionFor(t2, "iframeAttr") || {}
        ))
          s2.setAttribute(e3, i3);
        (s2.onerror = () => {
          n2.setError(t2, "{{IFRAME_ERROR}}");
        }),
          (t2.iframeEl = s2);
        const o2 = this.optionFor(t2, "preload");
        if (
          (i2.classList.add("is-loading"), "iframe" !== t2.type || false === o2)
        )
          return (
            s2.setAttribute("src", t2.src + ""),
            this.resizeIframe(t2),
            void n2.setContent(t2, s2)
          );
        n2.showLoading(t2),
          (s2.onload = () => {
            if (!s2.src.length) return;
            const e3 = "true" !== s2.dataset.ready;
            (s2.dataset.ready = "true"),
              this.resizeIframe(t2),
              e3 ? n2.revealContent(t2) : n2.hideLoading(t2);
          }),
          s2.setAttribute("src", e2),
          n2.setContent(t2, s2, false);
      }
      resizeIframe(t2) {
        const e2 = t2.iframeEl,
          i2 = null == e2 ? void 0 : e2.parentElement;
        if (!e2 || !i2) return;
        let n2 = t2.autoSize,
          s2 = t2.width || 0,
          o2 = t2.height || 0;
        s2 && o2 && (n2 = false);
        const a2 = i2 && i2.style;
        if (false !== t2.preload && false !== n2 && a2)
          try {
            const t3 = window.getComputedStyle(i2),
              n3 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight),
              r2 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom),
              l2 = e2.contentWindow;
            if (l2) {
              const t4 = l2.document,
                e3 = t4.getElementsByTagName("html")[0],
                i3 = t4.body;
              (a2.width = ""),
                (i3.style.overflow = "hidden"),
                (s2 = s2 || e3.scrollWidth + n3),
                (a2.width = `${s2}px`),
                (i3.style.overflow = ""),
                (a2.flex = "0 0 auto"),
                (a2.height = `${i3.scrollHeight}px`),
                (o2 = e3.scrollHeight + r2);
            }
          } catch (t3) { }
        if (s2 || o2) {
          const t3 = { flex: "0 1 auto", width: "", height: "" };
          s2 && (t3.width = `${s2}px`),
            o2 && (t3.height = `${o2}px`),
            Object.assign(a2, t3);
        }
      }
      playVideo() {
        const t2 = this.instance.getSlide();
        if (!t2) return;
        const { el: e2 } = t2;
        if (!e2 || !e2.offsetParent) return;
        if (!this.optionFor(t2, "videoAutoplay")) return;
        if ("html5video" === t2.type)
          try {
            const t3 = e2.querySelector("video");
            if (t3) {
              const e3 = t3.play();
              void 0 !== e3 &&
                e3
                  .then(() => { })
                  .catch((e4) => {
                    (t3.muted = true), t3.play();
                  });
            }
          } catch (t3) { }
        if ("youtube" !== t2.type && "vimeo" !== t2.type) return;
        const i2 = () => {
          if (t2.iframeEl && t2.iframeEl.contentWindow) {
            let e3;
            if ("true" === t2.iframeEl.dataset.ready)
              return (
                (e3 =
                  "youtube" === t2.type
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
                e3 &&
                t2.iframeEl.contentWindow.postMessage(
                  JSON.stringify(e3),
                  "*"
                ),
                void (t2.poller = void 0)
              );
            "youtube" === t2.type &&
              ((e3 = {
                event: "listening",
                id: t2.iframeEl.getAttribute("id"),
              }),
                t2.iframeEl.contentWindow.postMessage(JSON.stringify(e3), "*"));
          }
          t2.poller = setTimeout(i2, 250);
        };
        i2();
      }
      processType(t2) {
        if (t2.html)
          return (t2.type = "html"), (t2.src = t2.html), void (t2.html = "");
        const e2 = this.instance.optionFor(t2, "src", "");
        if (!e2 || "string" != typeof e2) return;
        let i2 = t2.type,
          n2 = null;
        if (
          (n2 = e2.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const s2 = this.optionFor(t2, "youtube"),
            { nocookie: o2 } = s2,
            a2 = (function (t3, e3) {
              var i3 = {};
              for (var n3 in t3)
                Object.prototype.hasOwnProperty.call(t3, n3) &&
                  e3.indexOf(n3) < 0 &&
                  (i3[n3] = t3[n3]);
              if (
                null != t3 &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var s3 = 0;
                for (
                  n3 = Object.getOwnPropertySymbols(t3);
                  s3 < n3.length;
                  s3++
                )
                  e3.indexOf(n3[s3]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(t3, n3[s3]) &&
                    (i3[n3[s3]] = t3[n3[s3]]);
              }
              return i3;
            })(s2, ["nocookie"]),
            r2 = `www.youtube${o2 ? "-nocookie" : ""}.com`,
            l2 = Q(e2, a2),
            c2 = encodeURIComponent(n2[2]);
          (t2.videoId = c2),
            (t2.src = `https://${r2}/embed/${c2}?${l2}`),
            (t2.thumbSrc =
              t2.thumbSrc || `https://i.ytimg.com/vi/${c2}/mqdefault.jpg`),
            (i2 = "youtube");
        } else if (
          (n2 = e2.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          ))
        ) {
          const s2 = Q(e2, this.optionFor(t2, "vimeo")),
            o2 = encodeURIComponent(n2[1]),
            a2 = n2[4] || "";
          (t2.videoId = o2),
            (t2.src = `https://player.vimeo.com/video/${o2}?${a2 ? `h=${a2}${s2 ? "&" : ""}` : ""
              }${s2}`),
            (i2 = "vimeo");
        }
        if (!i2 && t2.triggerEl) {
          const e3 = t2.triggerEl.dataset.type;
          et.includes(e3) && (i2 = e3);
        }
        i2 ||
          ("string" == typeof e2 &&
            ("#" === e2.charAt(0)
              ? (i2 = "inline")
              : (n2 = e2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((i2 = "html5video"),
                  (t2.videoFormat =
                    t2.videoFormat ||
                    "video/" + ("ogv" === n2[1] ? "ogg" : n2[1])))
                : e2.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
                  ? (i2 = "image")
                  : e2.match(/\.(pdf)((\?|#).*)?$/i)
                    ? (i2 = "pdf")
                    : (n2 = e2.match(
                      /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                    ))
                      ? ((t2.src = `https://maps.google.${n2[1]}/?ll=${(n2[2]
                        ? n2[2] +
                        "&z=" +
                        Math.floor(parseFloat(n2[3])) +
                        (n2[4] ? n2[4].replace(/^\//, "&") : "")
                        : n2[4] + ""
                      ).replace(/\?/, "&")}&output=${n2[4] && n2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
                        }`),
                        (i2 = "map"))
                      : (n2 = e2.match(
                        /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
                      )) &&
                      ((t2.src = `https://maps.google.${n2[1]}/maps?q=${n2[2]
                        .replace("query=", "q=")
                        .replace("api=1", "")}&output=embed`),
                        (i2 = "map")))),
          (i2 = i2 || this.instance.option("defaultType")),
          (t2.type = i2),
          "image" === i2 && (t2.thumbSrc = t2.thumbSrc || t2.src);
      }
      setContent(t2) {
        const e2 = this.instance.optionFor(t2, "src") || "";
        if (t2 && t2.type && e2) {
          switch (t2.type) {
            case "html":
              this.instance.setContent(t2, e2);
              break;
            case "html5video":
              const i2 = this.option("videoTpl");
              i2 &&
                this.instance.setContent(
                  t2,
                  i2
                    .replace(/\{\{src\}\}/gi, e2 + "")
                    .replace(
                      /\{\{format\}\}/gi,
                      this.optionFor(t2, "videoFormat") || ""
                    )
                    .replace(/\{\{poster\}\}/gi, t2.poster || t2.thumbSrc || "")
                );
              break;
            case "inline":
            case "clone":
              this.setInlineContent(t2);
              break;
            case "ajax":
              this.loadAjaxContent(t2);
              break;
            case "pdf":
            case "map":
            case "youtube":
            case "vimeo":
              t2.preload = false;
            case "iframe":
              this.setIframeContent(t2);
          }
          this.setAspectRatio(t2);
        }
      }
      setAspectRatio(t2) {
        var e2;
        const i2 = t2.contentEl,
          n2 = this.optionFor(t2, "videoRatio"),
          s2 =
            null === (e2 = t2.el) || void 0 === e2
              ? void 0
              : e2.getBoundingClientRect();
        if (
          !(
            i2 &&
            s2 &&
            n2 &&
            1 !== n2 &&
            t2.type &&
            ["video", "youtube", "vimeo", "html5video"].includes(t2.type)
          )
        )
          return;
        const o2 = s2.width,
          a2 = s2.height;
        (i2.style.aspectRatio = n2 + ""),
          (i2.style.width = o2 / a2 > n2 ? "auto" : ""),
          (i2.style.height = o2 / a2 > n2 ? "" : "auto");
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("Carousel.initSlide", t2.onInitSlide),
          e2.on("Carousel.createSlide", t2.onCreateSlide),
          e2.on("Carousel.removeSlide", t2.onRemoveSlide),
          e2.on("Carousel.selectSlide", t2.onSelectSlide),
          e2.on("Carousel.unselectSlide", t2.onUnselectSlide),
          e2.on("Carousel.Panzoom.refresh", t2.onRefresh),
          e2.on("done", t2.onDone),
          window.addEventListener("message", t2.onMessage);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("Carousel.initSlide", t2.onInitSlide),
          e2.off("Carousel.createSlide", t2.onCreateSlide),
          e2.off("Carousel.removeSlide", t2.onRemoveSlide),
          e2.off("Carousel.selectSlide", t2.onSelectSlide),
          e2.off("Carousel.unselectSlide", t2.onUnselectSlide),
          e2.off("Carousel.Panzoom.refresh", t2.onRefresh),
          e2.off("done", t2.onDone),
          window.removeEventListener("message", t2.onMessage);
      }
    }
    Object.defineProperty(it, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: tt,
    });
    class nt extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ready",
          }),
          Object.defineProperty(this, "inHover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false,
          }),
          Object.defineProperty(this, "timer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "progressBar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      get isActive() {
        return "ready" !== this.state;
      }
      onReady(t2) {
        this.option("autoStart") &&
          (t2.isInfinite || t2.page < t2.pages.length - 1) &&
          this.start();
      }
      onChange() {
        var t2;
        (null === (t2 = this.instance.panzoom) || void 0 === t2
          ? void 0
          : t2.isResting) || (this.removeProgressBar(), this.pause());
      }
      onSettle() {
        this.resume();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
      onMouseEnter() {
        (this.inHover = true), this.pause();
      }
      onMouseLeave() {
        var t2;
        (this.inHover = false),
          (null === (t2 = this.instance.panzoom) || void 0 === t2
            ? void 0
            : t2.isResting) && this.resume();
      }
      onTimerEnd() {
        const t2 = this.instance;
        "play" === this.state &&
          (t2.isInfinite || t2.page !== t2.pages.length - 1
            ? t2.slideNext()
            : t2.slideTo(0));
      }
      removeProgressBar() {
        this.progressBar &&
          (this.progressBar.remove(), (this.progressBar = null));
      }
      createProgressBar() {
        var t2;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const e2 = this.instance,
          i2 =
            (null === (t2 = e2.pages[e2.page]) || void 0 === t2
              ? void 0
              : t2.slides) || [];
        let n2 = this.option("progressParentEl");
        if (
          (n2 || (n2 = (1 === i2.length ? i2[0].el : null) || e2.viewport), !n2)
        )
          return null;
        const s2 = document.createElement("div");
        return (
          E(s2, "f-progress"),
          n2.prepend(s2),
          (this.progressBar = s2),
          s2.offsetHeight,
          s2
        );
      }
      set() {
        const t2 = this,
          e2 = t2.instance;
        if (e2.pages.length < 2) return;
        if (t2.timer) return;
        const i2 = t2.option("timeout");
        (t2.state = "play"), E(e2.container, "has-autoplay");
        let n2 = t2.createProgressBar();
        n2 &&
          ((n2.style.transitionDuration = `${i2}ms`),
            (n2.style.transform = "scaleX(1)")),
          (t2.timer = setTimeout(() => {
            (t2.timer = null), t2.inHover || t2.onTimerEnd();
          }, i2)),
          t2.emit("set");
      }
      clear() {
        const t2 = this;
        t2.timer && (clearTimeout(t2.timer), (t2.timer = null)),
          t2.removeProgressBar();
      }
      start() {
        const t2 = this;
        if ((t2.set(), "ready" !== t2.state)) {
          if (t2.option("pauseOnHover")) {
            const e2 = t2.instance.container;
            e2.addEventListener("mouseenter", t2.onMouseEnter, false),
              e2.addEventListener("mouseleave", t2.onMouseLeave, false);
          }
          document.addEventListener(
            "visibilitychange",
            t2.onVisibilityChange,
            false
          ),
            t2.emit("start");
        }
      }
      stop() {
        const t2 = this,
          e2 = t2.state,
          i2 = t2.instance.container;
        t2.clear(),
          (t2.state = "ready"),
          i2.removeEventListener("mouseenter", t2.onMouseEnter, false),
          i2.removeEventListener("mouseleave", t2.onMouseLeave, false),
          document.removeEventListener(
            "visibilitychange",
            t2.onVisibilityChange,
            false
          ),
          S(i2, "has-autoplay"),
          "ready" !== e2 && t2.emit("stop");
      }
      pause() {
        const t2 = this;
        "play" === t2.state &&
          ((t2.state = "pause"), t2.clear(), t2.emit("pause"));
      }
      resume() {
        const t2 = this,
          e2 = t2.instance;
        if (e2.isInfinite || e2.page !== e2.pages.length - 1)
          if ("play" !== t2.state) {
            if ("pause" === t2.state && !t2.inHover) {
              const e3 = new Event("resume", {
                bubbles: true,
                cancelable: true,
              });
              t2.emit("resume", e3), e3.defaultPrevented || t2.set();
            }
          } else t2.set();
        else t2.stop();
      }
      toggle() {
        "play" === this.state || "pause" === this.state
          ? this.stop()
          : this.start();
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("ready", t2.onReady),
          e2.on("Panzoom.startAnimation", t2.onChange),
          e2.on("Panzoom.endAnimation", t2.onSettle),
          e2.on("Panzoom.touchMove", t2.onChange);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("ready", t2.onReady),
          e2.off("Panzoom.startAnimation", t2.onChange),
          e2.off("Panzoom.endAnimation", t2.onSettle),
          e2.off("Panzoom.touchMove", t2.onChange),
          t2.stop();
      }
    }
    Object.defineProperty(nt, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        autoStart: true,
        pauseOnHover: true,
        progressParentEl: null,
        showProgress: true,
        timeout: 3e3,
      },
    });
    class st extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      onPrepare(t2) {
        const e2 = t2.carousel;
        if (!e2) return;
        const i2 = t2.container;
        i2 &&
          ((e2.options.Autoplay = u(
            { autoStart: false },
            this.option("Autoplay") || {},
            {
              pauseOnHover: false,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  t2.emit("startSlideshow");
                },
                set: (e3) => {
                  var n2;
                  i2.classList.add("has-slideshow"),
                    (null === (n2 = t2.getSlide()) || void 0 === n2
                      ? void 0
                      : n2.state) !== Z.Ready && e3.pause();
                },
                stop: () => {
                  i2.classList.remove("has-slideshow"),
                    t2.isCompact || t2.endIdle(),
                    t2.emit("endSlideshow");
                },
                resume: (e3, i3) => {
                  var n2, s2, o2;
                  !i3 ||
                    !i3.cancelable ||
                    ((null === (n2 = t2.getSlide()) || void 0 === n2
                      ? void 0
                      : n2.state) === Z.Ready &&
                      (null ===
                        (o2 =
                          null === (s2 = t2.carousel) || void 0 === s2
                            ? void 0
                            : s2.panzoom) || void 0 === o2
                        ? void 0
                        : o2.isResting)) ||
                    i3.preventDefault();
                },
              },
            }
          )),
            e2.attachPlugins({ Autoplay: nt }),
            (this.ref = e2.plugins.Autoplay));
      }
      onReady(t2) {
        const e2 = t2.carousel,
          i2 = this.ref;
        e2 &&
          i2 &&
          this.option("playOnStart") &&
          (e2.isInfinite || e2.page < e2.pages.length - 1) &&
          i2.start();
      }
      onDone(t2, e2) {
        const i2 = this.ref;
        if (!i2) return;
        const n2 = e2.panzoom;
        n2 &&
          n2.on("startAnimation", () => {
            t2.isCurrentSlide(e2) && i2.stop();
          }),
          t2.isCurrentSlide(e2) && i2.resume();
      }
      onKeydown(t2, e2) {
        var i2;
        const n2 = this.ref;
        n2 &&
          e2 === this.option("key") &&
          "BUTTON" !==
          (null === (i2 = document.activeElement) || void 0 === i2
            ? void 0
            : i2.nodeName) &&
          n2.toggle();
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("Carousel.init", t2.onPrepare),
          e2.on("Carousel.ready", t2.onReady),
          e2.on("done", t2.onDone),
          e2.on("keydown", t2.onKeydown);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("Carousel.init", t2.onPrepare),
          e2.off("Carousel.ready", t2.onReady),
          e2.off("done", t2.onDone),
          e2.off("keydown", t2.onKeydown);
      }
    }
    Object.defineProperty(st, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        key: " ",
        playOnStart: false,
        progressParentEl: (t2) => {
          var e2;
          return (
            (null === (e2 = t2.instance.container) || void 0 === e2
              ? void 0
              : e2.querySelector(
                ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
              )) || t2.instance.container
          );
        },
        timeout: 3e3,
      },
    });
    const ot = {
      classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs",
      },
      minCount: 2,
      parentEl: null,
      thumbTpl:
        '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
      type: "modern",
    };
    var at;
    !(function (t2) {
      (t2[(t2.Init = 0)] = "Init"),
        (t2[(t2.Ready = 1)] = "Ready"),
        (t2[(t2.Hidden = 2)] = "Hidden"),
        (t2[(t2.Disabled = 3)] = "Disabled");
    })(at || (at = {}));
    let rt = class extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "modern",
          }),
          Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "panzoom", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "thumbWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "thumbClipWidth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "thumbHeight", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "thumbGap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "thumbExtraGap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "shouldCenter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true,
          }),
          Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: at.Init,
          });
      }
      formatThumb(t2, e2) {
        return this.instance.localize(e2, [
          ["%i", t2.index],
          ["%d", t2.index + 1],
          [
            "%s",
            t2.thumbSrc ||
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          ],
        ]);
      }
      getSlides() {
        const t2 = [],
          e2 = this.option("thumbTpl") || "";
        if (e2)
          for (const i2 of this.instance.slides || []) {
            let n2 = "";
            i2.type &&
              ((n2 = `for-${i2.type}`),
                i2.type &&
                ["video", "youtube", "vimeo", "html5video"].includes(i2.type) &&
                (n2 += " for-video")),
              t2.push({ html: this.formatThumb(i2, e2), customClass: n2 });
          }
        return t2;
      }
      onInitSlide(t2, e2) {
        const i2 = e2.el;
        i2 &&
          ((e2.thumbSrc = i2.dataset.thumbSrc || e2.thumbSrc || ""),
            (e2.thumbClipWidth =
              parseFloat(i2.dataset.thumbClipWidth || "") ||
              e2.thumbClipWidth ||
              0),
            (e2.thumbHeight =
              parseFloat(i2.dataset.thumbHeight || "") || e2.thumbHeight || 0));
      }
      onInitSlides() {
        this.state === at.Init && this.build();
      }
      onRefreshM() {
        this.refreshModern();
      }
      onChangeM() {
        "modern" === this.type &&
          ((this.shouldCenter = true), this.centerModern());
      }
      onClickModern(t2) {
        t2.preventDefault(), t2.stopPropagation();
        const e2 = this.instance,
          i2 = e2.page,
          n2 = (t3) => {
            if (t3) {
              const e3 = t3.closest("[data-carousel-index]");
              if (e3) return parseInt(e3.dataset.carouselIndex || "", 10) || 0;
            }
            return -1;
          },
          s2 = (t3, e3) => {
            const i3 = document.elementFromPoint(t3, e3);
            return i3 ? n2(i3) : -1;
          };
        let o2 = n2(t2.target);
        o2 < 0 &&
          ((o2 = s2(t2.clientX + this.thumbGap, t2.clientY)),
            o2 === i2 && (o2 = i2 - 1)),
          o2 < 0 &&
          ((o2 = s2(t2.clientX - this.thumbGap, t2.clientY)),
            o2 === i2 && (o2 = i2 + 1)),
          o2 < 0 &&
          (o2 = ((e3) => {
            let n3 = s2(t2.clientX - e3, t2.clientY),
              a2 = s2(t2.clientX + e3, t2.clientY);
            return (
              o2 < 0 && n3 === i2 && (o2 = i2 + 1),
              o2 < 0 && a2 === i2 && (o2 = i2 - 1),
              o2
            );
          })(this.thumbExtraGap)),
          o2 === i2
            ? this.centerModern()
            : o2 > -1 && o2 < e2.pages.length && e2.slideTo(o2);
      }
      onTransformM() {
        if ("modern" !== this.type) return;
        const { instance: t2, container: e2, track: i2 } = this,
          n2 = t2.panzoom;
        if (!(e2 && i2 && n2 && this.panzoom)) return;
        o(e2, this.cn("isResting"), n2.state !== g.Init && n2.isResting);
        const s2 = this.thumbGap,
          a2 = this.thumbExtraGap,
          r2 = this.thumbClipWidth;
        let l2 = 0,
          c2 = 0,
          h2 = 0;
        for (const e3 of t2.slides) {
          let i3 = e3.index,
            n3 = e3.thumbSlideEl;
          if (!n3) continue;
          o(n3, this.cn("isSelected"), i3 === t2.page),
            (c2 = 1 - Math.abs(t2.getProgress(i3))),
            n3.style.setProperty("--progress", c2 ? c2 + "" : "");
          const d2 = 0.5 * ((e3.thumbWidth || 0) - r2);
          (l2 += s2),
            (l2 += d2),
            c2 && (l2 -= c2 * (d2 + a2)),
            n3.style.setProperty("--shift", l2 - s2 + ""),
            (l2 += d2),
            c2 && (l2 -= c2 * (d2 + a2)),
            (l2 -= s2),
            0 === i3 && (h2 = a2 * c2);
        }
        i2 &&
          (i2.style.setProperty("--left", h2 + ""),
            i2.style.setProperty("--width", l2 + h2 + s2 + a2 * c2 + "")),
          this.shouldCenter && this.centerModern();
      }
      buildClassic() {
        const { container: t2, track: e2 } = this,
          i2 = this.getSlides();
        if (!t2 || !e2 || !i2) return;
        const n2 = new this.instance.constructor(
          t2,
          u(
            {
              track: e2,
              infinite: false,
              center: true,
              fill: true,
              dragFree: true,
              slidesPerPage: 1,
              transition: false,
              Dots: false,
              Navigation: false,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
              },
            },
            this.option("Carousel") || {},
            { Sync: { target: this.instance }, slides: i2 }
          )
        );
        (this.carousel = n2),
          (this.track = e2),
          n2.on("ready", () => {
            this.emit("ready");
          }),
          n2.on("createSlide", (t3, e3) => {
            this.emit("createSlide", e3, e3.el);
          });
      }
      buildModern() {
        if ("modern" !== this.type) return;
        const { container: t2, track: e2, instance: i2 } = this,
          s2 = this.option("thumbTpl") || "";
        if (!t2 || !e2 || !s2) return;
        E(t2, "is-horizontal"), this.updateModern();
        for (const t3 of i2.slides || []) {
          const i3 = document.createElement("div");
          if ((E(i3, this.cn("slide")), t3.type)) {
            let e3 = `for-${t3.type}`;
            ["video", "youtube", "vimeo", "html5video"].includes(t3.type) &&
              (e3 += " for-video"),
              E(i3, e3);
          }
          i3.appendChild(n(this.formatThumb(t3, s2))),
            this.emit("createSlide", t3, i3),
            (t3.thumbSlideEl = i3),
            e2.appendChild(i3),
            this.resizeModernSlide(t3);
        }
        const o2 = new i2.constructor.Panzoom(t2, {
          content: e2,
          lockAxis: "x",
          zoom: false,
          panOnlyZoomed: false,
          bounds: () => {
            let t3 = 0,
              e3 = 0,
              n2 = i2.slides[0],
              s3 = i2.slides[i2.slides.length - 1],
              o3 = i2.slides[i2.page];
            return (
              n2 &&
              s3 &&
              o3 &&
              ((e3 = -1 * this.getModernThumbPos(0)),
                0 !== i2.page && (e3 += 0.5 * (n2.thumbWidth || 0)),
                (t3 = -1 * this.getModernThumbPos(i2.slides.length - 1)),
                i2.page !== i2.slides.length - 1 &&
                (t3 +=
                  (s3.thumbWidth || 0) -
                  (o3.thumbWidth || 0) -
                  0.5 * (s3.thumbWidth || 0))),
              { x: { min: t3, max: e3 }, y: { min: 0, max: 0 } }
            );
          },
        });
        o2.on("touchStart", (t3, e3) => {
          this.shouldCenter = false;
        }),
          o2.on("click", (t3, e3) => this.onClickModern(e3)),
          o2.on("ready", () => {
            this.centerModern(), this.emit("ready");
          }),
          o2.on(["afterTransform", "refresh"], (t3) => {
            this.lazyLoadModern();
          }),
          (this.panzoom = o2),
          this.refreshModern();
      }
      updateModern() {
        if ("modern" !== this.type) return;
        const { container: t2 } = this;
        t2 &&
          ((this.thumbGap =
            parseFloat(
              getComputedStyle(t2).getPropertyValue("--f-thumb-gap")
            ) || 0),
            (this.thumbExtraGap =
              parseFloat(
                getComputedStyle(t2).getPropertyValue("--f-thumb-extra-gap")
              ) || 0),
            (this.thumbWidth =
              parseFloat(
                getComputedStyle(t2).getPropertyValue("--f-thumb-width")
              ) || 40),
            (this.thumbClipWidth =
              parseFloat(
                getComputedStyle(t2).getPropertyValue("--f-thumb-clip-width")
              ) || 40),
            (this.thumbHeight =
              parseFloat(
                getComputedStyle(t2).getPropertyValue("--f-thumb-height")
              ) || 40));
      }
      refreshModern() {
        var t2;
        if ("modern" === this.type) {
          this.updateModern();
          for (const t3 of this.instance.slides || [])
            this.resizeModernSlide(t3);
          this.onTransformM(),
            null === (t2 = this.panzoom) ||
            void 0 === t2 ||
            t2.updateMetrics(true),
            this.centerModern(0);
        }
      }
      centerModern(e2) {
        const i2 = this.instance,
          { container: n2, panzoom: s2 } = this;
        if (!n2 || !s2 || s2.state === g.Init) return;
        const o2 = i2.page;
        let a2 = this.getModernThumbPos(o2),
          r2 = a2;
        for (let t2 = i2.page - 3; t2 < i2.page + 3; t2++) {
          if (t2 < 0 || t2 > i2.pages.length - 1 || t2 === i2.page) continue;
          const e3 = 1 - Math.abs(i2.getProgress(t2));
          e3 > 0 && e3 < 1 && (r2 += e3 * (this.getModernThumbPos(t2) - a2));
        }
        let l2 = 100;
        void 0 === e2 &&
          ((e2 = 0.2),
            i2.inTransition.size > 0 && (e2 = 0.12),
            Math.abs(-1 * s2.current.e - r2) > s2.containerRect.width &&
            ((e2 = 0.5), (l2 = 0))),
          (s2.options.maxVelocity = l2),
          s2.applyChange({
            panX: t(-1 * r2 - s2.target.e, 1e3),
            friction: null === i2.prevPage ? 0 : e2,
          });
      }
      lazyLoadModern() {
        const { instance: t2, panzoom: e2 } = this;
        if (!e2) return;
        const i2 = -1 * e2.current.e || 0;
        let s2 = this.getModernThumbPos(t2.page);
        if (e2.state !== g.Init || 0 === s2)
          for (const s3 of t2.slides || []) {
            const t3 = s3.thumbSlideEl;
            if (!t3) continue;
            const o2 = t3.querySelector("img[data-lazy-src]"),
              a2 = s3.index,
              r2 = this.getModernThumbPos(a2),
              l2 = i2 - 0.5 * e2.containerRect.innerWidth,
              c2 = l2 + e2.containerRect.innerWidth;
            if (!o2 || r2 < l2 || r2 > c2) continue;
            let h2 = o2.dataset.lazySrc;
            if (!h2 || !h2.length) continue;
            if ((delete o2.dataset.lazySrc, (o2.src = h2), o2.complete))
              continue;
            E(t3, this.cn("isLoading"));
            const d2 = n(w);
            t3.appendChild(d2),
              o2.addEventListener(
                "load",
                () => {
                  t3.offsetParent &&
                    (t3.classList.remove(this.cn("isLoading")), d2.remove());
                },
                false
              );
          }
      }
      resizeModernSlide(t2) {
        if ("modern" !== this.type) return;
        if (!t2.thumbSlideEl) return;
        const e2 =
          t2.thumbClipWidth && t2.thumbHeight
            ? Math.round(
              this.thumbHeight * (t2.thumbClipWidth / t2.thumbHeight)
            )
            : this.thumbWidth;
        t2.thumbWidth = e2;
      }
      getModernThumbPos(e2) {
        const i2 = this.instance.slides[e2],
          n2 = this.panzoom;
        if (!n2 || !n2.contentRect.fitWidth) return 0;
        let s2 = n2.containerRect.innerWidth,
          o2 = n2.contentRect.width;
        2 === this.instance.slides.length &&
          ((e2 -= 1), (o2 = 2 * this.thumbClipWidth));
        let a2 =
          e2 * (this.thumbClipWidth + this.thumbGap) +
          this.thumbExtraGap +
          0.5 * (i2.thumbWidth || 0);
        return (a2 -= o2 > s2 ? 0.5 * s2 : 0.5 * o2), t(a2 || 0, 1);
      }
      build() {
        const t2 = this.instance,
          e2 = t2.container,
          i2 = this.option("minCount") || 0;
        if (i2) {
          let e3 = 0;
          for (const i3 of t2.slides || []) i3.thumbSrc && e3++;
          if (e3 < i2) return this.cleanup(), void (this.state = at.Disabled);
        }
        const n2 = this.option("type");
        if (["modern", "classic"].indexOf(n2) < 0)
          return void (this.state = at.Disabled);
        this.type = n2;
        const s2 = document.createElement("div");
        E(s2, this.cn("container")), E(s2, `is-${n2}`);
        const o2 = this.option("parentEl");
        o2 ? o2.appendChild(s2) : e2.after(s2),
          (this.container = s2),
          E(e2, this.cn("hasThumbs"));
        const a2 = document.createElement("div");
        E(a2, this.cn("track")),
          s2.appendChild(a2),
          (this.track = a2),
          "classic" === n2 ? this.buildClassic() : this.buildModern(),
          (this.state = at.Ready),
          s2.addEventListener("click", (e3) => {
            setTimeout(() => {
              var e4;
              null ===
                (e4 =
                  null == s2
                    ? void 0
                    : s2.querySelector(`[data-carousel-index="${t2.page}"]`)) ||
                void 0 === e4 ||
                e4.focus();
            }, 100);
          });
      }
      cleanup() {
        this.carousel && this.carousel.destroy(),
          (this.carousel = null),
          this.panzoom && this.panzoom.destroy(),
          (this.panzoom = null),
          this.container && this.container.remove(),
          (this.container = null),
          (this.track = null),
          (this.state = at.Init),
          S(this.instance.container, this.cn("hasThumbs"));
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("initSlide", t2.onInitSlide),
          e2.state === L.Init
            ? e2.on("initSlides", t2.onInitSlides)
            : t2.onInitSlides(),
          e2.on("Panzoom.afterTransform", t2.onTransformM),
          e2.on("Panzoom.refresh", t2.onRefreshM),
          e2.on("change", t2.onChangeM);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("initSlide", t2.onInitSlide),
          e2.off("initSlides", t2.onInitSlides),
          e2.off("Panzoom.afterTransform", t2.onTransformM),
          e2.off("Panzoom.refresh", t2.onRefreshM),
          e2.off("change", t2.onChangeM),
          t2.cleanup();
      }
    };
    Object.defineProperty(rt, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ot,
    });
    const lt = Object.assign(Object.assign({}, ot), {
      key: "t",
      showOnStart: true,
      parentEl: null,
    });
    class ct extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false,
          });
      }
      get isEnabled() {
        const t2 = this.ref;
        return t2 && t2.state !== at.Disabled;
      }
      get isHidden() {
        return this.hidden;
      }
      onInit() {
        var t2;
        const e2 = this,
          i2 = e2.instance,
          n2 = i2.carousel;
        if (e2.ref || !n2) return;
        const s2 = e2.option("parentEl") || i2.footer || i2.container;
        if (!s2) return;
        const o2 = u({}, e2.options, {
          parentEl: s2,
          classes: { container: "f-thumbs fancybox__thumbs" },
          Carousel: { Sync: { friction: i2.option("Carousel.friction") || 0 } },
          on: {
            ready: (t3) => {
              const i3 = t3.container;
              i3 &&
                this.hidden &&
                (e2.refresh(),
                  (i3.style.transition = "none"),
                  e2.hide(),
                  i3.offsetHeight,
                  queueMicrotask(() => {
                    (i3.style.transition = ""), e2.show();
                  }));
            },
          },
        });
        (o2.Carousel = o2.Carousel || {}),
          (o2.Carousel.on = u(
            (null === (t2 = e2.options.Carousel) || void 0 === t2
              ? void 0
              : t2.on) || {},
            {
              click: (t3, e3) => {
                e3.stopPropagation();
              },
            }
          )),
          (n2.options.Thumbs = o2),
          n2.attachPlugins({ Thumbs: rt }),
          (e2.ref = n2.plugins.Thumbs),
          e2.option("showOnStart") ||
          ((e2.ref.state = at.Hidden), (e2.hidden = true));
      }
      onResize() {
        var t2;
        const e2 =
          null === (t2 = this.ref) || void 0 === t2 ? void 0 : t2.container;
        e2 && (e2.style.maxHeight = "");
      }
      onKeydown(t2, e2) {
        const i2 = this.option("key");
        i2 && i2 === e2 && this.toggle();
      }
      toggle() {
        const t2 = this.ref;
        t2 &&
          t2.state !== at.Disabled &&
          (t2.state !== at.Hidden
            ? this.hidden
              ? this.show()
              : this.hide()
            : t2.build());
      }
      show() {
        const t2 = this.ref,
          e2 = t2 && t2.state !== at.Disabled && t2.container;
        e2 &&
          (this.refresh(),
            e2.offsetHeight,
            e2.removeAttribute("aria-hidden"),
            e2.classList.remove("is-hidden"),
            (this.hidden = false));
      }
      hide() {
        const t2 = this.ref,
          e2 = t2 && t2.container;
        e2 &&
          (this.refresh(),
            e2.offsetHeight,
            e2.classList.add("is-hidden"),
            e2.setAttribute("aria-hidden", "true")),
          (this.hidden = true);
      }
      refresh() {
        const t2 = this.ref;
        if (!t2 || t2.state === at.Disabled) return;
        const e2 = t2.container,
          i2 = (null == e2 ? void 0 : e2.firstChild) || null;
        e2 &&
          i2 &&
          i2.childNodes.length &&
          (e2.style.maxHeight = `${i2.getBoundingClientRect().height}px`);
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.state === V.Init ? e2.on("Carousel.init", t2.onInit) : t2.onInit(),
          e2.on("resize", t2.onResize),
          e2.on("keydown", t2.onKeydown);
      }
      detach() {
        var t2;
        const e2 = this,
          i2 = e2.instance;
        i2.off("Carousel.init", e2.onInit),
          i2.off("resize", e2.onResize),
          i2.off("keydown", e2.onKeydown),
          null === (t2 = i2.carousel) ||
          void 0 === t2 ||
          t2.detachPlugins(["Thumbs"]),
          (e2.ref = null);
      }
    }
    Object.defineProperty(ct, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: lt,
    });
    const ht = {
      panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: { panX: -100 },
      },
      panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: { panX: 100 },
      },
      panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: { panY: -100 },
      },
      panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: { panY: 100 },
      },
      zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn",
      },
      zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut",
      },
      toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom",
      },
      toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom",
      },
      iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom",
      },
      rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW",
      },
      rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW",
      },
      flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX",
      },
      flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY",
      },
      fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX",
      },
      fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY",
      },
      reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset",
      },
      toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS",
      },
    };
    var dt;
    !(function (t2) {
      (t2[(t2.Init = 0)] = "Init"),
        (t2[(t2.Ready = 1)] = "Ready"),
        (t2[(t2.Disabled = 2)] = "Disabled");
    })(dt || (dt = {}));
    const ut = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
        },
      },
      parentEl: null,
    },
      pt = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      };
    class ft extends I {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dt.Init,
          }),
          Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          });
      }
      onReady(t2) {
        var e2;
        if (!t2.carousel) return;
        let i2 = this.option("display"),
          n2 = this.option("absolute"),
          s2 = this.option("enabled");
        if ("auto" === s2) {
          const t3 = this.instance.carousel;
          let e3 = 0;
          if (t3)
            for (const i3 of t3.slides)
              (i3.panzoom || "image" === i3.type) && e3++;
          e3 || (s2 = false);
        }
        s2 || (i2 = void 0);
        let o2 = 0;
        const a2 = { left: [], middle: [], right: [] };
        if (i2)
          for (const t3 of ["left", "middle", "right"])
            for (const n3 of i2[t3]) {
              const i3 = this.createEl(n3);
              i3 &&
                (null === (e2 = a2[t3]) || void 0 === e2 || e2.push(i3), o2++);
            }
        let r2 = null;
        if ((o2 && (r2 = this.createContainer()), r2)) {
          for (const [t3, e3] of Object.entries(a2)) {
            const i3 = document.createElement("div");
            E(i3, "fancybox__toolbar__column is-" + t3);
            for (const t4 of e3) i3.appendChild(t4);
            "auto" !== n2 || "middle" !== t3 || e3.length || (n2 = true),
              r2.appendChild(i3);
          }
          true === n2 && E(r2, "is-absolute"),
            (this.state = dt.Ready),
            this.onRefresh();
        } else this.state = dt.Disabled;
      }
      onClick(t2) {
        var e2, i2;
        const n2 = this.instance,
          s2 = n2.getSlide(),
          o2 = null == s2 ? void 0 : s2.panzoom,
          a2 = t2.target,
          r2 = a2 && x(a2) ? a2.dataset : null;
        if (!r2) return;
        if (void 0 !== r2.fancyboxToggleThumbs)
          return (
            t2.preventDefault(),
            t2.stopPropagation(),
            void (
              null === (e2 = n2.plugins.Thumbs) ||
              void 0 === e2 ||
              e2.toggle()
            )
          );
        if (void 0 !== r2.fancyboxToggleFullscreen)
          return (
            t2.preventDefault(),
            t2.stopPropagation(),
            void this.instance.toggleFullscreen()
          );
        if (void 0 !== r2.fancyboxToggleSlideshow) {
          t2.preventDefault(), t2.stopPropagation();
          const e3 =
            null === (i2 = n2.carousel) || void 0 === i2
              ? void 0
              : i2.plugins.Autoplay;
          let s3 = e3.isActive;
          return (
            o2 && "mousemove" === o2.panMode && !s3 && o2.reset(),
            void (s3 ? e3.stop() : e3.start())
          );
        }
        const l2 = r2.panzoomAction,
          c2 = r2.panzoomChange;
        if (((c2 || l2) && (t2.preventDefault(), t2.stopPropagation()), c2)) {
          let t3 = {};
          try {
            t3 = JSON.parse(c2);
          } catch (t4) { }
          o2 && o2.applyChange(t3);
        } else l2 && o2 && o2[l2] && o2[l2]();
      }
      onChange() {
        this.onRefresh();
      }
      onRefresh() {
        if (this.instance.isClosing()) return;
        const t2 = this.container;
        if (!t2) return;
        const e2 = this.instance.getSlide();
        if (!e2 || e2.state !== Z.Ready) return;
        const i2 = e2 && !e2.error && e2.panzoom;
        for (const e3 of t2.querySelectorAll("[data-panzoom-action]"))
          i2
            ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex"))
            : (e3.setAttribute("disabled", ""),
              e3.setAttribute("tabindex", "-1"));
        let n2 = i2 && i2.canZoomIn(),
          s2 = i2 && i2.canZoomOut();
        for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          n2
            ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex"))
            : (e3.setAttribute("disabled", ""),
              e3.setAttribute("tabindex", "-1"));
        for (const e3 of t2.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          s2
            ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex"))
            : (e3.setAttribute("disabled", ""),
              e3.setAttribute("tabindex", "-1"));
        for (const e3 of t2.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          s2 || n2
            ? (e3.removeAttribute("disabled"), e3.removeAttribute("tabindex"))
            : (e3.setAttribute("disabled", ""),
              e3.setAttribute("tabindex", "-1"));
          const t3 = e3.querySelector("g");
          t3 && (t3.style.display = n2 ? "" : "none");
        }
      }
      onDone(t2, e2) {
        var i2;
        null === (i2 = e2.panzoom) ||
          void 0 === i2 ||
          i2.on("afterTransform", () => {
            this.instance.isCurrentSlide(e2) && this.onRefresh();
          }),
          this.instance.isCurrentSlide(e2) && this.onRefresh();
      }
      createContainer() {
        const t2 = this.instance.container;
        if (!t2) return null;
        const e2 = this.option("parentEl") || t2,
          i2 = document.createElement("div");
        return (
          E(i2, "fancybox__toolbar"),
          e2.prepend(i2),
          i2.addEventListener("click", this.onClick, {
            passive: false,
            capture: true,
          }),
          t2 && E(t2, "has-toolbar"),
          (this.container = i2),
          i2
        );
      }
      createEl(t2) {
        const e2 = this.instance,
          i2 = e2.carousel;
        if (!i2) return null;
        if ("toggleFS" === t2) return null;
        if ("fullscreen" === t2 && !e2.fsAPI) return null;
        let s2 = null;
        const o2 = i2.slides.length || 0;
        let a2 = 0,
          r2 = 0;
        for (const t3 of i2.slides)
          (t3.panzoom || "image" === t3.type) && a2++,
            ("image" === t3.type || t3.downloadSrc) && r2++;
        if (o2 < 2 && ["infobar", "prev", "next"].includes(t2)) return s2;
        if (void 0 !== ht[t2] && !a2) return null;
        if ("download" === t2 && !r2) return null;
        if ("thumbs" === t2) {
          const t3 = e2.plugins.Thumbs;
          if (!t3 || !t3.isEnabled) return null;
        }
        if ("slideshow" === t2) {
          if (!i2.plugins.Autoplay || o2 < 2) return null;
        }
        if (void 0 !== ht[t2]) {
          const e3 = ht[t2];
          (s2 = document.createElement("button")),
            s2.setAttribute(
              "title",
              this.instance.localize(`{{${t2.toUpperCase()}}}`)
            ),
            E(s2, "f-button"),
            e3.action && (s2.dataset.panzoomAction = e3.action),
            e3.change && (s2.dataset.panzoomChange = JSON.stringify(e3.change)),
            s2.appendChild(n(this.instance.localize(e3.icon)));
        } else {
          const e3 = (this.option("items") || [])[t2];
          e3 &&
            ((s2 = n(this.instance.localize(e3.tpl))),
              "function" == typeof e3.click &&
              s2.addEventListener("click", (t3) => {
                t3.preventDefault(),
                  t3.stopPropagation(),
                  "function" == typeof e3.click &&
                  e3.click.call(this, this, t3);
              }));
        }
        const l2 = null == s2 ? void 0 : s2.querySelector("svg");
        if (l2)
          for (const [t3, e3] of Object.entries(pt))
            l2.getAttribute(t3) || l2.setAttribute(t3, String(e3));
        return s2;
      }
      removeContainer() {
        const t2 = this.container;
        t2 && t2.remove(), (this.container = null), (this.state = dt.Disabled);
        const e2 = this.instance.container;
        e2 && S(e2, "has-toolbar");
      }
      attach() {
        const t2 = this,
          e2 = t2.instance;
        e2.on("Carousel.initSlides", t2.onReady),
          e2.on("done", t2.onDone),
          e2.on("reveal", t2.onChange),
          e2.on("Carousel.change", t2.onChange),
          t2.onReady(t2.instance);
      }
      detach() {
        const t2 = this,
          e2 = t2.instance;
        e2.off("Carousel.initSlides", t2.onReady),
          e2.off("done", t2.onDone),
          e2.off("reveal", t2.onChange),
          e2.off("Carousel.change", t2.onChange),
          t2.removeContainer();
      }
    }
    Object.defineProperty(ft, "defaults", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ut,
    });
    const mt = {
      Hash: U,
      Html: it,
      Images: J,
      Slideshow: st,
      Thumbs: ct,
      Toolbar: ft,
    },
      gt = function () {
        var t2 = window.getSelection();
        return t2 && "Range" === t2.type;
      };
    let bt = null,
      vt = null;
    const yt = /* @__PURE__ */ new Map();
    let wt = 0;
    class xt extends m {
      get isIdle() {
        return this.idle;
      }
      get isCompact() {
        return this.option("compact");
      }
      constructor(t2 = [], e2 = {}, i2 = {}) {
        super(e2),
          Object.defineProperty(this, "userSlides", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [],
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {},
          }),
          Object.defineProperty(this, "idle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false,
          }),
          Object.defineProperty(this, "idleTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false,
          }),
          Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: V.Init,
          }),
          Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "footer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "caption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "lastFocus", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null,
          }),
          Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          Object.defineProperty(this, "fsAPI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0,
          }),
          (this.fsAPI = (() => {
            let t3,
              e3 = "",
              i3 = "",
              n2 = "";
            return (
              document.fullscreenEnabled
                ? ((e3 = "requestFullscreen"),
                  (i3 = "exitFullscreen"),
                  (n2 = "fullscreenElement"))
                : document.webkitFullscreenEnabled &&
                ((e3 = "webkitRequestFullscreen"),
                  (i3 = "webkitExitFullscreen"),
                  (n2 = "webkitFullscreenElement")),
              e3 &&
              (t3 = {
                request: function (t4) {
                  return "webkitRequestFullscreen" === e3
                    ? t4[e3](Element.ALLOW_KEYBOARD_INPUT)
                    : t4[e3]();
                },
                exit: function () {
                  return document[n2] && document[i3]();
                },
                isFullscreen: function () {
                  return document[n2];
                },
              }),
              t3
            );
          })()),
          (this.id = e2.id || ++wt),
          yt.set(this.id, this),
          (this.userSlides = t2),
          (this.userPlugins = i2),
          queueMicrotask(() => {
            this.init();
          });
      }
      init() {
        if (this.state === V.Destroy) return;
        (this.state = V.Init),
          this.attachPlugins(
            Object.assign(Object.assign({}, xt.Plugins), this.userPlugins)
          ),
          this.emit("init"),
          true === this.option("hideScrollbar") &&
          (() => {
            if (!W) return;
            const t3 = document.body;
            if (t3.classList.contains("hide-scrollbar")) return;
            let e3 =
              window.innerWidth -
              document.documentElement.getBoundingClientRect().width;
            e3 < 0 && (e3 = 0);
            const i2 = t3.currentStyle || window.getComputedStyle(t3),
              n2 = parseFloat(i2.marginRight);
            document.documentElement.style.setProperty(
              "--fancybox-scrollbar-compensate",
              `${e3}px`
            ),
              n2 && t3.style.setProperty("--fancybox-body-margin", `${n2}px`),
              t3.classList.add("hide-scrollbar");
          })(),
          this.initLayout(),
          this.scale();
        const t2 = () => {
          this.initCarousel(this.userSlides),
            (this.state = V.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container &&
                this.container.setAttribute("aria-hidden", "false");
            }, 16);
        },
          e2 = this.fsAPI;
        this.option("Fullscreen.autoStart") && e2 && !e2.isFullscreen()
          ? e2
            .request(this.container)
            .then(() => t2())
            .catch(() => t2())
          : t2();
      }
      initLayout() {
        var t2, e2;
        const i2 = this.option("parentEl") || document.body,
          s2 = n(this.localize(this.option("tpl.main") || ""));
        s2 &&
          (s2.setAttribute("id", `fancybox-${this.id}`),
            s2.setAttribute("aria-label", this.localize("{{MODAL}}")),
            s2.classList.toggle("is-compact", this.isCompact),
            E(s2, this.option("mainClass") || ""),
            (this.container = s2),
            (this.footer = s2.querySelector(".fancybox__footer")),
            i2.appendChild(s2),
            E(document.documentElement, "with-fancybox"),
            (bt && vt) ||
            ((bt = document.createElement("span")),
              E(bt, "fancybox-focus-guard"),
              bt.setAttribute("tabindex", "0"),
              bt.setAttribute("aria-hidden", "true"),
              bt.setAttribute("aria-label", "Focus guard"),
              (vt = bt.cloneNode()),
              null === (t2 = s2.parentElement) ||
              void 0 === t2 ||
              t2.insertBefore(bt, s2),
              null === (e2 = s2.parentElement) || void 0 === e2 || e2.append(vt)),
            this.option("animated") &&
            (E(s2, "is-animated"),
              setTimeout(() => {
                this.isClosing() || S(s2, "is-animated");
              }, 350)),
            this.emit("initLayout"));
      }
      initCarousel(t2) {
        const i2 = this.container;
        if (!i2) return;
        const n2 = i2.querySelector(".fancybox__carousel");
        if (!n2) return;
        const s2 = (this.carousel = new _(
          n2,
          u(
            {},
            {
              slides: t2,
              transition: "fade",
              Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y",
              },
              Dots: false,
              Navigation: {
                classes: {
                  container: "fancybox__nav",
                  button: "f-button",
                  isNext: "is-next",
                  isPrev: "is-prev",
                },
              },
              initialPage: this.option("startIndex"),
              l10n: this.option("l10n"),
            },
            this.option("Carousel") || {}
          )
        ));
        s2.on("*", (t3, e2, ...i3) => {
          this.emit(`Carousel.${e2}`, t3, ...i3);
        }),
          s2.on(["ready", "change"], () => {
            var t3;
            const e2 = this.getSlide();
            e2 &&
              (null === (t3 = e2.panzoom) ||
                void 0 === t3 ||
                t3.updateControls()),
              this.manageCaption(e2);
          }),
          this.on("Carousel.removeSlide", (t3, e2, i3) => {
            i3.contentEl && (i3.contentEl.remove(), (i3.contentEl = void 0));
            const n3 = i3.el;
            n3 &&
              (S(n3, "has-error"),
                S(n3, "has-unknown"),
                S(n3, `has-${i3.type || "unknown"}`)),
              i3.closeBtnEl && i3.closeBtnEl.remove(),
              (i3.closeBtnEl = void 0),
              i3.captionEl && i3.captionEl.remove(),
              (i3.captionEl = void 0),
              i3.spinnerEl && i3.spinnerEl.remove(),
              (i3.spinnerEl = void 0),
              (i3.state = void 0);
          }),
          s2.on("Panzoom.touchStart", () => {
            this.isCompact || this.endIdle();
          }),
          s2.on("settle", () => {
            this.idleTimer ||
              this.isCompact ||
              !this.option("idle") ||
              this.setIdle(),
              this.option("autoFocus") && this.checkFocus();
          }),
          this.option("dragToClose") &&
          (s2.on("Panzoom.afterTransform", (t3, i3) => {
            const n3 = this.getSlide();
            if (n3 && e(n3.el)) return;
            const s3 = this.container;
            if (s3) {
              const t4 = Math.abs(i3.current.f),
                e2 =
                  t4 < 1
                    ? ""
                    : Math.max(
                      0.5,
                      Math.min(1, 1 - (t4 / i3.contentRect.fitHeight) * 1.5)
                    );
              s3.style.setProperty("--fancybox-ts", e2 ? "0s" : ""),
                s3.style.setProperty("--fancybox-opacity", e2 + "");
            }
          }),
            s2.on("Panzoom.touchEnd", (t3, i3, n3) => {
              var s3;
              const o2 = this.getSlide();
              if (o2 && e(o2.el)) return;
              if (
                i3.isMobile &&
                document.activeElement &&
                -1 !==
                ["TEXTAREA", "INPUT"].indexOf(
                  null === (s3 = document.activeElement) || void 0 === s3
                    ? void 0
                    : s3.nodeName
                )
              )
                return;
              const a2 = Math.abs(i3.dragOffset.y);
              "y" === i3.lockedAxis &&
                (a2 >= 200 || (a2 >= 50 && i3.dragOffset.time < 300)) &&
                (n3 && n3.cancelable && n3.preventDefault(),
                  this.close(
                    n3,
                    "f-throwOut" + (i3.current.f < 0 ? "Up" : "Down")
                  ));
            })),
          s2.on("change", (t3) => {
            var e2;
            let i3 =
              null === (e2 = this.getSlide()) || void 0 === e2
                ? void 0
                : e2.triggerEl;
            if (i3) {
              const e3 = new CustomEvent("slideTo", {
                bubbles: true,
                cancelable: true,
                detail: t3.page,
              });
              i3.dispatchEvent(e3);
            }
          }),
          s2.on(["refresh", "change"], (t3) => {
            const e2 = this.container;
            if (!e2) return;
            for (const i4 of e2.querySelectorAll(
              "[data-fancybox-current-index]"
            ))
              i4.innerHTML = t3.page + 1;
            for (const i4 of e2.querySelectorAll("[data-fancybox-count]"))
              i4.innerHTML = t3.pages.length;
            if (!t3.isInfinite) {
              for (const i4 of e2.querySelectorAll("[data-fancybox-next]"))
                t3.page < t3.pages.length - 1
                  ? (i4.removeAttribute("disabled"),
                    i4.removeAttribute("tabindex"))
                  : (i4.setAttribute("disabled", ""),
                    i4.setAttribute("tabindex", "-1"));
              for (const i4 of e2.querySelectorAll("[data-fancybox-prev]"))
                t3.page > 0
                  ? (i4.removeAttribute("disabled"),
                    i4.removeAttribute("tabindex"))
                  : (i4.setAttribute("disabled", ""),
                    i4.setAttribute("tabindex", "-1"));
            }
            const i3 = this.getSlide();
            if (!i3) return;
            let n3 = i3.downloadSrc || "";
            n3 ||
              "image" !== i3.type ||
              i3.error ||
              "string" != typeof i3.src ||
              (n3 = i3.src);
            const s3 = "disabled",
              o2 = "tabindex",
              a2 = "download",
              r2 = "href";
            for (const t4 of e2.querySelectorAll("[data-fancybox-download]")) {
              const e3 = i3.downloadFilename;
              n3
                ? (t4.removeAttribute(s3),
                  t4.removeAttribute(o2),
                  t4.setAttribute(r2, n3),
                  t4.setAttribute(a2, e3 || n3),
                  t4.setAttribute("target", "_blank"))
                : (t4.setAttribute(s3, ""),
                  t4.setAttribute(o2, "-1"),
                  t4.removeAttribute(r2),
                  t4.removeAttribute(a2));
            }
          }),
          this.emit("initCarousel");
      }
      attachEvents() {
        const t2 = this,
          e2 = t2.container;
        if (!e2) return;
        e2.addEventListener("click", t2.onClick, {
          passive: false,
          capture: false,
        }),
          e2.addEventListener("wheel", t2.onWheel, {
            passive: false,
            capture: false,
          }),
          document.addEventListener("keydown", t2.onKeydown, {
            passive: false,
            capture: true,
          }),
          document.addEventListener(
            "visibilitychange",
            t2.onVisibilityChange,
            false
          ),
          document.addEventListener("mousemove", t2.onMousemove),
          t2.option("trapFocus") &&
          document.addEventListener("focus", t2.onFocus, true),
          window.addEventListener("resize", t2.onResize);
        const i2 = window.visualViewport;
        i2 &&
          (i2.addEventListener("scroll", t2.onResize),
            i2.addEventListener("resize", t2.onResize));
      }
      detachEvents() {
        const t2 = this,
          e2 = t2.container;
        if (!e2) return;
        document.removeEventListener("keydown", t2.onKeydown, {
          passive: false,
          capture: true,
        }),
          e2.removeEventListener("wheel", t2.onWheel, {
            passive: false,
            capture: false,
          }),
          e2.removeEventListener("click", t2.onClick, {
            passive: false,
            capture: false,
          }),
          document.removeEventListener("mousemove", t2.onMousemove),
          window.removeEventListener("resize", t2.onResize);
        const i2 = window.visualViewport;
        i2 &&
          (i2.removeEventListener("resize", t2.onResize),
            i2.removeEventListener("scroll", t2.onResize)),
          document.removeEventListener(
            "visibilitychange",
            t2.onVisibilityChange,
            false
          ),
          document.removeEventListener("focus", t2.onFocus, true);
      }
      scale() {
        const t2 = this.container;
        if (!t2) return;
        const e2 = window.visualViewport,
          i2 = Math.max(1, (null == e2 ? void 0 : e2.scale) || 1);
        let n2 = "",
          s2 = "",
          o2 = "";
        if (e2 && i2 > 1) {
          let t3 = `${e2.offsetLeft}px`,
            a2 = `${e2.offsetTop}px`;
          (n2 = e2.width * i2 + "px"),
            (s2 = e2.height * i2 + "px"),
            (o2 = `translate3d(${t3}, ${a2}, 0) scale(${1 / i2})`);
        }
        (t2.style.transform = o2),
          (t2.style.width = n2),
          (t2.style.height = s2);
      }
      onClick(t2) {
        var e2, i2;
        const { container: n2, isCompact: s2 } = this;
        if (!n2 || this.isClosing()) return;
        !s2 && this.option("idle") && this.resetIdle();
        const o2 = document.activeElement;
        if (gt() && o2 && n2.contains(o2)) return;
        const a2 = t2.composedPath()[0];
        if (
          a2 ===
          (null === (e2 = this.carousel) || void 0 === e2
            ? void 0
            : e2.container)
        )
          return;
        if (a2.closest(".f-spinner") || a2.closest("[data-fancybox-close]"))
          return t2.preventDefault(), void this.close(t2);
        if (a2.closest("[data-fancybox-prev]"))
          return t2.preventDefault(), void this.prev();
        if (a2.closest("[data-fancybox-next]"))
          return t2.preventDefault(), void this.next();
        if (
          s2 &&
          "image" ===
          (null === (i2 = this.getSlide()) || void 0 === i2
            ? void 0
            : i2.type)
        )
          return void (this.clickTimer
            ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
            : (this.clickTimer = setTimeout(() => {
              this.toggleIdle(), (this.clickTimer = null);
            }, 350)));
        if ((this.emit("click", t2), t2.defaultPrevented)) return;
        let r2 = false;
        if (a2.closest(".fancybox__content")) {
          if (o2) {
            if (o2.closest("[contenteditable]")) return;
            a2.matches(X) || o2.blur();
          }
          if (gt()) return;
          r2 = this.option("contentClick");
        } else
          a2.closest(".fancybox__carousel") &&
            !a2.matches(X) &&
            (r2 = this.option("backdropClick"));
        "close" === r2
          ? (t2.preventDefault(), this.close(t2))
          : "next" === r2
            ? (t2.preventDefault(), this.next())
            : "prev" === r2 && (t2.preventDefault(), this.prev());
      }
      onWheel(t2) {
        var e2;
        let i2 = this.option("wheel", t2);
        (null === (e2 = t2.target) || void 0 === e2
          ? void 0
          : e2.closest(".fancybox__thumbs")) && (i2 = "slide");
        const n2 = "slide" === i2,
          s2 = [-t2.deltaX || 0, -t2.deltaY || 0, -t2.detail || 0].reduce(
            function (t3, e3) {
              return Math.abs(e3) > Math.abs(t3) ? e3 : t3;
            }
          ),
          o2 = Math.max(-1, Math.min(1, s2)),
          a2 = Date.now();
        this.pwt && a2 - this.pwt < 300
          ? n2 && t2.preventDefault()
          : ((this.pwt = a2),
            this.emit("wheel", t2),
            t2.defaultPrevented ||
            ("close" === i2
              ? (t2.preventDefault(), this.close(t2))
              : "slide" === i2 &&
              (t2.preventDefault(), this[o2 > 0 ? "prev" : "next"]())));
      }
      onKeydown(t2) {
        if (!this.isTopmost()) return;
        this.isCompact ||
          !this.option("idle") ||
          this.isClosing() ||
          this.resetIdle();
        const e2 = t2.key,
          i2 = this.option("keyboard");
        if (!i2 || t2.ctrlKey || t2.altKey || t2.shiftKey) return;
        const n2 = t2.composedPath()[0],
          s2 = document.activeElement && document.activeElement.classList,
          o2 =
            (s2 && s2.contains("f-button")) ||
            n2.dataset.carouselPage ||
            n2.dataset.carouselIndex;
        if ("Escape" !== e2 && !o2 && x(n2)) {
          if (
            n2.isContentEditable ||
            -1 !==
            ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
              n2.nodeName
            )
          )
            return;
        }
        this.emit("keydown", e2, t2);
        const a2 = i2[e2];
        "function" == typeof this[a2] && (t2.preventDefault(), this[a2]());
      }
      onResize() {
        const t2 = this.container;
        if (!t2) return;
        const e2 = this.isCompact;
        t2.classList.toggle("is-compact", e2),
          this.manageCaption(this.getSlide()),
          this.isCompact ? this.clearIdle() : this.endIdle(),
          this.scale(),
          this.emit("resize");
      }
      onFocus(t2) {
        this.isTopmost() && this.checkFocus(t2);
      }
      onMousemove(t2) {
        (this.prevMouseMoveEvent = t2),
          !this.isCompact && this.option("idle") && this.resetIdle();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState
          ? this.checkFocus()
          : this.endIdle();
      }
      manageCloseBtn(t2) {
        const e2 = this.optionFor(t2, "closeButton") || false;
        if ("auto" === e2) {
          const t3 = this.plugins.Toolbar;
          if (t3 && t3.state === dt.Ready) return;
        }
        if (!e2) return;
        if (!t2.contentEl || t2.closeBtnEl) return;
        const i2 = this.option("tpl.closeButton");
        if (i2) {
          const e3 = n(this.localize(i2));
          (t2.closeBtnEl = t2.contentEl.appendChild(e3)),
            t2.el && E(t2.el, "has-close-btn");
        }
      }
      manageCaption(t2) {
        var e2, i2;
        const n2 = "fancybox__caption",
          s2 = "has-caption",
          o2 = this.container;
        if (!o2) return;
        const a2 = this.isCompact || this.option("commonCaption"),
          r2 = !a2;
        if (
          (this.caption && this.stop(this.caption),
            r2 && this.caption && (this.caption.remove(), (this.caption = null)),
            a2 && !this.caption)
        )
          for (const t3 of (null === (e2 = this.carousel) || void 0 === e2
            ? void 0
            : e2.slides) || [])
            t3.captionEl &&
              (t3.captionEl.remove(),
                (t3.captionEl = void 0),
                S(t3.el, s2),
                null === (i2 = t3.el) ||
                void 0 === i2 ||
                i2.removeAttribute("aria-labelledby"));
        if (
          (t2 || (t2 = this.getSlide()),
            !t2 || (a2 && !this.isCurrentSlide(t2)))
        )
          return;
        const l2 = t2.el;
        let c2 = this.optionFor(t2, "caption", "");
        if ("string" != typeof c2 || !c2.length)
          return void (
            a2 &&
            this.caption &&
            this.animate(this.caption, "f-fadeOut", () => {
              var t3;
              null === (t3 = this.caption) || void 0 === t3 || t3.remove(),
                (this.caption = null);
            })
          );
        let h2 = null;
        if (r2) {
          if (((h2 = t2.captionEl || null), l2 && !h2)) {
            const e3 = `fancybox__caption_${this.id}_${t2.index}`;
            (h2 = document.createElement("div")),
              E(h2, n2),
              h2.setAttribute("id", e3),
              (t2.captionEl = l2.appendChild(h2)),
              E(l2, s2),
              l2.setAttribute("aria-labelledby", e3);
          }
        } else {
          if (
            ((h2 = this.caption), h2 || (h2 = o2.querySelector("." + n2)), !h2)
          ) {
            (h2 = document.createElement("div")),
              (h2.dataset.fancyboxCaption = ""),
              E(h2, n2),
              (h2.innerHTML = c2);
            (this.footer || o2).prepend(h2);
          }
          E(o2, s2), (this.caption = h2);
        }
        h2 && (h2.innerHTML = c2);
      }
      checkFocus(t2) {
        var e2;
        const i2 = document.activeElement || null;
        (i2 &&
          (null === (e2 = this.container) || void 0 === e2
            ? void 0
            : e2.contains(i2))) ||
          this.focus(t2);
      }
      focus(t2) {
        var e2;
        if (this.ignoreFocusChange) return;
        const i2 = document.activeElement || null,
          n2 = (null == t2 ? void 0 : t2.target) || null,
          s2 = this.container,
          o2 = this.getSlide();
        if (
          !s2 ||
          !(null === (e2 = this.carousel) || void 0 === e2
            ? void 0
            : e2.viewport)
        )
          return;
        if (!t2 && i2 && s2.contains(i2)) return;
        const a2 = o2 && o2.state === Z.Ready ? o2.el : null;
        if (!a2 || a2.contains(i2) || s2 === i2) return;
        t2 && t2.cancelable && t2.preventDefault(),
          (this.ignoreFocusChange = true);
        const r2 = Array.from(s2.querySelectorAll(X));
        let l2 = [],
          c2 = null;
        for (let t3 of r2) {
          const e3 = !t3.offsetParent || t3.closest('[aria-hidden="true"]'),
            i3 = a2 && a2.contains(t3),
            n3 = !this.carousel.viewport.contains(t3);
          t3 === s2 || ((i3 || n3) && !e3)
            ? (l2.push(t3),
              void 0 !== t3.dataset.origTabindex &&
              (t3.tabIndex = parseFloat(t3.dataset.origTabindex)),
              t3.removeAttribute("data-orig-tabindex"),
              (!t3.hasAttribute("autoFocus") && c2) || (c2 = t3))
            : ((t3.dataset.origTabindex =
              void 0 === t3.dataset.origTabindex
                ? t3.getAttribute("tabindex") || void 0
                : t3.dataset.origTabindex),
              (t3.tabIndex = -1));
        }
        let h2 = null;
        t2
          ? (!n2 || l2.indexOf(n2) < 0) &&
          ((h2 = c2 || s2),
            l2.length &&
            (i2 === vt
              ? (h2 = l2[0])
              : (this.lastFocus !== s2 && i2 !== bt) ||
              (h2 = l2[l2.length - 1])))
          : (h2 = o2 && "image" === o2.type ? s2 : c2 || s2),
          h2 && Y(h2),
          (this.lastFocus = document.activeElement),
          (this.ignoreFocusChange = false);
      }
      next() {
        const t2 = this.carousel;
        t2 && t2.pages.length > 1 && t2.slideNext();
      }
      prev() {
        const t2 = this.carousel;
        t2 && t2.pages.length > 1 && t2.slidePrev();
      }
      jumpTo(...t2) {
        this.carousel && this.carousel.slideTo(...t2);
      }
      isTopmost() {
        var t2;
        return (
          (null === (t2 = xt.getInstance()) || void 0 === t2
            ? void 0
            : t2.id) == this.id
        );
      }
      animate(t2 = null, e2 = "", i2) {
        if (!t2 || !e2) return void (i2 && i2());
        this.stop(t2);
        const n2 = (s2) => {
          s2.target === t2 &&
            t2.dataset.animationName &&
            (t2.removeEventListener("animationend", n2),
              delete t2.dataset.animationName,
              i2 && i2(),
              S(t2, e2));
        };
        (t2.dataset.animationName = e2),
          t2.addEventListener("animationend", n2),
          E(t2, e2);
      }
      stop(t2) {
        t2 &&
          t2.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: false,
              cancelable: true,
              currentTarget: t2,
            })
          );
      }
      setContent(t2, e2 = "", i2 = true) {
        if (this.isClosing()) return;
        const s2 = t2.el;
        if (!s2) return;
        let o2 = null;
        if (
          (x(e2)
            ? (o2 = e2)
            : ((o2 = n(e2 + "")),
              x(o2) ||
              ((o2 = document.createElement("div")),
                (o2.innerHTML = e2 + ""))),
            ["img", "picture", "iframe", "video", "audio"].includes(
              o2.nodeName.toLowerCase()
            ))
        ) {
          const t3 = document.createElement("div");
          t3.appendChild(o2), (o2 = t3);
        }
        x(o2) && t2.filter && !t2.error && (o2 = o2.querySelector(t2.filter)),
          o2 && x(o2)
            ? (E(o2, "fancybox__content"),
              t2.id && o2.setAttribute("id", t2.id),
              ("none" !== o2.style.display &&
                "none" !== getComputedStyle(o2).getPropertyValue("display")) ||
              (o2.style.display =
                t2.display || this.option("defaultDisplay") || "flex"),
              s2.classList.add(
                `has-${t2.error ? "error" : t2.type || "unknown"}`
              ),
              s2.prepend(o2),
              (t2.contentEl = o2),
              i2 && this.revealContent(t2),
              this.manageCloseBtn(t2),
              this.manageCaption(t2))
            : this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
      }
      revealContent(t2, e2) {
        const i2 = t2.el,
          n2 = t2.contentEl;
        i2 &&
          n2 &&
          (this.emit("reveal", t2),
            this.hideLoading(t2),
            (t2.state = Z.Opening),
            (e2 = this.isOpeningSlide(t2)
              ? void 0 === e2
                ? this.optionFor(t2, "showClass")
                : e2
              : "f-fadeIn")
              ? this.animate(n2, e2, () => {
                this.done(t2);
              })
              : this.done(t2));
      }
      done(t2) {
        this.isClosing() ||
          ((t2.state = Z.Ready),
            this.emit("done", t2),
            E(t2.el, "is-done"),
            this.isCurrentSlide(t2) &&
            this.option("autoFocus") &&
            queueMicrotask(() => {
              this.option("autoFocus") &&
                (this.option("autoFocus") ? this.focus() : this.checkFocus());
            }),
            this.isOpeningSlide(t2) &&
            !this.isCompact &&
            this.option("idle") &&
            this.setIdle());
      }
      isCurrentSlide(t2) {
        const e2 = this.getSlide();
        return !(!t2 || !e2) && e2.index === t2.index;
      }
      isOpeningSlide(t2) {
        var e2, i2;
        return (
          null ===
          (null === (e2 = this.carousel) || void 0 === e2
            ? void 0
            : e2.prevPage) &&
          t2.index ===
          (null === (i2 = this.getSlide()) || void 0 === i2
            ? void 0
            : i2.index)
        );
      }
      showLoading(t2) {
        t2.state = Z.Loading;
        const e2 = t2.el;
        if (!e2) return;
        E(e2, "is-loading"),
          this.emit("loading", t2),
          t2.spinnerEl ||
          setTimeout(() => {
            if (
              !this.isClosing() &&
              !t2.spinnerEl &&
              t2.state === Z.Loading
            ) {
              let i2 = n(w);
              (t2.spinnerEl = i2),
                e2.prepend(i2),
                this.animate(i2, "f-fadeIn");
            }
          }, 250);
      }
      hideLoading(t2) {
        const e2 = t2.el;
        if (!e2) return;
        const i2 = t2.spinnerEl;
        this.isClosing()
          ? null == i2 || i2.remove()
          : (S(e2, "is-loading"),
            i2 &&
            this.animate(i2, "f-fadeOut", () => {
              i2.remove();
            }),
            t2.state === Z.Loading &&
            (this.emit("loaded", t2), (t2.state = Z.Ready)));
      }
      setError(t2, e2) {
        if (this.isClosing()) return;
        const i2 = new Event("error", { bubbles: true, cancelable: true });
        if ((this.emit("error", i2, t2), i2.defaultPrevented)) return;
        (t2.error = e2), this.hideLoading(t2), this.clearContent(t2);
        const n2 = document.createElement("div");
        n2.classList.add("fancybox-error"),
          (n2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>")),
          this.setContent(t2, n2);
      }
      clearContent(t2) {
        var e2;
        null === (e2 = this.carousel) ||
          void 0 === e2 ||
          e2.emit("removeSlide", t2);
      }
      getSlide() {
        var t2;
        const e2 = this.carousel;
        return (
          (null ===
            (t2 =
              null == e2 ? void 0 : e2.pages[null == e2 ? void 0 : e2.page]) ||
            void 0 === t2
            ? void 0
            : t2.slides[0]) || void 0
        );
      }
      close(t2, e2) {
        if (this.isClosing()) return;
        const i2 = new Event("shouldClose", {
          bubbles: true,
          cancelable: true,
        });
        if ((this.emit("shouldClose", i2, t2), i2.defaultPrevented)) return;
        t2 && t2.cancelable && (t2.preventDefault(), t2.stopPropagation());
        const n2 = this.fsAPI,
          s2 = () => {
            this.proceedClose(t2, e2);
          };
        n2 && n2.isFullscreen()
          ? Promise.resolve(n2.exit()).then(() => s2())
          : s2();
      }
      clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
      }
      setIdle(t2 = false) {
        const e2 = () => {
          this.clearIdle(),
            (this.idle = true),
            E(this.container, "is-idle"),
            this.emit("setIdle");
        };
        if ((this.clearIdle(), !this.isClosing()))
          if (t2) e2();
          else {
            const t3 = this.option("idle");
            t3 && (this.idleTimer = setTimeout(e2, t3));
          }
      }
      endIdle() {
        this.clearIdle(),
          this.idle &&
          !this.isClosing() &&
          ((this.idle = false),
            S(this.container, "is-idle"),
            this.emit("endIdle"));
      }
      resetIdle() {
        this.endIdle(), this.setIdle();
      }
      toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(true);
      }
      toggleFullscreen() {
        const t2 = this.fsAPI;
        t2 &&
          (t2.isFullscreen()
            ? t2.exit()
            : this.container && t2.request(this.container));
      }
      isClosing() {
        return [V.Closing, V.CustomClosing, V.Destroy].includes(this.state);
      }
      proceedClose(t2, e2) {
        var i2, n2;
        (this.state = V.Closing), this.clearIdle(), this.detachEvents();
        const s2 = this.container,
          o2 = this.carousel,
          a2 = this.getSlide(),
          r2 =
            a2 && this.option("placeFocusBack")
              ? a2.triggerEl || this.option("triggerEl")
              : null;
        if (
          (r2 && (N(r2) ? Y(r2) : r2.focus()),
            s2 &&
            (E(s2, "is-closing"),
              s2.setAttribute("aria-hidden", "true"),
              this.option("animated") && E(s2, "is-animated"),
              (s2.style.pointerEvents = "none")),
            o2)
        ) {
          o2.clearTransitions(),
            null === (i2 = o2.panzoom) || void 0 === i2 || i2.destroy(),
            null === (n2 = o2.plugins.Navigation) ||
            void 0 === n2 ||
            n2.detach();
          for (const t3 of o2.slides) {
            (t3.state = Z.Closing), this.hideLoading(t3);
            const e3 = t3.contentEl;
            e3 && this.stop(e3);
            const i3 = null == t3 ? void 0 : t3.panzoom;
            i3 && (i3.stop(), i3.detachEvents(), i3.detachObserver()),
              this.isCurrentSlide(t3) || o2.emit("removeSlide", t3);
          }
        }
        this.emit("close", t2),
          this.state !== V.CustomClosing
            ? (void 0 === e2 && a2 && (e2 = this.optionFor(a2, "hideClass")),
              e2 && a2
                ? (this.animate(a2.contentEl, e2, () => {
                  o2 && o2.emit("removeSlide", a2);
                }),
                  setTimeout(() => {
                    this.destroy();
                  }, 500))
                : this.destroy())
            : setTimeout(() => {
              this.destroy();
            }, 500);
      }
      destroy() {
        var t2;
        if (this.state === V.Destroy) return;
        (this.state = V.Destroy),
          null === (t2 = this.carousel) || void 0 === t2 || t2.destroy();
        const e2 = this.container;
        e2 && e2.remove(), yt.delete(this.id);
        const i2 = xt.getInstance();
        i2
          ? i2.focus()
          : (bt && (bt.remove(), (bt = null)),
            vt && (vt.remove(), (vt = null)),
            S(document.documentElement, "with-fancybox"),
            (() => {
              if (!W) return;
              const t3 = document,
                e3 = t3.body;
              e3.classList.remove("hide-scrollbar"),
                e3.style.setProperty("--fancybox-body-margin", ""),
                t3.documentElement.style.setProperty(
                  "--fancybox-scrollbar-compensate",
                  ""
                );
            })(),
            this.emit("destroy"));
      }
      static bind(t2, e2, i2) {
        if (!W) return;
        let n2,
          s2 = "",
          o2 = {};
        if (
          (void 0 === t2
            ? (n2 = document.body)
            : "string" == typeof t2
              ? ((n2 = document.body),
                (s2 = t2),
                "object" == typeof e2 && (o2 = e2 || {}))
              : ((n2 = t2),
                "string" == typeof e2 && (s2 = e2),
                "object" == typeof i2 && (o2 = i2 || {})),
            !n2 || !x(n2))
        )
          return;
        s2 = s2 || "[data-fancybox]";
        const a2 = xt.openers.get(n2) || /* @__PURE__ */ new Map();
        a2.set(s2, o2),
          xt.openers.set(n2, a2),
          1 === a2.size && n2.addEventListener("click", xt.fromEvent);
      }
      static unbind(t2, e2) {
        let i2,
          n2 = "";
        if (
          ("string" == typeof t2
            ? ((i2 = document.body), (n2 = t2))
            : ((i2 = t2), "string" == typeof e2 && (n2 = e2)),
            !i2)
        )
          return;
        const s2 = xt.openers.get(i2);
        s2 && n2 && s2.delete(n2),
          (n2 && s2) ||
          (xt.openers.delete(i2),
            i2.removeEventListener("click", xt.fromEvent));
      }
      static destroy() {
        let t2;
        for (; (t2 = xt.getInstance());) t2.destroy();
        for (const t3 of xt.openers.keys())
          t3.removeEventListener("click", xt.fromEvent);
        xt.openers = /* @__PURE__ */ new Map();
      }
      static fromEvent(t2) {
        if (t2.defaultPrevented) return;
        if (t2.button && 0 !== t2.button) return;
        if (t2.ctrlKey || t2.metaKey || t2.shiftKey) return;
        let e2 = t2.composedPath()[0];
        const i2 = e2.closest("[data-fancybox-trigger]");
        if (i2) {
          const t3 = i2.dataset.fancyboxTrigger || "",
            n3 = document.querySelectorAll(`[data-fancybox="${t3}"]`),
            s3 = parseInt(i2.dataset.fancyboxIndex || "", 10) || 0;
          e2 = n3[s3] || e2;
        }
        if (!(e2 && e2 instanceof Element)) return;
        let n2, s2, o2, a2;
        if (
          ([...xt.openers].reverse().find(
            ([t3, i3]) =>
              !(
                !t3.contains(e2) ||
                ![...i3].reverse().find(([i4, r3]) => {
                  let l3 = e2.closest(i4);
                  return (
                    !!l3 && ((n2 = t3), (s2 = i4), (o2 = l3), (a2 = r3), true)
                  );
                })
              )
          ),
            !n2 || !s2 || !o2)
        )
          return;
        (a2 = a2 || {}), t2.preventDefault(), (e2 = o2);
        let r2 = [],
          l2 = u({}, q, a2);
        (l2.event = t2), (l2.triggerEl = e2), (l2.delegate = i2);
        const c2 = l2.groupAll,
          h2 = l2.groupAttr,
          d2 = h2 && e2 ? e2.getAttribute(`${h2}`) : "";
        if (
          ((!e2 || d2 || c2) && (r2 = [].slice.call(n2.querySelectorAll(s2))),
            e2 &&
            !c2 &&
            (r2 = d2
              ? r2.filter((t3) => t3.getAttribute(`${h2}`) === d2)
              : [e2]),
            !r2.length)
        )
          return;
        const p2 = xt.getInstance();
        return p2 &&
          p2.options.triggerEl &&
          r2.indexOf(p2.options.triggerEl) > -1
          ? void 0
          : (e2 && (l2.startIndex = r2.indexOf(e2)), xt.fromNodes(r2, l2));
      }
      static fromSelector(t2, e2) {
        let i2 = null,
          n2 = "";
        if (
          ("string" == typeof t2
            ? ((i2 = document.body), (n2 = t2))
            : t2 instanceof HTMLElement &&
            "string" == typeof e2 &&
            ((i2 = t2), (n2 = e2)),
            !i2 || !n2)
        )
          return false;
        const s2 = xt.openers.get(i2);
        if (!s2) return false;
        const o2 = s2.get(n2);
        return !!o2 && xt.fromNodes(Array.from(i2.querySelectorAll(n2)), o2);
      }
      static fromNodes(t2, e2) {
        e2 = u({}, q, e2 || {});
        const i2 = [];
        for (const n2 of t2) {
          const t3 = n2.dataset || {},
            s2 =
              t3.src ||
              n2.getAttribute("href") ||
              n2.getAttribute("currentSrc") ||
              n2.getAttribute("src") ||
              void 0;
          let o2;
          const a2 = e2.delegate;
          let r2;
          a2 &&
            i2.length === e2.startIndex &&
            (o2 =
              a2 instanceof HTMLImageElement
                ? a2
                : a2.querySelector("img:not([aria-hidden])")),
            o2 ||
            (o2 =
              n2 instanceof HTMLImageElement
                ? n2
                : n2.querySelector("img:not([aria-hidden])")),
            o2 &&
            ((r2 = o2.currentSrc || o2.src || void 0),
              !r2 &&
              o2.dataset &&
              (r2 = o2.dataset.lazySrc || o2.dataset.src || void 0));
          const l2 = {
            src: s2,
            triggerEl: n2,
            thumbEl: o2,
            thumbElSrc: r2,
            thumbSrc: r2,
          };
          for (const e3 in t3) "fancybox" !== e3 && (l2[e3] = t3[e3] + "");
          i2.push(l2);
        }
        return new xt(i2, e2);
      }
      static getInstance(t2) {
        if (t2) return yt.get(t2);
        return (
          Array.from(yt.values())
            .reverse()
            .find((t3) => !t3.isClosing() && t3) || null
        );
      }
      static getSlide() {
        var t2;
        return (
          (null === (t2 = xt.getInstance()) || void 0 === t2
            ? void 0
            : t2.getSlide()) || null
        );
      }
      static show(t2 = [], e2 = {}) {
        return new xt(t2, e2);
      }
      static next() {
        const t2 = xt.getInstance();
        t2 && t2.next();
      }
      static prev() {
        const t2 = xt.getInstance();
        t2 && t2.prev();
      }
      static close(t2 = true, ...e2) {
        if (t2) for (const t3 of yt.values()) t3.close(...e2);
        else {
          const t3 = xt.getInstance();
          t3 && t3.close(...e2);
        }
      }
    }
    Object.defineProperty(xt, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "5.0.19",
    }),
      Object.defineProperty(xt, "defaults", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: q,
      }),
      Object.defineProperty(xt, "Plugins", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: mt,
      }),
      Object.defineProperty(xt, "openers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: /* @__PURE__ */ new Map(),
      });
    function galleryLightbox() {
      xt.bind("[data-fancybox]", {
        Image: {
          zoom: true,
        },
        idle: false,
        Toolbar: {
          display: {
            left: [],
            middle: [],
            right: ["close"],
          },
          Thumbs: true,
        },
        Thumbs: {
          type: "classic",
        },
      });
    }
    class Dropdown {
      constructor(config) {
        const defaults2 = {
          parentSelector: "[data-parent-dropdown]",
          setSelector: "[data-set-dropdown]",
          getSelector: "[data-get-dropdown]",
          labelSelector: "[data-label-dropdown]",
          optionsSelector: "[data-option-dropdown]",
          defaultActiveIndex: 0,
          // Nenhum ativo por padrão
          onOpen: null,
          // Callback quando o dropdown é aberto
          onClose: null,
          // Callback quando o dropdown é fechado
          closeOnSelectOption: true,
          // Fecha o dropdown ao selecionar uma opção
        };
        this.config = { ...defaults2, ...config };
        this.initialize();
        this.attachEventListeners();
      }
      initialize() {
        this.dropdownParent = document.querySelector(
          this.config.parentSelector
        );
        this.dropdownSet = this.dropdownParent.querySelector(
          this.config.setSelector
        );
        this.dropdownGet = this.dropdownParent.querySelector(
          this.config.getSelector
        );
        this.dropdownLabel = this.dropdownParent.querySelector(
          this.config.labelSelector
        );
        this.dropdownOptions = this.dropdownParent.querySelectorAll(
          this.config.optionsSelector
        );
        this.dropdownClickOutside = onClickOutside(
          this.dropdownParent,
          () => this.close(),
          { autoStart: false }
        );
      }
      attachEventListeners() {
        this.dropdownSet.addEventListener("click", () => {
          if (this.dropdownParent.classList.contains("active")) {
            this.close();
          } else {
            this.open();
          }
        });
        this.dropdownOptions.forEach((element) => {
          element.addEventListener("click", () => {
            this.setActive(element);
            if (this.config.closeOnSelectOption) {
              this.close();
            }
          });
        });
      }
      setActive(element) {
        this.dropdownOptions.forEach((opt) => opt.removeActive());
        element.addActive();
        this.dropdownLabel.innerText = element.innerText;
      }
      open() {
        if (!this.dropdownParent.classList.contains("active")) {
          this.dropdownParent.addActive();
          this.dropdownGet.addActive();
          this.dropdownClickOutside.start();
          if (typeof this.config.onOpen === "function") {
            this.config.onOpen();
          }
        }
      }
      close() {
        if (this.dropdownParent.classList.contains("active")) {
          this.dropdownParent.removeActive();
          this.dropdownGet.removeActive();
          if (typeof this.config.onClose === "function") {
            this.config.onClose();
          }
        }
      }
      toggle() {
        if (this.dropdownParent.classList.contains("active")) {
          this.close();
        } else {
          this.open();
        }
      }
    }
    gsapWithCSS$1.registerPlugin(ScrollTrigger);

    // Gallery Page
    const pageName$3 = "gallery";
    function main$3() {
      galleryLightbox();

      new Dropdown({
        parentSelector: "[data-parent-dropdown]",
        setSelector: "[data-set-dropdown]",
        getSelector: "[data-get-dropdown]",
        labelSelector: "[data-label-dropdown]",
        optionsSelector: "[data-option-dropdown]",
        closeOnSelectOption: true,
        defaultActiveIndex: 0,
        onOpen: function () { },
        onClose: function () { },
      });
    }
    const pgGallery = new Page({
      pageName: pageName$3,
      main: main$3,
    });

    // Collections Page Cusatom JS
    document.querySelector(".galleryImages").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      main$3();
      collections();
      galleryLightbox();
    });

    // Collections Page Custom JS

    // Collections Page
    const pageName$2 = "collections";
    function main$2() {
      galleryLightbox();
    }

    // Collections Page Custom JS
    document.querySelector(".galleryLightBox").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      galleryLightbox();
    });

    // Collections Page Custom JS

    const pgCollectionsPost = new Page({
      pageName: pageName$2,
      main: main$2,
    });
    var splitting = { exports: {} };
    (function (module2, exports2) {
      (function (global, factory) {
        module2.exports = factory();
      })(commonjsGlobal, function () {
        var root = document;
        var createText = root.createTextNode.bind(root);
        function setProperty(el, varName, value) {
          el.style.setProperty(varName, value);
        }
        function appendChild(el, child) {
          return el.appendChild(child);
        }
        function createElement(parent2, key, text, whitespace) {
          var el = root.createElement("span");
          key && (el.className = key);
          if (text) {
            !whitespace && el.setAttribute("data-" + key, text);
            el.textContent = text;
          }
          return (parent2 && appendChild(parent2, el)) || el;
        }
        function getData(el, key) {
          return el.getAttribute("data-" + key);
        }
        function $2(e2, parent2) {
          return !e2 || e2.length == 0
            ? // null or empty string returns empty array
            []
            : e2.nodeName
              ? // a single element is wrapped in an array
              [e2]
              : // selector and NodeList are converted to Element[]
              [].slice.call(
                e2[0].nodeName ? e2 : (parent2 || root).querySelectorAll(e2)
              );
        }
        function Array2D(len) {
          var a2 = [];
          for (; len--;) {
            a2[len] = [];
          }
          return a2;
        }
        function each(items, fn) {
          items && items.some(fn);
        }
        function selectFrom(obj) {
          return function (key) {
            return obj[key];
          };
        }
        function index(element, key, items) {
          var prefix = "--" + key;
          var cssVar = prefix + "-index";
          each(items, function (items2, i2) {
            if (Array.isArray(items2)) {
              each(items2, function (item) {
                setProperty(item, cssVar, i2);
              });
            } else {
              setProperty(items2, cssVar, i2);
            }
          });
          setProperty(element, prefix + "-total", items.length);
        }
        var plugins = {};
        function resolvePlugins(by, parent2, deps) {
          var index2 = deps.indexOf(by);
          if (index2 == -1) {
            deps.unshift(by);
            each(plugins[by].depends, function (p2) {
              resolvePlugins(p2, by, deps);
            });
          } else {
            var indexOfParent = deps.indexOf(parent2);
            deps.splice(index2, 1);
            deps.splice(indexOfParent, 0, by);
          }
          return deps;
        }
        function createPlugin(by, depends, key, split) {
          return {
            by,
            depends,
            key,
            split,
          };
        }
        function resolve(by) {
          return resolvePlugins(by, 0, []).map(selectFrom(plugins));
        }
        function add2(opts) {
          plugins[opts.by] = opts;
        }
        function splitText(
          el,
          key,
          splitOn,
          includePrevious,
          preserveWhitespace
        ) {
          el.normalize();
          var elements = [];
          var F2 = document.createDocumentFragment();
          if (includePrevious) {
            elements.push(el.previousSibling);
          }
          var allElements = [];
          $2(el.childNodes).some(function (next) {
            if (next.tagName && !next.hasChildNodes()) {
              allElements.push(next);
              return;
            }
            if (next.childNodes && next.childNodes.length) {
              allElements.push(next);
              elements.push.apply(
                elements,
                splitText(
                  next,
                  key,
                  splitOn,
                  includePrevious,
                  preserveWhitespace
                )
              );
              return;
            }
            var wholeText = next.wholeText || "";
            var contents = wholeText.trim();
            if (contents.length) {
              if (wholeText[0] === " ") {
                allElements.push(createText(" "));
              }
              each(contents.split(splitOn), function (splitText2, i2) {
                if (i2 && preserveWhitespace) {
                  allElements.push(
                    createElement(F2, "whitespace", " ", preserveWhitespace)
                  );
                }
                var splitEl = createElement(F2, key, splitText2);
                elements.push(splitEl);
                allElements.push(splitEl);
              });
              if (wholeText[wholeText.length - 1] === " ") {
                allElements.push(createText(" "));
              }
            }
          });
          each(allElements, function (el2) {
            appendChild(F2, el2);
          });
          el.innerHTML = "";
          appendChild(el, F2);
          return elements;
        }
        var _2 = 0;
        function copy(dest, src) {
          for (var k2 in src) {
            dest[k2] = src[k2];
          }
          return dest;
        }
        var WORDS = "words";
        var wordPlugin = createPlugin(
          /*by: */
          WORDS,
          /*depends: */
          _2,
          /*key: */
          "word",
          /*split: */
          function (el) {
            return splitText(el, "word", /\s+/, 0, 1);
          }
        );
        var CHARS = "chars";
        var charPlugin = createPlugin(
          /*by: */
          CHARS,
          /*depends: */
          [WORDS],
          /*key: */
          "char",
          /*split: */
          function (el, options, ctx) {
            var results = [];
            each(ctx[WORDS], function (word, i2) {
              results.push.apply(
                results,
                splitText(word, "char", "", options.whitespace && i2)
              );
            });
            return results;
          }
        );
        function Splitting2(opts) {
          opts = opts || {};
          var key = opts.key;
          return $2(opts.target || "[data-splitting]").map(function (el) {
            var ctx = el["🍌"];
            if (!opts.force && ctx) {
              return ctx;
            }
            ctx = el["🍌"] = { el };
            var items = resolve(opts.by || getData(el, "splitting") || CHARS);
            var opts2 = copy({}, opts);
            each(items, function (plugin) {
              if (plugin.split) {
                var pluginBy = plugin.by;
                var key2 = (key ? "-" + key : "") + plugin.key;
                var results = plugin.split(el, opts2, ctx);
                key2 && index(el, key2, results);
                ctx[pluginBy] = results;
                el.classList.add(pluginBy);
              }
            });
            el.classList.add("splitting");
            return ctx;
          });
        }
        function html(opts) {
          opts = opts || {};
          var parent2 = (opts.target = createElement());
          parent2.innerHTML = opts.content;
          Splitting2(opts);
          return parent2.outerHTML;
        }
        Splitting2.html = html;
        Splitting2.add = add2;
        function detectGrid(el, options, side) {
          var items = $2(options.matching || el.children, el);
          var c2 = {};
          each(items, function (w2) {
            var val = Math.round(w2[side]);
            (c2[val] || (c2[val] = [])).push(w2);
          });
          return Object.keys(c2).map(Number).sort(byNumber).map(selectFrom(c2));
        }
        function byNumber(a2, b2) {
          return a2 - b2;
        }
        var linePlugin = createPlugin(
          /*by: */
          "lines",
          /*depends: */
          [WORDS],
          /*key: */
          "line",
          /*split: */
          function (el, options, ctx) {
            return detectGrid(el, { matching: ctx[WORDS] }, "offsetTop");
          }
        );
        var itemPlugin = createPlugin(
          /*by: */
          "items",
          /*depends: */
          _2,
          /*key: */
          "item",
          /*split: */
          function (el, options) {
            return $2(options.matching || el.children, el);
          }
        );
        var rowPlugin = createPlugin(
          /*by: */
          "rows",
          /*depends: */
          _2,
          /*key: */
          "row",
          /*split: */
          function (el, options) {
            return detectGrid(el, options, "offsetTop");
          }
        );
        var columnPlugin = createPlugin(
          /*by: */
          "cols",
          /*depends: */
          _2,
          /*key: */
          "col",
          /*split: */
          function (el, options) {
            return detectGrid(el, options, "offsetLeft");
          }
        );
        var gridPlugin = createPlugin(
          /*by: */
          "grid",
          /*depends: */
          ["rows", "cols"]
        );
        var LAYOUT = "layout";
        var layoutPlugin = createPlugin(
          /*by: */
          LAYOUT,
          /*depends: */
          _2,
          /*key: */
          _2,
          /*split: */
          function (el, opts) {
            var rows = (opts.rows = +(opts.rows || getData(el, "rows") || 1));
            var columns = (opts.columns = +(
              opts.columns ||
              getData(el, "columns") ||
              1
            ));
            opts.image =
              opts.image || getData(el, "image") || el.currentSrc || el.src;
            if (opts.image) {
              var img = $2("img", el)[0];
              opts.image = img && (img.currentSrc || img.src);
            }
            if (opts.image) {
              setProperty(el, "background-image", "url(" + opts.image + ")");
            }
            var totalCells = rows * columns;
            var elements = [];
            var container = createElement(_2, "cell-grid");
            while (totalCells--) {
              var cell = createElement(container, "cell");
              createElement(cell, "cell-inner");
              elements.push(cell);
            }
            appendChild(el, container);
            return elements;
          }
        );
        var cellRowPlugin = createPlugin(
          /*by: */
          "cellRows",
          /*depends: */
          [LAYOUT],
          /*key: */
          "row",
          /*split: */
          function (el, opts, ctx) {
            var rowCount = opts.rows;
            var result = Array2D(rowCount);
            each(ctx[LAYOUT], function (cell, i2, src) {
              result[Math.floor(i2 / (src.length / rowCount))].push(cell);
            });
            return result;
          }
        );
        var cellColumnPlugin = createPlugin(
          /*by: */
          "cellColumns",
          /*depends: */
          [LAYOUT],
          /*key: */
          "col",
          /*split: */
          function (el, opts, ctx) {
            var columnCount = opts.columns;
            var result = Array2D(columnCount);
            each(ctx[LAYOUT], function (cell, i2) {
              result[i2 % columnCount].push(cell);
            });
            return result;
          }
        );
        var cellPlugin = createPlugin(
          /*by: */
          "cells",
          /*depends: */
          ["cellRows", "cellColumns"],
          /*key: */
          "cell",
          /*split: */
          function (el, opt, ctx) {
            return ctx[LAYOUT];
          }
        );
        add2(wordPlugin);
        add2(charPlugin);
        add2(linePlugin);
        add2(itemPlugin);
        add2(rowPlugin);
        add2(columnPlugin);
        add2(gridPlugin);
        add2(layoutPlugin);
        add2(cellRowPlugin);
        add2(cellColumnPlugin);
        add2(cellPlugin);
        return Splitting2;
      });
    })(splitting);
    var splittingExports = splitting.exports;
    const Splitting = /* @__PURE__ */ getDefaultExportFromCjs(splittingExports);
    function splitWords() {
      document
        .querySelectorAll(".split-words:not(.splitting)")
        .forEach((element) => {
          const results = Splitting({
            target: element,
            by: "lines",
          });
          new DocumentFragment();
          results[0].lines.forEach((ar, i2) => {
            ar.forEach((el, j2) => {
              if (j2 == 0) {
                el.classList.add("first-word");
              }
              el.classList.add("wrapper-mask");
              el.innerHTML =
                '<span class="line-' +
                i2 +
                '">' +
                el.innerHTML +
                "<span>&nbsp;</span></span>";
            });
          });
          element.querySelectorAll(".whitespace").forEach((el) => {
            el.remove();
          });
        });
    }
    document.addEventListener("pjax:complete", splitWords);
    function splitChars() {
      document
        .querySelectorAll(".split-chars:not(.splitting)")
        .forEach((element) => {
          Splitting({
            target: element,
            by: "chars",
          });
        });
    }
    document.addEventListener("pjax:complete", splitChars);
    function copyLink() {
      var copyTextareaBtn = document.querySelectorAll(
        ".container-copy:not(.js-copy-link-running)"
      );
      copyTextareaBtn.forEach((element) => {
        element.classList.add("js-copy-link-running");
        element
          .querySelector(".copy-link")
          .addEventListener("click", function (event) {
            this.querySelector("span").innerText = "Copied!";
            this.classList.add("copied");
            element.querySelector(".copy-link-url").select();
            document.execCommand("copy");
          });
      });
    }
    function cancelProduct() {
      let listCartItem = document.querySelectorAll(
        ".list-cart-product .list-item:not(.js-running-cancel-product)"
      );
      listCartItem.forEach((element) => {
        element.classList.add("js-running-cancel-product");
        let btnCancel = element.querySelector(".btn-cancel");
        btnCancel.addEventListener("click", function () {
          element.classList.add("fadeOut");
          setTimeout(() => {
            element.classList.add("d-none");
          }, 400);
        });
      });
    }
    cancelProduct();
    function manualModalCloseControls() {
      document
        .querySelectorAll(".manual-modal-close:not(.js-modal-close-running)")
        .forEach((element) => {
          element.classList.add("js-modal-close-running");
          element.addEventListener("click", function () {
            manualModalClose();
          });
        });
    }

    // Quotes History Page
    const pageName$1 = "my-account-quotes-history";
    function main$1() {
      manualModalCloseControls();
    }
    const pgMyAccountQuotesHistory = new Page({
      pageName: pageName$1,
      main: main$1,
    });

    // Quotes History Page Custom JS
    document.querySelector(".quotesHistory").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      manualModalCloseControls();
    });

    // Quotes History Page Custom JS

    // Saved Products Page
    const pageName = "my-account-saved-products";
    function main() {
      productLinkColor();
    }
    const pgMyAccountSavedProducts = new Page({
      pageName,
      main,
    });
    smoothScrollConvencional();
    const submenu = new DataSetGet({
      parentContainer: "[data-parent-submenu]",
      dataGetSelector: "[data-get-submenu]",
      dataSetSelector: "[data-set-submenu]",
      defaultActive: "[data-default-active-submenu]",
      listener: "click",
      //'hover' ou 'click'
      toggle: true,
      multiple: false,
      deactivateOnClickOutside: true,
      leaveDelay: 800,
      onClose: () => { },
      onComplete: () => { },
      onActivate: (item) => { },
      onDeactivate: (item) => { },
    });
    document.addEventListener("pjax:send", function () {
      submenu.deactivateItems();
    });
    var firstLoad = true;
    function whenContainerReady() {

      if (firstLoad) {
        firstLoad = false;
      }
      Contato();
      marcarFormPreenchido();
      initVideo();
      scrollTo("", "");
      Parallax();
      Forms();
      splitWords();
      splitChars();
      copyLink();
      viewportHeight();

      const main$products = () => {
        filterProducts();
        main$productsPost();
      }
      const main$product = () => {
        main$5();
        main$productsPost();
        formCart();
      }
      const main$productsPost = () => {
        window.scrollTo({ top: 0, behavior: "instant" });

        new Swiper("#slider-match-with .swiper-container", {
          modules: [Navigation, Pagination],
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: false,
          effect: "slide",
          pagination: {
            el: "#slider-match-with .swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: "#slider-match-with .swiper-button-next",
            prevEl: "#slider-match-with .swiper-button-prev",
          },
          loopFillGroupWithBlank: false,
          centerInsufficientSlides: true,
          grabCursor: false,
          observer: true,
          watchOverflow: true,
          speed: 600,
          preventClicksPropagation: false,
          // Responsive breakpoints
          breakpoints: {
            767: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1025: {
              slidesPerView: "auto",
              slidesPerGroup: 1,
            },
          },
        });
        filterProducts();
        productContent();
      }
      const main$gallery = () => {
        main$3();
        collections();
        galleryLightbox();
        main$productsPost();
      }
      const main$collectionspost = () => {
        main$2()
        galleryLightbox();
      }
      const page = window.location.pathname.trim() === "/" ? "home" : location.pathname.substring(1);
      const page_name = page.split("/")[0].trim();
      document.body.dataset.pg = `pg-${page_name}`;

      switch (page_name) {
        case 'home':
          main$8();
          break;
        case 'gallery':
          main$gallery();
          break;
        case 'collections':
          main$collectionspost();
          break;
        case 'products':
          main$products();
          break;
        case 'product':
          main$product();
          break;
        case 'my-account':
          main$03();
        case 'my-account-saved-products':
          main();
        case 'my-account-quotes-history':
          main$1();
        case 'my-account-change-password':
          main$01();
          break;
        case 'search':
          main$4();
          break;
        case 'cart':
          main$6();
          break;
        default:
          break;
      }
    }

    // Saved Poducts Page Custom JS
    document.querySelector(".savedProducts").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      productLinkColor();
    });

    // Saved Poducts Page Custom JS

    //  Change Password Page
    const pageName$01 = "my-account-change-password";
    function main$01() { }
    const pgChangePassword = new Page({
      pageName: pageName$01,
      main: main$01,
    });

    document.querySelector(".changePassword").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    //  Change Password Page

    const pageName$02 = "pg-collections";
    function main$02() { }
    const pgCollections = new Page({
      pageName: pageName$02,
      main: main$02,
    });

    document.querySelector(".collections").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });

    // My Acocunt
    const pageName$03 = "pg-my-account";
    function main$03() { }
    const pgMyAccount = new Page({
      pageName: pageName$03,
      main: main$03,
    });

    document.querySelector(".myAccount").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    // My Acocunt

    // Custom js
    document.querySelector(".initScript").addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "instant" });
      whenContainerReady();
    });

    document.querySelector(".updateWatched").addEventListener("click", () => {
      updateWatched();
      productLinkColor();
    });

    // document.addEventListener("pjax:complete", whenContainerReady);
    // document.addEventListener("pjax:send", whenContainerLeave);
    // function whenContainerLeave() {
    //   document.body.classList.add("page-leave-active");
    //   manualModalClose();
    // }
    // window.modalClose = manualModalClose;
    // const pages = new PageController();
    // pages.add(pgHome);
    // pages.add(pgProducts);
    // pages.add(pgProductsPost);
    // pages.add(pgCart);
    // pages.add(pgSearch);
    // pages.add(pgGallery);
    // pages.add(pgCollections);
    // pages.add(pgCollectionsPost);
    // pages.add(pgMyAccount);
    // pages.add(pgMyAccountQuotesHistory);
    // pages.add(pgMyAccountSavedProducts);
    // pages.add(pgChangePassword);
    // if (pages.updateCurrent()) {
    //   pages.runCurrent();
    // }
    // if (typeof loader !== "undefined") {
    //   loader.onFirstLeaving = () => {
    //     setTimeout(() => {
    //       observers();
    //       updateWatched();
    //     }, 1200);
    //     document.dispatchEvent(new CustomEvent("loaded"));
    //   };
    //   loader.onFirstDone = () => {
    //     document.body.classList.remove("overflow-hidden");
    //     setTimeout(() => {
    //       document.querySelector("#loader").remove();
    //     }, 1800);
    //   };
    //   // setTimeout(() => {
    //   //   loader.state.scriptReady = true;
    //   // }, 400);
    // }
  },
});
export default require_app2();
