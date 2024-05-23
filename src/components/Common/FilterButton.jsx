import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FilterButton = ({ collections, categories, colors, handleFilterChange }) => {
  const router = useRouter();

  const [collectionsArray, setCollectionsArray] = useState([]);
  const [colorsArray, setColorsArray] = useState([]);
  const [categoriesArray, setCategoriesArray] = useState([]);

  const handleCategoryChange = (id) => {
    const _categories = categoriesArray.map(item => item._id === id ? { ...item, checked: !item.checked } : item);
    const updatedCategories = _categories.filter((x) => x.checked).map((x) => x._id);
    setCategoriesArray(_categories);
    handleFilterChange({ categories: updatedCategories });
  };

  const handleCollectionChange = (id) => {
    const _collections = collectionsArray.map(item => item._id === id ? { ...item, checked: !item.checked } : item);
    const updatedCollections = _collections.filter((x) => x.checked).map((x) => x._id);
    setCollectionsArray(_collections);
    handleFilterChange({ collections: updatedCollections });
  };

  const handleColorChange = (name) => {
    const _colors = colorsArray.map(item => item.name === name ? { ...item, checked: !item.checked } : item);
    const updatedColors = _colors.filter((x) => x.checked).map((x) => x.name);
    setColorsArray(_colors);
    handleFilterChange({ colors: updatedColors });
  };

  useEffect(() => {
    if (collections.length !== 0) setCollectionsArray(collections.map((x) => { return { ...x, checked: false } }));
    if (colors.length !== 0) setColorsArray(colors.map((x) => { return { name: x, checked: false } }));
    if (categories && categories.length !== 0) setCategoriesArray(categories.map((x) => { return { ...x, checked: false } }));
  }, [router, collections, categories, colors]);

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
              {(router.query.collection === undefined || router.query.collection === "all") && collections.length !== 0 && (
                <div className="container-list">
                  <h3 className="filter-title">Collections</h3>
                  <div className="list-filter">
                    {collectionsArray.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="container-checkbox list-filter-item"
                        >
                          <label className="checkbox-box pointer-default">
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
              )}
              {router.query.subCategory === undefined && categories && categories.length !== 0 && (
                <div className="container-list">
                  <h3 className="filter-title">Categories</h3>
                  <div className="list-filter">
                    {categoriesArray.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="container-checkbox list-filter-item"
                        >
                          <label className="checkbox-box pointer-default">
                            <input
                              type="checkbox"
                              required
                              checked={data.checked || false}
                              onChange={() => handleCategoryChange(data._id)}
                            />
                            <span className="checkmark"></span>
                            <span className="filter-tag">{data.name}</span>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {colors.length !== 0 && (
                <div className="container-list">
                  <h3 className="filter-title">Colors</h3>
                  <div className="list-filter">
                    {colorsArray.map((color, index) => {
                      return (
                        <div
                          key={index}
                          className="container-checkbox list-filter-item"
                        >
                          <label className="checkbox-box pointer-default">
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
