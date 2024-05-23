import { g as getDocument, i as isObject, d as elementChildren, S as Swiper, N as Navigation } from "./navigation.js";
import { t as toElement, D as DataSetGet } from "./data-set-get.js";
function Thumb({
  swiper,
  extendParams,
  on
}) {
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass))
      return;
    if (typeof clickedIndex === "undefined" || clickedIndex === null)
      return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized)
      return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if (isObject(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on("tap", onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach((slideEl) => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
      }
      if (useOffset) {
        newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1)
          ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
      }
    }
  }
  on("beforeInit", () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper)
      return;
    if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
      const document2 = getDocument();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = (e) => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener("init", onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener("init", onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed)
          return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on("slideChange update resize observerUpdate", () => {
    update();
  });
  on("setTransition", (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    thumbsSwiper.setTransition(duration);
  });
  on("beforeDestroy", () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed)
      return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}
class InfiniteImageScroller {
  constructor(element, numberOfFrames, folderPath, fileExtension, swiper = null) {
    this.canvas = toElement(element);
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.ctx = this.canvas.getContext("2d");
    this.numberOfFrames = numberOfFrames;
    this.folderPath = folderPath.endsWith("/") ? folderPath : folderPath;
    this.fileExtension = fileExtension.startsWith(".") ? fileExtension : "." + fileExtension;
    this.swiper = swiper;
    this.images = [];
    this.currentIndex = 0;
    this.isDragging = false;
    this.boundMouseMove = this.handleMouseMove.bind(this);
    this.boundMouseUp = this.handleMouseUp.bind(this);
    this.boundTouchMove = this.handleTouchMove.bind(this);
    this.boundTouchEnd = this.handleTouchEnd.bind(this);
    this.loadImages();
    this.attachEventListeners();
  }
  loadImages() {
    for (let i = 1; i <= this.numberOfFrames; i++) {
      const img = new Image();
      img.onload = () => {
        this.images[i - 1] = img;
        if (i === 1)
          this.draw();
      };
      img.src = `${this.folderPath}${i}${this.fileExtension}`;
    }
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.images[this.currentIndex], 0, 0, this.canvas.width, this.canvas.height);
  }
  attachEventListeners() {
    this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    this.canvas.addEventListener("touchstart", this.handleTouchStart.bind(this), { passive: false });
    window.addEventListener("resize", this.resize.bind(this));
  }
  handleMouseDown(event) {
    this.startInteraction(event.clientX);
    event.preventDefault();
  }
  handleTouchStart(event) {
    const touch = event.touches[0];
    this.startInteraction(touch.clientX);
    event.preventDefault();
  }
  startInteraction(startX) {
    if (this.swiper) {
      this.swiper.allowTouchMove = false;
    }
    this.startX = startX;
    this.isDragging = true;
    window.addEventListener("mousemove", this.boundMouseMove);
    window.addEventListener("mouseup", this.boundMouseUp);
    window.addEventListener("touchmove", this.boundTouchMove, { passive: false });
    window.addEventListener("touchend", this.boundTouchEnd);
  }
  handleMouseMove(event) {
    this.moveInteraction(event.clientX);
  }
  handleTouchMove(event) {
    const touch = event.touches[0];
    this.moveInteraction(touch.clientX);
    event.preventDefault();
  }
  moveInteraction(currentX) {
    if (!this.isDragging)
      return;
    let dx = currentX - this.startX;
    if (Math.abs(dx) > 5) {
      this.startX = currentX;
      this.currentIndex += dx > 0 ? -1 : 1;
      if (this.currentIndex < 0)
        this.currentIndex = this.images.length - 1;
      if (this.currentIndex >= this.images.length)
        this.currentIndex = 0;
      this.draw();
    }
  }
  handleMouseUp() {
    this.endInteraction();
  }
  handleTouchEnd() {
    this.endInteraction();
  }
  endInteraction() {
    if (this.swiper) {
      this.swiper.allowTouchMove = true;
    }
    this.isDragging = false;
    window.removeEventListener("mousemove", this.boundMouseMove);
    window.removeEventListener("mouseup", this.boundMouseUp);
    window.removeEventListener("touchmove", this.boundTouchMove);
    window.removeEventListener("touchend", this.boundTouchEnd);
  }
  resize() {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;
    this.draw();
  }
}

export function initializeCanvas() {
  let productContent2 = document.querySelectorAll("[data-product-content]");
  productContent2.forEach((element) => {
    element.querySelectorAll(".infinite-image-scroller").forEach((ele) => {
      const imageScroller = new InfiniteImageScroller(
        ele,
        ele.dataset.frames,
        ele.dataset.path,
        ele.dataset.extension
      );
      ele.InfiniteImageScroller = imageScroller;
    });
  });
}

export function productContent() {
  let productContent2 = document.querySelectorAll(
    "[data-product-content]:not(.js-cart-running)"
  );
  productContent2.forEach((element) => {
    element.classList.add("js-cart-running");
    new DataSetGet({
      parentContainer: element,
      dataGetSelector: "[data-get-color]",
      dataSetSelector: "[data-set-color]",
      listener: "click",
      //'hover' ou 'click'
      toggle: false,
      multiple: false,
      deactivateOnClickOutside: false,
      leaveDelay: 800,
      onClose: () => { },
      onComplete: () => { },
      onActivate: (item) => { },
      onDeactivate: (item) => { },
    });
    let slider = element.querySelectorAll(
      ".wrapper-slider-product:not(.js-slider-running)"
    );
    slider.forEach((el) => {
      el.classList.add("js-slider-running");
      let sliderProductThumb = new Swiper(
        el.querySelector(".slider-product-thumb .swiper-container"),
        {
          modules: [Navigation],
          slidesPerView: "auto",
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: false,
          effect: "slide",
          pagination: {
            el: el.querySelector(".slider-product-thumb .swiper-pagination"),
            clickable: true,
          },
          navigation: {
            nextEl: el.querySelector(
              ".slider-product-thumb .swiper-button-next"
            ),
            prevEl: el.querySelector(
              ".slider-product-thumb .swiper-button-prev"
            ),
          },
          loopFillGroupWithBlank: false,
          centerInsufficientSlides: true,
          grabCursor: false,
          observer: true,
          preloadImages: false,
          lazy: true,
          watchOverflow: true,
          speed: 600,
          direction: "vertical",
        }
      );
      el.querySelector(".slider-product-thumb .swiper-container").swiper =
        slider;
      let sliderProduct = new Swiper(
        el.querySelector(".slider-product .swiper-container"),
        {
          modules: [Navigation, Thumb],
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerGroup: 1,
          loop: false,
          effect: "slide",
          navigation: {
            nextEl: el.querySelector(".slider-product .swiper-button-next"),
            prevEl: el.querySelector(".slider-product .swiper-button-prev"),
          },
          loopFillGroupWithBlank: false,
          centerInsufficientSlides: true,
          grabCursor: false,
          observer: true,
          preloadImages: false,
          lazy: true,
          watchOverflow: true,
          speed: 600,
          allowTouchMove: false,
          preventClicksPropagation: false,
          thumbs: {
            swiper: sliderProductThumb,
          },
        }
      );
      el.querySelector(".slider-product .swiper-container").swiper =
        sliderProduct;
    });
    element.addEventListener("modal:open", function () {
      setTimeout(() => {
        resizeImages();
      }, 100);
    });
    function resizeImages() {
      let a = element.querySelectorAll(
        ".swiper-slide-active .infinite-image-scroller"
      );
      a.forEach((el) => {
        if (el) el.InfiniteImageScroller.resize();
      });
    }
    element.querySelectorAll("[data-set-color]").forEach((ele) => {
      ele.addEventListener("click", function () {
        setTimeout(() => {
          resizeImages();
        }, 100);
      });
    });
    element
      .querySelectorAll(".slider-product .swiper-container")
      .forEach((ele) => {
        if (ele.swiper) {
          ele.swiper.on("slideChange", function () {
            setTimeout(() => {
              resizeImages();
            }, 100);
          });
        }
      });
  });
}
productContent();
document.addEventListener("pjax:complete", productContent);

