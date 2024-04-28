import React from "react";
import { useGlobalContext } from "../../Components/Context/context";
import { NavLink } from "react-router-dom";

const PageHeader = () => {
  
  const { title, subTitle, imagePageHeader } = useGlobalContext();

  return (
    <div
      className="container-fluid bg-primary py-5 bgHeader"
      style={{
        marginBottom: "50px",
        backgroundSize: "cover",
        background: `linear-gradient(rgb(16 16 16 / 62%), rgb(6 6 6 / 44%), rgb(6 6 6 / 44%)), url(${imagePageHeader}) center center no-repeat`,
      }}
    >
      <div className="row py-5">
        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-4 text-white animated zoomIn">{title}</h1>
          <React.Fragment>
            <NavLink to="/" className="h5 Head" style={{ color: "#fea622" }}>
              {subTitle}
            </NavLink>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
