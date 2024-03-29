const FilterButton = () => {
  return (
    <div class="pos-relative z-5" data-aos="fadeIn .8s ease-in-out .2s, d:loop">
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
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="legacy"
                        value="Legacy"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Legacy</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="neon_house"
                        value="Neon House"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Neon House</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="classic_vegas"
                        value="Classic"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Classic</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="paddock"
                        value="Paddock"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Paddock</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="container-list">
                <h3 class="filter-title">Colors</h3>
                <div class="list-filter">
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="black"
                        value="Black"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Black</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="brown"
                        value="Brown"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Brown</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="gold"
                        value="Gold"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Gold</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="grey"
                        value="Grey"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Grey</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="pink"
                        value="Pink"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Pink</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input type="checkbox" required name="red" value="Red" />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Red</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="white"
                        value="White"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">White</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="yellow"
                        value="Yellow"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Yellow</span>
                    </label>
                  </div>
                  <div class="container-checkbox list-filter-item">
                    <label class="checkbox-box">
                      <input
                        type="checkbox"
                        required
                        name="multicolor"
                        value="Multicolor"
                      />
                      <span class="checkmark"></span>
                      <span class="filter-tag">Multicolor</span>
                    </label>
                  </div>
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
