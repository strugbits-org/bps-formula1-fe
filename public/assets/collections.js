import { D as DataSetGet } from "./data-set-get.js";
function collections() {
  if (!document.querySelector("[data-parent-collections]"))
    return;
  new DataSetGet({
    parentContainer: "[data-parent-collections]",
    dataGetSelector: "[data-get-collections]",
    dataSetSelector: "[data-set-collections]",
    defaultActive: "[data-default-collections-active]",
    listener: "click",
    toggle: false,
    multiple: false,
    deactivateOnClickOutside: false,
    leaveDelay: 800,
    forceReactivation: true,
    onClose: () => {
    },
    onComplete: () => {
      ScrollTrigger.refresh();
    },
    onActivate: (item) => {
    },
    onDeactivate: (item) => {
    }
  });
}
collections();
document.addEventListener("pjax:complete", collections);
