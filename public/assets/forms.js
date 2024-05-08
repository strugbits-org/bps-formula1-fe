import { s as screen } from "./screen-size.js";
function Forms() {
  let forms = document.querySelectorAll("[data-form-container]:not(.js-running)");
  forms.forEach((containerForm) => {
    containerForm.classList.add("js-running");
    const containerPassword = containerForm.querySelectorAll(".container-input-password");
    if (containerPassword) {
      containerPassword.forEach((element) => {
        const togglePassword = element.querySelector(".toggle-password");
        const password = element.querySelector(".password");
        togglePassword.addEventListener("click", function(e) {
          const type = password.getAttribute("type") === "password" ? "text" : "password";
          password.setAttribute("type", type);
          this.classList.toggle("show");
        });
      });
    }
    const btnDiscard = containerForm.querySelector(".btn-discard");
    if (btnDiscard) {
      btnDiscard.addEventListener("click", function() {
        containerForm.querySelector("form").reset();
      });
    }
    containerForm.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault();
      {
        containerForm.dataset.formState = "success";
      }
    });
  });
  if (screen.isDesktop) {
    var containerSelect, i, j, containerSelectList, ll, selectContent, selected, select, option;
    containerSelect = document.getElementsByClassName("wrapper-select");
    containerSelectList = containerSelect.length;
    if (containerSelect) {
      let closeAllSelect = function(elmnt) {
        var x, y, i2, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i2 = 0; i2 < yl; i2++) {
          if (elmnt == y[i2]) {
            arrNo.push(i2);
          } else {
            y[i2].classList.remove("select-arrow-active");
          }
        }
        for (i2 = 0; i2 < xl; i2++) {
          if (arrNo.indexOf(i2)) {
            x[i2].classList.add("select-hide");
          }
        }
        setTimeout(() => {
          checkSelect();
        }, 100);
      };
      for (i = 0; i < containerSelectList; i++) {
        if (containerSelect[i].classList.contains("js-select-running")) {
          continue;
        }
        containerSelect[i].classList.add("js-select-running");
        selectContent = containerSelect[i].getElementsByTagName("select")[0];
        ll = selectContent.length;
        selected = document.createElement("DIV");
        selected.setAttribute("class", "select-selected");
        selected.innerHTML = selectContent.options[selectContent.selectedIndex].innerHTML;
        containerSelect[i].appendChild(selected);
        select = document.createElement("DIV");
        select.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
          option = document.createElement("DIV");
          option.innerHTML = selectContent.options[j].innerHTML;
          option.addEventListener("click", function(e) {
            var y, i2, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i2 = 0; i2 < sl; i2++) {
              if (s.options[i2].innerHTML == this.innerHTML) {
                s.selectedIndex = i2;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
          });
          select.appendChild(option);
        }
        containerSelect[i].appendChild(select);
        selected.addEventListener("click", function(e) {
          e.stopPropagation();
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
