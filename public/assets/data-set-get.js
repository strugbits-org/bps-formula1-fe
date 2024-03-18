(function() {
  const AddActive = function(options) {
    const addactive = active.bind(this);
    addactive(true, options);
  };
  const RemoveActive = function(options) {
    const removeactive = active.bind(this);
    removeactive(false, options);
  };
  const active = function(active2 = true, options) {
    const {
      delay = -1,
      leave = true,
      leaveDelay = 600
    } = options ? options : {};
    if (active2) {
      this.futureActiveState = true;
      if (delay < 0) {
        this.classList.remove("leave");
        this.classList.add("active");
      } else {
        setTimeout(() => {
          if (this.futureActiveState) {
            this.classList.remove("leave");
            this.classList.add("active");
          }
        }, delay);
      }
    } else {
      this.futureActiveState = false;
      let remove = removeActive.bind(this);
      if (delay < 0) {
        remove();
      } else {
        setTimeout(() => {
          if (this.futureActiveState === false) {
            remove();
          }
        }, delay);
      }
    }
    function removeActive() {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
        if (leave) {
          this.classList.add("leave");
          setTimeout(() => {
            this.classList.remove("leave");
          }, leaveDelay);
        }
      }
    }
  };
  HTMLElement.prototype.addActive = AddActive;
  HTMLElement.prototype.removeActive = RemoveActive;
})();
function toElement(selector) {
  if (typeof selector == "string") {
    return document.querySelector(selector);
  } else if (selector instanceof HTMLElement) {
    return selector;
  } else if (selector instanceof Array && selector[0] instanceof HTMLElement) {
    return selector[0];
  } else if (selector instanceof HTMLCollection) {
    return selector[0];
  } else if (selector instanceof NodeList) {
    return selector[0];
  } else if (selector === window) {
    return window;
  } else {
    console.error("O que é isso? ", selector);
  }
}
class DataSetGet {
  constructor({
    dataGetSelector = "[data-get]",
    dataSetSelector = "[data-set]",
    dataCloseSelector = "[data-close]",
    parentContainer = "[data-parent]",
    defaultActive = "[data-default-active]",
    listener = "click",
    toggle = true,
    multiple = false,
    deactivateOnClickOutside = false,
    leaveDelay = 800,
    debounceDelay = 100,
    // tempo em milissegundos
    forceReactivation = false,
    onClose = () => {
    },
    onActivate = () => {
    },
    onComplete = () => {
    },
    onDeactivate = () => {
    }
  } = {}) {
    this.dataGetSelector = dataGetSelector;
    this.dataSetSelector = dataSetSelector;
    this.parentContainer = parentContainer;
    this.defaultActive = defaultActive;
    this.dataCloseSelector = dataCloseSelector;
    this.listener = listener;
    this.toggle = toggle;
    this.leaveDelay = leaveDelay;
    this.multiple = multiple;
    this.debounceDelay = debounceDelay;
    this.resetTimeout = null;
    this.onClose = onClose;
    this.onActivate = onActivate;
    this.onComplete = onComplete;
    this.onDeactivate = onDeactivate;
    this.deactivateOnClickOutside = deactivateOnClickOutside;
    this.forceReactivation = forceReactivation;
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleDataSetMouseEnter = this.handleDataSetMouseEnter.bind(this);
    this.handleDataSetMouseLeave = this.handleDataSetMouseLeave.bind(this);
    this.handleDataSetClick = this.handleDataSetClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handlePjaxSwitch = this.handlePjaxSwitch.bind(this);
    this.initialize();
    this.reset();
  }
  removeBrackets(str) {
    return str.replace(/[\[\]]+/g, "");
  }
  getValueFromDataSet(selector) {
    return selector.getAttribute(this.removeBrackets(this.dataSetSelector));
  }
  initialize() {
    this.container = toElement(this.parentContainer);
    this.dataSets = this.container ? this.container.querySelectorAll(this.dataSetSelector) : document.querySelectorAll(this.dataSetSelector);
    this.dataGets = this.container ? this.container.querySelectorAll(this.dataGetSelector) : document.querySelectorAll(this.dataGetSelector);
    this.closeButtons = this.container ? this.container.querySelectorAll(this.dataCloseSelector) : document.querySelectorAll(this.dataCloseSelector);
    this.addEventListeners();
  }
  reset() {
    this.deactivateItems();
    setTimeout(() => {
      this.activateDefault();
    }, 300);
    if (!this.container)
      return;
    this.container.dataset.activeValue = "";
    if (this.container.dataset.state == "active" && this.container.dataset.activeValue == "") {
      this.container.dataset.state = "leave";
      setTimeout(() => {
        if (this.container.dataset.activeValue == "") {
          this.container.dataset.state = "";
        }
      }, 800);
    }
  }
  debounceReset() {
    if (this.resetTimeout) {
      clearTimeout(this.resetTimeout);
    }
    this.resetTimeout = setTimeout(() => {
      if (this.getActiveItems().length === 0 && this.getActiveDatasets().length === 0) {
        this.reset();
      }
    }, this.debounceDelay);
  }
  handleOutsideClick(event) {
    const clickedInsideDataSet = Array.from(this.dataSets).some((dataSet) => dataSet.contains(event.target));
    const clickedInsideDataGet = Array.from(this.dataGets).some((dataGet) => dataGet.contains(event.target));
    if (!clickedInsideDataSet && !clickedInsideDataGet) {
      this.reset();
    }
  }
  handleDataSetMouseEnter(event) {
    const value = this.getValueFromDataSet(event.currentTarget);
    this.activateItems(value);
  }
  handleDataSetMouseLeave(event) {
  }
  handleDataSetClick(event) {
    const value = this.getValueFromDataSet(event.currentTarget);
    if (value == "") {
      event.currentTarget.addActive();
      this.reset();
    } else {
      this.activateItems(value);
    }
  }
  handleCloseButtonClick(event) {
    this.reset();
  }
  handlePjaxSwitch(event) {
    this.reset();
  }
  addEventListeners() {
    if (this.deactivateOnClickOutside) {
      document.addEventListener("click", this.handleOutsideClick);
    }
    this.dataSets.forEach((dataSet) => {
      if (this.listener == "hover") {
        dataSet.addEventListener("mouseenter", this.handleDataSetMouseEnter);
        dataSet.addEventListener("mouseleave", this.handleDataSetMouseLeave);
        dataSet.addEventListener("touchstart", this.handleDataSetMouseEnter, { passive: true });
        dataSet.addEventListener("touchend", this.handleDataSetMouseLeave, { passive: true });
      } else {
        dataSet.addEventListener("click", this.handleDataSetClick);
      }
    });
    this.closeButtons.forEach((item) => {
      item.addEventListener("click", this.handleCloseButtonClick);
    });
    document.addEventListener("pjax:switch", this.handlePjaxSwitch);
  }
  removeEventListeners() {
    if (this.deactivateOnClickOutside) {
      document.removeEventListener("click", this.handleOutsideClick);
    }
    this.dataSets.forEach((dataSet) => {
      if (this.listener == "hover") {
        dataSet.removeEventListener("mouseenter", this.handleDataSetMouseEnter);
        dataSet.removeEventListener("mouseleave", this.handleDataSetMouseLeave);
        dataSet.removeEventListener("touchstart", this.handleDataSetMouseEnter);
        dataSet.removeEventListener("touchend", this.handleDataSetMouseLeave);
      } else {
        dataSet.removeEventListener("click", this.handleDataSetClick);
      }
    });
    this.closeButtons.forEach((item) => {
      item.removeEventListener("click", this.handleCloseButtonClick);
    });
    document.removeEventListener("pjax:switch", this.handlePjaxSwitch);
  }
  update() {
    this.dataSets = this.container ? this.container.querySelectorAll(this.dataSetSelector) : document.querySelectorAll(this.dataSetSelector);
    this.dataGets = this.container ? this.container.querySelectorAll(this.dataGetSelector) : document.querySelectorAll(this.dataGetSelector);
    this.closeButtons = this.container ? this.container.querySelectorAll(this.dataCloseSelector) : document.querySelectorAll(this.dataCloseSelector);
    this.removeEventListeners();
    this.addEventListeners();
  }
  getActiveItems() {
    return Array.from(this.dataGets).filter((detail) => {
      return detail.classList.contains("active");
    });
  }
  getActiveDatasets() {
    return Array.from(this.dataSets).filter((detail) => {
      return detail.classList.contains("active");
    });
  }
  findItems(value) {
    return Array.from(this.container.querySelectorAll(this.dataGetSelector)).filter((detail) => {
      return detail.getAttribute(this.removeBrackets(this.dataGetSelector)) === value;
    });
  }
  findDatasets(dataSet) {
    return Array.from(this.dataSets).filter((detail) => {
      return detail.getAttribute(this.removeBrackets(this.dataSetSelector)) === dataSet;
    });
  }
  activateDefault() {
    let defaultActiveElements = document.querySelectorAll(this.defaultActive);
    defaultActiveElements.forEach((element) => {
      element.classList.add("active");
    });
    if (this.container && defaultActiveElements.length > 0) {
      const defaultValue = this.getValueFromDataSet(defaultActiveElements[0]);
      this.container.dataset.activeValue = defaultValue;
    }
  }
  /*
          activateItems(value) {
              // Primeiro, desativa todos os itens e datasets para garantir que apenas o necessário fique ativo
              this.deactivateItems();
  
              let itemsToActivate = this.findItems(value);
              let datasetsToActivate = this.findDatasets(value);
  
              // Agora, ativa apenas os itens e datasets específicos encontrados
              itemsToActivate.forEach((item) => {
                  this.toggleActive(item, true); // Força a ativação
              });
  
              datasetsToActivate.forEach((dataset) => {
                  this.toggleActive(dataset, true); // Força a ativação
              });
  
              // Atualizações finais
              if (this.container) {
                  this.container.dataset.activeValue = value;
                  this.container.dataset.state = 'active';
              }
  
              this.onComplete();
          }
      */
  // activateItems(value) {
  //     let items = this.findItems(value);
  //     let datasets = this.findDatasets(value);
  //     if (this.toggle) {
  //         if (!this.multiple) {
  //             // Desativa todos os itens ativos exceto o clicado
  //             this.deactivateAllExcept(value);
  //         }
  //         datasets.forEach((dataset) => {
  //             if (dataset.getAttribute(this.removeBrackets(this.dataSetSelector)) === value) {
  //                 this.toggleActive(dataset);
  //             }
  //         });
  //         items.forEach((item) => {
  //             if (item.getAttribute(this.removeBrackets(this.dataGetSelector)) === value) {
  //                 this.toggleActive(item);
  //             }
  //         });
  //     } else {
  //         if (!this.multiple) {
  //             this.deactivateItems();
  //         }
  //         datasets.forEach((dataset) => dataset.addActive());
  //         items.forEach((item) => {
  //             item.addActive();
  //             this.onActivate(item);
  //         });
  //     }
  //     // Atualizações finais
  //     if (this.container) {
  //         this.container.dataset.activeValue = value;
  //         this.container.dataset.state = 'active';
  //     }
  //     // Verificar se após o toggle há algum item ativo
  //     this.debounceReset();
  //     this.onComplete();
  // }
  activateItems(value) {
    let items = this.findItems(value);
    let datasets = this.findDatasets(value);
    if (this.forceReactivation) {
      this.deactivateItems();
      setTimeout(() => {
        this.reactivateItems(value, items, datasets);
      }, this.leaveDelay);
    } else {
      this.reactivateItems(value, items, datasets);
    }
  }
  reactivateItems(value, items, datasets) {
    if (this.toggle) {
      if (!this.multiple) {
        this.deactivateAllExcept(value);
      }
      datasets.forEach((dataset) => {
        if (dataset.getAttribute(this.removeBrackets(this.dataSetSelector)) === value) {
          this.toggleActive(dataset, true);
        }
      });
      items.forEach((item) => {
        if (item.getAttribute(this.removeBrackets(this.dataGetSelector)) === value) {
          this.toggleActive(item, true);
        }
      });
    } else {
      if (!this.multiple) {
        this.deactivateItems();
      }
      datasets.forEach((dataset) => dataset.addActive());
      items.forEach((item) => {
        item.addActive();
        this.onActivate(item);
      });
    }
    if (this.container) {
      this.container.dataset.activeValue = value;
      this.container.dataset.state = "active";
    }
    this.debounceReset();
    this.onComplete();
  }
  deactivateAllExcept(value) {
    this.getActiveDatasets().forEach((dataset) => {
      if (dataset.getAttribute(this.removeBrackets(this.dataSetSelector)) !== value) {
        dataset.removeActive({ leaveDelay: this.leaveDelay });
        this.onDeactivate(dataset);
      }
    });
    this.getActiveItems().forEach((item) => {
      if (item.getAttribute(this.removeBrackets(this.dataGetSelector)) !== value) {
        item.removeActive({ leaveDelay: this.leaveDelay });
        this.onDeactivate(item);
      }
    });
  }
  toggleActive(item, forceActivate = false) {
    if (item.classList.contains("active") && !forceActivate) {
      this.onDeactivate(item);
      item.removeActive({ leaveDelay: this.leaveDelay });
    } else {
      item.addActive();
      this.onActivate(item);
    }
  }
  deactivateItems() {
    const activeList = this.getActiveItems();
    const activeDatasetList = this.getActiveDatasets();
    activeDatasetList.forEach((item) => item.removeActive({ leaveDelay: this.leaveDelay }));
    activeList.forEach((item) => {
      item.removeActive({ leaveDelay: this.leaveDelay });
      this.onDeactivate(item);
    });
    this.onClose();
  }
}
export {
  DataSetGet as D,
  toElement as t
};
