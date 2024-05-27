import FilterButton from "./Common/FilterButton";

import ProductCard from "./Product/ProductCard";

const Search = ({
  collections,
  colors,
  searchedProducts,
  handleFilterChange,
}) => {
  return (
    <>
      <section className="search pt-lg-150 pb-95">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="container-title mb-30">
                <h1
                  className="fs--30 text-uppercase white-1 split-words"
                  data-aos="d:loop"
                >
                  Search result
                </h1>
                <FilterButton
                  collections={collections}
                  colors={colors}
                  handleFilterChange={handleFilterChange}
                />
              </div>
              <ul
                className="list-search grid-lg-20 grid-md-50 grid-50"
                data-aos="fadeIn .8s ease-in-out .2s, d:loop"
              >
                {searchedProducts.map((item, index) => {
                  const { product, f1Members, variantData } = item;

                  return (
                    <ProductCard
                      key={item._id}
                      product={product}
                      f1Members={f1Members}
                      variantData={variantData}
                      searchedProducts={searchedProducts[index]}

                      // getSelectedProductSnapShots={getSelectedProductSnapShots}
                      // productData={selectedProductData}
                      // setProductData={setSelectedProductData}
                      // setErrorMessageVisible={setErrorMessageVisible}
                      // setSuccessMessageVisible={setSuccessMessageVisible}
                      // productSnapshots={productSnapshots}
                      // productFilteredVariantData={productFilteredVariantData}
                      // selectedVariantData={selectedVariantData}
                      // setSelectedVariantData={setSelectedVariantData}
                      // handleImageChange={handleImageChange}
                      // selectedVariantIndex={selectedVariantIndex}
                      // setProductSnapshots={setProductSnapshots}
                      // setProductFilteredVariantData={
                      //   setProductFilteredVariantData
                      // }
                    />
                  );
                })}
                {searchedProducts.length === 0 && (
                  <h6
                    className="fs--40 text-center split-words white-1"
                    data-aos="d:loop"
                  >
                    No Products Found
                  </h6>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* {successMessageVisible && (
        <SuccessModal
          buttonLabel={"Ok"}
          message={"Product Successfully Added to Cart!"}
          setSuccessMessageVisible={setSuccessMessageVisible}
        />
      )}
      {errorMessageVisible && (
        <ErrorModal
          buttonLabel={"Try Again!"}
          message={"Something went wrong, please try again"}
          setErrorMessageVisible={setErrorMessageVisible}
        />
      )}
      <AddToCartModal
        productData={selectedProductData}
        setProductData={setSelectedProductData}
        setErrorMessageVisible={setErrorMessageVisible}
        setSuccessMessageVisible={setSuccessMessageVisible}
        productSnapshots={productSnapshots}
        productFilteredVariantData={productFilteredVariantData}
        selectedVariantData={selectedVariantData}
        setSelectedVariantData={setSelectedVariantData}
        handleImageChange={handleImageChange}
        selectedVariantIndex={selectedVariantIndex}
        setProductSnapshots={setProductSnapshots}
        setProductFilteredVariantData={setProductFilteredVariantData}
      /> */}
    </>
  );
};

export default Search;
