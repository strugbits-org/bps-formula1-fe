import { collectionFilter } from "../utils/Collections";
import { productColors } from "../utils/Colors";

const FilterButton = () => {
  return (
    <div
      class="pos-relative z-10"
      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
    >
      <div class="container-filter-products">
        <button class="btn-filter">
          <i class="icon-filter"></i>
        </button>
        <div class="wrapper-content" data-filter-area>
          <div class="wrapper-overflow">
            <form action="" class="form-filter wrapper-list-filter">
              <div class="container-list">
                <h3 class="filter-title">Collections</h3>
                <div class="list-filter">
                  {collectionFilter.slice(1).map((data, index) => {
                    const { name } = data;
                    return (
                      <div
                        key={index}
                        class="container-checkbox list-filter-item"
                      >
                        <label class="checkbox-box">
                          <input
                            type="checkbox"
                            required
                            name="legacy"
                            value="Legacy"
                          />
                          <span class="checkmark"></span>
                          <span class="filter-tag">{name}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="container-list">
                <h3 class="filter-title">Colors</h3>
                <div class="list-filter">
                  {productColors.map((data, index) => {
                    return (
                      <div
                        key={index}
                        class="container-checkbox list-filter-item"
                      >
                        <label class="checkbox-box">
                          <input
                            type="checkbox"
                            required
                            name="black"
                            value="Black"
                          />
                          <span class="checkmark"></span>
                          <span class="filter-tag">{data}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterButton;
