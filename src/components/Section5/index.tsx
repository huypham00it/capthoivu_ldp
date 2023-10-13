import React from "react";
import Slider from "./Slider";

const Section5: React.FC = () => {
  return (
    <div id="uc_grid_1_35458_row_5" className="uc-grid-row">
      <div
        id="uc_grid_1_35458_row_5_container_1"
        className="uc-grid-row-container"
      >
        <div
          id="uc_grid_1_35458_row_5_container_1_col_1"
          className="uc-grid-col uc-col-first uc-col-last uc-colsize-1_1"
        >
          <div className="uc-grid-col-inner">
            <div
              id="uc_grid_1_35458_row_5_container_1_col_1_addon_1"
              className="uc-grid-col-addon"
            >
              {/* start Title */}
              <div
                style={{
                  textAlign: "center",
                  paddingTop: "0px",
                  paddingBottom: "0px",
                }}
              >
                <span
                  className="uc-style-105295617208 uc-page-font-title"
                  style={{ lineHeight: "1em", color: "#ffffff" }}
                >
                  The People Say
                </span>
              </div>
              {/* end Title */}
            </div>
            <div
              id="uc_grid_1_35458_row_5_container_1_col_1_addon_2"
              className="uc-grid-col-addon"
              style={{ paddingTop: "0px", paddingBottom: "60px" }}
            >
              {/* start Lind Diamond Separator */}
              <div style={{ textAlign: "center" }}>
                <div
                  className="separator"
                  style={{ borderColor: "#997b4c", width: "100px" }}
                >
                  <div
                    className="sep_diamond"
                    style={{ backgroundColor: "#997b4c" }}
                  ></div>
                </div>
              </div>
              {/* end Lind Diamond Separator */}
            </div>
          </div>
        </div>
        <div className="uc-col-clear"></div>
      </div>
      <div
        id="uc_grid_1_35458_row_5_container_2"
        className="uc-grid-row-container"
      >
        <div
          id="uc_grid_1_35458_row_5_container_2_col_1"
          className="uc-grid-col uc-col-first uc-col-last uc-colsize-1_1"
        >
          <div className="uc-grid-col-inner">
            <div
              id="uc_grid_1_35458_row_5_container_2_col_1_addon_1"
              className="uc-grid-col-addon"
            >
              <Slider />
              {/* end Responsive Testimonial Carousel */}
            </div>
          </div>
        </div>
        <div className="uc-col-clear"></div>
      </div>
    </div>
  );
};

export default Section5;
