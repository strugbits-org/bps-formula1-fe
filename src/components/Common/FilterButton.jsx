import { collectionFilter } from "../../utils/Collections";
import { productColors } from "../../utils/Colors";

const FilterButton = () => {
  return (
    <div
      className="pos-relative z-10"
      data-aos="fadeIn .8s ease-in-out .2s, d:loop"
    >
      <div className="container-filter-products">
        <button className="btn-filter">
          <i className="icon-filter"></i>
        </button>
        <div className="wrapper-content" data-filter-area>
          <div className="wrapper-overflow">
            <form action="" className="form-filter wrapper-list-filter">
              <div className="container-list">
                <h3 className="filter-title">Collections</h3>
                <div className="list-filter">
                  {collectionFilter.slice(1).map((data, index) => {
                    const { name } = data;
                    return (
                      <div
                        key={index}
                        className="container-checkbox list-filter-item"
                      >
                        <label className="checkbox-box">
                          <input
                            type="checkbox"
                            required
                            name="legacy"
                            value="Legacy"
                          />
                          <span className="checkmark"></span>
                          <span className="filter-tag">{name}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="container-list">
                <h3 className="filter-title">Colors</h3>
                <div className="list-filter">
                  {productColors.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="container-checkbox list-filter-item"
                      >
                        <label className="checkbox-box">
                          <input
                            type="checkbox"
                            required
                            name="black"
                            value="Black"
                          />
                          <span className="checkmark"></span>
                          <span className="filter-tag">{data}</span>
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
