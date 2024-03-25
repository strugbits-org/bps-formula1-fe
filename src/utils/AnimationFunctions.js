export const AnimationFunction = () => {
  document.body.classList.add("page-leave-active");
  setTimeout(() => {
    document.body.classList.remove("page-leave-active");
    document.body.classList.add("page-enter-active");
  }, 900);
};
