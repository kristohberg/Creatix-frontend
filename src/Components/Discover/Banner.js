import React from "react";
import PropTypes from "prop-types";

function BannerText({ mainText, subText, bannerStyle }) {
  return (
    <div
      className={`cell small-12 medium-12 large-6 padding-vertical-large ${bannerStyle}`}
    >
      <h2 className="h2">{mainText}</h2>
      <h4 className="h4">{subText}</h4>
    </div>
  );
}

BannerText.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  bannerStyle: PropTypes.string.isRequired
};

function Banner({ bannerStyle, id, leftPos, mainText, subText, element }) {
  return (
    <div className="grid-x fat-banner" id={id}>
      {leftPos && (
        <BannerText
          mainText={mainText}
          subText={subText}
          bannerStyle={bannerStyle}
        />
      )}
      <div className="cell small-12 medium-12 large-6 vertical-padding-s gray">
        {element}
      </div>
      {!leftPos && (
        <BannerText
          mainText={mainText}
          subText={subText}
          bannerStyle={bannerStyle}
        />
      )}
    </div>
  );
}

Banner.defaultProps = {
  bannerStyle: "",
  element: null,
  leftPos: true
};

Banner.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  bannerStyle: PropTypes.string,
  id: PropTypes.string.isRequired,
  leftPos: PropTypes.bool,
  element: PropTypes.element
};

export default Banner;
