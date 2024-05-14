import { useEffect, useState } from "react";

const FilterButton = ({ collections, colors, handleFilterChange }) => {
  const [collectionsArray, setCollectionsArray] = useState([]);
  const [colorsArray, setColorsArray] = useState([]);

  const handleCollectionChange = (id) => {
    const arr = collectionsArray.map(item => item._id === id ? { ...item, checked: !item.checked } : item);
    setCollectionsArray(arr);

    const _colors = colorsArray.filter((x) => x.checked).map((x) => x.name);
    const _collections = arr.filter((x) => x.checked).map((x) => x._id);
    handleFilterChange(_collections, _colors);
  };
  const handleColorChange = (name) => {
    const arr = colorsArray.map(item => item.name === name ? { ...item, checked: !item.checked } : item);
    setColorsArray(arr);

    const _colors = arr.filter((x) => x.checked).map((x) => x.name);
    const _collections = collectionsArray.filter((x) => x.checked).map((x) => x._id);
    handleFilterChange(_collections, _colors);
  };

  useEffect(() => {
    if (collections) setCollectionsArray(collections.map((x) => { return { ...x, checked: false } }));
    if (colors) setColorsArray(colors.map((x) => { return { name: x, checked: false } }));
  }, []);
  if (collections === undefined) return;
  return (
    <div
      className="pos-relative filterButtonIndex"
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
                  {collectionsArray.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="container-checkbox list-filter-item"
                      >
                        <label className="checkbox-box">
                          <input
                            type="checkbox"
                            required
                            checked={data.checked || false}
                            onChange={() => handleCollectionChange(data._id)}
                          />
                          <span className="checkmark"></span>
                          <span className="filter-tag">{data.collectionName}</span>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              {colors && (
                <div className="container-list">
                  <h3 className="filter-title">Colors</h3>
                  <div className="list-filter">
                    {colorsArray.map((color, index) => {
                      return (
                        <div
                          key={index}
                          className="container-checkbox list-filter-item"
                        >
                          <label className="checkbox-box">
                            <input
                              type="checkbox"
                              required
                              checked={color.checked || false}
                              onChange={() => handleColorChange(color.name)}
                            />
                            <span className="checkmark"></span>
                            <span className="filter-tag">{color.name}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FilterButton;
