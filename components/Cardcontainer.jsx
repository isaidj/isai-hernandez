import React from "react";
import PropTypes from "prop-types";

export const Cardcontainer = ({ img }) => {
  return (
    <div className="card mb-3  relative">
      <img
        src={img.urls.regular}
        className="rounded-2xl cursor-pointer"
        alt="..."
      />
      {/* <div className="card-body absolute bottom-0 w-full bg-gray-950 bg-opacity-10 backdrop-blur-lg">
        <h5 className="text-muted">{img.alt_description.toUpperCase()}</h5>
      </div> */}
    </div>
  );
};

Cardcontainer.propTypes = {
  img: PropTypes.string,
};

export default Cardcontainer;
