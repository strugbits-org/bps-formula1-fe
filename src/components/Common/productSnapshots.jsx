import RenderImage from "@/utils/RenderImage";

const ProductSnapshots = ({ data }) => {
  return (
    <section className="products-snapshots pt-lg-355 pt-tablet-55 pt-phone-35">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2
              className="fs--30 fs-mobile-20 text-uppercase text-center white-1 mb-35 split-words"
              data-aos="d:loop"
            >
              Snapshots
            </h2>
            <div className="module-snapshots-gallery-100 module-snapshots-gallery">
              <div className="module-column" data-aos="d:loop">
                <div className="container-img">
                  <img
                    style={{ maxHeight: "80rem" }}
                    src={RenderImage(data[0].src)}
                    data-preload
                    className="media"
                    alt="pro-product"
                  />
                </div>
              </div>
            </div>
            <div className="module-snapshots-gallery-50 module-snapshots-gallery">
              {data &&
                data.map((data, index) => {
                  const { src } = data;
                  return (
                    <div
                      key={index}
                      className="module-column"
                      data-aos="d:loop"
                    >
                      <div className="container-img">
                        <img
                          src={RenderImage(src)}
                          data-preload
                          className="media"
                          alt="product-njk"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSnapshots;
