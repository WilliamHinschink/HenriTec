import React from 'react';

function Slider() {
  return (
    <div className="fh5co-slider">
      <div className="owl-carousel owl-carousel-fullwidth">
        <div className="item" style={{ backgroundImage: 'url(../images/slide_2.jpg)' }}>
          <div className="fh5co-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                    <h1 className="fh5co-lead" />
                    <h2 className="fh5co-sub-lead"><a href="#" /></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(images/slide_3.jpg)' }}>
          <div className="fh5co-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                    <h1 className="fh5co-lead" />
                    <h2 className="fh5co-sub-lead"><a href="#" /></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: 'url(images/slide_4.jpg)' }}>
          <div className="fh5co-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="fh5co-owl-text-wrap">
                  <div className="fh5co-owl-text text-center to-animate">
                    <h1 className="fh5co-lead" />
                    <h2 className="fh5co-sub-lead"><a href="#" /></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
