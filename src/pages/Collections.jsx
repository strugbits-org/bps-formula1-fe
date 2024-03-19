import { Link } from "react-router-dom";
import collectionImage from "../images/gallery/img-09.jpg";
const CollectionData = [
  { name: "Legacy collection", image: collectionImage },
  { name: "Legacy collection", image: collectionImage },
  { name: "Legacy collection", image: collectionImage },
  { name: "Legacy collection", image: collectionImage },
];
const Collections = () => {
  return (
    <div id="main-transition">
      <div className="wrapper" id="pg-collections" data-scroll-container>
        <main>
          <section className="collections-intro pt-lg-170 pb-lg-90 pb-tablet-40 pb-phone-170">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <h2
                    className="fs--30 fs-mobile-20 text-uppercase text-center white-1 split-words"
                    data-aos="d:loop"
                  >
                    Collections LVGP
                  </h2>
                  <ul
                    className="list-other-collections grid-md-50 mt-30"
                    data-aos="d:loop"
                  >
                    {CollectionData.map((data, index) => {
                      const { name, image } = data;
                      return (
                        <li key={index} className="grid-item">
                          <Link
                            to="/collection-post"
                            className="collection-link large"
                          >
                            <h3 className="collection-title">{name}</h3>
                            <div className="container-img">
                              <img src={image} data-preload className="media" />
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Collections;
