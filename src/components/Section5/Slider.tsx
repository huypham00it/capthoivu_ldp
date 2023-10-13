import { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Slider {...settings} className="uc_quote_slider">
        <div className="uc_quote_item" style={{ borderRadius: "0px" }}>
          <div className="uc_quote_info" style={{ borderRadius: "0px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor tortor turpis, vel semper massa hendrerit eu.
            </p>
            <div className="uc_author">
              <img
                className="uc_author_avatar"
                src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/1_1.jpg"
                height="48"
                width="48"
                alt=""
              />
              <div className="uc_author_info">
                <div className="uc_name">Alma K.</div>
                <div className="uc_company">New York</div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc_quote_item" style={{ borderRadius: "0px" }}>
          <div className="uc_quote_info" style={{ borderRadius: "0px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor tortor turpis, vel semper massa hendrerit eu.
            </p>
            <div className="uc_author">
              <img
                className="uc_author_avatar"
                src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/2.jpg"
                height="48"
                width="48"
                alt=""
              />
              <div className="uc_author_info">
                <div className="uc_name">Lucy Lue</div>
                <div className="uc_company">Chicago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc_quote_item" style={{ borderRadius: "0px" }}>
          <div className="uc_quote_info" style={{ borderRadius: "0px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor tortor turpis, vel semper massa hendrerit eu.
            </p>
            <div className="uc_author">
              <img
                className="uc_author_avatar"
                src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/3.jpg"
                height="48"
                width="48"
                alt=""
              />
              <div className="uc_author_info">
                <div className="uc_name">Rona J.</div>
                <div className="uc_company">San Francisco</div>
              </div>
            </div>
          </div>
        </div>
        <div className="uc_quote_item" style={{ borderRadius: "0px" }}>
          <div className="uc_quote_info" style={{ borderRadius: "0px" }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              porttitor tortor turpis, vel semper massa hendrerit eu.
            </p>
            <div className="uc_author">
              <img
                className="uc_author_avatar"
                src="http://bloxthemes.net/landing-pages/uploads/images/blox_page_builder/4.jpg"
                height="48"
                width="48"
                alt=""
              />
              <div className="uc_author_info">
                <div className="uc_name">Polly T.</div>
                <div className="uc_company">Colorado</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
